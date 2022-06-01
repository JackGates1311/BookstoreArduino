function getInfo(ID) {

    $("#btnDeleteUser").remove();

    $("#btnModalConfirmation").append(
        '<button type="button" id="btnDeleteUser" class="btn btn-primary">Remove</button>'
    );

    $("#btnDeleteUser").click(function () {

        var rootRef = firebase.database().ref().child("korisnici")

        rootRef.child(ID).remove();

        window.location.href = "manageUsers.html";
    });


}