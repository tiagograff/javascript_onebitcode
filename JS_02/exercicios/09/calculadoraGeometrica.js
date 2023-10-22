function calcTriangulo(base, altura){
    return resultado = ((base * altura)/2).toFixed(2);
}

function calcRetangulo(base, altura){
    return resultado = (base * altura).toFixed(2);
}

function calcQuadrado(lado){
    return resultado = (lado * lado).toFixed(2);
}

function calcTrapezio(baseMaior, baseMenor, altura){
    return resultado = (((baseMaior + baseMenor)* altura)/2).toFixed(2);
}

function calcCirculo(raio){
    const pi = 3.14;
    return resultado = ((raio * raio) * pi).toFixed(2);
}

ok = true;

while(ok){
    question = window.prompt('calcule: ' +
    '\n 1. triângulo'+
    '\n 2. retângulo'+
    '\n 3. quadrado'+
    '\n 4. trapézio'+
    '\n 5. círculo'+
    '\n 6. sair');

    switch(question){
        case '1':
            base = parseFloat(prompt('entre com o valor da base: '));
            altura = parseFloat(prompt('entre com o valor da altura: '));
            resultado = calcTriangulo(base, altura);
            alert('o resultado é: ' + resultado);
            break;
        case '2':
            base = parseFloat(prompt('entre com o valor da base: '));
            altura = parseFloat(prompt('entre com o valor da altura: '));
            resultado = calcRetangulo(base, altura);
            alert('o resultado é: ' + resultado);
            break;
        case '3':
            lado = parseFloat(prompt('entre com o valor da base: '));
            resultado = calcQuadrado(lado);
            alert('o resultado é: ' + resultado);
            break;
        case '4':
            baseMaior = parseFloat(prompt('entre com o valor da base maior: '));
            baseMenor = parseFloat(prompt('entre com o valor da base menor: '));
            altura = parseFloat(prompt('entre com o valor da altura: '));
            resultado = calcTrapezio(baseMaior, baseMenor, altura);
            alert('o resultado é: ' + resultado);
            break;
        case '5':
            raio = parseFloat(prompt('entre com o valor da raio: '));
            resultado = calcCirculo(raio);
            alert('o resultado é: ' + resultado);
            break;
        case '6':
            alert('saindo...');
            ok = false;
            break;
    }
}