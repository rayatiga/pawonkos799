const CACHE_NAME = `pawonkos799-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll([
                "/",
                "/about/",
                "/about/",
                "/contact/",
                "/link/",
                "/nov/",
                "/res/hki-pawonkos799.pdf",
                "/res/manual-pawonkos799.pdf",
                "/res/sus-pawonkos799.pdf",
                "/shop/",
                "/asset/css/icon.css",
                "/asset/css/main.css",
                "/asset/css/utility.min.css",
                "/asset/font/icon.woff",
                "/asset/font/icon.woff2",
                "/asset/font/work-sans.ttf",
                "asset/image/product/2-pack-cumi-lumur-sambal.png",
                "asset/image/product/2-pack-ikan-kicik-daun-jeruk.jpg",
                "asset/image/product/ayam-cumi-lumur-sambal.jpg",
                "asset/image/product/ayam-lumur-sambal.jpg",
                "asset/image/product/batagor-kuah-free-sosis.jpg",
                "asset/image/product/bundling-3-cumi-seblak-ikan.jpg",
                "asset/image/product/bundling-4-cumi-ayam-seblak-ikan.jpg",
                "asset/image/product/combo-3-cumi-lumur-sambal.png",
                "asset/image/product/cumi-lumur-sambal.png",
                "asset/image/product/dua-pack-ayam-lumur-sambal.jpg",
                "asset/image/product/ikan-kicik-daun-jeruk.jpg",
                "asset/image/product/seblak-cuankie.jpg",
                "asset/image/product/tuna-suwir-cabe-ijo.jpg",
                "asset/image/bca-logo.png",
                "asset/image/hero.jpg",
                "asset/image/nav-logo.png",
                "asset/image/pawonkos799-big-favicon.png",
                "asset/image/shopee-logo.png",
                "asset/image/thrift.bymisora.png",
                "asset/js/angular.min.js",
                "asset/js/main.js",
                "asset/js/nov.js",
                "asset/js/product.js",
                "asset/js/utility.min.js",
            ]);
        })()
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            const cache = await caches.open(CACHE_NAME);

            // Get the resource from the cache.
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            } else {
                try {
                    // If the resource was not in the cache, try the network.
                    const fetchResponse = await fetch(event.request);

                    // Save the resource in the cache and return it.
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                } catch (e) {
                    // The network failed.
                }
            }
        })()
    );
});
