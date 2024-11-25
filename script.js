document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const college = document.getElementById('college').value;
    const cgpa = document.getElementById('cgpa').value;
    const course = document.getElementById('course').value;
    const domain = document.getElementById('domain').value;
    const year = document.querySelector('input[name="year"]:checked').value;
    const location = document.querySelector('input[name="location"]:checked').value;

    // Add new row to the table
    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${email}</td>
        <td>${contact}</td>
        <td>${college}</td>
        <td>${cgpa}</td>
        <td>${course}</td>
        <td>${domain}</td>
        <td>${year}</td>
        <td>${location}</td>
        <td><button class="edit-button" onclick="editRow(this)">Edit</button></td>
    `;
    document.getElementById('successMessage').classList.remove('hidden');

    // Reset the form
    document.getElementById('registrationForm').reset();
});

function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName('td');

    // Pre-fill the form with the row data
    document.getElementById('firstname').value = cells[0].innerText;
    document.getElementById('lastname').value = cells[1].innerText;
    document.getElementById('email').value = cells[2].innerText;
    document.getElementById('contact').value = cells[3].innerText;
    document.getElementById('college').value = cells[4].innerText;
    document.getElementById('cgpa').value = cells[5].innerText;
    document.getElementById('course').value = cells[6].innerText;
    document.getElementById('domain').value = cells[7].innerText;
    
    document.querySelector(input[name="year"][value="${cells[8].innerText}"]).checked = true;
    document.querySelector(input[name="location"][value="${cells[9].innerText}"]).checked = true;

    // Remove the row
    row.remove();
}