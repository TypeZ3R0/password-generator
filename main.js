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

// Updating the slider on sliding
const generateSliderValue = () => {
    sliderValue.innerHTML = slider.value;
    slider.oninput = function () {
        sliderValue.innerHTML = this.value;
    };

    const currentSliderValue = slider.value;
    return currentSliderValue;
};
generateSliderValue();

// Characters object for inclusions
let characters = {
    lowercase: null,
    uppercase: null,
    numbers: null,
    spCharacters: null,
};

// Handling inclusions
uppercaseCheck.addEventListener("input", (e) => {
    e.target.checked
    ? (characters = { ...characters, uppercase: uppercaseChars })
    : (characters = { ...characters, uppercase: null });
});
lowercaseCheck.addEventListener("input", (e) => {
    e.target.checked
    ? (characters = { ...characters, lowercase: lowercaseChars })
    : (characters = { ...characters, lowercase: null });
});
numberCheck.addEventListener("input", (e) => {
    e.target.checked
    ? (characters = { ...characters, numbers: numberChars })
    : (characters = { ...characters, numbers: null });
});
symbolsCheck.addEventListener("input", (e) => {
    e.target.checked
    ? (characters = { ...characters, spCharacters: specialChars })
    : (characters = { ...characters, spCharacters: null });
});

// Final password output variable
let password = "";

// Generate password from concatenating the checked inclusions
const generatePass = () => {
    let concatString = "";
    for (const key in characters) {
        if (characters[key] !== null) concatString += characters[key];
    }
    console.log(concatString);
    for (let i = 0; i < generateSliderValue(); i++) {
        const randomNo = Math.floor(Math.random() * concatString.length);
        password += concatString.charAt(randomNo);
    }
    return password;
};

// Display the generated password
generateBtn.addEventListener("click", (event) => {
    if (!password) {
        passwordDisplay.innerHTML = generatePass();
        generateBtn.innerHTML = "CLEAR"
    } else {
        password = "";
        passwordDisplay.innerHTML = "P4$5W0RD!";
        generateBtn.innerHTML = "GENERATE"
    }
});
