import emailjs from "@emailjs/browser";

emailjs.init("user_YxP8w6mA1FpMnzGbet6Iz");

async function handleSubmit() {
  let message;
  let errorMessage = document.querySelector("#error");
  let successMessage = document.querySelector("#success");
  let submitButton = document.querySelector("#submit-button");

  submitButton.disabled = true;

  emailjs.sendForm('service_fl5i2he', 'template_af8j9pd', "#contact-form")
    .then(function (response) {
      message = "Message was sent successfully!";
      alert(message);
      submitButton.disabled = false;
      successMessage.innerHTML = message;
    }, function (error) {
      message = "Something went wrong";
      alert(message);
      submitButton.disabled = false;
      errorMessage.innerHTML = message;
    });
};

export {
  handleSubmit
};