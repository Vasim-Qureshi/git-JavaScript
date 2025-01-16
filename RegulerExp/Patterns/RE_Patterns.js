document.getElementById('validateButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const phonePattern = /^\+?[0-9]{10,15}$/; // International phone number format
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password validation
  
    const emailMessage = document.getElementById('emailMessage');
    const phoneMessage = document.getElementById('phoneMessage');
    const passwordMessage = document.getElementById('passwordMessage');
  
    // Validate email
    if (emailPattern.test(email)) {
      emailMessage.textContent = 'Valid email!';
      emailMessage.style.color = 'green';
    } else {
      emailMessage.textContent = 'Invalid email format!';
      emailMessage.style.color = 'red';
    }
  
    // Validate phone number
    if (phonePattern.test(phone)) {
      phoneMessage.textContent = 'Valid phone number!';
      phoneMessage.style.color = 'green';
    } else {
      phoneMessage.textContent = 'Invalid phone number!';
      phoneMessage.style.color = 'red';
    }
  
    // Validate password
    if (passwordPattern.test(password)) {
      passwordMessage.textContent = 'Strong password!';
      passwordMessage.style.color = 'green';
    } else {
      passwordMessage.textContent = 'Password must be at least 8 characters long, include an uppercase letter and a number.';
      passwordMessage.style.color = 'red';
    }
  });

document.getElementById('validateButton').addEventListener('click', () => {
  const fields = {
    url: { value: document.getElementById('url').value, pattern: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-.]*)*\/?$/, message: 'Invalid URL format!' },
    date: { value: document.getElementById('date').value, pattern: /^\d{4}-\d{2}-\d{2}$/, message: 'Invalid date format! Use YYYY-MM-DD.' },
    time: { value: document.getElementById('time').value, pattern: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/, message: 'Invalid time format! Use HH:MM.' },
    postal: { value: document.getElementById('postal').value, pattern: /^\d{5}(-\d{4})?$/, message: 'Invalid postal code!' },
    hexColor: { value: document.getElementById('hexColor').value, pattern: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, message: 'Invalid hex color code!' },
  };

  for (const [field, { value, pattern, message }] of Object.entries(fields)) {
    const messageSpan = document.getElementById(`${field}Message`);
    if (pattern.test(value)) {
      messageSpan.textContent = `Valid ${field} with ${pattern}!`;
      messageSpan.style.color = 'green';
    } else {
      messageSpan.textContent = message;
      messageSpan.style.color = 'red';
    }
  }
});
  