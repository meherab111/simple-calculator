let allButtons = document.querySelectorAll(".all_buttons");

let outputRes = document.getElementById("output");

let bodyTheme = document.body;

let buttonTheme = document.getElementById("mode_icon");

// dark or light mode functionality

buttonTheme.addEventListener("click", () => {
  bodyTheme.classList.toggle("theme");
});

//main calculator functionality

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

  currElem.addEventListener("click", calculatorFunc);
});
