document.addEventListener("DOMContentLoaded", () => {
    let secHand = document.querySelector('.secHand')
    let minHand = document.querySelector('.minHand')
    let hrHand = document.querySelector('.hrHand')
    let hands = document.getElementsByClassName('.hand')

    let time = new Date()

    // window.setInterval(() => {
    // console.log(time), 5000})
    
    document.querySelectorAll('.hand')[2].addEventListener('click', (event) => {
       console.log(event.target)
    })
})