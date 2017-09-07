const Redis = require('ioredis');

let redis = new Redis({
    sentinels: [
        {host: "192.168.33.19", port: 16380}, 
        {host: "192.168.33.20", port: 16380},  
        {host: "192.168.33.21", port: 16380}
    ],
    name: 'redis'
})

redis.on('ready',function() {
 console.log("Redis is ready");
 redis.set("foo", "bar")
 console.log('Key set')
});

redis.on('error',function() {
 console.log("Error in Redis");
});