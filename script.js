const calculateBtn = document.getElementById('calculateBtn');
const dobElem = document.getElementById('dob');
const yearsElem = document.getElementById('years');
const monthsElem = document.getElementById('months');
const daysElem = document.getElementById('days');

calculateBtn.addEventListener('click', function() {
    // Create a date object from the input value
    const dob = new Date(dobElem.value);

    // Create a date object for today date
    const today = new Date();
    
    // lets get the difference in years, months and days
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust the underflow of the days and months
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }


    // Update the UI
    yearsElem.innerText = ageYears;
    monthsElem.innerText = ageMonths;
    daysElem.innerText = ageDays;
});
