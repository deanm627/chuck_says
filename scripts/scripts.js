'use strict';

const categoryListEle = document.querySelector('#categoryList');
const chuckQuote = document.querySelector('#chuckQuote');

document.addEventListener('DOMContentLoaded', async function() {
    console.log("DOM is ready");

    const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
    makeQuote(apiUrl);

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    // getWithAwait(categoriesUrl).then(function(response) {
    //     makeCategoryList(response);
    // });

    const response = await getWithAwait(categoriesUrl);
    makeCategoryList(response);

    categoryListEle.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedCategory = this.querySelector('select').value;
        const apiUrl = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;
        makeQuote(apiUrl);
    });

});

async function makeQuote(url) {
    const response = await getWithAwait(url);
    showQuote(response.value, chuckQuote);
};

function showQuote(quote, element) {
    element.innerText = quote;
};

function makeCategoryList(categoryArr) {
    const filteredArr = categoryArr.filter((cat) => (cat !== 'explicit' && cat !== 'celebrity'));
    const selectEle = document.createElement('select');
    selectEle.classList.add("select");
    filteredArr.map(function (category) {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        selectEle.appendChild(option);
    });
    categoryListEle.append(selectEle);
};

