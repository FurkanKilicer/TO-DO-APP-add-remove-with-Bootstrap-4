  const form = document.querySelector('form');
  const input = document.querySelector('#txtTaskName');
  const btnDeleteAll = document.querySelector('#btnDeleteAll');
  const taskList = document.querySelector('#task-list');

  eventListeners();


  function eventListeners() {
      //submit event
      form.addEventListener('submit', addNewItem);

      //delete an item
      taskList.addEventListener("click", deleteItem);

      //delete All items
      btnDeleteAll.addEventListener('click', deleteAllItems)

  }




  // Add New Item
  function addNewItem(e) {
      if (input.value === '') {
          alert('add new item');
      }

      const li = document.createElement('li');
      li.className = 'list-group-item list-group-item-secondary';
      li.appendChild(document.createTextNode(input.value));
      const a = document.createElement('a');
      a.classList = 'delete-item float-right';
      a.setAttribute('href', '#');
      a.innerHTML = '<i class="fas fa-times"></i>';

      // Add a to li
      li.appendChild(a);

      //Add li to ul 
      taskList.appendChild(li);

      //clear input 
      input.value = '';


      e.preventDefault();
  }


  function deleteItem(e) {
      if (e.target.className === 'fas fa-times') {
          e.target.parentElement.parentElement.remove();
      }

      //Scrool no Refresh
      e.preventDefault();
  }
  //delete an item

  function deleteAllItems(e) {
      taskList.innerHTML = '';

      e.preventDefault();
  }
