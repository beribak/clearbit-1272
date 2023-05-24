const authorization = ""; // YOU NEED TO USE YOUR OWN API KEY
// 'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1'
// TODO

// const url = `https://person.clearbit.com/v1/people/email/warren@berkshirehathaway.com`;

const form = document.querySelector('#clearbitForm');
const input = document.querySelector('#clearbitEmail');
const fullName = document.querySelector('#userName');
const email = document.querySelector('#userEmail');
const bio = document.querySelector('#userBio');
const location = document.querySelector('#userLocation');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = `https://person-stream.clearbit.com/v2/people/find?email=${input.value}`;
    
    fetch(url, {
        headers: { 
            Authorization: authorization,
            'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1'
        }
     })         
     .then(res => res.json())
     .then((data) => {
        console.log(data);
        fullName.innerText = data.name.fullName
        email.innerText = data.email
        bio.innerText = data.timeZone
        location.innerText = data.geo.country
    })
});