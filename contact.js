/*get data*/
const nameInput = document.querrySelector("#name");
const email = document.querrySelector("#email");
const message = document.querrySelector("#message");
const success = document.querrySelector("#success");
const errorNodes = document.querrySelectorAll(".error");
/*validate data*/
function validateForm(){
    clearMessage();
    
    let errorFlag = false;
    
    if(nameInput.value.length < 1){
        /*if the text its left black it will display an error message */
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag=true;
    }
    
    if(!emailValid(email.value)){
        errorNodes[1].innerText="invalid email";
        email.classList.add("error-border");
        errorFlag=true;
    }
    
    if(message.value.length<1){
        errorNodes[2].innerText="please enter message";
        email.classList.add("error-border");
        errorFlag=true;
    }
    
    if(!errorFlag){
        success.innerText="success!";
    }
}

function clearMessage(){
    /*and if the i its bigger than 0 (a caracter its entered)it will clear the error message */
    for(let i = 0; i < errorNodes.length;i++){
        errorNodes[i].innerText="";
    }
    success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border")
}

functino emailIsValid(email){
    let pattern=/\S+@\S+\.S+/;
    return pattern.test(email);
}