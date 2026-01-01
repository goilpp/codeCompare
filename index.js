"use strict";
import { vars } from "./js/vars.js";

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

createSection('vars', 'Variables + Miscellaneous', 'ul')
function createSection(sectionId, h3Text, tag) {
  const section = document.getElementById(sectionId)
  const primary = getLocalStorage('primary')
  const secondary = getLocalStorage('checkedLangs')
  const num = secondary.length + 1;
  

  /**
   * * NOTE: THIS IS HORRIBLE - REFACTOR BUT IT WORKS! 
   */

  const grid = document.createElement('div');
  grid.className = `grid-${num}`

  const primaryChild = document.createElement('div');
  primaryChild.className = 'primary';

  const h2 = document.createElement('h2');
  h2.textContent = primary;

  const h3 = document.createElement('h3');
  h3.textContent = h3Text;

  section.append(grid)
  grid.append(primaryChild)

  const list = document.createElement(tag);

  primaryChild.append(h2, h3, list)

  vars[primary].forEach(item => {
    const li = document.createElement('li')
    const code = document.createElement('code')
    code.className = `custom-${primary.toLowerCase()}`
    code.textContent = item;
    li.append(code)
    list.append(li)
  })

  secondary.forEach(lang => {
    const secondaryChild = document.createElement('div');
    secondaryChild.className = 'secondary';

    const h2 = document.createElement('h2');
    h2.textContent = lang;

    const h3 = document.createElement('h3');
    h3.textContent = h3Text;

    section.append(grid)
    grid.append(secondaryChild)

    const list = document.createElement(tag);

    vars[lang].forEach(item => {
      const li = document.createElement('li')
      const code = document.createElement('code')
      code.className = `custom-${primary.toLowerCase()}`
      code.textContent = item;
      li.append(code)
      list.append(li)
      secondaryChild.append(h2, h3, list)
    })
  })
}


/**
 * * EVENT LISTENERS
 */

// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// Select list 
select.addEventListener('change', e => {
  const selectedvalue = select.options[select.selectedIndex].value;
  console.log(selectedvalue)

  const boxes = document.querySelectorAll('input[type="checkbox"]');
  console.log(boxes)

  const disabled = [...boxes].filter(box => box.id === selectedvalue).map(box => box.disabled = true);
  const primarySelection = [...boxes].filter(box => box.id === selectedvalue)
  console.log(primarySelection)

  // I need to somehow maintain the disabled attribute and only remove it when the user picks a different primary language or clears LS
})

// 2. form listener
languageForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get the text for the selected primary language - save to LS
  const selectedText = select.options[select.selectedIndex].text;
  
  setLocalStorage('selection', select.selectedIndex)
  setLocalStorage('primary', selectedText)

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