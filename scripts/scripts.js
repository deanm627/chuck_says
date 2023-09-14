'use strict';

const categoryListEle = document.querySelector('#categoryList');

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM is ready");

    const chuckQuote = document.querySelector('#chuckQuote');

    const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
    get(apiUrl).then(function(response) {
        showQuote(response.value, chuckQuote);
    });

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    get(categoriesUrl).then(function(response) {
        makeCategoryList(response);
    });
});

function showQuote(quote, element) {
    element.innerText = quote;
};

function makeCategoryList(categoryArr) {
    const selectEle = document.createElement('select');
    categoryArr.map(function (category) {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        selectEle.appendChild(option);
    });
    categoryListEle.append(selectEle);
};

categoryListEle = addEventListener("submit", function() {

});