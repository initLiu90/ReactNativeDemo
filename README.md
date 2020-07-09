# ReactNativeDemo

## A ToDo List use redux

- 第一个版本使用了原生方式创建 `Action`
- 第二个版本使用了 `Redux-actions` 库创建 `Action`

提交记录

## dynamic

是一个动态功能模块。它从 Android 的 assets 目录下读取 bundle.js，然后通过调用`eval()`方法执行代码。

```js
(function() {
  // eslint-disable-next-line no-unused-vars
  const __MY_SPACE_LIBRARIES = Librarys;
  // eslint-disable-next-line no-eval
  return eval(content).default;
})();
```

创建一个立即执行函数，让 eval()在立即执行函数中执行。目的是为了创建一个作用域，让动态代码在此作用域中运行。

`bundle.js` 是通过 `webpack` 打包 RN 项目后的代码，入口是 `app.js`。相当于 打包了把 RN 项目的跟 `component` 给打包了。因此上面执行`eval(content)`后通过 `default` 属性可以拿到返回值即根`Component`

## async

一个使用`Redux-chunk`库来进行处理异步 `Action` 的 demo
