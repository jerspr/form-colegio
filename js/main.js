$(document).ready(function(){
	$(".limpiarF").click(function(event){
		event.preventDefault();
	});
	$('#fechnacalumn').datetimepicker({
	    pickTime: false
	});
	$('#fechnacpadre').datetimepicker({
	    pickTime: false
	});
	$('#fechnacmadre').datetimepicker({
        pickTime: false
    });
    $('#fechnacapod').datetimepicker({
        pickTime: false
    });
	$("#datosbasicos").validate({
        // Specify the validation rules
        rules: {
            nombre: "required",
            apellidop: "required",
            apellidom: "required",
            email: {
                required: true,
                email: true
            },
            nombreal: "required",
            apellidopal: "required",
            apellidomal: "required",
            nivel: "required",
            grado: "required"
        },
        
        // Specify the validation error messages
        messages: {
            nombre: "Ingrese su nombre",
            apellidop: "Ingrese su apellido paterno",
            apellidom: "Ingrese su apellido materno",
            email:{
            	required:"Ingrese su correo electronico",
            	email:"Ingrese un correo electronico valido"
            },
            nombreal: "Ingrese su nombre",
            apellidopal: "Ingrese su apellido paterno",
            apellidomal: "Ingrese su apellido materno",
            nivel: "Elija el nivel",
            grado: "Elija el grado"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
});