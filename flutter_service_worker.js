'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5cb8792dc8881328a340d4fec8e45112",
".git/config": "d122331e9cfd96fe8d818e3284cf4c39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e134011d346649c0824deff604f793a9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da89f9664c7a3bfb4f4ff295b268bce9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "399ef89ccfacb7be72689d5d350a9738",
".git/logs/refs/heads/main": "dd77ab43b718539510f5bac778c623ea",
".git/logs/refs/remotes/origin/main": "41760ac1d28dca182cd8bdc94eb21067",
".git/objects/01/3dde907970cf83496893620753c4d19f028e30": "eac7b6cf8d2d3702db7a49722ab55a39",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/1a/448b662122006c53610a74a634fc170526ca3d": "f09511f6a831df27e5a2173a805769f7",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/dc95db633586a14034f62ee016a1d034335103": "b30b3b9309e68d058450ad2ef171e305",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3b/babee7ca32a9f5b9e4bed6f1d2deb84f60001d": "84b463769423312098b354fd65f9d76b",
".git/objects/3f/496b1ed2031d44a1acb9ef951742d69c5164a7": "75f8ca94b18ba17a5f6fe0832e50dc85",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/6109187ab6b32ab79f6a78f3a6144ea8f9881d": "8000db520fcc2d586796fac4e5d1df4c",
".git/objects/50/373f1da659f762bac0747dfc2e19bfbc9f5426": "3993dc2565ac0e1227db45d755689bc8",
".git/objects/51/2a320afe272d702093ee6325b76f91f3d0969a": "c591e9bb03c496d1dc404e8ea579c360",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/133621fa5bb2336e5a99d5f6c4a9a523eb18ef": "45b888c1872f1aa4fa011a5d5d1fab6a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/c76e747e34d945b7ef9a86b60522fcc6188fdb": "f8c4bb7e8b2816c487e62173cfcd3ca3",
".git/objects/5d/ef29de8d60d661fdbae09785786084bee26e4c": "34d3312cd00eeea10f66200b16a51f05",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/653e163359b34a8bd9228a7dcb12ce5a033cf5": "ca915d54be24cd7d8fe63bb7f9ccca3f",
".git/objects/66/8a825e18ed645db577af0f1667e7444bf8dd2f": "41daa83f7945ff3f2c247f059f6c0211",
".git/objects/67/fe1d084f6b14224d9e5938a156990cd912d14a": "efb84e374c6d3e562fda3a9649f80e0d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/2fc0d267d639eee0b1ae8ac763a4666cea19a9": "1aea5e98d428f3f7631885db6d0e43b1",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/7133068da79b383d833a2f207e4444ef0f46c3": "54d1dba6d57f8e95247beed955f0f05a",
".git/objects/74/b7de4244d66f3eddc76f5c7a7032d12a78623e": "a7705606bc5b8d3a27f1841843f81707",
".git/objects/7a/8b5ed120484bc256b854df5ff1c78ff9393655": "fd2e072b97640c359af0d122882d6c07",
".git/objects/7e/dec45b5775a5b96c302fb6b5c7b8ddeb6d63ab": "75840b732c1796dac3b9bd0cd2422595",
".git/objects/83/14af42ed9f69a450e4e29bb04f42c6e879d3d6": "95a23c4b38e0f07fd205e835a2125213",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5f4bd66f87580f14ba480e307751130370229f": "5b314f82db9653e22556ef9f13aaebf8",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/265cfa47e862ccaf05a52d4812364d56a79113": "596da8f4b403331bfdcefe77fff6c06b",
".git/objects/97/33e14030c9bb7577d02dc79d62db8c821b5e82": "2de122f0a91998eeca4ff32e1230782e",
".git/objects/9a/4180d22b5546da7b2fa5487d0b0b92d15df4f6": "5f4d66d8aec0b546b35a10df88e3ccd2",
".git/objects/9b/867143fcc70b08e4fce50936a86511245b3aca": "d5c80e693a5f6bd6873629095e4ed29b",
".git/objects/9f/0acea0b38f0f66d9931940f2feb8cb45b36ace": "d91d2899dcf8015707bfdc73afcf16af",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/d07a1a571ace3338ccf57165c9f47ad5714a59": "bf7ae17517dd66fa340797996e521796",
".git/objects/ab/b062f304c4c72d73d3672707b4388f52b6b442": "656170ad14c2be1c93253b069055cb2e",
".git/objects/ac/6bb9861f5ea64e6c03a1dee8be2f4fc887f3c3": "75e7da15ae47fc2fae3fcd95d49c25e5",
".git/objects/ad/d421a65e9872b79d2435706c0bcd129ff08ad2": "dc61075bd9084f339b9e247167025663",
".git/objects/b5/53f2dec395ead80c2ff46855f77aef57417cdc": "3a6a90dba59bc8d9d5a736be4f3597d8",
".git/objects/b6/f2596ec64290c6c8504db1d959c0db6c38b820": "b0913bc17fd7e340daccfbe0de4fe63a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ee3103167af66d03bb685f9083e4cd80b1a349": "2806e46066986ebb7de979a284a7ab79",
".git/objects/bd/4d738f82707030ab9936745dfcd26f50708383": "8ca9b0ff2f526f445e82dd863ac5b09a",
".git/objects/c3/94c77b153009c5ebd61d399dabae662c6ad512": "a466caf1e00696c771f10f37a375fcf1",
".git/objects/cc/8ec177c7a0305ab51fee0b9d79f9e95656f624": "e146249c5e02e7f7769c18efca3e0629",
".git/objects/cc/919b29855aa6af56365e5fb7ee9883692ee971": "1eb3b552f61565a32b5ca366ce47c397",
".git/objects/d0/cb59388bed82fa8cd3388e25e87755f709e068": "319d5e5def471c8c15e78c0a1c598562",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/acc2e10c5bcd26b6e723ddf0a2c8ac9a0d8a3f": "1a28becf1aa494d3216067ca4ae9a1b0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/696651a9e7ac17693062c51999eea7bec22a90": "abc609215a409db7cff81374f160f179",
".git/objects/e1/be26e121a4f5b802f9128ccdf360e9f1d2fb10": "c1c6c2b43ad9d0459458b5251d9d826b",
".git/objects/e8/47121666305c42c4712df936e56b448acc9b97": "bbaa478b20fd06dd310faeefc48db786",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/5ca31b901b3ec651f994ef30e73e213f76396a": "f9ea546a78f451995e91ec68bdeb92d4",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/6182b2d70e6444f2023ee26ac1dfc2373b2c5e": "c1b2bdde2bdc930f45a35f7f82f47ba0",
".git/objects/f0/b6b3135ac9583dc0ab57d2beac19f98be8a76e": "322d78340d7af929e7c80773e2e1a82b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/ae887ce1d99c347ae732de09e68c26530482fd": "d860a715b98df5a640e0b241fb885e5e",
".git/objects/fb/2fc3800b1fec9461cdd44af4349f36d5dd72ee": "76324ba10de72540e2c2194282dd3af0",
".git/objects/fb/8a26c593f0d32ac8cc5cc0566e2484f0d64d90": "8dc3ff2b6d54786e7b2797bb3cd48b33",
".git/objects/fc/6725ab01410586b5d7ca3978ce6e5b8a659e0f": "21cf8098ff0c3c48337395e26d1abb0d",
".git/ORIG_HEAD": "cdc1fd0add6c649b10e3eddd007185d6",
".git/refs/heads/main": "d71d13fb0bed9ca36a43dd95d55cb81f",
".git/refs/remotes/origin/main": "d71d13fb0bed9ca36a43dd95d55cb81f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aa157b404eb04c7060167b900e916563",
"assets/NOTICES": "6c9cfd75f299d472e80a1fe4fff5a093",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "781e0eebffa11b2777510c2a971a79f7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "fbda66ffef87b3be53cfab671b4bab50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "588ea97d07a5e5d2a682b5971de697bd",
"/": "588ea97d07a5e5d2a682b5971de697bd",
"main.dart.js": "81d7f2a59819be59098f27b3328a2d0e",
"manifest.json": "ae39025bf27a5bb554f23e76b950b5eb",
"version.json": "7645a591835ae46efb051d17a6a40b12"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
