
window.onload = function () {

  // номер карты
  var cardNumber = document.querySelectorAll('.card-number__field');

  for (var i = 0; i < cardNumber.length; i++) {
    cardNumber[i].onchange = function () {
      var val = this.value;
      var length = val.length;
      if (length == 4) {
        this.classList.remove("error");
      } else {
        this.classList.add("error");
      };
    }
  }

  //   CVV
  var cardCVV = document.querySelector(".card-cvv__field");

  cardCVV.onchange = function () {
    var val = this.value;
    var length = val.length;
    if (length == 3) {
      this.classList.remove("error");
    } else {
      this.classList.add("error");
    };
  }


  // Имя владельца
  var cardHolder = document.querySelector(".card-holder__field");

  cardHolder.onchange = start;

  function start() {
    var val = this.value;
    var length = val.length;
    if ((length >= 4) && (length <= 20)) {
      this.classList.remove("error");
    } else {
      this.classList.add("error");
    };
  }
}

var submitCard = document.querySelector('.button');

submitCard.addEventListener('click', function() {
  var empty = document.querySelectorAll('input[type="number"] , input[type="text"]');
  for (var i = 0; i < empty.length; i++) {
    var val = empty[i].value;
    var itn = empty[i];

    if (val == "") {
      itn.classList.add("error");
    }
  }
});
