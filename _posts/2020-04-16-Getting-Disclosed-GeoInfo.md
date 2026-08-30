---
layout: post
title: Handling Geological Data
title_es: Manejo de datos geológicos
excerpt_es: Hay información geológica disponible en línea, descargable por ejemplo desde publicaciones de Earth Resources del gobierno de Victoria y conjuntos geoespaciales del USGS. Esos datos llegan en formatos diversos (GIS, binario, texto, .dbf, .mdb, .hdf) y hay que conocerlos para analizarlos.
#subtitle: From Beginning
bigimg: /img/per010rz.jpg
tags: [Database, GIS, geopandas, Access]
share-img: "https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/bigdataspace.jpg"
---


Geological information is available online, some can be downloaded from:

- [Victoria State Government - Earth Resources publications](http://earthresources.efirst.com.au/product.asp?pID=1016&cID=12)
- [USGS GeoSpatial Datasets](https://mrdata.usgs.gov/catalog/science.php?thcode=2&term=474)

Usually, these datasets come in a variety of formats such as GIS, binary, text, .dbf, .mdb, .hdf, among others. We must be familiarized with them to proceed with the analysis.

### Open .dbf files in Python using geopandas
______

Now we will see first how to import .dbf files. Note that the dBASE table (.dbf) file is one of the three files required for a valid ESRI Shapefile. One option to import .dbf files is through [geopandas](https://geopandas.org/) that can be installed with `conda install geopandas` . Geopandas may cause conflicting issues in some conda environments, it is advisable to retain in its own environment. Optionally you can run the code snippet below. Geopandas installation requires descartes package, so you may need to install it as well. 

```python
conda create -n yourenv
conda activate yourenv
conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas
```

Once geopandas is installed, the WaterLab data is imported as:

```python
import geopandas
df = geopandas.read_file('WaterLab.dbf')
```

The column named geometry in geopandas tables stores shapes. WaterLab data did not present content in the geometry column.

![Result](https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/Geopandas_table.PNG){: .center-block :}


#### Plot shapes and tiles with geopandas

Geopandas comes with its own example database, the snippet allows to plot geo-referenced geometries.

```python
import geopandas
df = geopandas.read_file(geopandas.datasets.get_path('nybb'))
_ = df.plot(alpha=0.5, edgecolor='k')
```
![Result](https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/gdp_plot.png){: .center-block :}


The package contextily retrieves online tile maps that can be embeded in the plots. Use the conda-forge channel to install contextily and geopandas, and then `pip install descartes` in a conda environment with Python 3.7. 

![Contextily](https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/Contextily.PNG){: .center-block :}

### Open Micrsoft Access Database files (mdb, accdb)
___

First, a connection must be established to access database files. The ODBC (Open Database Connection) is an API to access any database. Further details to set the connection can be found [here](https://github.com/mkleehammer/pyodbc/wiki/Connecting-to-Microsoft-Access). The next code checks the installed ODBC drivers in our computer.
```python
import pyodbc
[x for x in pyodbc.drivers() if x.startswith('Microsoft Access Driver')]
```

An empty list means the lack of any compatible Access Database Driver on your machine, despite having Office installed. For that, The Microsoft Access Database Engine 2010 Redistributable can be downloaded from Microsoft webpage, after installationan ODBC driver will be available. Ensure to install the correct architecture compatible for your machine and Python. In my case, it was 64bits for Office and Python. 

Some erros such as Unable to open registry key Temporary can be encountered, and troubleshooting can be found [here](https://stackoverflow.com/questions/26244425/general-error-unable-to-open-registry-key-temporary-volatile-from-access). Common mistakes are related to user permissions to the path of the Access file. Relocating the Access Database file to another location such as the working directory may help. Once the correct driver is installed, use the following snippet to establish the connection and perform a SQL query. 

```python
import pyodbc
import pandas as pd
conn_str = (
 r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};' #Driver for 64b mdb
 r'DBQ=path\to\your\file\Geochemistry.mdb;')
conn = pyodbc.connect(conn_str)

SQL='SELECT * FROM GSITEASSAY'
df = pd.read_sql(SQL, conn)
conn.close()
```

Below is the information in the database. 
![Dataframe](https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/post002_dataframe.PNG){: .center-block :}


[.](https://pbpython.com/pandas_dtypes.html)

<div data-lang="es" hidden>
<p>Hay información geológica disponible en línea. Parte puede descargarse de:</p>
<ul>
<li><a href="http://earthresources.efirst.com.au/product.asp?pID=1016&amp;cID=12">Victoria State Government, Earth Resources publications</a></li>
<li><a href="https://mrdata.usgs.gov/catalog/science.php?thcode=2&amp;term=474">USGS GeoSpatial Datasets</a></li>
</ul>
<p>Esos conjuntos suelen llegar en formatos diversos: GIS, binario, texto, .dbf, .mdb, .hdf, entre otros. Hay que conocerlos para continuar el análisis.</p>
<h3>Abrir archivos .dbf en Python con geopandas</h3>
<p>Primero, cómo importar .dbf. La tabla dBASE (.dbf) es uno de los tres archivos de un Shapefile ESRI válido. Una opción es <a href="https://geopandas.org/">geopandas</a>, instalable con <code>conda install geopandas</code>. Geopandas puede generar conflictos en algunos entornos conda; conviene dejarlo en el suyo. Opcionalmente, el snippet de abajo. La instalación de geopandas requiere el paquete descartes.</p>
<pre><code>conda create -n yourenv
conda activate yourenv
conda config --env --add channels conda-forge
conda config --env --set channel_priority strict
conda install python=3 geopandas</code></pre>
<p>Una vez instalado geopandas, los datos WaterLab se importan así:</p>
<pre><code>import geopandas
df = geopandas.read_file('WaterLab.dbf')</code></pre>
<p>La columna geometry en las tablas de geopandas almacena formas. WaterLab no tenía contenido en esa columna.</p>
<p><img src="https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/Geopandas_table.PNG" alt="Resultado"></p>
<h4>Graficar formas y teselas con geopandas</h4>
<p>Geopandas trae su propia base de ejemplo; el snippet permite graficar geometrías georreferenciadas.</p>
<pre><code>import geopandas
df = geopandas.read_file(geopandas.datasets.get_path('nybb'))
_ = df.plot(alpha=0.5, edgecolor='k')</code></pre>
<p><img src="https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/gdp_plot.png" alt="Resultado"></p>
<p>El paquete contextily recupera mapas de teselas en línea que se pueden incrustar en los gráficos. Use el canal conda-forge para instalar contextily y geopandas, y luego <code>pip install descartes</code> en un entorno conda con Python 3.7.</p>
<p><img src="https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/Contextily.PNG" alt="Contextily"></p>
<h3>Abrir bases Microsoft Access (mdb, accdb)</h3>
<p>Primero hay que establecer una conexión. ODBC (Open Database Connectivity) es una API para acceder a cualquier base. Más detalle para armar la conexión está <a href="https://github.com/mkleehammer/pyodbc/wiki/Connecting-to-Microsoft-Access">aquí</a>. El código siguiente lista los drivers ODBC instalados.</p>
<pre><code>import pyodbc
[x for x in pyodbc.drivers() if x.startswith('Microsoft Access Driver')]</code></pre>
<p>Una lista vacía significa que no hay driver compatible de Access, aunque Office esté instalado. En ese caso se puede descargar Microsoft Access Database Engine 2010 Redistributable; tras instalarlo habrá un driver ODBC. Instale la arquitectura correcta para la máquina y para Python. En este caso, 64 bits para Office y Python.</p>
<p>Pueden aparecer errores del tipo Unable to open registry key Temporary; el troubleshooting está <a href="https://stackoverflow.com/questions/26244425/general-error-unable-to-open-registry-key-temporary-volatile-from-access">aquí</a>. Errores habituales tienen que ver con permisos de usuario sobre la ruta del archivo Access. Mover la base al directorio de trabajo puede ayudar. Con el driver correcto, el snippet siguiente establece la conexión y ejecuta una consulta SQL.</p>
<pre><code>import pyodbc
import pandas as pd
conn_str = (
 r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};'
 r'DBQ=path\to\your\file\Geochemistry.mdb;')
conn = pyodbc.connect(conn_str)

SQL='SELECT * FROM GSITEASSAY'
df = pd.read_sql(SQL, conn)
conn.close()</code></pre>
<p>Abajo, la información en la base.</p>
<p><img src="https://raw.githubusercontent.com/haroldvelasquez/haroldvelasquez.github.io/master/img/post002_dataframe.PNG" alt="Dataframe"></p>
</div>
