let allButtons = document.querySelectorAll(".all-buttons");

let outputRes = document.getElementById("output");

let bodyTheme = document.body;

let buttonTheme = document.getElementById("mode-icon");

// Dark Or Light Mode Functionality

buttonTheme.addEventListener("click", () => {
  bodyTheme.classList.toggle("theme");
});

//Main Calculator Functionality

allButtons.forEach((currElem) => {
  const calculatorFunc = (e) => {
    if (e.target.tagName === "BUTTON") {
      if (e.target.innerText === "=") {
        try {
          outputRes.innerText = eval(outputRes.innerText);
        } catch (error) {
          alert(`${error} ‼️⚠️🟥`);
          outputRes.innerText = "";
        }
      } else if (e.target.innerText === "DEL") {
        outputRes.innerText = outputRes.innerText.slice(0, -1);
      } else if (e.target.innerText != "=") {
        if (outputRes.innerText.length >= 15) {
          alert("Can't Enter More Than 15 Digit's ‼️⚠️🟥");
        } else {
          outputRes.innerText = outputRes.innerText + e.target.innerText;
        }
      }

      if (e.target.innerText === "C") {
        outputRes.innerText = "";
      }
    }
  };

  // Calculator Click

  currElem.addEventListener("click", calculatorFunc);
});
