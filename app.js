// SECTION variables

let dust = 0

// SECTION arrays

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'drill',
    price: 250,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'rover',
    price: 500,
    quantity: 0,
    multiplier: 10
  }
];

let automaticUpgrades = [
  {
    name: 'astronaut',
    price: 1000,
    quantity: 0,
    multiplier: 20
  },
  {
    name: 'habitat',
    price: 5000,
    quantity: 0,
    multiplier:50 
  },
  {
    name: 'colony',
    price: 10000,
    quantity: 0,
    multiplier: 100
  }
];

// SECTION draw functions

function drawDust(){
  let dustElem = document.getElementById('total-dust')

  // let template = ''

  // template += /*html*/
  // `
  // <div class="card text-center display-6 d-flex align-items-center">
  // <div>Dust: ${dust}</div>
  // </div>
  // `
  // dustElem.innerHTML = template

  dustElem.innerText = dust
}

// SECTION additional functions

function mine(){
  dust += 1
  console.log(dust);
  drawDust()
}


