let searchBox = document.getElementById("searchbox");
let btn = document.getElementById('search');
let resultBox = document.getElementById('resultBox');
let loader = document.getElementById("loader");

let networkRequest = async () => {
    let inputVal; // Declare inputVal here
    try {
        // Move the following line inside the function
        inputVal = searchBox.value;
        console.log(inputVal);
        let url = `https://restcountries.com/v3.1/name/${inputVal}/?fullText=true`;
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let result = await response.json();
        console.log(result);
        console.log('country name', Object.values(result[0].name)[0]);
        console.log("country capitals", result[0].capital[0]);
        console.log("country populations", result[0].population);
        console.log("currency", Object.keys(result[0].currencies)[0]);
        console.log("currency Name", Object.keys(result[0].currencies)[0]);
        console.log('currency Rupees', result[0].currencies[Object.keys(result[0].currencies)].name);
        console.log("language", Object.values(result[0].languages).toString("").split(",").join(","));
    } catch (error) {
        if (inputVal.length == 0) {
            resultBox.innerHTML =
                `<p>The input field can't be empty</p>`;
        } else {
            resultBox.innerHTML = `
                <p>Please Enter the Valid country Name</p>
            `;
        }
    }
}

// Assuming you want to call networkRequest when the button is clicked
btn.addEventListener('click', function (event) {
    event.preventDefault();
    networkRequest();
});
