var scrollTopButton = document.getElementById('scrollTop')
if (scrollTopButton) {
    window.onscroll = function () {
        showScrollButton()
    }
    function showScrollButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.opacity = '1'
        } else {
            scrollTopButton.style.opacity = '0'
        }
    }
    function scrollTopAction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}

var navBarMenu = document.getElementById('navBar')
if (navBarMenu) {
    navBar()
    function navBar() {
        navBarMenu.innerHTML = `
            <div class="container">
                <a class="navbar-brand" href="/"><img src="/asset/image/nav-logo.png" alt="Pawonkos799" width="45" /></a>
                <button class="navbar-toggler" type="button" data-root-toggle="collapse" data-root-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-2">
                        <li class="nav-item"><a class="nav-link ${window.location.pathname == '/' ? 'active' : ''}" ${window.location.pathname == '/' ? 'aria-current="page"' : ''} href="/">Beranda</a></li>
                        <li class="nav-item"><a class="nav-link ${window.location.pathname == '/shop/' ? 'active' : ''}" ${window.location.pathname == '/shop/' ? 'aria-current="page"' : ''} href="/shop/">Belanja</a></li>
                        <li class="nav-item"><a class="nav-link ${window.location.pathname == '/about/' ? 'active' : ''}" ${window.location.pathname == '/about/' ? 'aria-current="page"' : ''} href="/about/">Tentang</a></li>
                        <li class="nav-item"><a class="nav-link ${window.location.pathname == '/link/' ? 'active' : ''}" ${window.location.pathname == '/link/' ? 'aria-current="page"' : ''} href="/link/">Link</a></li>
                        <li class="nav-item d-none d-lg-block"><a class="ms-2 btn btn-warning ${window.location.pathname == '/contact/' ? 'active' : ''}" ${window.location.pathname == '/contact/' ? 'aria-current="page"' : ''} href="/contact/">Kontak</a></li>
                        <li class="nav-item d-block d-lg-none"><a class="nav-link ${window.location.pathname == '/contact/' ? 'active' : ''}" ${window.location.pathname == '/contact/' ? 'aria-current="page"' : ''} href="/contact/">Kontak</a></li>
                    </ul>
                </div>
            </div>`
    }
}

var footerBottom = document.getElementById('footer')
if (footerBottom) {
    footerBottom.innerHTML = `
            <div class="container py-4">
                <div class="row row-cols-1 row-cols-lg-3 g-4">
                    <div class="col"><img src="/asset/image/pawonkos799-big-favicon.png" alt="Pawonkos799" width="50" /><span class="d-block fw-semibold fs-4">Pawonkos799</span><span class="d-block">Produk Pawonkos ini sangat mengedepankan cita rasa Nusantara. Semua Produk kami adalah produk handmade by order dan bergaransi.</span></div>
                    <div class="col"><span class="d-block fw-semibold fs-4">Pembelian Produk</span><img src="/asset/image/shopee-logo.png" alt="Bank Central Asia" width="75" class="d-block mt-2 mb-3" /><span class="fw-semibold">Checkout via Shopee</span><span class="d-block">Mulai 15 April 2023, seluruh pembelian dan transaksi dilakukan melalui Shopee (@pawonkos799).</span></div>
                    <div class="col">
                        <span class="d-block fw-semibold fs-4">Hubungi Kami</span><span class="d-block">Anda dapat menghubungi kami melalui beberapa opsi atau tautan di bawah.</span>
                        <span class="d-block">Email <a href="mailto:pawonkos799@gmail.com" class="contactFooter">pawonkos799@gmail.com</a></span
                        ><span class="d-block">Hubungi melalui <a href="/contact/" class="contactFooter">Halaman Contact</a></span>
                        <span class="d-block">Hubungi melalui <a href="https://wa.me/6282122220362" class="contactFooter" rel="nofollow noopener noreferrer" target="_blank">WhatsApp</a></span>
                    </div>
                </div>
            </div>
            <span class="text-secondary d-block text-center border py-3">Copyright &copy; 2023 Pawonkos799</span>`
}

var isMaintenance = document.getElementById('nowMaintenance')
if (isMaintenance) {
    showMaintenance()
    function showMaintenance() {
        isMaintenance.innerHTML = `
            <div class="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
                <h1 class="fw-bold"><i class="icon icon-wrench-adjustable-circle d-block"></i>Under Maintenance.</h1>
                <p class="fw-medium">Oops, we're under construction on this page. Please come back soon. Sorry for the inconvenience.</p>
                <small>URI: <span id="uri"></span></small>
                <a href="/" class="btn btn-warning mt-3">Back to Homepage</a>
            </div>`
    }
}

var uri = document.getElementById('uri')
if (uri) {
    uri.innerHTML = window.location.href
}
