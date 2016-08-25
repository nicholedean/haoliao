app.service("apiService", function ($http, $templateCache) {
    this.call = function (sql) {
        var url = 'http://54.179.179.164/hackathon.php?callback=JSON_CALLBACK&sql=';
        url += encodeURIComponent(sql);
        return $http({method: 'JSONP', url: url, cache: $templateCache}).
        then(function(response) {
            return angular.fromJson(response.data.result);
        }, function(response) {
            return response;
        });
    };
});
