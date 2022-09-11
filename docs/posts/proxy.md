---
title: 代理使用
icon: markdown
order: 2
article: false
category:
  - 使用指南
tag:
  - 网络工具
  - 梯子
  - 加速器
---

# 代理使用

## 使用须知

::: tip 通知
> 我们不提供任何网络代理的出售服务  

> 仅仅提供一些基础的使用教程和推荐  

> 涉及教程不全面,敬请谅解,具体的可以百度
:::

::: warning 警告

> 网上流传的一些免费的代理工具切勿使用  

> 你所浏览的内容,以及你输入的信息,都曝光在他们的后台  

> 天下没有免费的午餐!  

> 如果你已经开始使用,请立即卸载!!!!!!!!!!!
:::

## Windows 使用

### Clash for Windows

1. 安装[Clash for Windows](https://wwz.lanzouy.com/) 记住你的安装目录 
2. 汉化 Clash for Windows,下载[Clash for Windows汉化包](https://wwz.lanzouy.com/iOB3J0bgx3od)  
&ensp;&ensp;2-1. 打开Clash for Windows的安装目录,进入resources/目录,将下载的汉化包解压进去覆盖原文件即可  
3. 打开Clash for Windows,点击配置>>添加你的订阅地址>>点击下载和全部更新  
4. 点按代理>>选择你想要使用的代理  
5. 右下角任务栏找到Clash for Windows 右键点击系统代理>>自动配置系统代理

### V2rayN

1. 下载[V2rayN](https://wwz.lanzouy.com/i5JZT0bgsjdi)  
2. 解压至指定目录,然后找到V2rayN.exe右键发送桌面快捷方式  
3. 打开V2rayN 顶部点按订阅>>选择订阅设置>>添加你的订阅地址,其他项随便填,点击确定
4. 点按订阅>>选择更新订阅(不通过代理),等待更新结束后,在所有服务器列表框内选择一个节点,右键设为活动的服务器
5. Windows右下角任务栏找到V2rayN右键>>系统代理>>自动配置系统代理

## Android

### v2rayNG
1. 下载安装[v2rayNG](https://wwz.lanzouy.com/iebJ00bgrt9i)
2. 打开V2rayNG>>点击左上角三条横线>>订阅设置>>点+>>添加你的订阅地址>>点√
3. 返回主页面>>点击右上角:>>点击更新订阅
4. 在主页面选择一个节点(前面会有一个绿条,说明你选中了当前节点)>>点击右下角的灰色√即可链接成功

## Mac 和 iPhone 以及 iPad

### 暂时没有教程

> - 本人暂无Mac和iPhone,可以百度!

::: tip

如果你有老旧的安卓设备
> - 首先确保两个设备在同一WiFi下!
> - 可以使用局域网共享,查看上面的[安卓配置](proxy.md#android)
> - 然后找到设置>>允许来自局域网的连接>>勾选√>>查看下面的socks5或者http代理端口
> - 打开安卓设备的设置页面>>无线和网络>>WLAN>>长按当前WiFi>>查看或者点击修改网络>>找到IP地址
> - 打开你的iPhone或者Mac,打开设置>>无线局域网>>点击当前WiFi>>配置代理>>手动>>输入安卓设备的IP地址和http端口即可.
:::


## 代理的获取

[代理推荐](https://tool.ubot.ga/)


## 注意

> - 仅能提供当前有限的帮助到这里了,其他的无能为力了!网络相关的内容在国内一直比较敏感,所以请您不要在店铺询问店家这方面的内容


## 自己搭建网络代理

> - 首先你要有一个海外的VPS服务器

> - 安装X-ui面板

```shell
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)

```

> - 具体使用请自行百度

### 免费域名解析

[免费域名解析](../free/domain.md)