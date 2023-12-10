document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal2");
    var btn = document.getElementById("myBtn2");
    var span = document.getElementsByClassName("close 1")[0];
    const triangleForm = document.getElementById('triangleForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultDiv = document.getElementById('result');
    const areaResultSpan = document.getElementById('areaResult');
    const additionalInfoCheckbox = document.getElementById('additionalInfoCheckbox');
    const additionalInfoDiv = document.getElementById('additionalInfo');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    calculateBtn.addEventListener('click', calculateArea);
    clearBtn.addEventListener('click', clearForm);

    function calculateArea() {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);

        if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
            alert('Будь ласка, введіть коректні значення.');
            return;
        }
        const area = 0.5 * base * height;

        resultDiv.classList.remove('hidden');
        areaResultSpan.textContent = area;
    }
    function clearForm() {
        triangleForm.reset();
        resultDiv.classList.add('hidden');
        additionalInfoDiv.classList.add('hidden');
        additionalInfoCheckbox.checked = false;
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const text1 = "Word wor-word 1-1";
    const regex1 = /\b(?:[a-zA-Z]+-+[a-zA-Z]+)\b/g;
    console.log(text1.match(regex1));

    const text2 = "IP1: 192.168.1.122  IP2: 10.0.0.255.";
    const regex2 = /\b\d{3}\.\d{3}\.\d{1}\.\d{3}\b/g;
    console.log(text2.match(regex2));
});

function validateText() {
    const textField = document.getElementById('textField');
    const regex4 = /\b\d{2}\.\d{2}\.\d{4}\b/g;

    if (regex4.test(textField.value)) {
        textField.classList.add('valid');
        textField.classList.remove('invalid');
    } else {
        textField.classList.remove('valid');
        textField.classList.add('invalid');
    }
}

function validateFile() {
    const fileField = document.getElementById('fileField');
    const regex5 = /\.(txt|docx|pdf)$/i;

    if (regex5.test(fileField.value)) {
        fileField.classList.add('valid');
        fileField.classList.remove('invalid');
    } else {
        fileField.classList.remove('valid');
        fileField.classList.add('invalid');
    }
}

