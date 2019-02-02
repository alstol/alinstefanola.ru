class ImagePreloader {
  constructor () {
    this.paths = []
    this.init()
  }
  collectUrls () {
    for (var i = 0; i < experienceData.length; i++) {
      this.paths.push(`${experienceData[i].companyLogo}`)
    }
  }

  preloadImages (arrayOfPaths) {
    $(arrayOfPaths).each(function () {
      $('<img />').attr('src', this)
    })
  }

  init () {
    this.collectUrls()
    this.preloadImages(this.paths)
  }
}

var imgpreloader = new ImagePreloader()
