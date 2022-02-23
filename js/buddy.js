const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data));
}

const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    buddies.forEach(buddy => {
        const p = document.createElement('p');
        p.innerText = `Gender : ${buddy.gender},      NAME: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
        buddiesDiv.appendChild(p);
    });
};