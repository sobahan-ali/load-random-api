
const url = 'https://randomuser.me/api/?results=10';


function loadData() {
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.results))
}

function displayData(data) {
    data.forEach(element => {
        const { email, gender, name, picture } = element;
        const { title, first, last } = name;


        const container = document.getElementById('random_container');
        container.innerText = '';
        container.innerHTML = `
            <div class="card mx-auto" style="width: 18rem;">
      <img src="${picture.large}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">name : ${title} ${first} ${last}</h5>
        <h5 class="card-title">gender : ${gender}</h5>
        <p class="card-text">email : ${email}</p>
        
      </div>
    </div>
            `


    });

};
loadData()