# 操作单值

### 创建单值

```shell
durian NEW X -F <类名> <单值名>
# 暂时不能添加初始内容
```
### 修改单值

```shell
durian FIX X -F <类名> <单值名> <新内容>
```

### 输出单值内容到命令行
```shell
durian GET X -F <类名> -T SHELL <单值名>
```

### 输出单值内容到ret.utf-8文件
```shell
durian GET X -F <类名> -T RET <单值名>
```

### 删除单值
```shell
durian DEL X -F <类名> <单值名>
```
