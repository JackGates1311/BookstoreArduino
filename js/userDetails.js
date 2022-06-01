function getID() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    editUserInformation(id);
}

function editUserInformation(ID) {

    $(document).ready(function () {

        var rootRef = firebase.database().ref().child("korisnici");

        rootRef.on("child_added", snap => {

            var adresa = snap.child("adresa").val();
            var datumRodjenja = snap.child("datumRodjenja").val();
            var email = snap.child("email").val();
            var ime = snap.child("ime").val();
            var password = snap.child("password").val();
            var prezime = snap.child("prezime").val();
            var telefon = snap.child("telefon").val();
            var username = snap.child("username").val();

            var danRodjenja = datumRodjenja.substring(8, 10)
            var mesecRodjenja = datumRodjenja.substring(5, 7)
            var godinaRodjenja = datumRodjenja.substring(0,4)

            if (datumRodjenja.substring(8, 9) == "0") {
                var danRodjenja = datumRodjenja.substring(9, 10)
            }

            if (datumRodjenja.substring(5, 6) == "0") {
                var mesecRodjenja = datumRodjenja.substring(6, 7)
            }

            var januar, februar, mart, april, maj, jun, jul, avgust, septembar, oktobar, novembar, decembar = ""

            if (mesecRodjenja == "1")
                januar = "selected"
            if (mesecRodjenja == "2")
                februar = "selected"
            if (mesecRodjenja == "3")
                mart = "selected"
            if (mesecRodjenja == "4")
                april = "selected"
            if (mesecRodjenja == "5")
                maj = "selected"
            if (mesecRodjenja == "6")
                jun = "selected"
            if (mesecRodjenja == "7")
                jul= "selected"
            if (mesecRodjenja == "8")
                avgust = "selected"
            if (mesecRodjenja == "9")
                septembar = "selected"
            if (mesecRodjenja == "10")
                oktobar = "selected"
            if (mesecRodjenja == "11")
                novembar = "selected"
            if (mesecRodjenja == "12")
                decembar = "selected"

            if (snap.key == ID) {

                $("#editUserDetails").append(

                    '<div class="form-row">' + '<div class="form-group col-md-6">' + '<label>First name: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="firstNameEdit" name="firstNameEdit" value=' + ime + ' disabled>' + '</div>' + 

                    '<div class="form-group col-md-6">' + '<label>Last name: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="lastNameEdit" name="lastNameEdit" value="' + prezime + '" disabled>' +

                    '</div> </div>' + '<div class="form-row">' + '<div class="form-group col-md-6">' + '<label>E-Mail: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="emailAddressEdit" name="emailAddressEdit" value="' + email + '" disabled>' + '</div>' +

                    '<div class="form-group col-md-6">' + '<label>Mobile number: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="mobileEdit" name="mobileEdit" value="' + telefon + '" disabled>' +

                    '</div> </div>' + '<div class="form-row">' + '<div class="form-group col-md-6">' + '<label>Address: </label>' + 

                    '<input type="text" class="form-control" placeholder="" id="addressEdit" name="addressEdit" value="' + adresa + '" disabled>' + '</div>' +

                    '<div class="form-group col-md-6">' + '<label>Date of birth:</label>' + '<div class="form-row">' + '<div class="form-group col-md-4">' +

                    '<input type="text" class="form-control" placeholder="" id="dayOfBirthEdit" name="dayOfBirthEdit" value="' + danRodjenja + '" disabled>' + '</div>' +

                    '<div class="form-group col-md-4">' + '<select class="form-control" id="sel1" disabled>' +

                    '<option hidden>Month</option>' + '<option ' + januar + '>January</option>' + '<option ' + februar + '>February</option>' +

                    '<option ' + mart + '>March</option>' + '<option ' + april + '>April</option>' + '<option ' + maj + '>May</option>' + 

                    '<option ' + jun + '>June</option>' + '<option ' + jul + '>July</option>' + '<option ' + avgust + '>August</option>' +

                    '<option ' + septembar + '>September</option>' + '<option ' + oktobar + '>October</option>' + '<option ' + novembar +

                    '>November</option>' + '<option ' + decembar + '>December</option>' + '</select> </div>' + '<div class="form-group col-md-4">' +

                    '<input type="text" class="form-control" placeholder="" id="yearOfBirthEdit" name="yearOfBirthEdit" value="' + godinaRodjenja + '" disabled>' +

                    '</div> </div> </div> </div>' +  '<div class="form-row">' + '<div class="form-group col-md-6">' + '<label>Username: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="usernameEdit" name="usernameEdit"  value="' + username + '" disabled>' + '</div>' +

                    '<div class="form-group col-md-6">' + '<label>Password: </label>' +

                    '<input type="password" class="form-control" placeholder="" id="passwordEdit" name="passwordEdit" value="' + password +

                    '" id="passwordField" disabled>' + '</div> </div>' + 

                    '<button type="button" class="btn btn-primary float-right ml-2" id="btnShowPassword" onclick="showPasswordUser()">Show password</button>' + 

                    '<button type="button" class="btn btn-primary float-right ml-2" id="btnEdit" onclick="enableEdit()">Edit</button>' +

                    '<button type="button" class="btn btn-primary float-right ml-2" id="btnSave" hidden>Save</button>' +

                    '<a href="manageUsers" type="button" class="btn btn-secondary float-right" id="btnCancel" hidden>Cancel</a>' + '<p></p>'

                );
            }
        });
    });

}