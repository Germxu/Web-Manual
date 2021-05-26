# AST
## 基本概念
AST 全称 Abstract Syntax Tree，也就是抽象语法树，它是将编程语言转换成机器语言的桥梁。浏览器在解析 JS 的过程中，会根据 ECMAScript 标准将字符串进行分词，拆分为一个个语法单元。然后再遍历这些语法单元，进行语义分析，构造出 AST。最后再使用 JIT 编译器的全代码生成器，将 AST 转换为本地可执行的机器码。如下面一段代码：

``` typescript
function add(a, b) {
    return a + b;
}
```
