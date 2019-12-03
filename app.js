document.addEventListener("DOMContentLoaded", () => {
    let secHand = document.querySelector('.secHand')
    let minHand = document.querySelector('.minHand')
    let hrHand = document.querySelector('.hrHand')
    let hands = document.getElementsByClassName('.hand')

    let time = new Date()

   

    const setDate = () => {
        const now = new Date()
        const seconds = now.getSeconds()
        const secondsDegrees = ((seconds/60) * 360)
        secHand.style.transform = `rotate(${secondsDegrees}deg)`
        console.log(seconds)
    }

  setInterval(setDate, 1000)
  

    document.querySelectorAll('.hand')[2].addEventListener('click', (event) => {
       console.log(event.target)
    })
})