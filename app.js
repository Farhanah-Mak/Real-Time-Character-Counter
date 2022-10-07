const textArea= document.getElementById('text-area')
const totalChar= document.querySelector('.total-counter')
const remainingChar= document.querySelector('.remaining-counter')


 textArea.addEventListener('keyup', ()=> {
    updateCounter()
 })
 updateCounter() //calling so that whenevr the page is refreshed values are initialized to 0 and 50 resp
 function updateCounter(){
    totalChar.innerText= textArea.value.length
    remainingChar.innerText= textArea.getAttribute('maxlength') - textArea.value.length
 }