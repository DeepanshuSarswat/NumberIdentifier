var output = document.querySelector(".output");
var inputNumber = document.querySelector("#inputNumber");
var EvenNumber = document.querySelector("#EvenNumber");
EvenNumber.addEventListener("click", function () {
  var temp = "";
  if (evenodd(inputNumber.value) === true) {
    temp += `<p>${inputNumber.value}  Is Even Number</p>`;
  } else if (evenodd(inputNumber.value) === false) {
    temp += `<p>${inputNumber.value}  Is Odd Number</p>`;
  } else if (evenodd(inputNumber.value) == "X") {
    temp += `<p>${inputNumber.value}  Is Neither Odd Or Even</p>`;
  }
  if (naturalnum(inputNumber.value) === true) {
    temp += `<p>${inputNumber.value}  Is Netural Number</p>`;
  } else if (naturalnum(inputNumber.value) === false) {
    temp += `<p>${inputNumber.value}  Is Not Netural Number</p>`;
  }

  if (primtno(inputNumber.value) === true) {
    temp += `<p>${inputNumber.value}  Is Prime Number</p>`;
  } else if (primtno(inputNumber.value) === false) {
   
    temp +=  `<p>${inputNumber.value}  Is Not Prime Number</p>`
  } else if (primtno(inputNumber.value) === "NO") {
    temp += `<p>${inputNumber.value}  Is Invalid Input For  Prime Number</p>`;
  }
  if (number_whole(inputNumber.value) === true) {
    temp += `<p>${inputNumber.value}  Is Whole Number</p>`;
  } else if (number_whole(inputNumber.value) === false) {
    temp += `<p>${inputNumber.value}  Is Not Whole Number</p>`;
  }
  if (inputNumber.value % 1 === 0) {
    temp += `<p>${inputNumber.value} Is Integer Number</p>`;
  } else if (inputNumber.value % 1 !== 0) {
    temp += `<p>${inputNumber.value}  Is Not Integer Number</p>`;
  }

  output.innerHTML = temp;
  if (inputNumber.value === "") {
    output.innerText = "Your Input Is Not Valid";
  }
});

function number_whole(n) {
  var result = n - Math.floor(n) !== 0;

  if (result) return false;
  else return true;
}

function naturalnum(n) {
  if (Math.ceil(n) - n == 0 && n > 0) {
    return true;
  } else {
    return false;
  }
}

function evenodd(n) {
  if (Math.ceil(n) - n != 0) {
    return "X";
  } else if (n % 2) {
    return false;
  } else return true;
}

function primtno(n) {
  if (Math.ceil(n) - n != 0) {
    return "NO";
  } else if (n == 0 || n == 1) return false;
  else {
    cnt = 0;
    for (var i = 2; i <= n; i++) {
      if (n % i == 0) {
        cnt += 1;
      }
      if (cnt > 1) break;
    }
    if (cnt == 1) return true;
    else return false;
  }
}
