// const test = document.getElementsByTagName("h1")
// console.log(test)

// document.getElementById("hey").style.backgroundColor = 'red';

// Adding class by javascripts
// first way
// const tag = document.getElementById("hello")
// tag.className = "one"
// document.getElementById("hello").className = "one"

// Second Way
// const tag = document.getElementById("hello")
// tag.classList.add("two")
// tag.classList.add("one")
// tag.classList.remove("one")

// Add and Create ELement
// const ff = document.getElementById("container")

// const tt = document.createElement("li")
// tt.innerText = "Hello bro"
// console.log(tt.innerText)

// const test = document.getElementById("container")

// const list = document.createElement("li")
// list.innerText = "New list"

// test.append(list)

// Append Child
const bd = document.querySelector("#hee")
const divs = document.createElement("div")
const head = document.createElement("p")
head.innerText = "Hello bro it me raw. I am a big fan of you please give a reply to me!!! "

head.style.color = "red"
head.style.fontSize = "large"

divs.appendChild(head)
bd.appendChild(divs)


function makeRed()
{
    document.getElementById('helo').innerText = "ok bro";
    document.body.style.backgroundColor = 'red'
}

document.getElementById('ones').addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
    document.getElementById('ones').innerText = "Hell yeah"
})

document.getElementById('twos').addEventListener('click',function(){
    document.body.style.backgroundColor = 'yellow';
    document.getElementById('twos').innerText = "Heleeee"
})