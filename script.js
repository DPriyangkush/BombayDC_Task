document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
  });

  
  function initDropdowns() {
    document.querySelectorAll('.dropdown-container').forEach(container => {
      setupDropdown(container);
    });
  }

 
  function setupDropdown(container) {
    const header = container.querySelector('.dropdown-header');
    const options = container.querySelectorAll('.dropdown-options li');
    const hiddenInput = container.querySelector('input[type="hidden"]');

   
    header.addEventListener('click', function(e) {
      e.stopPropagation();
      container.classList.toggle('open');
      
      
      document.querySelectorAll('.dropdown-container').forEach(dd => {
        if (dd !== container) dd.classList.remove('open');
      });
    });

    
    options.forEach(option => {
      option.addEventListener('click', function(e) {
        e.stopPropagation();
        const value = this.getAttribute('data-value');
        const text = this.textContent;
        
        hiddenInput.value = value;
        header.querySelector('span:first-child').textContent = text;
        container.classList.remove('open');
        
      
        if (hiddenInput.id === 'queryType') {
          updateDynamicFields(value);
        }
      });
    });
  }

  
  function updateDynamicFields(queryType) {
    const dynamicFields = document.getElementById('dynamicFields');
    dynamicFields.innerHTML = '';

    if (queryType === 'project') {
      dynamicFields.innerHTML = `
        <div class="dropdown-container" id="projectDropdown">
          <div class="dropdown-header">
            <span>Select Project</span>
            <span class="dropdown-arrow">▼</span>
          </div>
          <ul class="dropdown-options">
            <li data-value="1">Project 1</li>
            <li data-value="2">Project 2</li>
            <li data-value="3">Project 3</li>
            <li data-value="4">Project 4</li>
            <li data-value="5">Project 5</li>
            <li data-value="6">Project 6</li>
          </ul>
          <input type="hidden" name="project" required>
        </div>
      `;
      
      
      setupDropdown(document.getElementById('projectDropdown'));
    } 
    else if (queryType === 'media') {
      dynamicFields.innerHTML = `
        <input type="file" id="mediaUpload" accept="image/*,video/*" required />
      `;
    } 
    else if (queryType === 'career') {
      dynamicFields.innerHTML = `
        <textarea placeholder="Tell us about your career interests" required></textarea>
      `;
    }
  }

  
  document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-container').forEach(dropdown => {
      dropdown.classList.remove('open');
    });
  });

  
  initDropdowns();
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function subscribe() {
  const email = document.getElementById('email-input').value;
  if (email) {
    alert(`Subscribed with: ${email}`);
  } else {
    alert("Please enter a valid email address.");
  }
}

function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
}

function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
  }

  
  document.addEventListener('click', function(event) {
    const overlay = document.getElementById('popupOverlay');
    const content = document.querySelector('.popup-content');
    if (event.target === overlay) {
      overlay.style.display = 'none';
    }
  });