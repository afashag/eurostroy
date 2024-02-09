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

      let width = document.querySelector('.calc__right-width') //ширина 
      let height = document.querySelector('.calc__right-height') // высота

      let res = document.querySelector('.calc__right-res') // див, где стоимость

      let colorsType = document.querySelectorAll('input[name="colors"]') // нахожу инпуты цвета

      let dost = document.querySelector('input[name="dost"]') // нахожу доставку чекбокс
      let ust = document.querySelector('input[name="ust"]') // нахожу установку чекбокс
      let poperek = document.querySelector('input[name="poperek"]') // нахожу поперек чекбокс
      let derzhat = document.querySelector('input[name="derzhat"]') // нахожу держатель чекбокс

      let bottomInputs = document.querySelectorAll('.calc__right-input')
      let bottomDivs = document.querySelectorAll('.calc__right-text')

      for (const item of bottomInputs){
        item.addEventListener('click', function (event){
          if (event.currentTarget.id === "1"){
            bottomDivs[0].classList.toggle('calc__right-text-active')
            bottomDivs[1].classList.remove('calc__right-text-active')
            bottomDivs[2].classList.remove('calc__right-text-active')
          }
          if (event.currentTarget.id === "2"){
            bottomDivs[0].classList.remove('calc__right-text-active')
            bottomDivs[1].classList.toggle('calc__right-text-active')
            bottomDivs[2].classList.remove('calc__right-text-active')
          }
          if (event.currentTarget.id === "3"){
            bottomDivs[0].classList.remove('calc__right-text-active')
            bottomDivs[1].classList.remove('calc__right-text-active')
            bottomDivs[2].classList.toggle('calc__right-text-active')
          }
          if (event.currentTarget.id === "4"){
            bottomDivs[3].classList.toggle('calc__right-text-active')
          }
          if (event.currentTarget.id === "5"){
            bottomDivs[4].classList.toggle('calc__right-text-active')
          }
          if (event.currentTarget.id === "6"){
            bottomDivs[5].classList.toggle('calc__right-text-active')
          }
          if (event.currentTarget.id === "7"){
            bottomDivs[6].classList.toggle('calc__right-text-active')
          }
      })
     }



      function formula(){

        let totalPrice = (+height.value * +width.value)*1000 //рассчет
        
          for (const radio of colorsType){

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
          res.innerHTML = formatter.format(totalPrice) + " ₽" //форматтер + // внос значения в див рес
      } 

      // formula() // если нужно чтобы подсчет производился сразу

      for (const input of inputs){
        input.addEventListener('input', function (){
          formula()
        })
        
      } //цикл, который проверяет произошли ли изменения в инпутах
      

          
})

      


      
      
