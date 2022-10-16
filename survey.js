const scriptURL = 'https://script.google.com/macros/s/AKfycbzmxVHW9rHa_R_6CTIHhLSsZ-_2y5iFDSxjU9C0XcOY6tlVamxJoobUDAAUWbPfsA_F/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      swal("Good job!", "Thanks for answering the survey", "success");
    })
    .catch(error => {
      console.error('Error!', error.message);
      swal({
        title: "Error!",
        text: "Here's my error message!",
        type: "error",
        confirmButtonText: "Cool"
      });
    })
})