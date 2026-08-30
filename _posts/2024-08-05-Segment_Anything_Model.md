---
layout: post
title: Rock Particles Shape Analysis
title_es: Análisis de forma de partículas de roca
excerpt_es: El análisis de imagen extrae información para cuantificar formas, enumerar estructuras y caracterizar la geometría de objetos. Las partículas de roca resultan de erosión, tronadura, conminución y otros procesos. Su geometría codifica información sobre el proceso que las generó.
#subtitle: An essential part of Resources Evaluation. GSLIB Cell Based Method.
tags: [Image Segmentation]
bigimg: /img/per010rz.jpg
share-img: /img/abstract_bg_cuda.png.PNG
---

Image analysis extracts feature information to quantify shapes, enumerate object's structures and characterize shape of structures. 
Rock particles result from erosion, blasting, comminution, and others. The geometric characteristics of these particles encode information about their generating process. The mineralogy
influences mechanical properties and determines the shape and size of individual particles. Digital images are first partitioned into constituents prior analysis. 

The applicability of segmentation models such as Segment Anything, Mask R-CNN, and DeepLab for rock particle analysis depends on the requirements of the task, flexibility, customization, resource efficiency.
The example shows a result on an image with numerous clasts. The coloured masks partition the image. The required self-descriptve metrics are calculated for the red contours to derive shape descriptors. 

<div style="display: flex; justify-content: space-between;">
  <div style="text-align: center; margin-right: 10px;">
    <img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_01.JPG?raw=true" alt="Image 1" style="width: 210px;">
  </div>
  <div style="text-align: center; margin-right: 10px;">
    <img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_02.JPG?raw=true" alt="Image 2" style="width: 210px;">
  </div>
  <div style="text-align: center;">
    <img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_03.JPG?raw=true" alt="Image 2" style="width: 210px;">
  </div>
</div>


The table shows the metrics of the constituents obtained from masks' outlines. These include solidity, sphericity, convexity, compactness, circularity, etc. Solidity measures the density of an object, 
a circle has a solidity of 1. Sphericity measures the similarity of an object to a sphere, a circle has a value of 1. Convexity measures the similartiy of an object to a convex shape, a convex object has a value of 1. 
Compactness measures how  tightly an object's  area is distributed around its centroid, a circle has a value of 1. Circularity or roundness differs to compactness as it excludes local irregularities by
considering the convex perimiter of the object.

A sensitive and common feature come from the visible light spectrum. This may be of some use in controlled environments. The example summarizes the most characteristic colors of the clasts, adjusted by their
proportion.

<img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_04.JPG?raw=true" style="width: 100%; height: auto;">

<div data-lang="es" hidden>
<p>El análisis de imagen extrae información para cuantificar formas, enumerar estructuras y caracterizar la geometría de objetos. Las partículas de roca resultan de erosión, tronadura, conminución y otros procesos. Sus características geométricas codifican información sobre el proceso que las generó. La mineralogía influye en las propiedades mecánicas y determina forma y tamaño de cada partícula. Las imágenes digitales se particionan en constituyentes antes del análisis.</p>
<p>La aplicabilidad de modelos de segmentación como Segment Anything, Mask R-CNN y DeepLab para partículas de roca depende de los requisitos de la tarea, la flexibilidad, la personalización y la eficiencia de recursos. El ejemplo muestra un resultado en una imagen con numerosos clastos. Las máscaras de color particionan la imagen. Sobre los contornos rojos se calculan métricas auto‑descriptivas para derivar descriptores de forma.</p>
<div style="display: flex; justify-content: space-between;">
  <div style="text-align: center; margin-right: 10px;">
    <img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_01.JPG?raw=true" alt="Imagen 1" style="width: 210px;">
  </div>
  <div style="text-align: center; margin-right: 10px;">
    <img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_02.JPG?raw=true" alt="Imagen 2" style="width: 210px;">
  </div>
  <div style="text-align: center;">
    <img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_03.JPG?raw=true" alt="Imagen 3" style="width: 210px;">
  </div>
</div>
<p>La tabla muestra métricas de los constituyentes obtenidas de los contornos de las máscaras: solidez, esfericidad, convexidad, compacidad, circularidad, etc. La solidez mide la densidad del objeto; un círculo tiene solidez 1. La esfericidad mide la semejanza a una esfera; un círculo vale 1. La convexidad mide la semejanza a una forma convexa; un objeto convexo vale 1. La compacidad mide qué tan apretada está el área alrededor del centroide; un círculo vale 1. La circularidad o redondez se diferencia de la compacidad porque excluye irregularidades locales al considerar el perímetro convexo.</p>
<p>Una característica sensible y habitual viene del espectro de luz visible. Puede ser útil en ambientes controlados. El ejemplo resume los colores más característicos de los clastos, ajustados por su proporción.</p>
<img src="https://github.com/numpattern/numpattern.github.io/blob/main/img/rockparticle_04.JPG?raw=true" style="width: 100%; height: auto;">
</div>