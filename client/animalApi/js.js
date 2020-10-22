 const fox_result = document.getElementById('fox_result')
 const dog_result =document.getElementById('dog_result')
 const fox_btn =document.getElementById('fox_btn')
 const dog_btn = document.getElementById('dog_btn');
 const clear_btn=document.getElementById('reset');
var fcount=0;
var dcount=0;
 fox_btn.addEventListener('click',getRandyFox);
 dog_btn.addEventListener('click',getRandyDog);
 clear_btn.addEventListener('click',clear);

 function getRandyFox(){
     fcount++;
     fetch("https://randomfox.ca/floof/")
     .then(res=>res.json())
     .then(data=>{

        fox_result.innerHTML =  `<img src="${data.image}"/>`
     })
 } function getRandyDog(){
     dcount++;
    fetch("https://random.dog/woof.json")
    .then(res=>res.json())
    .then(data=>{
        if(data.url.includes('.mp4')){
            getRandyDog();
        
        }
       dog_result.innerHTML  =  `<img src="${data.url}"/>`})}
      

       function clear(){
           dog_result.innerHTML="This picture was shifted   "+dcount+"  times..";
           fox_result.innerHTML="This picture was shifted  "+fcount+"  times";
            dcount=0;
            fcount=0;

       }