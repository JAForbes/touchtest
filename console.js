(function(){

  $output = $('#output');

  //override console.log
  console.log = function(result){
    $output.prepend('<code>'+result+'</code>');
  }

  //proxy input to console.log
  $('textarea').keydown(function(e){
    console.log(e.keyCode);
  })

})()

console.log('first');
console.log('second');
