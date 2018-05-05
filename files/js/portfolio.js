/* 
    Figured out a small way of cheating data here. 
    Github apparently provides an API to fetch all starred repos by an user. 
    I'm shamelessly starring my own repos that I want to feature on my website,
    then I fetch them with an API provided by GitHub.
    I should probably find a better way of doing this but meh. 
*/
var ghData = [];

var fetchGithubData = () => {
    $.getJSON('https://api.github.com/users/xShteff/starred', (result) => {
        ghData = result.filter(data => data.owner.login === "xShteff");
        var portfolio = new Vue({
            el: '#portfolio',
            data: {
                selfStarred: ghData
            }
        })
    })
}

fetchGithubData();

