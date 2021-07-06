var clientH = document.documentElement.clientHeight,
    clientW = document.documentElement.clientWidth,
    index = 0,
    lIndex = -1,
    mainObj = document.getElementsByClassName('main')[0],
    timer1 = null,
    timer2 = null,
    t,
    Y1, Y2,
    navs = document.getElementsByClassName('nav');

function init() {
    mainObj.style.top = '0px';
    window.addEventListener('resize', function () {
        clientH = document.documentElement.clientHeight;
        clientW = document.documentElement.clientWidth;

    });
    window.addEventListener('wheel', function (e) {
        if (!t || Date.now() - t >= 1000) {
            if (e.deltaY == 100) {
                pageTo(1, undefined);
            } else if (e.deltaY == -100) {
                pageTo(-1, undefined);
            }
            t = Date.now();
        }
    });

    window.addEventListener('touchstart', function (e) {
        Y1 = e.touches[0].clientY;
    })
    window.addEventListener('touchend', function (e) {
        Y2 = e.changedTouches[0].clientY;
        if (Y2 - Y1 > 0) {
            pageTo(-1, undefined);
        } else {
            pageTo(1, undefined);
        }
    })


    for (let i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', function (e) {
            lIndex = index;
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
        lIndex = index;
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
    if(lIndex==index){
        return
    }
    navColor();
    if (index == 1) {

        changeSkillBar(true)
    } else {

        changeSkillBar(false)
    }
    if (index == 3) {

        showAddress()
    } else {

        hideAddress()
    }
}

function navColor() {
    for (let i = 0; i < navs.length; i++) {
        navs[i].classList.remove('active');
        mainObj.children[i].classList.remove('display');
    }
    mainObj.children[index].classList.add('display');
    navs[index].classList.add('active')
}