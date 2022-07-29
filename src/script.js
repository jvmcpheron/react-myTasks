let sundayButton = document.getElementsByClassName('btn-success')[0];
let mondayButton = document.getElementsByClassName('btn-success')[1];
let tuesdayButton = document.getElementsByClassName('btn-success')[2];
let wednesdayButton = document.getElementsByClassName('btn-success')[3];
let thursdayButton = document.getElementsByClassName('btn-success')[4];
let fridayButton = document.getElementsByClassName('btn-success')[5];
let saturdayButton = document.getElementsByClassName('btn-success')[6];

//SAVE FUNCTION BELOW

sundayButton.addEventListener('click',  function(){
    localStorage.setItem('sundayText', document.getElementById("sundayText").value);
});

mondayButton.addEventListener('click',  function(){
    localStorage.setItem('mondayText', document.getElementById("mondayText").value);
});

tuesdayButton.addEventListener('click',  function(){
    localStorage.setItem('tuesdayText', document.getElementById("tuesdayText").value);
});

wednesdayButton.addEventListener('click',  function(){
    localStorage.setItem('wednesdayText', document.getElementById("wednesdayText").value);
});

thursdayButton.addEventListener('click',  function(){
    localStorage.setItem('thursdayText', document.getElementById("thursdayText").value);
});

fridayButton.addEventListener('click',  function(){
    localStorage.setItem('fridayText', document.getElementById("fridayText").value);
});

saturdayButton.addEventListener('click',  function(){
    localStorage.setItem('saturdayText', document.getElementById("saturdayText").value);
});


// RETRIEVAL FROM LOCAL STORAGE

document.getElementById("sundayText").innerHTML = localStorage.getItem('sundayText');
document.getElementById("mondayText").innerHTML = localStorage.getItem('mondayText');
document.getElementById("tuesdayText").innerHTML = localStorage.getItem('tuesdayText');
document.getElementById("wednesdayText").innerHTML = localStorage.getItem('wednesdayText');
document.getElementById("thursdayText").innerHTML = localStorage.getItem('thursdayText');
document.getElementById("fridayText").innerHTML = localStorage.getItem('fridayText');
document.getElementById("saturdayText").innerHTML = localStorage.getItem('saturdayText');


//CLEAR PLANNER FUNCTIONALITY

let clearBtn = document.getElementsByClassName('btn-danger')[0];

clearBtn.addEventListener("click" ,  () => {

    let clear = window.confirm("Are you sure you want to clear your planner?\nYou will not be able to recover this information once you do.");
    console.log(clear);
    if (clear == true){
        localStorage.setItem('sundayText' , "");
        localStorage.setItem('mondayText', "");
        localStorage.setItem('tuesdayText' , "");
        localStorage.setItem('wednesdayText', "");
        localStorage.setItem('thursdayText', "");
        localStorage.setItem('fridayText' , '');
        localStorage.setItem('saturdayText' , "");
        location.reload();
    } else {
        alert("Okay, the information will not be cleared.")
    }

});

