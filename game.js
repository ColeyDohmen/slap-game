let health = {
    characterHealth: 100,
    nameJumbo: "Jumbo",
    hit: 0,
    backpack:[]    
}

let items = {
    fire: {
        name: 'Fire',
        modifier: 3,
        description: "Fire nation attack!"
    },
    water: {
        name: 'Water',
        modifier: 1,
        description: "Water Oppa's attack!"
    },
    air: {
        name: 'Air',
        modifier: 2,
        description: "Go stupid Aang!"
    },
    earth: {
        name: 'Earth',
        modifier: 5,
        description: "Go flying Rock Johnson!"
    }
}

function addMods(){
    let combinedModifier = 0
    for(let i = 0; i < health.backpack.length; i++){
        // combinedModifier++
        combinedModifier += health.backpack[i].modifier
        console.log(combinedModifier)
    }
    return combinedModifier
   
}

console.log(addMods())
function giveItem(itemKey){
    let item = items[itemKey]
    health.backpack.push(item)
    console.log(health.backpack)
}

function attack(damage){
    health.characterHealth-= damage + addMods()
    health.hit++
    checkHealth()
    

    update();
}

function update(){
    console.log(health.characterHealth)
    console.log(health.hit)
    document.getElementById('health').innerText = health.characterHealth.toString()
    document.getElementById('nameJumbo').innerText = health.nameJumbo.toString();
    document.getElementById('hit').innerText = health.hit.toString();
}

function checkHealth(){
    if(health.characterHealth <= 0){
        health.characterHealth = 0 
    }
}

update();