let amir=true
let fyp= "research paper"
let members=3

document.getElementById("myh1").textContent =`Hello Amir tommorow we have ${fyp} class`;

let program;

document.getElementById("mySubmit").onclick=function username(){
    program=document.getElementById("myText").value;
    document.getElementById("myp").textContent =`Welcome Amir you Submitted ${program} course successfully`;

}