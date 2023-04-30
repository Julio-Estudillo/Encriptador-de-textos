var entrada = document.querySelector(".botones");
var mensaje = document.querySelector(".salida")

function btnencriptar(){
   var cifrar = document.querySelector(".entrada").value;
   const letras = ['e', 'i', 'a', 'o', 'u'];
   const secreto = ['nter', 'mes', 'i', 'ber', 'fat']
   const objetivo = cifrar.split('');

   for (var i = 0; i < objetivo.length; i++) {
      for (var j = 0; j < letras.length; j++) {
         if (objetivo[i]==letras[j]) {
            objetivo[i] = objetivo[i]+secreto[j];
         }
      }
   }
   let texto = objetivo.join('');
   mensaje.value = texto;
}

function btndesencriptar(){
    var descifrar=document.querySelector(".entrada").value;
    textof=descifrar.replace(/enter/g,'e');
    textofuno=textof.replace(/imes/g,'i');
    textofdos=textofuno.replace(/ai/g,'a');
    textoftres=textofdos.replace(/ober/g,'o');
    textofcuatro=textoftres.replace(/ufat/g,'u');
   mensaje.value=textofcuatro;
}

var clickcopiar=document.querySelector(".copiar");

function copiarTexto(){
    var textoACopiar = document.querySelector(".salida");
    var limpiarcaja=document.querySelector(".salida");

    if (textoACopiar!=0) {
      textoACopiar.select();
      textoACopiar.setSelectionRange(0,99999);
      texto=document.execCommand('copy');
      limpiarcaja.select();
      limpiarcaja.value="";      
    }else {

      return null;
    }
    limpiarcaja.value="";
}

var textoPlano = document.querySelector(".entrada");
textoPlano.addEventListener("input", function(event){
   var contenido = textoPlano.textContent;
   if (this.value.length > 0) {
           var expresion = new RegExp(this.value);
           if (!expresion.test(contenido)){
              document.getElementById("muñeco").style.display="none";
              document.getElementById("negritas").style.display="none";
              document.getElementById("claro").style.display="none";
              document.getElementById("salida").style.display="revert";
           }else{
              document.getElementById("muñeco").style.visibility="flex";
              document.getElementById("negritas").style.visibility="revert";
              document.getElementById("claro").style.visibility="revert";
              document.getElementById("salida").style.visibility="none";
              }
   }else{
        document.getElementById("muñeco").style.display="flex";
        document.getElementById("negritas").style.display="revert";
        document.getElementById("claro").style.display="revert";
        document.getElementById("salida").style.display="none";
        document.getElementById("salida").value='';
      }
});
