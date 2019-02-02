/*
    Figured out a small way of cheating data here.
    Github apparently provides an API to fetch all starred repos by an user.
    I'm shamelessly starring my own repos that I want to feature on my website,
    then I fetch them with an API provided by GitHub.
    I should probably find a better way of doing this but meh.
*/
var ghData = []

var fetchGithubData = () => {
  $.getJSON('https://api.github.com/users/alstol/starred', result => {
    ghData = result.filter(data => data.owner.login === 'alstol')
    var portfolio = new Vue({
      el: '#demos',
      data: {
        selfStarred: ghData,
        slider: new Slider(ghData.length + 1), //
        selected: 0
      },
      methods: {
        next: function () {
          this.slider.next()
          this.selected = this.slider.getCurrentData()
        },
        prev: function () {
          this.slider.prev()
          this.selected = this.slider.getCurrentData()
        }
      }
    })
    // Might as well do a 2-in-1 and include a recent picture of my face somewhere...
    var avatar = new Vue({
      el: '#intro',
      data: {
        avatar: ghData[0].owner.avatar_url
      }
    })
  })
}

fetchGithubData()
