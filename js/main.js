var modal = document.querySelector('.modal1')
var amount = document.querySelector('.choose-quantity')
var heart = document.querySelector('.bi-plus-circle-fill')
var submit = document.querySelector('.btn-submit')
var totalMoney = 0
var x = 1

function vip() {
    document.querySelector('.total-money').style.display = 'none'
}
modal.onclick = function() {
    document.querySelector('.modal1').style.display = "none"
}
var logIn = document.querySelector('.login-modal')
logIn.onclick = function() {
    modal.style.display = 'block'
}
var inputs = document.querySelectorAll(".add-cart")
for (i = 0; i < inputs.length; i++) {
    inputs[i].onclick = function() {
        document.querySelector('.modal2').style.display = "block"
    }
}
var btnElement = document.querySelectorAll('.card-products')
for (var i = 0; i < btnElement.length; ++i) {
    btnElement[i].onclick = function(e) {
        var a = e.target.parentElement
        var cardTitle = a.querySelector('.card-title').textContent;
        console.log(a.querySelector('.mystyle'));
        var img = document.createElement("img");
        img.src = a.querySelector('.card-img-top').src
        var src = document.querySelector(".imgages");
        img.style.width = '120px'
        img.classList.add("mystyle");
        src.appendChild(img);
        if (document.querySelector('.modal2').onclick) {
            img.remove()
        }
        document.querySelector('.modal2').onclick = function() {
            document.querySelector('.modal2').style.display = 'none'
        }
        document.querySelector('.text-product').textContent = '\xa0' + cardTitle + '\xa0'
        submit.onclick = function() {
            price = a.querySelector('.card-text').textContent
            totalMoney = x * (price * 1) * 23000
            console.log(totalMoney);
            document.querySelector('.total-money').style.display = 'block';
            setTimeout(
                vip, 3000)
            document.querySelector('.modal2').style.display = "none"
        }
    }
}
heart.onclick = function() {
    x = x + 1
    amount.textContent = '\xa0' + x + '\xa0'
}
var heart1 = document.querySelector('.bi-dash-circle-fill')
heart1.onclick = function() {
    x = x - 1
    if (x < 0) {
        x = 0
    }
    amount.textContent = '\xa0' + x + '\xa0'
}