
var today = moment();
var taskContainer = document.getElementById('tasks');
var testEl = document.getElementsByName('task7')
console.log(testEl);
//displayDate.textContent = today.format("MMM Do, YYYY");
$("#todayDate").text(today.format("MMM Do, YYYY"));

//reload localStorage values to text inputs
const localKeys = Object.keys(localStorage);
console.log(localKeys);
const length = localKeys.length;

for (let i=0; i<length; i++) {
    const key = localKeys[i];
    console.log(key);
    let localVal = localStorage.getItem(key);
    console.log(localVal);
    setTaskEl = document.getElementById(key);
    console.log(setTaskEl);
    setTaskEl.value = localVal;
}

//localStorage.clear();
//click to save task
taskContainer.addEventListener('click', function (e){
    //localStorage.clear();
    getName = e.target.getAttribute("name");
    getId = e.target.id;
    targetEl = document.getElementById(getId);
    const getTaskEl = $(targetEl).prev().attr('id');
    getText = $(targetEl).prevAll().val()
    console.log(getTaskEl);
    console.log(getName);

    console.log(getId);
    console.log(getText);
    getAll = document.getElementsByName('task-input');
    //onsole.log(getAll)
    //console.log(getTag);
    //console.log("clicked on element " + getId);
    if (getName == "saveButton") {
        localStorage.setItem(getTaskEl, getText); 
        console.log(localStorage);
    }
})

