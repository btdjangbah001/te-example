const te = require('tradingeconomics');
const createMarkup = require("./genMarkup");

const container = document.getElementById("div");
const btn = document.getElementById("btn");
const opt = document.getElementById("pair");

te.login("71d269e211b2486:lm0nj3hf76gdis4");

let result;

te.getMarketSnap(marketsField = 'currency').then(function (data) {
    result = data;
    console.log(data);
});

const analyseTrade = (e) => {
    e.preventDefault();
    const choice = opt.value;
    const pair = findPair(choice, result);
    const html = createMarkup(choice, pair);
    clearContainer()
    container.insertAdjacentHTML("afterbegin", html);
}

const clearContainer = () => {
    container.innerHTML = "";
}

const findPair = (choice, searchPool) => {
    return searchPool.filter(curPair => curPair.Symbol === `${choice}:CUR`);
}

btn.addEventListener("click", analyseTrade);