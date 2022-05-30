const ci = require('miniprogram-ci');

// gitlab-runner执行脚本时，传进来的参数，
// 第一个参数为版本号
// 第二个参数是指定的机器人
// 版本的描述说明
const projectConfig = require('./project.config.json');
const packageJson = require('./package.json');
const version = packageJson.version;
const { desc, robot } = packageJson;
// appid 和privateKeyPath需要设置下
const project = new ci.Project({
  appid: projectConfig.appid,
  type: 'miniProgram',
  projectPath: './',
  privateKeyPath: './ci.private.key',
  ignores: ['node_modules/**/*', 'cloudfunctions/**/*', 'ci.js']
});

/** 上传 */
async function uploadCloud({ version = '0.0.1', desc = 'test', robot = 1 }) {
  try {
    const result = await ci.cloud.uploadFunction({
      project,
      env: 'cloud1-2gfspwne6db462df',
      name: 'auth',
      path: './cloudfunctions/auth',
      remoteNpmInstall: true // 是否云端安装依赖
    });
  } catch (err) {
    console.log(err);
  }
  try {
    // 静态网站
    const resultStatic = await ci.cloud.uploadStaticStorage({
      project,
      env: 'cloud1-2gfspwne6db462df',
      path: './cloudfunctions',
      remotePath: true
    });
  } catch (err) {
    console.log(err);
  }
  try {
    // 云存储
    const resultStorage = await ci.cloud.uploadStorage({
      project,
      env: 'cloud1-2gfspwne6db462df',
      path: './cloudfunctions',
      remotePath: true
    });
  } catch (err) {
    console.log(err);
  }
  // console.log(resultStatic, resultStorage);
}

async function uploadCode({ version = '0.0.1', desc = 'test', robot = 1 }) {
  const resultUpload = await ci.upload({
    project,
    version,
    desc: desc,
    setting: {
      es7: true,
      minify: true,
      autoPrefixWXSS: true
    },
    onProgressUpdate: console.log
  });
  // console.log(resultUpload);
}

try {
  uploadCloud({ version, desc, robot });
} catch (err) {
  console.log(err);
}
uploadCode({ version, desc, robot });
// ci.proxy('moonshine.com')
