const imageNotification = document.querySelector('.notifyImg');
const notificationBox = document.querySelector('.popNify');
const profileBox = document.querySelector('.profile');
const profileInfo = document.querySelector('.store');
const openProducts = document.querySelector('.openProducts');
const products = document.querySelector('.products')
const coloraRange = document.getElementById('colorRange');
const rangeText = document.querySelector('#rangeText');
//const check = document.querySelector('#check' + 1);
//const text = document.querySelector('.text' + 1);

imageNotification.addEventListener('click', () => {
    if (notificationBox.style.display === 'none' || notificationBox.style.display === '') {
        notificationBox.style.display = 'block';
    } else {
        notificationBox.style.display = 'none';
    }
});

profileBox.addEventListener('click', () => {
    if (profileInfo.style.display === 'none' || profileInfo.style.display === ' ') {
        profileInfo.style.display = 'block'
    } else {
        profileInfo.style.display = 'none'
    };
});
openProducts.addEventListener('click', () => {
    if (products.style.display === 'none' || products.style.display === '') {
        products.style.display = 'block'
    } else {
        products.style.display = 'none'
    }
});

const product = ['checkbox1', 'checkbox2', 'checkbox3', 'checkbox4', 'checkbox5'];
let numberOfCheckedInput = 0;
for (let i = 0; i < product.length; i++) {
    let checkbox = product[i];
    let checkItem = document.getElementById(checkbox);
    //console.log(check)
    let text = document.getElementById('text' + i);
    // console.log(text)
    let unmark = document.getElementById('unmark-checkbox' + i);
    let rotate = document.getElementById('rotating-checkbox' + i)
    let mark = document.getElementById('mark-checkbox' + i)
    // console.log(mark)
    const mark_as_done = 'checkbox-done';

    function check() {
        unmark.classList.add('hide-svg')
        rotate.classList.remove('hide-svg')
        setTimeout(() => {
            rotate.classList.add('hide-svg');
            mark.classList.remove('hide-svg');
            text.classList.add('add-display-block');
            checkItem.classList.add(mark_as_done);
        }, 500)
        console.log('im called')
    }

    function uncheck() {
        mark.classList.add('hide-svg');
        rotate.classList.remove('hide-svg')
        setTimeout(() => {
            rotate.classList.add('hide-svg');
            unmark.classList.remove('hide-svg');
            //checkItem.classList.remove('mark_as_done');
        }, 500)

    }

    function checkOrUncheck() {
        const isCheck = checkItem.classList.contains(mark_as_done)
        if (isCheck) {
            check();
        } else {
            uncheck();
        }
    }
    checkItem.addEventListener('click', checkOrUncheck);
