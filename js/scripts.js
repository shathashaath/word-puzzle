$(function(){
  $("form#word-puzzle").submit(function(event){
    event.preventDefault();

    var s = $('input#word-input').val();
    debugger;
    alert(s.charAt(0));
      for (var i = 0; i < s.length; i++)
        {if (s.charAt(i) === "a"){
          s = s.replace(s.charAt(i),"-");
        }
          else if (s.charAt(i) === "e") {
          s = s.replace(s.charAt(i),"-");
          }
          else if (s.charAt(i) === "i") {
          s = s.replace(s.charAt(i),"-");
          }
          else if (s.charAt(i) === "o") {
          s = s.replace(s.charAt(i),"-");
          }
          else if (s.charAt(i) === "u") {
          s = s.replace(s.charAt(i),"-");
          }
        }

    alert(s);
  });

});
