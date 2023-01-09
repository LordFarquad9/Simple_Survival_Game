
// startup
console.log('script on')

scrollTo(0,0)


// game variables 
let score = 0;
let energy = 100;
let hydration = 100;

// nutritional values
let hydrationValue = 20;
let foodValue = 10;

// bear movemnt rate
let moveBearIn = 10;

// start location
let xcords = 7;
let ycords = 7;


// map creator, WILL NOT CHANGE POND BOUNDING BOXES, Will change full map bounding boxes
// color index === 0 = tan, 1 = green, 2 = blue, 3 = grey, 4 = brown
 let tiles = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ];

 const table = document.createElement("table");


 //caculate random numbers
 function getRandomInt1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let randomfoodX = getRandomInt1(2, 37);


  function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let randomfoodY = getRandomInt2(2, 37);


// place food in random location
  function placeFood() {
    let randomfoodX = getRandomInt1(2, 37);
    let randomfoodY = getRandomInt2(2, 37);
        do {
            randomfoodX = getRandomInt1(2, 37);
            randomfoodY = getRandomInt2(2, 37);
        } while (randomfoodX >= 7 && randomfoodX <= 15 && randomfoodY >= 12 && randomfoodY <= 19);
    tiles[randomfoodX][randomfoodY] = 4;
    console.log(randomfoodX)
    console.log(randomfoodY)
  }


  //starting food (f adds more)
  placeFood()
  placeFood()
  placeFood()
  placeFood()
  placeFood()
  placeFood()


// place point in random location
  function placePoint() {
    let randompointX = getRandomInt1(2, 37);
    let randompointY = getRandomInt2(2, 37);
        do {
            randompointX = getRandomInt1(2, 37);
            randompointY = getRandomInt2(2, 37);
        } while (randompointX >= 7 && randompointX <= 14 && randompointY >= 12 && randompointY <= 19);
    tiles[randompointX][randompointY] = 6;
    console.log(randompointX)
    console.log(randompointY)
  }

  // starting point
  placePoint()


  //get old bear location and replace it
  let originalTiles = [];
    for (let i = 0; i < tiles.length; i++) {
        originalTiles[i] = tiles[i].slice();
}


// place bear in random location
  function placeBear() {

    // find old bear
    let bearX = -1;
    let bearY = -1;
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[i].length; j++) {
        if (tiles[i][j] === 5) {
          bearX = i;
          bearY = j;
          break;
        }
      }
    }
  
    // Remove the old bear
    if (bearX !== -1 && bearY !== -1) {
        tiles[bearX][bearY] = originalTiles[bearX][bearY];
    }

    // place new bear
    let randombearX = getRandomInt1(2, 37);
    let randombearY = getRandomInt2(2, 37);
    tiles[randombearX][randombearY] = 5;

    draw()
  }


// place second bear in random location
  function placeBear2() {

    // find old bear
    let bearX2 = -1;
    let bearY2 = -1;
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[i].length; j++) {
        if (tiles[i][j] === 7) {
          bearX2 = i;
          bearY2 = j;
          break;
        }
      }
    }
  
    // Remove the old bear
    if (bearX2 !== -1 && bearY2 !== -1) {
        tiles[bearX2][bearY2] = originalTiles[bearX2][bearY2];
    }

    // place new bear
    let randombear2X = getRandomInt1(2, 37);
    let randombear2Y = getRandomInt2(2, 37);
    tiles[randombear2X][randombear2Y] = 7;

    draw()
  }


// place third bear in random location
  function placeBear3() {

    // find old bear
    let bearX3 = -1;
    let bearY3 = -1;
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[i].length; j++) {
        if (tiles[i][j] === 8) {
          bearX3 = i;
          bearY3 = j;
          break;
        }
      }
    }
  
    // Remove the old bear
    if (bearX3 !== -1 && bearY3 !== -1) {
        tiles[bearX3][bearY3] = originalTiles[bearX3][bearY3];
    }

    // place new bear
    let randombear3X = getRandomInt1(2, 37);
    let randombear3Y = getRandomInt2(2, 37);
    tiles[randombear3X][randombear3Y] = 8;

    draw()
  }


// get map dimentions for bounding 
 console.log(`Map Height: ${tiles.length}`);
 console.log(`Map Width: ${tiles[0].length}`);

let mapHeight = tiles.length
let mapLength = tiles[0].length




// draw initial board
function draw1(){
tiles.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(color => {
      const td = document.createElement("td");
    if (color === 0) {
        td.classList.add("tan");
    } else if (color === 1){
         td.classList.add("green");
    } else if (color === 2) {
        td.classList.add("blue");
    } else if (color === 3) {
        td.classList.add("black");
    } else if (color === 4) {
        td.classList.add("red");    
    } else if (color === 5) {
        td.classList.add("brown"); 
    } else if (color === 6) {
        td.classList.add("yellow");
    } else if (color === 7) {
        td.classList.add("brown");
    } else if (color === 8) {
        td.classList.add("brown");
    }else {
         td.classList.add('green');
      }
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

// first draw
draw1()



// redraw board on events
function draw(){
    while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
    
    tiles.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(color => {
          const td = document.createElement("td");
        if (color === 0) {
            td.classList.add("tan");
        } else if (color === 1){
             td.classList.add("green");
        } else if (color === 2) {
            td.classList.add("blue");
        } else if (color === 3) {
            td.classList.add("black");
        } else if (color === 4) {
            td.classList.add("red");  
        }else if (color === 5) {
            td.classList.add("brown"); 
        } else if (color === 6) {
            td.classList.add("yellow");
        } else if (color === 7) {
            td.classList.add("brown");
        } else if (color === 8) {
            td.classList.add("brown");
        }  
        else {
             td.classList.add('green')
          }
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
    }
 


document.getElementById("map").appendChild(table);

// initilize debug
document.getElementById('debug').innerHTML = 'Character ' + '= ' + xcords + ',' + ycords

let debug = document.getElementById('debug').innerHTML


// controll
document.addEventListener('keydown', movePlayer);

// get current character cell
const currentCell = table.rows[ycords].cells[xcords];



function movePlayer(event) {

// Get the key that was pressed
const key = event.key;

// Get the player's current position
let x = xcords;
let y = ycords;


//game variable  aplliers 
const scoreElement = document.getElementById("score");
scoreElement.textContent = `Score = ${score}`;
document.body.appendChild(scoreElement);

const energyElement = document.getElementById("energy");
energyElement.textContent = `Energy = ${energy}`;
document.body.appendChild(energyElement);

const hydrationElement = document.getElementById("hydration");
hydrationElement.textContent = `Hydration = ${hydration}`;
document.body.appendChild(hydrationElement);

    // get current cell
    const currentCell = table.rows[ycords].cells[xcords];

    // replace cells
    switch (tiles[ycords][xcords]) {
    case 0:
        currentCell.style.backgroundColor = 'rgb(245, 232, 199)';
        break;
    case 1:
        currentCell.style.backgroundColor = 'rgb(109, 160, 108)';
        break;


// relpace items
    // watter
    case 2:
        currentCell.style.backgroundColor = 'rgb(160, 195, 210)';
        energy -= 1;
        hydration += hydrationValue;
        break;
    // food
    case 4:
        tiles[ycords][xcords] = 1;
        console.log('food')
        draw()
        placeFood()
        console.log(score)
        energy += foodValue;
        break;
    // bear
    case 5:
        alert('Death!  Died by: Bear Score: ' + score)
        location.reload()
    break;
    // point
    case 6:
        tiles[ycords][xcords] = 1;
        score ++;
        console.log(score)
        draw()
        placePoint()
    break;
    }



// update game variables
scoreElement.textContent = `Score = ${score}`;
document.body.appendChild(scoreElement);

energyElement.textContent = `Energy = ${energy}`;
document.body.appendChild(energyElement);

hydrationElement.textContent = `Hydration = ${hydration}`;
document.body.appendChild(hydrationElement);


// character controls
switch (key) {
    case 'w':
        y--;
        energy --;
        hydration --;
        console.log(energy)
        window.scrollBy(0, -22)
        moveBearIn --;
    break;
    case 'a':
        x--;
        energy --;
        hydration --;
        console.log(energy)
        window.scrollBy(-22, 0)
        moveBearIn --;
    break;
    case 's':
        y++;
        energy --;
        hydration --;
        console.log(energy)
        window.scrollBy(0, 22)
        moveBearIn --;
    break;
    case 'd':
        x++;
        energy --;
        hydration --;
        console.log(energy)
        window.scrollBy(22, 0)
        moveBearIn --;
    break;
    

    // world controllers
    case 'f':
        draw()
        placeFood()
        console.log(tiles)
    break;
    case 'b':
        placeBear()
    break;
    case 'B':
        placeBear2()
    break;
    case 'p':
        draw()
        placePoint()
    break;   
    case 'r':
        location.reload()
    break; 
    
}


// debug update
document.getElementById('debug').innerHTML = 'Character ' + '= ' + xcords + ',' + ycords


// bear movment
if (moveBearIn === 0){
    draw()
    placeBear()
    placeBear2()
    placeBear3()
    moveBearIn += 10;
}

// check character status
if (x >= 0 && x < tiles[0].length && y >= 0 && y < tiles.length) {

    xcords = x;
    ycords = y;

    const newCell = table.rows[y].cells[x];

    // redraw character
    newCell.style.backgroundColor = 'rgb(247, 245, 235)';

    // check death
    if (energy === -2){
        alert('Death!  Died by: Hunger  Score: ' + score)
        location.reload()
    }
    if (hydration === -2){
        alert('Death!  Died by: Dehydration  Score: ' + score)
        location.reload()
    }
}

}




      