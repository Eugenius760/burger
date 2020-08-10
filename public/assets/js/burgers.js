$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = {
      devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured,
    }).then(function () {
      console.log("changed status to", devoured);
      location.reload();
    });
  });
});
