const express=require("express");
const app=express()
const axios= require("axios")

app.get("/", async (req, res) => {
	const response = await axios.get("https://breakingbadapi.com/api/characters")

    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].category == 'Better Call Saul' || response.data[i].category == 'Breaking Bad, Better Call Saul') {
            console.log(response.data[i])
        }
    }
    res.send(response.data)
})

app.listen(3000 ,function(){
    console.log("Server has started running , listening on port 3000")
})