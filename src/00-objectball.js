function gameObject() {
  debugger;
  const homeAway = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black, White"],
      players: {
        "Alan Anderson": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1",
        },
        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assists: "12",
          steals: "12",
          blocks: "12",
          slamDunks: "7",
        },
        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assists: "10",
          steals: "3",
          blocks: "1",
          slamDunks: "15",
        },
        "Mason Plumlee": {
          number: "1",
          shoe: "19",
          points: "26",
          rebounds: "12",
          assists: "6",
          steals: "3",
          blocks: "8",
          slamDunks: "5",
        },
        "Jason Terry": {
          number: "31",
          shoe: "15",
          points: "19",
          rebounds: "2",
          assists: "2",
          steals: "4",
          blocks: "11",
          slamDunks: "1",
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise, Purple"],
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assists: "1",
          steals: "2",
          blocks: "7",
          slamDunks: "2",
        },
        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "12",
          rebounds: "4",
          assists: "7",
          steals: "7",
          blocks: "15",
          slamDunks: "10",
        },
        "DeSagna Diop": {
          number: "2",
          shoe: "14",
          points: "24",
          rebounds: "12",
          assists: "12",
          steals: "4",
          blocks: "5",
          slamDunks: "5",
        },
        "Ben Gordon": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assists: "2",
          steals: "1",
          blocks: "1",
          slamDunks: "0",
        },
        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assists: "12",
          steals: "22",
          blocks: "5",
          slamDunks: "12",
        },
      },
    },
  };
  return homeAway;
}

function homeTeamName() {
  debugger;
  return gameObject()["home"]["teamName"];
}
function numPointsScored(playerName) {
  debugger;
  let game = gameObject();
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      debugger;
      if (teamKey === "players") {
        debugger;
        let players = teamObj[teamKey];
        if (players[playerName]) {
          debugger;
          return players[playerName].points;
        }
      }
    }
  }
  return `Player ${playerName} not found`;
}

function shoeSize(playerName) {
  debugger;
  let game = gameObject();
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      debugger;
      if (teamKey === "players") {
        debugger;
        let players = teamObj[teamKey];
        if (players[playerName]) {
          debugger;
          return players[playerName].shoe;
        }
      }
    }
  }
  return `Player ${playerName} not found`;
}

function teamColors(teamName) {
  debugger;
  let game = gameObject();
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey];
    if (teamObj.teamName === teamName) {
      return teamObj.colors;
    }
  }
  return `Team ${teamName} not found`;
}
function teamNames() {
  let game = gameObject();
  let allTeamNames = [];
  for (gameKey in game) {
    let teamObj = game[gameKey];
    allTeamNames.push(teamObj.teamName);
  }
  return allTeamNames;
}

function playerNumbers(teamName) {
  let jerseyNumbers = [];
  let game = gameObject();
  for (gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.teamName === teamName) {
      let players = teamObj.players;
      for (let player in players) {
        jerseyNumbers.push(players[player].number);
      }
      return `${teamName}: ${jerseyNumbers.join(",")}`;
    }
  }
  return `${teamName} not found`;
}

function playerStats(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName];
    }
  }
  return `Player ${playerName} not found`;
}

function bigShoe() {
  let game = gameObject();
  let largestShoeSize = 0;
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let playersObj = teamObj.players;
    for (let playerKey in playersObj) {
      let player = playersObj[playerKey];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
      }
    }
  }
  return `${largestShoeSize}`;
}

function bigShoeRebounds(bigShoecb) {
  largestShoeSize = bigShoecb();
  let rebounds = 0;
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let playersObj = teamObj.players;
    for (let playerKey in playersObj) {
      let player = playersObj[playerKey];
      if (player.shoe === largestShoeSize) {
        rebounds = player.rebounds;
      }
    }
  }
  return rebounds;
}

//Function Calls
console.log(gameObject());
console.log(homeTeamName());
console.log(numPointsScored("Ben Gordon"));
console.log(shoeSize("Bismak Biyombo"));
console.log(teamColors("Charlotte Hornets"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Jason Terry"));
console.log(bigShoe());
console.log(bigShoeRebounds(bigShoe));
debugger;
