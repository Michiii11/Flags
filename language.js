let language = {
    german: {
        start: [
            "Einzelspieler", "Mehrspieler"
        ],
        mode: {
            selectorType: ["Länder", "Hauptstädte"],
            selectorUN: ["UN", "Nicht UN", "Alle Länder"],
            selectorContinent: ["Alle Länder", "Europa", "Afrika", "Asien", "Nordamerika", "Südamerika", "Ozeanien"],
            modeButton: "Starte Spiel"
        },
        game: [
            "Richtig", "Du hast die Runde beendet", "Neustart", "Weiter"
        ],
        settings: {
            headlines: ["Einstellungen", "Steuerung", "Bild", "Gameplay"],
            keybinds: ["Tipp", "Weiter", "Versuch", ],
            popup: ["Entscheidet ob, dass Inputfeld geleert wird bei einer falschen Antwort",
                    "Entscheidet ob, du zwei mal auf den Skipknopf drücken musst um zu skippen",
                    "Entscheidet ob, das Land bei richtiger Antwort automatisch zum nächsten Land übergeht"]
        },
        backUp: ["Ein Spiel ist noch am Laufen", "Entscheide was du machst", "Neues Spiel", "Weiterspielen"]
    },

    english: {
        start: [
            "Singleplayer", "Multiplayer"
        ],
        mode: {
            selectorType: ["Country", "Capital"],
            selectorUN: ["UN", "Not UN", "All Countries"],
            selectorContinent: ["All Countries", "Europe", "Africa", "Asia", "North America", "South America", "Oceania"],
            modeButton: "Start Game"
        },
        game: [
            "Correct", "You finished the round", "Restart", "Continue"
        ],
        settings: {
            headlines: ["Settings", "Keybinds", "Display", "Gameplay"],
            keybinds: ["Hint", "Skip", "Guess"],
            setting: ["Light Mode", "Dark Mode", "English Version", "Clear Input", "Confirm Skip", "Autoskip"],
            popup: ["Decides whether or not the input field is cleared after a wrong guess was submited", 
                    "If you have to press the skip button a second time to skip so you can read",
                    "If you have typed in the right answer it automatically skips to the next country."]
        },
        backUp: ["There is a game still running", "Choose what to do", "New Game", "Continue"]
    }
}