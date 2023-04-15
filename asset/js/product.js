let filterArray = []

let productsArray = [
    {
        id: 1,
        name: '2 pack cumi lumur sambal',
        rating: 4.9,
        priceOriginal: 105000,
        priceDisc: 82950,
        image: '/asset/image/product/2-pack-cumi-lumur-sambal.png',
        link: 'https://shopee.co.id/2-Pack-OSENG-CUMI-by-PAWONKOS799-Cumi-Lumur-Sambal-150gr-FULL-cumi-Makanan-Halal-Bisa-COD-Pedas-Nikmat-gak-bikin-perut-panas-BERGARANSI-sambal-cumi-sambel-cumi-cumi-pedas-i.544649733.15704103128',
        featured: true,
    },
    {
        id: 2,
        name: 'ikan kicik daun jeruk',
        rating: 4.9,
        priceOriginal: 25000,
        priceDisc: 17500,
        image: '/asset/image/product/ikan-kicik-daun-jeruk.jpg',
        link: 'https://shopee.co.id/Ikan-Kicik-Daun-Jeruk-by-Pawonkos799-Bergizi-100-halal-renyah-berlevel-berbumbu-rempah-dan-tidak-keras-i.544649733.17340045753',
        featured: true,
    },
    {
        id: 3,
        name: 'cumi lumur sambal',
        rating: 4.9,
        priceOriginal: 55000,
        priceDisc: 42900,
        image: '/asset/image/product/cumi-lumur-sambal.png',
        link: 'https://shopee.co.id/Cumi-Lumur-Sambal-By-PAWONKOS799-Oseng-Cumi-Mercon-Pedas-Berlevel-150gr-FULL-cumi-Makanan-Halal-Bisa-COD-Pedas-Nikmat-gak-bikin-perut-panas-BERGARANSI-sambal-cumi-sambel-cumi-cumi-pedas-i.544649733.15803842185',
        featured: false,
    },
    {
        id: 4,
        name: 'seblak cuankie',
        rating: 4.7,
        priceOriginal: 21000,
        priceDisc: 16900,
        image: '/asset/image/product/seblak-cuankie.jpg',
        link: 'https://shopee.co.id/SEBLAK-CUANKIE-All-in-One-by-pawonkos799-100-halal-non-pengawet-pedas-bisa-diatur-sendiri-i.544649733.15379046305',
        featured: false,
    },
    {
        id: 5,
        name: 'ayam lumur sambal',
        rating: 4.9,
        priceOriginal: 49000,
        priceDisc: 39000,
        image: '/asset/image/product/ayam-lumur-sambal.jpg',
        link: 'https://shopee.co.id/Ayam-Lumur-Sambal-by-Pawonkos799-Oseng-sambal-ayam-pedas-berlevel-viral-tiktok-bergaransi-tanpa-pengawet-i.544649733.20546268537',
        featured: true,
    },
    {
        id: 6,
        name: '2 pack ikan kicik daun jeruk',
        rating: 4.8,
        priceOriginal: 49000,
        priceDisc: 33600,
        image: '/asset/image/product/2-pack-ikan-kicik-daun-jeruk.jpg',
        link: 'https://shopee.co.id/Dua-Pack-Ikan-kicik-daun-jeruk-by-pawonkos799-bisa-mix-level-bisa-COD-100-halal-crispy-renyah-pedas-berlevel-i.544649733.17956162667',
        featured: false,
    },
    {
        id: 7,
        name: 'combo 3 cumi lumur sambal',
        rating: 4.9,
        priceOriginal: 149000,
        priceDisc: 116900,
        image: '/asset/image/product/combo-3-cumi-lumur-sambal.png',
        link: 'https://shopee.co.id/Combo-3CLS-Oseng-Sambal-Baby-Cumi-Pedas-Berlevel-Viral-Tiktok-Mercon-Pedas-Manis-Gurih-Asin-Halal-Bergaransi-i.544649733.18926386655',
        featured: false,
    },
    {
        id: 8,
        name: 'ayam plus cumi lumur sambal',
        rating: 4.9,
        priceOriginal: 93000,
        priceDisc: 80900,
        image: '/asset/image/product/ayam-cumi-lumur-sambal.jpg',
        link: 'https://shopee.co.id/-AYAMCUMI-Oseng-Cumi-lumur-sambal-Ayam-lumur-sambal-pedas-berlevel-viral-bergaransi-tidak-pakai-msg-tidak-pakai-pengawet-i.544649733.21850994923',
        featured: true,
    },
    {
        id: 9,
        name: 'tuna suwir cabe ijo',
        rating: 4.9,
        priceOriginal: 52000,
        priceDisc: 38900,
        image: '/asset/image/product/tuna-suwir-cabe-ijo.jpg',
        link: 'https://shopee.co.id/Tuna-Suwir-Cabe-Ijo-by-pawonkos799-Halal-Pedas-Cabai-Hijau-Bergaransi-i.544649733.20766683219',
        featured: false,
    },
    {
        id: 10,
        name: 'tuna suwir cabe ijo',
        rating: 4.9,
        priceOriginal: 52000,
        priceDisc: 38900,
        image: '/asset/image/product/tuna-suwir-cabe-ijo.jpg',
        link: 'https://shopee.co.id/Tuna-Suwir-Cabe-Ijo-by-pawonkos799-Halal-Pedas-Cabai-Hijau-Bergaransi-i.544649733.20766683219',
        featured: false,
    },
    {
        id: 11,
        name: 'bundling 3 cumi seblak ikan',
        rating: 4.9,
        priceOriginal: 88000,
        priceDisc: 79900,
        image: '/asset/image/product/bundling-3-cumi-seblak-ikan.jpg',
        link: 'https://shopee.co.id/Bundling-3-(Cumi-Lumur-Sambal-Seblak-Cuankie-Ikan-Kicik-Daun-Jeruk)-by-Pawonkos799-100-HALAL-non-PENGAWET-pedas-berlevel-i.544649733.17161957182',
        featured: false,
    },
    {
        id: 12,
        name: 'batagor kuah free sosis',
        rating: 4.9,
        priceOriginal: 24700,
        priceDisc: 22500,
        image: '/asset/image/product/batagor-kuah-free-sosis.jpg',
        link: 'https://shopee.co.id/Batagor-Kuah-by-Pawonkos799-Free-sosis-bergaransi-i.544649733.20867901480',
        featured: true,
    },
]

var responsiveProductList = document.querySelectorAll('.responsiveProductList')
if (responsiveProductList) {
    window.onresize = function () {
        if (window.innerWidth <= 352) {
            if (responsiveProductList[0]) {
                responsiveProductList[0].classList.add('row-cols-1')
                responsiveProductList[0].classList.remove('row-cols-2')
            }
            if (responsiveProductList[1]) {
                responsiveProductList[1].classList.add('row-cols-1')
                responsiveProductList[1].classList.remove('row-cols-2')
            }
        } else {
            if (responsiveProductList[0]) {
                responsiveProductList[0].classList.add('row-cols-2')
                responsiveProductList[0].classList.remove('row-cols-1')
            }
            if (responsiveProductList[1]) {
                responsiveProductList[1].classList.add('row-cols-2')
                responsiveProductList[1].classList.remove('row-cols-1')
            }
        }
    }
}

let listProducts = document.getElementById('listProducts')
if (listProducts) {
    showProducts(productsArray)
    function showProducts(currArray) {
        for (var i = 0; i < currArray.length; i++) {
            listProducts.innerHTML += `
                            <div class="col countProduct">
                                <div class="card h-100">
                                    <img src="${currArray[i].image}" class="card-img-top" alt="${currArray[i].name}" />
                                    <div class="card-body">
                                        <h5 class="text-capitalize card-title fs-6 mb-1">${currArray[i].name}</h5>
                                        <p class="card-text">
                                            ${currArray[i].rating > 4.5 ? `<i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i> ${currArray[i].rating.toFixed(1)}<br />` : `<i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-half text-warning"></i> ${currArray[i].rating}<br />`}
                                            <s class="text-secondary small">Rp.&nbsp;${currArray[i].priceOriginal.toLocaleString()}</s> Rp.&nbsp;${currArray[i].priceDisc.toLocaleString()}
                                        </p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="${currArray[i].link}" target="_blank" class="btn btn-warning d-none d-md-block w-100">Beli Sekarang<i class="icon icon-arrow-right ms-2"></i></a>
                                        <a href="${currArray[i].link}" target="_blank" class="btn btn-warning d-block d-md-none w-100">Order<i class="icon icon-arrow-right ms-2"></i></a>
                                    </div>
                                </div>
                            </div>`
        }
    }
}

let inSearchProducts = document.getElementById('searchProducts')
let notFoundStatus = document.getElementById('notFound')
var countProduct = document.querySelectorAll('.countProduct')
var countProductSpan = document.getElementById('sumProduct')
if (inSearchProducts) {
    countProductSpan.innerHTML = countProduct.length
    inSearchProducts.addEventListener('keyup', function () {
        let text = inSearchProducts.value.toLowerCase()
        filterArray = productsArray.filter(function (a) {
            if (a.name.includes(text)) {
                return a.name
            }
        })
        if (this.value == '') {
            listProducts.innerText = ''
            showProducts(productsArray)
            countProduct = document.querySelectorAll('.countProduct')
            countProductSpan.innerHTML = countProduct.length
        } else {
            if (filterArray == '') {
                listProducts.innerHTML = ''
                notFoundStatus.style.display = 'block'
                countProduct = document.querySelectorAll('.countProduct')
                countProductSpan.innerHTML = countProduct.length
            } else {
                listProducts.innerText = ''
                showProducts(filterArray)
                countProduct = document.querySelectorAll('.countProduct')
                countProductSpan.innerHTML = countProduct.length
                notFoundStatus.style.display = 'none'
            }
        }
    })
}

let listFeaturedProducts = document.querySelectorAll('#listFeaturedProducts')
if (listFeaturedProducts[0] || listFeaturedProducts[1]) {
    showFeaturedProducts(productsArray)
    function showFeaturedProducts(currFeaturedArray) {
        var j = 0
        for (var i = 0; i <= currFeaturedArray.length; i++) {
            if (j == 4) {
                break
            }
            if (currFeaturedArray[i].featured == true) {
                j++
                listFeaturedProducts[0].innerHTML += `
                            <div class="col countProduct">
                                <div class="card h-100">
                                    <img src="${currFeaturedArray[i].image}" class="card-img-top" alt="${currFeaturedArray[i].name}" />
                                    <div class="card-body">
                                        <h5 class="card-title fs-6 mb-1 text-capitalize">${currFeaturedArray[i].name}</h5>
                                        <p class="card-text">
                                            ${currFeaturedArray[i].rating > 4.5 ? `<i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i> ${currFeaturedArray[i].rating.toFixed(1)}<br />` : `<i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-half text-warning"></i> ${currFeaturedArray[i].rating}<br />`}
                                            <s class="text-secondary small">Rp.&nbsp;${currFeaturedArray[i].priceOriginal.toLocaleString()}</s> Rp.&nbsp;${currFeaturedArray[i].priceDisc.toLocaleString()}
                                        </p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="${currFeaturedArray[i].link}" target="_blank" class="btn btn-warning d-none d-md-block w-100">Beli Sekarang<i class="icon icon-arrow-right ms-2"></i></a>
                                        <a href="${currFeaturedArray[i].link}" target="_blank" class="btn btn-warning d-block d-md-none w-100">Order<i class="icon icon-arrow-right ms-2"></i></a>
                                    </div>
                                </div>
                            </div>`
                listFeaturedProducts[1].innerHTML += `
                            <div class="col countProduct">
                                <div class="card h-100">
                                    <img src="${currFeaturedArray[i].image}" class="card-img-top" alt="${currFeaturedArray[i].name}" />
                                    <div class="card-body">
                                        <h5 class="card-title fs-6 mb-1 text-capitalize">${currFeaturedArray[i].name}</h5>
                                        <p class="card-text">
                                            ${currFeaturedArray[i].rating > 4.5 ? `<i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i> ${currFeaturedArray[i].rating.toFixed(1)}<br />` : `<i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-fill text-warning"></i><i class="icon icon-star-half text-warning"></i> ${currFeaturedArray[i].rating}<br />`}
                                            <s class="text-secondary small">Rp.&nbsp;${currFeaturedArray[i].priceOriginal.toLocaleString()}</s> Rp.&nbsp;${currFeaturedArray[i].priceDisc.toLocaleString()}
                                        </p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="${currFeaturedArray[i].link}" target="_blank" class="btn btn-warning d-none d-md-block w-100">Beli Sekarang<i class="icon icon-arrow-right ms-2"></i></a>
                                        <a href="${currFeaturedArray[i].link}" target="_blank" class="btn btn-warning d-block d-md-none w-100">Order<i class="icon icon-arrow-right ms-2"></i></a>
                                    </div>
                                </div>
                            </div>`
            }
        }
    }
}
