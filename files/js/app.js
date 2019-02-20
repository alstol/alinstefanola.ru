class TPost {
  constructor (avatar, name, nickname, date, content, hashtags) {
    this.avatar = avatar
    this.name = name
    this.nickname = nickname
    this.date = date
    this.content = content
    this.hashtags = hashtags
  }
}

var app = new Vue({
  el: '#main-content',
  data: {
    experience: [
      {
        avatar: 'https://avatars1.githubusercontent.com/u/9394141?s=460&v=4',
        name: 'LEGO Group',
        nickname: '@LEGO_Group',
        date: 'Sep 2018',
        content: 'Has joined LEGO Group as a Junior Application Engineer!',
        hashtags: ['#frontend', '#angular', '#java']
      },
      {
        avatar: 'https://avatars1.githubusercontent.com/u/9394141?s=460&v=4',
        name: 'EConGrid',
        nickname: '',
        date: 'Feb 2017',
        content: 'Became a Student Software Developer!',
        hashtags: ['#frontend']
      },
      {
        avatar: 'https://avatars1.githubusercontent.com/u/9394141?s=460&v=4',
        name: 'EConGrid',
        nickname: '',
        date: 'Aug 2016',
        content: 'Happy to become a Software Engineering intern at EConGrid!',
        hashtags: ['#frontend']
      }
    ]
  },
  methods: {}
})

$(document).ready(() => {
  $(window).scroll(function (a) {
    var scroll = $(document).scrollTop()
    var height = $('body').height()
    if (scroll > 510) {
      $('.headshot').addClass('toggled')
      $('.mini-stats .mini-avatar').removeClass('toggled')
      $('.mini-stats .name').removeClass('toggled')
      // $('nav.bottom').addClass('fixed')
    } else {
      $('.headshot').removeClass('toggled')
      $('.mini-stats .mini-avatar').addClass('toggled')
      $('.mini-stats .name').addClass('toggled')
      $('nav.bottom').removeClass('fixed')
    }
    console.log(`${scroll} - ${height}`)
    console.log(scroll > height)
    if (scroll > 545) {
    } else {
    }
  })
})
