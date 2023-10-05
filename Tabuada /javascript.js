function multiplicando() {
    let multiplicador = Number(document.getElementById("multiplicador").value);
    let nm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    document.getElementById("resultado").innerHTML = '';
    for (const numero of nm) {
        let resultado = (multiplicador * numero);
        document.getElementById("resultado").innerHTML = 
                    document.getElementById("resultado").innerHTML + 
                    `${multiplicador} * ${numero} = ${resultado} <br>`
        
    }
}