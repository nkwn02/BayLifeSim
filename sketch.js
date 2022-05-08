let gameState = 'title';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "setup":
      setupScreen();
      break;
    case "job":
      jobChoice();
      break;

      //eastbay
    case "location1":
      location1Choice();
      break;
      //otherbay
    case "location2":
      location2Choice();
      break;

      //oakland
    case "city1":
      city1Choice();
      break;
      //richmond
    case "city2":
      city2Choice();
      break;
      //sj
    case "cityA":
      cityAChoice();
      break;
      //sf
    case "cityB":
      cityBChoice();
      break;

  }
}

function keyReleased() {

  //title
  if (gameState === 'title') {
    if (key === ' ' || key === ' ') {
      gameState = 'setup';
    }

    //setting up background
  } else if (gameState === "setup") {
    if (key === ' ' || key === ' ') {
      gameState = "job";
    }

    // job artist or tech
  } else if (gameState === "job") {
    if (key === '1' || key === '1') {
      gameState = 'location1';
    } else if (key === '2' || key === '2') {
      gameState = 'location2';
    }

    // location same for 1 and 2
  } else if (gameState === "location1") {
    if (key === '1' || key === '1') {
      gameState = 'city1';
    } else if (key === '2' || key === '2') {
      gameState = 'city2';
    }

    //location same for 1 and 2
  } else if (gameState === "location2") {
    if (key === '1' || key === '1') {
      gameState = 'cityA';
    } else if (key === '2' || key === '2') {
      gameState = 'cityB';
    }
  }





}

function titleScreen() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('title press start', width * 0.5, height * 0.66);

}

function setupScreen() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('ur moving to the bay press start', width * 0.5, height * 0.66);
}

function jobChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('1 for tech 2 for artist', width * 0.5, height * 0.66);
}

function location1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('1 or 2 for location', width * 0.5, height * 0.66);
}

function location2Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('1 or 2 for location', width * 0.5, height * 0.66);
}

function city1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('eastbay 1 or 2', width * 0.5, height * 0.66);
}

function city2Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('eastbay 1 or 2', width * 0.5, height * 0.66);
}

function cityAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('other bay 1 or 2', width * 0.5, height * 0.66);
}

function cityBChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('otherbay 1 or 2', width * 0.5, height * 0.66);
}

//alot more code needed still need to plan out possibilities
