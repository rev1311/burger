$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let newBurger = { name: $("#burger").val(), devoured: false };
      console.log(newBurger);
      $.post('/api/burgers', newBurger) 
      .then(function() {
        location.reload();
      });
    });
  
    $(".eatem").on("click", function(event) {
      event.preventDefault();
      let id = event.target.value;
      let newDevState = {
        devoured: true 
      };
      $.ajax('/api/burgers/' + id, {
        type: "PUT",
        data: newDevState
      }).then(function() {
        location.reload();
      });
    });
});