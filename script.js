
//Login page

document.getElementById("log-in").addEventListener("click", function () {
    // Get user input values from login form
    const email = document.getElementById("typeEmailX-2").value;
    const password = document.getElementById("typePasswordX-2").value;
  
    if (email && password) {
        // Get users from local storage
        let users = JSON.parse(localStorage.getItem("users")) || [];
  
        // Check if the entered email exists
        const user = users.find(user => user.email === email);
  
        if (user) {
            // Email is correct, check the password
            if (user.password === password) {
                // Password is correct
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    // Redirect to dashboard page after login
                    window.location.href = "Dashboard.html";
                });
            } else {
                // Password is incorrect
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect password!',
                    text: 'The email is correct, but the password is wrong.',
                });
            }
        } else {
            // Email is incorrect
            Swal.fire({
                icon: 'error',
                title: 'Incorrect email!',
                text: 'No user found with this email.',
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'All fields are required!',
        });
    }
  });
