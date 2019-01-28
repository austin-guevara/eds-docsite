'use strict'

/**
 * HTML beautification
 */
const beautify = require('js-beautify').html

const beautifyHTML = (element) => element.textContent = beautify(element.textContent)
const codePreviews = document.querySelectorAll('code.language-markup')
Array.from(codePreviews)
  .forEach((codePreview) =>
    beautifyHTML(codePreview)
  )

/**
 * Syntax highlighting
 */
import '../../node_modules/prismjs/themes/prism.css';
const Prism = require('prismjs');

/**
 * Show an element
 * @param {Node} element
 */
const showhide = (element) => {
  element.nextElementSibling.classList.toggle('slds-show')
  element.nextElementSibling.classList.toggle('slds-hide')
  if (element.getAttribute("aria-expanded") == "false") {
    element.setAttribute("aria-expanded", "true")
  } else {
    element.setAttribute("aria-expanded", "false")
  }
}

/**
 * Vertical navigation
 * https://www.lightningdesignsystem.com/components/vertical-navigation/
 */
const collapseButtons = document.querySelectorAll('.slds-nav-vertical__overflow > .slds-button')

Array.from(collapseButtons)
  .forEach((button) =>
    button.addEventListener('click', (event) => showhide(event.currentTarget), false)
  )

/**
 * Vertical navigation
 * https://www.lightningdesignsystem.com/components/vertical-navigation/
 */
const componentButtons = document.querySelectorAll('ul .slds-nav-vertical__item')

/**
 * Component description page
 */
const componentPages = document.querySelectorAll('div.standard-page')

/**
 * Component iFrame previews
 */
const componentIframes = document.querySelectorAll('iframe')

/**
 * Resize iFrames
 * https://www.lightningdesignsystem.com/components/vertical-navigation/
 */
const resizeIframe = obj => obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px'

/**
 * When hash changes, show/hide the proper section
 */
function selectActive() {
  // Make the correct page active
  Array.from(componentButtons)
    .forEach((button) =>
      location.hash.slice(1) === button.id ? button.classList.add("slds-is-active") : button.classList.remove("slds-is-active")
    )

  // TODO: Show only the correct *part* of the page
  // Need separate array for just .standard-page component <div>s
  Array.from(componentPages)
    .forEach((page) =>
      location.hash.slice(1) === page.id ? (
				page.classList.remove('slds-hide')
      ) : (
        page.classList.add('slds-hide')
      )
	)

	// If you load just '/components/', set it to a page pls
	// location.hash.slice(1) === "" ? (
	// 	console.log('nothing'),
	// 	// window.location.hash = '#' + '{{ shared.components[0].id }}'
	// 	Array.from(componentPages)[0].classList.remove('slds-hide'),
	// 	Array.from(componentButtons)[0].classList.add("slds-is-active")
	// ) : (
	// 	console.log('something')
	// )
	
	Array.from(componentIframes)
		.forEach((frame) =>
			resizeIframe(frame)
	)
}

window.addEventListener('hashchange', selectActive, false)
window.onload = selectActive
