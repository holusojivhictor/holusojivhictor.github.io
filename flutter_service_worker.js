'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "183140c704ccff361e1d4448955e7a26",
".git/config": "d38829cc720f581a2a0901c90703eb94",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8283b7876bb9fcbdac509e69af50c91a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc0b54ede90cfb13b11a71a90cd4345f",
".git/logs/refs/heads/main": "727eda4e1de467f57ccceb40c3b455a2",
".git/logs/refs/remotes/origin/main": "72968ad1f07471ee14c577e44c0a3854",
".git/objects/06/c3150c42d0c2027e71b36161458a1247db1764": "a84cae85a02a7ba9ad38dd25d6c5817b",
".git/objects/0b/ef23f1b9c9db35c9e3ef198acf7460b507ceca": "9f29c0d8728965c59d84eefc5548c8cf",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1a/168a6de117ef9a6080117eb2f9384c9bf65a0a": "74b55987b48b2a9098e295f232a7b962",
".git/objects/1e/ed7587e0c3871ff4f127e48069684424f7c3f1": "3bdceaf7f0bdb6a133f53df22d04f779",
".git/objects/22/9f70bc094e7436e74476d985de4a2fddc38a13": "795090ab6548156bccce55ac2dc5cc3f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/6cb7c75d700276e0b93008e394d0b7aab30489": "15529b1b9918f99748c1381dcc117dcd",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/c6c11db2da91abda53763034fca6bc5c448650": "f566f32ecebaef4e837dc0859bead3b2",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/b529a5e7c4cd64882bf8f9111286ba2223cd45": "731fa6fa35e468e2ecb94bca6ca8e4f7",
".git/objects/3c/f10248cf06fb1f9fbf229e3a372cad0a78af06": "8a9ee71bb0d722eb6eea2bc045fb811d",
".git/objects/3f/6d7fa4f251af25bee9de09de458670bef4b74d": "9af133b1ac1081772fcdffaaf989d89a",
".git/objects/42/69b55a5b6ba56ee071a54128b364b7688c7802": "8cedfb754f71f26a6bc507ddbef701b3",
".git/objects/4b/d32b191c8e356ecb8367705b01de98dfe14000": "b1f3156db5aeebf3c3a11610173201e6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/cb299c127a004a0d3dd4f6ce63d6ec2b689888": "43df95a854a7590d8491bfb637cd5f53",
".git/objects/52/ed371adfe61b70ad1223cae7354c95af98f996": "48882a3acbd94b0b2c44e8d79b9215c8",
".git/objects/53/3cd7da7101e8e03d225f749bd7fedd19f5ead0": "2e7ff3b008ad51affdbd6a3f1b46a896",
".git/objects/56/7b7411899375d4362f46220aa2ee7b1a06349f": "a611bc28d36e29e57c0e0e830595a0b9",
".git/objects/65/4768b725093fa9da4872ab2e75bb3e20320d40": "1bb60eb428b73472896bb94c0643fe89",
".git/objects/6a/f23768f81a5ef0ce8ab07d9087be2c38757f77": "8e89ae38868aa547a65a71a5bc989623",
".git/objects/6d/8660026b8474790e63e5b4ece69faeba97362e": "2e44627cbb9bcae9cb7c2a3285192aa4",
".git/objects/73/97bc853d7b0a997436536715e0f39851d20bcc": "f742c237772547fb5f5647d0dbe0aeef",
".git/objects/74/2bc933b8e62b75ed7f848823ec46c3a7aef470": "d7b83585a6fde0966ed75cf8cdf60e53",
".git/objects/74/5dfddec91058fd84115ec08e4870a22b43b257": "cba8c36d1b4fe569507873ffe215165a",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/aea37620eb41d041ab5daa58b31c9d9fec1143": "1e5aedbf9ed4ccb3da9792e8e5848b24",
".git/objects/79/1025539f1f5176567ed5e7bdd20f318c068680": "6207513934366c43e0939c7feba46da9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/f856c4b2a0ed0ed689d3a138385b81c1efaa97": "4de9f90fa6f065ed0ab09516edc56ffc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/ac09be94c2d9efa842e9ed3db8ce7fae490b9e": "0ed4477cc37beb1712aab79d636e1be1",
".git/objects/99/8c220b558aafb23a310af248b6a6b564f557ff": "7db88117fbb3f23bb129b9302c7ba9a2",
".git/objects/9a/52580e9141c37ca38d64425fe221f0bbf386a2": "5ce9b34006da7113cf4382100ffdd4d1",
".git/objects/9e/b082fc163da819926f5c18384b1cfa2088e8db": "66eeda759b28c99de693492651f96813",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/9414e033c3e777e235d0d25dca294ad54d93ee": "f69caf40cd8b75394d73e0f48cd2dfbf",
".git/objects/a8/d5200f97bee5d1675570d5e9750156d48a4507": "1b1e14042cca8ffb0bf2f5b752c86cba",
".git/objects/aa/54fa13b2cf8e1eb4e2eca915c46d042c7abc50": "7288b74531a5b257d4ff5a0a0d753ec3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/6d30f2e1afd0be35d9d57c17fe3535d1e93d59": "4c6a1a77254a694fc7365ecb187cc192",
".git/objects/b6/4f03bafc915ff939790edfe9875fd1e6401196": "bbd56c6305ebd2e1ca0306118ffdc061",
".git/objects/b7/4813e20c6f0a79e43f23ea9a8892919ffc0492": "7ae0496a77e260d9a8e04820e115b71f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/5405478da553d6af072a9b7075d4f23812f061": "3454de25baa4ff077b0906ed7f8ca7e9",
".git/objects/bd/d1844dba5900266d64d08cd8caaee95e064c3f": "782ee86868290a5ef07a352058629493",
".git/objects/bf/e0cb37da5a21b2ef61c019751d1868ba699e8d": "fcc95a3eb9ce38ccdae05d05bfe37a98",
".git/objects/c1/269386e11b10c98fceaa50034f589085e1d7a3": "061f392d2d5579305631670c9286f1d7",
".git/objects/c2/786463c4cfe412f60f7a480db615cad54fda1b": "b665ec6a923e25bfae27d302a7ac82bf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/85c2f51578092c040e9102bdc252b0760c36b0": "675b469176f06196eb1243b32ae07630",
".git/objects/ce/ca51cc1c916e25b6894c4336e604b787858a4d": "9bdaa0ede8976711e783e49eb363f9b5",
".git/objects/cf/d57f9fd8a4f4aa8514fe04fdacd24e9ac6db10": "e0448f5211e62a4df188dae314edf2dd",
".git/objects/d1/f3e4d6f92ea923fad24c4abee42c36f71f5b16": "100c872be5a50d99c33e25ddd4e02dd2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/efaee649dbc5cfeca88bec47b16dba43d0f142": "62ca4ff6652d2c8a69574717fdc87d5a",
".git/objects/d8/7acb754768755565714fe4c9698c3082e8cbda": "6b2dc8d5eb1ce3377bd2b20d470c6aa9",
".git/objects/d8/efbb33995cbf0f50b63a048c50e5949238dd4e": "3b312ed52295b6484d4ccb15cfc2983f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/7831d77ff3184152f76f1540fc17bab3b6f88b": "a499c18ba663ad42fb1a9e4c9a96aca3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/e71ecdbca19ba3be5fe65bcd88e4ce9d331408": "f970f18ad0a5abbb250e7a31956d449e",
".git/objects/f8/ddb7d471aa0c940af0440dc2cafc1522f78bc5": "0b0d8e443e2efe28afc1810aba713da2",
".git/objects/fa/2672d92eb6512d983369222bb134f4c50ab6ba": "a56b1b1a101954ce27042c25e7867e8f",
".git/objects/ff/9d49146a3ce030dd815180193b19f469d046b2": "655826b27e166dbb79ed0b7fa85d147f",
".git/refs/heads/main": "25f722f3228c432c001b26a02284d89b",
".git/refs/remotes/origin/main": "25f722f3228c432c001b26a02284d89b",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "cb29cee7055be718f0ba60372aaa6efd",
"assets/AssetManifest.json": "a71acec17d27eaf36a87a7ea62bba1ae",
"assets/assets/fonts/CustomIcons.ttf": "3c7314d1628cae3b819f50c55049f84e",
"assets/assets/images/app-icon.png": "a30b9fa1ff3b4dd6f51bc1e9e5ca76e1",
"assets/assets/images/blob-orange.png": "c691852037670f8756cbf29fcf4c3bdb",
"assets/assets/images/blob-purple.png": "eb130e6ddfcf3ec233fb2b9a2882acf4",
"assets/assets/images/chain-wallet-alt-preview.png": "70cd44ecfea19acd769bec231ed51ab8",
"assets/assets/images/chain-wallet-preview.png": "baf3cb46b4937c50121c45b33cf85945",
"assets/assets/images/csean-preview.png": "73e67e198102bce4f0a6fbfdc11a9c04",
"assets/assets/images/morningstar-preview.png": "99b0512624f343eb94f2fe4ca8cc54c9",
"assets/assets/images/portfolio-preview.png": "b78ab1fd8059074e6702dafa24effcd7",
"assets/assets/svgs/about-me-image.svg": "dfb8a49945abcdc1c95adbdeba992ab0",
"assets/assets/svgs/header-image.svg": "99892c6355e442995649d38c7f1f2a94",
"assets/assets/svgs/moon.svg": "19a9283f6aa9a3b694b6b8a51cf83934",
"assets/FontManifest.json": "f8ec27312bf02bf4ac4f918c39934293",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d79095048218e114af93f711b20bb2db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "12b1e71f003b58cc73de714fdf6ac77a",
"/": "12b1e71f003b58cc73de714fdf6ac77a",
"main.dart.js": "f4f156702a97f4131fe9c85722587169",
"manifest.json": "06e572e975b8fd4634f1727b3defa40d",
"version.json": "a6bb30921fb89ef2cdddf5ca4b3dd6d4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
