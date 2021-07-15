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

//Hero Image
var imgHero = $('.img-hero-slider');
// Go to the next item
$('.img-hero-box .arrow .next').click(function() {
    imgHero.trigger('next.owl.carousel');
});
// Go to the previous item
$('.img-hero-box .arrow .prev').click(function() {
    imgHero.trigger('prev.owl.carousel');
});
$('.img-hero-slider').owlCarousel({
    autoplay: true,
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//------ Header
var header = $('.header');
var textDropdown = $('nav.menu ul li.dropdown ul li a');
var textMenu = $('nav.menu ul li a');
var menuBox = $('.menu-box');
var imgLogo = $('.logo-box img.logo')

var width = $(window).width();

$(function () {
    if (header.hasClass('static')) {
        imgLogo.attr('src','src/img/logo-laz.png');
    }
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 185 || header.hasClass('static')) {
            header.addClass('active');
            imgLogo.attr('src','src/img/logo-laz.png');
        } else if(scroll < 185) {
            header.removeClass('active');
            imgLogo.attr('src','src/img/logo-white.png');
        }
    });
});

//menu-toggle
$('.menu-toggle').click(function(){
    $('.menu-box').toggleClass('slide-menu');
});

//LightboxZiswaf
var lightboxZiswaf = $('.lightbox-ziswaf');
var btnXziswaf = $('.lightbox-ziswaf .close');
var infoZiswaf = $('.ziswaf-tabs .info');

btnXziswaf.click(function(){
    lightboxZiswaf.hide();
});

infoZiswaf.click(function(){
    lightboxZiswaf.css('display','flex');
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

$(".tab-button").hide();
$("#zakat.tab-button").show();
// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('tab-active');
  $(this).addClass('tab-active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  $(".tab-button").hide();
  $(activeTab+".tab-button").fadeIn();
  
  //ZISWAF TAB
  if(activeTab=="#infaq"){
        $('.ziswaf-hitung-col1>h3').text("Ayo Rutin Berinfak!");
  }else if(activeTab=="#wakaf"){
        $('.ziswaf-hitung-col1>h3').text("Wakaf #BerkahBerkelanjutan");
  }else if(activeTab=="#fidyah"){
        $('.ziswaf-hitung-col1>h3').text("Mari Tunaikan Fidyah");
  }else {
        $('.ziswaf-hitung-col1>h3').text("Yuk Hitung Zakat Kamu!");
  }
  return false;
});

//Mitra Tabs Content
$('#mitra-tabs-nav li a:first').addClass('active');
$('#korporasi').show();
$('#mitra-tabs-nav li').click(function(){
    $('#mitra-tabs-nav li').find('a').removeClass('active');
    $(this).find('a').addClass('active');
    $('#mitra-tabs-content .tab-content').hide();
    
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

//-------------------------------
// Metode Pembayaran Page
//-------------------------------

var ref = $('.refrensi a.ref');
var curr = $('.currency input#jumlah-donasi');

ref.click(function(){
    var nilai = $(this).attr('nilai');
    curr.attr('value',nilai);

    return false;
});

//checkbox
//Hide Nama
var hideNama = $('.payment input[name=hide-nama]');
var nama = $('.payment input[name=nama]');

hideNama.change(function() {
    if(this.checked) {
        //I am checked
        nama.attr('value','Hamba Allah');
        nama.prop('disabled',true);
    }else{
        //I'm not checked
        nama.attr('value','');
        nama.prop('disabled',false);
    }
});

//Slide Tab

var slideTab = $('.slide-title');
var slideIcon = $('.slide-title .col .iconify');
// Accordian
var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    slideTab.on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('.slide-content')
                    .slideUp();
    });
});

//payment-item
var payItem = $('.payment-item');
var payItemCheck = $('.payment-item input[type="checkbox"]');

payItemCheck.click(function(){
    //$(this).find('input[type="checkbox"]').prop("checked",true);
    $('.payment-item input[type="checkbox"]').not(this).prop("checked", false);
});

//Upload

$('#bukti-transfer').change(function(){
    var curElement = $('.preview img');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };
    //display change
    $('.preview').css('display','block');
    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});
//-------------------------------
// End Metode Pembayaran Page
//-------------------------------
//-------------------------------
// Kantor Layanan / Image Map Page
//-------------------------------
var pin = $('.place');
$(document).ready(function() {
    pin.hide();
    $(".office-item").on("mouseover", function () {
        var place = $(this).attr("lokasi");
        pin.css('display','flex');
        pin.addClass(place);
        pin.fadeIn();
    });
    $(".office-item").on("mouseleave", function () {
        var place = $(this).attr("lokasi");
        pin.removeClass(place);
        pin.hide();
    });
});
//-------------------------------
// End Kantor Layanan / Image Map Page
//-------------------------------