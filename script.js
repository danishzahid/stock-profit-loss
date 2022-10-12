const initialPrice = document.querySelector("#initial-price");
const stocksQuant = document.querySelector("#stocks-quant");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");


function calculateProfitLoss(initial,quant,current){
    if(initial>0 && quant>0 && current>0){
        if(initial>current){
            var loss = (initial-current)*quant;
            var lossPercentage = (loss/initial)*100;
            output.style.color = "red";
            output.innerText= "☹️ Your absolute loss is "+loss.toFixed(2) +" and loss percentage is "+lossPercentage.toFixed(2)+"%";
        }
        else if(initial<current){
            var profit = (current-initial)*quant;
            var profitPercentage = (profit/initial)*100;
            output.style.color = "green";
            output.innerText= "😀 Your absolute profit is "+profit.toFixed(2)+" and profit percentage is "+profitPercentage.toFixed(2)+"%";
        }
        else{
            output.innerText= "No profit or loss";
        }
    }
    else {
        output.innerText = "Please enter all field as > zero";
    }
}

function submitHandler(e){
    var ip = Number(initialPrice.value);
    var cp = Number(currentPrice.value);
    var qty = Number(stocksQuant.value);
     calculateProfitLoss(ip,qty,cp);
}

submitBtn.addEventListener("click", submitHandler);