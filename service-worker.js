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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "f6463f8ac9eedada7685801377a5e152"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.76cca088.css",
    "revision": "534d0e6b7065687b4fcd911f58a2f1c7"
  },
  {
    "url": "assets/img/for_lab4.7dc22bd2.jpg",
    "revision": "7dc22bd2d5a66c9835712d68d2d46ec8"
  },
  {
    "url": "assets/img/img1.6c3ea5df.png",
    "revision": "6c3ea5df2033c89b9b861cedc32780c9"
  },
  {
    "url": "assets/img/img2.81f42acf.png",
    "revision": "81f42acf515ff2070b4727baa3e3a1d4"
  },
  {
    "url": "assets/img/img3.5ed57928.png",
    "revision": "5ed57928e270cf2bf942b3d62e8a4a50"
  },
  {
    "url": "assets/img/img4.b20fa78e.png",
    "revision": "b20fa78ef11bd043c87bade236e4e420"
  },
  {
    "url": "assets/img/img5.1c77c4f1.png",
    "revision": "1c77c4f191580f0b4e9aabadb9dbb86e"
  },
  {
    "url": "assets/img/img6.f9277ef6.png",
    "revision": "f9277ef6499e2138426d43aee9d315ae"
  },
  {
    "url": "assets/img/img7.cd2c3874.png",
    "revision": "cd2c38749697bac8a6d3f19a05830262"
  },
  {
    "url": "assets/img/img8.12201356.png",
    "revision": "12201356b8356dafea93cf4b00d9d38e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.cec2ed9f.js",
    "revision": "84b987c051a2f5be2207e7f758438054"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.495209cb.js",
    "revision": "cbb4bc447a465027884e658ee245535c"
  },
  {
    "url": "assets/js/14.4c864c5e.js",
    "revision": "247ab6962c40c076a8240f8512296f87"
  },
  {
    "url": "assets/js/15.73d7025e.js",
    "revision": "fcb55ba3e1e5ffffa4416a288436253d"
  },
  {
    "url": "assets/js/16.9a369fb1.js",
    "revision": "2e8ffc63aca523f6cd975e6b8ab2ff1a"
  },
  {
    "url": "assets/js/17.a36e8b1f.js",
    "revision": "2a9fb76a213b02e49444ad2b66967f0f"
  },
  {
    "url": "assets/js/18.e93cda26.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.dc36c287.js",
    "revision": "10518a239798cebf2fbdaf49bf955809"
  },
  {
    "url": "assets/js/2.9dd95488.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.59562d31.js",
    "revision": "73aa3efbee863ee706369ca5333f6c4e"
  },
  {
    "url": "assets/js/21.914d6b1e.js",
    "revision": "6dd27f00cd2e03717c8e96f5ba44a7e8"
  },
  {
    "url": "assets/js/22.ae270558.js",
    "revision": "f3ca909dbd175e308f1f6d4ec916c1cb"
  },
  {
    "url": "assets/js/23.8b0a74c9.js",
    "revision": "ecabdbe7448282184c61e50787a2e43a"
  },
  {
    "url": "assets/js/24.45d31c29.js",
    "revision": "c12df40f8f03b61cd9f3a00d5d207d64"
  },
  {
    "url": "assets/js/26.3c108c65.js",
    "revision": "14070395307afbb22387ff5bad8d960c"
  },
  {
    "url": "assets/js/3.35c91daa.js",
    "revision": "d64ad6db5f2709281189c7e0e7a8a210"
  },
  {
    "url": "assets/js/4.4ded2ed6.js",
    "revision": "e82d2d7c0cbf65eceb164c2b4d9f1db9"
  },
  {
    "url": "assets/js/5.77652e35.js",
    "revision": "956a31b5a51211553849fb62eae2af2a"
  },
  {
    "url": "assets/js/6.3fbdccd1.js",
    "revision": "c4229ae9fe2294fc481716c108062ee4"
  },
  {
    "url": "assets/js/7.1b19c502.js",
    "revision": "717e571555dfcfdbc8ac88162a73df18"
  },
  {
    "url": "assets/js/8.f7398b0c.js",
    "revision": "b6a14a3bc9caded74fad7965e01d9116"
  },
  {
    "url": "assets/js/9.6a0c4c57.js",
    "revision": "0451ff4db2380cc8e2e1dc8fb14be457"
  },
  {
    "url": "assets/js/app.20fd7cf9.js",
    "revision": "2e9a921e1ab20a375f044c23296f8a98"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ab3566157cc522ae112bccb32aa31170"
  },
  {
    "url": "design/index.html",
    "revision": "4c29ac5ac4d8f6865f9390b27112d602"
  },
  {
    "url": "index.html",
    "revision": "ebf57921f7d26740f09b4078ac613c9c"
  },
  {
    "url": "intro/index.html",
    "revision": "615f9753fa76a5eeb0395e35ca587819"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f2335d11c0d9be63e6fbde3834eb2eb6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "02a23afb4368b9b81cfdbf0342ad1552"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2c1fab6a5fb7299c80c4a984b08d7435"
  },
  {
    "url": "software/index.html",
    "revision": "c6d24d1bea6076019b1c2b131b1888ea"
  },
  {
    "url": "test/index.html",
    "revision": "e957fe5cd1d15913d9f1f3358d65be36"
  },
  {
    "url": "use cases/index.html",
    "revision": "3b2482eda1edeb47d8b3dc20cd3a2de6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
