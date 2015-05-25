var app = angular.module('app', ['ui.router', 'controllers','directives','zeroclipboard']);

app.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

app.config(function($stateProvider, $urlRouterProvider,uiZeroclipConfigProvider) {
    uiZeroclipConfigProvider.setZcConf({
      swfPath: 'frameworks/zeroclipboard/dist/ZeroClipboard.swf'
    });
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
    })
    .state('zoom', {
        url: '/zoom',
        views: {
            '': {
                templateUrl: 'views/home.html'
            },
            'command@zoom': {
                templateUrl: 'views/command.html'
            },
            'menu@zoom': {
                templateUrl: 'views/menu.html'
            },
            'content@zoom': {
                templateUrl: 'views/zoom.html'
            }
        }
    })
    .state('mask', {
        url: '/mask',
        views: {
            '': {
                templateUrl: 'views/home.html'
            },
            'command@mask': {
                templateUrl: 'views/command.html'
            },
            'menu@mask': {
                templateUrl: 'views/menu.html'
            },
            'content@mask': {
                templateUrl: 'views/mask.html'
            }
        }
    })
    .state('format', {
        url: '/format',
        views: {
            '': {
                templateUrl: 'views/home.html'
            },
            'command@format': {
                templateUrl: 'views/command.html'
            },
            'menu@format': {
                templateUrl: 'views/menu.html'
            },
            'content@format': {
                templateUrl: 'views/format.html'
            }
        }
    })
    .state('apiDemo', {
        url: '/apiDemo',
        views: {
            '': {
                templateUrl: 'views/apiHome.html'
            },
            'menu@apiDemo': {
                templateUrl: 'views/menu.html'
            },
            'content@apiDemo': {
                templateUrl: 'views/apiDemo.html'
            }
        }
    })
    .state('tools', {
        url: '/tools',
        views: {
            '': {
                templateUrl: 'views/apiHome.html'
            },
            'menu@tools': {
                templateUrl: 'views/menu.html'
            },
            'content@tools': {
                templateUrl: 'views/tools.html'
            }
        }
    });
});