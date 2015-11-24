var app = angular.module("TD3", ['ngRoute',
    'TD3Controller', 'flash'
])

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/user', {
            templateUrl: 'user.html',
            controller: 'CtrlUser'
        }).otherwise({
            redirectTo: '/user'
        });
    }
]);
