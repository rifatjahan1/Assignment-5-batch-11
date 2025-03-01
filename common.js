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