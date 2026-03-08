 //prints current date
function printDate(){
   console.log( new Date().toLocaleTimeString());
}

setTimeout(printDate, 5000);

setInterval(printDate, 1000);

//enter ctrl + c to stop interval