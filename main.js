const cardContainer = document.getElementById("cardContainer");
/*
for( let person in team){
    card = `
        <div class="card box">
            <div><img src="./img/${team[person].image}" alt=""></div>
            <div class="p-3">
              <div class="fw-bold">${team[person].name}</div>
              <div>${team[person].role}</div>
            </div>
        </div>
    `
    cardContainer.innerHTML += card;
    console.log(team[person].name);
    console.log(team[person].role);
    console.log(team[person].image);
    console.log("------------------")
}*/
for( let persona of team){
    card = `
    <div class="card box">
        <div><img src="./img/${persona.image}" alt=""></div>
        <div class="p-3">
          <div class="fw-bold">${persona.name}</div>
          <div>${persona.role}</div>
        </div>
    </div>
`
    cardContainer.innerHTML += card;
    console.log(persona.name);
    console.log(persona.role);
    console.log(persona.image);
    console.log("------------------")
}