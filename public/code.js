received_data=null;

function process_res(data) {
    received_data = data
    console.log(data) 
    result = ""
    // data can be considered as a dictionary inside a dictionary
    for (i = 0; i < data.length; i++) { //for each unicorn

        result += "<table>"
        result += "<tr>"

        for (field in data[i]) {
            result += "<th>"
            result += field
            result += "</th>"
        }
        result += "</tr>"
        result += "<tr>"

        for (field in data[i]) {
            result += "<td>"

            if (field == "loves") {
                result += "<ul>"
                for (j = 0; j < data[i]["loves"].length; j++) {

                    result += "<li>"
                    result += data[i][field][j]
                    result += "</li>"
                }
                result +="</ul>"
            } else {
                result += data[i][field]
            }
            result += "</td>"
        }
        result += "</tr>"

        result += "</table>"

    }

    // $("#result").html(JSON.stringify(data));
    $("#result").html(result);
}



function findUnicornByName() {
    console.log("findUnicornByName()" + "got called!");
    console.log($("#unicornName").val())

    $.ajax(
        {
            url: " https://arcane-harbor-60742.herokuapp.com/findUnicornByName",
            // url: " http://localhost:5000/findUnicornByName",
            type: "POST",
            data: {
                "unicornName": $("#unicornName").val()
            },
            success: process_res
        }
    )
}

function findUnicornByFood() {
    carrotIsChecked = "unchecked"
    appleIsChecked = "unchecked"
    if ($("#carrot").is(":checked"))
        carrotIsChecked = "checked"

    if ($("#apple").is(":checked"))
        appleIsChecked = "checked"

    $.ajax(
        {
            url: " https://arcane-harbor-60742.herokuapp.com/findUnicornByFood",
            // url: " http://localhost:5000/findUnicornByFood",//playing with the server without deploying
            type: "POST",
            data: {
                "appleIsChecked": appleIsChecked,
                "carrotIsChecked": carrotIsChecked
            },
            success: process_res
        }
    )
}

function findUnicornByWeight() {
    console.log("findUnicornByWeight()" + "got called");
    console.log($("#lowerWeight").val())
    console.log($("#higherWeight").val())

    $.ajax(
        {
            url: " https://arcane-harbor-60742.herokuapp.com/findUnicornByWeight",
            // url: " http://localhost:4000/findUnicornByWeight",
            type: "POST",
            data: {
                "lowerWeight": $("#lowerWeight").val(),
                "higherWeight": $("#higherWeight").val()
            },
            success: process_res
        }
    )
}

function filter() {
    nameIsChecked = "unchecked"
    weightIsChecked = "unchecked"
    if ($("#unicornNameFilter").is(":checked"))
        nameIsChecked = "checked"

    if ($("#unicornWieghtFilter").is(":checked"))
        weightIsChecked = "checked"

    $.ajax(
        {
            url: " https://arcane-harbor-60742.herokuapp.com/filter",
            // url: " http://localhost:4000/filter",//playing with the server without deploying
            type: "POST",
            data: {
                "nameIsChecked": nameIsChecked,
                "weightIsChecked": weightIsChecked
            },
            success: process_res
        }
    )
    

}


function setup() {
    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByFood").click(findUnicornByFood)
    $("#findUnicornByWeight").click(findUnicornByWeight)
    $("#filter").click(filter)
}


$(document).ready(setup)