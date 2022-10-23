// Question 1:
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();


// Question 2:
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 3:
heading.style.fontSize = "2em";


// Question 4:
heading.className = "subheading";


// Question 5:
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
   paragraphs[i].style.color = "red";
}


// Question 6:
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7:
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function logsCatsNames(list) {

    for (let i = 0; i < list.length; i++) {
     console.log(list[i].name); 
    }
}

logsCatsNames(cats);


// Question 8:
const catContainer = document.querySelector(".cat-container");

let html = "";
let catAge = "Age unknown";

function createCats(cats) {

for (let i = 0; i < cats.length; i++) {
    
    html += `<div>
    <h5>${cats[i].name}</h5>
    <p>${catAge}</p>
    </div>`;

    if(cats[i].age) {
        catAge = cats[i].age;
    }
}
return html;
}

catContainer.innerHTML = createCats(cats);



