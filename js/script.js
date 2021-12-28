$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function play(){
    location.href = 'http://youtube.com';
}

function info(){
    location.href = 'https://www.themoviedb.org/movie/315635-spider-man-homecoming';
}

const botaoPlay = document.getElementsByClassName('botao')[0];
botaoPlay.addEventListener('click',play);

const botaoInfo = document.getElementsByClassName('botao')[1];
botaoInfo.addEventListener('click',info);
