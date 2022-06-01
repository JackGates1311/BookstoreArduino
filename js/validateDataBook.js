$(document).ready(function () {

        $(document).on("click", "#btnSaveBookDetails", function () {

            jQuery.validator.addMethod("year", function (value, element) {
                if (/^\d{4}$/.test(value)) {
                    return true;
                } else {
                    return false;
                };
            }, "Invalid input")

            jQuery.validator.addMethod("rate", function (value, element) {
                if (/^[1-5]$/.test(value)) {
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

            $("#editBookDetailsForm").validate({

                rules: {

                    bookName: {
                        required: true,
                        lettersOnly: true

                    },
                    bookPublisher: {
                        required: true,
                        lettersOnly: true
                    },
                    bookImageURL: {
                        required: true,
                        url: true
                    },
                    bookAuthor: {
                        required: true,
                        lettersOnly: true
                    },
                    bookISBN: {
                        required: true,
                        digits: true,
                        minlength: 13,
                        maxlength: 13
                    },
                    bookPublishYear: {
                        required: true,
                        year: true
                    },
                    bookPageNumber: {
                        required: true,
                        digits: true,
                        maxlength: 5
                    },
                    bookLetter: {
                        required: true,
                        lettersOnly: true
                    },
                    bookLanguage: {
                        required: true,
                        lettersOnly: true
                    },
                    bookRate: {
                        required: true,
                        digits: true,
                        rate: true
                    },
                    bookPrice: {
                        required: true,
                        digits: true
                    },
                    bookDescription: {
                        required: true,
                        lettersOnly: true
                    }
                },

                messages: {
                    bookName: {
                        required: "Please fill the field"
                    },
                    bookPublisher: {
                        required: "Please fill the field"
                    },
                    bookImageURL: {
                        required: "Please fill the field",
                        url: "Invalid input"
                    },
                    bookAuthor: {
                        required: "Please fill the field"
                    },
                    bookISBN: {
                        required: "Please fill the field",
                        digits: "Invalid input",
                        minlength: "Invalid input",
                        maxlength: "Invalid input"
                    },
                    bookPublishYear: {
                        required: "Please fill the field"
                    },
                    bookPageNumber: {
                        required: "Please fill the field",
                        digits: "Invalid input",
                        maxlength: "Invalid input"
                    },
                    bookLetter: {
                        required: "Please fill the field"
                    },
                    bookLanguage: {
                        required: "Please fill the field"
                    },
                    bookRate: {
                        required: "Please fill the field",
                        digits: "Invalid input"
                    },
                    bookPrice: {
                        required: "Please fill the field",
                        digits: "Invalid input"
                    },
                    bookDescription: {
                        required: "Please fill the field"
                    }
                }

            });

            if ($("#editBookDetailsForm").valid()) {
                alert("Book details are successfully saved");
            }
        });
});


