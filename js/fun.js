
export function createDate(params) {
    let date = new Date()
    let d = date.getDate()
    let m = date.getMonth()
    let y = date.getFullYear()
    if (d <= 9) {
        d = `0${date.getDate()}`
    }
    if (m <= 8) {
        m = `0${date.getMonth()}`
    }
    params.textContent = `Цены без доставки с учетом НДС, действительны с ${d}.${m}.${y}г.`
}
const $cImg = document.querySelectorAll('.__contacts__img')
function setWorking() {
    let date = new Date()
    let hh = date.getHours()
    if (hh >= 8 && hh < 20) $cImg.forEach(e => e.classList.add('__contacts__img__before'))
    else $cImg.forEach(e => e.classList.add('__contacts__img__after'))
}
setWorking()