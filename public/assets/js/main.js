$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let newBurger = { name: $("#newburger").val(), devoured: 0 };
      console.log(newBurger);
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        location.reload();
      });
    });
  
    $(".eatem").on("click", function(event) {
      event.preventDefault();
      let id = $(this).data("id");
      let newDevState = {
        devoured: 1 
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevState
      }).then(function() {
        location.reload();
      });
    });

    $(".del").on("click", function(event) {
      event.preventDefault(); 
      let id = $(this).data("id"); 
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    })
});