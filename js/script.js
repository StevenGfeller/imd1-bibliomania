document.getElementById('add-comment-btn').addEventListener('click', function () {
    var commentForm = document.getElementById('comment-form');
    commentForm.style.display = 'block'; // Montre le formulaire
    document.getElementById('add-comment-btn').style.display = 'none'; // Cache le bouton 'Ajouter un commentaire...'
    // Met le focus sur le textarea
    var textarea = commentForm.querySelector('textarea');
    textarea.focus();
});

document.getElementById('submit-comment-btn').addEventListener('click', function () {
    var commentBox = document.querySelector('#comment-form textarea');
    var commentList = document.querySelector('.comment-list');
    var commentCount = commentList.children.length + 1; // Compte le nombre de commentaires déjà présents + 1 pour le nouveau
    var newComment = document.createElement('div');
    newComment.textContent = commentCount + '. ' + commentBox.value; // Ajoute le numéro devant le commentaire
    newComment.className = 'comment';
    commentList.appendChild(newComment);
    commentBox.value = ''; // Vide la text area
    document.getElementById('comment-form').style.display = 'none'; // Cache le formulaire après soumission
    document.getElementById('add-comment-btn').style.display = 'block'; // Réaffiche le bouton 'Ajouter un commentaire...'
});

document.getElementById('cancel-comment-btn').addEventListener('click', function () {
    document.getElementById('comment-form').style.display = 'none'; // Cache le formulaire sans ajouter de commentaire
    document.querySelector('#comment-form textarea').value = ''; // Optionnel, vide le textarea
    document.getElementById('add-comment-btn').style.display = 'block'; // Réaffiche le bouton 'Ajouter un commentaire...'
});

document.getElementById('notes-comments-btn').addEventListener('click', function () {
    var commentList = document.querySelector('.comment-list');
    if (commentList.style.display === 'none' || commentList.style.display === '') {
        commentList.style.display = 'block'; // Montre la liste des commentaires
    } else {
        commentList.style.display = 'none'; // Cache la liste des commentaires
    }
});

document.querySelectorAll('footer nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        document.querySelectorAll('footer nav a').forEach(navLink => {
            navLink.classList.remove('active'); // Remove active class from all links
        });
        this.classList.add('active'); // Add active class to the clicked link
    });
});
