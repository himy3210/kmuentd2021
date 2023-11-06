//https://www.youtube.com/watch?v=de4W0EHMuUs
//Custom cursor

window.onload = function(){

    //-------category navi show/hide by scroll------//
    var lastScrollTop = 0;
    const nav = document.querySelector('.cate-nav-custom');

    window.addEventListener("scroll", function(){ 
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            nav.setAttribute('class', 'cate-nav-custom scroll-hide');
            //console.log("down");
        } else {
            nav.setAttribute('class', 'cate-nav-custom scroll-show');
            //console.log("up");
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    //-------page backgrnd color follow scroll-------//
    let scrolled = window.pageYOffset;
    
    var checkScroll = function(){
        requestAnimationFrame(checkScroll);
        const back = document.querySelector('#customCol');
        const mainCon = document.querySelector('.caption');
        var mainPosY = mainCon.getBoundingClientRect().top;
        var alpha = mainPosY * -1/1.5;
        
        if(mainPosY >= -150 && mainPosY < 0){
            back.style.opacity = alpha + "%";
        }
        if(mainPosY >= 0) {
            back.style.opacity = 0;
        }
        if(mainPosY < -150) {
            back.style.opacity = 100 + "%";
        }
    }
    checkScroll();
}
  
  


