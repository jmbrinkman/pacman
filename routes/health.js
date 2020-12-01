var express = require('express');
var router = express.Router();


        function sleep(milliseconds) { 
            let timeStart = new Date().getTime(); 
            while (true) { 
                let elapsedTime = new Date().getTime() - timeStart; 
                if (elapsedTime > milliseconds) { 
                    break; 
                } 
            } 
        } 
  
        console.log("Hello World"); 
        console.log("Sleeping for 10000 milliseconds"); 
  
        // sleep for 5000 miliiseconds 
        sleep(10000); 
  
        console.log("Sleep completed successfully"); 




router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date());
  next();
})

router.get('/', function (req, res, next) {

  res.json({status: 'UP'});
});

module.exports = router;
