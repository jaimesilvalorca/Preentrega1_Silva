let i = 0;
let val = 0;

while (i < 1) {
    let valores = parseInt(prompt("Ingrese cantidad de pesos chilenos para transformar a UF,UTM o Dolares"));

    if (valores < 0) {
        alert("¬--o.o--¬ Transformando a numero positivo ¬--o.o--¬");
        valores = valores * -1;
        i++;
    } else if (valores == 0) {
        alert("Ingrese un monto valido!");
    } else if (isNaN(valores)) {
        alert("Ha ingresado una letra o no ha ingresado nada!");
    } else {
        i++;
    }
    val = valores;
}


let opcion = prompt("Ingrese opcion para transformar UF,UTM o Dolares", "Dolares")


function transformar() {
    let resultado = 0;
    let unidadf = 34163;
    let unidadt = 58772;
    let dolares = 930;
    if (('uf' == opcion) || ('Uf' == opcion) || ('UF' == opcion)) {
        resultado = val / unidadf;
        document.write(`<div class="alert alert-success" role="alert">El valor de la UF en pesos chilenos es:$ ${resultado}</div>`);
        alert(`El valor en UF es:$ ${resultado}`);
    }
    else if (('utm' == opcion) || ('Utm' == opcion) || ('UTM' == opcion)) {
        resultado = val / unidadt;
        document.write(`<div class="alert alert-success" role="alert">El valor de la UTM en pesos chilenos es:$ ${resultado}</div>`);
        alert(`El valor en UTM es:$ ${resultado}`);
    }
    else if (('dolares' == opcion) || ('Dolares' == opcion) || ('DOLARES' == opcion)) {
        resultado = val / dolares;
        document.write(`<div class="alert alert-success" role="alert">El valor del dolar en pesos chilenos es:$ ${resultado}</div>`);
        alert(`El valor en dolares es:$ ${resultado}`);
    }
}

transformar(opcion);

