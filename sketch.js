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
    } //h

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
      gameState = 'WPOakRichA';
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
      gameState = 'WPSfRichA';
    } else if (key === '2' || key === '2') {
      gameState = 'WPSfPoorA';
    }



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
  text('1 easbay or 2 for otherbay', width * 0.5, height * 0.66);
}

function locationAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('1 easbay or 2 for otherbay', width * 0.5, height * 0.66);
}

function city1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('1 for oakland or 2 for berk', width * 0.5, height * 0.66);
}

function city2Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('otherbay 1 for sf or 2 for sj', width * 0.5, height * 0.66);
}

function cityAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('eastbay 1 for oakland or 2 for berk', width * 0.5, height * 0.66);
}

function cityBChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('otherbay 1 for sf or 2 for sj', width * 0.5, height * 0.66);
}

function houseOak1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('oakhouse 1 or oakhouse 2', width * 0.5, height * 0.66);
}

function houseSf2Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('ssf house 1 or sf house 2', width * 0.5, height * 0.66);
}

function houseBerk1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('berk hosue 1 or berk house 2', width * 0.5, height * 0.66);
}

function houseSj2Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('sj house 1 or sj house2', width * 0.5, height * 0.66);
}

function houseOakAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('oakhouse 1 or oakhouse 2', width * 0.5, height * 0.66);
}

function houseSfBChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('sf house 1 or sf house 2', width * 0.5, height * 0.66);
}

function houseBerkAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('berk hosue 1 or berk house 2', width * 0.5, height * 0.66);
}

function houseSjBChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('sj house 1 or sj house2', width * 0.5, height * 0.66);
}

function WPOakRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose big house in oak 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPOakPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose small house in oak 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPBerkRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose big house in berk 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPBerkPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose small house in berk 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSfRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose big house in sf 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSfPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose small house in sf 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSjRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose big house in sj 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSjPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose small house in sj 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPOakRichAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('art u chose big house in oak 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPOakPoorAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('art u chose small house in oak 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPBerkRichAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('a u chose big house in berk 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPBerkPoorAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('a u chose small house in berk 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSfRichAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('a u chose big house in sf 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSfPoorAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('a u chose small house in sf 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSjRichAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text(' a u chose big house in sj 1 for work or 2 for play', width * 0.5, height * 0.66);
}

function WPSjPoorAChoice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('a u chose small house in sj 1 for work or 2 for play', width * 0.5, height * 0.66);
}

//tech job + big house endings
function EndWOakRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur big house', width * 0.5, height * 0.66);
}

function EndPOakRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the big house', width * 0.5, height * 0.66);
}

function EndWBerkRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur big house', width * 0.5, height * 0.66);
}

function EndPBerkRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the big house', width * 0.5, height * 0.66);
}

function EndWSfRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur big house', width * 0.5, height * 0.66);
}

function EndPSfRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the big house', width * 0.5, height * 0.66);
}

function EndWSjRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur big house', width * 0.5, height * 0.66);
}

function EndPSjRich1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the big house', width * 0.5, height * 0.66);
}

//tech job + small house endings
function EndWOakPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur small house', width * 0.5, height * 0.66);
}

function EndPOakPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the small house', width * 0.5, height * 0.66);
}

function EndWBerkPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur small house', width * 0.5, height * 0.66);
}

function EndPBerkPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the small house', width * 0.5, height * 0.66);
}

function EndWSfPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur small house', width * 0.5, height * 0.66);
}

function EndPSfPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the small house', width * 0.5, height * 0.66);
}

function EndWSjPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to work hard u kept ur small house', width * 0.5, height * 0.66);
}

function EndPSjPoor1Choice() {
  background(255);
  textSize(10);
  textAlign(CENTER);
  text('u chose to have fun u still kept the small house', width * 0.5, height * 0.66);
}
