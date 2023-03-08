const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const course = document.getElementById('course').value;
  const semester = document.getElementById('semester').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${semester}</td>
  `;
  tbody.appendChild(row);

  form.reset();
});
