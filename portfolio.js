const checkbox = 
document.getElementById('checkbox');

checkbox.addEventListener('change', () =>{
	document.body.classList.toggle('dark');
});

function alertmsg(){
	var txt;
  if (confirm("Do you want to submit your feedback?")) {
    txt = "Thank you for your feedback!";
  } else {
    txt = "Your response has not been submitted.";
  }
  document.getElementById("feedbackresult").innerHTML = txt;
}


