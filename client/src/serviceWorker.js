navigator.serviceWorker.register("./service-worker.js")
const APP_PREFIX = 'Group-Project3';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
    "./index.html",
    "./assets/css/style.css",
    "./assets/css/bootstrap.css",
    "./client/src/index.css",
    "./client/src/App.js",
    "./dist/app.bundle.js",
    "./client/src/index.js",
    "./client/src/components/Features/index.js",
    "./client/src/components/Footer/index.js",
    "./client/src/components/Header/index.js",
    "./client/src/components/HeroSlider/index.js",
    "./client/src/components/Modal/index.js",
    "./client/src/components/ModalButton/index.js",
    "./client/src/components/ModalContent/index.js",
    "./client/src/components/Reviews/index.js",
    "./client/src/pages/Collection.js",
    "./client/src/pages/Discover.js",
    "./client/src/pages/Home.js",
    "./client/src/pages/Login.js",
    "./client/src/pages/SignUp.js",
    "./client/src/utils/auth.js",
    "./client/src/assets/images/gaming-pc.jpg",
    "./client/src/assets/images/marioLand.jpg",
    "./client/src/assets/images/ps4Controller-purple.jpg",
    "./client/src/assets/images/retroPc.jpg",
    "./client/src/assets/images/vrAtSunset.jpg",
];

// Respond with cached resources
self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) { // if cache is available, respond with cache
                console.log('responding with cache : ' + e.request.url)
                return request
            } else {       // if there are no cache, try fetching request
                console.log('file is not cached, fetching : ' + e.request.url)
                return fetch(e.request)
            }
        })
    )
})

// Cache resources
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            // `keyList` contains all cache names under your username.github.io
            // filter out ones that has this app prefix to create keeplist
            let cacheKeeplist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX);
            });
            // add current cache name to keeplist
            cacheKeeplist.push(CACHE_NAME);

            return Promise.all(
                keyList.map(function (key, i) {
                    if (cacheKeeplist.indexOf(key) === -1) {
                        console.log('deleting cache : ' + keyList[i]);
                        return caches.delete(keyList[i]);
                    }
                })
            );
        })
    );
});