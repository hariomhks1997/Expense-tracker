//examine the documnet Object
//console.dir(document)
//console.log(document.domain)
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent="Hello"
//console.log(document.forms);
//console.log(document.links);
//console.log(document.forms[0]);
//console.log(document.images);

//GetElementbyid
//console.log(document.getElementById("header-title"));
//var headertitle=document.getElementById("header-title");
//console.log(headertitle) 
//headertitle.textContent="hello"
//headertitle.innerText="goodbye"
///console.log(headertitle.textContent);
//console.log(headertitle.innerText);
//headertitle.innerHTML="<h3>Hello</h3>";
//var header=document.getElementById("main-header")
//header.style.borderBottom="solid 3px black"
 
//GetElement by class name//
 
var newli=document.createElement("li")
newli.appendChild(document.createTextNode("hello"))
newli.className="list-group-item"
var container=document.querySelector(".list-group")
var h1=document.querySelector("li:nth-child(3)")
container.insertBefore(newli,h1)