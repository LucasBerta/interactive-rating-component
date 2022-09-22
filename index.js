const optionIds = ["option-1", "option-2", "option-3", "option-4", "option-5"];

let selectedOption = "";

function selectOption(id) {
  selectedOption = id;

  optionIds.forEach((option) => {
    const element = document.getElementById(option);
    if (option === id) {
      element.classList.add("selected");
    } else {
      element.classList.remove("selected");
    }
  });
  toggleErrorFeedback();
}

function submitForm() {
  toggleErrorFeedback();

  if (!!selectedOption) {
    document.getElementById("feedback").classList.add("submitted");
    setThankYouSelectedText();
  }
}

function toggleErrorFeedback() {
  const element = document.getElementById("submit-error-feedback");
  if (!selectedOption) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
}

function setThankYouSelectedText() {
  const text = `You selected ${selectedOption.replace("option-", "")} out of ${
    optionIds.length
  }`;

  document.getElementById("thank-you-card__selected-rating--text").innerText =
    text;
}
