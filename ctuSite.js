const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".navBar");
const dateDisplay = document.querySelector(".date");
const dropDownButton = document.querySelectorAll(".dropDownButton");
let date = new Date();

hamburger.addEventListener("click",(event)=>{
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("active");
});



window.onload=function(){
    let hours = date.getHours();
    let min = date.getMinutes();
    let dayOfMonth = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();
    
    if(dayOfMonth<10&&month<10){
        dateDisplay.textContent=`As of 0${month+1}/0${dayOfMonth}/${year}, here are our latest updates`;
    }
    else{
        dateDisplay.textContent=`As of ${month+1}/${dayOfMonth}/${year}, here are our latest updates`;
    }
    
    for(let i = 0; i<dropDownButton.length; i++){
    dropDownButton[i].addEventListener("click",(event) =>{
        if(dropDownButton[i].nextElementSibling.style.display==="none"){
            dropDownButton[i].nextElementSibling.style.display="block";
            dropDownButton[i].firstChild.style="transform: rotate(180deg);";
            
        }
        else{
            dropDownButton[i].nextElementSibling.style.display="none";
            dropDownButton[i].firstChild.style="transform: rotate(0deg);";
        }
    });
    };
}
