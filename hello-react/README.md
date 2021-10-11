# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 一  todoList案例相关总结
1. 拆分组件，实现静态组件，注意className,style的写法
2. 动态初始化列表，确定数据放在哪个state中,个别组件使用，放在自身，大家都用放父组件中
3. 父子之间的通信，父传子用props，子传需要一个父组件有函数在处理
4. defaultChecked和checked的区别
5. 状态在哪，操作状态的方法就在哪

## 二 github案例知识点
1. 设计状态时考虑全面。例如带有网络请求的主键，考虑失败的情况
2. ES6小知识点
```javascript
 const {keyWordElement: {value: keyWord}} = this // 连续解构赋值并重命名
```
3. 消息订阅与发布\
    先订阅，在发布\
    适用于任务组件间的通信\
    要在组件的componentWillUnmount取消订阅
    
4. fetch发送请求(关注分离的思想)
```javascript
const demo = async ()=>{
   try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      // 发布消息
      PubSub.publish('atguigu',{users:data.items,isLoading: false})
      console.log(data)
   } catch (error) {
      console.log("请求出错")
      PubSub.publish('atguigu',{err:error.message,isLoading: true})
   }
}
```

## 三 路由的基本使用
1. 明确导航区和展示区
2. 导航区的a标签改为Link标签
```javascript
<Link to="/xxx">Demo</Link>
```
3. 展示区写Route标签进行路由匹配

```javascript
<Route path="/xxx" component={Demo}>
<App/>的最外侧包裹一个<BrowserRouter>或者<HashRouter/>标签
```
## 四 路由组件与一般组件
1. 写法不同
```javascript
一般组件
<Demo/>
路由主键
<Route path="/demo" component={Demo}/>
```
2. 存放位置不同\
    一般组件：components\
    路由组件:pages
   
3. 接收到的props不同\
    一般组件:标签传递是啥就是啥\
    路由组件:收到三个固定组件
```javascript
history
    go
    goBack
    goForward
    push
    replace
location
    pathname
    search
    state
match
    params
    path
    url
```

## 五 NavLink与封装MyNavLink
1. NavLink可以实现路由的高亮,通过activeClassName指定样式
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取特殊的标签体内容

## 六 Switch的使用
1. 通常情况下，path和component是一一对应的关系
2. Switch可以提高路由匹配的效率(单一匹配)

## 七 解决多级路径刷新丢样式问题
1. public/index.html中引入样式时不写./ 写/(常用)
2. public/index.html中引入样式时不写./ 写%PUBLIC_URL%(常用)
3. 使用HashRouter(不常用)

## 八 路由的严格匹配与模糊匹配
1. 默认使用模糊匹配，最左前缀匹配法则
2. 开启严格匹配exact参数,可以写true也可以不写
```javascript
 <Route exact={true} path="/demo" component={Demo}/>
```
3. 严格匹配能不开就不开,有时候会导致无法匹配二级路由

## 九 Redirect的使用
1. 一般写在路由的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
```javascript
<Route path="/about" component={About}/>
<Route path="/home" component={Home}/>
{/*兜底的人前面都匹配不上就匹配这个*/}
<Redirect to='/about'/>
```

## 十 嵌套路由
1. 注册子路由时要写上父路由的path值
2. 路由匹配时按住注册路由的顺序进行的

## 十一 想向路由组件传递参数
### params参数
1. 路由链接携带参数
```javascript
<Link to={`/home/message/detail/${id}/${title}`}>详情</Link>;
```
2. 注册路由(声明接收参数)
```javascript
<Route path="/home/message/detail/:id/:title" component={Demo}/>
```
3. 接收参数
```javascript
const {id,title} = this.props.match.params
```

### search参数
1. 路由链接
```javascript
 <Link to={"/home/message/detail/?id=1&title=1"}>demo</Link>
```
2. 注册路由
```javascript
<Route path="/home/message/detail" component={Detail}/>
```
3. 接收参数
```javascript
const {search} = this.props.location
const {id, title} = qs.parse(search.slice(1))
```
4. 获取到的search是urlencoded编码字符串，需要借助querystring解析

### state参数
