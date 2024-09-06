const button = document.getElementById("alecButton");
let clickCount = 0;
console.log(button);

button.addEventListener("click", function() {
    clickCount++;
    console.log(clickCount);

     if (clickCount === 5) {
        button.href = "secret.html";
    }
});
