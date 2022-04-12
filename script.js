window.onload = function () {
  let ratingState = document.getElementById("rating-state");
  let thankState = document.getElementById("thank-state");
  let form = document.getElementById("rating-form");
  let ratingMsgValue = document.getElementById("rating-msg-value");

  let getRadioValue = function () {
    let inputs = form.elements["rating"];
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      if (input.checked) {
        return input.id;
      }
    }
  };

  let updateRatingMsg = function (event) {
    let value = getRadioValue();
    event.preventDefault();
    if (value != undefined) {
      ratingMsgValue.innerHTML = value;
      ratingState.classList.add("hidden");
      thankState.classList.remove("hidden");
    } else {
      alert('Select a rating please')
    }
  };

  form.addEventListener("submit", updateRatingMsg);
};
