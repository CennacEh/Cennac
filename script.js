document.addEventListener("DOMContentLoaded", function() {

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


