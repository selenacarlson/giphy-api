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
    const url = 'http://api.giphy.com/v1/gifs/search?q='
    const limit = '&limit=20';
    self.searchGif = [];


    self.searchClick = function (search) {
    $http({
        method:'GET',
        url:`${url}${search}${key}`
    }).then(function (response) {
        console.log(response);
        self.searchGif = response.data.data;
        console.log(self.searchGif.length);
        
    }).catch(function (error) {
        console.log(error);
    })
}
    
}])
