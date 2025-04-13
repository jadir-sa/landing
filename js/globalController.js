angular.module('JadirApp', [])
    .controller('globalController', function ($scope, $http) {
        $scope.lang = lang;
        $scope.toastifyPosition = "left";
        if ($scope.lang == "en") {
            $scope.toastifyPosition = "right";
        }
        $scope.notificationList = notifications;
        console.log($scope.notificationList)
        $scope.unseenCount = unseenCount;
        $scope.isLoggedIn = isLoggedIn;
        $scope.isLoading = false;
        $scope.email = "";
        $scope.subscribe = function () {
            if (!$scope.email) {
                Swal(_ERROR_TITLE, _INVALID_DATA, "error");   
                return;
            }
            var model = {};
            model.Email = $scope.email;
            $scope.isLoading = true;
            var response = $http({
                method: "Post",
                url: appUrl + "api/Global/Subscribe",
                data: model,
                headers: {
                    "Content-Type": "application/json"
                } 
            });
            response.then(function (response) {
                //success
                $scope.isLoading = false;
                Swal(_SUCCESS_TITLE, _SUCCESS_MSG, "success");   
                $scope.email = "";
            }, function () {
                //fail
                $scope.isLoading = false;
                Swal(_ERROR_TITLE, _ERROR_MGS, "error");   
            });

        };
        connection.on("PushNotification", function (notification) {
            $scope.notificationList.unshift(notification);
            Toastify({
                text: notification.NotificationBody,
                duration: 10000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: toastifyPosition, // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        });

        //connection.on("PushNotification", function (notification) {
        //    Toastify({
        //        text: "This is a toast",
        //        duration: 10000,
        //        destination: "https://github.com/apvarun/toastify-js",
        //        newWindow: true,
        //        close: true,
        //        gravity: "bottom", // `top` or `bottom`
        //        position: "left", // `left`, `center` or `right`
        //        stopOnFocus: true, // Prevents dismissing of toast on hover
        //        style: {
        //            background: "linear-gradient(to right, #00b09b, #96c93d)",
        //        },
        //        onClick: function () { } // Callback after click
        //    }).showToast();
        //});
    });