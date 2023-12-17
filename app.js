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
        unmark.classList.add('hide')
        rotate.classList.remove('hide')
        setTimeout(() => {
            rotate.classList.add('hide');
            mark.classList.remove('hide');
            text.classList.remove('hide');
            //when button is  1 should be added to  rangetext 
        }, 300)
        checkItem.classList.add(mark_as_done);
        rangeText.textContent = `${numberOfCheckedInput += 1}/5 completed`
        console.log('hey check is called')
    }

    function uncheck() {
        mark.classList.add('hide');
        rotate.classList.remove('hide')
        setTimeout(() => {
            rotate.classList.add('hide');
            unmark.classList.remove('hide');
            text.classList.add('hide');
            //checkItem.classList.remove('mark_as_done');
        }, 500)
        checkItem.classList.remove(mark_as_done);
        rangeText.textContent = `${numberOfCheckedInput -= 1}/5 completed`
        console.log('hey uncheck is called')
    }

    function checkOrUncheck() {
        //isCheck = checkItem.classList.contains(mark_as_done)
        if (!checkItem.classList.contains(mark_as_done)) {
            check();
        } else {
            uncheck();
        }
        switch (numberOfCheckedInput) {
            case 1:
                coloraRange.style.background = 'linear-gradient(to right,blue 20px,transparent 20px,transparent 20px,transparent 20px,transparent 20px)';
                break;
            case 2:
                coloraRange.style.background = 'linear-gradient(to right,blue 40px,transparent 20px,transparent 20px,transparent 20px)';
                break;
            case 3:
                coloraRange.style.background = 'linear-gradient(to right,blue 60px,transparent 20px,transparent 20px)';
                break;
            case 4:
                coloraRange.style.background = 'linear-gradient(to right,blue 80px,transparent 20px)';
                break;
            case 5:
                coloraRange.style.background = 'linear-gradient(to right,blue 100px,transparent 0px)';
                break;
            default:
                coloraRange.style.background = 'linear-gradient(to right,transparent 20px,transparent 20px,transparent 20px,transparent 20px,transparent 20px)';
        }
    }
    checkItem.addEventListener('click', checkOrUncheck)
}