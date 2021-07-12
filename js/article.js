var articleList = document.getElementsByClassName('articleList')[0];
console.log(articleList);
var list = [{
        title: '01-html标签',
        url: '../note/1.html'
    },
    {
        title: '02-html标签',
        url: '../note/2.html'
    },
    {
        title: '03-css基础1',
        url: '../note/3.html'
    }, 
    {
        title: '04-css基础2',
        url: '../note/4.html'
    },
    {
        title: '05-css选择器',
        url: '../note/5.html'
    },
]

//n4







for (let i = 0; i < list.length; i++) {
    let a = document.createElement('a');
    a.href = '' + list[i].url;
    a.target = '_blank'
    let p = document.createElement("p");
    p.innerHTML = '' + list[i].title;
    p.style.fontSize = '32px';
    p.style.paddingLeft = '80px';
    a.appendChild(p)
    articleList.appendChild(a)
}
