module.exports = {

  Chrome: {
    type: "chrome",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Google wants to rule the world => well-being- -",
      playerAttacks: "Installing an open source browser to replace Chrome",
      // enemyDefeated: "Chrome gone, next step: use Duck Duck Go search engine!"
    }
  },

  Firefox: {
    type: "firefox",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Unhelpful Firefox developer tools => well-being- -",
      playerAttacks: "Replacing Firefox with another browser solves problem",
      // enemyDefeated: "You've been blooded!"
    }
  },

  Ie6: {
    type: "ie6",
    health: 4,
    attack: 2,
    messages: {
      enemyAttacks: "Internet Explorer makes itself the default browser => well-being- -",
      playerAttacks: "Uninstalling Internet Exploder fixes issue (eventually)",
      // enemyDefeated: "Outdated Microsoft product dies!"
    }
  },

  Safari: {
    type: "safari",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Perfect Apple product doesn't support plug-ins => well-being- -",
      playerAttacks: "Abandoning Apple for Linux gives you nerd cred",
      // enemyDefeated: "There's only a core left of that apple!"
    }
  },

  Var: {
    type: "var",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Confusion over variable scope of var => well-being- -",
      playerAttacks: "Learning to use scope correctly improves code",
      // enemyDefeated: "Your code is safe from ambiguously mutable variables!"
    }
  },

  Const: {
    type: "const",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Confusion over constant variables, well-being- -",
      playerAttacks: "Learning that variable != varying helps",
      // enemyDefeated: "Hurrah - no more 'constant' variable weirdness!"
    }
  },

  Let: {
    type: "let",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Confusion over scope of let => well-being- -",
      playerAttacks: "Learning to use scope correctly improves code",
      }
  },

  Bracket: {
    type: "bracket",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: misplaced bracket => well-being- -",
      playerAttacks: "Neat indentation helps you pair brackets",
      }
  },

  Comma: {
    type: "comma",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: missing comma in array => well-being- -",
      playerAttacks: "Losing will to live, but all commas are now correct",
    }
  },

  Emeny: {
    type: "emeny",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Syntax error: typo breaks program => well-being - -",
      playerAttacks: "Using autocomplete in code editor improves accuracy",
    }
  },

  Promise: {
    type: "promise",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Promises chain ties code in knots => well-being- -",
      playerAttacks: "Executing the promise just returns a new promise!",
    }
  },

  Async: {
    type: "async",
    health: 1,
    attack: 5,
    messages: {
      enemyAttacks: "Async code sends you to Callback Hell => well-being- -",
      playerAttacks: "Callback calls another callback calls another callback..."
    }
  }

}
