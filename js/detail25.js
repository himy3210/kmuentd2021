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
            nav.setAttribute('class', 'cate-nav-detail scroll-hide');
            mnav.setAttribute('class', 'm-nav m-scroll-hide');
            //console.log("down");
        } else {
            nav.setAttribute('class', 'cate-nav-detail scroll-show');
            mnav.setAttribute('class', 'm-nav m-scroll-show');
            //console.log("up");
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    //-------page backgrnd color follow scroll-------//
    let scrolled = window.pageYOffset;
    
    var checkScroll = function(){
        requestAnimationFrame(checkScroll);
        const back = document.querySelector('#customCol');
        const back2 = document.querySelector('#customCol25');
        const mainCon = document.querySelector('.caption');
        const vid = document.querySelector('#vid');
        const end = document.querySelector('#end');

        var mainPosY = mainCon.getBoundingClientRect().top;
        var vidPosY = vid.getBoundingClientRect().top;
        var endPosY = end.getBoundingClientRect().top;

        var alpha = mainPosY * -1/1.5;
        var alpha2 = vidPosY * -1/1.5;
        var alpha3 = endPosY;
        
        if(mainPosY >= -150 && mainPosY < 0){
            back.style.opacity = alpha + "%";
        }
        if(mainPosY >= 0) {
            back.style.opacity = 0;
        }
        if(mainPosY < -150) {
            back.style.opacity = 100 + "%";
        }
        if(vidPosY >= -150 && vidPosY < 0){
            back2.style.opacity = alpha2 + "%";
        }
        if(vidPosY >= 0) {
            back2.style.opacity = 0;
        }
        if(vidPosY < -150) {
            if(endPosY >= 300){
                back2.style.opacity = 100 + "%";
            }
            if(endPosY < 300){
                back2.style.opacity = alpha3 * 0.33 + "%";
            }
        }
    }
    checkScroll();

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



