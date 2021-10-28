
// formulario bike

function consultarBike() {
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: "GET",
        dataType: "json",
        success: function(resp) {
            console.log(resp);
            var tabla = "<table>";
            tabla += "<tr>";
            tabla += "<th class=\"numero\">"+ '' +"</th>";
            tabla += "<th class=\"id\">"+ 'Id' +"</th>";
            tabla += "<th>"+ 'Brand' +"</th>";
            tabla += "<th>"+ 'Model' +"</th>";
            tabla += "<th>"+ 'Category Id' +"</th>";
            tabla += "<th class=\"name\">"+ 'Name' +"</th>";
            tabla += "<th>"+ 'Borrar' +"</th>";
            tabla += "<th>"+ 'Actualizar' +"</th>";
            tabla += "</tr>";
            for(i = 0; i < resp.items.length; i++) {
                tabla += "<tr>";
                tabla += "<td class=\"numbers\">"+(i+1)+"</td>";
                tabla += "<td>"+resp.items[i].id+"</td>";
                tabla += "<td>"+resp.items[i].brand+"</td>";
                tabla += "<td>"+resp.items[i].model+"</td>";
                tabla += "<td>"+resp.items[i].category_id+"</td>";
                tabla += "<td>"+resp.items[i].name+"</td>";
                tabla += "<td class=\"boton\"><button class=\"borrar-bike\" onclick=\"borrar("+resp.items[i].id+")\">Borrar</button>";
                tabla += "<td class=\"boton\"><button class=\"actualizar-bike\" onclick=\"menu_actualizar("+resp.items[i].id+")\">Actualizar</button>";
                tabla += "</tr>";
            }
            tabla += "</table>";
            $(".sect-table").empty();
            $(".sect-table").html("<p class='titulo-tabla'>Tabla Bike</p>");
            $(".sect-table").append(tabla);
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status);
        }
    });
};

function agregarBike() {
    var dato = {
        id: $("#id_bike").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name_bike").val()
    };
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: "POST",
        data: dato,
        success: function(resp) {
            console.log(resp);
            alert("Agregado correctamente");
            $("#id_bike").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name_bike").val("");
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status)
        }
    });
};

function borrar(ids) {
    var datos = {
        id: ids // ids de base de datos
    }
    var sent = JSON.stringify(datos);
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: "DELETE",
        data: sent,
        contentType: "application/JSON",
        success: function() {
            alert("Eliminado correctamente.");
            consultarBike();
        }
    });
};

function menu_actualizar(id_actual) {
    var id = id_actual;
    $(".contenedor-modal").show()
    $(".client-modal").hide()
    $(".bike-modal").show()
    $(".message-modal").hide()
    $.ajax({    
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/" + id,
        type: "GET",
        dataType: "json",
        success: function(resp) {
            for(i = 0; i < resp.items.length; i++) {
                var brandBike = resp.items[i].brand;
                var modelBike = resp.items[i].model;
                var categoryIdBike = resp.items[i].category_id;
                var nameBike = resp.items[i].name;
            }
            $("#idBikeModal").val(id);
            $("#brandModal").val(brandBike);
            $("#modelModal").val(modelBike);
            $("#categoryIdModal").val(categoryIdBike);
            $("#nameBikeModal").val(nameBike);
        }
    });
};

function actualizarBike() {
    var datos = {
        id: $("#idBikeModal").val(),
        brand: $("#brandModal").val(),
        model: $("#modelModal").val(),
        category_id: $("#categoryIdModal").val(),
        name: $("#nameBikeModal").val()
    };
    var enviar = JSON.stringify(datos);
    $.ajax({    
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: "PUT",
        data: enviar,
        contentType: "application/JSON",
        success: function() {
            alert("Actualizado correctamente.")
            consultarBike();
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status)
        }
    });
};

function cerrar() {
    $(".contenedor-modal").hide()
};

// --------------------------- formulario cliente -------------------------------

function consultarClient() {
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "json",
        success: function(resp) {
            console.log(resp);
            var tabla = "<table>";
            tabla += "<tr>";
            tabla += "<th class=\"numero\">"+ '' +"</th>";
            tabla += "<th class=\"id\">"+ 'Id' +"</th>";
            tabla += "<th>"+ 'NAME' +"</th>";
            tabla += "<th>"+ 'EMAIL' +"</th>";
            tabla += "<th>"+ 'AGE' +"</th>";
            tabla += "<th>"+ 'Borrar' +"</th>";
            tabla += "<th>"+ 'Actualizar' +"</th>";
            tabla += "</tr>";
            for(i = 0; i < resp.items.length; i++) {
                tabla += "<tr>";
                tabla += "<td class=\"numbers\">"+(i+1)+"</td>";
                tabla += "<td>"+resp.items[i].id+"</td>";
                tabla += "<td>"+resp.items[i].name+"</td>";
                tabla += "<td>"+resp.items[i].email+"</td>";
                tabla += "<td>"+resp.items[i].age+"</td>";
                tabla += "<td class=\"boton\"><button class=\"borrar-bike\" onclick=\"borrarClient("+resp.items[i].id+")\">Borrar</button>";
                tabla += "<td class=\"boton\"><button class=\"actualizar-bike\" onclick=\"menu_actualizarClient("+resp.items[i].id+")\">Actualizar</button>";
                tabla += "</tr>";
            }
            tabla += "</table>";
            $(".sect-table").empty();
            $(".sect-table").html("<p class='titulo-tabla'>Tabla Client</p>");
            $(".sect-table").append(tabla);
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status);
        }
    });
};

function agregarClient() {
    var dato = {
        id: $("#id_client").val(),
        name: $("#name_client").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: dato,
        success: function(resp) {
            console.log(resp);
            alert("Agregado correctamente");
            $("#id_client").val("");
            $("#name_client").val("");
            $("#email").val("");
            $("#age").val("");
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status)
        }
    });
};

function borrarClient(ids) {
    var datos = {
        id: ids // ids de base de datos
    }
    var sent = JSON.stringify(datos);
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: sent,
        contentType: "application/JSON",
        success: function() {
            alert("Eliminado correctamente.");
            consultarClient();
        }
    });
};

function menu_actualizarClient(id_actual) {
    var id = id_actual;
    $(".contenedor-modal").show()
    $(".client-modal").show()
    $(".bike-modal").hide()
    $(".message-modal").hide()
    $.ajax({    
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/" + id,
        type: "GET",
        dataType: "json",
        success: function(resp) {
            for(i = 0; i < resp.items.length; i++) {
                var nameClient = resp.items[i].name;
                var email = resp.items[i].email;
                var age = resp.items[i].age;
            }
            $("#idClientModal").val(id);
            $("#nameClientModal").val(nameClient);
            $("#emailClientModal").val(email);
            $("#ageClientModal").val(age);
        }
    });
};

function cerrarClient() {
    $(".contenedor-modal").hide()
};

function actualizarClient() {
    var datos = {
        id: $("#idClientModal").val(),
        name: $("#nameClientModal").val(),
        email: $("#emailClientModal").val(),
        age: $("#ageClientModal").val()
    };
    var enviar = JSON.stringify(datos);
    $.ajax({    
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: enviar,
        contentType: "application/JSON",
        success: function() {
            alert("Actualizado correctamente.")
            consultarClient();
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status)
        }
    });
};

// --------------------------- formulario mensaje -------------------------------

function consultarMessage() {
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        dataType: "json",
        success: function(resp) {
            console.log(resp);
            var tabla = "<table>";
            tabla += "<tr>";
            tabla += "<th class=\"numero\">"+ '' +"</th>";
            tabla += "<th class=\"id\">"+ 'Id' +"</th>";
            tabla += "<th>"+ 'MESSAGE_TEXT' +"</th>";
            tabla += "<th>"+ 'Borrar' +"</th>";
            tabla += "<th>"+ 'Actualizar' +"</th>";
            tabla += "</tr>";
            for(i = 0; i < resp.items.length; i++) {
                tabla += "<tr>";
                tabla += "<td class=\"numbers\">"+(i+1)+"</td>";
                tabla += "<td>"+resp.items[i].id+"</td>";
                tabla += "<td>"+resp.items[i].text+"</td>";
                tabla += "<td class=\"boton\"><button class=\"borrar-bike\" onclick=\"borrarMessage("+resp.items[i].id+")\">Borrar</button>";
                tabla += "<td class=\"boton\"><button class=\"actualizar-bike\" onclick=\"menu_actualizarMessage("+resp.items[i].id+")\">Actualizar</button>";
                tabla += "</tr>";
            }
            tabla += "</table>";
            $(".sect-table").empty();
            $(".sect-table").html("<p class='titulo-tabla'>Tabla Message</p>");
            $(".sect-table").append(tabla);
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status);
        }
    });
};

function agregarMessage() {
    var dato = {
        id: $("#id_message").val(),
        text: $("#message_text").val()
    };
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: dato,
        success: function(resp) {
            console.log(resp);
            alert("Agregado correctamente");
            $("#id_message").val("");
            $("#message_text").val("");
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status)
        }
    });
};

function borrarMessage(ids) {
    var datos = {
        id: ids // ids de base de datos
    }
    var sent = JSON.stringify(datos);
    $.ajax({
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: sent,
        contentType: "application/JSON",
        success: function() {
            alert("Eliminado correctamente.");
            consultarMessage();
        }
    });
};

function menu_actualizarMessage(id_actual) {
    var id = id_actual;
    $(".contenedor-modal").show()
    $(".client-modal").hide()
    $(".bike-modal").hide()
    $(".message-modal").show()
    $.ajax({    
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/" + id,
        type: "GET",
        dataType: "json",
        success: function(resp) {
            for(i = 0; i < resp.items.length; i++) {
                var textMessage = resp.items[i].text;
            }
            $("#idMessageModal").val(id);
            $("#messageTextModal").val(textMessage);
        }
    });
};

function cerrarMessage() {
    $(".contenedor-modal").hide()
};

function actualizarMessage() {
    var datos = {
        id: $("#idMessageModal").val(),
        text: $("#messageTextModal").val()
    };
    var enviar = JSON.stringify(datos);
    $.ajax({    
        url: "https://g29dde980cd9872-db202110012124.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: enviar,
        contentType: "application/JSON",
        success: function() {
            alert("Actualizado correctamente.")
            consultarMessage();
        },
        error: function(xhr, status) {
            alert("Operación no completada: " + xhr.status)
        }
    });
};