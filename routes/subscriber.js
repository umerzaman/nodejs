const express = require('express');
var fs = require('fs');
const router =  express.Router();

 

router.get('/getfeature/:email/:location',(req,res)=>{  
   //Read JSON from relative path of this file
   fs.readFile('./features.json' , 'utf8', function (err, data) {
       //Handle Error
      if(!err) { 
        // Parse Data to JSON OR
         var featureJson = JSON.parse(data)
        //Send back as Response
           let email =   req.params.email;
           let location = req.params.location;
 
           let featureForUsers = [];

          featureJson.map((feature, index) => { 
            if(feature.enabledEmails.includes(email) && feature.includedCountries.includes(location)  
             || (feature.includedCountries.length == 0 && feature.enabledEmails.includes(email) &&  !feature.excludedCountries.includes(location))){
                featureForUsers.push(feature);
            } 
          });

         res.json(featureForUsers);
       
         
       }else {
          //Handle Error
          res.send("Error: "+err )
       }
  });  
})

module.exports = router;

