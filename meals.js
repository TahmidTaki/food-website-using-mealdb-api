const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}...</p>
        </div>`;
        mealsContainer.appendChild(mealDiv);
    })
}
loadMeal('rice');

const loadMealDetail = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(r => r.json())
        .then(d => displayMealDetails(d.meals[0]))
}

const displayMealDetails = (meal) => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
            the
            card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(mealDiv);
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    loadMeal(searchFieldValue);
    searchFieldValue.value = '';
}