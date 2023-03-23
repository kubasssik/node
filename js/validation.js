
const $formsAddBtn = document.querySelector('.forms__add_btn')
let flag1 = false
let flag2 = false
export function validationNameComment() {
    if (this.value.length <= 2) {
        this.nextElementSibling.textContent = 'Имя должно содержать, не меньше 3-х символов'

    }
    if (this.value.length >= 17) {
        this.nextElementSibling.textContent = 'Имя должно содержать, не больше 16-х символов'

    }
    if (this.value.length > 3) {
        if (this.value.match(/\d/)) {//ddd -проверить 3 дд
            this.nextElementSibling.textContent = 'Нужны буквы'
        }

    }
    if (this.value.length == 0 || this.value.length > 2 && this.value.length < 17 && this.value.match(/\D/)) {
        this.nextElementSibling.textContent = ''
    }
    if (this.nextElementSibling.textContent == '') {
        this.previousElementSibling.style.color = 'green'
        flag1 = true
    }
    if (this.nextElementSibling.textContent != '' || this.value.length == 0) {
        this.previousElementSibling.style.color = 'red'
        flag1 = false

    }

    if (flag1 && flag2 == true) {
        $formsAddBtn.removeAttribute('disabled')
        $formsAddBtn.style.opacity = '1'
    }
    else {
        $formsAddBtn.setAttribute('disabled', 'disabled')
        $formsAddBtn.style.opacity = '.5'
    }
}


export function validationComment() {
    if (this.value.length < 50) {
        this.nextElementSibling.textContent = `Не меньше 50 символов, сейчас ${this.value.length}`
        this.nextElementSibling.style.color = 'red'
        this.previousElementSibling.style.color = 'red'
        flag2 = false
    }
    if (this.value.length >= 50) {
        this.nextElementSibling.textContent = `Не больше 300 символов, сейчас  ${this.value.length}`
        this.nextElementSibling.style.color = 'green'
        this.previousElementSibling.style.color = 'green'
        flag2 = true
    }
    if (this.value.length > 300) {
        this.nextElementSibling.textContent = `Не больше 300 символов, сейчас  ${this.value.length}`
        this.nextElementSibling.style.color = 'red'
        this.previousElementSibling.style.color = 'red'
        flag2 = false
    }


    if (flag1 && flag2 == true) {
        $formsAddBtn.removeAttribute('disabled')
        $formsAddBtn.style.opacity = '1'
    }
    else {
        $formsAddBtn.setAttribute('disabled', 'disabled')
        $formsAddBtn.style.opacity = '.5'
    }
}

$formsAddBtn.addEventListener('click', () => {
    localStorage.setItem('scrollComm', 'yes');

})
let a = 2400
window.addEventListener('load', () => {
    if (localStorage.getItem('scrollComm')) {
        if (window.innerWidth > 576) a = 2300
        if (window.innerWidth > 768) a = 2200
        if (window.innerWidth > 922) a = 3500

        scrollTo({
            top: `${a}`,
            left: 0,
            behavior: 'smooth'
        })
    }
    setTimeout(() => {
        localStorage.removeItem('scrollComm')
    }, 1000);

})


