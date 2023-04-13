//your JS code here. If required.
function meta(){
	const pElement = document.getElementById("status");

// Create a new h1 element
const h1Element = document.createElement('h1');

// Copy the text content from the p element to the h1 element
h1Element.textContent = "Entered Metaverse"

// Replace the p element with the new h1 element
pElement.replaceWith(h1Element);
        }