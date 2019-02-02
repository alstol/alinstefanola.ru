var socialMedia = new Vue({
  el: '#socialLinks',
  data: {
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/xShteff',
        cname: 'github',
        target: '_blank'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alinstefanolaru',
        cname: 'linkedin',
        target: '_blank'
      },
      /* {
                "name": "Facebook",
                "url":"https://www.facebook.com/DoNotTryThis",
                "cname":"facebook",
                "target":"_blank"
             },
             {
                "name": "Skype",
                "url":"skype:alin_shtefan?chat",
                "cname":"skype",
                "target":"_blank"
             }, */
      {
        name: 'Email',
        url: 'mailto:alinstefanolaru@gmail.com?subject=Hello!',
        cname: 'email',
        target: '_top'
      }
    ]
  }
})
