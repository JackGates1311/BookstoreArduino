function add(ths, sno)
{
    var rate = 0

    for (var i = 1; i <= 5; i++)
    {
        var cur = document.getElementById("star" + i)
        cur.className = "fa fa-star"
    }

    for (var i = 1; i <= sno; i++) {
        var cur = document.getElementById("star" + i)
        if (cur.className == "fa fa-star") {
            cur.className = "fa fa-star checked"
            rate += 1;
        }
    }

    console.log(rate);

}

function confirmRate() {
    alert("You have rated this book successfully!");

    location.reload(true);
}

function showPassword()
{
    var x = document.getElementById("loginPassword");

    if (x.type === "password")
    {
        x.type = "text";
    }
    else
    {
        x.type = "password";
    }
}

function enableEdit()
{
    $("input").prop('disabled', false);
    $("select").prop('disabled', false);
    $("#btnSave").prop('hidden', false);
    $("#btnEdit").prop('hidden', true);
    $("#btnCancel").prop('hidden', false);
}

function showPasswordUser()
{
    var x = document.getElementById("passwordEdit");

    var btnShowPassword = document.getElementById("btnShowPassword");

    if (x.type === "password")
    {
        x.type = "text";

        btnShowPassword.innerHTML = "Hide password";

    }
    else
    {
        x.type = "password";

        btnShowPassword.innerHTML = "Show password"; /*&#382; means symbol 'ž'*/
    }
}
