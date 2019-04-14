
// Open up the cache and store chosen code and data inside it
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app-static-v1')
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

//use the cache to respond to event requests
self.addEventListener('fetch', function(event) {
  //console.log('Fetch:'+event.request);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response){
         console.log("Response fetched from cache!");
         return response; //if response found in cache, return response
       }
      else {
        console.log("Response fetched from network.");
        fetch(event.request); //else fetch response from the network

      }
    })
  )
});
