// 금액 선택 옵션
function categoryChange(amount_option) {
  var amount_list = ["결제 금액을 선택해 주세요."]
  var amount_card = ["1,100원", "3,300원", "5,500원", "11,000원", "55,000원"];
  var amount_kakaopay = ["1,100원", "3,300원", "5,500원", "11,000원", "55,000원"];
  var amount_phone = ["1,100원", "3,300원", "5,500원", "11,000원", "55,000원"];
  var amount_account = ["11,000원", "55,000원"];
  var amount_paypal = ["1,100원", "3,300원", "5,500원", "11,000원", "55,000원"];

  var target = document.getElementById("amount");

  if(amount_option.value == "card") {
    var amount_selected = amount_card;
  } else if (amount_option.value == "kakaopay") {
    var amount_selected = amount_kakaopay;
  } else if (amount_option.value == "phone") {
    var amount_selected = amount_phone;
  } else if (amount_option.value == "account") {
    var amount_selected = amount_account;
  } else if (amount_option.value == "paypal") {
    var amount_selected = amount_paypal;
  } else {
    var amount_selected = amount_list;
  }

  target.options.length = 0;

  for (i in amount_selected) {
    var opt = document.createElement("option");
    opt.value = amount_selected[i];
    opt.innerHTML = amount_selected[i];
    target.appendChild(opt);
  }
}

function check() {
  var payment = document.getElementById("payment");
  var amount = document.getElementById("amount");
  var poney = document.getElementById("poney").value;
  var target_payment = payment.options[payment.selectedIndex].value;
  var target_amount = amount.options[amount.selectedIndex].value;

  var answer = document.getElementById("answer");

  if (target_payment == "card") {
    if (target_amount == "1,100원") {
      answer.innerHTML = "환불 예정액 "+957/1000*poney+"원";
    } else if (target_amount == "3,300원") {
      answer.innerHTML = "환불 예정액 "+2872/3000*poney+"원";
    } else if (target_amount == "5,500원") {
      answer.innerHTML = "환불 예정액 "+4787/5000*poney+"원";
    } else if (target_amount == "11,000원") {
      answer.innerHTML = "환불 예정액 "+9573/10000*poney+"원";
    } else if (target_amount == "55,000원") {
      answer.innerHTML = "환불 예정액 "+47867/50000*poney+"원";
    }
  } else if (target_payment == "kakaopay") {
    if (target_amount == "1,100원") {
      answer.innerHTML = "환불 예정액 "+957/1000*poney+"원";
    } else if (target_amount == "3,300원") {
      answer.innerHTML = "환불 예정액 "+2872/3000*poney+"원";
    } else if (target_amount == "5,500원") {
      answer.innerHTML = "환불 예정액 "+4787/5000*poney+"원";
    } else if (target_amount == "11,000원") {
      answer.innerHTML = "환불 예정액 "+9573/10000*poney+"원";
    } else if (target_amount == "55,000원") {
      answer.innerHTML = "환불 예정액 "+47867/50000*poney+"원";
    }
  } else if (target_payment == "phone") {
    if (target_amount == "1,100원") {
      answer.innerHTML = "환불 예정액 "+903/1000*poney+"원";
    } else if (target_amount == "3,300원") {
      answer.innerHTML = "환불 예정액 "+2709/3000*poney+"원";
    } else if (target_amount == "5,500원") {
      answer.innerHTML = "환불 예정액 "+4514/5000*poney+"원";
    } else if (target_amount == "11,000원") {
      answer.innerHTML = "환불 예정액 "+9029/10000*poney+"원";
    } else if (target_amount == "55,000원") {
      answer.innerHTML = "환불 예정액 "+45144/50000*poney+"원";
    }
  } else if (target_payment == "account") {
    if (target_amount == "11,000원") {
      answer.innerHTML = "환불 예정액 "+9722/10000*poney+"원";
    } else if (target_amount == "55,000원") {
      answer.innerHTML = "환불 예정액 "+49322/50000*poney+"원";
    }
  } else if (target_payment == "paypal") {
    if (target_amount == "1,100원") {
      answer.innerHTML = "환불 예정액 "+644/1000*poney+"원";
    } else if (target_amount == "3,300원") {
      answer.innerHTML = "환불 예정액 "+2525/3000*poney+"원";
    } else if (target_amount == "5,500원") {
      answer.innerHTML = "환불 예정액 "+4455/5000*poney+"원";
    } else if (target_amount == "11,000원") {
      answer.innerHTML = "환불 예정액 "+9158/10000*poney+"원";
    } else if (target_amount == "55,000원") {
      answer.innerHTML = "환불 예정액 "+47025/50000*poney+"원";
    }
  }
}
