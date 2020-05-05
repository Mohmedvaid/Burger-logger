$(document).ready(function () {

    //on submit button click entered value is saved in the 'burger' variable
    $(".submit-btn").click(function () {
        event.preventDefault();
        let burger = $(".form-control").val();

        //this function will do a post request to api
        addBurger(burger)
        //reload the page with new data
        location.reload();
    });

        // this will get the burger id to devour the burger
    $(".dev-btn").click(function () {
        event.preventDefault();
        id = this.id;
        console.log(id)
        //make a put request to chage the value in database to true
        devourBurger(id)

        //reload
        location.reload();
    });

    let addBurger = function (burger) {
        return $.ajax({
            url: "/api/burgers",
            data: burger,
            method: "POST"
        });
    }

    let devourBurger = function (id) {
        return $.ajax({
            url: "/api/burgers/" + id,
            method: "PUT"
        });
    }



});