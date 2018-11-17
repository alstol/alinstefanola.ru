var xUtils = {
  sortAlphabetically: function (array) {
    return array.sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })
  }
}
