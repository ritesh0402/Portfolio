alert("Hello! I am an alert box!!");

burger = document.querySelector(".burger")
hamnav = document.querySelector(".hamnav")


burger.addEventListener("click", ()=>{
    hamnav.classList.toggle('visibilty');
})