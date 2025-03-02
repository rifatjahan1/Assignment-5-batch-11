let countAdd =23;
let countReduce = 6;
let clearButton=document.getElementById('clear-button');
document.getElementById("date-show").innerText = new Date().toDateString();



document.getElementById('card1-button').addEventListener("click", function () {
    //card1Button.disabled = true;
    

    alert("Board updated successfully");
    handleClick("card1-button");
    countAdd++;
    countReduce--;
    document.getElementById("count-add").innerText =countAdd;
    document.getElementById("count-reduce").innerText=countReduce;
    //document.getElementById("date-show").innerText = new Date().toUTCString();s
    let card1Title=document.getElementById("card1-title").innerText;
    let dateDisplay=new Date().toDateString();
    let historySection =document.getElementById("history-section");
    let p=document.createElement("p");
    p.style.color="black";
    p.innerText =`You have completed ${card1Title} at ${dateDisplay}`
     historySection.appendChild(p);
 

clearButton.addEventListener("click",function(){
    document.getElementById("history-section").innerText='';
})

});


//card 2




document.getElementById('card2-button').addEventListener("click", function () {
    //card2Button.disabled = true;
   

    alert("Board updated successfully");
    handleClick("card2-button");
    countAdd++;
    countReduce--;
    document.getElementById("count-add").innerText =countAdd;
    document.getElementById("count-reduce").innerText=countReduce;
    //document.getElementById("date-show").innerText = new Date().toUTCString();
    let card2Title=document.getElementById("card2-title").innerText;
    let dateDisplay=new Date().toDateString();
    let historySection =document.getElementById("history-section");
    let p=document.createElement("p");
    p.style.color="black";
    p.innerText =`You have completed ${card2Title} at ${dateDisplay}`
     historySection.appendChild(p);
 

clearButton.addEventListener("click",function(){
    document.getElementById("history-section").innerText='';
})

});
//card 3



document.getElementById('card3-button').addEventListener("click", function () {
    //card3Button.disabled = true;
   
    alert("Board updated successfully");
    handleClick("card3-button");
    countAdd++;
    countReduce--;
    document.getElementById("count-add").innerText =countAdd;
    document.getElementById("count-reduce").innerText=countReduce;
    //document.getElementById("date-show").innerText = new Date().toUTCString();
    let card3Title=document.getElementById("card3-title").innerText;
    let dateDisplay=new Date().toDateString();
    let historySection =document.getElementById("history-section");
    let p=document.createElement("p");
    p.style.color="black";
    p.innerText =`You have completed ${card3Title} at ${dateDisplay}`
     historySection.appendChild(p);
 

clearButton.addEventListener("click",function(){
    document.getElementById("history-section").innerText='';
})

});

//card 4



document.getElementById('card4-button').addEventListener("click", function () {
    //card4Button.disabled = true;

    alert("Board updated successfully");
    handleClick("card4-button");
    
    countAdd++;
    countReduce--;
    document.getElementById("count-add").innerText =countAdd;
    document.getElementById("count-reduce").innerText=countReduce;
    //document.getElementById("date-show").innerText = new Date().toUTCString();
    let card4Title=document.getElementById("card4-title").innerText;
    let dateDisplay=new Date().toDateString();
    let historySection =document.getElementById("history-section");
    let p=document.createElement("p");
    p.style.color="black";
    p.innerText =`You have completed ${card4Title} at ${dateDisplay}`
     historySection.appendChild(p);
 

clearButton.addEventListener("click",function(){
    document.getElementById("history-section").innerText='';
})

});
//card5



document.getElementById('card5-button').addEventListener("click", function () {
    //card5Button.disabled = true;
    
    alert("Board updated successfully");
    handleClick("card5-button");
    countAdd++;
    countReduce--;
    document.getElementById("count-add").innerText =countAdd;
    document.getElementById("count-reduce").innerText=countReduce;
    //document.getElementById("date-show").innerText = new Date().toUTCString();
    let card5Title=document.getElementById("card5-title").innerText;
    let dateDisplay=new Date().toDateString();
    let historySection =document.getElementById("history-section");
    let p=document.createElement("p");
    p.style.color="black";
    p.innerText =`You have completed ${card5Title} at ${dateDisplay}`
     historySection.appendChild(p);
 

clearButton.addEventListener("click",function(){
    document.getElementById("history-section").innerText='';
})

});
//card 6



document.getElementById('card6-button').addEventListener("click", function () {
    //card6Button.disabled = true;
    
    alert("Board updated successfully");
    handleClick("card6-button");
    countAdd++;
    countReduce--;
    document.getElementById("count-add").innerText =countAdd;
    document.getElementById("count-reduce").innerText=countReduce;
    //document.getElementById("date-show").innerText = new Date().toUTCString();
    let card6Title=document.getElementById("card6-title").innerText;
    let dateDisplay=new Date().toDateString();
    let historySection =document.getElementById("history-section");
    let p=document.createElement("p");
    p.style.color="black";
    p.innerText =`You have completed ${card6Title} at ${dateDisplay}`
     historySection.appendChild(p);
 

clearButton.addEventListener("click",function(){
    document.getElementById("history-section").innerText='';
})

});

//Random color function call

document.getElementById('random-color').addEventListener("click",function(){
    let bodyColor=document.getElementById("body-color");
    bodyColor.style.backgroundColor = getRandomColor();
})

