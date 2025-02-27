 // 1st swiper script
 var swiper = new Swiper(".mySwiper1", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });

// 2nd swiper script
var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 1, // Default (Mobile: 1 card)
            spaceBetween: 10, 
            autoplay: {        
            delay: 2500,     
            disableOnInteraction: false
            },
            breakpoints: {  
            768: { // Tablet & Up (768px+)
                slidesPerView: 2,
            },
            1024: { // Desktop & Up (1024px+)
                slidesPerView: 4,
            }
            },
            loop: true, 
        });

// 3rd swiper
var reviewSwiper = new Swiper('.review-slider', {
                loop: true,
                autoplay: {
                    delay: 3000, // Auto-scroll every 3 seconds
                    disableOnInteraction: false // Keep autoplay after manual swipe
                },
                spaceBetween: 20,
                slidesPerView: 1, // Default for mobile
                grabCursor: true, // Makes it feel smoother
                centeredSlides: true, // Ensures centered scrolling effect
                breakpoints: {
                    640: { slidesPerView: 2 },  // Tablets
                    1024: { slidesPerView: 3 }, // Laptops
                    1280: { slidesPerView: 4 }  // Large Screens
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }); 
