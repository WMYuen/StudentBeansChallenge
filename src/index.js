var http = require("http");
var moment = require("moment");
moment().format();

http
  .createServer(function(req, res) {
    var dates = [];
    var i = 0;

    res.setHeader("Content-disposition", "attachment; filename=dates.CSV");
    res.setHeader("Content-Type", "text/csv");
    res.write("Day,Date\n");

    while (i < getDates().length) {
      // While i is less than the No. of values in getDates() then
      dates[i] = getDates()[i]; // populate dates array
      res.write(dates[i] + "\n");
      i++;
    }
    res.end();
  })
  .listen(8080);

function getDates() {
  var start = moment("2019-01-01", "YYYY MM DD").format();
  var end = moment("2019-12-31", "YYYY MM DD").format();
  var dates = [];
  var current = moment(start).format(); //Clone of 'start'

  if (moment(start).isoWeekday() !== 1) {
    current = moment(current).day(1); //Set 'current' day to monday
    current.add(1, "w"); //Add 1 week.
  }
  while (moment(current).isBefore(end)) {
    //While 'current' date is before 'end' date do
    dates.push(current.clone().format("dddd, Do MMMM YYYY")); //Store 'current' into array.
    current.add(2, "w"); // Add 2 weeks onto 'current' date.
  }

  return dates;
}
