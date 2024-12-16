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

// pagination


    document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelectorAll('.slider li');  // Select all slides
        let currentSlideIndex = 0;  // Start from the first slide

        // Select the pagination buttons
        const prevButton = document.querySelector('.pagination .border:first-child');
        const nextButton = document.querySelector('.pagination .border:last-child');

        // Function to show the slide at the specified index
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => slide.classList.add('hidden'));
            // Show the current slide
            slides[index].classList.remove('hidden');
        }

        // Show the first slide initially
        showSlide(currentSlideIndex);

        // Event listener for the "Previous" button
        prevButton.addEventListener('click', () => {
            // Decrement the slide index, wrap around if needed
            currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1;
            showSlide(currentSlideIndex);
        });

        // Event listener for the "Next" button
        nextButton.addEventListener('click', () => {
            // Increment the slide index, wrap around if needed
            currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1;
            showSlide(currentSlideIndex);
        });
    });
