var ul = document.getElementById("list-container")
var input=document.getElementById("input")
document.getElementById("list-container").style.color="white";
document.getElementById("list-container").style.fontFamily="Poppins";
var buttonadd = document.getElementById("button")

function add(){
    var listitem=document.createElement("li")
    listitem.innerHTML=input.value+ "<button onclick='deleteItem(event)' class='button'>Delete</button>"
    result=ul.append(listitem) 
    result.style.color="white";

}

function deleteItem(event){
    event.target.parentElement.remove()
}
