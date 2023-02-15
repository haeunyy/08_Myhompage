/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 






window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
    
});


function zoomin(event){
    event.target.style.transform = "scale(2.2)"
    event.target.style.zlndex = 1;
    event.target.style.transition = "all 0.5s"
}

function zoomout(event){
    event.target.style.transform = "scale(1)"
    event.target.style.zlndex = 0;
    event.target.style.transition = "all 0.5s"
    }


p.item

var imgObj = null;
var animate;
function init(){
    imgObj = document.getElementById('skill1');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 +'px';
    animate = setTimeout(moveRight,20); // 20밀리초마다 moveRight 함수 호출
}

function stop(){
    clearTimeout(animate);
    imgObj.style.left = '0px';
}

window.onload = init;
