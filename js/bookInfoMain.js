$(document).ready(function () {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var searchKey = url.searchParams.get("src");

    if (searchKey != null) {
        searchKey = searchKey.toLowerCase();
    }

    console.log(searchKey);

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
        var punNaziv = snap.child("naziv").val().toLowerCase();

        if (naziv.length > 20) {

            naziv = naziv.substring(0, 20) + "...";

        }

        rate1 = "fa fa-star";
        rate2 = "fa fa-star";
        rate3 = "fa fa-star";
        rate4 = "fa fa-star";
        rate5 = "fa fa-star";

        if (ocena == "1") {

            rate1 = "fa fa-star checked";

        }

        if (ocena == "2") {

            rate1 = "fa fa-star checked";
            rate2 = "fa fa-star checked";

        }

        if (ocena == "3") {

            rate1 = "fa fa-star checked";
            rate2 = "fa fa-star checked";
            rate3 = "fa fa-star checked";

        }

        if (ocena == "4") {

            rate1 = "fa fa-star checked";
            rate2 = "fa fa-star checked";
            rate3 = "fa fa-star checked";
            rate4 = "fa fa-star checked";

        }

        if (ocena == "5") {

            rate1 = "fa fa-star checked";
            rate2 = "fa fa-star checked";
            rate3 = "fa fa-star checked";
            rate4 = "fa fa-star checked";
            rate5 = "fa fa-star checked";

        }

        if (punNaziv.includes(searchKey) == true || searchKey == null) {

            $("#books").append(

                '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">' +

                '<div class="card">' + '<div class="card-body text-right">' +

                '<a href="bookDetails?id=' + bookID + '" onclick="#bookDetails">' + '<img class="card-img-top" src="' + slika +

                '" hegiht="350" width="350"/>' + '</a>' + '<a href="bookDetails?id=' + bookID + '" onclick="#bookDetails" class="card-title">' + naziv + '</a>' +

                '<p class="card-text">' + autor + '</p>' + '<div class="card-text" style="text-indent: 6px;">' + '<span class="' + rate1 +

                '" id="star" onclick="add(this,1)"></span>' + '<span class="' + rate2 + '" id="star" onclick="add(this,2)"></span>' + '<span class="' + rate3 +

                '" id="star" onclick="add(this,3)"></span>' +

                '<span class="' + rate4 + '" id="star" onclick="add(this,4)"></span>' + '<span class="' + rate5 + '" id="star" onclick="add(this,5)"></span>  </div>' +

                '<script src="js\function.js"></script>' + '<p class="card-text"><strong>' + cena + ' $' + '</strong></p>' + '<div class="clearfix">' +

                '<a href="bookDetails?id=' + bookID + '" class="btn btn-primary" id="bookDetails" style="margin-right:6px;">Details</a>' +

                '<a href="#" onclick="addToCart(\'' + bookID + '\')" class="btn btn-primary">Add to cart</a> </div>' + '<script src="js\bookDetails.js"></script>' + '</div> </div> </div>'

            );
        }


    });
});