// http请求完整流程
function ajax(){
  // 1. 创建http请求
  var ajaxObj = new XMLHttpRequest();
  // 2. 设置请求的参数，包括请求方法、url
  ajaxObj.open('get', '1.php');
  // 3. 发送请求
  ajaxObj.send();
  // 监听onreadyStateChange事件，状态码改变执行
  ajaxObj.onreadystatechange = function(){
    if(ajaxObj.readyState == 4 || ajaxObj.status == 200){
      // 5. 获取返回数据
      var data = ajaxObj.responseText;
    }
  }
}