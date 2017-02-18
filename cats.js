$(document).ready(function() {
  $(".summon-cats").on('click', function(){
    // console.log("it works!!")
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function(responseData){
      console.log(responseData);

      console.log(responseData.cats[0]["name"])
      // $.each(responseData.cats, function(key, value) {
      //   console.log(value.name + "  source: " + value.photo);

        $('<img>').attr('src', responseData.cats[0]["photo"], 'alt', "Photo of " + responseData.cats[0]["name"]).appendTo('#cat1');
        $('<img>').attr('src', responseData.cats[1]["photo"], 'alt', "Photo of " + responseData.cats[1]["name"]).appendTo('#cat2');
        $('<img>').attr('src', responseData.cats[2]["photo"], 'alt', "Photo of " + responseData.cats[2]["name"]).appendTo('#cat3');
    //   });
    });
  });

});
