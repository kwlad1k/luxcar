document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    
    let error = formValidate(form);
  }
  function formValidate(form) {
    let error = 0;
    let formReq =document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++){
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')){
        
      }
    }
    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('error');
    }
  }
});

//slider
new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});
//smooth scrolling
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })

  })
}
//Проверка поля номера телефона
function validateNumber(event) {
  var keyCode = event.keyCode;
  var excludedKeys = [8, 37, 39, 46];

  if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
    console.log("alphabets are not allowed");
    event.preventDefault();

  }

  console.log("keycode: " + keyCode);
}
// Подключение ajax
// A $( document ).ready() block.
$( document ).ready(function() {
  $('form').submit(function(event) {

    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(result){
          alert(result);
        }
    });
    event.preventDefault();
    alert('Ваш заказ оформлен!');
  });
});
// Дата пикер
// Инициализация
$('.my-datepicker').datepicker([options])

$('.my-datepicker').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
})
// Доступ к экземпляру объекта
$('.my-datepicker').data('datepicker')



