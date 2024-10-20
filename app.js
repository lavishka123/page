// Signup page


document.getElementById("register").addEventListener("click", function () {
   
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPass").value;
  
    if (name && email && password) {
      // Check if users already exist in local storage
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check if user with the same email exists
      const userExists = users.find(user => user.email === email);
  
      if (userExists) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User with this email already exists!',
        });
      } else {
        
        users.push({ name, email, password });
  
        // Store updated users array in local storage
        localStorage.setItem("users", JSON.stringify(users));
  
        
        Swal.fire({
          icon: 'success',
          title: 'Registration successful!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // Redirect to login page after success
          window.location.href = "sign-in.html";
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'All fields are required!',
      });
    }
  });