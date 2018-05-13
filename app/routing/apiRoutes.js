/* 
   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.  */


    let friendsData = require("../data/friends");


    //routing

    module.exports = (function(app){
        app.get("/api/friends", function(req, res){
            res.json(friendsData);
        })
        app.post("/api/friends", function(req, res){
            let userInput = req.body;

            console.log(userInput);

            let userResponses = userInput.score;
            console.log(userResponses);

            let matchName;
            let matchImg;
            let totalDif = 10000;




            
        })

    })