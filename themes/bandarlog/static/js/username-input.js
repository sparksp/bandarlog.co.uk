(function (window, document) {
    'use strict';

    // Populates username field with calculated username from another field,
    // and provides validation of whether the username is available.

    function Sanitizer() {
        var MAP = {
            // LATIN
            'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
            'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I',
            'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O',
            'Õ': 'O', 'Ö': 'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U',
            'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH', 'Ÿ': 'Y', 'ß': 'ss', 'à': 'a',
            'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
            'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i',
            'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o',
            'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
            'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y',
            // LATIN_SYMBOLS
            '©': '(c)',
            // GREEK
            'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h',
            'θ': '8', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3',
            'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f',
            'χ': 'x', 'ψ': 'ps', 'ω': 'w', 'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o',
            'ύ': 'y', 'ή': 'h', 'ώ': 'w', 'ς': 's', 'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y',
            'ΐ': 'i', 'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z',
            'Η': 'H', 'Θ': '8', 'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N',
            'Ξ': '3', 'Ο': 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y',
            'Φ': 'F', 'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W', 'Ά': 'A', 'Έ': 'E', 'Ί': 'I',
            'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W', 'Ϊ': 'I', 'Ϋ': 'Y',
            // TURKISH
            'ş': 's', 'Ş': 'S', 'ı': 'i', 'İ': 'I', 'ç': 'c', 'Ç': 'C', 'ü': 'u',
            'Ü': 'U', 'ö': 'o', 'Ö': 'O', 'ğ': 'g', 'Ğ': 'G',
            // ROMANIAN
            'ă': 'a', 'î': 'i', 'ș': 's', 'ț': 't', 'â': 'a',
            'Ă': 'A', 'Î': 'I', 'Ș': 'S', 'Ț': 'T', 'Â': 'A',
            // RUSSIAN
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
            'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm',
            'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
            'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '',
            'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
            'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
            'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M',
            'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
            'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '',
            'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
            // UKRAINIAN
            'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G', 'є': 'ye', 'і': 'i',
            'ї': 'yi', 'ґ': 'g',
            // CZECH
            'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't',
            'ů': 'u', 'ž': 'z', 'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R',
            'Š': 'S', 'Ť': 'T', 'Ů': 'U', 'Ž': 'Z',
            // SLOVAK
            'á': 'a', 'ä': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'í': 'i', 'ľ': 'l',
            'ĺ': 'l', 'ň': 'n', 'ó': 'o', 'ô': 'o', 'ŕ': 'r', 'š': 's', 'ť': 't',
            'ú': 'u', 'ý': 'y', 'ž': 'z',
            'Á': 'a', 'Ä': 'A', 'Č': 'C', 'Ď': 'D', 'É': 'E', 'Í': 'I', 'Ľ': 'L',
            'Ĺ': 'L', 'Ň': 'N', 'Ó': 'O', 'Ô': 'O', 'Ŕ': 'R', 'Š': 'S', 'Ť': 'T',
            'Ú': 'U', 'Ý': 'Y', 'Ž': 'Z',
            // POLISH
            'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's',
            'ź': 'z', 'ż': 'z',
            'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S',
            'Ź': 'Z', 'Ż': 'Z',
            // LATVIAN
            'ā': 'a', 'č': 'c', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l',
            'ņ': 'n', 'š': 's', 'ū': 'u', 'ž': 'z',
            'Ā': 'A', 'Č': 'C', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'I', 'Ķ': 'K', 'Ļ': 'L',
            'Ņ': 'N', 'Š': 'S', 'Ū': 'U', 'Ž': 'Z',
            // ARABIC
            'أ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'g', 'ح': 'h', 'خ': 'kh',
            'د': 'd', 'ذ': 'th', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': 's',
            'ض': 'd', 'ط': 't', 'ظ': 'th', 'ع': 'aa', 'غ': 'gh', 'ف': 'f', 'ق': 'k',
            'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'و': 'o', 'ي': 'y',
            // LITHUANIAN
            'ą': 'a', 'č': 'c', 'ę': 'e', 'ė': 'e', 'į': 'i', 'š': 's', 'ų': 'u',
            'ū': 'u', 'ž': 'z',
            'Ą': 'A', 'Č': 'C', 'Ę': 'E', 'Ė': 'E', 'Į': 'I', 'Š': 'S', 'Ų': 'U',
            'Ū': 'U', 'Ž': 'Z',
            // SERBIAN
            'ђ': 'dj', 'ј': 'j', 'љ': 'lj', 'њ': 'nj', 'ћ': 'c', 'џ': 'dz',
            'đ': 'dj', 'Ђ': 'Dj', 'Ј': 'j', 'Љ': 'Lj', 'Њ': 'Nj', 'Ћ': 'C',
            'Џ': 'Dz', 'Đ': 'Dj',
            // AZERBAIJANI
            'ç': 'c', 'ə': 'e', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
            'Ç': 'C', 'Ə': 'E', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U',
            // GEORGIAN
            'ა': 'a', 'ბ': 'b', 'გ': 'g', 'დ': 'd', 'ე': 'e', 'ვ': 'v', 'ზ': 'z',
            'თ': 't', 'ი': 'i', 'კ': 'k', 'ლ': 'l', 'მ': 'm', 'ნ': 'n', 'ო': 'o',
            'პ': 'p', 'ჟ': 'j', 'რ': 'r', 'ს': 's', 'ტ': 't', 'უ': 'u', 'ფ': 'f',
            'ქ': 'q', 'ღ': 'g', 'ყ': 'y', 'შ': 'sh', 'ჩ': 'ch', 'ც': 'c', 'ძ': 'dz',
            'წ': 'w', 'ჭ': 'ch', 'ხ': 'x', 'ჯ': 'j', 'ჰ': 'h',
            // SYMBOLS
            '&': 'and', '@': 'at'
        };
        var NOT_ALLOWED = "[^a-z0-9_-]+";

        this.sanitize = function (text) {
            return text
                // Characters
                .replace(/[^]/g, function (m) {
                    if (MAP.hasOwnProperty(m)) {
                        return MAP[m];
                    }
                    return m;
                })
                // trim
                .replace(new RegExp('^' + NOT_ALLOWED + '|' + NOT_ALLOWED + '$', 'gi'), '')
                // replace non-characters
                .replace(new RegExp(NOT_ALLOWED, 'gi'), '-');
        };
    }

    function UsernameInput(input) {
        var usernameInput = input,
            pureInput = getPureInput(usernameInput),
            titleInputId = getData(input, 'input'),
            titleInput = titleInputId ? document.getElementById(titleInputId) : null,
            customUsername = false,
            sanitizer = new Sanitizer(),
            ERROR_CLASS = 'has-error';

        function getPureInput(elm) {
            return elm.closest('.pure-input') || elm;
        }
        function getData(elm, name) {
            if (elm.dataset)
                return elm.dataset[name];
            return elm.getAttribute('data-' + name);
        }
        function getTitle() {
            return titleInput.value;
        }
        function getUsername() {
            return usernameInput.value;
        }
        function setUsername(newUsername) {
            usernameInput.value = makeUsername(newUsername);
        }
        function makeUsername(text) {
            return sanitizer.sanitize(text).toLowerCase()
        }
        function setUsernameFromTitle() {
            if (!customUsername) {
                setUsername(getTitle());
            }
        }
        function updateUsername() {
            var newUsername = getUsername();
            if (usernameInput.value == "") {
                newUsername = getTitle();
            }
            setUsername(newUsername);

            customUsername = (usernameInput.value != makeUsername(getTitle()));
        }
        function setErrorState() {
            pureInput.classList.add(ERROR_CLASS);
        }
        function clearErrorState() {
            pureInput.classList.remove(ERROR_CLASS);
        }
        function validateUsername() {
            var httpRequest = new XMLHttpRequest(),
                currentUsername = getUsername();

            if (currentUsername == '') {
                clearErrorState()
                return false;
            }
            if (!httpRequest) {
                console.error('Cannot create an XMLHttpRequest');
                return false;
            }
            httpRequest.onreadystatechange = recordStatus;
            httpRequest.open('HEAD', '/' + currentUsername + '/');
            httpRequest.send();

            function recordStatus() {
                if (httpRequest.readyState === (XMLHttpRequest.HEADERS_RECEIVED || XMLHttpRequest.READYSTATE_LOADED)) {
                    if (httpRequest.status === 200) {
                        setErrorState();
                    } else {
                        clearErrorState();
                    }
                }
            }
        }

        if (titleInput) {
            titleInput.addEventListener('focus', updateUsername);
            titleInput.addEventListener('change', setUsernameFromTitle);
            titleInput.addEventListener('keyup', setUsernameFromTitle);
            titleInput.addEventListener('change', validateUsername);
        }
        if (usernameInput) {
            usernameInput.addEventListener('change', updateUsername);
            usernameInput.addEventListener('change', validateUsername);
        }
    }

    function initInputs() {
        var usernameInputs = document.querySelectorAll('input.username');
        for (var i = 0; i < usernameInputs.length; i++) {
            new UsernameInput(usernameInputs[i]);
        }
    }

    initInputs();
}(this, this.document));