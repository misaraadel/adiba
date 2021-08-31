$(document).ready(function () {
    /*start the loading page */
    jQuery("#loading").fadeOut(2000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".scroll-top-button").addClass('active-scroll');
        } else {
            $(".scroll-top-button").removeClass('active-scroll');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".bottom-nav").addClass('active-bottom-nav');
        } else {
            $(".bottom-nav").removeClass('active-bottom-nav');
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    //start active navbar
    $('.toggle-btn').click(function(){
        $('.sidebar').addClass('active-sidemenu');
        $('body').addClass('overflow-none');
    });
    
    $('.close-nav').click(function(){
        $('.sidebar').removeClass('active-sidemenu');
        $('body').removeClass('overflow-none');
    });
    $('.sideMenu').click(function(){
        $('.category-side-menu').addClass('active-sidemenu');
        $('body').addClass('overflow-none');
    });
    $('.usersideMenu').click(function(){
        $('.user-side-menu').addClass('active-sidemenu');
        $('body').addClass('overflow-none');
    });
    $('.currencySideMenu').click(function(){
        $('.currency-side-menu').addClass('active-sidemenu');
        $('body').addClass('overflow-none');
    });
    $('.LangsideMenu').click(function(){
        $('.lang-side-menu').addClass('active-sidemenu');
        $('body').addClass('overflow-none');
    });
    $('.menu-back').click(function(){
        $('.sub-menu').removeClass('active-sidemenu');
    });
    $('.overlay').click(function(){
        $('.sidebar').removeClass('active-sidemenu');
        $('body').removeClass('overflow-none');
        $('.sub-menu').removeClass('active-sidemenu');
        $('body').removeClass('overflow-none');
    });
     
    
    $('.first-card-header').click(function(){
        $('.first-card-header').toggleClass('active-arrow');
    });
    $('.second-card-header').click(function(){
        $('.second-card-header').toggleClass('active-arrow');
    });
    $('.three-card-header').click(function(){
        $('.three-card-header').toggleClass('active-arrow');
    });
    $('.four-card-header').click(function(){
        $('.four-card-header').toggleClass('active-arrow');
    });
    $('.five-card-header').click(function(){
        $('.five-card-header').toggleClass('active-arrow');
    });
    
   //start active navbar
   $('.cart-circle').click(function(){
        $('.cart-shape').addClass('active-cart');
    });
    $('.cart-overlay').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    $('.close-cart').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    //change navbar color on scroll
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    //category slider 
    $('.owl-category').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    //bottom nav
    $('.bottom-nav').click(function(){
        $('.toggler').toggleClass('active');
        $('ul').toggleClass('active');
    });
    const favorite = document.querySelectorAll('.favorite');
    favorite.forEach(button => {
        button.addEventListener('click' , activeClass);

    });
    //function for clickable
    function activeClass(){
        let button = this ;
        button.classList.toggle('active-icon');
    }
    const cart = document.querySelectorAll('.cart');
    cart.forEach(button => {
        button.addEventListener('click' , activeClass);

    });
    //function for clickable
    function activeClass(){
        let button = this ;
        button.classList.toggle('active-icon');
    }
    const share = document.querySelectorAll('.share');
    share.forEach(button => {
        button.addEventListener('click' , activeClass);

    });
    //function for clickable
    function activeClass(){
        let button = this ;
        button.classList.toggle('active-icon');
    }
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: false,
        watchSlidesVisibility: false,
        watchSlidesProgress: false,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs
        }
    });
    //data fancybox 
    $('[data-fancybox]').fancybox({
        protect: true ,
        loop: false,
        keyboard: false,
        arrows: false,
        wheel: false,
        closeExisting: false,
        preventCaptionOverlap: true,
        modal: false,
        infobar: false,
        hideScrollbar: true,
        touch: false ,
        buttons: [
            "close"
        ],
        image: {
            preload: true
        },

    });
});