// This function will create a <div> and insert an image inside it
function displayStaticImage() {
    // Create a div element
    var divElement = document.createElement('div');
    
    // Create an image element
    var imgElement = document.createElement('img');
    imgElement.src = 'https://i.imgur.com/rHAGGEJ.jpg'; // Replace this with the path to your image
    imgElement.alt = 'Description of the image'; // Replace with a relevant description
    
    // Append the image to the div
    divElement.appendChild(imgElement);

    // Append the div to the body of the document
    document.body.appendChild(divElement);
}

// Call the function to execute it
displayStaticImage();
