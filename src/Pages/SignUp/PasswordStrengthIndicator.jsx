import React from "react";

const PasswordStrengthIndicator = ({ password }) => {
  const levels = {
    0: "Very Weak",
    1: "Weak",
    2: "Moderate",
    3: "Strong",
    4: "Very Strong",
  };

  const evaluatePassword = (password) => {
    let strength = 0;
    if (password.length >= 8) {
      strength += 1;
    }

    // Contains at least one uppercase letter
    if (/[A-Z]/.test(password)) {
      strength += 1;
    }

    // Contains at least one lowercase letter
    if (/[a-z]/.test(password)) {
      strength += 1;
    }

    // Contains at least one digit
    if (/\d/.test(password)) {
      strength += 1;
    }

    // Contains at least one special character
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?/~]/.test(password)) {
      strength += 1;
    }
    return strength;
  };

  const passwordStrength = evaluatePassword(password);

  return (
    <div>
      <p>Password Strength: {levels[passwordStrength]}</p>
    </div>
  );
};

export default PasswordStrengthIndicator;
