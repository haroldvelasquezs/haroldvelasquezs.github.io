---
layout: post
title: Create a Compute for Azure ML with CUDA enabled
title_es: Crear un cómputo en Azure ML con CUDA habilitado
excerpt_es: Las instancias de cómputo en Azure ML Studio son estaciones de trabajo en la nube, de un solo propietario, preconfiguradas y personalizables para aplicaciones de aprendizaje automático. También permiten compartir archivos entre instancias.
#subtitle: An essential part of Resources Evaluation. GSLIB Cell Based Method.
tags: [Azure, CUDA]
bigimg: /img/per010rz.jpg
share-img: /img/abstract_bg_cuda.png.PNG
---

#### **What is a compute in Azure ML**
Compute instances in Azure ML Studio are single-owned cloud-based workstations used as a pre configured, optimized and fully customizable environment for ML applications. They also allow us to share files between instances and built manageable applications.

#### **How to create a compute in Azure ML**
Setting a compute instance is a first step prior to development. Typically for ML applications, we must ensure our compute has GPU in order to enable CUDA. The steps to create a compute instance are:
1. Create Azure ML Compute : name : Choose an option with GPU
2. Select from all options: Standard_NC8as_T4_v3 

The are several compute options in Azure ML Studio, the selected one has a reasonable price at 0.75/hr.
#### **What is CUDA and why do we need it?**
CUDA is a parallel computing platform and programming model created by NVIDIA used to speed up applications by harnessing the power of GPUs

#### **Do I have CUDA?**
CUDA is a standard feature in all NVIDIA GeForce, Quadro, and Tesla GPUs as well as NVIDIA GRID solutions, a comprehensive list of products with CUDA are found [here](https://developer.nvidia.com/cuda-gpus). The command `torch.cuda.is_available()` is a simple way to check if we have access to GPUs in our environment, it returns True if the system has the NVIDIA driver correctly installed.

#### **Setting up the environment**  
To create an environment within our compute, we run some steps in the Terminal. A common encountered issue while setting an environment with CUDA is the incompatibility between torch and torchvision packages; the pair `torch=2.0.0+cu118` and `torchvision=0.15.1` is our choice. After the installation of the previous packages, CUDA should be enabled in our environment.  


{% highlight python linenos %}
conda create -n myenv python==3.8.10
pip install cython
pip install torch==2.0.0+cu118 torchvision==0.15.1+cu118  --extra-index-url https://download.pytorch.org/whl/cu118

conda activate myenv
import torch
torch.cuda.is_available() 

pip install opencv-python
pip install azureml
pip install azureml.core
pip install azureml-dataset-runtime --upgrade

conda install pip
conda install ipykernel
python -m ipykernel install --user --name my_kernel --display-name "my_kernel_display"
conda list --explicit > spec.txt 
conda create --name myenv --file spec-file.txt 
{% endhighlight %}

This post showed how to create a compute in azure ML Studio, and do a basic set up for ML applications enabling CUDA in our environment.  

#### References
1. [Installing previous versions of pytorch](https://pytorch.org/get-started/previous-versions/)  
2. [CUDA-enabled GPUs](https://developer.nvidia.com/cuda-gpus)

<div data-lang="es" hidden>
<h4><strong>Qué es un cómputo en Azure ML</strong></h4>
<p>Las instancias de cómputo en Azure ML Studio son estaciones de trabajo en la nube, de un solo propietario, preconfiguradas, optimizadas y personalizables para aplicaciones de ML. También permiten compartir archivos entre instancias y construir aplicaciones gestionables.</p>
<h4><strong>Cómo crear un cómputo en Azure ML</strong></h4>
<p>Configurar una instancia de cómputo es el primer paso antes de desarrollar. En aplicaciones de ML hay que asegurar GPU para habilitar CUDA. Los pasos son:</p>
<ol>
<li>Crear Azure ML Compute: nombre: elegir una opción con GPU</li>
<li>Seleccionar entre las opciones: Standard_NC8as_T4_v3</li>
</ol>
<p>Hay varias opciones de cómputo en Azure ML Studio; la seleccionada tiene un precio razonable de 0.75/hr.</p>
<h4><strong>Qué es CUDA y para qué se necesita</strong></h4>
<p>CUDA es una plataforma de cómputo paralelo y un modelo de programación de NVIDIA para acelerar aplicaciones aprovechando GPUs.</p>
<h4><strong>¿Tengo CUDA?</strong></h4>
<p>CUDA es una característica estándar en GPUs NVIDIA GeForce, Quadro y Tesla, y en soluciones NVIDIA GRID. El listado de productos está <a href="https://developer.nvidia.com/cuda-gpus">aquí</a>. El comando <code>torch.cuda.is_available()</code> comprueba el acceso a GPUs: devuelve True si el driver NVIDIA está bien instalado.</p>
<h4><strong>Preparar el entorno</strong></h4>
<p>Para crear un entorno dentro del cómputo se ejecutan pasos en la Terminal. Un problema habitual al armar un entorno con CUDA es la incompatibilidad entre torch y torchvision; el par <code>torch=2.0.0+cu118</code> y <code>torchvision=0.15.1</code> es la elección. Tras instalar esos paquetes, CUDA debería quedar habilitado.</p>
{% highlight python linenos %}
conda create -n myenv python==3.8.10
pip install cython
pip install torch==2.0.0+cu118 torchvision==0.15.1+cu118  --extra-index-url https://download.pytorch.org/whl/cu118

conda activate myenv
import torch
torch.cuda.is_available() 

pip install opencv-python
pip install azureml
pip install azureml.core
pip install azureml-dataset-runtime --upgrade

conda install pip
conda install ipykernel
python -m ipykernel install --user --name my_kernel --display-name "my_kernel_display"
conda list --explicit > spec.txt 
conda create --name myenv --file spec-file.txt 
{% endhighlight %}
<p>Este post mostró cómo crear un cómputo en Azure ML Studio y hacer una configuración básica para ML habilitando CUDA en el entorno.</p>
<h4>Referencias</h4>
<ol>
<li><a href="https://pytorch.org/get-started/previous-versions/">Instalar versiones anteriores de pytorch</a></li>
<li><a href="https://developer.nvidia.com/cuda-gpus">GPUs con CUDA</a></li>
</ol>
</div>