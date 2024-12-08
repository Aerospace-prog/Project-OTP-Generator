let btn = document.getElementById("btn");

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    output();
})

function otp(input){
    let otp = "";
    for(let i=0; i<input;i++){
        otp += Math.floor(Math.random()*10).toString(); 
    }
    return otp;
}

function output(){
    let input = document.getElementById("userInput").value;
    let inputNumber = parseInt(input,10);
    
    if (inputNumber <= 0) {
        document.getElementById("output").textContent = "Number must be greater than 0.";
        return;
    }
    if (inputNumber > 6) {
        document.getElementById("output").textContent = "Number must not exceed 6.";
        return;
    }
    let OTP = otp(inputNumber);
    document.getElementById("output").textContent = `Here is the otp : ${OTP}`;
    
    
}
