$(document).ready(function () {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    $("#btnDeleteBook").click(function () {

        var rootRef = firebase.database().ref().child("knjige")

        rootRef.child(id).remove();

        window.location.href = "index.html";

    });
});