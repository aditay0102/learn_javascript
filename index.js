let bd = document.querySelector("body");

let p = document.createElement("p");
p.textContent = "hey i am red"
p.setAttribute('style', 'color:red;')
bd.appendChild(p); 


let h3 = document.createElement("h3");
h3.textContent = "I'am blue h3!"
h3.setAttribute('style','color:blue;')

bd.appendChild(h3)

let div = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent = "I am a div"
div.appendChild(h1)

let dp = document.createElement("p");
dp.textContent = "Me too";

div.appendChild(dp)

bd.appendChild(div)
