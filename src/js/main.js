let employeeData = JSON.parse(localStorage.getItem("allEmployees")) || [];
let list = document.querySelector("#employeeList");
let countSpan = document.querySelector("#count");
let btn = document.querySelector(".btn");
function displayList() {
    list.innerHTML = "";  
    employeeData.forEach((emp, index) => {
        let li = document.createElement("li");
        if (Number(emp.salary) > 50000) {
            li.style.color = "red";
            li.style.fontWeight = "bold";
        }
        li.innerText = `${emp.name} - ${emp.designation} (Salary: ${emp.salary})`;
        let delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        delBtn.style.marginLeft = "10px";
        delBtn.style.cursor = "pointer";
        delBtn.onclick = function () {
            employeeData.splice(index, 1); 
            localStorage.setItem("allEmployees", JSON.stringify(employeeData)); 
            displayList(); 
        };
        li.appendChild(delBtn);
        list.appendChild(li);
    });
    countSpan.innerText = employeeData.length;
}
btn.onclick = function () {
    let nameInput = document.querySelector("#name");
    let desInput = document.querySelector("#designation");
    let salInput = document.querySelector("#salary");
    if (nameInput.value === "" || desInput.value === "" || salInput.value === "") {
        alert("Please Put all informations!");
        return;
    }
    let newEmployee = {
        name: nameInput.value,
        designation: desInput.value,
        salary: salInput.value,
    };
    employeeData.push(newEmployee);
    localStorage.setItem("allEmployees", JSON.stringify(employeeData));
    displayList();
    nameInput.value = "";
    desInput.value = "";
    salInput.value = "";
};
displayList();