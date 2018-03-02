var setDates = function() {
    var now = new Date();
    var bday = new Date(1995, 2, 19);
    var diff = now.getTime() - bday.getTime();
    $('#age').text(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)));
    $('#currentYear').text(now.getFullYear());
}