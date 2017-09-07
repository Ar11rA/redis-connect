require 'redis'
require 'redis-sentinel'

redis = Redis.new(host: "192.168.33.16", port: 6379, :sentinels => [{:host => "192.168.33.22", :port => 26379}, {:host => "192.168.33.24", :port => 26379}, {:host => "192.168.33.26", :port => 26379}], role: :master)

redis.set "foo2", "bar2"

while true
begin
  puts redis.get "foo2"
rescue => e
  puts "failed?", e
end
  sleep 1000
end