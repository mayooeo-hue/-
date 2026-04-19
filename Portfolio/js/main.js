//add class active to header on scroll//
let header=document.querySelector("header")
window.onscroll =function(){
    if(this.scrollY >=50){
        header.classList.add("active")
    }else
    {
        header.classList.remove("active")
    }
}
let nav_links=document.getElementById("links")


function Open_colose_Menu(){
    nav_links.classList.toggle("active")
}