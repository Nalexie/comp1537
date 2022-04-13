const express = require('express')
const app = express()

// app.listen(5000, function (err) {
//     if (err) console.log(err);
// })

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// })

// app.get('/code.js', function(req, res) {
//     res.sendFile(__dirname + "/code.js");
// })

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://na_lexie:Comp1537@cluster0.3s2o1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });
const unicornSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    loves: [String]
});
const unicornModel = mongoose.model("unicorns", unicornSchema);


app.post("/findUnicornByName", function (req, res) {
    console.log("request recieved")
    console.log(req.body.unicornName)

    unicornModel.find({ name: req.body.unicornName }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });
})

app.use(express.static("./public"))


app.post("/findUnicornByFood", function (req, res) {
    console.log("request recieved")
    console.log(req.body.appleIsChecked)
    console.log(req.body.carrotIsChecked)
    aList = []
    if (req.body.appleIsChecked == "checked")
        aList.push("apple")

    if (req.body.carrotIsChecked == "checked")
        aList.push("carrot")

    unicornModel.find({
        $or: [
            { loves: { $in: aList } },

            { $and: [{ loves: "apple" }, { loves: "carrot" }] }
        ]
    }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.json(unicorns);
    });
})

app.post("/findUnicornByWeight", function (req, res) {
    console.log("request recieved weighting")
    console.log(req.body.lowerWeight)
    console.log(req.body.higherWeight)

    unicornModel.find({ "weight": { "$gt": req.body.lowerWeight, "$lte": req.body.higherWeight } }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });
})


app.post("/filter", function (req, res) {
    console.log("request recieved")
    console.log(req.body.nameIsChecked)
    console.log(req.body.weightIsChecked)
    aList = ''
    aString = ''
    if (req.body.nameIsChecked == "checked")
        aList = "name"

    if (req.body.weightIsChecked == "checked")
        aString="weight"

       
        unicornModel.find({
             $query: {}, $orderby: { aList : -1 , aString:-1} 
            }, function (err, unicorns) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Data " + unicorns);
            }
            res.json(unicorns);
        });
    // mapped_data = aList.map(f_)
    // $("#result").html(aList);

})