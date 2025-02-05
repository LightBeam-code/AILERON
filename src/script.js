
function func(event) {

    event.preventDefault();

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
   
   
   const btn1= document.getElementById('btn1');
   const out1 = document.getElementById('output1');
   
   arr
   
   function fun1(){
       out1.innerHTML= user.value;
   }
   btn1.addEventListener('click',fun1)
   
   localStorage.setItem('Is_user.name',name);
   localStorage.setItem('Is_user.email',email);
   localStorage.setItem('Is_user.pass',password);
   localStorage.setItem('Is_user.email',email);
   localStorage.setItem('Is_user.address',address);
   localStorage.setItem('Is_user.city',city);
   localStorage.setItem('Is_user.county',county);
   localStorage.setItem('Is_user.country',country);
   

}
