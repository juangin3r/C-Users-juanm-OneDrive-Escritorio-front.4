
let paragraph = document.querySelector("#paragraph");

let span = document.querySelector("#id");

let img = document.querySelector(".container-img");

img.addEventListener("click", () => {
    fetch("	https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((response) =>{
        span.textContent = (`${response.slip.id}`);
        paragraph.textContent = (`"${response.slip.advice}"`);
    })
});

function get(){
    fetch("	https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((response) =>{
        span.textContent = (`${response.slip.id}`);
        paragraph.textContent = (`"${response.slip.advice}"`);
    })
};
get();