let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let lobbyKey = urlParams.get("lobby")
let ownerKey = "haha i prevent u from doing cool owner shit"

const socket = io()

socket.emit("verifyLobby", lobbyKey) //send lobby key to server

/**
 * reports back to client that emited "verifyLobby"
 * if true server adds client to lobby specific socket room
 * only jf this returns true, further functionality should be unlocked
 * @param {boolean} erg true if lobby key is valid false if it doesnt exist
 */
socket.on("verifiedLobby", (erg) => {
	if(erg == true){//lobby exists
		output("lobby exists")
	}
	else{
		output("unknown lobby")
		lobbyKey = null
	}

	if(sessionStorage["ownerKey"]){
		socket.emit("verifyOwnerKey", lobbyKey, sessionStorage["ownerKey"])
	}
})

/**
 * reports back to client that emited "verifyOwnerKey"
 * only if this returns true the lobby owner are should be visible
 * @param {boolean} erg true if ownerkey and key is valid false if it doesnt exist
 */
socket.on("verifiedOwnerKey", (erg) => {
	if(erg == false){
		sessionStorage.clear()
	}

	else if(erg == true){
		console.log("owner verified");
		ownerKey = sessionStorage["ownerKey"]

        loadSide('mode')
	}
})

socket.on("message", (erg) => { //executed when any user sends a message
	output("message: " + erg)
})

socket.on("lobbyChange", (erg) => { //only executed if lobbyowner sent lobbychange
	output("lobbyChange: " + erg)
})

/**
 * reports back to only the creator of the lobby that creation was succsessfull
 * sends adminKey to verify this user to be the lobby owner
 * @param erg key of created lobby
 */
socket.on("createdLobby", (erg, ownerKey) => {
	output(`<a href="http://localhost:3000?lobby=${erg}">${erg}</a>`)

	sessionStorage["ownerKey"] = ownerKey
	
	window.location.search = "?lobby=" + erg//adds lobby parameter to url ATTENTION: this causes one page reload
})

/**
 * tells server to create a new Lobby
 * should not open lobby yet - better to do this in "createdLobby" callback
 */
function createLobby(){
	socket.emit("createLobby")
}

function joinLobby(){
    let key = document.querySelector('#lobbyKey')
    socket.emit("verifyLobby", lobbyKey) //send lobby key to server
}

/**
 * demo function - sends message to all clients in the same lobby
*/
function sendMessage(){
	socket.emit("sendMessage", lobbyKey, document.querySelector('#message').value)
}
/**
 * demo function - changes game setttings (only allowed for lobby owner)
 */
function editLobby(){
	socket.emit("editLobby", lobbyKey, ownerKey, document.querySelector('#lobbyedit').value)
}

/**
 * Utility function - outputs content into p tag on page
 * @param {*} content will be writen to innerHTML
 */
function output(content){
    document.querySelector('#chat').innerHTML += content
}
