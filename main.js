document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores de los campos del formulario
    const manN = parseFloat(document.getElementById('man-n').value);
    const manA = parseFloat(document.getElementById('man-A').value);
    const manR = parseFloat(document.getElementById('man-R').value);
    const manS = parseFloat(document.getElementById('man-S').value);
    const hwC = parseFloat(document.getElementById('hw-C').value);
    const hwR = parseFloat(document.getElementById('hw-R').value);
    const hwS = parseFloat(document.getElementById('hw-S').value);
    const quadA = parseFloat(document.getElementById('quad-a').value);
    const quadB = parseFloat(document.getElementById('quad-b').value);
    const quadC = parseFloat(document.getElementById('quad-c').value);
    const quadD = parseFloat(document.getElementById('quad-D').value);
    
    // Validar entradas
    if (isNaN(manN) || isNaN(manA) || isNaN(manR) || isNaN(manS) || isNaN(hwC) || isNaN(hwR) || isNaN(hwS) || isNaN(quadA) || isNaN(quadB) || isNaN(quadC) || isNaN(quadD)) {
        alert('Por favor, ingrese valores válidos en todos los campos.');
        return;
    }

    // Calcular caudal usando la ecuación de Manning
    const Qmanning = (1 / manN) * manA * Math.pow(manR, 2/3) * Math.pow(manS, 1/2);
    
    // Calcular caudal usando la ecuación de Hazen-Williams
    const vHazenWilliams = 0.85 * hwC * Math.pow(hwR, 0.63) * Math.pow(hwS, 0.54);
    
    // Calcular altura de la barandilla usando la fórmula cuadrática
    const Hbarandilla = quadA * Math.pow(quadD, 2) + quadB * quadD + quadC;
    
    // Mostrar resultados
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p><strong>Caudal (Ecuación de Manning):</strong> ${Qmanning.toFixed(2)} m³/s</p>
        <p><strong>Velocidad del Flujo (Ecuación de Hazen-Williams):</strong> ${vHazenWilliams.toFixed(2)} m/s</p>
        <p><strong>Altura de la Barandilla:</strong> ${Hbarandilla.toFixed(2)} m</p>
    `;
});
