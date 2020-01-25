import renderBrewer from './render-brewer.js';
import brewers from '../data/brewers.js';

// Set 'list' variable storing an array of brewers
const brewersList = document.getElementById('brewers');

// For each item in the list
brewers.forEach(brewer => {
    // Execute renderBrewer function, passing in each brewer and storing result
    const domGenerate = renderBrewer(brewer);
    
    // Append to the top level list element
    brewersList.appendChild(domGenerate);
});
