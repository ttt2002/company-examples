


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    items:1,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
            
        },
        1000:{
            items:4,
            nav:true

           }
    }
    
})
document.body.classList.add("disable-scrolling")

var btn = document.getElementsByClassName('btn');
var slide = document.getElementById('slide');



btn[0].onclick = function() {
    slide.style.transform = 'translatex(0px)';
    for(i=0;i<4;i++){
        btn[i].classList.remove('active');
    }
    this.classList.add('active');
}


btn[1].onclick = function() {
    slide.style.transform = 'translatex(-800px)';
    for(i=0;i<4;i++){
        btn[i].classList.remove('active')
    }
    this.classList.add('active')
}

btn[2].onclick = function() {
    slide.style.transform = 'translatex(-1600px)'; 
    for(i=0;i<4;i++){
        btn[i].classList.remove('active')
    }
    this.classList.add('active')
}

btn[3].onclick = function() {
    slide.style.transform = 'translatex(-2400px)';
    for(i=0;i<4;i++){
        btn[i].classList.remove('active')
    }
    this.classList.add('active');
}

