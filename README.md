# fv-vue-cli

## 基本命令
```
npm install
npm run serve
npm run build
npm run lint
```

## 代码规范
vue-cli自带的eslint+prettier 再加上我自己配的stylelint

## 版本注意事项
个人node版本12.22.10 npm  6.14.16
vscode的插件Stylelint只能使用0.87.6版本，否则无效

## vue-cli配置
See [Configuration Reference](https://cli.vuejs.org/config/).

## style
虽然配置了less,scss,stylus  但开发只建议使用scss,stylelint只配置了scss

## sentry
VUE_APP_BASE_SENTRY='on' 开启监控

## husky
commit提交前会执行`npm run lint`检查代码

### 打包
- 会执行gzip压缩成gz文件
- 字体文件会preload
- 已内置webpack-bundle-analyzer包分析