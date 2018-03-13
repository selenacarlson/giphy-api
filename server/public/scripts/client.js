const app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

const randomController = app.controller('RandomController', ['$http', function($http){
    let self = this;
    self.randomGif = [];

    self.randomClick = function(){
        $http({
            method: 'GET',
            url: '/giphy/random'
        })
        .then( function (response){
            console.log(response.data.data.images.downsized.url);
            self.randomGif = response.data.data.images.downsized.url;
            console.log(response);
            console.log(self.randomGif);
        })
        .catch( function(error){
            console.log(error);
        })
    }
}]) // end random controller

const searchController = app.controller('SearchController', ['$http', function($http){
    let self = this;

    self.searchGif = [];

    self.searchClick = function (search) {
        console.log(search);
    $http({
        method: 'POST',
        url: '/giphy/search',
        data: {search: search}
    }).then(function (response) {
        console.log(response);
        self.searchGif = response.data.data;  
    }).catch(function (error) {
        console.log(error);
    })
}
    
}])
