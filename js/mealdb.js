const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data
    searchField.value = '';

    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    .catch(error => console.log(error));
}

const displaySearchResult = meals => {
    console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';   //clear previous data
    if(meals.length < 1){
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>No Result Found</h1>
        `;
        searchResult.appendChild(div);
        return;
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(1,250)}.</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));

}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(1,250)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Youtube Video</a>
        </div>
    `;
    mealDetails.appendChild(div);
}