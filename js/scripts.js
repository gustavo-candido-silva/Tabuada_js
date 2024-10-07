const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitleSpan= document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

const changeTitle = (number) => {
    multiplicationTitleSpan.innerHTML = number
}

const checkEmpty = (number, multiplicator) => {
    if(!number||!multiplicator)
        return true
    return false
}

const createTable = (number, multiplicator) => {
    const parser = new DOMParser();
    multiplicationTable.innerHTML = "";

    for (let multiplier = 0; multiplier <= multiplicator; multiplier++) {
        const result = number * multiplier;

        const template = 
            `<div class="row">
                <div class="operation">${number} x ${multiplier} = </div>
                <div class="result">${result}</div>
            </div>`;

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        changeTitle(number);
        multiplicationTable.appendChild(row);

    }

}

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = +numberInput.value;
    const multiplicator = +multiplicationInput.value;

    if(checkEmpty(number, multiplicator)) return;

    createTable(number, multiplicator);
})

