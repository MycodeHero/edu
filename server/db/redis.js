const redis = require('redis')
const client = redis.createClient({
  host: '127.0.0.1',
  port: '6379',
})

client.on('connect', (err) => {
  if(err) {
      console.log('[redis run error]')
      return
  }
  console.log('[redis run success]')
  global.redis = client
})

