// Professional form validation with error messages under fields
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear all previous errors
        clearErrors();
        
        let isValid = true;
        
        // Get password fields
        const password = document.querySelector('input[placeholder="Password"]');
        const confirmPassword = document.querySelector('input[placeholder="Confirm password"]');
        
        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        }
        
        // If form is valid, submit
        if (isValid && form.checkValidity()) {
            alert('Form submitted successfully!');
        }
    });
    
    // Real-time password matching
    const confirmPassword = document.querySelector('input[placeholder="Confirm password"]');
    confirmPassword.addEventListener('input', function() {
        const password = document.querySelector('input[placeholder="Password"]');
        
        if (this.value && password.value) {
            if (this.value !== password.value) {
                showError(this, 'Passwords do not match');
            } else {
                clearError(this);
            }
        } else {
            clearError(this);
        }
    });
});

function showError(input, message) {
    const inputGroup = input.closest('.input-group');
    const existingError = inputGroup.querySelector('.error-message');
    
    // Remove existing error message
    if (existingError) {
        existingError.remove();
    }
    
    // Create and add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    inputGroup.appendChild(errorDiv);
    
    // Add error styling to input
    input.classList.add('error');
}

function clearError(input) {
    const inputGroup = input.closest('.input-group');
    const errorMessage = inputGroup.querySelector('.error-message');
    
    if (errorMessage) {
        errorMessage.remove();
    }
    
    input.classList.remove('error');
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorInputs = document.querySelectorAll('input.error');
    
    errorMessages.forEach(msg => msg.remove());
    errorInputs.forEach(input => input.classList.remove('error'));
}