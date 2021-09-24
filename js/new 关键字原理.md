new 关键字原理：
1. 创建一个对象
2. 将构造函数的作用域负值给新对象，因此this就指向了新对象
3. 执行构造函数中的代码，为新对象添加属性
4. 返回该对象


function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
}

var person = new Person('luojing', 18, '前端开发');