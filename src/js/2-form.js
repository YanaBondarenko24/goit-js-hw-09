const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
form.addEventListener("submit", handlerSubmit);
form.addEventListener("input", handlerInput);
const formData = { email: "", message: "" };
const localStorageKey = "feedback-form-state";




function checkSavedData(){
    
    const savedValue = JSON.parse(localStorage.getItem(localStorageKey));
    if (savedValue) {
        input.value = savedValue.email;
        textarea.value = savedValue.message;
    }else{
        input.value = "";
        textarea.value = "";
    }  
}
checkSavedData();



function handlerInput(event) {
    formData.email = event.currentTarget.elements.email.value;
    formData.message = event.currentTarget.elements.message.value;
    
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    
}


function handlerSubmit(event) {
    
    if (formData.email.length === 0 || formData.message.length === 0) {
        alert("Fill please all fields");
    }else{
    console.log(formData);
    }  
    event.target.reset();
    formData.email = "";
    formData.message = "";
    localStorage.removeItem(localStorageKey);
}
 const dataStorage = JSON.parse(localStorage.getItem("feedback-form-state"));

