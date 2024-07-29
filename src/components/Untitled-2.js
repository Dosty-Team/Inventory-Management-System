javascript:(function() {
    
    function clickElementsByTextContent(text) {
        var elements = document.getElementsByTagName('td');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].textContent === text) {
                elements[i].click();
                break; 
            }
        }
    }

    
    function clickBackButtonAfterDelay() {
        setTimeout(function() {
            window.history.back();
        }, 5000);
    }

    
    var textsToClick = ["SHS-44968", "SHS-44964", "SHS-44951", "SHS-44920", "SHS-42920", "SHS-42645", "SHS-42365", "SHS-42273", "SHS-42264", "SHS-42248", "SHS-42210"];

    
    function clickAndGoBack() {
        textsToClick.forEach(function(text, index) {
            
            clickElementsByTextContent(text);

            
            clickBackButtonAfterDelay();
        });
    }

    
    clickAndGoBack();
})();
