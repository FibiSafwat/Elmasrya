        // Sidenav menu
        function openNav() {
            document.getElementById("mySidenav").style.width = "350px";
        }
        
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }

    
        function myFunction() {
            document.getElementById("list").classList.toggle("dropdown-content");
        }
        function show_hide() {
            var click = document.getElementById("list");
            if (click.style.display === "none") {
            click.style.display = "block";
            } else {
            click.style.display = "none";
            }
        }
    

  // :: Swiper partners
  
  // :: Swiper partners
 var swiper = new Swiper(".partners", {
         // centeredSlides: true,
             autoplay: {
                 delay: 800,
                 disableOnInteraction: false,
             },
         slidesPerView: 1,
         spaceBetween: 10,
         loop: true,
         speed:500,
         grabCursor: true,
         breakpoints: {
         300: {
             slidesPerView: 3,
             spaceBetween: 10,
         },
         640: {
             slidesPerView: 4,
             spaceBetween: 10,
         },
         768: {
             slidesPerView: 6,
             spaceBetween: 10,
         },
         1024: {
             slidesPerView: 8,
             spaceBetween: 10,
         },
         },
     });

