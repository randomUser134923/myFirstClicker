let increment = 1;
let items = [
  {
    "name": "item_1", 
    "KOR_name": "초록버섯 잡기",
    "price": 10,
    "increment": 1
  },
  {
    "name": "item_2", 
    "KOR_name": "뿔버섯 잡기",
    "price": 100,
    "increment": 10
  }
]

let hasItem = [ 0,0,0,0 ]

function testFunction() {
  console.log("this is test");
}

function clickItem(itemID) {
  let str = "item_"+itemID+"_counter"
  let original = document.getElementById(str)
  ++hasItem[itemID];
  increment = increment + items[itemID].increment;
  original.innerHTML = hasItem[itemID]; 
}

function addMoosh() {
  let counter = document.getElementById('count-number').innerHTML;
  counter = parseInt(counter)+increment;
  document.getElementById('count-number').innerHTML = counter;
}

