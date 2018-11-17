var skills = new Vue({
  el: '#skills',
  data: {
    main: [
      {
        name: 'JavaScript',
        value: 100,
        style: 'width: 100%;'
      },
      {
        name: 'C#',
        value: 90,
        style: 'width: 90%;'
      },
      {
        name: '.NET Core',
        value: 80,
        style: 'width: 80%;'
      },
      {
        name: 'Java',
        value: 80,
        style: 'width: 80%;'
      },
      {
        name: 'SQL',
        value: 50,
        style: 'width: 50%;'
      }
    ],
    keywords: xUtils.sortAlphabetically([
      'JQuery',
      'HTML5',
      'CSS3',
      'TypeScript',
      '.NET Framework',
      'Angular',
      'React',
      'PHP',
      'JIRA',
      'Git',
      'Adobe Photoshop',
      'Web Development',
      'Software Development',
      'AR/VR Development'
    ])
  }
})
