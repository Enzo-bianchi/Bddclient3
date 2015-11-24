// Here we get the module we created in file one
var appControllers = angular.module('TD3Controller', [])

// We are adding a function called Ctrl1
// to the module we got in the line above
.controller('CtrlPrincipal', CtrlPrincipal)
    .controller('CtrlUser', CtrlUser);
// Inject my dependencies
CtrlPrincipal.$inject = ['$scope'];
CtrlUser.$inject = ['$scope', '$http', 'Flash'];

function CtrlPrincipal($scope) {

}

function CtrlUser($scope, $http, Flash) {
    var baseAPI = "https://api.github.com"
    $scope.user = null;
    $scope.recupUser = function() {

        $http.get(baseAPI + "/users/" + $scope.pseudo)
            .success(function(data) {
                $scope.user = data;
                console.log(data);
                var message = 'Le pseudo <strong>' + $scope.pseudo +
                    '</strong> à été trouvé !';
                Flash.create('success', message);
            })
            .error(function(err, status) {
                if (status === 404) {
                    var message = 'Le pseudo <strong>' + $scope.pseudo +
                        '</strong> n\'a pas à été trouvé !';
                    Flash.create('danger', message);
                }
            });
    }
}
