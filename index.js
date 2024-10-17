document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed!");

  const title = document.querySelector("h1");
  title.textContent = "Welcome to My HTML Adventure!";

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph added by JavaScript!";
  document.body.appendChild(newParagraph); 
  
  const strongText = document.querySelector("strong");
  strongText.style.color = "blue"; 
 
  const hyperlink = document.querySelector("a");
  hyperlink.style.color = "green"; 
  
  const tableRows = document.querySelectorAll("table tbody tr");
  tableRows.forEach((row) => {
    console.log("Row content:", row.innerText);
  });
});
