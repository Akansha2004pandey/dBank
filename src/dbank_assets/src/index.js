import { dbank } from "../../declarations/dbank";

window.addEventListener("load" ,async (e) => {
    e.preventDefault();
  
    // Log to ensure the event listener is added

    const currentAmount = await dbank.checkBalance();
    const valueElement = document.getElementById("value");
    valueElement.innerText = Math.round(currentAmount*100/100);
    
  
});
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Form submitted");
        try {
            const button=event.target.querySelector("#submit-btn");
            var inputAmountElement = document.getElementById("input-amount");
            var outputAmountElement = document.getElementById("withdrawal-amount");
            
            if (!inputAmountElement) {
                console.error("Element with ID 'input-amount' not found");
                return;
            }
            if (!outputAmountElement) {
                console.error("Element with ID 'withdrawl-amount' not found");
                return;
            }
            button.setAttribute("disabled",true);
            if(inputAmountElement.value.length!=0){
            var inputAmount = parseFloat(inputAmountElement.value);
            
            await dbank.topUp(inputAmount);
            }
            if(outputAmountElement.value.length!=0){
                var outputAmount = parseFloat(outputAmountElement.value);
                
                await dbank.withdrawl(outputAmount);
            }

           

            // Refresh the balance after form submission
            const currentAmount = await dbank.checkBalance();
            const valueElement = document.getElementById("value");
            if (valueElement) {
                valueElement.innerText = currentAmount.toFixed(2);
            } else {
                console.error("Element with ID 'value' not found");
            }
            document.getElementById("input-amount").value="";
            document.getElementById("withdrawal-amount").value="";
        if (button) {
            button.removeAttribute("disabled");
        } else {s
            console.error("Button with ID 'submit-button' not found");
        }
        } catch (error) {
            console.error("Error handling form submission:", error);
        }
        
        
});
}

