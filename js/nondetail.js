//https://www.youtube.com/watch?v=de4W0EHMuUs
//Custom cursor

window.onload = function(){

    //-------category navi show/hide by scroll------//
    var lastScrollTop = 0;
    const nav = document.querySelector('.cate-nav-detail');
    const mnav = document.querySelector('.m-nav');

    window.addEventListener("scroll", function(){ 
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            mnav.setAttribute('class', 'm-nav m-scroll-hide');
            //console.log("down");
        } else {
            mnav.setAttribute('class', 'm-nav m-scroll-show');
            //console.log("up");
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    //-------mobile header-------//
    //-------mobile header-------//
    //-------mobile header-------//
    const mbtn = document.querySelector('#m-nav-btn');
    const mMenu = document.querySelector('.m-nav-back');
    const body = document.querySelector('body');

    mbtn.addEventListener("click", () =>{
        mbtn.classList.toggle('toggle-close');
        mMenu.classList.toggle('m-show');
        body.classList.toggle('scroll-lock');
    });

}



