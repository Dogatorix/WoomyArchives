// WIP Mode

module.exports = {
    "MODE": "tdm",
    "serverName": "Infiltration",
    "TEAM_AMOUNT": 1,
    "BOSS_SPAWN_TIMER": Infinity,
    "connectionLimit": 50,
    "ROOM_SETUP": [
        ["N R R R N N N N N N N N N N N N N N N N N N"],
        ["N b b b R N N N N N N N N N N N N N N N N N"],
        ["R b d b R N N N N N N N N N N N N N N N N N"],
        ["N b b b r N N N N N N N N N N N N N N N N N"],
        ["N r R r N N N N N N N N N N N N N N N N N N"],
        ["N b b b r N N N N N N N N N N N N N N N N N"],
        ["R b d b R N N N N N N N N N N N N N N N N N"],
        ["R b b b R N N N N N N N N N N N N N N N N N"],
        ["N R R R N N N N N N N N N N N N N N N N N N"],
    ].map(row => row[0].split(" ").map(cell => {
        switch (cell) {
            case "N": return "norm";
            case "P": return "nest";
            case "R": return "rock";
            case "r": return "roid";
            case "b": return "bas1";
            case "d": return "bap1";
            case "E": return "edge";
            default: throw new TypeError(cell + " is not a valid cell type!")
        }
    })),
    "X_GRID": 22,
    "Y_GRID": 9,
    "BOTS": 0,
    "DO_BASE_DAMAGE": false,
    "WIDTH": 22 * 500,
    "HEIGHT": 9 * 500,
    "SKILL_CAP": 1000000000,
    "FORCE_SHAPE_SPAWNS": {
        "MAX_NORM": 250,
        "MAX_NEST": 45
    },
    "MAZE": {
        "ENABLED": false,
        "amount": .3,
        "mapString": `
        )iii
        )AAA#@
        `,
        "erosionPattern": {
            "amount": .3,
            "getter": (i, max) => {
                if (i > max * .4) {
                    return [(Math.random() * 2 + 1) | 0, 2];
                } else {
                    return [(Math.random() * 2) | 0, ((Math.random() * 2) | 0) * 2];
                }
            }
        }
    }
    /*"MAZE": {
        "ENABLED": true,
        amount: .3,
        mapString: `
            --------------------------------
            --------------------------------
            --@@@@@@@@@@@@@@@@@@@@@@@@@@@@--
            --@@@@@@@@@@@@@@@@@@@@@@@@@@@@--
            --@@########################@@--
            --@@#@@@@@@@@@@@@@@@@@@@@@@#@@--
            --@@#@@@@@@@@@@@@@@@@@@@@@@#@@--
            --@@#@@@@@@----------@@@@@@#@@--
            --@@#@@@@@@----------@@@@@@#@@--
            --@@#@@@@@------------@@@@@#@@--
            --@@#@@@@--------------@@@@#@@--
            --@@#@@@----------------@@@#@@--
            --@@#@@@@--------------@@@@#@@--
            --@@#@@@@@------------@@@@@#@@--
            --@@#@@@@@@----------@@@@@@#@@--
            --@@######@----------@######@@--
            --@@######@----------@######@@--
            --@@#####@------------@#####@@--
            --@@####@--------------@####@@--
            --@@###@----------------@###@@--
            --@@#@@------------------@@#@@--
            --@@#@@------------------@@#@@--
            --@@#@@------------------@@#@@--
            --@@#@@------------------@@#@@--
            --@@#@@------------------@@#@@--
            --@@#@@@@@@@@@@@@@@@@@@@@@@#@@--
            --@@#@@@@@@@@@@@@@@@@@@@@@@#@@--
            --@@########################@@--
            --@@@@@@@@@@@@@@@@@@@@@@@@@@@@--
            --@@@@@@@@@@@@@@@@@@@@@@@@@@@@--
            --------------------------------
            --------------------------------
            `,
        erosionPattern: {
            amount: .3,
            getter: (i, max) => {
                if (i > max * .4) {
                    return [(Math.random() * 2 + 1) | 0, 2];
                } else {
                    return [(Math.random() * 2) | 0, ((Math.random() * 2) | 0) * 2];
                }
            }
        }
    }*/
}