document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 6,
        autoplay: {
          delay: 3000,
          
        },
        speed: 900,
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      let color = document.querySelector('.calc__right-color')
      let cveta = document.querySelector('.calc__right-cveta')
      
      let white = document.querySelector('.calc__right-white')
      let brown = document.querySelector('.calc__right-brown')
      let antra = document.querySelector('.calc__right-antra')

      const handleClick = () => {
        cveta.classList.toggle('calc__right-cveta-active')
      }

      color.addEventListener('click', handleClick)

      white.addEventListener('click', () => {
        console.log('white');
      })
      brown.addEventListener('click', () => {
        console.log('brown');
      })
      antra.addEventListener('click', () => {
        console.log('antra');
      })
})

      


      
      
