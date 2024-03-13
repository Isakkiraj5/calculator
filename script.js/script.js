const number=document.getElementsByClassName("number");
let result=document.getElementById("result");
Array.from(number).forEach(element => {
    element.addEventListener("click",()=>{
     let value=element.innerText;
    result.value+=value
    })
});

const clear=document.getElementById("clear")
clear.addEventListener("click",()=>{
    result.value=""
})
const remove=document.getElementById("delete")
remove.addEventListener("click",()=>{
    result.value = result.value.slice(0, -1);
})

const equal=document.getElementById("equal");
equal.addEventListener("click",()=>{
   result.value= eval(result.value)
})

console.log(number)