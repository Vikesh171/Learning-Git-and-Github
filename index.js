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

ele.style.backgroundColor = 'blue';

let newElement = document.createElement('div');
newElement.textContent = "I'm the new Element";

document.querySelector('body').appendChild(newElement);

let btn = document.querySelector('button');
function giveAlert()
{
    alert('Button has been pressed');
}
btn.addEventListener('click', giveAlert);

btn.style.borderRadius = "20px";

ele.style.borderRadius = "20px";
ele.style.color = 'white';
