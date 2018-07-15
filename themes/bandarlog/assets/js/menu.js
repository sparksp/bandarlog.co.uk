(function (window, document) {
    'use strict';

    // Enable drop-down menus in Pure
    // Inspired by YUI3 gallery-simple-menu by Julien LeComte
    // [https://github.com/yui/yui3-gallery/blob/master/src/gallery-simple-menu/js/simple-menu.js]

    function PureDropdown(dropdownParent) {

        var PREFIX = 'pure-',
            ACTIVE_CLASS_NAME = PREFIX + 'menu-active',
            ALLOW_HOVER_CLASS_NAME = PREFIX + 'menu-allow-hover',
            ARIA_ROLE = 'role',
            ARIA_HIDDEN = 'aria-hidden',
            ELEMENT_NODE = 1, // Node.ELEMENT_NODE
            MENU_OPEN = 0,
            MENU_CLOSED = 1,
            MENU_PARENT_CLASS_NAME = 'pure-menu-has-children',
            MENU_ACTIVE_SELECTOR = '.pure-menu-active',
            MENU_LINK_SELECTOR = '.pure-menu-link',
            MENU_SELECTOR = '.pure-menu-children',
            DISMISS_EVENT = (window.hasOwnProperty &&
                window.hasOwnProperty('ontouchstart')) ?
                    'touchstart' : 'mousedown',

            ARROW_KEYS_ENABLED = true,

            ddm = this; // drop down menu

            this._state = MENU_CLOSED;

            this.show = function () {
                if (this._state !== MENU_OPEN) {
                    this._dropdownParent.classList.add(ACTIVE_CLASS_NAME);
                    this._menu.setAttribute(ARIA_HIDDEN, false);
                    this._state = MENU_OPEN;
                }
            };

            this.hide = function () {
                if (this._state !== MENU_CLOSED) {
                    this._dropdownParent.classList.remove(ACTIVE_CLASS_NAME);
                    this._menu.setAttribute(ARIA_HIDDEN, true);
                    this._link.focus();
                    this._state = MENU_CLOSED;
                }
            };

            this.toggle = function () {
                this[this._state === MENU_CLOSED ? 'show' : 'hide']();
            };

            this.halt = function (e) {
                e.stopPropagation();
                e.preventDefault();
            };

            this.findFirstSibling = function () {
                return this._menu.querySelector('.pure-menu-item');
            };
            this.findLastSibling = function () {
                return this._menu.querySelector('.pure-menu-item:last-child');
            };

            this.selectPreviousLink = function (currentLink) {
                var previousSibling,
                    previousLink;

                var findPreviousSibling = function (currentSibling) {
                    if (!currentSibling) return;

                    var previousSibling = currentSibling.previousSibling;
                    // if the previousSibling is a text node (not an element), go to the previous one
                    if (previousSibling && previousSibling.nodeType !== ELEMENT_NODE) {
                        return findPreviousSibling(previousSibling);
                    }
                    return previousSibling;
                };
                var findPreviousLink = function (li) {
                    if (!li) return;

                    var previousLink = li.querySelector(MENU_LINK_SELECTOR);
                    if (previousLink) {
                        return previousLink;
                    }
                    return findPreviousLink(findPreviousSibling(li));
                };
                
                if (!currentLink) {
                    previousSibling = this.findLastSibling();
                }
                else {
                    previousSibling = findPreviousSibling(currentLink.parentNode) || this.findLastSibling();
                }

                previousLink = findPreviousLink(previousSibling);
                previousLink && previousLink.focus();
            };

            this.selectNextLink = function (currentLink) {
                var nextSibling,
                    nextLink;

                var findNextSibling = function (currentSibling) {
                    if (!currentSibling) return;

                    var nextSibling = currentSibling.nextSibling;
                    // if the nextSibling is a text node (not an element), go to the next one
                    if (nextSibling && nextSibling.nodeType !== ELEMENT_NODE) {
                        return findNextSibling(nextSibling);
                    }
                    return nextSibling;
                };
                var findNextLink = function (li) {
                    if (!li) return;

                    var nextLink = li.querySelector(MENU_LINK_SELECTOR);
                    if (!nextLink) {
                        return findNextLink(findNextSibling(li));
                    }
                    return nextLink;
                };
                
                if (!currentLink) {
                    nextSibling = this.findFirstSibling();
                }
                else {
                    nextSibling = findNextSibling(currentLink.parentNode) || this.findFirstSibling();
                }

                nextLink = findNextLink(nextSibling);
                nextLink && nextLink.focus();
            };
        
            this._dropdownParent = dropdownParent;
            this._link = this._dropdownParent.querySelector(MENU_LINK_SELECTOR);
            this._menu = this._dropdownParent.querySelector(MENU_SELECTOR);
            this._firstMenuLink = this._menu.querySelector(MENU_LINK_SELECTOR);

            // Set ARIA attributes
            this._link.setAttribute('aria-haspopup', 'true');
            this._menu.setAttribute(ARIA_ROLE, 'menu');
            this._menu.setAttribute('aria-labelledby', this._link.getAttribute('id'));
            this._menu.setAttribute('aria-hidden', 'true');
            [].forEach.call(
                this._menu.querySelectorAll('li'),
                function(el){
                    el.setAttribute(ARIA_ROLE, 'presentation');
                }
            );
            [].forEach.call(
                this._menu.querySelectorAll('a'),
                function(el){
                    el.setAttribute(ARIA_ROLE, 'menuitem');
                }
            );

            // Toggle on click
            this._link.addEventListener('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                ddm.toggle();
            });

            // Disable hover mode
            this._dropdownParent.classList.remove(ALLOW_HOVER_CLASS_NAME);

            // Keyboard navigation
            document.addEventListener('keydown', function (e) {
                var currentLink,
                    previousSibling,
                    nextSibling,
                    previousLink,
                    nextLink;

                // if the menu isn't active, ignore
                if (ddm._state !== MENU_OPEN) {
                    return;
                }

                // if the menu is the parent of an open, active submenu, ignore
                if (ddm._menu.querySelector(MENU_ACTIVE_SELECTOR)) {
                    return;
                }

                currentLink = ddm._menu.querySelector(':focus');

                // Dismiss an open menu on ESC
                if (e.keyCode === 27) {
                    /* Esc */
                    ddm.halt(e);
                    ddm.hide();
                }
                // Go to the next link on down arrow
                else if (ARROW_KEYS_ENABLED && e.keyCode === 40) {
                    /* Down arrow */
                    ddm.halt(e);
                    ddm.selectNextLink(currentLink);
                }
                // Go to the previous link on up arrow
                else if (ARROW_KEYS_ENABLED && e.keyCode === 38) {
                    /* Up arrow */
                    ddm.halt(e);
                    ddm.selectPreviousLink(currentLink);
                }
            });

            // Dismiss an open menu on outside event
            document.addEventListener(DISMISS_EVENT, function (e) {
                var target = e.target;
                if (target !== ddm._link && !ddm._menu.contains(target)) {
                    ddm.hide();
                    ddm._link.blur();
                }
            });

    }

    function initDropdowns() {
        var dropdownParents = document.querySelectorAll('.pure-menu-has-children');
        for (var i = 0; i < dropdownParents.length; i++) {
            var ddm = new PureDropdown(dropdownParents[i]);
        }
    }

    initDropdowns();

}(this, this.document));