function loadjson(file,callback) {
	// body...
	var xhr= new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function (){
		if(xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	var d=JSON.parse(text);
	console.log(d.details)
	basic(d.details);

});
var main=document.querySelector(".root");

function basic(data) {
	// body...
	var r=document.createElement("div");
	r.classList.add('row');
	r.classList.add('pr');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-3');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-5');
	r.appendChild(c1);
	var c2=document.createElement('div');
	c2.classList.add("col-4");
	r.appendChild(c2);
var img=document.createElement('img')
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxarVveyPMPEdVg6SPA2sfPgIWT-Jqot0qOw&usqp=CAU";
img.classList.add('img');
c.appendChild(img);


	var name=document.createElement("h1");
	name.textContent=data.name;
	name.classList.add("name");
	//name.setAttribute("id","name");
	c1.appendChild(name);
	var email=document.createElement('h3');
	email.textContent=data.email;
	email.classList.add("email");
	c2.appendChild(email);
	var phno=document.createElement("h3")
	phno.textContent=data.phno;
	phno.classList.add("phno");
	c2.appendChild(phno);

	var line=document.createElement('hr');

		main.appendChild(line);

	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	var o1=document.createElement("h2");
	o1.textContent="Career Objective";
	o1.classList.add("o1");
	c.appendChild(o1);
	var obj=document.createElement('h3');
	obj.textContent=data.object;
	obj.classList.add("obj");
	c1.appendChild(obj);

	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	/*var line=document.createElement('hr');
	main.appendChild(line);*/
	var e=document.createElement("h2");
	e.textContent="Education Qualification";
	e.classList.add('e');
	c.appendChild(e);

	var table =document.createElement('table');
	var row="<tr><th>College/School</th><th>YEAROFSTUDY</th><th>Percentage</th></tr>"
	for (var i = 0; i < data.edu.length; i++) {
		row+="<tr><td>"+data.edu[i].name+"</td><td>"+data.edu[i].year+"</td><td>"+data.edu[i].per+"</td</tr>";
		
	}
	table.innerHTML=row;
	table.classList.add("table-striped")
	table.classList.add("table")
	c1.appendChild(table);
	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	var s=document.createElement('h2');
	s.textContent="Technical Skills";
	c.appendChild(s);
	var ul=document.createElement('ul');
	for (var i = 0; i < data.skills.length; i++) {
		li=document.createElement('li');
		li.textContent=data.skills[i];
		ul.appendChild(li);
	}
	c1.appendChild(ul);
	var line=document.createElement('hr');
	main.appendChild(line);

	var r=document.createElement("div");
	r.classList.add('row');
	main.appendChild(r);
	var c=document.createElement('div');
	c.classList.add('col-4');
	r.appendChild(c);
	var c1=document.createElement('div');
	c1.classList.add('col-8');
	r.appendChild(c1);
	var s1=document.createElement('h2')
	s1.textContent="Soft Skills"
	c.appendChild(s1);
	var ul=document.createElement('ul');
	for (var i = 0; i < data.soft.length; i++) {
		li=document.createElement('li');
		li.textContent=data.soft[i];
		ul.appendChild(li);
	}
	c1.appendChild(ul);
	var line=document.createElement('hr');
	main.appendChild(line);
	
	
	console.log(data);
}