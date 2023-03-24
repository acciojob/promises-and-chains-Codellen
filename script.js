//your JS code here. If required.
const listen = document.getElementById("btn");
//const submit = document.getElementById("btn");
const getname = document.getElementById("name");
const getage = document.getElementById("age");
listen.addEventListener("click",function click(){
	return new Promise((resolve,reject)=>{
		//const div = document.createElement('div');
		let name = getname.value;
		let age = getage.value;
		if(age>=18)
		{
			setTimeout(()=>{
				resolve(`Welcome, <${name}>. You can vote`)
			},4000)
		}
		else
		{
			setTimeout(()=>{
				reject(`Oh sorry <${name}>. You aren't old enough`)
			},1000)
		}
	}).then((res)=>alert(res))

.catch((error)=>alert(error))
})








