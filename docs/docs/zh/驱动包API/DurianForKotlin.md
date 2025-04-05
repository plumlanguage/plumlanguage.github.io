# Durian for Kotlin

>[!WARNING]
> 我的天啊，我懒得写标题啥的，你们直接看吧。

## 类（Class）
```kotlin
fun newClass(className: String = "popo"): Boolean
// 创建一个新的类，并返回是否成功

fun newClasses(vararg classesName: String): Boolean
// 创建多个类，并返回是否成功

fun delClass(className: String): Boolean
// 删除一个类，并返回是否成功

fun delClasses(vararg classesName: String): Boolean
// 删除多个类，并返回是否成功
```

## 单值文件（X）
```kotlin
fun newX(formClassName: String, xName: String): Boolean
// 创建一个单值文件，并返回是否成功

fun newX(formClassName: String, vararg xNames: String): Boolean
// 创建多个单值文件，并返回是否成功

fun newX(formClassName: String, xName: String, text: String): Boolean
// 创建一个单值文件并写入内容，并返回是否成功

fun fixX(formClassName: String, xName: String, newText: String): Boolean
// 修改一个单值文件的内容，并返回是否成功

fun delX(className: String, xName: String): Boolean
// 删除一个单值文件，并返回是否成功
```