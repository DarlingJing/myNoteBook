基本数据类型都是深拷贝
浅拷贝和深拷贝是针对于引用数据类型的（对象、数组）
数组和对象的拷贝是指向同一块内存地址
浅拷贝：
1. 对象： Object.assign({},a);  {...a}
   数组： [].concat(a); [...a]

深拷贝
1. Json.parse(Json.stringify(a))
2. 递归调用
copy(origin){
  if(typeof origin != 'object') return;
  let result = {};
  for(let key in origin){
    if(origin.hasOwnProperty(key)){
      result[key] = (typeof origin[key] == 'object') ? copy(origin[key]) : origin[key];
    }
  }
}
