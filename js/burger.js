const $burgerBtnblocks = document.querySelector('.burger__btn_blocks ')
export function burgerMenu() {
    this.children[0].classList.toggle('__active')
    this.children[0].children[0].classList.toggle('new')
    $burgerBtnblocks.classList.toggle('burger__btn__acteve')
}
