var ghData = [];

var angularApp = angular.module("angularApp", []);

angularApp.controller("navbarController", ($scope) => {
    $scope.menuItems = [
        new MenuItem("#intro", "About"),
        new MenuItem("#education", "Education"),
        new MenuItem("#knowledge", "Knowledge"),
        new MenuItem("#experience", "Experience"),
        new MenuItem("#starredgithub", "Demos"),
    ]
});

angularApp.controller("cvController", ($scope, $http) => {
    $scope.data = {
        name: "Alin Stefan Olaru",
        email: "alinstefanolaru@gmail.com",
        image: "",
        ghData: []
    }

    $scope.skills = {
        keys: {
            basic: "Desktop/Mobile",
            web: "Web-Technologies",
            tools: "Tools",
            other: "Other"
        },
        data: barsData
    }

    $scope.education = [{
        uniLogo: "https://alinstefanola.ru/files/images/companies/VIA.png",
        uniName: "VIA University College",
        studyField: "Bachelor of ICT Engineering",
        date: {
            from: "Aug 2014",
            until: "Feb 2018"
        }
    }];

    $scope.workExperience = experienceData;
        
    $scope.loadGitHubData = () => {
        $http.get("https://api.github.com/users/xShteff/starred").then((result) => {
            $scope.data.ghData = result.data.filter(data => data.owner.login === "xShteff");
            $scope.data.image = $scope.data.ghData[0].owner.avatar_url;
        });
    }
});

angularApp.controller("socialMediaController", ($scope) => {
    $scope.socialMedia = socialMediaData;
});
