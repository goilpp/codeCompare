"use strict";
const languageForm = document.getElementById('languageForm');
const select = document.getElementById('primaryLang');
const h1 = document.querySelector('h1');

/**
 * * FUNCTIONS
 */
function setLocalStorage(key, val) {
	return localStorage.setItem(key, JSON.stringify(val));
}

function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

function initHomePage() {
  const h1Text = getLocalStorage('h1');
  if (!h1Text) {
    setLocalStorage('h1', 'Choose a primary language and at least 1 secondary language');
  } else {
    h1.textContent = getLocalStorage('h1');
    // make the selected primary language be selected on page load
    const selectedIdx = Number(getLocalStorage('selection'))
    select.options[selectedIdx].selected = true;

    const langs = getLocalStorage('checkedLangs')

    // check the secondary languages the user checked
    langs.forEach(val => {
      const checkbox = document.querySelector(`input[type="checkbox"][value="${val}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }
}


/**
 * * EVENT LISTENERS
 */

// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. form listener
languageForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get the text for the selected primary language - save to LS
  const selectedText = select.options[select.selectedIndex].text;
  // const selectedValue = select.value;
  setLocalStorage('selection', select.selectedIndex)

  // Get the checked boxes and save to LS
  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const checkedValues = [...checkedBoxes].map(box => box.value);
  setLocalStorage('checkedLangs', checkedValues)

  // Set the h1 textContent for the user choices
  const values = [...checkedBoxes].map(box => box.value);
  const headingText = `Compare ${selectedText} to ${values.join(' and ')}`;

  // Save the heading text to LS
  setLocalStorage('h1', headingText)
  h1.textContent = getLocalStorage('h1');

  // Now I need to add the page content


  console.dir(e.target);
})