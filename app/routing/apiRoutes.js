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

            let userResponses = userInput.scores;
            console.log("got here " + userResponses);

            let matchName;
            let matchImg;
            let totalDif = 10000;

            for (let i = 0; i <friendsData.length; i++){
                console.log(JSON.stringify(friendsData[i].scores));

                let difference = 0;
                for (let j = 0; j < userInput.length; i++){
                    difference = difference + Math.abs(friendsData[i].scores[j] - userInput[j].scores)
                }
                
                if (difference <totalDif) {
                    totalDif = difference;
                    matchName = friendsData[i].name;
                    matchImg = friendsData[i].photo;
                }
            }

            friendsData.push(userInput);
            res.json({status: 'OK', matchName: matchName, matchImg: matchImg})
            
        });

    });