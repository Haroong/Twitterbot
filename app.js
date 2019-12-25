var TwitterPackage = require('twitter');
var config = require('./config.js');
var Twitter = new TwitterPackage(config);

Twitter.post('statuses/update', {status : 'This is a sample automated tweeet.'}, 
    function(err, tweet, res){
        if (err){
            console.log(err);
        }
        console.log(tweet); // 트윗 내용
        console.log(res);
    }
);