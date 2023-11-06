//goTop
const goTop = document.querySelector('.top');

goTop.addEventListener("click",()=>{
    window.scrollTo({top:0, behavior: 'smooth'})
});

var checkScroll = function(){
    requestAnimationFrame(checkScroll);
    let scrolled = window.pageYOffset;
    if(scrolled > 1){
        goTop.classList.remove('noshow');
    }
    if(scrolled == 0){
        goTop.classList.add('noshow');
    }
}
checkScroll();