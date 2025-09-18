const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output.replace(/%/g, "/100"));
    } catch {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "Error") output = "";

    if (output === "" && specialChars.includes(btnValue) && btnValue !== "-")
      return;

    if (
      specialChars.includes(output.slice(-1)) &&
      specialChars.includes(btnValue)
    )
      return;

    output += btnValue;
  }
  display.textContent = output || "0";
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
