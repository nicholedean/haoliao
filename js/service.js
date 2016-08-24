app.service("apiService", function ($http, $templateCache) {
    this.call = function (url, parameter) {
        url = 'http://54.179.179.164/hackathon.php?callback=JSON_CALLBACK&';
        url += $.param(parameter);
        return $http({method: 'JSONP', url: url, cache: $templateCache}).
        then(function(response) {
            return angular.fromJson(response.data.result);
        }, function(response) {
            return response;
        });
    };
});
