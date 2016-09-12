const levelGrids = [
  {
    tileGrid: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
      [0,2,2,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
      [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    player: {
      position:{ x: 2, y: 2 }
    },
    enemies: [
      { position: { x: 12, y: 11 },
        health: 1,
        type: "chrome",
        messages: {
          enemyDetected: "It's Chrome: the tentacles of Google are everywhere...",
          enemyAttacks: "Chrome tries to take over the world",
          playerAttacks: "You decide to install an open source browser instead of Google Chrome",
          enemyDefeated: "Chrome is gone, your next challenge is to start using Duck Duck Go search engine"
        }
      },
      { position: { x: 2, y: 17 },
          health: 1,
          type: "chrome",
          messages: {
            enemyDetected: "It's Chrome: the tentacles of Google are everywhere...",
            enemyAttacks: "Chrome tries to take over the world",
            playerAttacks: "You decide to install an open source browser instead of Google Chrome",
            enemyDefeated: "Chrome is gone, your next challenge is to start using Duck Duck Go search engine"
          }
      },
      { position: { x: 17, y: 2 },
          health: 1,
          type: "chrome",
          messages: {
            enemyDetected: "It's Chrome: the tentacles of Google are everywhere...",
            enemyAttacks: "Chrome tries to take over the world",
            playerAttacks: "You decide to install an open source browser instead of Google Chrome",
            enemyDefeated: "Chrome is gone, your next challenge is to start using Duck Duck Go search engine"
          }
      }
    ],
    enemyCount: 3,
    itemCount: 2,
    items: [
      { position: { x: 2, y: 2},
        type: "coffee"
      },
      { position: { x: 3, y: 3},
        type: "codeRed"
      }
    ]
  },

  {
    tileGrid:[
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,3,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,2,2,2,2,0,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,0,0,2,0,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
      [0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      { position: { x: 12, y: 11 },
        health: 3,
        type: "ie6",
        messages: {
          enemyDetected: "OMG it's ie6 - are people really still using it?",
          enemyAttacks: "ie6 doesn't support stuff and your code gets smushed and you lose 1 health point",
          playerAttacks: "You write backwards compatible code - take that, ie6!" ,
          enemyDefeated: "The world is now safe from ie6 and other outdated Microsoft products..."
        }
      },
      { position: { x: 12, y: 15 },
          health: 1,
          type: "chrome",
          messages: {
            enemyDetected: "It's Chrome: the tentacles of Google are everywhere...",
            enemyAttacks: "Chrome tries to take over the world",
            playerAttacks: "You decide to install an open source browser instead of Google Chrome",
            enemyDefeated: "Chrome is gone, your next challenge is to start using Duck Duck Go search engine"
          }
      },
      { position: { x: 15, y: 11 },
          health: 1,
          type: "chrome",
          messages: {
            enemyDetected: "It's Chrome: the tentacles of Google are everywhere...",
            enemyAttacks: "Chrome tries to take over the world",
            playerAttacks: "You decide to install an open source browser instead of Google Chrome",
            enemyDefeated: "Chrome is gone, your next challenge is to start using Duck Duck Go search engine"
          }
      }
    ],
    enemyCount: 3,
    itemCount: 2,
    items: [
      { position: { x: 4, y: 4},
        type: "coffee"
      },
      { position: { x: 5, y: 5},
        type: "codeRed"
      }
    ]
  },
  {
    tileGrid:[
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,2,1,1,1,1,1,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,3,1,1,0],
      [0,1,1,1,1,1,2,1,1,1,1,1,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,2,1,1,1,1,1,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,2,1,1,1,1,1,0],
      [0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0],
      [0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      { position: { x: 12, y: 11 },
        health: 3,
        type: "ie6",
        messages: {
          enemyDetected: "OMG it's ie6 - are people really still using it?",
          enemyAttacks: "ie6 doesn't support stuff and your code gets smushed and you lose 1 health point",
          playerAttacks: "You write backwards compatible code - take that, ie6!" ,
          enemyDefeated: "The world is now safe from ie6 and other outdated Microsoft products..."
        }
      }
    ],
    enemyCount: 1,
    itemCount: 2,
    items: [
      { position: { x: 6, y: 6},
        type: "coffee"
      },
      { position: { x: 7, y: 7},
        type: "codeRed"
      }
    ]
  }
]

module.exports = levelGrids
