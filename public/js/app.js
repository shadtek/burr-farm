angular.module('burr', ['firebase'])

.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'https://burrfamilyfarm.firebaseio.com/**',
   'http://i*.imgur.com/**',
   'http://utahrenfaire.org/**'
   ]);
 })