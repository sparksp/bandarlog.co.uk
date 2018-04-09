(function (window, document) {
    'use strict';

    // Enhances Photo input with preview and toggles linked description visibility.

    function PhotoInput(input) {
        var fileInput = input,
            descriptionInputId = getData(fileInput, 'descriptionInput'),
            descriptionInput = descriptionInputId ? document.getElementById(descriptionInputId) : null,
            descriptionControl = descriptionInput ? descriptionInput.closest('.pure-control-group') : null,
            previewImg = null;
        
        function hideDescription() {
            descriptionControl.classList.add('hidden');
        }
        function showDescription() {
            descriptionControl.classList.remove('hidden');
        }

        function hidePreview() {
            previewImg.classList.add('hidden');
        }
        function showPreview(file) {
            previewImg.src = window.URL.createObjectURL(fileInput.files[0]);
            previewImg.classList.remove('hidden');
        }

        function revealDescription() {
            if (fileInput.value != '') {
                showDescription();
                showPreview(fileInput.value);
            }
            else {
                hideDescription();
                hidePreview();
            }
        }

        function createImage() {
            var img = document.createElement('img');
            img.className = 'preview hidden';
            img.style.height = "300px";
            return img;
        }

        if (descriptionControl) {
            previewImg = createImage();
            fileInput.parentNode.parentNode.insertBefore(previewImg, fileInput.parentNode);
            fileInput.addEventListener('change', revealDescription);
            hideDescription();
        }

        function getData(elm, name) {
            if (elm.dataset)
                return elm.dataset[name];
            return elm.getAttribute('data-' + name);
        }

    }

    function initInputs() {
        var fileInputs = document.querySelectorAll('input[type=file]');
        for (var i = 0; i < fileInputs.length; i++) {
            new PhotoInput(fileInputs[i]);
        }
    }

    initInputs();
}(this, this.document));