function process_response(data) {
    console.log(data);
    for (i = 0; i < data.result.length; i++) {
        
        $("#results").append(data.results[i].original_title + "<br>"+ "<hr>");

        $("#results").append(data.results[i].overview + "<br>");
        x = data.results[i].poster_path
        console.log(x)
        image_link = `<img src = https://image.tmbd.org/t/p/w500/${x} >`
        $("#result").append(image_link + '<br>');

        z = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`
        $("#results").append(z + "<br>");

    }

}


function call_ajax() {
    console.log('hello')
    x = $("#keyword").val()
    $.ajax(
        {
            "url": `https://api.themoviedb.org/3/search/movie?api_key=3a1c352ceb538e6d20367cf55e84803a&query=${x}`,
            "type":"get",
            "success": process_response
        }
    )
}

function display_back_drop() {
    x = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${x}" width="100"%>`);
    $("#right_poster").html(`<img src="https://image.tmdb.org/t/p/original${x}" width="100%">`)
}


function setup() {
    // alert();
    $("#search").click(call_ajax)
    $("body").on("click", ".backdrop_button", display_back_drop)
}

jQuery(document).ready(setup)