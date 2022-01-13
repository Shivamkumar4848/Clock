const x = document.querySelector(".hour")
const y = document.querySelector(".minute")
const z = document.querySelector(".second")

setInterval(() => {
    d = new Date()
    hr_rotation = 30 * d.getHours() + d.getMinutes() / 2
    min_rotation = 6 * d.getMinutes()
    sec_rotation = 6 * d.getSeconds()

    x.style.transform = `rotate(${hr_rotation}deg)`
    y.style.transform = `rotate(${min_rotation}deg)`
    z.style.transform = `rotate(${sec_rotation}deg)`
}, 1000);