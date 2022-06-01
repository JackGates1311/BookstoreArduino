function getID()
{
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    editBookInformation(id);
}

function editBookInformation(ID)
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

            if (snap.key == ID)
            {

                    var opcijaMeki = "";
                    var opcijaTvrdi = "";

                    if (tipPoveza == "Hardcover")
                    {
                        opcijaTvrdi = "selected";
                    }
                    if (tipPoveza == "Paperback")
                    {
                        opcijaMeki = "selected";
                }

                $("#editBookDetails").append(

                    '<div class="row justify-content-center">' + '<b class="h2">Edit book details:</b></div>' + ' <p></p>' +

                    '<form id="editBookDetailsForm">' + '<div class="form-row">' + '<div class="form-group col-md-4">' + '<label>Name:  </label>' +

                    '<input type="text" class="form-control" id="bookName" name="bookName" placeholder="" value="' + naziv + '">' + '</div>' +

                    '<div class="form-group col-md-4">' + '<label>Publisher: </label>' +

                    '<input type="text" class="form-control" id="bookPublisher" name="bookPublisher" placeholder="" value="' + izdavackaKuca + '">' + '</div>' +

                    '<div class="form-group col-md-4">' + '<label>Image: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="bookImageURL" name="bookImageURL" value="' + slika + '">' + '</div></div>' +

                    '<div class="form-row">' + '<div class="form-group col-md-3">' + '<label>Author: </label>' +

                    '<input type="text" class="form-control" id="bookAuthor" name="bookAuthor" placeholder="" value="' + autor + '">' + '</div>' +

                    '<div class="form-group col-md-3">' + '<label>ISBN: </label>' +

                    '<input type="text" class="form-control" id="bookISBN" name="bookISBN" placeholder="" value="' + isbn + '">' + '</div>' + 

                    '<div class="form-group col-md-3">' + '<label>Year of release: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="bookPublishYear" name="bookPublishYear" value="' + godinaIzdavanja + '">' + '</div>' +

                    '<div class="form-group col-md-3">' + '<label>Pages: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="bookPageNumber" name="bookPageNumber" value="' + brojStranica + '">' + '</div></div>' +

                    '<div class="form-row">' + '<div class="form-group col-md-3">' + '<label>Letter: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="bookLetter" name="bookLetter" value="' + pismo + '">' + '</div>' +

                    '<div class="form-group col-md-3">' + '<label>Language: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="bookLanguage" name="bookLanguage" value="' + jezik + '">' + '</div>' +

                    '<div class="form-group col-md-2">' + '<label>Format: </label>' + '<div class="form-group">' + 

                    '<select class="form-control" id="selectTypeOfBind">' + '<option ' + opcijaTvrdi + '>Hardcover</option>' + '<option ' + opcijaMeki + '>Paperback</option>' +

                    '</select> </div> </div>' + '<div class="form-group col-md-2">' + '<label>Rate: </label>' +

                    '<input type="text" class="form-control" placeholder="" id="bookRate" name="bookRate" value="' + ocena + '">' + '</div>' +

                    '<div class="form-group col-md-2">' + '<label>Price (USD): </label>' +

                    '<input type="text" class="form-control" placeholder="" id="bookPrice" name="bookPrice" value="' + cena + '">' + '</div>' + '</div>' +

                    '<div class="form-group">' + '<label>Description: </label>' +

                    '<textarea class="form-control" id="bookDescription" name="bookDescription" rows="5" id="comment">' + opis + '</textarea> </div>' +

                    '<div class="clearfix">' + '<button type="button" class="btn btn-primary float-right ml-2" id="btnSaveBookDetails">Save</button>' +

                    '<button type="button" id="btnDeleteDialog" data-toggle="modal" data-target="#deleteConfirmation" class="btn btn-primary float-right ml-2">Remove</button>' +

                    '<a type="button" class="btn btn-secondary float-right ml-2" href="bookDetails?id=' + bookID + '">Cancel</a>' +

                    '</div> <p></p> </form>'
                );
            }
        });
    });

}