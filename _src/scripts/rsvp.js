function setAttend(attend) {
  let numAttending = document.getElementById("numAttending");
  numAttending.disabled = !attend;
  if (!attend) {
    numAttending.value = "0";
  }
}

function submitRsvp() {
  const submitButton = document.getElementById('submit');
  const form = document.getElementById('rsvp-form');
  const status = document.getElementById('status');
  const numAttendingField = document.getElementById('numAttending');

  const name = document.getElementById('name').value;
  const attending = document.getElementById('acceptInvite').checked;
  const notAttending = document.getElementById('declineInvite').checked;
  const numAttending = numAttendingField.value;
  const comments = document.getElementById('comments').value;

  if (!(name && name.length > 5 && (attending || notAttending) && numAttending && name.length > 0)) {
    // Inputs invalid; abort and allow form validation to take over
    return true;
  }

  submitButton.disabled = true;
  const xhr = new XMLHttpRequest();

  const onError = () => {
    submitButton.disabled = false;
    status.innerHTML = "Something went wrong";
    status.style.color = "red";
  };
  xhr.addEventListener('load', (response) => {
    submitButton.disabled = false;
    if (response.target.status == 200 && response.target.response == "{}") {
      status.innerHTML = "Your RSVP was received. Thank you!";
      status.style.color = "#12795d";
      form.reset();
      numAttendingField.disabled = false;
    } else {
      onError();
    }
  });
  xhr.addEventListener('error', onError);

  xhr.open('POST', 'https://54d6p8wjui.execute-api.us-east-2.amazonaws.com/Production/rsvp');
  xhr.setRequestHeader("Content-Type", "application/json");
  
  const data = {
    name: name,
    attending: attending,
    numberAttending: Number(numAttending),
    comments: comments
  }

  xhr.send(JSON.stringify(data));

  return false; // valid, don't allow form to redirect
}