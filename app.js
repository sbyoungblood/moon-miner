// SECTION variables

let totalDust = 80
let click = 1
let clickTotal = 0
let intervalTotal = 0

// SECTION arrays

let upgrades = [
  {
    name: 'shovel',
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'explosives',
    price: 250,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'rover',
    price: 500,
    quantity: 0,
    multiplier: 10,
    type: "click"
  }
];

let automation = [
  {
    name: 'astronaut',
    price: 1000,
    quantity: 0,
    multiplier: 20,
    type: "auto"
  },
  {
    name: 'habitat',
    price: 2500,
    quantity: 0,
    multiplier: 50 
  },
  {
    name: 'colony',
    price: 5000,
    quantity: 0,
    multiplier: 100
  }
];

let upgrade=[]


// SECTION draw functions

function drawDust(){
  let totalDustElem = document.getElementById('total-dust')

  // let template = ''

  // template += /*html*/
  // `
  // <div class="card text-center display-6 d-flex align-items-center">
  // <div>Dust: ${dust}</div>
  // </div>
  // `
  // dustElem.innerHTML = template

  totalDustElem.innerText = `${totalDust.toFixed(0)}`
}

function drawClickTotal(){
  let shovel = upgrades.find(upgrade => upgrade.name == 'shovel')
  let shovelClickTotal = shovel.multiplier * shovel.quantity
  console.log(shovelClickTotal);

  let explosives = upgrades.find(upgrade => upgrade.name == 'explosives')
  let explosivesClickTotal = explosives.multiplier * explosives.quantity
  console.log(explosivesClickTotal);

  let rover = upgrades.find(upgrade => upgrade.name == 'rover')
  let roverClickTotal = rover.multiplier * rover.quantity
  console.log(roverClickTotal);
  
  clickTotal = shovelClickTotal + explosivesClickTotal + roverClickTotal + click
  console.log(clickTotal);

upgrades.forEach(u=>{
  clickTotal+=u.multiplier * u.quantity
})
clickTotal+=click
let clickTotalElem = document.getElementById('click-total')
clickTotalElem.innerHTML = `${clickTotal}`
}



function drawIntervalTotal(){

  let astronaut = automation.find(automation => automation.name == 'astronaut')
  let astronautIntervalTotal = astronaut.multiplier * astronaut.quantity

  console.log(astronautIntervalTotal);

  let habitat = automation.find(automation => automation.name == 'habitat')
  let habitatIntervalTotal = habitat.multiplier * habitat.quantity

  console.log(habitatIntervalTotal);



  let colony = automation.find(automation => automation.name == 'colony')
  let colonyIntervalTotal = colony.multiplier * colony.quantity

  intervalTotal = astronautIntervalTotal + habitatIntervalTotal + colonyIntervalTotal

  let intervalTotalElem = document.getElementById('interval-total')
  intervalTotalElem.innerHTML = `${intervalTotal}`

}

function drawAstronautsTotal(){
  let astronautTotalElem = document.getElementById('total-astronauts')
  let astronautPriceElem = document.getElementById('astronaut-price')
  
  let astronautTotal = automation.find(automation => automation.name == 'astronaut')
  let astronautPrice = automation.find(automation => automation.name == 'astronaut')
  
  astronautTotalElem.innerHTML = ` ${astronautTotal.quantity}`
  astronautPriceElem.innerHTML = ` ${astronautPrice.price.toFixed(0)}`
}

function drawHabitatTotal(){
  let habitatTotalElem = document.getElementById('total-habitats')
  let habitatPriceElem = document.getElementById('habitat-price')
  
  let habitatTotal = automation.find(automation => automation.name == 'habitat')
  let habitatPrice = automation.find(automation => automation.name == 'habitat')
  
  habitatTotalElem.innerHTML = ` ${habitatTotal.quantity}`
  habitatPriceElem.innerHTML = ` ${habitatPrice.price.toFixed(0)}`
}


function drawColonyTotal(){
  let colonyTotalElem = document.getElementById('total-colonies')
  let colonyPriceElem = document.getElementById('colony-price')
  
  let colonyTotal = automation.find(automation => automation.name == 'colony')
  let colonyPrice = automation.find(automation => automation.name == 'colony')
  
  colonyTotalElem.innerHTML = ` ${colonyTotal.quantity}`
  colonyPriceElem.innerHTML = ` ${colonyPrice.price.toFixed(0)}`
}

function drawAutomationTotals(){
  drawAstronautsTotal()
  drawHabitatTotal()
  drawColonyTotal()
}


function drawShovelTotal(){
  let shovelTotalElem = document.getElementById('total-shovels')
  let shovelPriceElem = document.getElementById('shovel-price')
  
  let shovelTotal = upgrades.find(upgrade => upgrade.name == 'shovel')
  let shovelPrice = upgrades.find(upgrade => upgrade.name == 'shovel')
  
  shovelTotalElem.innerHTML = ` ${shovelTotal.quantity}`
  shovelPriceElem.innerHTML = ` ${shovelPrice.price.toFixed(0)}`
}

function drawExplosivesTotal(){
  let explosivesTotalElem = document.getElementById('total-explosives')
  let explosivesPriceElem = document.getElementById('explosives-price')

  let explosivesTotal = upgrades.find(upgrade => upgrade.name == 'explosives')
  let explosivesPrice = upgrades.find(upgrade => upgrade.name == 'explosives')
  
  explosivesTotalElem.innerHTML = ` ${explosivesTotal.quantity}`
  explosivesPriceElem.innerHTML = ` ${explosivesPrice.price.toFixed(0)}`
}

function drawRoversTotal(){
  let roversTotalElem = document.getElementById('total-rovers')
  let roversPriceElem = document.getElementById('rover-price')

  let roversTotal = upgrades.find(upgrade => upgrade.name == 'rover')
  let roversPrice = upgrades.find(upgrade => upgrade.name == 'rover')
  
  roversTotalElem.innerHTML = ` ${roversTotal.quantity}`
  roversPriceElem.innerHTML = ` ${roversPrice.price.toFixed(0)}`
}



function drawUpgradeTotals(upgrade){
  // drawShovelTotal()
  // drawExplosivesTotal()
  // drawRoversTotal()
console.log(upgrade)

let upgradeTotalElem = document.getElementById(`total-${upgrade.name}`)
let upgradePriceElem = document.getElementById(`${upgrade.name}-price`)

upgradeTotalElem = upgrade.quantity
upgradePriceElem=upgrade.price


}

// SECTION additional functions

// function mine(){
//   totalDust++
//   drawDust()
// }

function mine(){
  upgrades.forEach(upgrade =>{
    totalDust += (upgrade.quantity * upgrade.multiplier)
  })
  totalDust++
  drawDust()
}

function mineInterval(){
  automation.forEach(automation =>{
    totalDust += (automation.quantity * automation.multiplier)
  })
  drawDust()
}

function purchaseUpgrade(upgradeName){
  let purchasedUpgrade = upgrades.find(upgrade => upgrade.name == upgradeName)
  
  
  if(totalDust >= purchasedUpgrade.price){
    totalDust -= purchasedUpgrade.price
    purchasedUpgrade.quantity++
    purchasedUpgrade.price += purchasedUpgrade.price * .20
  }else{
      window.alert("Oof. You're practically broke. Mine the moon!")
    }
  
  // console.log(purchasedUpgrade);
  drawClickTotal()
  drawUpgradeTotals(purchaseUpgrade)
  drawDust()
}
function purchaseAutomation(automationName){
  let purchasedAutomation = automation.find(automation => automation.name == automationName)
  
  if(totalDust >= purchasedAutomation.price){
    totalDust -= purchasedAutomation.price
    purchasedAutomation.quantity++
    purchasedAutomation.price += purchasedAutomation.price * .30
  }else{
    window.alert("Oof. You're practically broke. Mine the moon!")
  }
  // console.log(purchasedAutomation);
  drawIntervalTotal()
  drawAutomationTotals()
  drawDust()
}

drawDust()

setInterval(mineInterval, 3000)
