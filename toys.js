// function dahin ashiglah bolomjtoi
//define/uusgeh -> function funcname(){}
function hello(name,age,huis){
	console.log("hello "+name);
	console.log("i am "+age+" yers old")
	console.log("I am "+huis)
}
hello("Ronaldo",36,"man");
function niilber(too1,too2){
	console.log(too1+too2);
hello("messi",37,"man");
}
niilber(10,6);
function zereg(too){
	console.log(too^2);
}
zereg(12)
function find(nas){
	if(nas>17){
		console.log(nas+" Nasand hursen");
	}else{
		console.log(nas+" Nasand hureegui")
	}
}
find(25);
find(15)
console.log(document)
var a = document.getElementsByTagName('h1')[0];
console.log(a);
a.style.color="blue";
a.innerText = "hello world";
console.log(document)
var b = document.getElementsByTagName('h1')[1];
console.log(b);
b.style.color="red";
b.innerText = "goolkeeper";

var h2 = document.getElementsByTagName('h2')[0]
function click2(){
	//alert("test")
	h2.style.color="green";
	h2.innerText="changed";
}
var input = document.getElementsByTagName('input')[0];	
var p = document.getElementsByTagName('p')[0];
console.log(p);
console.log(input);
function findYear(){
	//alert(input.value)
	var year = 2024-input.value;
	if(input.value>120){
		p.style.color="red";
		p.innerText="hun iim nas naslahgui";
	}else if(input.value<0){
		p.style.color="yellow";
		p.innerText="ta turuugui bn";
	}else{
		p.innerText="your birth day"+year;
	}
}