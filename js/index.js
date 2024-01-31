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


      let dost = document.querySelector('input[name="dost"]') // нахожу доставку чекбокс
      let ust = document.querySelector('input[name="ust"]') // нахожу установку чекбокс
      let poperek = document.querySelector('input[name="poperek"]') // нахожу поперек чекбокс
      let derzhat = document.querySelector('input[name="derzhat"]') // нахожу держатель чекбокс
      

      function formula(){

        let totalPrice = (+height.value * +width.value)*1000 //рассчет
        
          for (const radio of cvetaType){

            if (radio.checked === true){
              totalPrice = (+height.value * +width.value)* parseInt(radio.value)
            } // проверка на то какой цвет выбран
          } 

            if (dost.checked === true){
              totalPrice = totalPrice + 200
            } // проверка на доставку

            if (ust.checked === true){
              totalPrice = totalPrice + 200
            } // проверка на установку

            if (poperek.checked === true){
              totalPrice = totalPrice + (width.value*2)*100
            }
            if (derzhat.checked === true){
              totalPrice = totalPrice + 200
            }
            
          const formatter = new Intl.NumberFormat('ru');
          res.innerHTML = formatter.format(totalPrice) //форматтер + // внос значения в див рес
      } 

      // formula() // если нужно чтобы подсчет производился сразу

      for (const input of inputs){
        input.addEventListener('input', function (){
          formula()
        })
        
      } //цикл, который проверяет произошли ли изменения в инпутах
      

      // const handleClick = () => {
      //   cveta.classList.toggle('calc__right-cveta-active')
      // } // при клике на див color выпадает меню спиок со всеми цветами

      // color.addEventListener('click', handleClick) // вешаю событие на див со словом цвет
          
})

      

// ((B3*C3)*1000)+((B3*D3)*100)+(E3*100)+(G3*200)+(H3*200)
      
      
