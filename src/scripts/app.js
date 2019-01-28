// Copyright (c) 2017-present, Salesforce.com, Inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

'use strict'

/**
 * Open / Close an element
 * @param {Node} element
 */
const toggle = (element) => element.classList.toggle('slds-is-open')

/**
 * Open / Close an element's parent
 * @param {Node} element
 */
const toggleParent = (element) => toggle(element.parentNode)

/**
 * Dropdown menus
 * https://www.lightningdesignsystem.com/components/menus/
 */
const dropdownButtons = document.querySelectorAll('.slds-dropdown-trigger_click > .slds-button')

Array.from(dropdownButtons)
  .forEach((button) =>
    button.addEventListener('click', (event) => toggleParent(event.currentTarget), false)
)
  
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
 * Tabs
 * https://www.lightningdesignsystem.com/components/tabs/
 */

const tabs = (variant) => document.querySelectorAll(`.slds-tabs_${variant} [role=tablist] [role=tab]`)
const tabActiveReset = (tab) => Array.from(tab.parentNode.parentNode.querySelectorAll('li'))
  .forEach((element) => element.classList.remove('slds-active'))
const tabActiveSet = (tab) => tab.parentNode.classList.add('slds-active')
const tabPanelsReset = (tab) => Array.from(tab.parentNode.parentNode.parentNode.querySelectorAll('[role="tabpanel"]'))
  .forEach((tabpanel) => {
    tabpanel.classList.remove('slds-show')
    tabpanel.classList.remove('slds-hide')
    tabpanel.classList.add('slds-hide')
  })
const tabPanelShow = (tab) => {
  const tabpanel = document.getElementById(tab.getAttribute('aria-controls'))
  tabpanel.classList.remove('slds-show')
  tabpanel.classList.remove('slds-hide')
  tabpanel.classList.add('slds-show')
}

const defaultTabs = tabs('default')
const scopedTabs = tabs('scoped')

const assignTabEvents = (event) => {
  tabActiveReset(event.currentTarget)
  tabActiveSet(event.currentTarget)
  tabPanelsReset(event.currentTarget)
  tabPanelShow(event.currentTarget)
}

Array.from(defaultTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false)
})
Array.from(scopedTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false)
})
