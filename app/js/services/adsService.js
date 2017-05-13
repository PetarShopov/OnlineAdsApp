'use strict';

app.factory('adsService', [
    '$http',
    '$q',
    '$resource',
    'baseServiceUrl',
    function ($http, $q, $resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll': { method: 'GET' }
            }
        );
        return {
            getAds: function (params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }


        // function getAds(params) {
        //     var deferred = $q.defer();

        //     $http.get(baseServiceUrl + '/api/ads')
        //         .then(function (data) {
        //             deferred.resolve(data);
        //         });

        //     return deferred.promise;
        // }

        // return {
        //     getAds: getAds
        // }
    }]);