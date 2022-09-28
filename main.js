window.onload = (event) => {

    // Selecting the HTML elements
    const slider = document.querySelector("#char-len-slider");
    const sliderValue = document.querySelector("#slider-value");
    const generateBtn = document.querySelector("#generate-btn");
    const uppercaseCheck = document.querySelector("#uppercase");
    const lowercaseCheck = document.querySelector("#lowercase");
    const numberCheck = document.querySelector("#numbers");
    const symbolsCheck = document.querySelector("#symbols");
    const passwordDisplay = document.querySelector("#password-display");

    // Storing all the characters
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    
    let characters = "";
    let password = "";


    // Updating the slider on sliding
    const generateSliderValue = () => {
        sliderValue.innerHTML = slider.value;
        slider.oninput = function() {
            sliderValue.innerHTML = this.value;
        }
    
        const currentSliderValue = Number(sliderValue.innerHTML);
        return currentSliderValue;
    }

    generateSliderValue();
   

    uppercaseCheck.onclick = function() {
        if(uppercaseCheck.checked) {
            characters += uppercaseChars;
        }
    }

    lowercaseCheck.onclick = function() {
        if(lowercaseCheck.checked) {
            characters += lowercaseChars;
        }
    }

    numberCheck.onclick = function() {
        if(numberCheck.checked) {
            characters += numberChars;
        }
    }

    symbolsCheck.onclick = function() {
        if(symbolsCheck.checked) {
            characters += specialChars;
        }
    }

    const generatePass = () => {
        for (let i = 0; i < generateSliderValue(); i++) {
            const randomNo = Math.floor(Math.random() * characters.length)
            password += characters.charAt(randomNo)
        }
        return password;
    }
    

    generateBtn.addEventListener("click", (event) => {
        passwordDisplay.innerHTML = generatePass();
    });

}