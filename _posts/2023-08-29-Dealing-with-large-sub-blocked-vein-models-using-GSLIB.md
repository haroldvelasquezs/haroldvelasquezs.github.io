---
layout: post
title: Dealing with large sub-blocked vein models
title_es: Modelos de vetas sub-bloqueadas de gran tamaño
excerpt_es: A veces hay que trabajar con modelos sub-bloqueados generados en un software que no está disponible, y solo se tiene acceso a GSLIB. Los programas de GSLIB usan grillas estructuradas no rotadas y escriben a disco. Aun así es posible simular casos reales sin esperas largas ni agotar el almacenamiento.
#subtitle: An essential part of Resources Evaluation. GSLIB Cell Based Method.
tags: [Modeling]
bigimg: /img/per010rz.jpg
share-img: /img/abstract_bg_flattening.PNG
---

Sometimes we deal with sub-blocked models generated with a software that is not available to us, and we have access only to GSLIB. When using GSLIB's programs, we must consider: (1) they use structured unrotated grids, and (2) write to disk. This may not discourage to practitioners as it's fairly possible to simulate using conventional GSLIB routines for real cases without falling in long waits or depleting our storage. Here, I summarize practical steps to deal with large sub-blocked narrow vein models to quickly simulate and up-scale to original parent cells. 

### **Task**
Use GSLIB to generate a simulated model, and average up to the parent cells of a given irregularly sub-blocked model **BM**. Flatten composite points **cmp** prior estimation/simulation. The following issues were encountered:
- Our software may not handle the grid definition to import an irregular sub-blocked model
- The orientation of the model (e.g. narrow structure) may not be aligned with a major plane  (XY, YZ, XZ), this results in large size in disk due to a large GSLIB griddef
- Composite data consists of centroid coordinates (no survey, trace, top or bottom coordinates)

### **Data specifications**
- The composites and sub-blocked model are provided
- The grid definition was not rotated, this prevented us to do any rotation
- **BM** can be exported including XYZ coordinates of populated cells (do not consider unpopulated cells). Do not rely on any previous indexing
- **BM** is coded with the domain

### **Steps**
1. Flatten sub-blocked grid model by aligning to a principal axis  
	1.1 Regularize the sub-blocked model to **BM1**, using small cell sizes.  
	1.2 Flatten BM1 to BM1_ by projecting the grid cells along one axis (e.g. Y) to its orthogonal plane (e.g. XZ)  
	1.3 Create a dictionary **key2coord**  with **key**:( X-Z coordinate ), **value**: lowest  Ymn (or highest Ymx) of grouped X-Z, and use it to map Ymn to all BM1 cells. 
	1.4 Flatten BM1_:  Y_projected = Y - Ymn

2. Project composites using block model coordinates  
	2.1 Regularize **BM** to **BM2** using smallest cells for higher precision  
	2.2 Flatten **BM2** to BM2_ by projecting the grid cells along one axis (e.g. Y), to the perpendicular plane (e.g. XZ)  
	2.3 For **BM2**, obtain **key2coord2** with **key**:( X-Z coordinate ), **value**: lowest  Ymn (or highest Ymx) of grouped X-Z  
	2.4 Attach the closest XYZ coordinates from **BM2** to the composite points  
	2.5	Flatten the composites **cmp** to **cmp_**  by projecting to an axis, using **key2coord2** dictionary: Y_projected = Y-Ymn  

3. Create a GSLIB griddef that matches the **BM1_**
4. Impose all 1D-idx's (structured GSLIB griddef) to **BM1_**, and generate a keyout file
5. Simulate 
6. Unflatten **BM1_**  to **BM1** using **key2coord**, with the simulated values
7. Up-scale **BM1** 

### **Conclusions**
A large sub-blocked model of a narrow structure was used as reference domain to generate a simulated model and scale-up to match the original parent cells. The impact of the coordinate projection and precision must be understood and is case-specific. GSLIB programs can successfully used to simulate unstructured large grids.

### **References**
1. [A flexible sequential Gaussian simulation program: USGSIM. Computers & geosciences, 41, 208-216](https://www.sciencedirect.com/science/article/abs/pii/S0098300411002755)

<div data-lang="es">
<p>A veces hay que trabajar con modelos sub‑bloqueados generados en un software que no está disponible, y solo se tiene acceso a GSLIB. Al usar programas de GSLIB hay que considerar: (1) usan grillas estructuradas no rotadas, y (2) escriben a disco. Eso no debería desalentar: es posible simular casos reales con rutinas convencionales de GSLIB sin esperas largas ni agotar el almacenamiento. Aquí resumo pasos prácticos para modelos grandes de vetas angostas sub‑bloqueadas, simular con rapidez y subir de escala a las celdas padre originales.</p>
<h3><strong>Tarea</strong></h3>
<p>Usar GSLIB para generar un modelo simulado y promediar hasta las celdas padre de un modelo sub‑bloqueado irregular <strong>BM</strong>. Aplanar los composites <strong>cmp</strong> antes de estimar/simular. Se encontraron estos problemas:</p>
<ul>
<li>El software puede no manejar la definición de grilla para importar un modelo sub‑bloqueado irregular</li>
<li>La orientación del modelo (p. ej. una estructura angosta) puede no alinearse con un plano mayor (XY, YZ, XZ), lo que infla el tamaño en disco por un griddef GSLIB grande</li>
<li>Los composites consisten en coordenadas de centroide (sin survey, traza, top ni bottom)</li>
</ul>
<h3><strong>Especificaciones de los datos</strong></h3>
<ul>
<li>Se entregan los composites y el modelo sub‑bloqueado</li>
<li>La definición de grilla no estaba rotada; eso impidió rotar</li>
<li><strong>BM</strong> puede exportarse con coordenadas XYZ de celdas pobladas (no considerar despobladas). No confiar en indexación previa</li>
<li><strong>BM</strong> está codificado con el dominio</li>
</ul>
<h3><strong>Pasos</strong></h3>
<ol>
<li>Aplanar el modelo de grilla sub‑bloqueado alineándolo a un eje principal
  <ol>
    <li>Regularizar el modelo sub‑bloqueado a <strong>BM1</strong>, con celdas pequeñas</li>
    <li>Aplanar BM1 a BM1_ proyectando las celdas a lo largo de un eje (p. ej. Y) a su plano ortogonal (p. ej. XZ)</li>
    <li>Crear un diccionario <strong>key2coord</strong> con <strong>key</strong>:(coordenada X‑Z), <strong>value</strong>: Ymn más bajo (o Ymx más alto) del grupo X‑Z, y mapear Ymn a todas las celdas BM1</li>
    <li>Aplanar BM1_: Y_projected = Y − Ymn</li>
  </ol>
</li>
<li>Proyectar composites usando coordenadas del block model
  <ol>
    <li>Regularizar <strong>BM</strong> a <strong>BM2</strong> con las celdas más pequeñas para más precisión</li>
    <li>Aplanar <strong>BM2</strong> a BM2_ proyectando a lo largo de un eje (p. ej. Y) al plano perpendicular (p. ej. XZ)</li>
    <li>Para <strong>BM2</strong>, obtener <strong>key2coord2</strong> con <strong>key</strong>:(coordenada X‑Z), <strong>value</strong>: Ymn más bajo (o Ymx más alto) del grupo X‑Z</li>
    <li>Asignar a los composites las coordenadas XYZ más cercanas de <strong>BM2</strong></li>
    <li>Aplanar los composites <strong>cmp</strong> a <strong>cmp_</strong> proyectando a un eje, usando <strong>key2coord2</strong>: Y_projected = Y − Ymn</li>
  </ol>
</li>
<li>Crear un griddef GSLIB que coincida con <strong>BM1_</strong></li>
<li>Imponer todos los 1D‑idx (griddef GSLIB estructurado) a <strong>BM1_</strong> y generar un archivo keyout</li>
<li>Simular</li>
<li>Desaplanar <strong>BM1_</strong> a <strong>BM1</strong> usando <strong>key2coord</strong>, con los valores simulados</li>
<li>Subir de escala <strong>BM1</strong></li>
</ol>
<h3><strong>Conclusiones</strong></h3>
<p>Un modelo sub‑bloqueado grande de una estructura angosta se usó como dominio de referencia para generar un modelo simulado y escalarlo a las celdas padre originales. El impacto de la proyección de coordenadas y de la precisión debe entenderse y es específico de cada caso. Los programas GSLIB pueden usarse con éxito para simular grillas grandes no estructuradas.</p>
<h3><strong>Referencias</strong></h3>
<ol>
<li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0098300411002755">A flexible sequential Gaussian simulation program: USGSIM. Computers &amp; geosciences, 41, 208-216</a></li>
</ol>
</div>
