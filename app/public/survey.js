
$.material.init();

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-primary";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");



const json = { pages: [
        {questions: [

            {
                name: "name",
                type: "text",
                title: "Please enter your name:",
                placeHolder: "Jon Snow",
                isRequired: true
            },

            { type: "matrix", name: "answers", title: "Please indicate if you agree or disagree with the following statements",
                columns: [{ value: 1, text: "Strongly Disagree" }, 
                          { value: 2, text: "Disagree" }, 
                          { value: 3, text: "Neutral"}, 
                          { value: 4, text: "Agree" }, 
                          { value: 5, text: "Strongly Agree" }],
                rows: [{ value: "dogs", text: "I like dogs" }, 
                       { value: "hero", text: "Marvel superheroes are better than DC superheroes" },
                       { value: "shorts", text: "Shorts are more comfortable than pants" }, 
                       { value: "dinner", text: "I would rather eat at local restaurant rather than some fancy place" }, 
                       { value: "mac", text: "Macbooks are better than laptops" }, 
                       { value: "city", text: "City life is much more fulfilling than living out in the country" }, 
                       { value: "milk", text: "Almond milk is a good substitute for real milk" }, 
                       { value: "scary", text: "I enjoy being scared" }, 
                       { value: "desert", text: "A nice piece of cake is preferable to a plate of cookies" }, 
                       { value: "potatoes", text: "Mashed potatoes beat hashbrowns every time" }]},
        ]}
    ]
};

window.survey = new Survey.Model(json);

    survey.onComplete.add(function(result) {
        var allPeople
        const answersData = result.data
        document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(answersData, null, 3);
            $.post("/api/friends", answersData,
      function(data) {
          
      })

      $.get("/api/friends", function(data) {
        allPeople = data
        }).then(
            function() {
                var differenceArray = []
                var lowest = 41
                var closestFriend
            for (i = 0; i < allPeople.length - 1; i++) {
            var difference = 0
            difference += Math.abs(answersData.answers.dogs - allPeople[i].answers.dogs)
            difference += Math.abs(answersData.answers.hero - allPeople[i].answers.hero)
            difference += Math.abs(answersData.answers.shorts - allPeople[i].answers.shorts)
            difference += Math.abs(answersData.answers.dinner - allPeople[i].answers.dinner)
            difference += Math.abs(answersData.answers.mac - allPeople[i].answers.mac)
            difference += Math.abs(answersData.answers.city - allPeople[i].answers.city)
            difference += Math.abs(answersData.answers.milk - allPeople[i].answers.milk)
            difference += Math.abs(answersData.answers.scary - allPeople[i].answers.scary)
            difference += Math.abs(answersData.answers.desert - allPeople[i].answers.desert)
            difference += Math.abs(answersData.answers.potatoes - allPeople[i].answers.potatoes)
            differenceArray.push({
                name : allPeople[i].name,
                difference : difference
            })
            if (lowest > difference) {
                lowest = difference
                closestFriend = allPeople[i].name
            }
            }
            console.log(differenceArray)
            console.log(lowest)
            console.log(closestFriend)
            document.querySelector('#surveyResult').textContent = "The person with the interests closest to your own in our database is: (" + closestFriend + ")"
            document.getElementById('exitButton').style.visibility = "visible"
        }
        )

    });


    $("#surveyElement").Survey({ 
        model: survey 
    });
