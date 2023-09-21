const skillLvElement = document.querySelector('.skill-programming-lv');
skillLvElement.style.setProperty('--lv', '50%'); // Thay đổi giá trị thành 50%

      
var modal=document.querySelector('.img-modal');
var out =document.querySelector(".fa-xmark")

  function out_modal(){
    modal.classList.toggle("hidden");
  }
 function changeImg(id){
    
      let img_wrapper=document.getElementById(id).getAttribute("src")
      let img_modal=document.getElementById("main-img").setAttribute("src",img_wrapper)
    
    modal.classList.toggle("hidden")
 }
 // function arrow(){
 //   let img_wrapper=document.getElementsByClassName("wrapper-contain_img")
 //   let img_modal=document.getElementById("main-img")
 //   let n=img_wrapper.length
 //   for(let i=0;i<n;i++)
 //   if(img_wrapper[i].getAttribute("src")==img_modal.getAttribute("src"))
 //   {

 //     let next=img_wrapper[i+1].getAttribute("src")
    
 //   main.setAttribute("src",next)
 //   }

 // }
 
function arrow_right() {
let img_wrapper = document.getElementsByClassName("wrapper-contain_img");
// console.log(img_wrapper)
let img_modal = document.getElementById("main-img")
let n = img_wrapper.length;
for(let i=0;i<n;++i)
{
 // console.log(img_wrapper[i].getAttribute("src"))
 console.log("i la "+i)
 if(img_wrapper[i].getAttribute("src")===img_modal.getAttribute("src"))
 {
   // console.log("i la "+i)
   // console.log(img_modal.getAttribute("src"))
   // console.log(img_wrapper[i].getAttribute("src"))
   if(i===n-1){
     let next=img_wrapper[0].getAttribute("src")
    console.log("next la: "+ next)
    img_modal.setAttribute("src",next)
    console.log("modal la "+img_modal.getAttribute("src"))
    break;
   }
   else if(i<n){
     let next=img_wrapper[i+1].getAttribute("src")
    console.log("next la: "+ next)
    img_modal.setAttribute("src",next)
    console.log("modal la "+img_modal.getAttribute("src"))
    break;
   }   
 }
}
}
function arrow_left() {
let img_wrapper = document.getElementsByClassName("wrapper-contain_img");
// console.log(img_wrapper)
let img_modal = document.getElementById("main-img")
let n = img_wrapper.length;
for(let i=0;i<n;++i)
{
 // console.log(img_wrapper[i].getAttribute("src"))
 console.log("i la "+i)
 if(img_wrapper[i].getAttribute("src")===img_modal.getAttribute("src"))
 {
   // console.log("i la "+i)
   // console.log(img_modal.getAttribute("src"))
   // console.log(img_wrapper[i].getAttribute("src"))

    if(i>0){
     let next=img_wrapper[i-1].getAttribute("src")
    console.log("next la: "+ next)
    img_modal.setAttribute("src",next)
    console.log("modal la "+img_modal.getAttribute("src"))
    break;
   }  

      else if(i===0){
     let next=img_wrapper[n-1].getAttribute("src")
    console.log("next la: "+ next)
    img_modal.setAttribute("src",next)
    console.log("modal la "+img_modal.getAttribute("src"))
    break;
   } 
 }
}
}
