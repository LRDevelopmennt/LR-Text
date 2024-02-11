(function() {
    var textContainer = document.getElementById("textcontainer");
    var textLabel = document.getElementById("text-label");
    var textInfo = document.getElementById("text-info");

    textContainer.style.display = "none";

    window.addEventListener("message", function(event) {
        if (event.data.action === "openText") {
            textContainer.style.display = "block";

            textContainer.style.display = (event.data.info === undefined) ? "none" : "block";

            textLabel.innerHTML = event.data.label;
            textInfo.innerHTML = event.data.info;

            $('#textcontainer').animate({
                'margin-left': '-3%'
            });

        } else if (event.data.action === "closeText") {
            $('#textcontainer').animate({
                'margin-left': '-30%'
            });

            setTimeout(function() {
                textContainer.style.display = "none";
                textLabel.innerHTML = "";
                textInfo.innerHTML = "";
            }, 1000);
        }
    });
})();