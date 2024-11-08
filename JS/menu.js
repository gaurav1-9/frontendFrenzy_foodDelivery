fetch('../food-desc.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        const menuContainer = document.querySelector('.menu');

        data.forEach(item => {
            // Create a container div for each menu item
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            // Set the HTML structure for each menu item
            menuItem.innerHTML = `
        <img src="${item.image_url}" alt="${item.food_name}" class="food-image">
        <h2 class="food-name">${item.food_name}</h2>
        <p class="food-price">$${item.food_price.toFixed(2)}</p>
        <p class="food-description">${item.food_description}</p>
        <p class="restaurant-name">Restaurant: ${item.restaurant_name}</p>
      `;

            // Append the menu item to the menu container
            menuContainer.appendChild(menuItem);
        });
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
