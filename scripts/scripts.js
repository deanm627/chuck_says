'use strict';

const categoryListEle = document.querySelector('#categoryList');
const chuckQuote = document.querySelector('#chuckQuote');

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM is ready");

    const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
    makeQuote(apiUrl);

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    get(categoriesUrl).then(function(response) {
        makeCategoryList(response);
    });

    categoryListEle.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedCategory = this.querySelector('select').value;
        const apiUrl = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;
        makeQuote(apiUrl);
    });

});

function makeQuote(url) {
    get(url).then(function(response) {
        showQuote(response.value, chuckQuote);
    });
}

function showQuote(quote, element) {
    element.innerText = quote;
};

function makeCategoryList(categoryArr) {
    const filteredArr = categoryArr.filter((cat) => cat !== 'explicit');
    const selectEle = document.createElement('select');
    filteredArr.map(function (category) {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        selectEle.appendChild(option);
    });
    categoryListEle.append(selectEle);
};

