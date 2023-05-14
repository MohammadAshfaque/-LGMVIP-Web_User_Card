const getUsersBtn = document.getElementById('get-users-btn');
const userGrid = document.getElementById('user-grid');
const loader = document.getElementById('loader');

getUsersBtn.addEventListener('click', () => {
  loader.style.display = 'block';

  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      loader.style.display = 'none';

      // Clear any previous users in the grid
      userGrid.innerHTML = '';

      // Loop through each user and create a user card
      data.data.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const avatarImg = document.createElement('img');
        avatarImg.src = user.avatar;
        avatarImg.alt = 'User Avatar';

        const name = document.createElement('h2');
        name.innerText = `${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.innerText = user.email;

        userCard.appendChild(avatarImg);
        userCard.appendChild(name);
        userCard.appendChild(email);

        userGrid.appendChild(userCard);
      });
    })
    .catch(error => {
      loader.style.display = 'none';
      console.error('Error:', error);
    });
});
