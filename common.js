function handleClick(buttonId) {
    let button = document.getElementById(buttonId);
    
    if (!button.disabled) {
        button.disabled = true; 
        

        

        // Check if all buttons are clicked
        if (document.getElementById("card1-button").disabled &&
            document.getElementById("card2-button").disabled &&
            document.getElementById("card3-button").disabled&&
            document.getElementById("card4-button").disabled&&
            document.getElementById("card5-button").disabled&&
            document.getElementById("card6-button").disabled) {

            
            alert("Congratulations!you have completed all task");
        }
    }
    
}

function getRandomColor() {
         return `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
     };

    
 
  document.getElementById('back-home').addEventListener("click",function(){
    window.location.href = "index.html";
  })
