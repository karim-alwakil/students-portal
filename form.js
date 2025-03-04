$(document).ready(function(){
    $("form").submit(function (event) {
        var formData = {
            firstname: $("#first_name").val(),
            lastname: $("#last_name").val(),
            phonenumber: $("#phone").val(),
            dateofbirth: $("#DOB").val(),
            faculty: $("#faculty").val(),
            major: $("#major").val(),
            country: $("#countries").val(),
            state: $("#state_name").val(),
            zipcode: $("#zip_code").val(),
            city: $("#city_name").val(),
            adressline1: $("#adress_line1").val(),
            adressline2: $("#adress_line2").val(),
       };

       $.ajax({
           type: "POST",
           url: "localhost3000",
           data: formData,
           encode: true,
       }).done(function(data){
           console.log(data);

           if(!data.success){
             if(data.errors.firstname) {
                 $("#first_name").addClass("has-error");
                 $("#first_name").append(
                     '<div class="help-block">' + data.errors.email + "</div>"
                 );
             }


             if(data.errors.lastname) {
                $("#last_name").addClass("has-error");
                $("#last_name").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }



            if(data.errors.phonenumber) {
                $("#phone").addClass("has-error");
                $("#phone").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }


            if(data.errors.dateofbirth) {
                $("#DOB").addClass("has-error");
                $("#DOB").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }




            if(data.errors.faculty) {
                $("#faculty").addClass("has-error");
                $("#faculty").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }



            if(data.errors.major) {
                $("#major").addClass("has-error");
                $("#major").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }


            if(data.errors.country) {
                $("#country_name").addClass("has-error");
                $("#country_name").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }



            if(data.errors.state) {
                $("#state_name").addClass("has-error");
                $("#state_name").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }



            if(data.errors.zipcode) {
                $("#zip_code").addClass("has-error");
                $("#izp_code").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }



            if(data.errors.city) {
                $("#city_name").addClass("has-error");
                $("#city_name").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }



            if(data.errors.adressline1) {
                $("#adress_line1").addClass("has-error");
                $("#adress_line1").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }





            if(data.errors.adressline2) {
                $("#adress_line2").addClass("has-error");
                $("#adress_line2").append(
                    '<div class="help-block">' + data.errors.email + "</div>"
                );
            }


        } else {
            $("form").hmtl(
                '<div class = "alert alert-success">' + data.message + "</div>"
            );
        }

});

        event.preventDefault();
    });
});

