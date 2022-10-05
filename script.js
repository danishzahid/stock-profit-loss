const initialPrice = document.querySelector("#initial-price");
const stocksQuant = document.querySelector("#stocks-quant");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");


function calculateProfitLoss(initial,quant,current){
    if(initial>current){
        var loss = (initial-current)*quant;
        var lossPercentage = (loss/initial)*10;
        output.innerText= "Your loss is "+lossPercentage+"%";
    }
    else if(initial<current){
        var profit = (current-initial)*quant;
        var profitPercentage = (profit/initial)*10;
        output.innerText= "Your profit is "+profitPercentage+"%";
    }
    else{
        output.innerText= "No profit or loss";
    }
}

function submitHandler(e){
    var ip = Number(initialPrice.value);
    var cp = Number(currentPrice.value);
    var qty = Number(stocksQuant.value)
     calculateProfitLoss(ip,qty,cp);
}

submitBtn.addEventListener("click", submitHandler);