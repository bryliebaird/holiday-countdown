// DOM Methods - store UI variables 
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");


// Create date object and grab current year, save the current year in the variable 
const currentYear = new Date().getFullYear();

// Set the background year that you are counting down too
year.innerHTML = currentYear + 1;

function countdown (e){

    // Create Date Object, current date + New Years date
    let currentDate = new Date ();
    const setDate = new Date(`January 01 ${currentYear + 1} 00:00:00`);
   
    const difference = setDate - currentDate;

    let d = Math.floor(difference / 1000 / 60 / 60 / 24);
    let h = Math.floor(difference / 1000 / 60 / 60) % 24;
    let m = Math.floor(difference / 1000 / 60) % 60;
    let s = Math.floor(difference / 1000) % 60;
  
    // Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = hours < 10 ? '0' + h : h;
    minutes.innerHTML = minutes < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(countdown, 1000);