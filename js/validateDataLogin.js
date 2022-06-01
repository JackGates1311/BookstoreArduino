$(document).ready(function () {


    var rootRef = firebase.database().ref().child("korisnici");

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


    $("#userLoginForm").validate({



        rules: {

            loginUsername: {
                required: true

            },
            loginPassword: {
                required: true
            }
           

        },

        messages: {
            loginUsername: {
                required: "Please fill the field"
            },
            loginPassword: {
                required: "Please fill the field"
            }
        }

    })

    $("#loginBtn").on('click', function () {


        var usernameField = $("#loginUsername").val();
        var passwordField = $("#loginPassword").val();

        var userFound = 0;
        var length = 0;
        var counter = 0;

        if ($("#userLoginForm").valid()) {

            rootRef.on("child_added", snap => {

                var userID = snap.key;

                length = snap.numChildren() / 2;

                var username = snap.child("username").val();
                var password = snap.child("password").val();

                if (usernameField == username && passwordField == password) {

                    alert("You have logged in successfully \n" + usernameField + "\n" + passwordField);
                    //$("#userRegistrationForm").submit(); //submitting the form
                    ++userFound;
                }

                counter++;

                if (userFound === 0 && length === counter) {
                    alert("You haven't logged in successfully");
                }

            });


        }

    })

    $("#cancelBtnLogin,#cancelBtnModalLogin").click(function () {
        $("#userLoginForm")[0].reset();

        $(".invalid-feedback").remove();
        $(".form-control").removeClass("is-invalid");
        $(".form-control").removeClass("is-valid");


    });

});
