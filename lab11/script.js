document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];


    btn.onclick = function() {
        modal.style.display = "block";
        $("#myModal").hide().fadeIn(1000);
    }

    span.onclick = function() {
        $("#myModal").fadeOut(1000);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal1");
    var btn = document.getElementById("myBtn1");
    var span = document.getElementsByClassName("close one")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        $("#myModal1").hide().fadeIn(1000);
    }

    span.onclick = function() {
        $("#myModal1").fadeOut(1000);
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
    var span = document.getElementsByClassName("close two")[0];
    const triangleForm = document.getElementById('triangleForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultDiv = document.getElementById('result');
    const areaResultSpan = document.getElementById('areaResult');

    btn.onclick = function() {
        modal.style.display = "block";
        $("#myModal2").hide().fadeIn(1000);
    }

    span.onclick = function() {
        $("#myModal2").fadeOut(1000);
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
    }
});

//
//
// document.addEventListener('DOMContentLoaded', function () {
//     const text1 = "Word wor-word 1-1";
//     const regex1 = /\b(?:[a-zA-Z]+-+[a-zA-Z]+)\b/g;
//     console.log(text1.match(regex1));
//
//     const text2 = "IP1: 192.168.1.122  IP2: 10.0.0.255.";
//     const regex2 = /\b\d{3}\.\d{3}\.\d{1}\.\d{3}\b/g;
//     console.log(text2.match(regex2));
// });
//
// function validateText() {
//     const textField = document.getElementById('textField');
//     const regex4 = /\b\d{2}\.\d{2}\.\d{4}\b/g;
//
//     if (regex4.test(textField.value)) {
//         textField.classList.add('valid');
//         textField.classList.remove('invalid');
//     } else {
//         textField.classList.remove('valid');
//         textField.classList.add('invalid');
//     }
// }
//
// function validateFile() {
//     const fileField = document.getElementById('fileField');
//     const regex5 = /\.(txt|docx|pdf)$/i;
//
//     if (regex5.test(fileField.value)) {
//         fileField.classList.add('valid');
//         fileField.classList.remove('invalid');
//     } else {
//         fileField.classList.remove('valid');
//         fileField.classList.add('invalid');
//     }
// }


// $(document).ready(function() {
//     // Валідація форми за допомогою jQuery Validate
//     $("#registrationForm").validate({
//         rules: {
//             username: "required",
//             email: {
//                 required: true,
//                 email: true
//             },
//             password: {
//                 required: true,
//                 minlength: 6
//             },
//             confirmPassword: {
//                 required: true,
//                 equalTo: "#password"
//             }
//         },
//         messages: {
//             username: "Будь ласка, введіть ім'я користувача",
//             email: {
//                 required: "Будь ласка, введіть електронну пошту",
//                 email: "Будь ласка, введіть коректну електронну пошту"
//             },
//             password: {
//                 required: "Будь ласка, введіть пароль",
//                 minlength: "Пароль повинен містити щонайменше 6 символів"
//             },
//             confirmPassword: {
//                 required: "Будь ласка, підтвердіть пароль",
//                 equalTo: "Паролі повинні співпадати"
//             }
//         }
//     });
// });

    function loadPosts() {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'posts.json', true);
        xhr.onload = function () {
            if (this.status === 200) {
                var posts = JSON.parse(this.responseText);
                displayPosts(posts);
            } else {
                console.error('An error occurred!');
            }
        };

        xhr.send();
    }

function displayPosts(posts) {
    var postsContainer = document.getElementById('posts-container');
    posts.forEach(function(post, index) {
        var postElement = document.createElement('div');
        postElement.innerHTML = `
            <p>${post.content}</p>
            <button class="like-button" id="like-button-${post.id}" onclick="toggleLike(${index})">Подобається</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Викликаємо функцію для завантаження постів при завантаженні сторінки
    document.addEventListener('DOMContentLoaded', function () {
        loadPosts();
    });
function toggleLike(postId) {
    console.log('Function called');
    var likes = JSON.parse(localStorage.getItem('likes')) || {};
    likes[postId] = !likes[postId];
    localStorage.setItem('likes', JSON.stringify(likes));
    console.log(postId)
    console.log(likes[postId]);
    updateLikeButton(postId, likes[postId]);
    updateLikeCount(postId, likes[postId]);
}

function updateLikeButton(postId, isLiked) {
    var likeButton = document.getElementById('like-button-'+(postId+1));
    console.log(likeButton);
    likeButton.style.color = isLiked ? 'red' : 'white';
}

function updateLikeCount(postId, isLiked) {
    var likeCountElement = document.getElementById('idid');
    var likes = JSON.parse(localStorage.getItem('likes')) || {};
    var count = likes[postId] ? (isLiked ? 1 : -1) : 0;
    likes[postId] = isLiked;
    localStorage.setItem('likes', JSON.stringify(likes));
    likeCountElement.textContent = parseInt(likeCountElement.textContent) + count;
}