/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/11/01/malang/index.html",
    "revision": "4f337b8d380195fba8a604af19329015"
  },
  {
    "url": "2018/11/02/batu/index.html",
    "revision": "8be25dab6ef67d61380cec5a8e816f18"
  },
  {
    "url": "404.html",
    "revision": "9bc6b56e88076cbc0999e59f58115d31"
  },
  {
    "url": "blog/index.html",
    "revision": "ffc33422846688096f993dfa4ad2a1e1"
  },
  {
    "url": "data-faq/1-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/2-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/3-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-4/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-5/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-6/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-4/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-5/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-6/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-paket-wisata/paket-wisata.html",
    "revision": "afc2a6896bfa5d135c7bfedb79060b92"
  },
  {
    "url": "data-products/1-all-new-avanza/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/2-kijang-inova/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/3-inova-reborn/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/4-isuzu-elf/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/5-hiace/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/6-Alphard-Transformer/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/7-Fortuner-VRZ/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/8-Fortuner/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "favicon.ico",
    "revision": "5ad2d2b506dab1ea49c0d4b93d46768e"
  },
  {
    "url": "feed.xml",
    "revision": "f77fbc60dd8c046f533ec8506642b0e4"
  },
  {
    "url": "gallery/index.html",
    "revision": "fdba7b6df4b706d2beaa981d142232be"
  },
  {
    "url": "harga-sewa/index.html",
    "revision": "6554e800754c3dec2b9a218bd595ecfa"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "661dc3d685399f5aa4a7e4f941bb91b4"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "46fb8ca6e3d68f6c7d24c73b8faab08a"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "aac0199a67043e65d98217b1a47b2e03"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "4c13cced3b1d51aabb813256a22230c7"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "5a2bacb7b06c1579a98626080bd206be"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "81fbb9e963482436c8353bcf0493ae0d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "8220b20f88143d960a88b70667ded4e4"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "2034a8c7981dfa75955cdacbfeb65944"
  },
  {
    "url": "img/2-all-new-avanza.jpg",
    "revision": "024735036e9e2c9662fa60a4f69509a5"
  },
  {
    "url": "img/5-kijang-innova.jpg",
    "revision": "8f5c817099b08e2357a35ce5ccd8aa58"
  },
  {
    "url": "img/6-isuzu-elf.jpg",
    "revision": "d884d04009008da1ad8767bbfcf371ab"
  },
  {
    "url": "img/Alphard-Transformer.jpg",
    "revision": "8c0367b145ac6d8bac1dd46dc43fc9e5"
  },
  {
    "url": "img/automobile.png",
    "revision": "92f495a188e5203923854e438eb84e7c"
  },
  {
    "url": "img/calendar.png",
    "revision": "d3534e9d2f20dc399af119e17dbe3298"
  },
  {
    "url": "img/call.png",
    "revision": "7c384c93479defbf7c21363741b36d7b"
  },
  {
    "url": "img/Camri.jpg",
    "revision": "56573ba5d057cce5192006617e4e8995"
  },
  {
    "url": "img/cash.png",
    "revision": "8d69b60c1367c85e354922cf19e6389c"
  },
  {
    "url": "img/close.svg",
    "revision": "3360c57cdbbebca82e3a792f0a57876c"
  },
  {
    "url": "img/contacts.png",
    "revision": "e4231cc9871db4643d5d34f0ab0bc18b"
  },
  {
    "url": "img/FAQ.png",
    "revision": "89a5bf344208cee5f2771c8d16900822"
  },
  {
    "url": "img/Fortuner-VRZ.jpg",
    "revision": "44255d691376f928c23944a94d88086f"
  },
  {
    "url": "img/Fortuner.jpg",
    "revision": "15f1e357dec8aea25e3ab80b786220ea"
  },
  {
    "url": "img/gadis-inova-dalam.jpg",
    "revision": "2ed81892c40fea90a31bb78b39b024cc"
  },
  {
    "url": "img/gadis-inova.jpg",
    "revision": "a2ec21f4a387d505f1c12c5a0f39b6ad"
  },
  {
    "url": "img/gallery-1.jpg",
    "revision": "5930c313bd8ddddc5e2dfa98e4f1fa44"
  },
  {
    "url": "img/gallery-2.jpg",
    "revision": "c5ecd79abf1f5588373ca8deb2713478"
  },
  {
    "url": "img/gallery-3.jpg",
    "revision": "c155775fa72f02b2c199c9014bc8db6c"
  },
  {
    "url": "img/gallery-4.jpg",
    "revision": "39b972ed81932addfe2793e19d241e53"
  },
  {
    "url": "img/gallery-5.jpg",
    "revision": "36508e4fc6ca575fd31eb6a14781297b"
  },
  {
    "url": "img/gallery-6.jpg",
    "revision": "ea30348316c4156ef8a60a27f0eb7fb3"
  },
  {
    "url": "img/hiace.jpg",
    "revision": "8c7dc58f1934676852a03a1b5616866b"
  },
  {
    "url": "img/house.png",
    "revision": "2908b5909999bb91b067800cbcf3cfc9"
  },
  {
    "url": "img/icons/144.png",
    "revision": "377166356e66ad79e8a75b80861ae6e5"
  },
  {
    "url": "img/icons/168.png",
    "revision": "bca5336e6fdaa87b253c4cd1ef4f27a3"
  },
  {
    "url": "img/icons/192.png",
    "revision": "b03b9211e11bba69a9a768d5bb7514d3"
  },
  {
    "url": "img/icons/72.png",
    "revision": "f4ba66be3d28e509947b8b89838ba701"
  },
  {
    "url": "img/icons/96.png",
    "revision": "0ab1f9532a3fac40dddbb1fcb2048f23"
  },
  {
    "url": "img/icons/any.svg",
    "revision": "72b192752becd0df8e06921b20ecf970"
  },
  {
    "url": "img/icons/favicon.png",
    "revision": "ce0e9c7201c45feb21463a654ef4dffa"
  },
  {
    "url": "img/intro-bg.jpg",
    "revision": "7849e7aff832b956ac7c9fda6c0a59ab"
  },
  {
    "url": "img/klikada-panjang.svg",
    "revision": "fa27eef4158316cefa33e89dbfc29f4b"
  },
  {
    "url": "img/logo-flowers-rent-car-biru.png",
    "revision": "cdc9446456a3a082bca41b855890e177"
  },
  {
    "url": "img/logo-flowers-rent-car.png",
    "revision": "ed872b1962b4bf77eaff8d23bb6425f1"
  },
  {
    "url": "img/map.png",
    "revision": "7f5c0c05c999f61f001581898159d744"
  },
  {
    "url": "img/menu.svg",
    "revision": "a833de9795cac2a5d2031a39af727844"
  },
  {
    "url": "img/news.png",
    "revision": "a66ee4b66bcc76b2dfe78411f81bfe52"
  },
  {
    "url": "img/phones-symbol.svg",
    "revision": "f16134d24c95484a04754e56c6b0986c"
  },
  {
    "url": "img/price-tag.png",
    "revision": "a1b83faa63117b48805ae469502df702"
  },
  {
    "url": "img/product-features.png",
    "revision": "6d4e7025e6cecc30d1d8da4c248afac3"
  },
  {
    "url": "img/sms.png",
    "revision": "633fbc2ce35abe1dbbe936b613eaeec9"
  },
  {
    "url": "img/sms.svg",
    "revision": "878cb683823bc63731f8ef65323abc48"
  },
  {
    "url": "img/whatsapp.svg",
    "revision": "47c77bf133116ff76838809ae5d2c83a"
  },
  {
    "url": "index.html",
    "revision": "fc2fe1c33e87b92ced2e3deaa25e3b98"
  },
  {
    "url": "install-service-worker.html",
    "revision": "0ccb0b0d254f10cad94bb8ec9e8fae01"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "lib/font-awesome/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "lib/ionicons/css/ionicons.css",
    "revision": "f27354b28af3cf48d28260c03305d0ce"
  },
  {
    "url": "lib/ionicons/css/ionicons.min.css",
    "revision": "0d6763b67616cb9183f3931313d42971"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.eot",
    "revision": "2c2ae068be3b089e0a5b59abb1831550"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.svg",
    "revision": "621bd386841f74e0053cb8e67f8a0604"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.ttf",
    "revision": "24712f6c47821394fba7942fbb52c3b2"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.woff",
    "revision": "05acfdb568b3df49ad31355b19495d4a"
  },
  {
    "url": "manifest.json",
    "revision": "f895c9092030773cd00faffcea672adc"
  },
  {
    "url": "paket-wisata/index.html",
    "revision": "506870cd784570fe8de1a08df3161ddc"
  },
  {
    "url": "robots.txt",
    "revision": "c725a554b0ff7c50968706c95f2e331a"
  },
  {
    "url": "sitemap.xml",
    "revision": "082c032d2b02e6e1ac23f43871220486"
  },
  {
    "url": "sw.html",
    "revision": "9ddb3c30045037e3f8d7c4c5810a4386"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
