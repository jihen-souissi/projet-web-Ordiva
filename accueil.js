let index = 0; // Initialiser l'index à 0

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  // Mettre à jour l'index en fonction de l'étape
  index += step;

  // Si on arrive à la fin du carrousel, on s'arrête sur la dernière image
  if (index >= totalSlides) {
    index = totalSlides - 1; // S'arrêter sur la dernière image
  } else if (index < 0) {
    index = 0; // Revenir à la première image si on va trop loin en arrière
  }

  // Déplacer les images dans le carrousel
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.style.transform = `translateX(${-index * 100}%)`;
}

// Déclenche le changement automatique toutes les 4 secondes, mais s'arrête à la dernière image
let intervalId = setInterval(() => {
  const slides = document.querySelectorAll('.carousel-slide');
  if (index < slides.length - 1) {
    moveSlide(1); // Si ce n'est pas la dernière image, continuer
  } else {
    clearInterval(intervalId); // Arrêter l'intervalle à la dernière image
  }
}, 4000); // Change l'image toutes les 4 secondes

// Ajouter la gestion des boutons "précédent" et "suivant"
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));document.addEventListener("DOMContentLoaded", () => {
    const prénom = document.getElementById("prénom");
    const nom = document.getElementById("nom");
    const mail = document.getElementById("mail");
    const mdp = document.getElementById("mdp");
    const cmdp = document.getElementById("Cmdp");
    const genre = document.getElementsByName("genre");
    const pays = document.getElementById("pays");
    const btn = document.getElementById("btn");
    const message = document.getElementById("message");

    console.log("Formulaire envoyé");
    console.log("Prénom: ", prénom, "Nom: ", nom, "Email: ", mail, "Mot de passe: ", mdp);

    btn.addEventListener("click", verif);
    if (prénom === "" || nom === "" || mail === "" || mdp === "") {
        message.innerHTML = "Tous les champs doivent être remplis.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Inscription réussie !";
        message.style.color = "green";
    }

},
    document.getElementById('btn').addEventListener('click', function () {
        // Vous pouvez ajouter une validation ici avant de rediriger, si nécessaire
        window.location.href = "accueil.html"; // Redirige vers la page d'accueil
    }));

