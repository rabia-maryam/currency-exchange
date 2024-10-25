const target = document.getElementById("target-output");
const inputval = document.querySelector(".current h4");
let outputval = document.querySelector(".target h4");
let inputimg = document.querySelector(".current img");
let outputimg = document.querySelector(".target img")
let contryCode = "PKR";
let toCountry = "USD";


async function exchange() {
    let input = document.querySelector("input");
    if (input.value == "") {
        alert("please enter amount first");
    }
    else if (input.value == 0) {
        alert("Add valid value");
    }
    else {
        const apiKey = "edd054603cd13a1061469cae";
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${contryCode}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const amount = data.conversion_rates[toCountry];
        target.innerHTML = input.value * amount;
    }
}


let input = document.querySelector("input");
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        exchange();
    }
})


function swap() {
    let temp = contryCode;
    contryCode=toCountry;
    toCountry=temp;

    let tempinnerhtml=inputval.innerHTML;
    inputval.innerHTML=outputval.innerHTML;
    outputval.innerHTML=tempinnerhtml;

    let tempimg = inputimg.src;
    inputimg.src = outputimg.src;
    outputimg.src = tempimg;

    let input = document.querySelector("input");
    if(input.value != "" && input.value != 0){
    exchange()
    }

}

let clearbtn = document.getElementById('clear');
clearbtn.addEventListener('click',()=>{
    target.innerHTML="Exchanged amound";
    document.querySelector("input").value="";
    document.querySelector("input").placeholder ="Enter amount";
})
