# UsbHubController
Usb Hub 控制器


1. 安装全局 dva-cli
$ sudo cnpm install -g dva-cli


2. 创建项目
$ dva new gui



3. 使用 antd
cnpm install antd babel-plugin-import --save

编辑 .webpackrc，使 babel-plugin-import 插件生效。


+  "extraBabelPlugins": [
+    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
+  ]