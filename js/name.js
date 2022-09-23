const getNameById = (id) => {
  const idValue = document.getElementById(id);
  const idValueText = idValue.value;
  return idValueText;
};

const getInput = () => {
  const fristName = getNameById("frist-name");
  const lastName = getNameById("last-name");
  setNameByLocalStorage("frist name", fristName);
  setNameByLocalStorage("last name", lastName);
  dispalayShow("frist name", fristName);
  dispalayShow("last name", lastName);
};
const dispalayShow = (frist, last) => {
  const display = document.getElementById("display-id");
  const li = document.createElement("li");
  li.innerText = `${frist} : ${last}`;
  display.appendChild(li);
};
const getNameOnLocalStorage = () => {
  let nameData = localStorage.getItem("data");
  let data = {};
  if (nameData) {
    data = JSON.parse(nameData);
  }
  return data;
};
const setNameByLocalStorage = (fristName, lastName) => {
  const data = getNameOnLocalStorage();
  data[fristName] = lastName;
  const dataStringfied = JSON.stringify(data);
  localStorage.setItem("data", dataStringfied);
};

const displayName = () => {
  const data = getNameOnLocalStorage();
  for(const name in data) {
   const nameId = data[name]
   dispalayShow(name,nameId)
  }
};
displayName();
