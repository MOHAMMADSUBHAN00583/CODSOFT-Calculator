window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.querySelector(".buttons");

    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });

    var calc = document.getElementById("Button=");
    calc.addEventListener("click", calculate);

    var C = document.getElementById("ButtonC");
    C.addEventListener("click", erase);

    function buttonClick(buttonId) {
        if (buttonId !== "ButtonC" && buttonId !== "Button=" && buttonId.startsWith("Button")) {
            var s = buttonId.replace("Button", "");
            entries(s);
        }
    }

    function entries(s) {
        input.value += s;
    }

    function calculate() {
        try {
            input.value = eval(input.value);
        } catch {
            input.value = "Error";
        }
    }

    function erase() {
        input.value = "";
    }
};
