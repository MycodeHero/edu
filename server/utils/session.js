//sessionId 实现/查询/添加到cookie

const MAX_AGE = 30 * 60 * 1000

function Session() {
  this.sessionId =  Number((new Date()).getTime() + String(Math.random()).slice(2, 6)).toString(16)
}

Session.prototype.createSession = function (ctx, {username, password}) {
  redis.hmset(this.sessionId, ['username', username, 'password', password])
  this._setCookie(ctx)
}

Session.prototype._setCookie = function (ctx) {
  ctx.cookies.set('sessionId', this.sessionId, {maxAge: MAX_AGE})
} 

Session.prototype.judgeSession = async function (ctx) {
  const sessionid = this._getCookie(ctx)
  if (!sessionid) {
    return false
  }
  let userInfo = await this._getSession(sessionid)
  if (userInfo.length) {
    redis.del(sessionid)
    this.createSession(ctx, {username: userInfo[0], password:userInfo[1]})
  }
  return true
}

Session.prototype._getCookie = function (ctx) {
  return ctx.cookies.get('sessionId')
}

Session.prototype._getSession = async function (sessionid) {
  const userInfo =  await new Promise (function(resolve, reject){
    redis.hmget(sessionid, ['username', 'password'], function (err, res) {
      if(err) {
        throw err
      }
      resolve(res)
    })  
  }) 
  return userInfo
}

module.exports = {
  session: new Session()
}

