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
    });
  });

});
