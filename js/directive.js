app.directive("ssWebView", function() {
    return {
        restrict: 'E',
        templateUrl: defaultParam.webViewBase + "menu.html",
        replace: true,
        scope: {
            paginator: "=ssPaginatorConfig"
        },
        link: function (scope, element, attr) {
            console.log('dfsdf');
        }
    };
});

