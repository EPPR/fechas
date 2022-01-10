// @lxps :: 8 Enero 2022
// https://github.com/EPPR/fechas/
// Para mayor información, lee el archivo README.md

// 1. Definir Variables.
var fecha = '2022-01-08';
var cumple = '1999-11-11';
var fechaSplit  = [];
var cumpleSplit = [];

// 2. Definir Funciones.
function calcularDiferencia(date, bday){
    // date & bday
    fechaSplit = date.split('-')
    cumpleSplit = bday.split('-')

    // console.log(fechaSplit, cumpleSplit)
  
    // Cumple es hoy?
    if(fechaSplit[1] == cumpleSplit[1] && fechaSplit[2] == cumpleSplit[2] ){
        // SI ES HOY . HBD!!
    }else{
        // NO ES HOY. ^_^ (Entonces, ya fue? o apenas viene?)
        // Verificar si el cumple es "este mes"
        if(fechaSplit[1] == cumpleSplit[1]){
            // Si, el cumple es este mes.
            if(fechaSplit[2] >= cumpleSplit[2]){
                // Cumpleaños en el Pasado.
            }else{
                // Cumpleaños en el Futuro.
            }
        }else{
            // No, el cumple es en un mes diferente
            if(fechaSplit[1] >= cumpleSplit[1]){
                // Cumpleaños en el Pasado.
            }else{
                // Cumpleaños en el Futuro.
            }
        }

    }

    return false
}

// 3. Correr Algoritmo(s).
calcularDiferencia(fecha, cumple);

// Esta última linea nos ayuda para que NODEJS termine y puedas volver a correr este programa.
return false;
