css 相关
1. 盒子模型
盒子模型由content padding border margin 组成


标准盒模型和怪异盒模型的区别：
标准盒模型的宽度 = content
怪异盒模型的宽度 = content + padding + border


css 设置盒子模型
box-sizing: content-box // 标准盒模型
box-sizing: border-box // 怪异盒模型

2. css 画一个向右的三角形
div{
  width:0;
  height:0;
  border-top:5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid red; 
} 


3. 让元素水平垂直居中的方法
<!-- a. flex布局 -->
<body>
  <div class="child"></div>
</body>
body{
  display: flex;
  justify-content: center;  // 水平居中
  align-items: center; // 垂直居中
}

<!-- b. absolute布局 -->
body{
  position: relative;
}
.child{
  position: abosolute;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);
}

js 相关
1. 数组去重有哪些方法
利用 indexOf/includes 方法， 判断新数组中是否有该元素
var arr = [1,2,3,5,5,6,6,7,8];
var newArr = [];
for(let i=0;i<arr.length;i++){
  <!-- indexOf方法 -->
  if(newArr.indexOf(arr[i]) === -1){
    newArr.push(arr[i])
  }
  <!-- includes方法 -->
  if(!newArr.includes(arr[i])){
    newAee.push(arr[i])
  }
}

2. sort排序，判断相邻元素是否相同,不相同的加入新数组
var arr = [1,2,3,5,5,6,6,7,8];
var newArr = [];
arr = arr.sort();
for(let i=0;i<arr.length-1;i++){
  if(arr[i] !== arr[i+1]){
    newArr.push(arr[i]);
  }
}

3. filter 过滤，返回序号值和 indexOf 查找到的序号值一致的数据
var arr = [1,2,3,3,7,7,8,4,3,2,2];
arr.filter((item, index)=> {
  return arr.indexOf(item) === index;
})

继承的方法有哪些
1. 原型链继承
<!-- 父类 -->
function SuperType(name){
  this.name = name;
}
SuperType.protoType.sayName = function(){
  console.log(this.name);
}

<!-- 子类 -->
function SubType(){

}
SubType.protoType = new SuperType();
<!-- 劣势 -->
子类的原型是父类的实例，所以子类继承了父类的所有属性和方法，父类的所有属性和方法变成了现在子类的原型属性。原型属性中包含引用型数据类型会被所有实例共享。
所有当一个实例对原型中的引用型数据类型属性进行修改时，其他实例的该属性也会被修改。

2. 构造函数继承
<!-- 父类 -->
function SuperType(){
  this.color = ['red', 'black'];
}
SuperType.prototype.sayName = function(){
  console.log(this.color);
}
<!-- 子类 -->
function SubType(){
  SuperType.apply(this);
  this.name = 'lj';
}

<!-- 优劣势 -->
继承了父类的所有属性和方法, 所有继承的属性和方法变成了子类中的内部属性和方法，那么父类原型中的方法将不能共享。没有公共的方法。

3. 组合式继承
原型链继承和构造函数继承结合
<!-- 父类 -->
function SuperType(){
  this.color = ['red', 'black'];
}
SuperType.prototype.sayName = function(){
  console.log(this.color);
}
<!-- 子类 -->
function SubType(){
  SuperType.apply(this);
}

SubType.prototype = new SuperType();

4. 闭包的理解
指有权访问函数内部作用域变量的函数
function a(){
  var name = 'lj';
  function b(){
    console.log(name);
  }
}

5. 数组的方法
头部插入 unshift
头部删除 shift
尾部插入 push
尾部删除 pop
分隔 split 
删除替换 splice 
连接 concat

map
forEach
filter
find
some
every

6. js 执行机制
js是单线程语言，从上而下执行。
js 事件循环机制
a. 首先判断是 同步还是异步，同步任务继续执行, 异步任务就进入event table。
b. 异步任务在event table中注册事件，当满足触发条件被推入事件执行队列中
b. 当主线程空闲时，会去event table中看是否有可执行的异步任务，如果有就推入主线程中。







