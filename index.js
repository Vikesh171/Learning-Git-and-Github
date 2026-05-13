let ele = document.querySelector('#heading');
console.log(ele);

console.log(ele.textContent);

ele.textContent = "<P>Hello World</P>";

ele.innerHTML = "<p>Chennai</p>";
console.log(ele.innerHTML);

console.log(ele.id);
ele.id = "domHeading";
console.log(ele.id);

console.log(ele.childNodes);