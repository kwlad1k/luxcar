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
    document.getElementById("form").reset();
    event.preventDefault();
    alert('Ваш заказ оформлен!');
  });
});

// Дата пикер
$('#datepicker').datepicker({
    minDate: new Date()
})
// Доступ к экземпляру объекта
$('#datepicker').data('datepicker')



