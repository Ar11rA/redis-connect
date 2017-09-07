var redis = require('redis');
var redisClient = redis.createClient({host : '192.168.33.16', port : 6379});

redisClient.on('ready',function() {
 console.log("Redis is ready");
 redisClient.set("foo","bar")
 console.log('Key set')
});

redisClient.on('error',function() {
 console.log("Error in Redis");
});
