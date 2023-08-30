document.addEventListener("DOMContentLoaded", function() {
    const resultInput = document.getElementById("result");
    const buttons = document.querySelectorAll("button");
    const historyList = document.getElementById("history-list");
    const clearHistoryButton = document.getElementById("clear-history");
  
    let history = [];
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const buttonText = button.textContent;
  
        if (buttonText === "C") {
          resultInput.value = "";
        } else if (buttonText === "=") {
          try {
            const expression = resultInput.value;
            const result = eval(expression);
            resultInput.value = result;
            history.push(`${expression} = ${result}`);
            updateHistory();
          } catch (error) {
            resultInput.value = "Error";
          }
        } else if (buttonText === "%") {
          resultInput.value = eval(resultInput.value) / 100;
        } else if (buttonText === ".") {
          if (!resultInput.value.includes(".")) {
            resultInput.value += buttonText;
          }
        } else if (buttonText === "Back") {
          resultInput.value = resultInput.value.slice(0, -1);
        } else {
          resultInput.value += buttonText;
        }
      });
    });
  
    clearHistoryButton.addEventListener("click", function() {
      history = [];
      updateHistory();
    });
  
    function updateHistory() {
      historyList.innerHTML = "";
      history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
      });
    }
  });
  