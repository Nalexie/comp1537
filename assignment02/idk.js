function process_response(data) {
    console.log(data);
    for (i = 0; i < data.results.length; i++) {
        $("#results").append(data.results[i].original_title + "<br>");

        $("#results").append(data.results[i].overview + "<br>");


        x = data.results[i].poster_path
        console.log(x)
        y = `<img src = https://image.tmbd.org/t/p/w500/${x} >`
        $("#results").append(y);

    }

}


function call_ajax() {
    console.log('hello')
    x = $("#keyword").val()
    $.ajax(
        {
            "url": `https://api.themoviedb.org/3/search/company?api_key=5ec893b3e3d707975e10b3b8f17d4f3b&query=${x}`,
            "type": "get",
            "success": process_response
        }
    )
}

function setup() {
    $("#search").click(call_ajax)
}

jQuery(document).ready(setup) 