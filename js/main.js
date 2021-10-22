$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find(".input4");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find(".input4");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// chat section

$(document).ready(function(){
  $(".chatbtn").click(function(){
    $(".chatbox").slideToggle('slow');
  });
});