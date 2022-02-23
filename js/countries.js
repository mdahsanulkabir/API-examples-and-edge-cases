const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
    const countriesdDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');


        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = "Details";
        btn.setAttribute('onclick', `loadCountriesByName('${country.name.common}')`);
        div.appendChild(btn);


        countriesdDiv.appendChild(div);
        div.addEventListener('click', (event) =>{
            if(event.target.tagName.toLowerCase() == 'div'){
                if(event.target.style.backgroundColor != 'yellow'){
                    event.target.style.backgroundColor = 'yellow';
                }
                else {
                    event.target.style.backgroundColor = 'transparent';
                }
            }
            else{
                if(event.target.parentNode.style.backgroundColor != 'yellow'){
                    event.target.parentNode.style.backgroundColor = 'yellow';
                }
                else {
                    event.target.parentNode.style.backgroundColor = 'transparent';
                }
            }
        });

    });
};


const loadCountriesByName = countryName => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h5>${country.name.common}</h5>
        <p>${country.population} persons</p>
        <img src=${country.maps.googleMaps}>
    `;
    
}