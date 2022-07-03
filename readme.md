# nodejs
nodejs是一个运行环境，对于原来的js的执行都需要以来浏览器，nodejs的出现使得js的执行可以不依赖于浏览器了，因此，nodejs可以视为java里面的jvm，其提供了js的执行环境

## npm
npm是nodejs的包管理器，用于引入依赖，npm对应的java有点像是maven工具：可以初始化工程，也可以引入依赖
- 初始化工程的方式是npm init -y，该命令将会在工程的根路径创建一个package.json的文件，这个对应的java就是pom.xml文件

## 安装依赖
npm安装依赖的话会在根路径创建一个node_modules，同时在package.json里面会出现引入的依赖信息，不过这里是devDependence，也就是开发分支的依赖

## 引入tailwind的配置文件
`npx tailwindcss init`，在配置文件里面我们需要告诉其tailwind在哪个对应的文件中寻找utility class，接下来需引入tailwind对应的指令，用于将html中的帮助类编译成普通的css，该过程的执行依赖于命令，如果不想总在终端敲一串长的命令的话，可以怕在package.json中的script模块指定命令的简写，这样通过npm run 指令就可以执行对应的命令了。

上述流程完后，我们创建了对应的css文件，然后创建一个html文件，通过npm run watch来实现对html的动态监视，相应的，会有一个vscode 提供的server供我们使用(需要vscode安装对应的live server插件)

## tailwind添加个性化设置
tailwind在配置文件
```css
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 这里将会寻找对应的文件并编译成css文件
  content: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
中的extend中可以添加自定义的扩展属性


## 媒体查询功能
在使用tailwind的媒体查询的功能的时候，通常将屏幕适配功能放到最后


# https://ipaddress.com/website/github.com
github域名不通的时候通过手动设置ip地址来解决
