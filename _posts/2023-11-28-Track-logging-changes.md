---
layout: post
title: Track logging changes
title_es: Seguimiento de cambios en el logging
excerpt_es: Los proyectos de exploración acumulan información a lo largo de los años. Los datos cambian por información nueva, recambio de personal y otros factores. Esos cambios deben justificarse y documentarse, con una base de datos sólida y profesionales que aporten detalle.
#subtitle: An essential part of Resources Evaluation. GSLIB Cell Based Method.
tags: [EDA]
bigimg: /img/per010rz.jpg
share-img: /img/abstract_bg_cuda.png.PNG
---

Exploration projects collect information over the years. The information changes due to incoming data, change of personnel, among other factors. Changes in the data must be justified and well documented, it requires a sound database and professionals to provide insightful details. A simple case is to understand the impact of new logged intervals between two consecutive years using tabular data. This post refers to these tables as prior and posterior. It presents some considerations to compare to year-to-date files of categorical logs. The prior is assumed as YTD-2021 and the posterior is YTD-2022. ID is the column of drillcores ID's. Domain is the categorical column of the interpretations. Below is an example of either the prior or posterior logging table. 

| ID | From | To | Domain |
| :--- | :---- | :--- | :--- |
| A0010 | 15.40 | 17.80 | A |

Additionally, a table with the drilling year and optionally sample type is required.

| ID | Year | Type |
| :--- |:--- | :--- |
| A10 | 2016 | DH |
| A11 | 2020 | DH |
| A12 | 2022 | DH |

The next steps prepare the files.

1. Delete leading and trailing blanks in drill core ID's
2. Use either lower or upper case in the ID columns
3. Filter out null Domain values in the prior and posterior.

Here, the join clause uses the set of keys  ID, start and end of the interval. After the joining, the interpretation from the prior remains in the column D_prior, and in D_post for the posterior interpretations. The steps below tag the intervals with the keywords: unchanged, changed and new on a column Tag.

1. Perform a prior left outer join posterior (table 1), and tag as unchanged to equal interpretations in D_prior and D_post. This accounts for logged intervals in the prior and posterior tables that remain unchanged.

2. On table 1, tag intervals where D_prior and D_post are different, with changed. This step accounts for the intervals logged in the prior file, different in the posterior. Differences come from reinterpreting the prior (at any previous year) or deleting prior interpretations (absent in posterior).

3. Perform a prior right outer join posterior (table 2). Tag as new to null values in the column D_prior, and filter out rows where the Tag column is null. This labels interpreted intervals in the posterior file that were inexistent (null) in the prior file.  This new data comes from the same drilling year of the posterior, or from interpreting old drilling (at any previous year) logged in the year of the posterior.

4. Concatenate the rows of table 1 and 2 into a batch table with the tagging. Add a drilling year and optionally sample type column to the batch by mapping the ID's.

| ID | From | To | D_prior | D_post | Tag | Year |
| :--- |:--- | :--- | :--- | :--- | :--- |
| A10 | 15.4 | 17.8 | B | A | changed | 2016 |
| A10 | 17.8 | 20.8 | A | A | unchanged | 2016 |
| A11 | 51.8 | 53.8 | C | B | changed | 2020 |
| A11 | 53.8 | 55.8 |  | C | new | 2020 |
| A12 | 37.8 | 40.8 |   | A | new | 2022 |

The tags: unchanged, changed and new summarizes the change of information.  The length variation suffices in some cases, however is not complete. New logging data results from targeting mineralized zones, the justification of drilling and reinterpretation must be consistent to the variation of metal content. Proceed to generate a table by splitting the intervals of the logging interval table and the assays table of the elements of interest. 

| ID | From' | To' | D_prior | D_post | Tag | Year | Grade |
| :--- |:--- | :--- | :--- | :--- | :--- | :--- | :--- |
| A10 | 15.5 | 16.9 | B | A | changed | 2016 | 0.30 |

Apply the next steps to the new split batch table.

-  (a) Generate the statistics by D_prior.

-  (b) Generate the statistics by D_prior of the batch where Tag is changed. This is discounted from the prior due to re-interpretations.

-  (c) Get the statistics by D_post where Tag is changed, Filtering out the rows where D_post is null. This is the additioned data in the posterior that comes from reinterpreted data of the prior. It does not account for deletion of data in the posterior.

-  (d) Get the statistics of the batch where Tag is new.

-  (e) Get the statistics by domain of the entire batch (less or equal than the year of the posterior file).

The relation a - b + c + d = e holds for the length.

<div data-lang="es" hidden>
<p>Los proyectos de exploración acumulan información a lo largo de los años. Los datos cambian por información nueva, recambio de personal y otros factores. Esos cambios deben justificarse y documentarse, con una base de datos sólida y profesionales que aporten detalle. Un caso simple es entender el impacto de nuevos intervalos logueados entre dos años consecutivos usando tablas. Este post las llama prior y posterior. Presenta consideraciones para comparar archivos year‑to‑date de logs categóricos. El prior se asume YTD‑2021 y el posterior YTD‑2022. ID es la columna de identificadores de sondajes. Domain es la columna categórica de interpretaciones. Abajo, un ejemplo de la tabla de logging prior o posterior.</p>
<table>
<thead><tr><th>ID</th><th>From</th><th>To</th><th>Domain</th></tr></thead>
<tbody><tr><td>A0010</td><td>15.40</td><td>17.80</td><td>A</td></tr></tbody>
</table>
<p>Además se requiere una tabla con el año de perforación y, de forma opcional, el tipo de muestra.</p>
<table>
<thead><tr><th>ID</th><th>Year</th><th>Type</th></tr></thead>
<tbody>
<tr><td>A10</td><td>2016</td><td>DH</td></tr>
<tr><td>A11</td><td>2020</td><td>DH</td></tr>
<tr><td>A12</td><td>2022</td><td>DH</td></tr>
</tbody>
</table>
<p>Los siguientes pasos preparan los archivos.</p>
<ol>
<li>Eliminar blancos al inicio y al final de los ID de testigo.</li>
<li>Usar mayúsculas o minúsculas de forma consistente en las columnas ID.</li>
<li>Filtrar valores nulos de Domain en prior y posterior.</li>
</ol>
<p>El join usa el conjunto de llaves ID, inicio y fin del intervalo. Tras el cruce, la interpretación del prior queda en D_prior y la del posterior en D_post. Los pasos siguientes etiquetan intervalos con unchanged, changed y new en la columna Tag.</p>
<ol>
<li>Left outer join de prior con posterior (tabla 1) y etiquetar como unchanged las interpretaciones iguales en D_prior y D_post. Cubre intervalos logueados en ambas tablas que no cambiaron.</li>
<li>En la tabla 1, etiquetar como changed donde D_prior y D_post difieren. Cubre intervalos del prior distintos en el posterior: reinterpretación o eliminación (ausentes en el posterior).</li>
<li>Right outer join de prior con posterior (tabla 2). Etiquetar como new los nulos en D_prior y filtrar filas con Tag nulo. Marca intervalos interpretados en el posterior que no existían en el prior. Esa data nueva viene del mismo año de perforación del posterior, o de interpretar sondajes antiguos en el año del posterior.</li>
<li>Concatenar las filas de las tablas 1 y 2 en una tabla batch con el etiquetado. Añadir año de perforación y, opcionalmente, tipo de muestra mapeando los ID.</li>
</ol>
<table>
<thead><tr><th>ID</th><th>From</th><th>To</th><th>D_prior</th><th>D_post</th><th>Tag</th><th>Year</th></tr></thead>
<tbody>
<tr><td>A10</td><td>15.4</td><td>17.8</td><td>B</td><td>A</td><td>changed</td><td>2016</td></tr>
<tr><td>A10</td><td>17.8</td><td>20.8</td><td>A</td><td>A</td><td>unchanged</td><td>2016</td></tr>
<tr><td>A11</td><td>51.8</td><td>53.8</td><td>C</td><td>B</td><td>changed</td><td>2020</td></tr>
<tr><td>A11</td><td>53.8</td><td>55.8</td><td></td><td>C</td><td>new</td><td>2020</td></tr>
<tr><td>A12</td><td>37.8</td><td>40.8</td><td></td><td>A</td><td>new</td><td>2022</td></tr>
</tbody>
</table>
<p>Las etiquetas unchanged, changed y new resumen el cambio de información. La variación de longitud a veces basta, pero no es completa. El logging nuevo suele apuntar a zonas mineralizadas; la justificación de la perforación y la reinterpretación debe ser consistente con la variación de contenido metálico. Luego se genera una tabla partiendo los intervalos de logging y la tabla de ensayos de los elementos de interés.</p>
<table>
<thead><tr><th>ID</th><th>From'</th><th>To'</th><th>D_prior</th><th>D_post</th><th>Tag</th><th>Year</th><th>Grade</th></tr></thead>
<tbody>
<tr><td>A10</td><td>15.5</td><td>16.9</td><td>B</td><td>A</td><td>changed</td><td>2016</td><td>0.30</td></tr>
</tbody>
</table>
<p>Aplicar los siguientes pasos a la tabla partida:</p>
<ul>
<li>(a) Estadísticos por D_prior.</li>
<li>(b) Estadísticos por D_prior del batch donde Tag es changed. Se descuenta del prior por reinterpretaciones.</li>
<li>(c) Estadísticos por D_post donde Tag es changed, filtrando D_post nulo. Es la data añadida en el posterior que viene de reinterpretar el prior. No contabiliza borrados en el posterior.</li>
<li>(d) Estadísticos del batch donde Tag es new.</li>
<li>(e) Estadísticos por dominio de todo el batch (menor o igual al año del archivo posterior).</li>
</ul>
<p>La relación a − b + c + d = e se cumple para la longitud.</p>
</div>