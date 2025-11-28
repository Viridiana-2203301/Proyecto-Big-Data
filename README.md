# Clasificador de Noticias con Teachable Machine
# Descripción del Proyecto

Este proyecto consiste en una aplicación web que clasifica imágenes relacionadas con notas periodísticas utilizando un modelo entrenado en Teachable Machine. El sistema identifica la categoría de una nota con base en la imagen proporcionada y asigna una de las siguientes clases:

* Seguridad

* Estado

* Local

* Clima

* Educación

* Política

* Cultura

El modelo fue diseñado para apoyar procesos editoriales dentro del área de redacción del Diario Tijuana, facilitando la organización rápida de imágenes periodísticas.

# Modelo Utilizado

El proyecto utiliza un modelo de visión por computadora generado con Google Teachable Machine. Este modelo fue entrenado con un conjunto de imágenes reales del entorno periodístico.

Cada clase representa un tipo de noticia, y el modelo aprende patrones visuales comunes para diferenciarlas. La aplicación carga el modelo en el navegador mediante TensorFlow.js y clasifica cualquier imagen suministrada por el usuario a través de la interfaz web.

# Instalación y Ejecución del Proyecto

Para ejecutar la aplicación se recomienda utilizar la extensión Live Server de Visual Studio Code.

# Requisitos previos

* Tener instalado Visual Studio Code.

* Instalar la extensión Live Server (Ritwick Dey).

* Tener todos los archivos del proyecto en una misma carpeta.

# Pasos para ejecutar con Live Server

* Abrir Visual Studio Code.

* Seleccionar la carpeta del proyecto desde "File" > "Open Folder".

* Abrir el archivo index.html o basic.html.

* Dar clic derecho sobre el archivo y seleccionar "Open with Live Server".

* El navegador abrirá automáticamente la aplicación en una dirección local 

* La aplicación cargará el modelo de Teachable Machine y permitirá subir imágenes para clasificarlas.

# Uso de la Aplicación

* Presionar el botón para subir una imagen.

* Esperar a que el modelo procese la imagen.

* Consultar la categoría resultante mostrada en pantalla.

* Repetir el proceso con tantas imágenes como se desee.

# Problemática Social Abordada

En redacciones periodísticas es común manejar grandes volúmenes de imágenes. Clasificarlas manualmente consume tiempo y puede generar errores en la organización del contenido. Esta situación influye en la rapidez con que se publican las noticias y en la eficiencia del equipo de trabajo.

# Justificación del Impacto

El uso de un clasificador automático reduce tiempos de búsqueda y organización de material visual. Esto permite que los periodistas y editores trabajen de manera más eficiente, aceleren la producción de notas y disminuyan la carga operativa en tareas repetitivas. Además, contribuye a que la información se publique de forma más ordenada y coherente.

# Aplicaciones Prácticas

* Clasificación automática del banco de imágenes en un medio de comunicación.

* Apoyo a reporteros para identificar rápidamente la categoría de una nota desde campo.

* Integración con sistemas de gestión de contenido (CMS) para etiquetado automatizado.

* Prototipo para sistemas más avanzados de análisis periodístico basado en IA.
