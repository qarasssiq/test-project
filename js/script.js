$('.slider').slick({
    infinite: true,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
});

$('.open-popup').click(function(e) {
  e.preventDefault();
 $("#popup-bg").fadeIn('slow');
});

$('.close-popup').click(function() {
  $("#popup-bg").fadeOut('slow');
});

function validateForm(event) {
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let name = document.getElementById('name').value;
  let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  let phone = document.getElementById('phone').value;

  if (!regName.test(name) || name === "") {
      alert('Пожалуйста, введите Ваше имя и фамилию.');
      document.getElementById('name').focus();
      return false;
  }

  if (!regPhone.test(phone) || phone === "") {
      alert('Пожалуйста, введите Ваш телефон.');
      document.getElementById('phone').focus();
      return false;
  }

  alert('Заявка на сеанс успешно отправлена.');
  console.log('closed')
  return true;
}