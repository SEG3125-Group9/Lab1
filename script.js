document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submitButton");
    
    submitButton.addEventListener("click", function () {
        // Opens popup container
        var popupContainer = document.getElementById("popupContainer");
        popupContainer.style.display = "flex"; 
        setTimeout(function () {
            popupContainer.style.display = "none";
        }, 2000);
        
        var formData = {
            firstName: document.getElementsByName("firstname")[0].value,
            lastName: document.getElementsByName("lastname")[0].value,
            province: document.getElementById("province").value,
            rating: document.querySelector('input[name="rating"]:checked').value,
        };
        //console.log(formData);
    });
    
  });
  