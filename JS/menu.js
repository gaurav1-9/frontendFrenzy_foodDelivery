fetch('../food-desc.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const menuContainer = document.querySelector('.menu');

        data.forEach((item, index) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const foodImage = document.createElement('img');
            foodImage.src = item.image_url;
            foodImage.alt = item.food_name;
            foodImage.classList.add('food-image');

            const foodDetails = document.createElement('div');
            foodDetails.classList.add('food-details');

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');

            const addToCartButton = document.createElement('icon');
            addToCartButton.classList.add('add-to-cart');
            addToCartButton.innerHTML = '<i class="ri-add-circle-fill"></i>';

            const decreaseButton = document.createElement('icon');
            decreaseButton.classList.add('decrease');
            decreaseButton.innerHTML = '<i class="ri-delete-bin-line"></i>';

            const cartCounter = document.createElement('span');
            cartCounter.classList.add('cart-counter');
            cartCounter.textContent = '0'; 

            addToCartButton.addEventListener('click', () => {
                let currentCount = parseInt(cartCounter.textContent);
                cartCounter.textContent = currentCount + 1;
            });

            decreaseButton.addEventListener('click', () => {
                let currentCount = parseInt(cartCounter.textContent);
                if (currentCount > 0) {
                    cartCounter.textContent = currentCount - 1;
                }
            });

            buttonContainer.appendChild(addToCartButton);
            buttonContainer.appendChild(cartCounter);
            buttonContainer.appendChild(decreaseButton);

            foodDetails.innerHTML = `
                <h2 class="food-name">${item.food_name}</h2>
                <p class="food-price">$${item.food_price.toFixed(2)}</p>
                <p class="food-description">${item.food_description}</p>
                <p class="restaurant-name">Restaurant: ${item.restaurant_name}</p>
            `;

            foodDetails.appendChild(buttonContainer);

            menuItem.appendChild(foodImage);
            menuItem.appendChild(foodDetails);

            menuContainer.appendChild(menuItem);
        });
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
