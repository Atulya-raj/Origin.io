const openBtn = document.getElementById("openModal");
const openBtn2 = document.getElementById("openModal2");
const openBtn3 = document.getElementById("openModal3");
const openBtn4 = document.getElementById("openModal4");
const openBtn5 = document.getElementById("openModal5");

const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});
openBtn2.addEventListener("click", () => {
    modal.classList.add("open");
}); openBtn3.addEventListener("click", () => {
    modal.classList.add("open");
}); openBtn4.addEventListener("click", () => {
    modal.classList.add("open");
}); openBtn5.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});



function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
}



import { countryCodeToName } from './mapper.js';

async function fetchdata() {
    try {

        const username = document.getElementById("mytxt").value;
        const response = await fetch(`https://api.nationalize.io/?name=${username}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        console.log(data);
        if (data.country.length > 0) {
            const country = data.country[0].country_id;
            const accuracy = (data.country[0].probability * 100).toFixed(2);
            const countryName = countryCodeToName[country] || countryCode;
            const sentence = `${username} is from ${countryName} with ${accuracy}% certainty.`;
            document.getElementById("output").textContent = sentence;

            if (data.country.length > 1) {
                const country2 = data.country[1].country_id;
                const accuracy2 = (data.country[1].probability * 100).toFixed(2);
                const countryName2 = countryCodeToName[country2] || countryCode;
                const sentence2 = `${username} is from ${countryName2} with ${accuracy2}% certainty.`;
                document.getElementById("output2").textContent = sentence2;
            }

        } else {
            document.getElementById("output").textContent = `Uh oh.${username} is unknown to us`;
            document.getElementById("accuracy").textContent = "N/A";
        }
    }
    catch (error) {
        const username = document.getElementById("mytxt").value;

        console.error("Error fetching data:", error);
        document.getElementById("output").textContent = `Uh oh. "${username}" is unknown to us`;
    }
}

window.fetchdata = fetchdata;


// mapper
// popup
// border radius

// make it responsive
// deploy this (probably use github)