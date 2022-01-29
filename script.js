var textoDigitado = document.querySelector('#input-texto')
const criptografia = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
}

const descripto = {
  enter: 'e',
  imes: 'i',
  ai: 'a',
  ober: 'o',
  ufat: 'u'
}

function criptografar() {
  var texto = textoDigitado.value;
  var percorrerString = '';

  for (var indexDoTexto = 0; indexDoTexto < texto.length; indexDoTexto++) {
    if (texto[indexDoTexto] == 'e') {
      percorrerString += criptografia.e
    } else if (texto[indexDoTexto] == 'i') {
      percorrerString += criptografia.i
    } else if (texto[indexDoTexto] == 'a') {
      percorrerString += criptografia.a
    } else if (texto[indexDoTexto] == 'o') {
      percorrerString += criptografia.o
    } else if (texto[indexDoTexto] == 'u') {
      percorrerString += criptografia.u
    } else {
      percorrerString += texto[indexDoTexto]
    }
  }
  textoDigitado.value = percorrerString;
}


//descriptografar
function descriptografar() {
  const descript = textoDigitado.value

 return textoDigitado.value = descript.replaceAll('ober', descripto.ober)
    .replaceAll('enter', descripto.enter)
    .replaceAll('imes', descripto.imes)
    .replaceAll('ai', descripto.ai)
    .replaceAll('ufat', descripto.ufat)
}

//copiar
function copiar(){
  var caixaDeTexto = document.getElementById('input-texto')  
  caixaDeTexto.select();//seleciona texto
  caixaDeTexto.setSelectionRange(0, 99999);//copia em dispositivos moveis
  navigator.clipboard.writeText(caixaDeTexto.value);

}
/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/