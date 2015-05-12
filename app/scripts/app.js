var app = angular.module('app', ['ui.router', 'controllers']);

app.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/cute');
    $stateProvider
        .state('cute', {
            url: '/cute',
            views: {
                '': {
                    templateUrl: 'views/home.html'
                },
                'command@cute': {
                    templateUrl: 'views/command.html'
                },
                'menu@cute': {
                    templateUrl: 'views/menu.html'
                },
                'content@cute': {
                    templateUrl: 'views/cute.html'
                }
            }
    });
});