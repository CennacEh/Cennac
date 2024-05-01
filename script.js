document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("gform").addEventListener("submit", function(event) {
        var emailInput = document.getElementById("firstname").value;
        if (!validateEmail(emailInput)) {
          document.getElementById("emailError").style.display = "block";
          event.preventDefault();
        }
        else {
            document.getElementById("emailError").style.display = "none"
            document.getElementById("emailSuc").style.display = "block";
        }
      });
    
      function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    
    if(localStorage.getItem("visitorCount")) {
        // If it exists, retrieve it and increment by 1
        var count = parseInt(localStorage.getItem("visitorCount"));
        count++;
        localStorage.setItem("visitorCount", count);
    } else {
        // If it doesn't exist, set it to 1
        localStorage.setItem("visitorCount", 1);
    }
    
// Check if the visitor count is stored in localStorage
if(localStorage.getItem("visitorData")) {
    // If it exists, retrieve it
    var visitorData = JSON.parse(localStorage.getItem("visitorData"));
} else {
    // If it doesn't exist, initialize an empty object
    var visitorData = {};
}

// Get the IP address of the visitor
var ipAddress = "<?php echo $_SERVER['REMOTE_ADDR']; ?>";

// Check if the IP address is already in the visitorData object
if(visitorData[ipAddress]) {
    // If it exists, increment the count by 1
    visitorData[ipAddress]++;
} else {
    // If it doesn't exist, set it to 1
    visitorData[ipAddress] = 1;
}

// Update the visitorData in localStorage
localStorage.setItem("visitorData", JSON.stringify(visitorData));

    
    toggleSection("welcome");
    // Initially hide about, portfolio, and contact sections
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";

    // Add event listeners to buttons to toggle section visibility
    document.getElementById("aboutBtn").addEventListener("click", function() {
        toggleSection("about");
    });

    document.getElementById("portfolioBtn").addEventListener("click", function() {
        toggleSection("portfolio");
    });

    document.getElementById("contactBtn").addEventListener("click", function() {
        toggleSection("contact");
    });
    document.getElementById("creation").addEventListener("click", function() {
        toggleSection("portfolio");
    });
    document.getElementById("creation2").addEventListener("click", function() {
        toggleSection("portfolio");
    });

    document.getElementById("showNotificationBtn").addEventListener("click", function() {
        var notification = document.getElementById("notification");
        notification.style.display = "block";

        // Hide the notification after 3 seconds
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    });
    document.getElementById("showNotificationBtn2").addEventListener("click", function() {
        var notification = document.getElementById("notification");
        notification.style.display = "block";

        // Hide the notification after 3 seconds
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    });

    function toggleSection(sectionId) {
        // Hide welcome section on first click

        // Hide all sections
        document.getElementById("about").style.opacity = "0";
        document.getElementById("portfolio").style.opacity = "0";
        document.getElementById("contact").style.opacity = "0";

        setTimeout(function() {
            document.getElementById("welcome").style.display = "none";
            document.getElementById("about").style.display = "none";
            document.getElementById("portfolio").style.display = "none";
            document.getElementById("contact").style.display = "none";

            // Show the clicked section with animation
            document.getElementById(sectionId).style.display = "block";
            setTimeout(function() {
                document.getElementById(sectionId).style.opacity = "1";
            }, 50);
        }, 300); // Adjust this value to match the duration of your CSS transition
    }
});


