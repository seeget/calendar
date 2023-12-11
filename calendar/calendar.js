 const monthE1 = document.querySelector(".date h1");
 const fullDateE1 = document.querySelector(".date p");
 const lastDay


 
 const monthInx = new Date().getMonth();


 const months = [
    "January",
    "February",
"March",
"April",
"May",
 "June",
 "July",
 "August",
 "September",
  "October",
  "November", 
 "December",
];

monthE1.innerText = months[monthInx];
fullDateE1.innerText = new Date().toDateString();

