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

//----- Tabs
// Show the first tab and hide the rest

$('.tab-content').hide();

//Tab Content Zakat
$('.zakat-tabs #tabs-nav li:first-child').addClass('tab-active');
$('#zakat').show();
//DIISI KONTEN ID NYA YANG MAU DIMUNCULIN PERTAMA
$('.berita-tabs #tabs-nav li:first-child').addClass('tab-active');
$('#semua').show();
//Tab Content Donate
$('.donate-tab #tabs-nav li:last-child').addClass('tab-active');
$('#donatur').show();

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

//-------------------------------
// Donasi Page
//-------------------------------
//Gallery Donasi
var imgOn = $('.donate-gallery img.item');
var imgMain = $('.donate-gallery img.main');

$('.donate-gallery span img:first-child').addClass('active');
imgOn.click(function(){
    var imgLink = $(this).attr("src");
    imgMain.attr("src",imgLink);
    imgOn.removeClass('active');
    $(this).addClass('active');

    return false;
})

//-------------------------------
// End Donasi Page
//-------------------------------
//-------------------------------
// Tentang Page
//-------------------------------
var pengurus = $('.pengurus-box');
pengurus.owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//-------------------------------
// End Tentang Page
//-------------------------------

//-------------------------------
// Gallery Page
//-------------------------------

var glrLbx = $('.gallery-lightbox');
var glrLbxImg = $('#gallery-lightbox');
var glrClose = $('.gallery-lightbox .close');
var glrItem = $('.gallery-item');

glrItem.click(function(){
    var imgLink = $(this).find('img').attr("src");
    var imgTitle = $(this).attr("title");
    var imgAuthor = $(this).attr("author");
    glrLbxImg.attr("src",imgLink);
    glrLbx.find("#title").append(imgTitle);
    glrLbx.find("#author").append(imgAuthor);
    glrLbx.css('display','flex');

    return false;
})

glrClose.click(function(){
    glrLbx.fadeOut();
    glrLbx.find("#title").empty();
    glrLbx.find("#author").empty();
});

//-------------------------------
// End Gallery Page
//-------------------------------

