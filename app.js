document.addEventListener("DOMContentLoaded", () => {
    let secHand = document.querySelector('.secHand')
    let minHand = document.querySelector('.minHand')
    let hrHand = document.querySelector('.hrHand')
    let hands = document.getElementsByClassName('.hand')

    let time = new Date()

   

    const setDate = () => {
        const now = new Date()
        const seconds = now.getSeconds()
        const secondsDegrees = ((seconds/60) * 360) + 90;
        secHand.style.transform = `rotate(${secondsDegrees}deg)`

        const minutes = now.getMinutes()
        const minsDegrees = ((minutes/60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`

        const hours = now.getHours() - 12
        const hrDegrees = ((hours / 12) * 360) + 90;
        hrHand.style.transform = `rotate(${hrDegrees}deg)`

        console.log(hours)
    }

  setInterval(setDate, 1000)
  

    document.querySelectorAll('.hand')[2].addEventListener('click', (event) => {
       console.log(event.target)
    })
})