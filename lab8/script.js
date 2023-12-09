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
    additionalInfoCheckbox.addEventListener('change', toggleAdditionalInfo);

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