$(function() {
  $("#animal").submit(function(event) {
    // var animal = $("input:radio[name=animal]:checked").val();

    if ($("input:radio[name=animal]:checked").val() === "Koala") {
      $("#koala").fadeIn(2000);
      $("#kangaroo").hide();
      $("#platypus").hide();
    }
    else if ($("input:radio[name=animal]:checked").val() === "Platypus") {
      $("#platypus").fadeIn(2000);
      $("#kangaroo").hide();
      $("#koala").hide();
    }
    else if($("input:radio[name=animal]:checked").val() === "Kangaroo") {
      $("#kangaroo").fadeIn(2000);
      $("#koala").hide();
      $("#platypus").hide();
      }
    event.preventDefault();
  });
});
