
var today = moment();
var taskContainer = document.getElementById('tasks');
var testEl = document.getElementsByName('task7')
//displayDate.textContent = today.format("MMM Do, YYYY");
$("#dayOfWeek").text(today.format("dddd"));
$("#todayDate").text(today.format("MMM Do, YYYY"));


function compTime(hour) {

}
//set colors based on time to task inputs
//get all named input elements
// if moment hour matches set to white, if older set to gray, if future set light green
var allInput = document.querySelectorAll('#task-time');

allInput.forEach((i) => {
    let getData = i.getAttribute('data-id');
    let checkTime = moment(getData, 'hh');
    if (today.isSame(checkTime, 'hour')){
        $(i).next().css("background-color", "white");
    }
    else if (today.isBefore(checkTime, 'hour')) {
        $(i).next().css("background-color", "lightgreen");
    }
    else if (today.isAfter(checkTime, 'hour')) {
        $(i).next().css("background-color", "lightgray");
    }
})


//reload localStorage values to text inputs
const localKeys = Object.keys(localStorage);
console.log(localKeys);
const length = localKeys.length;
// localStorage.clear();
for (let i=0; i<length; i++) {
    const key = localKeys[i];
    console.log(key);
    let localVal = localStorage.getItem(key);
    console.log(localVal);
    setTaskEl = document.getElementById(key);
    //console.log(setTaskEl);
    setTaskEl.value = localVal;
}

//localStorage.clear();
//click to save task
taskContainer.addEventListener('click', function (e){
    
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
        //save input element id and associated text to localStorage
        localStorage.setItem(getTaskEl, getText); 
        console.log(localStorage);
    }
})

