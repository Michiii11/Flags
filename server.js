const express = require('express')
const http = require("http")
const uniqid = require("uniqid")

const app = express()
const port = 3000

const server = http.createServer(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

server.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

io.on("connection", socket => {
    socket.on("verifyLobby", (key) => {
        let verify = manager.verifyLobby(key)
        socket.emit("verifiedLobby", verify)

        //if lobby exists - add client to that lobby
        if(verify == true)
            socket.join(key)
    })

    socket.on("verifyOwnerKey", (key, ownerKey) => {
        let verify = manager.verifyOwnerKey(key, ownerKey)
        socket.emit("verifiedOwnerKey", verify)
    })
   
    socket.on("createLobby", () => {
        let lobby = manager.createLobby()
        socket.emit("createdLobby", lobby.key, lobby.ownerKey)
    })

    socket.on("sendMessage", (key, message)=>{
        socket.to(key).emit("message", message)
    })

    socket.on("editLobby", (lobbyKey, ownerKey, message) => {
        if(!manager.verifyOwnerKey(lobbyKey, ownerKey)) //doesnt do anything if client sending request isnt owner of the lobby
            return

        try {
            manager.setLobby(manager.getLobby(lobbyKey).data = message)
            socket.to(lobbyKey).emit("lobbyChange", manager.getLobby(lobbyKey).data)
        } catch (error) {
            console.error(error)
        }

    })
})

class Manager{
    constructor(){
        this.lobbies = [] //list of all running lobbies
    }

    createLobby(){
        let newLobby = {
            key: uniqid(),
            ownerKey: uniqid(),
            data: ""
        }
        //put whatever data needed per lobby into here /\

        console.log("created lobby", newLobby.key);
        
        this.lobbies.push(newLobby)
        return newLobby
    }

    /**
     * removes specified lobby from list
     * @param {String} key key of lobby to remove
     * @returns true if deletion was succesfull false if lobby key doesnt match
     */
    deleteLobby(key){
        let success = false
        for (let i = 0; i < this.lobbies.length; i++) {
            if(this.lobbies[i] === key){
                this.lobbies[i].splice(i, 1)
                success = true
            }
        }
        return success
    }

    /**
     * to 
     * @param {String} key lobby key of
     * @returns requested lobby or null
     */
    getLobby(key){
        let res = null
        this.lobbies.forEach(item => {
            if(item.key == key){
                res = item
            }
        });
        return res
    }

    /**
     * takes lobby and replaces lobby in list if it exists
     * @param {lobby json object} lobby lobby to be updated 
     * @returns true if replacement was succesfull false if lobby key doesnt match
     */
    setLobby(lobby){
        let success = false
        this.lobbies.forEach(item => {
            if(item.key === lobby.key){
                item = lobby
                success = true
            }
        });
        return success
    }

    /**
     * verifies if lobbykey exists
     * @param {String} key 
     * @returns true if lobby exists false if it doesnt
     */
    verifyLobby(key){
        console.log("verifying key", key);
        let match = false
        this.lobbies.forEach(item => {
            if(item.key === key){
                match = true
            }
        });
        return match
    }
    
    verifyOwnerKey(key, ownerKey){
        console.log("verifying owner key", ownerKey);
        let match = false
        this.lobbies.forEach(item => {
            if(item.key === key && item.ownerKey == ownerKey){
                match = true
            }
        });
        return match
    }
}

let manager = new Manager