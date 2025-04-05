---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Durian
  tagline: 一个可以集成到您项目的数据管理工具
  image:
    src: /logo.png
    alt: logo
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/zh/基本概念/Durian的工作原理
    - theme: alt
      text: 加入交流
      link: /api-examples

features:
  - title: 基于I/O和动态RAM存储
    details: Durian基于操作系统的I/O，数据可以永久存储；开发者在使用Durian的时候可以选择是否将某个/某些数据加载到内存里面（建议加载常用数据），这样可以提升数据的读写速度
  - title: 数据存储格式
    details: Durian以类（Class）为基础分类模式，包含的数据格式有：<br/>数据：键值对、单值、非utf数据等<br/>资源：所有文件
  - title: 多种数据处理方式
    details: Durian在控制台中就可以实现比如：类型转换、二进制加密等操作，通过调用驱动包还可以实现更多更强大的功能。
  - title: 易于使用
    details: Durian提供了丰富的API接口，开发者可以很方便的集成到自己的项目中。
  - title: popo好可爱
    details: 这是一个神秘的up，在右上角传送门可以前往popo主页！
  - title: 集成popo
    details: Durian中，所有的默认名称都是popo，比如kotlin驱动包中有：fun newClass(className String = "popo") Boolean{},冒号省略了哦~
---

[//]: # (<video src="/video.mp4"></video>)

## 最新修改

### v 0.2

1. 添加删除类（但是没有实现）
2. 添加x数据相关操作
3. 添加有关单值的操作
    - 获取内容输出到命令行上
    - 获取内容输出到`ret.utf-8`文件

*详细见[史书](docs/zh/史书.md)*

---

