const initialState = {
  tileGrid: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ],
  player: {
    position: {
      x: 1,
      y: 6
    },
    health: 20,
    charge: 100,
    xp: 0,
    attack: 1,
    defence: 1
  },
  enemies: [
    { position: { x: 1, y: 4 },
      health: 2,
      type: "ie6",
      messages: {
        enemyAttacks: "Your code is smushed by Internet Explorer v1-8...",
        playerAttacks: "Writing backwards compatible code to deal to Internet Explorer...",
        enemyDefeated: "Outdated Microsoft product dies!"
      }
    },

    { position: { x: 12, y: 6 },
      health: 1,
      type: "chrome",
      messages: {
        enemyAttacks: "Google Chrome is trying to take over the world...",
        playerAttacks: "Installing an open source browser to replace Google Chrome...",
        enemyDefeated: "Chrome is gone, now start using Duck Duck Go search engine!"
      }
    },

    { position: { x: 4, y: 7 },
      health: 1,
      type: "firefox",
      messages: {
        enemyAttacks: "Unhelpful Firefox developer tools slow you down...",
        playerAttacks: "Abandoning Firefox to go back to Chrome...",
        enemyDefeated: "Bye-bye cute fox logo!"
      }
    },

    { position: { x: 2, y: 5 },
      health: 1,
      type: "safari",
      messages: {
        enemyAttacks: "Safari doesn't support the plug-in you need - why would you want to add anything to an already perfect Apple product?",
        playerAttacks: "Hating on an Apple product gives you nerd cred...",
        enemyDefeated: "There's only a core left of that apple!"
      }
    }
  ],
  display: "start",
  currentLevel: 1,
  enemyCount: 4,
  loggedMessages: [ "Hello World!" ],
  items: [
    { position: { x: 1, y: 7},
      type: "coffee"
    },
    { position: { x: 5, y: 12},
      type: "codeRed"
    },
    { position: { x: 5, y: 5 },
      type: "battery"
    }
  ]
}

module.exports = initialState
