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

            //console.log(userInput);

            let userScores = userInput.scores;
            console.log("got here " + userScores);
            console.log(parseFloat(userScores[2]));
            let matchName;
            let matchImg;
            let totalDif = 10000;

/*             for (let scores in friendsData){
                console.log(friendsData[i].scores);
            } */
            for (let i = 0; i <friendsData.length; i++){
                //console.log(JSON.stringify(friendsData[i].scores));
                //console.log(friendsData[i].scores);
               // console.log(friendsData);
                //console.log(friendsData[i].friends[i].scores);
                let difference = 0;
                for (let j = 0; j < userScores.length; j++){
                    //console.log('friendsData[i]: ' + friendsData[i]);
                   // console.log('userScores: ' + userScores[j]);
                    //console.log('friendsData[i].scores[j]: ' + parseInt(friendsData[i].scores[j]));

                     difference = difference + Math.abs(friendsData[i].scores[j] - userScores[j])

                    if (difference < totalDif) {
                        totalDif = difference;
                        matchName = friendsData[i].name;
                        matchImg = friendsData[i].photo;
                    } 
                }
                
            }

            friendsData.push(userInput);
            res.json({status: 'OK', matchName: matchName, matchImg: matchImg})
            
        });

    });