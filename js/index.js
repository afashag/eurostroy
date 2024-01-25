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

      let inputs = document.querySelectorAll('input') //все инпуты

      let width = document.querySelector('.calc__left-width') //ширина 
      let height = document.querySelector('.calc__left-height') // высота

      let res = document.querySelector('.calc__right-res') // див, где стоимость


      let color = document.querySelector('.calc__right-color') // див, где слово цвет(нажимаешь на него и выпадает список)
      let cveta = document.querySelector('.calc__right-cveta') // див, где выпадающий список
      
      


      let cvetaType = document.querySelectorAll('input[name="cveta"]') // нахожу инпуты цвета
      let dost = document.querySelector('input[name="dost"]') // нахожу доставку
      let ust = document.querySelector('input[name="ust"]') // нахожу установку

      for (const input of inputs){
        input.addEventListener('input', function (){
          formula()
        })
      } //цикл, который проверяет произошли ли изменения в инпутах

      function formula(){
        let totalPrice = (+height.value * +width.value)*1000
        

        for (const radio of cvetaType){
          if (radio.checked === true){
            totalPrice = (+height.value * +width.value)* parseInt(radio.value)
          } // проверка на то какой цвет выбран

          if (dost.checked === true){
            totalPrice = (+height.value * +width.value)* parseInt(radio.value) + 200
          } // проверка на доставку

          if (ust.checked === true){
            totalPrice = (+height.value * +width.value)* parseInt(radio.value) + 200
          } // проверка на установку

          else {
            console.log("fksdjaf;laksd");
          }
          // сделать так чтобы всегда проверял

          //сделать форматтер

          
      } // формула расчета цены
        res.innerHTML = totalPrice
      
      }

      // formula() // если нужно чтобы подсчет производился сразу

      

      const handleClick = () => {
        cveta.classList.toggle('calc__right-cveta-active')
      } // при клике на див color выпадает меню спиок со всеми цветами

      color.addEventListener('click', handleClick) // вешаю событие на див со словом цвет

// ----------------------------------------------------------------------------------------------------
      let white = document.querySelector('.calc__right-white') // див, где белый
      let brown = document.querySelector('.calc__right-brown') // див, где корич
      let antra = document.querySelector('.calc__right-antra') // див, где антра

      // white.addEventListener('click', () => {
      //   console.log('white');
      // })
      // brown.addEventListener('click', () => {
      //   console.log('brown');
      // })
      // antra.addEventListener('click', () => {
      //   console.log('antra');
      // })
          
})

      

// ((B3*C3)*1000)+((B3*D3)*100)+(E3*100)+(G3*200)+(H3*200)
      
      
