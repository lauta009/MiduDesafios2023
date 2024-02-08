const generadorArrayParaStrings = (cadena)=>{
    return [...cadena]
}
const desencriptadorDeOperadores = (cadena)=>{
    let caracterInicial = 0;
    let resultadoString = '';
    let array = generadorArrayParaStrings(cadena);
    array.forEach(caracter => {
        switch (caracter) {
            case '&':
                resultadoString = resultadoString + caracterInicial.toString()
                break;
            case '#':
                caracterInicial ++
                break;
            case '*':
                caracterInicial = caracterInicial * caracterInicial
                break;
            case '@':
                caracterInicial --
                break;
            default:
                console.log('Caracter desconocido: '+caracter)
                break;
        }
    });
    return resultadoString
}
console.log(desencriptadorDeOperadores('&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'))