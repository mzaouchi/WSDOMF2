// var tagH = document.getElementsByTagName('h1')
// console.log(tagH)
// console.log(tagH[0])
// tagH[0].style.color = 'red'
// var divM = document.getElementById('main')
// console.log(divM)
// var parC = document.getElementsByClassName('paraF')
// console.log(parC)

// var tagH = document.querySelector('h1')
// console.log(tagH)
// var parC = document.querySelector('.paraF')
// console.log(parC)
// var divM = document.querySelector('#main')
// console.log(divM)
// var parC = document.querySelectorAll('.paraF')
// console.log(parC)
// var tagH = document.querySelectorAll('h1')
// console.log(tagH)



// var tagH = document.querySelector('h1')
// console.log(tagH.innerHTML)
// console.log(tagH.innerText)
// var divM = document.getElementById('main')
// console.log(divM.innerText)
// console.log(divM.innerHTML)


// var divM = document.querySelector('#main')
// console.log(divM.firstElementChild.innerHTML)
// console.log(divM.lastElementChild.innerHTML)
// var tagH = document.getElementsByTagName('h1')
// console.log(tagH[0].parentElement)
// var parO = document.querySelector('.paraF')
// console.log(parO.previousElementSibling)
// console.log(parO.nextElementSibling)
// console.log(tagH[0].nextElementSibling.nextElementSibling.innerHTML)

// var tagHh = document.createElement('h2')
// tagHh.innerHTML = 'Welcome Ghassen'
// var divM = document.querySelector('#main')
// divM.appendChild(tagHh)
// var tagH = document.querySelector('h1')
// divM.insertBefore(tagHh,tagH.nextElementSibling)

// var divM = document.getElementById('main')
// divM.setAttribute('class','Hiba')
// console.log(divM)



// divM.remove()


function Hello(){
    alert('Hello Hiba')
}


// var btnPlus = document.querySelector('.plus')
// var btnMoins = document.querySelector('.moins')

// btnPlus.addEventListener('click',function(){
//     btnPlus.nextElementSibling.innerHTML++
// })

// btnMoins.addEventListener('click',function(){
//     if(btnMoins.previousElementSibling.innerHTML>0){
//         btnMoins.previousElementSibling.innerHTML--
//     }
    
// })


var btnsPlus = document.getElementsByClassName('plus')
var btnsMoins = document.getElementsByClassName('moins')

for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].nextElementSibling.innerHTML++
    })
}


for(let i = 0;i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        if(btnsMoins[i].previousElementSibling.innerHTML>0){
            btnsMoins[i].previousElementSibling.innerHTML--
        } 
    })
     
}