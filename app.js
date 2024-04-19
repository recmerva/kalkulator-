const inp=document.getElementById("inp");

function broj(num){
    inp.value +=num;
}

function cistii(){
    inp.value = ' ';
}

//eval funkcija 
function racuna(){
    inp.value = eval(inp.value);
}

