`dynamic.js`是一个动态功能模块。它从 Android 的 assets 目录下读取 bundle.js，然后通过调用`eval()`方法执行代码。

```js
(function() {
  // eslint-disable-next-line no-unused-vars
  const __MY_SPACE_LIBRARIES = Librarys;
  // eslint-disable-next-line no-eval
  return eval(content).default;
})();
```

创建一个立即执行函数，让 eval()在立即执行函数中执行。目的是为了创建一个作用域，让动态代码在此作用域中运行。
