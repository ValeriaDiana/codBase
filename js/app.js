var p = "";

var c = 0;


var calculadora = {
  iniciar: function() {
    for (var i = 0; i < document.querySelectorAll("[class='teclado'] img").length; i++) {
      document.querySelectorAll("[class='teclado'] img")[i].onmousedown = this.disminuirTamano;
      document.querySelectorAll("[class='teclado'] img")[i].onmouseup = this.regresarTamano;
    }
    for (var i = 0; i < document.querySelectorAll("[class='teclado'] .row .col1 img").length; i++) {
      document.querySelectorAll("[class='teclado']  .row .col1 img")[i].onmousedown = this.disminuirTamano;
      document.querySelectorAll("[class='teclado']  .row .col1 img")[i].onmouseup = this.regresarTamano;
    }
    document.getElementById("mas").onmousedown = this.disminuirTamano;
    document.getElementById("mas").onmouseup = this.regresarTamano;
  },


  disminuirTamano: function(event) {

    var seleccion = event.currentTarget.id;
    if (seleccion == "0" || seleccion == "1" || seleccion == "2" || seleccion == "3" || seleccion == "punto" || seleccion == "igual") {
      document.getElementById(seleccion).style = "width:28%;";

    }
    if (seleccion == "4" || seleccion == "5" || seleccion == "6" || seleccion == "7" || seleccion == "8" || seleccion == "9" || seleccion == "por" || seleccion == "menos" || seleccion == "sign" || seleccion == "raiz" || seleccion == "on" || seleccion == "dividido") {
      document.getElementById(seleccion).style = "width:20%;";
    }
    if (seleccion == "mas") {
      document.getElementById(seleccion).style = "width:88%;";

    }

  },
  regresarTamano: function(event) {
    var seleccion = event.currentTarget.id;

    if (seleccion == "0" || seleccion == "1" || seleccion == "2" || seleccion == "3" || seleccion == "punto" || seleccion == "igual") {
      document.getElementById(seleccion).style = "width:29%;";
    }
    if (seleccion == "4" || seleccion == "5" || seleccion == "6" || seleccion == "7" || seleccion == "8" || seleccion == "9" || seleccion == "por" || seleccion == "menos" || seleccion == "sign" || seleccion == "raiz" || seleccion == "on" || seleccion == "dividido") {
      document.getElementById(seleccion).style = "width:22%;";
    }
    if (seleccion == "mas") {
      document.getElementById(seleccion).style = "width:90%;";
    }
    calculadora.muestra(event);

  },
  muestra: function(event) {
    var seleccion = event.currentTarget.id;
    alert(p);
    if (p.length < 8) {
      if ((p == 0 && seleccion != 0) || (c > 0) || (p.length > 0)) {
        if (seleccion == "igual") {
          alert(c, t ,p);
          switch (c) {
            case 1:
              calculadora.fsuma(t, p);
              document.getElementById('display').innerHTML = r;
              break;
            case 2:

              break;

          }
        } else {
          alert(p);
          if (seleccion == "0" || seleccion == "1" || seleccion == "2" || seleccion == "3" || seleccion == "4" || seleccion == "5" || seleccion == "6" || seleccion == "7" || seleccion == "8" || seleccion == "9") {
            p = p + seleccion;
            document.getElementById('display').innerHTML = p;
          }
          if (seleccion == "punto") {
            alert(p);
            calculadora.fpunto();
          }
          if (seleccion == "sign") {
            p = -p;
            document.getElementById("display").innerHTML = p;
          }
          if (seleccion == "on") {
            document.getElementById("display").innerHTML = "0";
          }
        }}}


            if (seleccion == "mas") {
              c = 1;
              t = p;
              p = "";
              document.getElementById('display').innerHTML = p;
            }
            if (seleccion == "menos") {
              c = 2;
              t = p;
              p = "";
            }
            if (seleccion == "multiplica") {
              c = 3;
              t = p;
              p = "";
            }
            if (seleccion == "dividido") {
              c = 4;
              t = p;
              p = "";
            }






    }
  ,
  fpunto: function() {
    var n = 0;
    for (var i = 0; i < p.length; i++) {
      var caracter = p.charAt(i);
      if (caracter == ".") {
        n = 1;
      }
    }
    if (n == 0) {
      p = p + ".";
      document.getElementById("display").innerHTML = p;
    }

  },
  fsuma: function(num1, num2) {
    var t = p;
    p = "";

    r = num1 + num2;

    return r;
  }


}

calculadora.iniciar();




/*var unary = */


/*
console.log(calculadora.suma());

funcion inicializa(){
  var calculadora= (function(){
    if(arguments.length>0){

    }
    suma: function fsuma(valor1, valor2){
     var resultado = valor1 + valor2;
     return resultado;
    }
    resta: function fresta(valor1, valor2){
     var resultado = valor1 - valor2;
     return resultado;
    }
    multiplicacion: function fmultiplicacion(valor1, valor2){
     var resultado = valor1 * valor2;
     return resultado;
    }
    division: function fdivision(valor1, valor2){
     var resultado = valor1 / valor2;
     return resultado;
    }
  }
}*/
