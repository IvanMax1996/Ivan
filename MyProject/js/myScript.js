"use strict"

var delay_popup = 5000;

setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);

////////////////////////////////////////////////////////////////////////////////////////

let options = {threshold: [1]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');

elements.each((i, el) => {
    observer.observe(el);
});

function onEntry (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src;
        }
    });
}

////////////////////////////////////////////////////////////////////////////////////////

    let option1 = {threshold:[1]};
    let observer1 = new IntersectionObserver(onEntry1, option1);
    let element1 = $('.element1');
    
    element1.each((i, el) => {
        observer1.observe(el);
    });
   
  function onEntry1 (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('count1');     
        }
    });
    var thisNumber = $('.count1').text();
    $({numberValue: thisNumber}).animate({numberValue: 120}, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $('.count1').text(Math.ceil(this.numberValue));
        }
    });      
}

////////////////////////////////////////////////////////////////////////////////////////

    let option2 = {threshold:[1]};
    let observer2 = new IntersectionObserver(onEntry2, option2);
    let element2 = $('.element2');
    
    element2.each((i, el) => {
        observer2.observe(el);
    });
   
  function onEntry2 (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('count2');     
        }
    });
    var thisNumber = $('.count2').text();
    $({numberValue: thisNumber}).animate({numberValue: 4600}, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $('.count2').text(Math.ceil(this.numberValue));
        }
    });      
}

////////////////////////////////////////////////////////////////////////////////////////

    let option3 = {threshold:[1]};
    let observer3 = new IntersectionObserver(onEntry3, option3);
    let element3 = $('.element3');
    
    element3.each((i, el) => {
        observer3.observe(el);
    });
   
  function onEntry3 (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('count3');     
        }
    });
    var thisNumber = $('.count3').text();
    $({numberValue: thisNumber}).animate({numberValue: 340}, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $('.count3').text(Math.ceil(this.numberValue));
        }
    });      
}

////////////////////////////////////////////////////////////////////////////////////////

    let option4 = {threshold:[1]};
    let observer4 = new IntersectionObserver(onEntry4, option4);
    let element4 = $('.element4');
    
    element4.each((i, el) => {
        observer4.observe(el);
    });
   
  function onEntry4 (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('count4');     
        }
    });
    var thisNumber = $('.count4').text();
    $({numberValue: thisNumber}).animate({numberValue: 23}, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $('.count4').text(Math.ceil(this.numberValue));
        }
    });      
}

////////////////////////////////////////////////////////////////////////////////////////

let option5 = {threshold: [1]};
let observer5 = new IntersectionObserver(onEntry5, option5);
let element5 = $('.element5');

element5.each((i, el) => {
    observer5.observe(el);
});

function onEntry5 (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            function one () {
                $('.element5').addClass('animate__animated animate__backInDown show');
            }
            function two () {
                $('.element6').addClass('animate__animated animate__backInRight show');
            }
            function three () {
                $('.element7').addClass('animate__animated animate__backInUp show');
            }
            setTimeout(one, 0);
            setTimeout(two, 700);
            setTimeout(three, 1400);
        }
    });
}

////////////////////////////////////////////////////////////////////////////////////////

$('#button').click(function(){

        let val1 = $('#list1').val();
        let val2 = $('#list2').val();
        let val3 = $('#list3').val();
        let amount = [];
        let deadline = [];
        let type = [
        [1000,1500,2000],
        [6,12,19]
        ];

        if (val1 == 1) {

            deadline[0] = type[1][0];
            amount[0] = type[0][0];
        }
        else if (val1 == 2) {
            deadline[0] = type[1][1];
            amount[0] = type[0][1]; 
        }
        else if (val1 == 3) {
            deadline[0] = type[1][2];
            amount[0] = type[0][2];
        }
        else {
            amount[0] = 0;
            deadline[0] = 0;
        }

        let design = [
        [1700,1300,1400],
        [10,4,7]
        ];

        if (val2 == 1) {
            deadline[1] = design[1][0];
            amount[1] = design[0][0];
        }
        else if (val2 == 2) {
            deadline[1] = design[1][1];
            amount[1] = design[0][1]; 
        }
        else if (val2 == 3) {
            deadline[1] = design[1][2];
            amount[1] = design[0][2];
        }
        else {
            amount[1] = 0;
            deadline[1] = 0;
        }

        let layout = [
        [2200,1800,2600],
        [8,4,12]
        ];

        if (val3 == 1) {
            deadline[2] = layout[1][0];
            amount[2] = layout[0][0];
        }
        else if (val3 == 2) {
            deadline[2] = layout[1][1];
            amount[2] = layout[0][1]; 
        }
        else if (val3 == 3) {
            deadline[2] = layout[1][2];
            amount[2] = layout[0][2];
        }
        else {
            amount[2] = 0;
            deadline[2] = 0;
        }

        $('#term').html(deadline[0] + deadline[1] + deadline[2]);
        $('#amount').html(amount[0] + amount[1] + amount[2]);
});

////////////////////////////////////////////////////////////////////////////////////////

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $(".section").each((i, el) => {

        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $ ("nav a").each((i, el) => {
                if ($(el).hasClass("activemenu")) {
                    $(el).removeClass("activemenu");
                    }
                });
            $('nav li:eq(' + i +')').find('a').addClass('activemenu'); 
        }
        });
});

////////////////////////////////////////////////////////////////////////////////////////

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});

////////////////////////////////////////////////////////////////////////////////////////

function animate(elem) {
    var effect = elem.data("effect");
    elem.addClass("animate__animated " + effect).one("animationend", function() {
           elem.removeClass("animate__animated " + effect);
      });
       }
        
$(document).ready(function() {
           $(".ani1, .ani2, .ani3, .ani4, .ani5, .ani6").mouseenter(function() {
               animate($(this));
         });
      });
    
    
  window.onload = function () {
         document.body.classList.add('loaded_hiding');
         window.setTimeout(function () {
              document.body.classList.add('loaded');
               document.body.classList.remove('loaded_hiding');
        }, 1000);
       }
    