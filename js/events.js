console.log('Aj k dom er speacial event')
// option 1
/* <button onclick="console.log(5)">click Me</button> */

//option 2
{/* <button onclick="MakeBrown()">Make Brown</button> */}
function MakeBrown() {
    document.body.style.backgroundColor = 'red'
}

// option 3
const makebluebtn = document.getElementById('Make-bkur')

makebluebtn.onclick = makeblue
function makeblue() {
    document.body.style.backgroundColor = 'blue'

}
//option3 another
const makepurplebtn = document.getElementById('make-purple')
makepurplebtn.onclick = function makepurple() {

    document.body.style.backgroundColor = 'purple'
}
//option  4.
const makepinkbtn = document.getElementById('make-pink')
makepinkbtn.addEventListener('click', makepink)
function makepink() {
    document.body.style.backgroundColor = 'pink'
}
//option 4 another
const makegreenbtn = document.getElementById('make-green')
makegreenbtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green'
})
// option 4 fainal----sorasori use 
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor='orange'
})