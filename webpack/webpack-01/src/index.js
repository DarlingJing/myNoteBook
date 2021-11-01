console.log('我是入口文件');
import './style.css'
import Icon from './icon.png'
import _ from 'lodash';

function component(){
  var element = document.createElement('div');
  // var btn = document.createElement("button");
  // btn.innerHTML = '点我';
  // btn.onclick = printMe;
  element.innerHTML = 'luojing webpack !';
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  // element.appendChild(btn);
  return element;
}

console.log(_.join(['Another', 'module', 'loaded!'], ' '));
document.body.appendChild(component());