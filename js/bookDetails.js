function getID()
{
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    bookInformation(id);
}

function bookInformation(ID)
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

            /*if (naziv.length > 30) {

                naziv = naziv.substring(0, 20) + "...";

            }*/

            if (snap.key == ID) {

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

                $("#bookDetails").append(

                    '<div class="col-lg-5 com-md-6 col-sm-12 col-xs-12 mb-4">' + 

                    '<img class="img-fluid img-thumbnail img-responsive" id="bookImage" src="' + slika + '" alt="Slika knjige">' + '</div>' +

                    '<div class="col-lg-4 com-md-3 col-sm-0 col-xs-0 mb-4">' + '<b class="h2">Book details:</b>' + '<p></p>' + 

                    '<p class="lead">Book name: ' + naziv + '</p>' + '<p class="lead">ISBN: ' + isbn + '</p>' + 

                    '<p class="lead">Book publisher: ' + izdavackaKuca + '</p>' + '<p class="lead">Author: ' + autor + '</p>' + 

                    '<p class="lead">Year of release: ' + godinaIzdavanja + '</p>' + '<p class="lead">Pages: ' + brojStranica + '</p>' +

                    '<p class="lead">Letter: ' + pismo + '</p>' + '<p class="lead">Language: ' + jezik + '</p>' +

                    '<p class="lead">Format: ' + tipPoveza + '</p>' + '<p>' + 'Rate:' + '<span style="text-indent: 6px;" class="' + rate1 +

                    '" id="star" onclick="add(this,1)"></span>' + '<span style="text-indent: 6px;" class="' + rate2 + '" id="star" onclick="add(this,2)"></span>' +

                    '<span style="text-indent: 6px;" class="' + rate3 + '" id="star" onclick="add(this,3)"></span>' + '<span style="text-indent: 6px;" class="' + rate4 +

                    '" id="star" onclick="add(this,4)"></span>' + '<span style="text-indent: 6px;" class="' + rate5 + '" id="star" onclick="add(this,5)"></span>' +

                    '<p></p>' + '<p><strong>Price: ' + cena + ' $</strong></p>' + '<div class="clearfix">' +

                    '<a style="margin-right:6px;" href="#" class="btn btn-primary mb-2" data-toggle="modal" data-target="#rateBook">Rate</a>' +

                    '<button style="margin-right:6px;" onclick="addToCart(\'' + bookID + '\')" class="btn btn-primary mb-2">Add to cart</button>' +

                    '<a href="editBookDetails.html?id=' + bookID +'" class="btn btn-primary mb-2">Edit</a> </div> </div>' + '<div class="col-lg-3 com-md-3 col-sm-0 col-xs-0 mb-4">' +

                    '<b class="h2">Book description:</b>' + '<p></p>' + '<p class="lead">' + opis + '</p> </div> </div>'



                );

            }
        });
    })
}



