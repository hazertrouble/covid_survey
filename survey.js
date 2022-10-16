const scriptURL = 'https://script.google.com/macros/s/AKfycbx-8rNtarWaEJYkPXoD-Aa-4cm-vXP5q0-D7dTsinRFwMehBkZ7pM0TTykB2l5SKZhi/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      swal("Good job!", "Thanks for answering the survey", "success");
      document.getElementsByName('submit-form')[0].reset();
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