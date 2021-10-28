
function desplegar() {
    $(".navegacion").toggleClass("navegacion-desp")
};

function bike_form() {
    $(".form-bike").show()
    $(".form-client").hide()
    $(".form-message").hide()
};

function client_form() {
    $(".form-client").show()
    $(".form-bike").hide()
    $(".form-message").hide()
};

function message_form() {
    $(".form-message").show()
    $(".form-bike").hide()
    $(".form-client").hide()
};

$("#del").click(function() {
    alert("dd")
})