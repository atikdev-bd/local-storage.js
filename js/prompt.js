const pyementMethod = () => {
  const pyement = prompt("Inter your amount : 250tk");
  displayPrompt(pyement);
};

const displayPrompt = (taka) => {
  if (taka === "250") {
    alert`congratulation pyement success`;
    displyShow(` Pyement Success !
                  Go and Chill
         `);
  } else if (isNaN(taka)) {
    alert`Please give me valid input`;
    displyShow(`pyement not success !
                  Please try again
      `);
  } else if (taka > 250) {
    alert`I can't take more than 250 rupees`;
    displyShow(`pyement not success !
                  Please try again
      `);
  } else {
    alert`please give me 250 taka`;
    displyShow(`pyement not success !
                  Please try again
      `);
  }
};
const displyShow = (back) => {
  const display = document.getElementById("text-id");
  display.innerText = `${back}`;
};
