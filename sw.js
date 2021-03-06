
const cacheName = 'app-static-v1';
// Open up the cache and store chosen code and data inside it
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
         .then(function(cache) {

            return cache.addAll([
              '/',
              '/index.html',
              '/restaurant.html',
              '/css/styles.css',
              '/data/restaurants.json',
              '/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg',
              '/img/5.jpg', '/img/6.jpg', '/img/7.jpg', '/img/8.jpg',
              '/img/9.jpg', '/img/10.jpg',
              '/js/main.js',
              '/js/dbhelper.js',
              '/js/restaurant_info.js'
            ]);
          })
          .catch(function() {
            console.log('Error creating cache!');
          })

  )
});


//https://developers.google.com/web/fundamentals/primers/service-workers/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log("Response fetched from cache!");
          return response;
        }
        //else fetch from network
        return fetch(event.request)
          .then(function(response) {
            // if response not valid, return it without caching
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            //else if response is valid :
            //clone the response, so that if the app goes Offline
            //the service worker can respond with this cached response
            let responseClone = response.clone();

            caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, responseClone);
              });
              console.log("Response cloned and cached!");
            return response;
          }
        );
      })
    );
});
