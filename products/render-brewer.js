export default function renderBrewer(brewer) {
    // Create list element that contains a class and title (assigned to category and description)
    const li = document.createElement('li');
    // The class of the list element should correspond to the brewer category
    li.className = brewer.category;
    // The title of the list element should correspond to the brewer description
    li.title = brewer.description;

    // Create an image
    const img = document.createElement('img');
    // Assign image source and alt text
    img.src = brewer.image;
    img.alt = brewer.name + ' image'; 
    // Append the img element to the li element
    li.appendChild(img);

    // Create an h3 element
    const h3 = document.createElement('h3');
    // The content of the element should correspond to the brewer name
    h3.textContent = brewer.name;
    // Append the h3 element to the li element
    li.appendChild(h3);

    // Create a p element
    const p = document.createElement('p');
    // The class of the p element should be 'price'
    p.className = 'price';

    // Calculate the price
    const usd = '$' + brewer.price.toFixed(2);
    p.textContent = usd;

    // Add button
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = brewer.code;
    p.appendChild(button);

    // Append p element to li
    li.appendChild(p);

    return li;

}






    // <ul class="container" id="coffee-brewer">
    // <li class="pour-over" id="chemex" title="Delicate and slightly more user-friendly than the V60."></li>
    // <img src="../assets/chemex-white-bold.png" alt="Chemex">
    // <h3>Chemex</h3>
    // <p>Price: $30.00</p>
    // <button id="chemex-button" value="chemex">Add to Cart</button>
