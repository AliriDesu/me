var skillsList = [{
        name: 'HTML',
        val: '90'
    },
    {
        name: 'CSS',
        val: '95'
    },
    {
        name: 'JavaScript',
        val: '80'
    },
    {
        name: 'VUE',
        val: '75'
    },
    {
        name: 'Bootstrap',
        val: '70'
    },
    {
        name: 'ElementUI',
        val: '65'
    },
    {
        name: 'ES6',
        val: '50'
    },
    {
        name: 'JQuery',
        val: '50'
    }
]

function setSkills() {
    var skills = $('.skills')[0];
    for (let i = 0; i < skillsList.length; i++) {
        let skill = document.createElement('div');
        skill.classList.add('skill');
        skill.innerHTML = `
        <div class="minTitle">${skillsList[i].name}</div>
        <div class="progress" style="height:4vh">
            <div class="progress-bar progress-bar-striped progress-bar-animated skillbar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%;transition-duration:2s;background-color:#5f656b">${skillsList[i].val}%</div>
          </div>`
        skills.appendChild(skill)
    }
}
setSkills()

var skillbars = $('.skillbar');

function changeSkillBar(flag) {
    for (let i = 0; i < skillbars.length; i++) {
        skillbars[i].style.width = flag ? skillsList[i].val + '%' : '0%';
    }
}




//other
var otherInfos = ['https://space.bilibili.com/3487541', 'https://github.com/AliriDesu', '15146302170@163.com', 'aliri_'];
var infos = $('.other .info');

var other = {};
other.temp = new Array(infos.length).fill(0);
other.timers = new Array(infos.length).fill(null);

function showAddress() {
    for (let i = 0; i < infos.length; i++) {
        // if (infos[i].innerHTML.length == otherInfos[i].length) {
        //     return
        // }
        // console.log(infos[i].innerHTML.length,otherInfos[i].length);
        other.timers[i] = setInterval(() => {
            infos[i].innerHTML += otherInfos[i][other.temp[i]];
            if (other.temp[i] == otherInfos[i].length - 1 || infos[i].innerHTML.length == otherInfos[i].length) {
                clearInterval(other.timers[i]);
                other.timers[i] = null;
                other.temp[i] = 0;
                return
            }
            other.temp[i]++;
        }, 50);
    }
}

function hideAddress() {
    for (let i = 0; i < infos.length; i++) {
        infos[i].innerHTML = '';
    }
}

var items = $(".item");


items[3].onclick = () => {
    if (getComputedStyle($('.item .cover')[0]).opacity == '1') {
        $('.item .cover')[0].style.opacity = '0';
    } else $('.item .cover')[0].style.opacity = '1';
}
items[3].onmouseenter = () => changeCover(1);
items[3].onmouseleave = () => changeCover(0);


function changeCover(n) {
    $('.item .cover')[0].style.opacity = n + '';
}