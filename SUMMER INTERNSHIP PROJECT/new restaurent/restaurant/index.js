var g = document.getElementById('greet');
var text = ['Family','Friends','Colleagues','Boss','Releatives','Self']
counter = 0;
setInterval(() => {change()}, 1000);
function change() {
    g.innerHTML= text[counter]
    counter ++;
    if(counter >= text.length) {counter =0;}
}

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//       $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//       }, 800);
//     });
    

    // const elements = document.getElementsByTagName("*");
    // elements.addEventListener("click", 'a[href^="#"]',function (event){
    //     event.preventDefault();

    //     document.getElementsByTagName('html , body').animate({
    //         screenTop: 
    //     },800)
    // });


    
function myfunction(x) {
    content = document.getElementsByClassName("btnse")[0];
    kbButtons = content.getElementsByTagName("button");
    
    kbButtons[x].style.backgroundColor = "black";
    kbButtons[x].style.color = "white";

    var ch = document.getElementById('vehchange')
    if(x==0){
        ch.src = '/img/table_book/cycle.png';
    }
     else if (x==11){
        for(i=0;i<=kbButtons.length;i++){
            kbButtons[i].style.backgroundColor = "transparent";
            kbButtons[i].style.color = "black";
            ch.src = '/img/table_book/blank.png';
        }
    }
    else if (x <= 2){
        ch.src = '/img/table_book/bike.png';
    }
    else if (x <= 4){
        ch.src = '/img/table_book/car.png';
    }
    else if (x<=7){
        ch.src = '/img/table_book/suv.png';
    }
    else if (x<=9){
        ch.src = '/img/table_book/bus.png';
    }
    else if (x<=10){
        ch.src = '/img/table_book/truck.png';
    }
   
}

