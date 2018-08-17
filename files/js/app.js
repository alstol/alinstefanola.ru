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

angularApp.controller("asideController", ($scope, $http) => {
    $scope.data = {
        name: "Alin Stefan Olaru",
        email: "alinstefanolaru@gmail.com",
        skills: barsData,
        image: "",
        ghData: []
    }
    
    $scope.loadGitHubData = () => {
        $http.get("https://api.github.com/users/xShteff/starred").then((result) => {
        console.log(result);    
        $scope.data.ghData = result.data.filter(data => data.owner.login === "xShteff");
            $scope.data.image = $scope.data.ghData[0].owner.avatar_url;
        })
    }
});

angularApp.controller("mainController", ($scope) => {
    $scope.workExperience = experienceData;
})

angularApp.controller("socialMediaController", ($scope) => {
    $scope.socialMedia = socialMediaData;
});
