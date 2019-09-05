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
    "url": "404.html",
    "revision": "bcc5fc9e2cecc474f9ac9c9d75a43e45"
  },
  {
    "url": "api/cli.html",
    "revision": "3b1058c219879847a01a109cf351a889"
  },
  {
    "url": "api/node.html",
    "revision": "d2596f33c7cbd77eeeaaf65a730c88ee"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.21d86eea.css",
    "revision": "6c066528b3a6fc5235ae8f0cea7c0794"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2654d675.js",
    "revision": "eb451bb7d435e57c2add8b2f1c643bed"
  },
  {
    "url": "assets/js/11.7855f09f.js",
    "revision": "4d15126c3069c3896321bff2317097b0"
  },
  {
    "url": "assets/js/12.1a6a3490.js",
    "revision": "91fa458ccfdb765c146b9300ab2c345f"
  },
  {
    "url": "assets/js/13.9b02559c.js",
    "revision": "bd767e884498bbdbf8c19950067cef99"
  },
  {
    "url": "assets/js/14.363053c8.js",
    "revision": "7830d1f6414e63ae7d5c509a936e9d23"
  },
  {
    "url": "assets/js/15.b14b39df.js",
    "revision": "e752a48a7649cf156fc423b08d177b86"
  },
  {
    "url": "assets/js/16.b683a0ab.js",
    "revision": "9df0372d6c687f48173adc0e2e23380b"
  },
  {
    "url": "assets/js/17.2fdfc941.js",
    "revision": "b43d169eabb0503feb0fb1ef8862672a"
  },
  {
    "url": "assets/js/18.b30d2f5a.js",
    "revision": "007af99a686e6400d71399e31f83994e"
  },
  {
    "url": "assets/js/19.14553361.js",
    "revision": "470045b276994d7ed93109db2bcb594c"
  },
  {
    "url": "assets/js/20.504607af.js",
    "revision": "f9ead72e4e65a1465d2ccd1cedde7ae8"
  },
  {
    "url": "assets/js/21.83843aec.js",
    "revision": "008a1c00458d4c4b76d0120809134769"
  },
  {
    "url": "assets/js/22.0d1ff705.js",
    "revision": "17ca6df8df301b38fb4e8b9f1b55c0f7"
  },
  {
    "url": "assets/js/23.9b61d3b7.js",
    "revision": "4d67218e2806ab36051b74829058f228"
  },
  {
    "url": "assets/js/24.58557115.js",
    "revision": "7501b13250a447ce7a0b38b78dc5048a"
  },
  {
    "url": "assets/js/25.4242452a.js",
    "revision": "08c5996b90b42755e20c78a4e8194146"
  },
  {
    "url": "assets/js/26.573de347.js",
    "revision": "8f6c2cf75ac2520a34b75220367373e9"
  },
  {
    "url": "assets/js/27.384cf238.js",
    "revision": "4d0a5a8cdef248738dc091501449e8a4"
  },
  {
    "url": "assets/js/28.509356ce.js",
    "revision": "3a9bc43af70b2061aa1865cf1397de53"
  },
  {
    "url": "assets/js/29.33a5191d.js",
    "revision": "847a7427af67e2b06743358ae315c8a0"
  },
  {
    "url": "assets/js/3.949a9ddc.js",
    "revision": "31dd4dfe446ac9732ad11a537fba51c5"
  },
  {
    "url": "assets/js/30.e26f141b.js",
    "revision": "f25b9f6d1adfe58018ad4722a89a4c43"
  },
  {
    "url": "assets/js/31.cd3c39df.js",
    "revision": "5eb3ac99703264e89a8eeb77c3d0c10f"
  },
  {
    "url": "assets/js/32.31ddd82b.js",
    "revision": "fa101efd945d09960a5c71bc47d3c806"
  },
  {
    "url": "assets/js/33.cea74575.js",
    "revision": "ae9740b6cf5931b0bce2771e36d66f07"
  },
  {
    "url": "assets/js/34.41c003cf.js",
    "revision": "3f2a5b4e58e34f1774884619cb209e23"
  },
  {
    "url": "assets/js/35.279a0174.js",
    "revision": "e791c10c962feb263e72256303545ae5"
  },
  {
    "url": "assets/js/36.9c877d2f.js",
    "revision": "7154f95158094b58d954b8c38c1f887f"
  },
  {
    "url": "assets/js/37.610a5b1a.js",
    "revision": "508c6b003df4887a407b1486b7abea18"
  },
  {
    "url": "assets/js/38.d00e1fc6.js",
    "revision": "0ec2536d60f1e43907880b1f7149233b"
  },
  {
    "url": "assets/js/39.ca28fa55.js",
    "revision": "26f4440b89549b0b6e209de73b8cc4ed"
  },
  {
    "url": "assets/js/4.20e2a258.js",
    "revision": "8b15f8dd6c2d9fd63b808b092abb10fd"
  },
  {
    "url": "assets/js/40.42a06776.js",
    "revision": "0836f1db01d50927c53c1be34f4c4411"
  },
  {
    "url": "assets/js/41.478b4351.js",
    "revision": "d27fb03284f267bee7ee013af8af0f32"
  },
  {
    "url": "assets/js/42.7367e34b.js",
    "revision": "10736416abf50c636a3e023fa5f564c3"
  },
  {
    "url": "assets/js/43.36995b9e.js",
    "revision": "4bc7bfd961753a3c022fe7a72ba4e11c"
  },
  {
    "url": "assets/js/44.4865ee8b.js",
    "revision": "5fe9927c8b5f028f528f19f6478d1c79"
  },
  {
    "url": "assets/js/45.780fe932.js",
    "revision": "5030e16dd47e03e66c803be65c218aed"
  },
  {
    "url": "assets/js/46.76cff113.js",
    "revision": "7a0dc920824765a0b1e40fdda274d69d"
  },
  {
    "url": "assets/js/47.43d2643a.js",
    "revision": "82b6ccd1789e5616a37eb110e24b06a8"
  },
  {
    "url": "assets/js/48.7935110b.js",
    "revision": "bea4bf1fafda6330b849c5118cc98ec2"
  },
  {
    "url": "assets/js/49.700d307b.js",
    "revision": "9be724531149d6ac21f46df94650ee33"
  },
  {
    "url": "assets/js/5.cfe3aacd.js",
    "revision": "7ebb18559afc605b9d54bae70f1778d7"
  },
  {
    "url": "assets/js/50.35736f9f.js",
    "revision": "11dca4a62d95cf66770b40d8c410da74"
  },
  {
    "url": "assets/js/51.f9b481ee.js",
    "revision": "506efc91d5ce59cf0b310cb32a361a78"
  },
  {
    "url": "assets/js/52.5600f6c0.js",
    "revision": "dae5da0dd95bd70c1cb4d88791a9483f"
  },
  {
    "url": "assets/js/53.a5db50ee.js",
    "revision": "70bd1f4b6895eda4a7dbb061641ccc7c"
  },
  {
    "url": "assets/js/54.1c09333d.js",
    "revision": "dd61015ebfee80c7c2d930f97d423dc1"
  },
  {
    "url": "assets/js/55.693697de.js",
    "revision": "8829f44cd4479a1f05d0eb13ba7b296e"
  },
  {
    "url": "assets/js/56.c0065b0f.js",
    "revision": "91e213aa6595a5d22cd69b74057faca4"
  },
  {
    "url": "assets/js/57.d86aa941.js",
    "revision": "ca3504ffa940544e4907ac1c74b5d2fd"
  },
  {
    "url": "assets/js/58.d012a367.js",
    "revision": "4ef8c19ff36300ede45e681586feb596"
  },
  {
    "url": "assets/js/59.71115700.js",
    "revision": "4df1844b9320988e2ebca45038378088"
  },
  {
    "url": "assets/js/6.b6d9c282.js",
    "revision": "672164bb0c7aa9d1f701c628a9826ed9"
  },
  {
    "url": "assets/js/60.24443428.js",
    "revision": "0ca34f09ed76914dd8bee5a322a5cffc"
  },
  {
    "url": "assets/js/61.9091ed7e.js",
    "revision": "097a7568914fe5d23c0fef14b001c24b"
  },
  {
    "url": "assets/js/62.a99dcb6e.js",
    "revision": "a790dbdf243045df04159833aaa6f6a8"
  },
  {
    "url": "assets/js/63.3462a935.js",
    "revision": "73fff151397ea1de022066672001d1d2"
  },
  {
    "url": "assets/js/64.c3d2365e.js",
    "revision": "112d7439420212a1250e22f424c8b697"
  },
  {
    "url": "assets/js/65.3276ec92.js",
    "revision": "a45b44646a8b9146d8b6e58ea9b3addd"
  },
  {
    "url": "assets/js/66.fdd58834.js",
    "revision": "6a5e11141e770288f83ab54640454781"
  },
  {
    "url": "assets/js/67.c8874deb.js",
    "revision": "6424564428449ce380723facbbe65a72"
  },
  {
    "url": "assets/js/68.8b3b7d7a.js",
    "revision": "9b73750ef52274e5317ee28e9e5fdea2"
  },
  {
    "url": "assets/js/69.6173d830.js",
    "revision": "c99c5767977a402edd359a6371c6b7f4"
  },
  {
    "url": "assets/js/7.8f4855c7.js",
    "revision": "cc2f361b8bb6c80e15b559f2a120e6be"
  },
  {
    "url": "assets/js/70.b6c9a086.js",
    "revision": "da928355f2b44b73b46be9ea15e5f044"
  },
  {
    "url": "assets/js/71.a9dc4684.js",
    "revision": "4186cde19e5d1522a7a7fa99c85ddcb9"
  },
  {
    "url": "assets/js/72.9c77b021.js",
    "revision": "39ea434110b29744328844015c75ec6e"
  },
  {
    "url": "assets/js/73.67495221.js",
    "revision": "fb19238b95b49d819a8e9bbe11af3405"
  },
  {
    "url": "assets/js/74.bc36cee0.js",
    "revision": "4bf16feda548f7c0bc773b2850439cf8"
  },
  {
    "url": "assets/js/75.d72b277d.js",
    "revision": "3ab738d5f34abb80bd18c9203dddc290"
  },
  {
    "url": "assets/js/76.816b59ba.js",
    "revision": "2eeea53a8910f711f003ecc95327a006"
  },
  {
    "url": "assets/js/77.ca4611e0.js",
    "revision": "bc2725ec447c176a240d464e11d363c4"
  },
  {
    "url": "assets/js/78.702ead6c.js",
    "revision": "ee7a7516e3bf71eb3e48c5f36e8a3288"
  },
  {
    "url": "assets/js/79.95789028.js",
    "revision": "1258e089762761a71981637315f14177"
  },
  {
    "url": "assets/js/8.45f81d14.js",
    "revision": "47030db75608b379298bfa83f81b1097"
  },
  {
    "url": "assets/js/80.09ff27fb.js",
    "revision": "43709032f546a6654aee06b7f6a7d0d0"
  },
  {
    "url": "assets/js/81.29843570.js",
    "revision": "4946ff317f33bc1aa72b903abdf224fc"
  },
  {
    "url": "assets/js/82.15963a51.js",
    "revision": "e47aed9a77717f7cf7dd0fa913104339"
  },
  {
    "url": "assets/js/83.01c46d56.js",
    "revision": "7f46dc22ce1b769a538f184e75986367"
  },
  {
    "url": "assets/js/84.f6d0c1e2.js",
    "revision": "1acfd59701d0166e90398100189db3e3"
  },
  {
    "url": "assets/js/85.bbbc1d5e.js",
    "revision": "74d0dae867de2da8d4d839650414d387"
  },
  {
    "url": "assets/js/86.f61936f3.js",
    "revision": "0ba124e9c30315ff082824c1b332a2a1"
  },
  {
    "url": "assets/js/87.133fd694.js",
    "revision": "bb5571adfaf4cec804689463ce6e4911"
  },
  {
    "url": "assets/js/88.2c8cec29.js",
    "revision": "c48199b7fd1e6cb5fbd9cd4b54ca3186"
  },
  {
    "url": "assets/js/89.e0514a21.js",
    "revision": "1cae9cdb36f9a8d0d8b9ed9078896da4"
  },
  {
    "url": "assets/js/9.f18f995d.js",
    "revision": "b0013caf390b44d996a6d01220933568"
  },
  {
    "url": "assets/js/90.681651fd.js",
    "revision": "fbd8350504c57324306c1dc47b68e2c8"
  },
  {
    "url": "assets/js/91.84408c31.js",
    "revision": "4b70ecee6d67d8982948f7229e12d7ac"
  },
  {
    "url": "assets/js/92.254ad3ca.js",
    "revision": "ac897bab83d3f377bc73764f5028ae09"
  },
  {
    "url": "assets/js/93.69667436.js",
    "revision": "aa4684b8e4a325203197a58c892817a1"
  },
  {
    "url": "assets/js/94.94f90803.js",
    "revision": "fda0e8730a4efd71c791fa5514dbda3c"
  },
  {
    "url": "assets/js/95.10e11aff.js",
    "revision": "5de6605d54d458bc770835ca5097a2b4"
  },
  {
    "url": "assets/js/96.2b0d327a.js",
    "revision": "50d8287449b88c48dd6b49547c50e0ec"
  },
  {
    "url": "assets/js/97.9fee5abc.js",
    "revision": "37877a23d1ff60d3efc294152f92ae1d"
  },
  {
    "url": "assets/js/98.025a8372.js",
    "revision": "b465a9aa26c4c671815000720d60261e"
  },
  {
    "url": "assets/js/app.fbd275b5.js",
    "revision": "e333b8651889af77b877d15373923325"
  },
  {
    "url": "assets/js/vendors~notification.02d0b2d0.js",
    "revision": "bb52139f56d667d1956257f4c68eb31b"
  },
  {
    "url": "config/index.html",
    "revision": "10caa303970b89d535330c6b5858a2e3"
  },
  {
    "url": "faq/index.html",
    "revision": "5b3e90afbbb7ced3f4e4c4509fe03b16"
  },
  {
    "url": "guide/assets.html",
    "revision": "c5b97bb72aaea622f84407f1c97d586e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "57a5a24f4a002639a66fa9c78b11719d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ea2cb3e5e0d3b1e377bb89ea70fc2e01"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "690777405b63ac1643d024082808b629"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "afd569882e880d92bea83ebc2f9de2a9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8062c271664153670e881e97edbd913b"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "02f6a0cd1337b813fa53e898e56cc7f7"
  },
  {
    "url": "guide/i18n.html",
    "revision": "4dcbe0f9f1e7082e07c022333f66f591"
  },
  {
    "url": "guide/index.html",
    "revision": "47eb8ad20607f9137283b0889a658f1d"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "2d054785fefa5c9f16c017dadc20a5ca"
  },
  {
    "url": "guide/markdown.html",
    "revision": "49fbec1531ee6d2202704afefedc1446"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "74fa947132c6fa65c8877b3cb0b28b4e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1007c393454d6355ef6a3a065ba043f6"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "76da7e876a73ae1d0d6c5335de34567d"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "9f90d863ad92e93508be3c151120affb"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "4744618e4638775be66efadf4d95c0c1"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "41ea09bcde9edbcb71ee60e343334747"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "d38afc92a6d7b991fbacac62c571fba8"
  },
  {
    "url": "plugin/index.html",
    "revision": "2787fee7a78fd4f0ab5a3681c5d18a69"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "bc04e7ca7aa0f82949e16f896b249104"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "0026e6f861a6509ed384a32873dedd45"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "fcd5c154ce4d7ceeffc961123c1a49b6"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "388176aeef584520358cab05cc02617c"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "f9e5e4719090fd57f2b87d096ea2c248"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "fa13473ecd2c0b346b94393173e8cc03"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "c71b8a6dd4289cc299aadfe01795011e"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "932a9be339f235beb3485ced48293ede"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c35970712d1ea9cb4198247cef16d292"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "6be2569dd332285c9352b50e45392b37"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "ca458dc3d2a461f4abd826a20126add9"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "2ae74d820e3c9d1d05c8272c46653869"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "0052462c25886ed27013a63b50475e93"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "73b44b75027e21d3f031b68a317da5de"
  },
  {
    "url": "theme/index.html",
    "revision": "702ce231c65c84886a272c632d6c7106"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "84f92c0d708bc1f400f91b3d82605cce"
  },
  {
    "url": "theme/option-api.html",
    "revision": "1a6d8e510a41b7d676ad225c13bfd5c7"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "68144ea606913888c8b27abdaf8957b9"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "77d9cbf655a960e245537e38ccb9dd6d"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "2c1f8dbb546a71f353b564b581ea31b9"
  },
  {
    "url": "zh/api/node.html",
    "revision": "6e864094a6235e666f4daf3f71142d5d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b85fca4584e92bb9f846ba0d5ec97246"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "59c3766de318a7cbabfbf13404724ad8"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "3d66f7bb8e3ce09fa6400c8bde9ebf65"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "530ced4af4de10ed00c82c4c4f2bc134"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "fbffe3262ad1c77b8abe1a5f37b52aa8"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "1b3a7c616247b558d7a89b71f96f55df"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2ede1be7d7ca7f7b475148610df6093d"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "1a58040b53de61d8e4d7d658c1d3b02b"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "4786e29bd7c44580644389652f08e9c5"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "2e28737e2d7eab5507d1fac724f0025f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "bb036602ff78ea769c13cc38ae222145"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "c30b7a45e094e6e8382d34e90b59e7e0"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "939ae433d04c601033c68d4663457dce"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "bca973e014e85a6f4472aaef9c20a310"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "a9366e5f5f0732c1d9b10697095f53f4"
  },
  {
    "url": "zh/index.html",
    "revision": "38077c406c8a097330da12d238afe6f7"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "5305a54ed26a93ef76fc78c7a151357a"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "3e27a475b20a9c31c46c13293085a808"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "96f56d2924b56f0c295913b0db48e1b2"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "b77dfb59cb0bd348b8942b6c31adc568"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "f0adce4916aeddc35dca45fa8fbf84d4"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "0353cbcce8f2e04b9e3783a614998645"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "b3815e990b6f737117a1f59fb5f65f50"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "fa8d807eb9be023e02a7807759015df7"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "3fafd0789c10cf44fcb08c49b14b4bc5"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "490ad8d910d7a3ac57c5113df18f39f0"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "a143f76b58482d765d6f18e4d103834c"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "2f5d7cb41464165fb01dbdc2a0c97745"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "b29f4556bfa4aca2db8bc654d129adf5"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "5ea9c98373b0d5b633cce68134ced468"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "8bd51ee40b47745e17bc7ef092f41f69"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "a02a711713fc95d0dab7ed168a91bcf5"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "728baf4e49c9bdae51b2741b1eb59dfb"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "cdec7a71d48df8ad4337bd43b832d486"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "5032f14a8525aa0ef760f769e6fe6c2f"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "f8586b8d10839b50f4dae83f2b1cc574"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "693ebc722bca27fd76fb24b5232525f7"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "480d8a5ecaffe9c6cb6e3c02f42a7cef"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "bd6a8919c5f73ffd113abcc20fd408cb"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "309d87933ce682311f20238a2b44c314"
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
