var serveBurger = function () {

    // we ask if users eat steak
    var steakEater = window.prompt("Do you eat steak? Please type 'YES' or 'NO'.");
    console.log(steakEater);

    // if answer is Yes (aka steakEater=true)
    if (steakEater==="YES" || steakEater==="yes" || steakEater==="Yes") {
        window.alert("Here's a cheeseburger. Enjoy!");
    }
    // if answer is No (aka steakEater=false)
    if (steakEater==="NO" || steakEater ==="no" ||steakEater==="No") {
        window.alert("Here's an Impossible burger. Enjoy!")
    }
    // if answer is something else
    else {
        window.alert("Please provide a Yes/No answer")
    }

}
serveBurger ();