








// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    // Get user input from form fields
    var name = document.querySelector('input[name="myName"]').value;
    var age = document.querySelector('input[name="myAge"]').value;
    var height = document.querySelector('input[name="myHeight"]').value;
    var weight = document.querySelector('input[name="myWeight"]').value;
    var symptoms = document.querySelector('input[name="mySymtom"]').value;
    var medicalRecord = document.querySelector('input[name="myRecord"]').value;
    var allergies = document.querySelector('input[name="myAllergy"]').value;
    var disease = document.querySelector('input[name="myDisease"]').value;
  
    // Display user input on the webpage
    var outputElement = document.createElement('div');
    outputElement.className = 'user-information';
    outputElement.innerHTML = `
      <h2>User Information:</h2>
      <p>Name: ${name}</p>
      <p>Age: ${age}</p>
      <p>Height: ${height} cm</p>
      <p>Weight: ${weight} kg</p>
      <h2>Health Information:</h2>
      <p>Symptoms: ${symptoms}</p>
      <p>Previous Medical Record: ${medicalRecord}</p>
      <p>Allergies: ${allergies}</p>
      <p>Disease: ${disease}</p>
    `;
  
    // Append the user information to the form section
    var formSection = document.querySelector('.form_design');
    formSection.appendChild(outputElement);
  }
  
  // Add an event listener to the form for submission
  var form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  