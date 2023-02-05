const DAY_WORKING_HOURS = 9;
const START_TIME_HOUR = 9;

// set present date
function setCurrentDay() {
    const currentDay = moment().format('dddd, Do MMMM');
    $("#currentDay").text(currentDay);
}

// method that sets up work day with correct rows
function createWorkDaySchedule() {
    for (let i = 0; i < DAY_WORKING_HOURS; i++) {
        // div for each row 
        const rowEl = $("<div>");
        rowEl.addClass("row");
        
        // p for hour time
        const hourEl = $("<p>");
        hourEl.addClass("hour col-1");
        
        // configure text for hourEL
        const hour = START_TIME_HOUR + i;
        const hourText = moment(`${hour}`, "h").format(`h a`);
        hourEl.text(hourText);

        // form of type input for text area
        const inputEl = $("<input>");
        inputEl.addClass("textarea col-10");

        // button for save button
        const buttonEl = $("<button>");
        buttonEl.addClass("saveBtn col-1");

        // append three elements to row
        rowEl.append(hourEl, inputEl, buttonEl);

        // append row to container
        $(".container").append(rowEl);
    }
}

setCurrentDay();
createWorkDaySchedule();