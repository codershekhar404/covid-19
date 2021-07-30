// Adding Date at the bottom of the page
const mainContainer = document.getElementById('main-container');
function date() {
    setInterval(() => {
        const dateContainer = document.getElementsByClassName("date-container");

        for (let i = 0; i < dateContainer.length; i++) {
            dateContainer[i].innerHTML =
                new Date().toLocaleString();
        }
    }, 1000);
} date();


// fetching countries name

const countries = "https://covid19.mathdro.id/api/countries/";
let dropDown = document.getElementById('dropdown');
dropDown.length = 0;

// creating default option

let defaultOption = document.createElement('option');
defaultOption.text = 'Global';
dropDown.add(defaultOption);
dropDown.selectedIndex = 0;

async function fetchCountries() {
    const response = await fetch(countries);
    const data = await response.json();
    let dataCountries = data.countries;

    let option;
    for (let i = 0; i < dataCountries.length; i++) {
        option = document.createElement("option");
        option.text = dataCountries[i].name;
        option.value = dataCountries[i].name;
        dropdown.add(option);
    }
}
fetchCountries();

//fetching data and adding values to options

async function getData() {
    const dropDownData = dropDown.value;
    const url = "https://covid19.mathdro.id/api/countries/" + dropDownData;
    const res = await fetch(url);
    const fetchData = await res.json();

    // fetching global data and adding it to 0th index
    if (dropDown.selectedIndex === 0) {
        const url = "https://covid19.mathdro.id/api";
        const resp = await fetch(url);
        const fetchData = await resp.json();
        const infectedData = document.getElementById("infectedData").innerHTML = fetchData.confirmed.value;
        const recoveredData = document.getElementById("recoveredData").innerHTML = fetchData.recovered.value;
        const deathsData = document.getElementById("deathsData").innerHTML = fetchData.deaths.value;
    } else {
        const infectedData = document.getElementById("infectedData").innerHTML = fetchData.confirmed.value;
        const recoveredData = document.getElementById("recoveredData").innerHTML = fetchData.recovered.value;
        const deathsData = document.getElementById("deathsData").innerHTML = fetchData.deaths.value;
    }
}
getData();

