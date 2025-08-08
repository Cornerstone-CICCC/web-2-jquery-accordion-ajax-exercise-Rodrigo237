$(function() {
  // your code here
  $(".accordion .accordion-header").on("click", function () {
  $(".accordion .accordion-content").not($(this).next()).slideUp();

  $(this).next(".accordion-content").slideToggle("fast", function () {
    console.log("Section toggled");
  });
  });

  $('.todos').on('click', function() {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function(response) {
        const todos = response.todos
        buildTodoList(todos)
      },
      error: function(err) {
        console.error(err)
      }
    })
  })
})

function buildTodoList(arr) {
    const list = $('.todos ul')
    let liHtml = '' // store list
    arr.forEach(el => {
      liHtml += `<li>${el.todo}</li>` // concatenate li into variable
    })
    list.html(liHtml)
  }
