fetch('/api/users')
  .then(response => response.json())
  .then(data => {
    const usersList = document.querySelector('ul');
    data.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.username} (${user.phoneNumber}) - ${user.email}`;
      const deleteForm = document.createElement('form');
      deleteForm.action = `/api/users/${user.id}`;
      deleteForm.method = 'post';
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = '_method';
      hiddenInput.value = 'DELETE';
      deleteForm.appendChild(hiddenInput);
      const deleteButton = document.createElement('button');
      deleteButton.type = 'submit';
      deleteButton.textContent = 'Delete';
      deleteForm.appendChild(deleteButton);
      listItem.appendChild(deleteForm);
      usersList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));