var cmdCountNum = 0;
var prompt = function () {
  var host = db.getMongo().host;
  var database = db.getName();
  cmdCountNum++;
  return host + ':' + database + ' (' + cmdCountNum + ')> ';
}
