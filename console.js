(function(){

  $output = $('#output');

  //override console.log
  console.log = function(result){
    try {
      var evaled = eval(expression(result));
      if(evaled+'' == '[object Object]'){
        log("I'm an object")
      }
      log();
    } catch (e) {
      log(result);
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
    //force as a string
    str = str+'';
    if(str && str.substring(0,4) == 'func'){
      return '(' + str + ')'
    } else {
      return str;
    }
    
  }

  //listen for errors and display them
  window.onerror = function(error, url, line) {
    console.log(error);
  };

  //todo add handlers for Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError and URIError.

})()
