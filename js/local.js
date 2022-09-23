const displayShow = () => {
  const nameText = document.getElementById("name-input").value;
  const ageText = document.getElementById("age-input").value;
  localStorage.setItem("Name", nameText);
  localStorage.setItem("Age", ageText);
};
const clearText = () => {
  localStorage.removeItem("Name");
  localStorage.removeItem("Age");
};

