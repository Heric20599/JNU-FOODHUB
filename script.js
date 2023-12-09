function goToCanteen() {
    // Get the selected center from the dropdown menu
    var selectedCenter = document.getElementById("centerSelect").value;

    // Redirect to the corresponding canteen page based on the selected center
    switch(selectedCenter) {
        case "scs":
            window.location.href = "C:/HTML/webAssignment/jnu foodcanteen/CanteenPage/scs_canteen.html";
            break;
        case "sss":
            window.location.href = "C:/Users/abdul/OneDrive/Desktop/JNU FoodHub/User Interface/Canteen Pages/sss_canteen.html";
            break;
        case "sls":
            window.location.href = "C:/Users/abdul/OneDrive/Desktop/JNU FoodHub/User Interface/Canteen Pages/sls_canteen.html";
            break;
        case "sl":
            window.location.href = "C:/Users/abdul/OneDrive/Desktop/JNU FoodHub/User Interface/Canteen Pages/sl_canteen.html";
            break;
        default:
            alert("Invalid center selection.");
    }
}