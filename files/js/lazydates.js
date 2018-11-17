/*
    I'm too lazy to update the website every year with the correct dates,
    therefore I have made this script to assist me.
*/
$(document).ready(() => {
  var now = new Date()
  var bday = new Date(1995, 2, 19)
  var diff = now.getTime() - bday.getTime()
  $('#currentYear').text(now.getFullYear())
  $('#age').text(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))) // I'm 12 btw haHAA
})
