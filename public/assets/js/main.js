$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let newBurger = { name: $("#burger").val(), devoured: false };
      console.log(newBurger);
      $.ajax('/api/burgers', {
        type: "POST",
        data: newBurger
      }).then(function() {
        location.reload();
      });
    });
  
    $(".eatem").on("click", function(event) {
      event.preventDefault();
      let id = event.target.value;
      $.ajax('/api/burgers/' + id, {
        type: "PUT"
      }).then(function() {
        location.reload();
      });
    });
});