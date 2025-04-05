# <iconify-icon icon="material-icon-theme:java" style="margin-right:0.25em;color:#f39c12;"></iconify-icon>Durian for Java!

>[!WARNING]
>这是使用 Kotlin 编写的 Durian 驱动包，是基于JVM的，所以理论上java也可以运行，但由于 Kotlin 编译器的限制，可能存在一些问题。
> 
> 除了windows系统，其他系统没有测试过，可能会有一些bug，甚至无法正常运行。
> MacOS和Linux提供下载链接，是因为Kotlin基于JVM，所以理论上可以运行在这两个系统上。

## Windows

**v 0.2**：https://github.com/plumlanguage/Durian_for_kotlin/releases/download/v1/kotlin.zip

**v 0.1**：不提供

## Mac OS

**v 0.2**：https://github.com/plumlanguage/Durian_for_kotlin/releases/download/v1/kotlin.zip

**v 0.1**：不提供

## Linux

**v 0.2**：https://github.com/plumlanguage/Durian_for_kotlin/releases/download/v1/kotlin.zip

**v 0.1**：不提供

---

## 调用方式

>[!TIP]
> AI回答

在Java项目中调用Kotlin文件（.kt）是一种常见的需求，尤其是在混合使用Java和Kotlin开发Android应用或Java后端项目时。以下是如何在Java中调用Kotlin文件的步骤和注意事项：

### 1\. 添加Kotlin依赖
在项目中使用Kotlin文件，首先需要在项目的构建配置文件中添加Kotlin插件和依赖。如果你使用的是Gradle，可以在`build.gradle`文件中添加以下内容：

```groovy
plugins {
    id 'org.jetbrains.kotlin.jvm' version '1.9.20' // 确保使用最新版本
}

dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.9.20"
}
```

如果你使用的是Maven，可以在`pom.xml`中添加以下依赖：

```xml
<dependency>
    <groupId>org.jetbrains.kotlin</groupId>
    <artifactId>kotlin-stdlib-jdk8</artifactId>
    <version>1.9.20</version>
</dependency>
```

### 2\. 创建Kotlin文件
在项目中创建一个Kotlin文件（例如`MyKotlinClass.kt`），并定义一个类或函数。例如：

```kotlin
// MyKotlinClass.kt
package com.example.kotlin

class MyKotlinClass {
    fun sayHello(name: String): String {
        return "Hello, $name from Kotlin!"
    }
}
```

### 3\. 在Java中调用Kotlin类或函数
在Java代码中，可以通过以下方式调用Kotlin文件中定义的类或函数：

#### （1）调用Kotlin类的实例方法
如果Kotlin类的构造函数是默认的（无参构造函数），可以直接实例化并调用方法。例如：

```java
// Java代码
import com.example.kotlin.MyKotlinClass;

public class Main {
    public static void main(String[] args) {
        MyKotlinClass myKotlinClass = new MyKotlinClass();
        String result = myKotlinClass.sayHello("Java");
        System.out.println(result); // 输出：Hello, Java from Kotlin!
    }
}
```

#### （2）调用Kotlin的顶层函数
如果Kotlin文件中定义了顶层函数（即不隶属于任何类的函数），可以通过Kotlin类名调用。例如：

```kotlin
// MyKotlinFile.kt
package com.example.kotlin

fun sayHello(name: String): String {
    return "Hello, $name from Kotlin!"
}
```

在Java中调用顶层函数：

```java
// Java代码
import com.example.kotlin.MyKotlinFileKt;

public class Main {
    public static void main(String[] args) {
        String result = MyKotlinFileKt.sayHello("Java");
        System.out.println(result); // 输出：Hello, Java from Kotlin!
    }
}
```

注意：Kotlin的顶层函数在Java中会被编译为静态方法，类名通常是Kotlin文件名加上`Kt`后缀。

#### （3）调用Kotlin的扩展函数
如果Kotlin定义了扩展函数，可以在Java中通过静态方法的形式调用。例如：

```kotlin
// MyKotlinExtensions.kt
package com.example.kotlin

fun String.addSuffix(suffix: String): String {
    return this + suffix
}
```

在Java中调用扩展函数：

```java
// Java代码
import com.example.kotlin.MyKotlinExtensionsKt;

public class Main {
    public static void main(String[] args) {
        String result = MyKotlinExtensionsKt.addSuffix("Hello", " from Kotlin");
        System.out.println(result); // 输出：Hello from Kotlin
    }
}
```

### 4\. 注意事项
- **包名和类名**：确保Kotlin文件和Java文件的包名一致，或者正确导入Kotlin类或函数。
- **默认参数**：Kotlin支持默认参数，但在Java中调用时无法直接使用默认参数。需要在Kotlin中为函数提供重载版本，或者在Java中显式传入所有参数。
- **数据类**：Kotlin的数据类（`data class`）在Java中可以正常使用，但需要通过`equals`、`hashCode`、`toString`等方法来访问其功能。
- **空安全**：Kotlin的空安全特性在Java中无法直接使用。如果Kotlin函数返回可空类型（`String?`），在Java中会变成`String`，需要在Java代码中进行空检查。

通过以上步骤和注意事项，你可以在Java项目中轻松调用Kotlin文件的功能，实现Java和Kotlin的混合开发。