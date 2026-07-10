// Listen for clicks anywhere on the webpage
document.addEventListener("click", function(event) {
  
  // Check if the thing clicked was a <summary> (your dropdown titles)
  const summary = event.target.closest("summary");
  if (!summary) return;

  // Find the specific dropdown box that was clicked
  const clickedDetails = summary.closest("details");
  
  // If the box is currently closed (meaning the user is opening it)
  if (!clickedDetails.open) {
    
    // Find EVERY dropdown box on the entire page
    document.querySelectorAll("details").forEach(function(details) {
      
      // If it's NOT the one the user just clicked, and it is currently open, close it!
      if (details !== clickedDetails && details.open) {
        details.open = false;
      }
    });
  }
});