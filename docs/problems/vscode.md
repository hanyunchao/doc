# vscode

1. 脚本无法执行
![图片alt](./images/1.jpg "图片title")

```
（1）以管理员身份运行vs code

（2）在终端执行：get-ExecutionPolicy，显示Restricted（表示状态是禁止的）

（3）在终端执行：set-ExecutionPolicy RemoteSigned

（4）在终端执行：get-ExecutionPolicy，显示RemoteSigned
```