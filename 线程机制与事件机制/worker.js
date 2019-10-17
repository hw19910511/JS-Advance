function fibonacci(n){//递归调用
   return n<=2 ? 1 : fibonacci(n-1)+fibonacci(n-2);
}
console.log(this);
var onmessage=function(event){//不能用函数声明
	var number=event.data;//通过event.data获得发送来的数据
	console.log('分线程接收到主线程发送的数据');
	//计算
	var result=fibonacci(number);
	postMessage(upper);//将获取到的数据发送回主线程
	console.log('分线程向主线程返回数据：'+result);
	//alert(result); alert是window的方法，在分线程不能调用
	//分线程中的全局对象不再是window，所以在分线程中不可能是window
}