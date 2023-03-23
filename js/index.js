import { descriptions, regexpArr } from "./description.js"
import { createDate } from "./fun.js"
import { ScrollTopFunc, clickScrollMenuBtn1, clickScrollMenuBtn2 } from "./scroll.js"
import { createElement } from "./functions.js"
import { burgerMenu } from "./burger.js"
import { validationComment,validationNameComment } from "./validation.js"
const $messIcon = document.querySelectorAll('.mess__style')
$messIcon.forEach(e => e.addEventListener('click', headerMess ))
function headerMess() {
       if(this.classList[0] == 'telephone__burger') location.href = 'tel: +79787077886'
        if(this.classList[0] == 'whatsapp') location.href = 'https://wa.me/79787077886'
        if(this.classList[0] == 'viber') location.href = 'https://viber.click/79787077886'
        if(this.classList[0] == 'telegram') location.href = 'https://tlgg.ru/@Viktormetall'      
}
const $telephonePrice = document.querySelector('.telephone__price_')
$telephonePrice.addEventListener('click', ()=>{
    location.href = 'tel: +79787077886'
})
const $inputAddComment = document.querySelector('.input__add_comment')
const $formsAddTextarea = document.querySelector('.forms__add_textarea')
$inputAddComment.addEventListener('input', validationNameComment)
$formsAddTextarea.addEventListener('input', validationComment)
const $burgerMenu = document.querySelector('.burger__menu')
$burgerMenu.addEventListener('click', burgerMenu)
ScrollTopFunc()
const $priceMenu = document.querySelectorAll('.price__menu_p')
$priceMenu.forEach(e => createDate(e))
const $headerNavLi = document.querySelectorAll('.header__nav_li')
const $burgerNavLi = document.querySelectorAll('.burger__nav_li')
$headerNavLi.forEach(element => {
    element.addEventListener('click', clickScrollMenuBtn1)
});
$burgerNavLi.forEach(element => {
    element.addEventListener('click', clickScrollMenuBtn2)
}); 
const $telphon = document.querySelector('.telephone__burger')
 class PhoneVibra{
    constructor(tel){
        this.tel = tel;   
    }
   phoneVibra() {
    this.tel.classList.toggle('vibra__frame_1')
        setTimeout(() => {
            this.tel.classList.toggle('vibra__frame_1')
            this.tel.classList.toggle('vibra__frame_2')
        }, 100)
        setTimeout(() => {
            this.tel.classList.toggle('vibra__frame_2')
        }, 1000)
        setTimeout(() => {
            let a = new PhoneVibra(this.tel)
            a.phoneVibra()
        }, 2000)
    }
}
let vibra2 = new PhoneVibra($telphon.children[0])
vibra2.phoneVibra()
let vibra1 = new PhoneVibra($telephonePrice.children[0])
vibra1.phoneVibra()
const $commentActiveBtn = document.querySelectorAll('.__active_add')
const $windowCommentBody = document.querySelector('.window__comment_body')
const $commentAddClosed = document.querySelector('.comment__add_closed')
const $comment = document.querySelectorAll('.comment')
const $commentBlock = document.querySelector('.comment__block')
const $commentFooterUl = document.querySelector('.comment__footer_ul')
    for (let i = 0; i < $comment.length; i++) {
        if( i < 3) continue
        $comment[i].remove()
    }
$commentActiveBtn.forEach(btn => {
    btn.addEventListener('click', commentsWindow)
})

function commentsWindow() {
    if (this.textContent == 'Добавить отзыв') {
        $windowCommentBody.style.display = 'block'
    }
    if (this.textContent == 'Читать все отзывы') {
        this.textContent = 'Закрыть отзывы'
        $commentFooterUl.classList.add('header_down__active')
        for (let i = 0; i < $comment.length; i++) {
            if (i < 2) continue
            $commentBlock.appendChild($comment[i])
        }
    }
    else{
        console.log(this.textContent);
            this.textContent = `Читать все отзывы`
            $commentFooterUl.classList.remove('header_down__active')
            for (let i = 0; i < $comment.length; i++) {
                if( i < 3) continue
                $comment[i].remove()   
        } 
    }
}
$commentAddClosed.addEventListener('click', closedCommentsWindow)
function closedCommentsWindow() {
    $windowCommentBody.style.display = 'none'
}

let dataPrice = []
async function requestHttpList() {
    await fetch('http://metall-simferopol/x')
        .then(data => { return data.json() })
        .then(data => { dataPrice = data[0].data })
}
await requestHttpList()
const $priceTbody = document.querySelectorAll('.price__tbody')
const $h3 = document.querySelectorAll('.h3')
function createAbbreviatedPrice() {
    function rP() {
        let aPr = []
        for (let i = 0; i < dataPrice.length; i++) {
            const e = dataPrice[i]
            if (i == 0) continue
            if (e.length == 5 || e.length == 2) {
                aPr.push(e)
            }
        }
        return aPr
    }
    function tR() {
        for (let j = 0; j < regexpArr.length; j++) {
            const reg = regexpArr[j]
            let a = []
            for (let i = 0; i < rP().length; i++) {
                const e = rP()[i]
                if (e[0].match(reg)) {
                    a.push(e)
                }
            }
            if ($h3[j].textContent == descriptions[j][0]) {
                for (let t = 0; t < a.length; t++) {
                    createElement(1, 'tr', '__tr', $priceTbody[j],)
                }
            }
        }
    }
    tR()
    let tr = document.querySelectorAll('.__tr');
    function creatPrice() {
        for (let i = 0; i < tr.length; i++) {
            for (let j = 0; j < 5; j++) {
                createElement(1, 'td', '__td', tr[i], rP()[i][j])
            }
        }
    }
    creatPrice()
}
createAbbreviatedPrice()
const $priceTbodyLoad = document.querySelector('.price__tbody_load')
function createFullPrice() {
    for (let i = 0; i < dataPrice.length - 2; i++) {
        const e = dataPrice[i]
        if (i == 0) continue
        createElement(1, 'tr', 'tr__', $priceTbodyLoad)
    }
    let tr = document.querySelectorAll('.tr__')
    for (let i = 0; i < dataPrice.length; i++) {
        const e = dataPrice[i];
        if (i == 0) continue
        if (e.length == 1) {
            createElement(1, 'th', 'th__', tr[i - 1], e[0])
        }
        if (e.length == 5 || e.length == 2) {
            for (let j = 0; j < 5; j++) {
                createElement(1, 'td', 'td__', tr[i - 1], e[j])
            }
        }
    }
    let th = document.querySelectorAll('.th__')
    th.forEach(e => e.setAttribute('colspan', '5'))
}
createFullPrice()
     const $priceDataBtn = document.querySelectorAll('.price__data_btn')
     const $downloadPriceButton = document.querySelector('.download__price__btn'); 
     const $priceControlBtn = document.querySelector('.price__control_btn'); 
     const $priceDataBlock = document.querySelector('.price__data_block')
     $downloadPriceButton.addEventListener('click', openPrice)
     $priceControlBtn.addEventListener('click', openPrice)
     $priceDataBtn.forEach(element => {
        if (element.textContent == 'Закрыть') {
            element.addEventListener('click',  openPrice)
        }
        if (element.textContent == 'Печать') {
            element.addEventListener('click', () => {
                $priceDataBtn.forEach(e => {
                    e.style.opacity = '0'
                })
                setTimeout(() => {
                    $priceDataBtn.forEach(e => {
                        e.style.opacity = '1'
                    })
                }, 1000);
                window.print();
            })
        }
        if (element.textContent == 'Сохранить xlsx') {
            element.addEventListener('click', () => {
                const table2excel = new Table2Excel();
                table2excel.export(document.querySelectorAll("table.price__table_load"));
            })
        }
    });
   function openPrice() {
    console.log(this);
    $priceDataBlock.classList.toggle('display__block')
   }




