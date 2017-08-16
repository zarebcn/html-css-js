
// Open the browser javascript console to see these messages
console.log("Javscript loaded!");

// It is good practice to put the initial at the beginning
// so we know what we're doing in this javascript file.
setupVanillaCode();
setupJQueryCode();
setupJQueryCodeInlined();
setupJQueryCodeImproved();
onKeyUpVanilla();
onKeyUpJQuery();


// --- Functions --- //

/** Vanilla Javascript example */
function setupVanillaCode() {

  const button = document.querySelector(".vanilla button");
  button.onclick = function() {
    const input = document.querySelector(".vanilla input");
    const searchTerm = input.value;
    const result = document.querySelector(".vanilla .result");
    result.textContent = "You searched for: " + searchTerm;
    button.style.display = 'none'; // hides button
  };
}

function onKeyUpVanilla() {

    let input = document.querySelector(".onkeyupjs input");
    let result = document.querySelector(".onkeyupjs .result");

    input.onkeyup = function() {

        let text = input.value;
        result.textContent = text;
    };
}

/** jQuery example (equivalent to the vanilla example above) */
function setupJQueryCode() {

  const button = $(".jquery.verbose button");
  button.click(function() {
    const input = $(".jquery.verbose input");
    const searchTerm = input.val();
    const result = $(".jquery.verbose .result");
    result.text("You searched for: " + searchTerm);
    button.hide();
  });
}

function onKeyUpJQuery() {

    let input = $(".onkeyupjq input");
    let result = $(".onkeyupjq .result");

    input.keyup(function() {

        let text = input.val();
        result.text(text);
    });
}

// With jQuery it's easy to inline variables and end up with this equivalent code:

/** jQuery example (inlined) */
function setupJQueryCodeInlined() {

  $(".jquery.inlined button").click(function() {
    $(".jquery.inlined .result").text("You searched for: " + $(".jquery.inlined input").val());
    $(".jquery.inlined button").hide();
  });
}

// But the previous code is a bit hard to read, and it also looks for elements multiple times.
// We can improve it extracting some elements into variables.

/** jQuery example (improved) */
function setupJQueryCodeImproved() {

  const div = $(".jquery.improved"); // we get the div element and then find elements inside of it
  const button = div.find("button"); // we extract the button because we use it twice

  button.click(function() {
    div.find(".result").text("You searched for: " + div.find("input").val());
    button.hide();
  });
}
