import { renderLineItems } from './render-line-items.js';
import { findById, calcLineItem } from '../common/utils.js';
import cart from '../data/cart.js';
import products from '../products/products.js';




// 1. locate the tbody element where your line items will go
// 2. loop through your data
// 3. Create a variable based on the current array index.
// 4. Use your findById function to find the corresponding product for this line item
// 4. Pass these to your DOM generation function and capture result in variable
// 5. Append to the table body (tbody)