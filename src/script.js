let user= {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    pass: document.getElementById("password").value,
    date: document.getElementById("date").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    county: document.getElementById("county").value,
    country: document.getElementById("country").value,
}


localStorage.setItem(
    'userData',JSON.stringify(user)
)

let getUser = JSON.parse(localStorage.
      getItem('useeData'))
    
alert('getUser..',getUser);
    




