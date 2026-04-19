// script.js

// Función para generar una contraseña aleatoria
function generatePassword() {
  const length = document.getElementById('length').value; // Longitud de la contraseña
  const useUppercase = document.getElementById('uppercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
  let characterSet = lowerCaseChars;
  if (useUppercase) characterSet += upperCaseChars;
  if (useNumbers) characterSet += numberChars;
  if (useSymbols) characterSet += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  document.getElementById('password').value = password;
}

// Función para copiar la contraseña al portapapeles
function copyPassword() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand('copy');
}

// Event listeners
document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);

// Llamada inicial para generar una contraseña cuando la página cargue
generatePassword();