(function(){

  $output = $('#output');

  //override console.log
  console.log = function(result){
    try {
      log(eval(expression(result)));
    } catch (e) {
      log(e.message);
    }
  }

  log = function(result){
    $output.prepend('<code>'+result+'</code>');
  }

  //proxy input to console.log
  $('textarea').keydown(function(e){
    var enterCode = 13;
    if(e.keyCode == enterCode){
      console.log($(this).val())
      $(this).val('')
    }
  });

  //convert a js string into an expression
  function expression(str){
    return '(' + str + ')'
  }

  //listen for errors and display them
  window.onerror = function(error, url, line) {
    console.log(error);
  };


})()
