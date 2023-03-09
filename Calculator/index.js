console.log(" javascript is running ");

let str ="";
let text = document.getElementById("text");
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(" button has been clicked ")
        console.log(e.target)
        if(e.target.innerHTML == "="){
            str = eval(str)
            document.querySelector(".input").value = str

       }
       else if(e.target.innerHTML =='C'){
            str = ""
            document.querySelector('input').value = str
       }
       else if(e.target.innerHTML =='del'){
        str = str.slice(0,-1)
        document.querySelector('input').value = str
   }
       else{
       str = str+e.target.innerHTML
       document.querySelector(".input").value = str
       }
       
      
        
    })
})




