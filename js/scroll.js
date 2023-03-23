//Весь скролл
const $headerDownBlocks = document.querySelector('.header__down_blocks')

export function ScrollTopFunc() {
    function trackScroll() {
        const scrolled = window.pageYOffset;

        if (scrolled > 50) {
            $headerDownBlocks.style.position = 'fixed'

        }
        if (scrolled < 50) {
            $headerDownBlocks.style.position = 'relative'

        }

        if (scrolled > 500) {
            goTopBtn.style.display = 'block';
        }
        //показывает блок
        if (scrolled < 500) {
            goTopBtn.style.display = 'none';
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 10);
        }
    }
    const goTopBtn = document.querySelector('.back_to_top');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

}


const $wrapper = document.querySelector('.wrapper')

let p = ['Прайс', 'Отзывы', 'Оплата', 'Доставка', 'Резка']

export function clickScrollMenuBtn1() {

    let px = [
        $wrapper.children[1].offsetTop,
        $wrapper.children[9].offsetTop,
        $wrapper.children[6].offsetTop,
        $wrapper.children[5].offsetTop,
        $wrapper.children[5].offsetTop]
    let a
    for (let i = 0; i < 5; i++) {
        if (this.textContent == p[i]) a = px[i]
    }
    if (this.textContent == p)
        console.log(this);
    scrollTo({
        top: `${a}`,
        left: 0,
        behavior: 'smooth'
    })
}
export function  clickScrollMenuBtn2() {

    let px = [
        $wrapper.children[3].offsetTop - 80,
        $wrapper.children[7].offsetTop - 80,
        $wrapper.children[6].offsetTop - 80,
        $wrapper.children[5].offsetTop - 80,
        $wrapper.children[5].offsetTop + 250]
    let a
    for (let i = 0; i < 5; i++) {
        if (this.nextElementSibling.textContent == p[i]) a = px[i]
    }
    if (this.nextElementSibling.textContent == p)
        console.log(this);
    scrollTo({
        top: `${a}`,
        left: 0,
        behavior: 'smooth'
    })
}
