const ci = require('miniprogram-ci')

// gitlab-runner执行脚本时，传进来的参数，
// 第一个参数为版本号
// 第二个参数是指定的机器人
// 版本的描述说明
var arguments = process.argv.splice(2)
var version = arguments[0]
var robot = parseInt(arguments[1])
var desc = arguments.splice(2).join(' ')

// appid 和privateKeyPath需要设置下
const project = new ci.Project({
  appid: wx90966b5aefbbf73d,
  type: 'miniProgram',
  projectPath: './project.config',
  privateKeyPath: './ci-private.key',
  ignores: ['node_modules/**/*', 'pages/**/*']
})

/** 上传 */
async function upload({ version = '0.0.1', desc = 'test', robot = 1 }) {
  await ci.upload({
    project,
    version,
    desc,
    setting: {
      es6: true,
      minify: true,
      autoPrefixWXSS: true
    },
    robot,
    onProgressUpdate: console.log
  })
}

upload({ version, desc, robot })