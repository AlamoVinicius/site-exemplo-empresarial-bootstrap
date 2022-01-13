$(document).ready(function() {  //jquery, só irá carregar quando o documento estiver pronto 

    //progress bar lib
    let containerA = document.getElementById("circleA")

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 60)

            circle.setText(value)
        }
    })

    let containerB = document.getElementById("circleB")

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 245)

            circle.setText(value)
        }
    })

    let containerC = document.getElementById("circleC")

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 32)

            circle.setText(value)
        }
    })

    let containerD = document.getElementById("circleD")

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 3247)

            circle.setText(value)
        }
    })

    //Inciar a animação quando o usuário chega no elemento
    let dataAreaoffset = $('#data-area').offset()
    let stop = 0

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop()

        if (scroll > (dataAreaoffset.top - 500) && stop == 0) {

            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1
        }
    })

    // paralax na nossa area de dados, não irei usar o script mas sim o css puro para esse efeito
    /*setTimeout(function() {
        
        $('#data-area').parallax({imageSrc: 'images/myparalax.jpg'})
        $('#apply-area').parallax({imageSrc:'images/pattern.png'})
    }, 200);*/


    //Esse script não esta funcionanddo mais, alterar para JavaScript puro
    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');
    
        $('.main-btn').removeClass('active');
        $(this).addClass('active');
    
        if(type == 'dsg-btn') {
          eachBoxes('dsg', boxes);
        } else if(type == 'dev-btn') {
          eachBoxes('dev', boxes);
        } else if(type == 'seo-btn') {
          eachBoxes('seo', boxes);
        } else {
          eachBoxes('all', boxes);
        }
      });
    
      function eachBoxes(type, boxes) {
    
        if(type == 'all') {
          $(boxes).fadeIn();
        } else {
          $(boxes).each(function() {
            if(!$(this).hasClass(type)) {
              $(this).fadeOut('slow');
            } else {
              $(this).fadeIn();
            }
          });
        }
      }


})