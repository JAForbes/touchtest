(function(){
  $output = $('#output');
  console.log = function(result){
    $output.prepend('<code>'+result+'</code>');
  }

})()

console.log('first');
console.log('second');
