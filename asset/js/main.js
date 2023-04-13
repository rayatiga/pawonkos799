var scrollTopButton = document.getElementById('scrollTop')
if (scrollTopButton) {
    window.onscroll = function () {
        showScrollButton()
    }
    function showScrollButton() {
        if (scrollTopButton) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopButton.style.opacity = '1'
            } else {
                scrollTopButton.style.opacity = '0'
            }
        }
    }
    function scrollTopAction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}
var uri = document.getElementById('uri')
if (uri) {
    uri.innerHTML = window.location.href
}
var productList = document.querySelector('.responsiveProductList1')
if (productList) {
    var productList1 = document.querySelector('.responsiveProductList1')
    var productList2 = document.querySelector('.responsiveProductList2')

    window.onresize = function () {
        if (window.innerWidth <= 352) {
            productList1.classList.add('row-cols-1')
            productList1.classList.remove('row-cols-2')
            productList2.classList.add('row-cols-1')
            productList2.classList.remove('row-cols-2')
        } else {
            productList1.classList.add('row-cols-2')
            productList1.classList.remove('row-cols-1')
            productList2.classList.add('row-cols-2')
            productList2.classList.remove('row-cols-1')
        }
    }
}
