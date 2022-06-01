$(document).ready(function () {

    var rootRef = firebase.database().ref().child("korisnici");


    rootRef.on("child_added", snap => {


    var userID = snap.key;

    var adresa = snap.child("adresa").val();
    var datumRodjenja = snap.child("datumRodjenja").val();
    var email = snap.child("email").val();
    var ime = snap.child("ime").val();
    var password = snap.child("password").val();
    var prezime = snap.child("prezime").val();
    var telefon = snap.child("telefon").val();
    var username = snap.child("username").val();



    $("#users").append(

        '<tr>' + '<td class="align-middle">' + ime + '</td>' + '<td class="align-middle">' + prezime + '</td>' + '<td class="align-middle">' + username + '</td>' +
        
        '<td class="align-middle">' + email + '</td>' + '<td class="align-middle"' + '<div class="clearfix">' +

        '<a href="userDetails.html?id=' + userID +'" class="btn btn-primary mb-2" style="margin-right:6px;">Details</a>' +

        '<a href="#" onclick="getInfo(\'' + userID + '\')" data-toggle="modal" data-target="#deleteConfirmation" class="btn btn-primary mb-2" style="margin-right:6px;">Remove</a>' + '</div> </td>' + '</tr>' 

        );


    });

});

