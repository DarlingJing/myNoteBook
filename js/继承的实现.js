// // 1.原型链继承
// // 父类
// function SuperType(){
//   this.color = ['red', 'black'];
// }
// SuperType.prototype.sayColor = function(){
//   console.log(this.color);
// }

// // 子类
// function SubType(){
// }
// SubType.prototype = new SuperType();
// var sub1 = new SubType();
// sub1.sayColor();
// var sub2 = new SubType();
// console.log(sub2.color)

// // 2. 构造函数继承
// // 父类
// function SuperType(){
//   this.color = ['red', 'black'];
// }

// SuperType.prototype.sayName = function(){
//   alert(this.color);
// }

// // 子类
// function SubType(){
//   SuperType.call(this);
// }

// var sub1 = new SubType();
// sub1.color.push('yellow');
// var sub2 = new SubType();
// console.log(sub2.color)

// //3. 组合式继承
// // 父类
// function SuperType(){
//   this.color = ['red', 'black'];
// }
// SuperType.prototype.sayColor = function(){
//   console.log(this.color);
// }

// // 子类
// function SubType(){
//   SuperType.call(this);
// }

// SubType.prototype = new SuperType();
// var sub1 = new SubType();
// sub1.color.push('yellow');
// sub1.sayColor();
// var sub2 = new SubType();
// sub2.sayColor();

// var arr = [1,2,3];
// arr.toString();
// console.log(Object.prototype.toString.apply(arr));
// console.log(arr.toString());

// var a = 1 + 2 + '3' + 4;
// console.log(a)
// console.log(Object.prototype)
// console.log(Array.prototype)
// var b = {
//   name: 'lj',
//   age: 10
// }
// console.log(b.toString())
