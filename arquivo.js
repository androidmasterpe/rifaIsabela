
function myFunction(bt) {

    //Manda numero clicado para o formulario
    var x = document.getElementById(bt).innerText;
    document.getElementById("numero").value = parseInt(x, 10);

    //define o que enviar de acordo com o numero escolhido
     if (x => 0 && x <= 15) {
        $("#fralda").text("Um pacote de fralda P + um mimo ou um PIX no valor R$ 50,00");
        document.getElementById("fraldaB").value = " P ";
    }
    if (x > 15 && x <= 55) {
        $("#fralda").text("Um pacote  de fralda M + um mimo ou um PIX no valor R$ 50,00");
        document.getElementById("fraldaB").value = " M ";
    }
    if (x > 55 && x <= 80) {
        $("#fralda").text("Um pacote de fralda G + um mimo ou um PIX no valor R$ 50,00");
        document.getElementById("fraldaB").value = " G ";
    }
    if (x > 80 && x <= 100) {
        $("#fralda").text("Um pacote de fralda GG + um mimo ou um PIX no valor R$ 50,00");
        document.getElementById("fraldaB").value = " GG ";
    } 
    //atualiza os numeros
    /*    
   $.ajax({
        async: false,
        type: 'GET',
        url: 
        */
    jQuery.ajaxSetup({ async: false });
    $.get("https://script.google.com/macros/s/AKfycbzi3RpSy_hJgDJ-D7Ed-t2lZf9J_G3B65Ui9BqoBs0I9cQvRwu7C1zT5EZ0dmVuU_RX2A/exec",
        function (data) {
            for (var i = 0; i < 79; i++) {
                var obj = data.user[i];
                //console.log(obj.id);
                //alert(obj.numeto);
                if (Number.isInteger(obj.numero)) {
                    var element = document.getElementById("btn" + i);
                    if (typeof (element) != 'undefined' && element != null) {
                        $("#" + "btn" + (obj.numero - 1)).addClass("btn btn-danger").prop('disabled', true)
                    }
                }
            }
            alert('status');
        }).fail(
            function () {

                //alert("Erro ao atualizar os números, tente mais tarde");
                $("#div1").remove();
                alert("Erro ao atualizar os números, tente mais tarde");
                location.reload();
            }
        );

    //alert("\nStatus: " + status);		        
    //tentando bloquear numero ja escolhido
    if ($("#" + bt).hasClass("btn-danger")) {
        alert("Este número ja foi escolhido, por favor selecione outro!")

    } else {
        $("#exampleModal").modal();
    }


    /* Manda no texto do modal o que é preciso mandar para concorrer a rifa*/

    jQuery.ajaxSetup({ async: true });

};

$(document).ready(function () {
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function () {
        var $scroll = $(this);
        //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
        $(window).scroll(function () {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '90% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });

    $.get("https://script.google.com/macros/s/AKfycbzi3RpSy_hJgDJ-D7Ed-t2lZf9J_G3B65Ui9BqoBs0I9cQvRwu7C1zT5EZ0dmVuU_RX2A/exec",
        function (data) {

            //alert("a");
            for (var i = 0; i < 79; i++) {
                //apos encerar o tempo $("#"+"btn"+i).prop('disabled', true);  
                var obj = data.user[i];
                //console.log(obj.id);
                if (Number.isInteger(obj.numero)) {
                    //alert(obj.id)
                    var element = document.getElementById("btn" + i);
                    if (typeof (element) != 'undefined' && element != null) {
                        $("#" + "btn" + (obj.numero - 1)).addClass("btn btn-danger").prop('disabled', true);
                        //alert(obj.numero)
                    }
                }
            }
        }).fail(
            function () {
                alert("Erro ao atualizar os números, tente mais tarde");
                $("#div1").remove()
                //$(#div1).addClass("page-item disabled")
            }
        );
}
);
