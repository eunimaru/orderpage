$(function()  {
  $("form").submit(function(event)  {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var productInput = $("input#product").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".product").text(productInput);

    $("#submission").show();

    event.preventDefault();
  });

});
