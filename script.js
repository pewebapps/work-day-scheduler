
function setCurrentDay() {
    const currentDay = moment().format('dddd, Do MMMM');
    $("#currentDay").text(currentDay);
}

setCurrentDay();