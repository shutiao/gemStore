 (function() {
  var app = angular.module('gemStore', []);
  
  app.controller('StoreController', ['$http', function($http){
                 var store = this;
                 store.products = [];
                 $http.get('/products.json').success(function(data){
                   store.products = data;
                 });
                 }]);

  app.directive('productTitle', function(){
    return{
      restrict: 'E',
      templateUrl:'./views/product-title.html'
    };
  })
  
  app.directive('productGallery', function(){
    return{
      restrict: 'E',
      templateUrl:'./views/product-gallery.html',
      controller: function(){
                    this.current = 0;
                    this.setCurrent = function(newGallery){
                      this.current = newGallery || 0;
                    };
      },
      controllerAs: 'gallery'
    };
  });
  
  app.directive('productDetail', function(){
    return{
      restrict: "E",
      templateUrl:'./views/product-detail.html',
      controller:function(){
        this.tab = 0;
        this.selectTab = function(setTab){
          this.tab = setTab;
        }
        this.isSelected = function(tabQuery){
          if(this.tab == tabQuery) return true;
          return false;
        }
        this.printStar = function(rating){
          var stars;
          for(var i = 0; i < rating; i++){
            stars += '&#9733';
          }
          return stars;
        }
      },
      controllerAs: 'panelCtrl'
    };
    });
 })();

