//-------------------------------
// Components
//-------------------------------

//Hero Slider
$('.slider-box').owlCarousel({
    autoWidth:true,
    center:true,
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


//------ Header
var header = $('.header');
var textDropdown = $('nav.menu ul li.dropdown ul li a');
var textMenu = $('nav.menu ul li a');
var menuBox = $('menu-box');

var width = $(window).width();

$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 185) {
            header.addClass('active');
        } else if(scroll < 185) {
            header.removeClass('active');
        }
    });
});

//menu-toggle
$('.menu-toggle').click(function(){
    $('.menu-box').toggleClass('slide-menu');
});

//Form
var btnX = $('.close');
var masuk = $('#masuk');
var daftar = $('#daftar');
var amasuk = $('a#masuk');
var adaftar = $('a#daftar');
var lightbox = $('.lightbox');
var masukform = $('.masuk-form');
var daftarform = $('.daftar-form');

btnX.click(function(){
    lightbox.hide();
});

masuk.click(function(){
    lightbox.css('display','flex');
    if(masukform.css('display') == 'none'){
        masukform.css('display','block');
        daftarform.css('display','none');
    }
});

daftar.click(function(){
    lightbox.css('display','flex');
    if(daftarform.css('display') == 'none'){
        daftarform.css('display','block');
        masukform.css('display','none');
    }
});

amasuk.click(function(){
    lightbox.css('display','flex');
    if(masukform.css('display') == 'none'){
        masukform.slideDown(900);
        daftarform.slideUp(900);
    }
});

adaftar.click(function(){
    lightbox.css('display','flex');
    if(daftarform.css('display') == 'none'){
        daftarform.slideDown(900);
        masukform.slideUp(900);
    }
});
//-------------------------------
// End Components
//-------------------------------

//-------------------------------
// Home Page
//-------------------------------

//----- Tab Zakat
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('tab-active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('tab-active');
  $(this).addClass('tab-active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

//Donasi
var owl = $('.donasi-box');
// Go to the next item
$('.next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.donasi-box').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

//Galeri
$(".galeri-box").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    dots:false,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
    
        600: {
            items: 3
        },
    
        1024: {
            items: 4
        },
    
        1366: {
            items: 4
        }
    }
});

//Brand
$('.brand').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

//-------------------------------
// End Home Page
//-------------------------------



