const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  // flag variable
 
  let inBetween = false;
  if (e.shiftKey && this.checked) {
     // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
        // this = last checked checknbox
      if (checkbox === this || checkbox === lastChecked) {
        // flagging all checkboxes between first and last = true
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }
     
    //   checking flagged checkboxes
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // console.log(e);
  lastChecked = this;
}
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
