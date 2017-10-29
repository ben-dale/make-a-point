$(document).ready(function() {
  $("#input").on("keyup", function() {
    var text = $("#input").val().split(' ').join(' ' + String.fromCodePoint(128079) + ' ');
    if (text.length > 0) {
      text += (' ' + String.fromCodePoint(128079) + ' ');
    }
    $("#output").val(text);
  });
});