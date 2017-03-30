

var numberDegree = function(a,b){
	var theResult =1;
	if (b>0) {
		for (var i = 0; i <b ; i++) {
		
        theResult =theResult * a;
		}
	}
	else{
		theResult=1;
	}
    return theResult;
}	

var howMany16 = function(a){
    var letters = '0123456789ABCDEF';
    var colortiv = '';
    var gumar = 0;
    var qanak = 0;
    var mnacac = 0;
    var i = 0;
   	while (gumar<=a){
        i++  
   		gumar+=16;
    }
    gumar=gumar-16;

   

   	qanak=i-1;
   	if (a - gumar != 0) {
   	    mnacac = (a - gumar);
   	}
   	if (gumar == 0 ) {
   		mnacac = a;
   	}
    colortiv = colortiv+letters[qanak];
    colortiv = colortiv+letters[mnacac];
   
    return colortiv;
}

var tvanshaniArjeq = function(tvanshan){
    var letters = '0123456789abcdef';
	var arjeq;
	tvanshan = tvanshan.toLowerCase();
	
	for(var i = 0; i < letters.length; i++){
		if(letters[i] == tvanshan){
			arjeq = i;
			break;
		}
	}

	return arjeq;
}
var normalNumber =function(a,b){
	var tiv = a;
	var skizb=0;
    var out=document.getElementById("xos");
	for (var i = 0; i<tiv.length; i++) {	
		if (tvanshaniArjeq(tiv[i])>=b) {
            var asac = "  Error";
			out.innerHTML=asac;
			
        }
	}
	
	var normaltiv=0;
	var barcracrac =0;
	var astijan =0;
    for (var i = tiv.length - 1; i >= skizb; i--) {
    	
    	barcracrac = tvanshaniArjeq(tiv[i]) * numberDegree(b,astijan);
        normaltiv=normaltiv+barcracrac;
        astijan++;
    }
    if (normaltiv>255) {
        var aseliq = "Your number is  more than 255";
        
        out.innerHTML=aseliq;
    }
    return normaltiv
}

var convertTo16 = function(tvyalner){
	var tvyalnerVal=tvyalner.value;
	var numb=tvyalnerVal.split(",");
    var hamakarg = document.getElementById("cank");
    var hamakargVal =hamakarg.value;

    var tiv1 = numb[0].trim();
    var tiv2 = numb[1].trim();
    var tiv3 = numb[2].trim();
    var tiv11 = normalNumber(tiv1,hamakargVal);
    var tiv22 = normalNumber(tiv2,hamakargVal);
    var tiv33 = normalNumber(tiv3,hamakargVal);
    var guyn = '#';
    guyn += howMany16(tiv11);
    guyn += howMany16(tiv22);
    guyn += howMany16(tiv33);


    var out=document.getElementById("color");
    out.innerHTML=guyn;
    return guyn;
    }

var ClickHandler = function(sender) {
    var buttonText = sender.innerHTML;

    var matchingDivs = document.getElementsByClassName(buttonText);

    var inputValues = document.getElementById(buttonText + 'Tver');

    for (var i = 0; i < matchingDivs.length; i++) 
    {
        matchingDivs[i].style.backgroundColor = convertTo16(inputValues);
    }
}



var main = function() {
	"use strict";
	var populateDropdown = function() {
	    var list = document.getElementById("cank");

	    for(var i = 2; i <= 16; i++) {
	        var option = document.createElement("option");
	        option.text = i;
	        option.value = i;
	        list.appendChild(option);
	    }
    }
    populateDropdown();
};

$(document).ready(main);