$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let newBurger = { name: $("#burger").val() };
      console.log(newBurger);
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("new burger added");
        location.reload();
      });
    });
  
    $(".devourerer").on("click", function(event) {
      event.preventDefault();
      let id = event.target.value;
      console.log(event);
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(function() {
        location.reload();
      });
    });
});