// Back end code
var total = function(price, tax) {
  return parseInt(price) * tax;
};

// Front end code
$(function() {
  $("#blank form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var orderdateInput = $("input#orderdate").val();
    var shippingdateInput = $("input#shippingdate").val();
    var priceInput = $("input#price").val();
    var totalprice = total(priceInput, 1.78);

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".orderdate").text(orderdateInput);
    $(".shippingdate").text(shippingdateInput);
    $(".price").text(priceInput);
    $(".total").text(totalprice);

    $("#receipt").show();
    event.preventDefault();
  });
});
