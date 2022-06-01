$(document).ready(function () {

    $(document).on("click", "#btnSave", function () {

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

                $(element).closest(".form-control").removeClass("is-invalid");


            },
        });

        $("#editUserDetails").validate({

            rules: {

                firstNameEdit: {
                    required: true,
                    lettersOnly: true

                },
                lastNameEdit: {
                    required: true,
                    lettersOnly: true

                },
                emailAddressEdit: {
                    required: true,
                    email: true
                },
                mobileEdit: {
                    required: true,
                    mobileNumber: true
                },
                addressEdit: {
                    required: true

                },
                dayOfBirthEdit: {
                    required: true,
                    dayOfMonth: true
                },
                yearOfBirthEdit: {
                    required: true,
                    year: true


                },
                usernameEdit: {
                    required: true,
                    maxlength: 16
                },
                passwordEdit: {
                    required: true
                }


            },

            messages: {
                firstNameEdit: {
                    required: "Please fill the field"
                },
                lastNameEdit: {
                    required: "Please fill the field"
                },
                emailAddressEdit: {
                    required: "Please fill the field",
                    email: "Invalid input"
                },
                mobileEdit: {
                    required: "Please fill the field"
                },
                addressEdit: {
                    required: "Please fill the field"
                },
                dayOfBirthEdit: {
                    required: "Please fill the field"
                },
                yearOfBirthEdit: {
                    required: "Please fill the field",
                    year: "Invalid input"
                },
                usernameEdit: {
                    required: "Please fill the field",
                    maxlength: "Entered username is too big"
                },
                passwordEdit: {
                    required: "Please fill the field"
                }


            }

        });

        if ($("#editUserDetails").valid()) {
            alert("User details are successfully modified");
        }
    });
});


