current_page_id = null;
results_array = null;

function paginate_menu() {
  $("#numbered_buttons_id").empty();
  last_page = Math.ceil(results_array.results.length/3);
  for (i = 1; i <= last_page; i++) {
    x = `<button id="${i}" class="numbered_buttons"> ${i}</button> `;
    $("#numbered_buttons_id").append(x);
  }
}

function process_response(data) {
  console.log("starting process response")
  console.log(data);
  results_array = data;
  for (i = 0; i < data.results.length; i++) {

    $("#results").append(data.results[i].original_title + "<br>" + "<hr>");

    $("#results").append(data.results[i].overview + "<br>");
    x = data.results[i].poster_path
    // console.log(x)
    image_link = `<img src = "https://image.tmbd.org/t/p/w500/${0}" >` //change 0 to i
    $("#results").append(image_link + "<br>");

    z = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> See poster here!</button>`
    $("#results").append("<br>" + z + "<br>");

  }
  paginate_menu();
}


function call_ajax() {
  console.log('hello')
  x = $("#keyword").val()
  $.ajax(
    {
      "url": `https://api.themoviedb.org/3/search/movie?api_key=3a1c352ceb538e6d20367cf55e84803a&query=${x}`,
      "type": "GET",
      "success": process_response
    }
  )
  $("header").show();
}

function display_back_drop() {
  x = $(this).attr("id");
  console.log(`<img src="https://image.tmdb.org/t/p/original${x}" width="100"%>`);
  $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${x}" width="100%">`)
}


function header_button() {
  x = $(this).attr("id"); //this is a uniqe et identifying a the button in this area
  $("#results").html(`<h1> Display(${x}, Page size) </h1>`)
  current_page_id = Number(x);
  $("#prev").show();
  $("#next").show();
}

function first() {
  $("#results").html(`<h1> Display(1, Page size) </h1>`);
  $("#prev").show();

  $("#next").show();
}

function last() {
  $("#results").html(`<h1> Display(7, Page size) </h1>`);
  $("#prev").show();

  $("#next").show();
}

function prev() {
  if (current_page_id > 1)
    current_page_id--;
  $("#results").html(`<h1> Display(${current_page_id}, Page size) </h1> `);
}

function next() {
  if (current_page_id < 7)
    current_page_id++;
  $("#results").html(`<h1> Display(${current_page_id}, Page size) </h1>`);
}
function setup() {
  $("#search").click(call_ajax)

  $("body").on("click", ".backdrop_button", display_back_drop)

  $("body").on("click", ".numbered_buttons_class", header_button);

  $("#first").click(first);

  $("#last").click(last);

  $("#prev").click(prev);

  $("#next").click(next);

  $("#prev").hide();

  $("#next").hide();

  $("header").hide();

}

jQuery(document).ready(setup)