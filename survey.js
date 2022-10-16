const scriptURL = 'https://script.google.com/macros/s/AKfycbyhLf3LQ9qz9HJ2aeZ93CcoO-XbZwfct5cEQCy8gR86bbI9OSt77q5B9CfpSuUfdYC8/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})