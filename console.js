(function(){

  $output = $('#output');

  //override console.log
  console.log = function(result){
    $output.prepend('<code>'+result+'</code>');
  }

  //proxy input to console.log
  $('textarea').keydown(function(e){
    var enterCode = 13;
    if(e.keyCode == enterCode){
      console.log(eval($(this).val()))
      $(this).val('')
    }
  })


  //listen for errors and display them
  window.onerror = function(error, url, line) {
    console.log(error);
  };



})()
