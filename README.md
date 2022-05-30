## 开发 

- 开发

```javascript
npm i
```
# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

## 代码规范

项目选用`eslint` + `husky` + `prettier` 做代码检测以及语法提示，避免因工具不统一导致代码提交时有多余的修改。

我们代码主要采用以下规范：

- 1、 项目采用单引号
- 2、 对象最后的属性不尾随空格
- 3、 属性和函数名后加入空格
- 4、 每行自动加分号
- 5、 多属性自动换行等

## 自动化部署

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)
