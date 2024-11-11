const Elbtn = document.querySelector(".btn");
const Elid = document.querySelector(".id");
const Elname = document.querySelector(".name");
const Elage = document.querySelector(".age");
const Eltbody = document.querySelector("tbody");

Elbtn.addEventListener("click", function () {
  const idValue = Elid.value;
  const nameValue = Elname.value;
  const ageValue = Elage.value;
  Elid.value = "";
  Elname.value = "";
  Elage.value = "";

  if (idValue == "" && nameValue == "" && ageValue == "") {
    alert("Malumot kiting");
    return;
  }

  ///////////////////////////////////
  const Eltr = document.createElement("tr");

  ///////////////////////////////////
  const Elid1 = document.createElement("td");
  Elid1.textContent = idValue;
  const Elname1 = document.createElement("td");
  Elname1.textContent = nameValue;
  const Elage1 = document.createElement("td");
  Elage1.textContent = ageValue;

  ///////////////////////////////////
  const ElbtnDel = document.createElement("button");
  const ElbtnEdit = document.createElement("button");
  ElbtnDel.textContent = "Delete";
  ElbtnEdit.textContent = "Edit";
  ElbtnDel.classList.add("del");
  ElbtnEdit.classList.add("edit");

  ///////////////////////////////
  const btnTd = document.createElement("td");
  btnTd.appendChild(ElbtnDel);
  ElbtnDel.addEventListener("click", function () {
    Eltr.remove();
  });

  ///////////////////////////////
  btnTd.appendChild(ElbtnEdit);
  ElbtnEdit.addEventListener("click", function () {
    const newId = prompt("ID edit", idValue);
    const newName = prompt("name edit", nameValue);
    const newAge = prompt("age edit", ageValue);
    Elid1.textContent = newId;
    Elname1.textContent = newName;
    Elage1.textContent = newAge;
  });

  ///////////////////////////////
  Eltr.appendChild(Elid1);
  Eltr.appendChild(Elname1);
  Eltr.appendChild(Elage1);
  Eltr.appendChild(btnTd);

  ///////////////////////////////
  Eltbody.appendChild(Eltr);
});
