let myLogo;

let logoAni;

let gameState = 'title';

function preload(){

  logoAni = loadAnimation('assets/baylogo1.png', 'assets/baylogo2.png');

  techImg = loadImage('assets/tech.png');
  artImg = loadImage('assets/art.png');

  locationImg = loadImage('assets/location.png');

  berklocationImg = loadImage('assets/berklocation.png');
  oaklocationImg = loadImage('assets/oaklocation.png');
  sjlocationImg = loadImage('assets/sjlocation.png');
  sflocationImg = loadImage('assets/sflocation.png');

  berkhouse1Img = loadImage('assets/berkhouse1.png');
  berkhouse2Img = loadImage('assets/berkhouse2.png');
  oakhouse1Img = loadImage('assets/oakhouse1.png');
  oakhouse2Img = loadImage('assets/oakhouse2.png');
  sjhouse1Img = loadImage('assets/sjhouse1.png');
  sjhouse2Img = loadImage('assets/sjhouse2.png');
  sfhouse1Img = loadImage('assets/sfhouse1.png');
  sfhouse2Img = loadImage('assets/sfhouse2.png');

  workImg = loadImage('assets/work.png');
  playImg = loadImage('assets/play.png');


 }

function setup() {
  createCanvas(500, 550);
  myLogo = new logo(width/2, height/5, 150);
}

function draw() {
  background(220);

  //animation(logoAni, 200, 200);


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
    case "locationA":
      locationAChoice();
      break;

      //oakland
    case "city1":
      city1Choice();
      break;
      //berk
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

    case "houseOak1":
      houseOak1Choice();
      break;
    case "houseOak2":
      houseOak2Choice();
      break;
    case "houseBerk1":
      houseBerk1Choice();
      break;
    case "houseBerk2":
      houseBerk2Choice();
      break;

    case "houseSf2":
      houseSf2Choice();
      break;
    case "houseSj2":
      houseSj2Choice();
      break;

      case "houseOakA":
        houseOakAChoice();
        break;
      case "houseBerkA":
        houseBerkAChoice();
        break;
      case "houseSfB":
        houseSfBChoice();
        break;
      case "houseSjB":
        houseSjBChoice();
        break;



       case "WPOakRich1":
         WPOakRich1Choice();
         break;
      case "WPOakRichA":
         WPOakRichAChoice();
         break;
       case "WPOakPoor1":
         WPOakPoor1Choice();
         break;
       case "WPOakPoorA":
         WPOakPoorAChoice();
         break;
       case "WPBerkRich1":
         WPBerkRich1Choice();
         break;
       case "WPBerkRichA":
         WPBerkRichAChoice();
         break;
       case "WPBerkPoor1":
         WPBerkPoor1Choice();
         break;
       case "WPBerkPoorA":
         WPBerkPoorAChoice();
         break;

         case "WPSfRich1":
           WPSfRich1Choice();
           break;
         case "WPSfRichA":
           WPSfRichAChoice();
           break;
         case "WPSfPoor1":
           WPSfPoor1Choice();
           break;
         case "WPSfPoorA":
           WPSfPoorAChoice();
           break;
         case "WPSjRich1":
           WPSjRich1Choice();
           break;
         case "WPSjRichA":
           WPSjRichAChoice();
           break;
         case "WPSjPoor1":
           WPSjPoor1Choice();
           break;
         case "WPSjPoorA":
           WPSjPoorAChoice();
           break;


//tech job endings
         case "EndWOakRich1":
           EndWOakRich1Choice();
           break;
        case "EndPOakRich1":
            EndPOakRich1Choice();
            break;
        case "EndWOakPoor1":
            EndWOakPoor1Choice();
            break;
        case "EndPOakPoor1":
            EndPOakPoor1Choice();
            break;

        case "EndWBerkRich1":
            EndWBerkRich1Choice();
            break;
        case "EndPBerkRich1":
            EndPBerkRich1Choice();
            break;
        case "EndWBerkPoor1":
            EndWBerkPoor1Choice();
            break;
        case "EndPBerkPoor1":
            EndPBerkPoor1Choice();
            break;

            case "EndWSfRich1":
              EndWSfRich1Choice();
              break;
            case "EndPSfRich1":
              EndPSfRich1Choice();
              break;
              case "EndWSfPoor1":
                EndWSfRich1Choice();
                break;
              case "EndPSfPoor1":
                EndPSfPoor1Choice();
                break;

                case "EndWSjRich1":
                  EndWSjRich1Choice();
                  break;
                case "EndPSjRich1":
                  EndPSjRich1Choice();
                  break;
                  case "EndWSjPoor1":
                    EndWSjPoor1Choice();
                    break;
                  case "EndPSfPoor1":
                    EndPSjPoor1Choice();
                    break;

                    //art job endings
                             case "EndWOakRichA":
                               EndWOakRichAChoice();
                               break;
                            case "EndPOakRichA":
                                EndPOakRichAChoice();
                                break;
                            case "EndWOakPoorA":
                                EndWOakPoorAChoice();
                                break;
                            case "EndPOakPoorA":
                                EndPOakPoorAChoice();
                                break;

                            case "EndWBerkRichA":
                                EndWBerkRichAChoice();
                                break;
                            case "EndPBerkRichA":
                                EndPBerkRichAChoice();
                                break;
                            case "EndWBerkPoorA":
                                EndWBerkPoorAChoice();
                                break;
                            case "EndPBerkPoorA":
                                EndPBerkPoorAChoice();
                                break;

                                case "EndWSfRichA":
                                  EndWSfRichAChoice();
                                  break;
                                case "EndPSfRichA":
                                  EndPSfRichAChoice();
                                  break;
                                  case "EndWSfPoorA":
                                    EndWSfRichAChoice();
                                    break;
                                  case "EndPSfPoorA":
                                    EndPSfPoorAChoice();
                                    break;

                                    case "EndWSjRichA":
                                      EndWSjRichAChoice();
                                      break;
                                    case "EndPSjRichA":
                                      EndPSjRichAChoice();
                                      break;
                                      case "EndWSjPoorA":
                                        EndWSjPoorAChoice();
                                        break;
                                      case "EndPSfPoorA":
                                        EndPSjPoorAChoice();
                                        break;
                                        case "EndPSjPoorA":
                                          EndPSjPoorAChoice();
                                          break;


  }
}

class logo {

  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
  }

  display() {
animation(logoAni, 250, 125);
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
      gameState = 'locationA';
    }

    // location same for 1 and 2
  } else if (gameState === "location1") {
    if (key === '1' || key === '1') {
      gameState = 'city1';
    } else if (key === '2' || key === '2') {
      gameState = 'city2';
    }

    //location same for 1 and 2
  } else if (gameState === "locationA") {
    if (key === '1' || key === '1') {
      gameState = 'cityA';
    } else if (key === '2' || key === '2') {
      gameState = 'cityB';
    }

  } else if (gameState === "city1") {
    if (key === '1' || key === '1') {
      gameState = 'houseOak1';
    } else if (key === '2' || key === '2') {
      gameState = 'houseBerk1';
    }

  } else if (gameState === "city2") {
    if (key === '1' || key === '1') {
      gameState = 'houseSf2';
    } else if (key === '2' || key === '2') {
      gameState = 'houseSj2';
    }

  } else if (gameState === "cityA") {
    if (key === '1' || key === '1') {
      gameState = 'houseOakA';
    } else if (key === '2' || key === '2') {
      gameState = 'houseBerkA';
    }

  } else if (gameState === "cityB") {
    if (key === '1' || key === '1') {
      gameState = 'houseSfB';
    } else if (key === '2' || key === '2') {
      gameState = 'houseSjB';
    }

  } else if (gameState === "houseOak1") {
    if (key === '1' || key === '1') {
      gameState = 'WPOakRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'WPOakPoor1';
    }

  } else if (gameState === "houseBerk1") {
    if (key === '1' || key === '1') {
      gameState = 'WPBerkRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'WPBerkPoor1';
    }

  } else if (gameState === "houseSf2") {
    if (key === '1' || key === '1') {
      gameState = 'WPSfRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'WPSfPoor1';
    }

  } else if (gameState === "houseSj2") {
    if (key === '1' || key === '1') {
      gameState = 'WPSjRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'WPSjPoor1';
    }

  } else if (gameState === "houseOakA") {
    if (key === '1' || key === '1') {
      gameState = 'EndWOakRichA';
    } else if (key === '2' || key === '2') {
      gameState = 'WPOakPoorA';
    }

  } else if (gameState === "houseBerkA") {
    if (key === '1' || key === '1') {
      gameState = 'WPBerkRichA';
    } else if (key === '2' || key === '2') {
      gameState = 'WPBerkPoorA';
    }

  } else if (gameState === "houseSfB") {
    if (key === '1' || key === '1') {
      gameState = 'EndWSfRichA';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPSfPoorA';
    }

  } else if (gameState === "houseSjB") {
    if (key === '1' || key === '1') {
      gameState = 'WPSjRichA';
    } else if (key === '2' || key === '2') {
      gameState = 'WPSjPoorA';
    }


//tech job endings
  } else if (gameState === "WPOakRich1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWOakRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPOakRich1';
    }

  } else if (gameState === "WPOakPoor1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWOakPoor1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPOakPoor1';
    }

  } else if (gameState === "WPBerkRich1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWBerkRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPBerkRich1';
    }

  } else if (gameState === "WPBerkPoor1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWBerkPoor1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPBerkPoor1';
    }

  } else if (gameState === "WPSfRich1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWSfRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPSfRich1';
    }

  } else if (gameState === "WPSfPoor1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWSfPoor1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPSfPoor1';
    }

  } else if (gameState === "WPSjRich1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWSjRich1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPSjRich1';
    }

  } else if (gameState === "WPSjPoor1") {
    if (key === '1' || key === '1') {
      gameState = 'EndWSjPoor1';
    } else if (key === '2' || key === '2') {
      gameState = 'EndPSjPoor1';
    }

    //art job endings
  } else if (gameState === "WPOakRichA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWOakRichA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPOakRichA';
        }

      } else if (gameState === "WPOakPoorA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWOakPoorA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPOakPoorA';
        }

      } else if (gameState === "WPBerkRichA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWBerkRichA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPBerkRichA';
        }

      } else if (gameState === "WPBerkPoorA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWBerkPoorA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPBerkPoorA';
        }

      } else if (gameState === "WPSfRichA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWSfRichA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPSfRichA';
        }

      } else if (gameState === "WPSfPoorA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWSfPoorA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPSfPoorA';
        }

      } else if (gameState === "WPSjRichA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWSjRichA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPSjRichA';
        }

      } else if (gameState === "WPSjPoorA") {
        if (key === '1' || key === '1') {
          gameState = 'EndWSjPoorA';
        } else if (key === '2' || key === '2') {
          gameState = 'EndPSjPoorA';
        }


//return to start
} if (gameState === 'EndWOakRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWOakRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWOakPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWOakPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWBerkRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWBerkRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWBerkPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWBerkPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSfRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSfRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSfPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSfPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSjRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSjRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSjPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWSjPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPOakRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPOakRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPOakPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPOakPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPBerkRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPBerkRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPBerkPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndWBerkPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSfRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSfRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSfPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSfPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSjRich1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSjRichA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSjPoor1') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


} if (gameState === 'EndPSjPoorA') {
  if (key === ' ' || key === ' ') {
    gameState = 'title';
  }


}


  }


function titleScreen() {
  background(21, 21, 21);
  ellipse()
  fill(248, 161, 69);
  //rect(0, 400, 500);
  textSize(40);
  textAlign(CENTER);
  text('Press Space to Start', width * 0.5, height * 0.50);
myLogo.display();
//animation(logoAni, 200, 200);

}

function setupScreen() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(248, 161, 69);
  text('You just graduated college and are planning to move to the Bay Area!', width * 0.5, height * 0.56);
text('The Bay is a an area of cities located in Northern California.', width * 0.5, height * 0.60);
text('The area is a hub for tech, arts, culture, and much much more!', width * 0.5, height * 0.64);
text('Your hopes are high, and things looking bright.', width * 0.5, height * 0.68);
text('Surely nothing could go wrong!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Continue', width * 0.5, height * 0.90);

  myLogo.display();
}

function jobChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(248, 161, 69);
  text('The Bay is home to Silicon Valley.', width * 0.5, height * 0.56);
text('Silicon Valley is one of the biggest places to work in tech.', width * 0.5, height * 0.60);
text('Companies like Google, FaceBook, Apple, and more all reside here!', width * 0.5, height * 0.64);
text('The Bay is also home to a big art community.', width * 0.5, height * 0.68);
text('Art culture is an interagl part of the Bay.', width * 0.5, height * 0.72);
text('Working in this area around other creatives will surely help your work!', width * 0.5, height * 0.76);
text('What did you study in college again?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Tech or 2 for Art', width * 0.5, height * 0.90);

  image(techImg, 35, 60);
  image(artImg, 265, 60);
}

function location1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(248, 161, 69);

text('The Bay Area has many different cities surrounding the water.', width * 0.5, height * 0.64);
text('The Eastbay consists of cities like Oakland and Berkeley', width * 0.5, height * 0.68);
text('While the other side consists of cities like San Francisco and San Jose', width * 0.5, height * 0.72);
text('Both offer different living situations, but same great weather.', width * 0.5, height * 0.76);
text('Where would you like to live?', width * 0.5, height * 0.80);

  image(locationImg, 100, 30);

  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Eastbay or 2 for the Other Side of the Bay', width * 0.5, height * 0.90);
}

function locationAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(248, 161, 69);

  text('The Bay Area has many different cities surrounding the water.', width * 0.5, height * 0.64);
  text('The Eastbay consists of cities like Oakland and Berkeley', width * 0.5, height * 0.68);
  text('While the other side consists of cities like San Francisco and San Jose', width * 0.5, height * 0.72);
  text('Both offer different living situations, but same great weather.', width * 0.5, height * 0.76);
  text('Where would you like to live?', width * 0.5, height * 0.80);

  image(locationImg, 100, 30);

  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Eastbay or 2 for the Other Side of the Bay', width * 0.5, height * 0.90);
}

function city1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
text('You chose the Eastbay!', width * 0.5, height * 0.56);
fill(248, 161, 69);
text('Oakland is a historic city with great culture and mix of quiet and loud living.', width * 0.5, height * 0.60);
text('Due to the Dot Com Boom, house prices are rising and gentrification is prevalant', width * 0.5, height * 0.64);
text('Despite rising house prices, there are still some afforable options.', width * 0.5, height * 0.68);
text('Berkeley is a quiet town, known for their university.', width * 0.5, height * 0.72);
text('Houses here are afforable, and in areas for people that enjoy quiet.', width * 0.5, height * 0.76);
text('Which city do you want to live in?', width * 0.5, height * 0.80);


  textSize(20);
  fill(255, 255, 255);
  text('Press 1 for Oakland or 2 for Berkeley', width * 0.5, height * 0.90);

  image(oaklocationImg, 35, 60);
  image(berklocationImg, 265, 60);
}

function city2Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
text('You chose the Eastbay!', width * 0.5, height * 0.56);
fill(248, 161, 69);
text('Oakland is a historic city with great culture, and a bustling lifestyle.', width * 0.5, height * 0.60);
text('San Francisco has been hard with soaring housing prices and gentrification.', width * 0.5, height * 0.64);
text('Houses here will not be cheap.', width * 0.5, height * 0.68);
text('San Jose is a great mix of city and suburbs', width * 0.5, height * 0.72);
text('Houses here are can become pricey, yet some afforable options remain.', width * 0.5, height * 0.76);
text('Which city do you want to live in?', width * 0.5, height * 0.80);


  textSize(20);
  fill(255, 255, 255);
  text('Press 1 for San Francisco or 2 for San Jose', width * 0.5, height * 0.90);

  image(sflocationImg, 35, 60);
  image(sjlocationImg, 265, 60);
}

function cityAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
text('You chose the Eastbay!', width * 0.5, height * 0.56);
fill(248, 161, 69);
text('Oakland is a historic city with great culture and mix of quiet and loud living.', width * 0.5, height * 0.60);
text('Due to the Dot Com Boom, house prices are rising and gentrification is prevalant', width * 0.5, height * 0.64);
text('Despite rising house prices, there are still some afforable options.', width * 0.5, height * 0.68);
text('Berkeley is a quiet town, known for their university.', width * 0.5, height * 0.72);
text('Houses here are afforable, and in areas for people that enjoy quiet.', width * 0.5, height * 0.76);
text('Which city do you want to live in?', width * 0.5, height * 0.80);


  textSize(20);
  fill(255, 255, 255);
  text('Press 1 for Oakland or 2 for Berkeley', width * 0.5, height * 0.90);

  image(oaklocationImg, 35, 60);
  image(berklocationImg, 265, 60);
}

function cityBChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
text('You chose the Eastbay!', width * 0.5, height * 0.56);
fill(248, 161, 69);
text('Oakland is a historic city with great culture, and a bustling lifestyle.', width * 0.5, height * 0.60);
text('San Francisco has been hard with soaring housing prices and gentrification.', width * 0.5, height * 0.64);
text('Houses here will not be cheap.', width * 0.5, height * 0.68);
text('San Jose is a great mix of city and suburbs', width * 0.5, height * 0.72);
text('Houses here are can become pricey, yet some afforable options remain.', width * 0.5, height * 0.76);
text('Which city do you want to live in?', width * 0.5, height * 0.80);


  textSize(20);
  fill(255, 255, 255);
  text('Press 1 for San Francisco or 2 for San Jose', width * 0.5, height * 0.90);

  image(sflocationImg, 35, 60);
  image(sjlocationImg, 265, 60);
}

function houseOak1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
text('You chose Oakland!', width * 0.5, height * 0.56);
fill(248, 161, 69);
text('Looking on the market you have two options.', width * 0.5, height * 0.60);
text('Number 1 is big, in a nice neighborhood, and is near a busy commercial street.', width * 0.5, height * 0.64);
text('Number 2 is smaller and in not as good of a neighboorhood.', width * 0.5, height * 0.68);
text('The housing prices are pretty drastic between the two, but you job pays well.', width * 0.5, height * 0.72);
text('1 is far more expensive than 2', width * 0.5, height * 0.76);
text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Expensive House or 2 for the Cheaper House', width * 0.5, height * 0.90);

  image(oakhouse1Img, 35, 60);
  image(oakhouse2Img, 265, 60);
}

function houseSf2Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
text('You chose San Francisco!', width * 0.5, height * 0.56);
fill(248, 161, 69);
text('Looking on the market you have two options.', width * 0.5, height * 0.60);
text('Number 1 is moderate size and in a bustling area.', width * 0.5, height * 0.64);
text('Number 2 is very small and in a quieter neighboorhood.', width * 0.5, height * 0.68);
text('Both are extremely expensive, but your job pays well.', width * 0.5, height * 0.72);
text('1 is far more expensive than 2.', width * 0.5, height * 0.76);
text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Expensive House or 2 for the Cheaper House', width * 0.5, height * 0.90);

  image(sfhouse1Img, 35, 60);
  image(sfhouse2Img, 265, 60);
}

function houseBerk1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose Berkeley!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('Looking on the market you have two options.', width * 0.5, height * 0.60);
  text('Number 1 is big in size and in a quiet area.', width * 0.5, height * 0.64);
  text('Number 2 is moderate in size and also in a quiet area.', width * 0.5, height * 0.68);
  text('Both are moderate in price, but with your job, you shouldnt have to worry', width * 0.5, height * 0.72);
  text('However, 1 is more expensive than 2.', width * 0.5, height * 0.76);
  text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Expensive House or 2 for the Cheaper House', width * 0.5, height * 0.90);

  image(berkhouse1Img, 35, 60);
  image(berkhouse2Img, 265, 60);
}

function houseSj2Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose San Jose!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('Looking on the market you have two options.', width * 0.5, height * 0.60);
  text('Number 1 is big in size and in a quiet area.', width * 0.5, height * 0.64);
  text('Number 2 is moderate in size, but right next to down town.', width * 0.5, height * 0.68);
  text('Both are pricey, but with your job, you shoudlnt have to worry.', width * 0.5, height * 0.72);
  text('1 is more expensive than 2.', width * 0.5, height * 0.76);
  text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Expensive House or 2 for the Cheaper House', width * 0.5, height * 0.90);

  image(sjhouse1Img, 35, 60);
  image(sjhouse2Img, 265, 60);
}

function houseOakAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
text('You chose Oakland!', width * 0.5, height * 0.56);
fill(248, 161, 69);
text('Looking on the market you have two options.', width * 0.5, height * 0.60);
text('Number 1 is big, in a nice neighborhood, and is near a busy commercial street.', width * 0.5, height * 0.64);
text('Number 2 is smaller and in not as good of a neighboorhood.', width * 0.5, height * 0.68);
text('The housing prices are pretty drastic between the two.', width * 0.5, height * 0.72);
text('1 is far more expensive than 2', width * 0.5, height * 0.76);
text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Expensive house or 2 for the Cheaper house', width * 0.5, height * 0.90);

  image(oakhouse1Img, 35, 60);
  image(oakhouse2Img, 265, 60);
}

function houseSfBChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose San Francisco!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('Looking on the market you have two options.', width * 0.5, height * 0.60);
  text('Number 1 is moderate size and in a bustling area.', width * 0.5, height * 0.64);
  text('Number 2 is very small and in a quieter neighboorhood.', width * 0.5, height * 0.68);
  text('Both are extremely expensive, and your salary may not be enough.', width * 0.5, height * 0.72);
  text('1 is far more expensive than 2.', width * 0.5, height * 0.76);
  text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Expensive House or 2 for the Cheaper House', width * 0.5, height * 0.90);

  image(sfhouse1Img, 35, 60);
  image(sfhouse2Img, 265, 60);
}

function houseBerkAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose Berkeley!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('Looking on the market you have two options.', width * 0.5, height * 0.60);
  text('Number 1 is big in size and in a quiet area.', width * 0.5, height * 0.64);
  text('Number 2 is moderate in size and also in a quiet area.', width * 0.5, height * 0.68);
  text('Both are moderate in price, but 1 is more expensive than 2.', width * 0.5, height * 0.72);
  text('Being in a quiet area, your job could be affected.', width * 0.5, height * 0.76);
  text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the expensive house or 2 for the cheaper house', width * 0.5, height * 0.90);

  image(berkhouse1Img, 35, 60);
  image(berkhouse2Img, 265, 60);
}

function houseSjBChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose San Jose!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('Looking on the market you have two options.', width * 0.5, height * 0.60);
  text('Number 1 is big in size and in a quiet area.', width * 0.5, height * 0.64);
  text('Number 2 is moderate in size, but right next to down town.', width * 0.5, height * 0.68);
  text('Both are pricey, 1 being more expensive than 2.', width * 0.5, height * 0.72);
  text('Your job may affect your choice.', width * 0.5, height * 0.76);
  text('Which house do you want to live in?', width * 0.5, height * 0.80);


  textSize(17);
  fill(255, 255, 255);
  text('Press 1 for the Expensive House or 2 for the Cheaper House', width * 0.5, height * 0.90);

  image(sjhouse1Img, 35, 60);
  image(sjhouse2Img, 265, 60);
}


//houses chosen tech
function WPOakRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the expensive house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the expensive house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPOakPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the cheap house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the cheap house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPBerkRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the expensive house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the expensive house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPBerkPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the cheap house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the cheap house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPSfRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the expensive house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the expensive house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPSfPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the cheap house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the cheap house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPSjRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the expensive house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the expensive house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPSjPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the cheap house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the cheap house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}


//houses chosen art
function WPOakRichAChoice() {
  background(21, 21, 21);
  textSize(10);
  textAlign(CENTER);
  text('art u chose big house in oak 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPOakPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the cheap house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the cheap house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPBerkRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the expensive house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the expensive house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPBerkPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the cheap house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the cheap house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPSfRichAChoice() {
  background(21, 21, 21);
  textSize(10);
  textAlign(CENTER);
  text('a u chose big house in sf 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSfPoorAChoice() {
  background(21, 21, 21);
  textSize(10);
  textAlign(CENTER);
  text('a u chose small house in sf 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSjRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the expensive house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the expensive house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

function WPSjPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose the cheap house!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
  text('You were able to afford the cheap house!', width * 0.5, height * 0.60);
  text('You just moved all your stuff in, and are settling in comfortably.', width * 0.5, height * 0.64);
  text('Everything is looking great!', width * 0.5, height * 0.68);
  text('Being in a new city, you think you should have some fun.', width * 0.5, height * 0.72);
  text('Or should you work hard instead and get that money!', width * 0.5, height * 0.76);
  text('Which lifestyle do you want?', width * 0.5, height * 0.80);


  textSize(30);
  fill(255, 255, 255);
  text('Press 1 for Work or 2 for Play', width * 0.5, height * 0.90);

  image(workImg, 35, 60);
  image(playImg, 265, 60);
}

//tech job + big house endings
function EndWOakRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You worked really hard and got a lot of money.', width * 0.5, height * 0.60);
text('Since you didnt want to go out, you never met any people.', width * 0.5, height * 0.64);
text('You died alone, your only friend being Benjamin Franklin', width * 0.5, height * 0.68);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPOakRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('This resulted in no work being done.', width * 0.5, height * 0.64);
text('You got fired and had to move into your friends closet.', width * 0.5, height * 0.68);
text('I guess you only live once...', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWBerkRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You worked hard and made that money.', width * 0.5, height * 0.60);
text('You lived a regular life.', width * 0.5, height * 0.64);
text('You got married, had kids, and retired at 71', width * 0.5, height * 0.68);
text('You had a satisfying life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPBerkRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('You attended a lot of UC Berkeley parties.', width * 0.5, height * 0.64);
text('You had so much fun, you ended up quitting your job and joining greek life', width * 0.5, height * 0.68);
text('Your parents are no longer proud of you!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSfRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You worked hard and payed your rent.', width * 0.5, height * 0.60);
text('You work during the week, and relax on the weekends.', width * 0.5, height * 0.64);
text('Life in the city is good, and you couldnt be happier.', width * 0.5, height * 0.68);
text('You had a happy life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPSfRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('You did not go to work, and only payed 1 month of rent.', width * 0.5, height * 0.64);
text('You got evicted and became homeless.', width * 0.5, height * 0.68);
text('You had a regretful life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSjRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You worked hard and were able to pay rent.', width * 0.5, height * 0.60);
text('You didnt really do much else except for go out once a month.', width * 0.5, height * 0.64);
text('You got into bread making in you mid 40s', width * 0.5, height * 0.68);
text('You had a solid life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPSjRich1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('You were not able to sustain your rent', width * 0.5, height * 0.64);
text('You snuck into the Art Building at SJSU and live there now', width * 0.5, height * 0.68);
text('You had a hidden life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

//tech job + small house endings
function EndWOakPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You made a lot of money.', width * 0.5, height * 0.60);
text('You bought a boat with all the extra money you made.', width * 0.5, height * 0.64);
text('Sailing the waters of the Bay is your calling.', width * 0.5, height * 0.68);
text('You had a freeing life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPOakPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('You balanced both work and fun.', width * 0.5, height * 0.64);
text('You party on the weekends, but perfer not be out so late in your neighboorhood', width * 0.5, height * 0.68);
text('You had a happy life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWBerkPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You made a lot of money.', width * 0.5, height * 0.60);
text('You literally didnt do anything else.', width * 0.5, height * 0.64);
text('You had a boring life.', width * 0.5, height * 0.68);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPBerkPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('You got bored of partying fast.', width * 0.5, height * 0.64);
text('You got a second job as a professor at UC Berkeley', width * 0.5, height * 0.68);
text('You had a stressful life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSfPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You were able to pay rent.', width * 0.5, height * 0.60);
text('When working during the day, you take hikes during your breaks.', width * 0.5, height * 0.64);
text('You got really fit, and married a supermodel', width * 0.5, height * 0.68);
text('You had a healthy life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPSfPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('You mostly work, but go out sometimes.', width * 0.5, height * 0.64);
text('You adopted a dog named Chris.', width * 0.5, height * 0.68);
text('You and Chris had an amazing life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSjPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You worked hard and had some free time.', width * 0.5, height * 0.60);
text('You found your soul mate at work.', width * 0.5, height * 0.64);
text('You both retired young and traveled the world.', width * 0.5, height * 0.68);
text('You had an awesome life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPSjPoor1Choice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You went out and lived your life.', width * 0.5, height * 0.60);
text('You balanced both work and fun.', width * 0.5, height * 0.64);
text('While partying, you met friends for life.', width * 0.5, height * 0.68);
text('You had a friendly life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}



//art job + big house endings
function EndWOakRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You coudlnt afford rent', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('Rent was way to high and not possible.', width * 0.5, height * 0.60);
text('You got really discouraged and moved back home', width * 0.5, height * 0.64);
text('You spend your days thinking what couldve been', width * 0.5, height * 0.68);
text('You had a regretful life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPOakRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You never even payed 1 month of rent.', width * 0.5, height * 0.60);
text('You sold all your things just to try, but failed.', width * 0.5, height * 0.64);
text('You live with an old lady named Susane, cleaning her house as rent.', width * 0.5, height * 0.68);
text('You had a suprisingly ok life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWBerkRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('Your art flourished in the quiet', width * 0.5, height * 0.60);
text('You sold a lot of your work.', width * 0.5, height * 0.64);
text('You retired very young, and fufilled all your dreams.', width * 0.5, height * 0.68);
text('You had a perfect life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPBerkRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You lived your life.', width * 0.5, height * 0.60);
text('You still got some work in, and make great work.', width * 0.5, height * 0.64);
text('In your free time, you graffiti on walls.', width * 0.5, height * 0.68);
text('You had a rebellious life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSfRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You could not pay rent!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('The SF rent was way to high to maintain.', width * 0.5, height * 0.60);
text('You got discouraged and moved to a tent on the beach.', width * 0.5, height * 0.64);
text('You now spend your days painting the sunsets.', width * 0.5, height * 0.68);
text('You had a scenic life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPSfRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You could not pay rent!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You sold all your belongings for food.', width * 0.5, height * 0.60);
text('You now live in a friends bathroom', width * 0.5, height * 0.64);
text('You had an ok life.', width * 0.5, height * 0.68);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSjRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('Your art went to a whole new level.', width * 0.5, height * 0.60);
text('You sold a lot of your work.', width * 0.5, height * 0.64);
text('You are now a world renowned artist.', width * 0.5, height * 0.68);
text('You had an artistic life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPSjRichAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You couldnt sustain your lifestyle', width * 0.5, height * 0.60);
text('The partying got to you, and you forgot to pay rent', width * 0.5, height * 0.64);
text('You ended up having to move back home into your moms basement', width * 0.5, height * 0.68);
text('Your mom is no longer proud of you!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

//art job + small house endings
function EndWOakPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('Your art was appreciated.', width * 0.5, height * 0.60);
text('You worked, got married, and adopted 2 children.', width * 0.5, height * 0.64);
text('Both your kids became doctors.', width * 0.5, height * 0.68);
text('You had a proud life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPOakPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('Your art suffered', width * 0.5, height * 0.60);
text('You sold just enough to pay rent, but partied the rest of your time.', width * 0.5, height * 0.64);
text('You turned you life around in your 60s.', width * 0.5, height * 0.68);
text('You had the greatest comeback!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWBerkPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('Your art flourished in the quiet', width * 0.5, height * 0.60);
text('You sold a lot of your work.', width * 0.5, height * 0.64);
text('You had lots of free time, and took up rock climbing', width * 0.5, height * 0.68);
text('You had a cardiovascular life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPBerkPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You balanced your work and life', width * 0.5, height * 0.60);
text('Your work was not really effected by your partying', width * 0.5, height * 0.64);
text('You retired at a reasonable age.', width * 0.5, height * 0.68);
text('You had a good life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSfPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You could not afford rent!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('The SF housing prices were to great for you.', width * 0.5, height * 0.60);
text('You moved to a cave never to be seen again.', width * 0.5, height * 0.64);
text('You lived a descreet life.', width * 0.5, height * 0.68);

textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndPSfPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You could not afford rent!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('The SF housing prices were to great for you.', width * 0.5, height * 0.60);
text('You moved to a cave never to be seen again.', width * 0.5, height * 0.64);
text('You lived a descreet life.', width * 0.5, height * 0.68);

textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}

function EndWSjPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to work hard!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You balanced your work and life', width * 0.5, height * 0.60);
text('Your work was presented at the ICA multiple times', width * 0.5, height * 0.64);
text('You are a local hero.', width * 0.5, height * 0.68);
text('You had an influential life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();

}

function EndPSjPoorAChoice() {
  background(21, 21, 21);
  textSize(13);
  textAlign(CENTER);
  fill(255, 255, 255);
  text('You chose to have fun!', width * 0.5, height * 0.56);
  fill(248, 161, 69);
text('You procrastinated all your work.', width * 0.5, height * 0.60);
text('The stress got to much for you and you quit.', width * 0.5, height * 0.64);
text('You ended up rethinking your decisions.', width * 0.5, height * 0.68);
text('You had a regretful life!', width * 0.5, height * 0.72);
textSize(30);
fill(255, 255, 255);
text('Press Space to Try Again', width * 0.5, height * 0.90);


  myLogo.display();
}
