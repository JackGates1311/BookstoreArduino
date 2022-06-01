function addToCart(bookID) {

    var bookIndex = localStorage.length;

    var duplicateFound = false;

    for (i = 1; i < localStorage.length; i++) {

        var value = localStorage.getItem("book" + i);

        if (value === bookID) {
            duplicateFound = true;
        }
    }

    if (duplicateFound == false) {
        localStorage.setItem("book" + bookIndex, bookID);
    }
    else
        alert("This book is already in cart items");


}

var ukupnaCena = 0;


function getBooks()
{

    for (i = 0; i < 1000; i++) {

        var bookID = localStorage.getItem("book" + i);

        loadOrderList(bookID);

    }


}

function loadOrderList(ID)
{

    $(document).ready(function () {

        var rootRef = firebase.database().ref().child("knjige");

        rootRef.on("child_added", snap => {

            var bookID = snap.key;

            var autor = snap.child("autor").val();
            var brojStranica = snap.child("brojStranica").val();
            var cena = snap.child("cena").val();
            var godinaIzdavanja = snap.child("godinaIzdavanja").val();
            var isbn = snap.child("isbn").val();
            var izdavackaKuca = snap.child("izdavackaKuca").val();
            var jezik = snap.child("jezik").val();
            var naziv = snap.child("naziv").val();
            var ocena = snap.child("ocena").val();
            var opis = snap.child("opis").val();
            var pismo = snap.child("pismo").val();
            var slika = snap.child("slika").val();
            var tipPoveza = snap.child("tipPoveza").val();

            if (bookID == ID) {

                ukupnaCena += cena;


                $("#price").remove();

                $("#buyBtn").remove();

                $("#orderListItems").append(

                    '<tr>' +

                    '<td class="tableTextLeft" colspan="1">' + '<p>' + naziv + '</p>' + '<small>' + autor + '</small>' + '</td>' +

                    '<td class="align-middle">' + cena + ' $</td>' + '<td class="align-middle">' + '<div class="clearfix">' + '<a href="#" onclick="deleteProduct(\'' +

                    ID + '\')" class="btn btn-primary float-right mb-2" data-toggle="modal" data-target="#deleteConfirmation">Remove</a>' + '</div></td>' + '</tr>'
                );

                $("#footer").append(
                    '<p class="lead text-right font-weight-bold" id="price" >Total price: ' + ukupnaCena + ' $</p>' +
                    '<div class= "clearfix">' + '<button type="button" id="buyBtn" onclick="order()" class="btn btn-primary float-right ml-2">Confirm order </button> </div>'

                );


            }

        });
    });
}

function deleteProduct(deleteID) {

    console.log(deleteID);
    $("#btnDeleteOrder").remove();

    $("#btnModalConfirmation").append(
        '<button type="button" id="btnDeleteOrder" class="btn btn-primary">Remove</button>'
    );

    $("#btnDeleteOrder").click(function () {

        var key = ""

        for (i = 0; i < 1000; i++) {

            var bookID = localStorage.getItem("book" + i);

            if (deleteID == bookID)
                key = "book" + i;

        }


        localStorage.removeItem(key);

        window.location.href = "orderList";

    });


}
function order() {
    alert("You have successfully placed your order");
}

/*
function appendToStorage(name, data) {
    var old = localStorage.getItem(name);
    if (old === null) {
        localStorage.setItem(name, data);
    }
    else
        localStorage.setItem(name, old + "," + data);
}

*/
    //appendToStorage("book" + i, bookID);

    //window.localStorage.clear();

    //localStorage.setItem('test', bookID);

    //alert(localStorage.getItem("book2"));

    //localStorage.setItem("bookID", bookID);

    //localStorage.setItem("bookID", localStorage.getItem("bookID") + "," + bookID);


    //alert(localStorage.getItem('test')); // 1

/*for (let i = 0; i < localStorage.length; i++) {

    let key = localStorage.key(i);

    console.log(localStorage.getItem(key));

    alert(localStorage.getItem(key));

}*/

/*for (var i = 0, len = localStorage.length; i < len; ++i) {
    console.log(localStorage.getItem(localStorage.key(i)));
}*/

    //console.log(localStorage.getItem(localStorage.key(0)));

    //alert(localStorage.getItem(localStorage.key(0)))

    // Clear all values from local storage

    //window.localStorage.clear();
