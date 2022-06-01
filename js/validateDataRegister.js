$(document).ready(function () {


    jQuery.validator.addMethod("mobileNumber", function (value, element) {
        if (/^(\+\d{1,3}[- ]?)?\d{8,11}$/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Invalid input")

    jQuery.validator.addMethod("lettersOnly", function (value, element) {
        if (/[a-zA-Z]+/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Invalid input")

    jQuery.validator.addMethod("dayOfMonth", function (value, element) {
        if (/^(3[01]|[12][0-9]|[1-9])$/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Invalid input")

    jQuery.validator.addMethod("year", function (value, element) {
        if (/^\d{4}$/.test(value)) {
            return true;
        } else {
            return false;
        };
    }, "Invalid input")





    $.validator.setDefaults({

        errorElement: "div",
        errorClass: "invalid-feedback",

        highlight: function (element) {

            $(element).closest(".form-control").addClass("is-invalid");


        },

        unhighlight: function (element) {

            $(element).closest(".form-control").removeClass("is-invalid").addClass("is-valid");


        },



    });

    $("#userRegistrationForm").validate({

        

        rules: {

            firstName: {
                required: true,
                lettersOnly: true

            },
            lastName: {
                required: true,
                lettersOnly: true
            },
            emailAddress: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                mobileNumber: true
            },
            address: {
                required: true

            },
            dayOfBirth: {
                required: true,
                dayOfMonth: true


            },
            yearOfBirth: {
                required: true,
                year: true


            },
            username:{
                required: true,
                maxlength: 16
            },
            password: {
                required: true
            },
            monthOfBirth: {
                required: true
            }


        },

        messages: {
            firstName: {
                required: "Please fill the field"
            },
            lastName: {
                required: "Please fill the field"
            },
            emailAddress: {
                required: "Please fill the field",
                email: "Invalid input"
            },
            mobile: {
                required: "Please fill the field"
            },
            address: {
                required: "Please fill the field"
            },
            dayOfBirth: {
                required: "Please fill the field",
                dayOfMonth: "Invalid input"
            },
            yearOfBirth: {
                required: "Please fill the field",
                year: "Invalid input"
            },
            username: {
                required: "Please fill the field",
                maxlength: "Entered username is too big"
            },
            password: {
                required: "Please fill the field"
            },
            monthOfBirth: {
                required: "Please select the value"
            }
        }

    })

    $("#registerBtn").click(function () {

        if ($("#userRegistrationForm").valid()) {
            alert("User is successfully registered on the server");

            //$("#userRegistrationForm").submit(); //submitting the form
        }

    });

    $("#cancelBtn,#cancelBtnModal").click(function () {
        $("#userRegistrationForm")[0].reset();

        $(".invalid-feedback").remove();
        $(".form-control").removeClass("is-invalid");
        $(".form-control").removeClass("is-valid");


    });

});
