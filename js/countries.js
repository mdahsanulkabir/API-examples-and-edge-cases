const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
    const countriedDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriedDiv.appendChild(div);
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
}