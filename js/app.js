var mri = angular.module( 'mrisaacs', ['ngRoute'] )
    .config( function( $routeProvider, $locationProvider, $interpolateProvider, $httpProvider ) {
        $httpProvider.defaults.headers.common[ 'Content-Type' ] = 'application/json; charset=utf-8';

        $routeProvider.when( '/' , {
            templateUrl : 'html/main-article.html',
            controller  : 'MainArticleCtrl'
        });

        $locationProvider
            .html5Mode( true )
            .hashPrefix( '!' );

        $interpolateProvider.startSymbol( '{[{' );
        $interpolateProvider.endSymbol( '}]}' );
});

mri.controller('MainArticleCtrl', function( $scope, $http ) {
    $http.get( 'data/articles.json' )
    .success( function( response, status, headers, config ) {
        console.log( response );

        $scope.main = {
            title : response.title,
            body  : response. body
        };
    });
});