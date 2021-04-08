console.log("outise");


var bu1 = document.querySelector("button");
var para = document.querySelector("p");

bu1.onclick = function(){
    if(!localStorage.getItem('name')){
        let name = prompt("enter name");
        localStorage.setItem('name',name);
        para.textContent = "Welcome " + name;

    }
    else{
        para.textContent = "Welcome " + localStorage.getItem('name');
    }

}


/*document.querySelector("heading").onclick = function (){
    document.querySelector("heading").style.fontSize = "x-large" ;
    console.log("inside");

*///}

