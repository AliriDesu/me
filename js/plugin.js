var clientH = document.documentElement.clientHeight,
    clientW = document.documentElement.clientWidth,
    index = 0,
    mainObj = document.getElementsByClassName('main')[0],
    timer1 = null,
    timer2 = null,
    t,
    navs = document.getElementsByClassName('nav');

function init() {
    mainObj.style.top = '0px';
    window.addEventListener('resize', function () {
        clientH = document.documentElement.clientHeight;
        clientW = document.documentElement.clientWidth;
        
    });
    window.addEventListener('wheel', function (e) {
        if (!t || Date.now() - t >= 1000) {
            console.log(88);
            console.log(t);
            if (e.deltaY == 100) {
                pageTo(1, undefined);
            } else if (e.deltaY == -100) {
                pageTo(-1, undefined);  
            }
            t = Date.now();
        }



    });
    for (let i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', function (e) {
            index = i;
            pageTo(undefined, index);

        })
    }

    timer1 = setTimeout(() => {
        mainObj.children[index].classList.add('display');
    }, 500);
}

init();

function pageTo(dir, to) {
    if (to != undefined) {
        mainObj.style.top = -to * clientH + 'px';
    } else {

        index = index + dir;
        if (index <= 0) {
            index = 0;
        } else if (index >= 3) {
            index = 3
        }
        mainObj.style.top = -index * clientH + 'px';
        // if (parseFloat(getComputedStyle(mainObj).top) > 0) {
        //     mainObj.style.top = '0px';
        // }
    }

    navColor();
}

function navColor() {
    for (let i = 0; i < navs.length; i++) {
        navs[i].classList.remove('active');
        mainObj.children[i].classList.remove('display');
    }
    mainObj.children[index].classList.add('display');
    navs[index].classList.add('active')
}