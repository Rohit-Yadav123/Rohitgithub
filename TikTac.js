//Restart game button
var restart=document.querySelector("#b");

//grab all the squares

var sq=document.querySelectorAll("td");

//clear the all squares
function clearboard(){
    for (var i = 0; i < sq.length; i++) {
        sq[i].textContent="";
        
    }
}
restart.addEventListener("click",clearboard)

//check the square marker
function changemarker(){
    if (this.textContent==="") {
        this.textContent="X";
    } else if (this.textContent==="X"){
        this.textContent="O";
    }
    else{
        this.textContent="";
    }
} 
//for loop to add event listener to all the squares
for (let i = 0; i < sq.length; i++) {
    sq[i].addEventListener("click",changemarker);
    
}

