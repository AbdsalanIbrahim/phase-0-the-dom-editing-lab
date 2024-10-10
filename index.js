// Function to change the text content of the heading
function changeHeadingText() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Welcome to My Enhanced HTML Adventure!';
  }
  
  // Function to show an alert when the paragraph is clicked
  function showAlert() {
    alert('You clicked on the paragraph!');
  }
  
  // Adding event listeners to the elements
  document.addEventListener('DOMContentLoaded', () => {
    // Change the heading text on page load
    changeHeadingText();
  
    // Add click event listener to the paragraph
    const paragraph = document.querySelector('p');
    paragraph.addEventListener('click', showAlert);
  });
  