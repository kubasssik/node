import { descriptions } from "./description.js";
export const $PriceMenu = document.querySelectorAll('.price__menu')
export const $PriceAsideLI = document.querySelectorAll('.price__aside_li')
export const $PriceLi = document.querySelectorAll('.price__li')
function myResize(p1, p2) {
    window.addEventListener('resize', () => {
        for (let i = 0; i < p1.length; i++) {
            const p = p1[i];
            if (p.classList[2] == 'btn__red') {
                p2[i].classList.add('btn__red')
            }
        }
    })
}
myResize($PriceLi, $PriceAsideLI)
myResize($PriceAsideLI, $PriceLi)
$PriceLi.forEach(btn => {
    btn.addEventListener('click', addPriceMenu)
})
$PriceAsideLI.forEach(btn => {
    btn.addEventListener('click', addPriceMenu)
})
function name1(p1) {
    p1.forEach(btn => {
        btn.classList.remove('btn__red')
    })
}
function addPriceMenu() {
    name1($PriceAsideLI)
    name1($PriceLi)
    $PriceMenu.forEach(winMenu => {
        winMenu.classList.remove('display__block')
    })
    for (let i = 0; i < descriptions.length; i++) {
        if (this.textContent == descriptions[i][0]) {
            $PriceMenu[i].classList.toggle('display__block')
            this.classList.toggle('btn__red')
        }
    }
}
const $priceDescription = document.querySelectorAll('.price__description')
function addDriceDecscription() {
    for (let i = 0; i < $priceDescription.length; i++) {
        const e = $priceDescription[i];
        e.children[0].textContent = descriptions[i][0]
        e.children[1].textContent = descriptions[i][2]
        e.children[2].textContent = 'Доставка от 1000₽'
        e.previousElementSibling.style.background = `url(../img/${descriptions[i][1]}) center/cover no-repeat`
        $PriceLi[i].textContent = descriptions[i][0]
    }
}
addDriceDecscription()
$PriceLi.forEach(e => e.addEventListener('click', clickScrollLi))
function clickScrollLi() {
    scrollTo({
        top: `${this.offsetTop + 200}`,
        left: 0,
        behavior: 'smooth'
    })
}







export function createElement(nEl, cEl, csEl, aEl, t = '') {
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < nEl; i++) {
        let newEl = document.createElement(cEl)
        newEl.classList.add(csEl)
        newEl.textContent = t
        fragment.appendChild(newEl)
    }
    aEl.appendChild(fragment)
}
