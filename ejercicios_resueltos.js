export const PI = Math.PI;

let concade = (cadena = "") =>
  !cadena
    ? console.warn("No has ingresado un texto")
    : console.info(
        `El texto que ${cadena} ingresaste tiene longitud ${cadena.length}`
      );

let recorte = (texto = "", recorte = undefined) =>
  !texto || recorte == undefined
    ? console.info("No has ingresado una cadena o recorte debe ser mayor a 0")
    : Math.sign(recorte) === -1
    ? console.info("Has ingresado un numero negativo")
    : recorte > texto.length
    ? console.info("Numero debe ser menor al tamanio de la cadena")
    : console.log(texto.substr(0, recorte));


let arra = (texto, caracter) => {
  console.log(texto.split(caracter));
};

let repetir = (texto, num) => {
  for (let i = 0; i < num; i++) {
    console.log(texto);
  }
};

let inverte = (texto) => {
  if (!texto) {
    console.info("No hay texto");
  } else {
    let element = "";
    for (let i = texto.length; i >= 0; i--) {
      element = element + texto.charAt(i);
    }
    console.log(element);
  }
};
let contarvece = (texto = "", texto2 = "") => {
  let cont;
  let a = 0;
  if (!texto || !texto2) {
    console.log("Debes ingresar texto");
  } else {
    cont = texto.split(" ");
    for (let i = 0; i < cont.length; i++) {
      texto2 === cont[i] ? a++ : "No existen palabras repetidas";
    } //

    //
    console.log(`En el texto ${texto} existen ${a} = ${texto2}`);
  }
};

const frase = (texto) => {
  let element = "";
  let element2 = "";
  for (let i = texto.length; i >= 0; i--) {
    element = element + texto.charAt(i);
    //element = texto.split("").reverse().join("") // palabra de en reversa
  }
  for (let j = 0; j < texto.length; j++) {
    element2 = element2 + texto.charAt(j);
  }
  element === element2 ? console.log(true) : console.log(false);
};

let patron = (texto = "", elimi = "") => {
  !texto
    ? console.info("No hay texto")
    : !elimi
    ? console.warn("No hay palabra para elimi")
    : console.log(texto.replace(new RegExp(elimi, "ig"), ""));
};
let eje9 = () => {
  console.log(Math.random() * (600 - 510) + 510);
};

let eje10 = (num) => {
  let nuevo;
  !num
    ? "No has ingresado un numero"
    : console.log(
        (nuevo = parseInt(num.toString().split("").reverse().join("")))
      );
  console.log("nuevo", nuevo);
  num === nuevo ? console.log(true) : console.log(false);
};

let eje11 = (numero = undefined) => {
  if (numero === undefined) return console.error("No ingreaste un numero");
  if (typeof numero !== "number")
    return console.error("El valor debe ser un numero");
  if (Math.sign(numero) === -1)
    return console.error("No puede ser un numero negativo");
  let fact = 1;
  for (let i = 1; i <= numero; i++) {
    fact *= i;
  }
  console.log(`El factoreal de ${numero} es ${fact}`);
};
let eje12 = (numero) => {
  if (numero === undefined) return console.error("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error("El valor debe ser un numero");
  if (Math.sign(numero) === -1)
    return console.error("No puede ser un numero negativo");
  let cont = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      cont++;
    }
  }
  cont === 2 ? console.log("Es primo", true) : console.log("Es primo", false);
};
let eje13 = (numero) => {
  if (numero === undefined) return console.error("No ingreaste un numero");
  if (typeof numero !== "number")
    return console.error("El valor debe ser un numero");
  if (Math.sign(numero) === -1)
    return console.error("No puede ser un numero negativo");
  numero % 2 === 0
    ? console.log("El numero es par")
    : console.log("El numero es impar");
};
let eje14 = (numero, tipo) => {
  if (numero === undefined) return console.error("No ingreaste un numero");
  if (typeof numero !== "number")
    return console.error("El valor debe ser un numero");
  if (Math.sign(numero) === -1)
    return console.error("No puede ser un numero negativo");
  let grados = tipo.toLowerCase();
  if (grados === "c") {
    console.log(`${numero} CELSIUS en fahrenheit es : ${numero * 1.8 + 32}`);
  }
  if (grados === "f") {
    console.log(`${numero}  fahrenheit en CELSIUS es : ${(numero - 32) / 1.8}`);
  }
};

let eje15 = (numero, base) => {
  if (numero === undefined) return console.error("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error("El valor debe ser un numero");
  if (Math.sign(numero) === -1)
    return console.error("No puede ser un numero negativo");
  if (base === 2) {
    let des = numero.toString();
    let cont = des.length;
    let suma = 0;
    console.log(des);
    for (let i = 0; i < des.length; i++) {
      suma = suma + Math.pow(base, cont) * parseInt(des[i]);
      cont--;
      console.log(suma);
    }
    console.log(suma);
  }
};

let eje16 = (monto, descuento) => {
  let porce = (monto * descuento) / 100;
  console.log(
    `El monto ${monto} aplicado el descuento de ${descuento} es : ${
      monto - porce
    }`
  );
};

let eje17 = (fecha) => {
  if (fecha === undefined) return console.warn("No ingresaste una fecha");
  if (!fecha instanceof Date) return console.warn("Fecha invalida");
  let ResultadoResta = new Date().getTime - fecha.getTime(),
    aniosEnMs = 1000 * 60 * 60 * 24;
  aniosHumanos = Math.floor(ResultadoResta / aniosEnMs);
  let fe = new Date(fecha);
  let fechaac = new Date();
  console.log(fechaac.getFullYear() - fe.getFullYear());
};

let eje18 = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");
  if (typeof cadena !== "string")
    return console.warn(
      `el valor de ${cadena} No es una cadena de texto valida`
    );
  let vocales = 0,
    consonantes = 0;
  for (let vocal of cadena) {
    if (/[AEIOUaeiou]/.test(vocal)) {
      vocales++;
    }
    if (/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/.test(vocal)) {
      consonantes++;
    }
  }
  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

let eje19 = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste una cadena de texto");
  if (typeof nombre !== "string")
    return console.warn(
      `El valor de ${nombre} No es una cadena de texto valida`
    );
  let expRegu = /^[A-Za-z\s]+$/g.test(nombre);
  return expRegu
    ? console.info(`El nombre ${nombre} ES VALIDO`)
    : console.info(`El nombre ${nombre} NO ES VALIDO`);
};
let eje20 = (email = "") => {
  if (!email) return console.warn("No ingresaste una cadena de texto");
  if (typeof email !== "string")
    return console.warn(
      `El valor de ${email} no es una cadena de texto valida`
    );
  let expRegu = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g.test(email);
  return expRegu
    ? console.info(`El email ${email} ES VALIDO`)
    : console.info(`El email ${email} NO ES VALIDO`);
};



export let ejercicios = {
  concade,
  recorte,
  arra,
  repetir,
  inverte,
  contarvece,
  frase,
  patron,
  eje9,
  eje10,
  eje11,
  eje12,
  eje13,
  eje14,
  eje15,
  eje16,
  eje17,
  eje18,
  eje19,
  eje20,
};
