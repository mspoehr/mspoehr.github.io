function setAttend(attend) {
  let numAttending = document.getElementById("numAttending");
  numAttending.disabled = !attend;
  if (!attend) {
    numAttending.value = "0";
  }
}

function submitRsvp() {
  const name = document.getElementById('name').value;
  const attending = document.getElementById('acceptInvite').checked;
  const numAttending = document.getElementById('numAttending').value;
  const comments = document.getElementById('comments').value;

  if (!(name && attending !== undefined && numAttending && name.length > 0)) {
    // Inputs invalid; abort and allow form validation to take over
    return true;
  }

  const xhr = new XMLHttpRequest();
  
  xhr.addEventListener('load', (response) => {
    const status = document.getElementById('status');
    if (response.target.status == 200 && response.target.response == "{}") {
      status.innerHTML = "Your RSVP was received. Thank you!";
      status.style.color = "#12795d";
    } else {
      status.innerHTML = "Something went wrong";
      status.style.color = "red";
    }
  });

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