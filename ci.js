const ci = require("miniprogram-ci");

// gitlab-runner执行脚本时，传进来的参数，
// 第一个参数为版本号
// 第二个参数是指定的机器人
// 版本的描述说明
const projectConfig = require('./project.config.json')
const packageJson = require('./package.json')
const version = packageJson.version
const { desc, robot } = packageJson
// appid 和privateKeyPath需要设置下
const project = new ci.Project({
  appid: projectConfig.appid,
  type: "miniProgram",
  projectPath: "./",
  privateKeyPath: "./ci-private.key",
  ignores: ["node_modules/**/*", "cloudfunctions/**/*", "ci.js"],
});

/** 上传 */
async function uploadCloud({ version = "0.0.1", desc = "test", robot = 1}) {

  const result = await ci.cloud.uploadFunction({
    project,
    env: "cloud1-2gfspwne6db462df",
    // version: {
    //   uploadType: 'package', // 上传方式
    //   flowRatio: 0, // 流量比例
    //   cpu: 0.25, // CPU 核心数
    //   mem: 0.5, // 内存大小
    //   minNum: 0, // 最小副本数
    //   maxNum: 1, // 最大副本数
    //   policyType: 'cpu', // 扩缩容条件
    //   policyThreshold: 60, // 扩缩容阈值
    //   containerPort: 80, // 容器监听端口
    //   serverName: 'server', // 服务名称
    //   versionRemark: 'ci', // 版本备注
    //   envParams: '{}', // 环境变量
    //   buildDir: './cloudfunctions', // 构建目录
    //   dockerfilePath: './cloudfunctions' // Dockerfile 路径
    // },
    // triggersConfig: [{

    // }],
    name: "auth",
    path: "./cloudfunctions/auth",
    remoteNpmInstall: true, // 是否云端安装依赖
  });
  console.log(result);
  // 静态网站
  const resultStatic = await ci.cloud.uploadStaticStorage({
    project,
    env: "cloud1-2gfspwne6db462df",
    path: "./cloudfunctions",
    remotePath: true,
  });
  // 云存储
  const resultStorage = await ci.cloud.uploadStorage({
    project,
    env: "cloud1-2gfspwne6db462df",
    path: "./cloudfunctions",
    remotePath: true,
  });
  console.log(resultStatic, resultStorage);

}

async function uploadCode({version = "0.0.1", desc = "test", robot = 1}) {
  const resultUpload = await ci.upload({
    project,
    version,
    desc: desc,
    setting: {
      es7: true,
      minify: true,
      autoPrefixWXSS: true
    },
    onProgressUpdate: console.log,
  })
  // console.log(resultUpload);
}

uploadCloud({ version, desc, robot });
uploadCode({ version, desc, robot })
// ci.proxy('moonshine.com')