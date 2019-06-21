const Router = require('koa-router')
const {session} = require('../utils/session')
const router = new Router()

const _reponseBody = (status) => {
  return {
    status,
    msg: status ? '用户登录成功' : '用户登录失败 2019-06-09'
  }
}

const auth = async (ctx) => {
  const {username, password} = ctx.request.body
  let status = false
  if (await session.judgeSession(ctx)){
    ctx.response.body = _reponseBody(true)
    return
  }

  function query () {
    return new Promise((resolve, reject) => {
      mysql.query(
        `SELECT username, passwd from user_profile_user WHERE username='${username}' and passwd='${password}'`,
        (err, rows) => {
          if (err) {
            throw err
          }
          if (rows.length) {
            resolve(true)
            return
          }
          return reject(false)
        })
    })
  }

  await query().then((status)=>{
    session.createSession(ctx, {username, password})
    ctx.response.body = _reponseBody(status)
  }).catch((status) => {
    ctx.response.body = _reponseBody(status)
  })
}

router.post('/auth', auth)

module.exports = router
