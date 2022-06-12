'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
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
".git/index": "ed8b8bbb366f9f795545e03dd49d4fbb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d64845ba92315f23638ab9162b60eede",
".git/logs/refs/heads/main": "bd9b35364945f56093f60742780c7946",
".git/logs/refs/remotes/origin/main": "305d9e71072abf766e7696385fa83c6b",
".git/objects/0b/ef23f1b9c9db35c9e3ef198acf7460b507ceca": "9f29c0d8728965c59d84eefc5548c8cf",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1a/168a6de117ef9a6080117eb2f9384c9bf65a0a": "74b55987b48b2a9098e295f232a7b962",
".git/objects/1e/ed7587e0c3871ff4f127e48069684424f7c3f1": "3bdceaf7f0bdb6a133f53df22d04f779",
".git/objects/22/9f70bc094e7436e74476d985de4a2fddc38a13": "795090ab6548156bccce55ac2dc5cc3f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/c6c11db2da91abda53763034fca6bc5c448650": "f566f32ecebaef4e837dc0859bead3b2",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3f/6d7fa4f251af25bee9de09de458670bef4b74d": "9af133b1ac1081772fcdffaaf989d89a",
".git/objects/42/69b55a5b6ba56ee071a54128b364b7688c7802": "8cedfb754f71f26a6bc507ddbef701b3",
".git/objects/4b/d32b191c8e356ecb8367705b01de98dfe14000": "b1f3156db5aeebf3c3a11610173201e6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/3cd7da7101e8e03d225f749bd7fedd19f5ead0": "2e7ff3b008ad51affdbd6a3f1b46a896",
".git/objects/56/7b7411899375d4362f46220aa2ee7b1a06349f": "a611bc28d36e29e57c0e0e830595a0b9",
".git/objects/65/4768b725093fa9da4872ab2e75bb3e20320d40": "1bb60eb428b73472896bb94c0643fe89",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/aea37620eb41d041ab5daa58b31c9d9fec1143": "1e5aedbf9ed4ccb3da9792e8e5848b24",
".git/objects/79/1025539f1f5176567ed5e7bdd20f318c068680": "6207513934366c43e0939c7feba46da9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/ac09be94c2d9efa842e9ed3db8ce7fae490b9e": "0ed4477cc37beb1712aab79d636e1be1",
".git/objects/99/8c220b558aafb23a310af248b6a6b564f557ff": "7db88117fbb3f23bb129b9302c7ba9a2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/d5200f97bee5d1675570d5e9750156d48a4507": "1b1e14042cca8ffb0bf2f5b752c86cba",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/5405478da553d6af072a9b7075d4f23812f061": "3454de25baa4ff077b0906ed7f8ca7e9",
".git/objects/c2/786463c4cfe412f60f7a480db615cad54fda1b": "b665ec6a923e25bfae27d302a7ac82bf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/85c2f51578092c040e9102bdc252b0760c36b0": "675b469176f06196eb1243b32ae07630",
".git/objects/cf/d57f9fd8a4f4aa8514fe04fdacd24e9ac6db10": "e0448f5211e62a4df188dae314edf2dd",
".git/objects/d1/f3e4d6f92ea923fad24c4abee42c36f71f5b16": "100c872be5a50d99c33e25ddd4e02dd2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/efaee649dbc5cfeca88bec47b16dba43d0f142": "62ca4ff6652d2c8a69574717fdc87d5a",
".git/objects/d8/efbb33995cbf0f50b63a048c50e5949238dd4e": "3b312ed52295b6484d4ccb15cfc2983f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/7831d77ff3184152f76f1540fc17bab3b6f88b": "a499c18ba663ad42fb1a9e4c9a96aca3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/e71ecdbca19ba3be5fe65bcd88e4ce9d331408": "f970f18ad0a5abbb250e7a31956d449e",
".git/objects/fa/2672d92eb6512d983369222bb134f4c50ab6ba": "a56b1b1a101954ce27042c25e7867e8f",
".git/refs/heads/main": "e925f7b4db5203ec7658e013143afb1c",
".git/refs/remotes/origin/main": "e925f7b4db5203ec7658e013143afb1c",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "83c0bb1f3ce79b612954b19b1afba4db",
"assets/AssetManifest.json": "d4f4ba5884725a0b3006b15bbfd6bef4",
"assets/assets/fonts/CustomIcons.ttf": "3c7314d1628cae3b819f50c55049f84e",
"assets/assets/images/app-icon.png": "a30b9fa1ff3b4dd6f51bc1e9e5ca76e1",
"assets/assets/images/blob-orange.png": "c691852037670f8756cbf29fcf4c3bdb",
"assets/assets/images/blob-purple.png": "eb130e6ddfcf3ec233fb2b9a2882acf4",
"assets/assets/images/chain-wallet-preview.png": "9eee4f20a5ac1efd8218a18ea01d9344",
"assets/assets/images/csean-preview.png": "73e67e198102bce4f0a6fbfdc11a9c04",
"assets/assets/images/morningstar-preview.png": "99b0512624f343eb94f2fe4ca8cc54c9",
"assets/assets/images/portfolio-preview.png": "b78ab1fd8059074e6702dafa24effcd7",
"assets/assets/svgs/about-me-image.svg": "dfb8a49945abcdc1c95adbdeba992ab0",
"assets/assets/svgs/header-image.svg": "99892c6355e442995649d38c7f1f2a94",
"assets/assets/svgs/moon.svg": "19a9283f6aa9a3b694b6b8a51cf83934",
"assets/FontManifest.json": "f8ec27312bf02bf4ac4f918c39934293",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "65c498123d03bebe14dd086b2a45d182",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "1a32f00ef925986e8fce935f36946304",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c84d7e8228ff2646229a4718c25d7044",
"/": "c84d7e8228ff2646229a4718c25d7044",
"main.dart.js": "82c6250085750da2376a91cde6c86741",
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
