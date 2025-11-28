// URL del modelo de Teachable Machine (reemplaza con tu URL)
const modelURL = 'https://teachablemachine.withgoogle.com/models/8I6qPrShr/';

// Variables globales
let model;
let maxPredictions;

// Inicializar el modelo
async function initModel() {
    const modelURL = 'https://teachablemachine.withgoogle.com/models/8I6qPrShr/';
    const metadataURL = 'https://teachablemachine.withgoogle.com/models/8I6qPrShr/';
    
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    console.log('Modelo cargado correctamente');
}

// Configurar el área de arrastrar y soltar
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
const resultDiv = document.getElementById('result');

// Prevenir comportamientos por defecto
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Resaltar el área al arrastrar sobre ella
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
    dropArea.classList.add('highlight');
}

function unhighlight() {
    dropArea.classList.remove('highlight');
}

// Manejar archivos soltados
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
        handleFiles(files);
    }
}

// Manejar clic para seleccionar archivo
dropArea.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        handleFiles(fileInput.files);
    }
});

// Procesar archivos
function handleFiles(files) {
    const file = files[0];
    
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            
            // Clasificar la imagen
            classifyImage(imagePreview);
        };
        
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecciona un archivo de imagen válido.');
    }
}

// Clasificar la imagen y mostrar solo la categoría con mayor probabilidad
async function classifyImage(img) {
    resultDiv.textContent = 'Clasificando...';
    
    try {
        const prediction = await model.predict(img);
        
        // Encontrar la categoría con mayor probabilidad
        let maxProb = 0;
        let maxCategory = '';
        
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability > maxProb) {
                maxProb = prediction[i].probability;
                maxCategory = prediction[i].className;
            }
        }
        
        // Mostrar solo la categoría con mayor confianza
        resultDiv.textContent = `Categoría: ${maxCategory}`;
    } catch (error) {
        console.error('Error al clasificar la imagen:', error);
        resultDiv.textContent = 'Error al clasificar la imagen. Inténtalo de nuevo.';
    }
}

// Inicializar el modelo al cargar la página
window.addEventListener('load', initModel);