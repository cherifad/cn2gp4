import { progressBar } from "../scripts/utils.js";
import { references, displayReferences } from "./references.js";
import { displayAlternatives } from "./activities.js";
import { displayShareBtn } from "./shareLinks.js";

const path = [];

// TABLEAU DES QUESTIONS
// id : identifiant de la question
// minimum : valeur minimale de la réponse
// question : question posée
// options : options de réponse
// answerType : type de réponse (number, button, checkbox)
// grandeur : grandeur de la réponse (Heures, Go, etc.)
// getAnswer : si la réponse est demandée
// answer : réponse
// formule : formule de calcul
// approx : valeur approximative de la réponse
// placeholder : texte dans l'input (affiché en gris)
// subQuestion : questions suivantes

export const questions = [
  {
    id: "0",
    minimum: "0",
    category: "📨 Messagerie",
    question: "En moyenne, combien d'e-mails envoyez-vous par semaine ?",
    advice:
      "Quand j'envoie des e-mails, des pièces jointes...<br> Si j'envoie un mail à 10 personnes, cela compte pour 10 e-mails.",
    resultsAdvices:
      "Pour réduire l'impact de mes e-mails: <br> - zipper les pièces jointes (les regrouper dans un seul fichier)<br> - limiter au maximum le nombre de destinataires et de pièces jointes <br> - Au lieu d'envoyer un mail à la personne à coté de moi, je privilégie les transferts USB <br> - supprimer régulièrement les e-mails inutiles (spam, newsletters...)",
    exactVal: false,
    options: null,
    answerType: "number",
    grandeur: "",
    unité: null,
    unitéConvert: null,
    getAnswer: true,
    answer: null,
    userAnswer: 0,
    formule: 0.00364 * 52,
    approx: 1.086956522,
    placeholder: "Entrez une valeur",
    prevQuestion: null,
    subQuestion: ["1"],
  },
  {
    id: "1",
    minimum: "0",
    category: "📼 Streaming vidéo",
    question:
      "En moyenne, combien d'heures par semaine passez-vous à regarder des vidéos en streaming ?",
    advice: `Quand je regarde des films sur Netflix, Amazon Prime ou alors des vidéos sur Youtube, TikTok, Instagram, etc...<br>Si vous ne pouvez pas répondre, faites une estimation, l'essentiel c'est d'apprendre !<br>➡️ Sachez que ces informations peuvent se trouver dans les statistiques d'utilisation de votre appareil.`,
    resultsAdvices:
      "Pour regarder des émissions en direct, il est préférable de privilégier la TNT à l'ADSL (votre box internet). En effet, regarder une émission en streaming HD via sa box ADSL émet autant de gaz à effet de serre que de fabriquer, transporter et lire un DVD ! <br> Un autre bon geste serait d'essayer d'activer dès que possible le mode économie d'énergie sur vos appareils.",
    exactVal: false,
    options: null,
    answerType: "number",
    grandeur: "heures",
    unité: null,
    unitéConvert: null,
    getAnswer: true,
    answer: null,
    userAnswer: 0,
    formule: 0.0622 * 52,
    approx: 1.081081081,
    placeholder: "Entrez une valeur en ",
    prevQuestion: ["0"],
    subQuestion: ["2"],
  },
  {
    id: "2",
    minimum: "0",
    category: "🛜 Transfert de données",
    question:
      "En moyenne, combien de Go de données transférez-vous par semaine ?",
    advice: `Quand je télécharge des fichiers, des photos, des vidéos, des musiques mais également quand j'envoie des fichiers, des vidéos...<br>➡️ Une image fait en moyenne 2,4Mo.<br>➡️ 1 minute de vidéo en HD fait 5Mo.<br>➡️ Un fichier PDF fait en moyenne 1Mo.`,
    resultsAdvices:
      "Afin de limiter leurs impact : <br>- Essayer de compresser les fichiers avant de les envoyer, cela réduit la taille des fichiers et donc la consommation d'énergie.",
    exactVal: false,
    options: null,
    answerType: "number",
    grandeur: "Go",
    unité: ["Go", "Mo", "Ko"],
    unitéConvert: [1, 1000, 1000000],
    getAnswer: true,
    answer: null,
    userAnswer: 0,
    formule: 0.249 * 52,
    approx: 0.8103448276,
    placeholder: "Entrez une valeur en ",
    prevQuestion: ["1"],
    subQuestion: ["3"],
  },
  {
    id: "3",
    minimum: "0",
    category: "☁️ Stockage de données dans le cloud",
    question:
      "Quelle quantité de données stockez-vous dans le cloud (via iCloud, Google Drive, OneDrive, etc.) ?",
    advice: `Quand je stocke des fichiers, des photos, des vidéos sur iCloud, Google Drive, OneDrive... <br>➡️ Ces informations sont accessibles sur les applications de stockage de données`,
    resultsAdvices:
      "- Avant de stocker des données dans le cloud, il est préférable de les compresser pour réduire la taille des fichiers et donc la consommation d'énergie.<br>- Il est également important de choisir des hébergeur avec une politique environnementale claire, comme des centres de données alimentés par des énergies renouvelables",
    exactVal: false,
    options: null,
    answerType: "number",
    grandeur: "Go",
    unité: ["Go", "Mo", "Ko"],
    unitéConvert: [1, 1000, 1000000],
    getAnswer: true,
    answer: null,
    userAnswer: null,
    formule: 0.000525,
    approx: 1.267037037,
    placeholder: "Entrez une valeur en ",
    prevQuestion: ["2"],
    subQuestion: ["4"],
  },
  {
    id: "4",
    question: "Participez-vous à des visioconférences?",
    advice:
      "Quand je participe à des réunions, des cours, des conférences en ligne, grace à Zoom, Teams, Skype..",
    options: ["oui", "non"],
    answerType: "button",
    getAnswer: false,
    answer: null,
    userAnswer: null,
    formule: null,
    approx: null,
    placeholder: null,
    subQuestion: ["4-1", "5"],
  },
  {
    id: "4-1",
    question: "Allumez-vous votre caméra lors de ces visioconférences ?",
    options: ["oui", "non"],
    answerType: "button",
    getAnswer: false,
    answer: null,
    userAnswer: null,
    formule: null,
    approx: null,
    placeholder: null,
    prevQuestion: ["4"],
    subQuestion: ["4-1-1", "4-1-2"],
  },
  {
    id: "4-1-1",
    minimum: "0",
    category: "📹 Visioconférence avec caméra allumée",
    question:
      "En moyenne, pendant combien d'heure par semaine êtes-vous en visioconférences ?",
    advice: null,
    resultsAdvices:
      "Il y a quelques mesures simples: <br>- essayez de regrouper les réunions lorsque cela est possible <br>- de désactiver la vidéo lorsqu'elle n'est pas nécessaire <br>- utiliser des plateformes de visioconférence avec des fonctionnalités d'économie d'énergie.",
    exactVal: false,
    options: null,
    answerType: "number",
    grandeur: "heures",
    unité: null,
    unitéConvert: null,
    getAnswer: true,
    answer: null,
    userAnswer: 0,
    formule: 0.1 * 52, //A modifier
    approx: 0.8064516129,
    placeholder: "Entrez une valeur en ",
    prevQuestion: ["4-1"],
    subQuestion: ["5"],
  },
  {
    id: "4-1-2",
    minimum: "0",
    category: "🔊 Visioconférence avec caméra éteinte",
    question:
      "En moyenne, pendant combien d'heure par semaine êtes-vous en visioconférences ?",
    advice: null,
    resultsAdvices:
      "Il y a quelques mesures simples: <br>- essayez de regrouper les réunions lorsque cela est possible <br>- utiliser des plateformes de visioconférence avec des fonctionnalités d'économie d'énergie.",
    exactVal: false,
    options: null,
    answerType: "number",
    grandeur: "",
    unité: null,
    unitéConvert: null,
    getAnswer: true,
    answer: null,
    userAnswer: 0,
    formule: 0.1 * 52, //A modifier
    approx: 0.8064516129,
    placeholder: "Entrez une valeur ",
    prevQuestion: ["4-1"],
    subQuestion: ["5"],
  },
  {
    id: "5",
    minimum: "0",
    category: "💻 Recherches sur le web",
    question:
      "En moyenne, combien de recherches sur le web faites-vous <U>par jour<U> ?",
    advice:
      "Quand je fais des recherches sur Google, Bing, Qwant...<br>➡️ Vous pouvez retrouver le nombre de recherches que vous avez effectuées sur votre navigateur en consultant votre historique de recherche.",
    resultsAdvices:
      "- Il faudrait privilégier des moteurs de recherche écologiques comme certains qui plantent des arbres pour chaque recherche effectuée.<br>- Enregistrez en favoris les sites recherchés régulièrement plutôt que de laisser de nombreux onglets ouverts en permanence.<br>- On peut également rechercher mieux en utilisant des mots-clés précis, en utilisants les raccourcis des différents navigateurs tels que la recherche avancée.",
    exactVal: false,
    options: null,
    answerType: "number",
    grandeur: "",
    unité: null,
    unitéConvert: null,
    getAnswer: true,
    answer: null,
    userAnswer: 0,
    formule: 0.00123 * 52 * 7,
    approx: 6.039726027 / 7,
    placeholder: "Entrez une valeur",
    prevQuestion: ["4-1-1", "4-1-2"],
    subQuestion: ["6"],
  },
  {
    id: "6",
    minimum: "0",
    category: "⚡ Appareils électroniques",
    question: "Lesquels de ces appareils possédez-vous ?",
    advice: null,
    resultsAdvices: `- Le plus important réside dans le choix des nouveaux appareil: il faut privilégier les appareils reconditionnés aux appareils neufs. Acheter un appareil neuf n'est pas interdit pour autant, il faut en profiter pour le garder le plus longtemps possible (+ de 4 ans de préférence). <br><br>Si vous en prenez soin, un smartphone peut être utilisé pendant 5 ans et un ordinateur portable plus de 10 ans ! <br><br>- Lors de l'achat, privilégiez les labels environnementaux (<a href="https://www.blauer-engel.de/en">Blue Angel</a>, <a href="https://tcocertified.com/fr/tco-certified/">TCO</a>, <a href="https://epeat.net/about-epeat">EPEAT</a>…) pour le matériel informatique, ils garantissent une utilisation plus responsable des ressources lors de la création des appareils et contribuent à réduire leur impact environnemental tout au long de leur cycle de vie, nottament à la fin. <br><br>- En effet, le numérique est responsable de 4% des émissions de gaz à effet de serre dans le monde, pour réduire cela, le recyclage est primordial. Si un appareil vient à être obsolète ou innutilisable, il est important de se renseigner quant aux oportunités de recyclage en magasins ou dans un point de collecte adapté.`,
    exactVal: true,
    options: [
      `<span class="material-symbols-outlined">smartphone</span> Smartphone`,
      `<span class="material-symbols-outlined">laptop_mac</span> Ordinateur portable`,
      `<span class="material-symbols-outlined">settop_component</span> Ordinateur fixe`,
      `<span class="material-symbols-outlined">desktop_windows</span> Ecran d'ordinateur`,
      `<span class="material-symbols-outlined">phone_iphone</span> Tablette`,
      `<span class="material-symbols-outlined">tv</span> Télévision`,
      `<span class="material-symbols-outlined">router</span> Box internet`,
      `<span class="material-symbols-outlined">usb</span> Clé USB`,
      `<span class="material-symbols-outlined">database</span> Disque dur externe`,
    ],
    answerType: "checkbox",
    getAnswer: true,
    answer: [null, null, null, null, null, null, null, null, null],
    userAnswer: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    formule: [33.6, 35, 46.1, 9.81, 25.3, 45, 7.22, 1.25, 3.16],
    prevQuestion: ["5"],
    subQuestion: null,
  },
];

//Fonction pour passer à la question suivante
//Masque la question actuelle et affiche la question suivante
export function nextQuestion(actualId, nextId) {
  path.push(actualId); //On ajoute l'id de la question actuelle dans la pile path pour savoir quelle question afficher en cas de retour
  //console.log("question actuelle : " + actualId);
  //console.log("prochaine question : " + nextId);
  const valid = fetchAnswers(actualId);
  if (!valid) {
    //console.log("Veuillez entrer une valeur valide");
    return;
  } else {
    //console.log("Valeur valide");
    document.getElementById(actualId).style.display = "none";
    document.getElementById(nextId).style.display = "flex";
    progressBar(nextId);
    return;
  }
}

//Fonction pour revenir à la question précédente
//Masque la question actuelle et affiche la question précédente
export function previousQuestion(actualId, previousId) {
  //console.log(path)
  //console.log("question précédente : " + previousId);
  //console.log("question actuelle : " + actualId);
  progressBar(previousId);
  document.getElementById(actualId).style.display = "none";
  document.getElementById(previousId).style.display = "flex";
}

//fonction pour récupérer les réponses de l'utilisateur à chaque passage de question
export function fetchAnswers(questionId) {
  var valid = false;
  let userAnswer;
  let definitiveAnswer;
  let correctedAnswer;

  let question = questions.find((q) => q.id === questionId);
  if (question.getAnswer && question.answerType == "number") {
    userAnswer = document.getElementById("answer" + questionId).value;
    if (!isNaN(userAnswer) && userAnswer >= question.minimum) {
      //en fonction de la grandeur de la réponse, on la multiplie par le facteur associé à cette grandeur
      if (question.unité != null) {
        let unit = document.getElementById("unit" + questionId).value;
        let index = question.unité.indexOf(unit);
        userAnswer = userAnswer / question.unitéConvert[index];
        // console.log("unité : " + unit);
        // console.log("index : " + index);
        // console.log("valeur en Go : " + userAnswer);
      }
      question.userAnswer = question.userAnswer * userAnswer;
      if (question.exactVal == false) {
        //Si l'utilisateur entre une valeur approximative, on applique la formule d'approximation
        correctedAnswer = (userAnswer * question.approx).toFixed(2);
        definitiveAnswer = (correctedAnswer * question.formule).toFixed(2);
      } else {
        //Sinon, on applique la formule exacte
        definitiveAnswer = (userAnswer * question.formule).toFixed(2);
      }
      question.answer = definitiveAnswer; //on faiot la multiplication par 52 pour avoir la valeur annuelle
      // console.log("réponse donnée par l'utilisateur : " + userAnswer);
      // console.log("réponse avec approximation : " + correctedAnswer);
      // console.log("réponse définitive en KgCo2: " + definitiveAnswer);
      // console.log(questions);
      valid = true;
    } else {
      alert(
        `La valeur entrée est invalide: \n- Elle est peut être inférieure à ${question.minimum}, il faut entrer des valeurs positives. \n- Le caractère entré n'est pas un nombre. \n- Vous n'avez entré aucune valeur.`
      );
      valid = false;
    }
  } else if (question.getAnswer && question.answerType == "checkbox") {
    for (let i = 0; i < question.options.length; i++) {
      userAnswer = document.getElementById(
        questionId + question.options[i]
      ).value;
      if (!isNaN(userAnswer) && userAnswer >= question.minimum) {
        question.userAnswer[i] = question.userAnswer[i] * userAnswer;
        if (question.exactVal == false) {
          correctedAnswer = (userAnswer * question.approx[i]).toFixed(2);
          definitiveAnswer = (correctedAnswer * question.formule[i]).toFixed(2);
        } else {
          definitiveAnswer = (userAnswer * question.formule[i]).toFixed(2);
        }
        question.answer[i] = definitiveAnswer;
        //console.log("réponse donnée par l'utilisateur : " + userAnswer);
        //console.log("réponse avec approximation : " + correctedAnswer);
        //console.log("réponse définitive en KgCo2: " + definitiveAnswer);
      } else if (userAnswer == null) {
        valid = true;
      } else {
        alert(
          `La valeur de ${question.options[i]} est invalide: \n- Elle est peut être inférieure à ${question.minimum}, il faut entrer des valeurs positives. \n- Le caractère entré n'est pas un nombre. \n- Vous n'avez entré aucune valeur`
        );
        valid = false;
        break;
      }
      valid = true;
    }
  } else if (!question.getAnswer) {
    //console.log("pas de réponse à récupérer");
    valid = true;
  } else {
    //console.log("erreur");
  }
  return valid;
}

export function displayQuestion(question) {
  if (question.answerType == "number") {
    let questionContainer = document.getElementById("questionsContainer");

    //Création de la div pour englober question et boutons
    let questionGlobal = document.createElement("div");
    questionGlobal.id = question.id;
    questionGlobal.className = "question-global";
    questionContainer.appendChild(questionGlobal);

    //Creation de la div pour la question
    let questionArea = document.createElement("div");
    questionArea.id = question.id;
    questionArea.className = "column";
    questionGlobal.appendChild(questionArea);

    //Création de la phrase question
    let questionText = document.createElement("p");
    questionText.innerHTML = question.question;
    questionText.className = "question-text";
    questionArea.appendChild(questionText);

    //Affichage de l'advice
    if (question.advice != null) {
      displayAdvice(question.advice, questionArea);
    }

    //creation d'une checkbox pour savoir si l'utilisateur entre une valeur exacte ou approximative
    let checkboxDiv = document.createElement("div");
    checkboxDiv.className = "checkbox-container-row-b";
    questionArea.appendChild(checkboxDiv);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "exactVal" + question.id;
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        question.exactVal = true;
        //console.log("valeur exacte");
      } else {
        question.exactVal = false;
        //console.log("valeur approximative");
      }
    });

    let label = document.createElement("label");
    label.innerHTML =
      "Cocher la case si la valeur entrée est exacte et non approximative";
    label.htmlFor = "exactVal" + question.id;
    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);

    let inputDiv = document.createElement("div");
    inputDiv.className = "input-container-row";
    questionArea.appendChild(inputDiv);

    //Création de la zone d'input pour la réponse
    let input = document.createElement("input");
    input.type = "number";
    input.min = question.minimum;
    input.placeholder = question.placeholder + question.grandeur;
    input.id = "answer" + question.id;
    input.className = "number-input";
    inputDiv.appendChild(input);
    questionGlobal.style.display = "none";

    if (question.unité != null) {
      //un mini menu pour sélectioner la grandeur de la réponse
      let select = document.createElement("select");
      select.id = "unit" + question.id;
      select.className = "unit-select";
      inputDiv.appendChild(select);

      //on ajoute des options pour les unités
      for (let i = 0; i < question.unité.length; i++) {
        let option = document.createElement("option");
        option.value = question.unité[i];
        option.text = question.unité[i];
        select.appendChild(option);
      }

      select.addEventListener("change", function () {
        input.placeholder = question.placeholder + select.value;
        // console.log(select.value);
      });
    }

    displayButtons(questionGlobal, question);
  } else if (question.answerType == "button") {
    let questionContainer = document.getElementById("questionsContainer");

    //Création de la div pour englober question et boutons
    let questionGlobal = document.createElement("div");
    questionGlobal.id = question.id;
    questionGlobal.className = "question-global";
    questionContainer.appendChild(questionGlobal);

    //Creation de la div pour la question
    let questionArea = document.createElement("div");
    questionArea.id = question.id;
    questionArea.className = "column";
    questionGlobal.appendChild(questionArea);

    //Création de la phrase question
    let questionText = document.createElement("p");
    questionText.innerHTML = question.question;
    questionText.className = "question-text";
    questionArea.appendChild(questionText);

    //Affichage de l'advice
    if (question.advice != null) {
      displayAdvice(question.advice, questionArea);
    }

    //On créé une div horizontale pour contenir les boutons
    let buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons-container-row";
    questionArea.appendChild(buttonsDiv);

    //Pour chaque option de réponse, on crée un bouton qui contient le texte de l'option
    for (let i = 0; i < question.options.length; i++) {
      let button = document.createElement("button");
      button.innerHTML = question.options[i];
      button.id = question.id + question.options[i];
      button.className = "option-btn";
      buttonsDiv.appendChild(button);

      //On ajoute un event listener pour chaque bouton
      button.addEventListener("click", function () {
        //console.log("clicked");
        nextQuestion(question.id, question.subQuestion[i]); //On passe à la question suivante en fonction de la réponse cliquée
      });
    }

    //Création du bouton pour revenir à la question précédente
    let previousBtn = document.createElement("button");
    previousBtn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span>Précédent`;
    previousBtn.className = "nav-btn-left";
    previousBtn.addEventListener("click", function () {
      let actualId = question.id;
      let previousId = path.pop(); //On récupère l'id de la question précédente car path.pop() renvoie la dernière valeur du tableau path,c-à-d l'id de la question précédente
      previousQuestion(actualId, previousId); //On revient à la question précédente
    });
    questionGlobal.appendChild(previousBtn);

    questionGlobal.style.display = "none"; //On masque la question pour l'instant
  } else if (question.answerType == "checkbox") {
    let questionContainer = document.getElementById("questionsContainer");

    //Création de la div pour englober question et boutons
    let questionGlobal = document.createElement("div");
    questionGlobal.id = question.id;
    questionGlobal.className = "question-global";
    questionContainer.appendChild(questionGlobal);

    //Creation de la div pour la question
    let questionArea = document.createElement("div");
    questionArea.id = question.id;
    questionArea.className = "column";
    questionGlobal.appendChild(questionArea);

    //Création de la phrase question
    let questionText = document.createElement("p");
    questionText.innerHTML = question.question;
    questionText.className = "question-text";
    questionArea.appendChild(questionText);

    //Affichage de l'advice
    if (question.advice != null) {
      displayAdvice(question.advice, questionArea);
    }

    //creation d'une div verticale pour contenir toutes les checkbox
    let checkboxDiv = document.createElement("div");
    checkboxDiv.className = "checkbox-container-column";
    questionArea.appendChild(checkboxDiv);

    //Pour chaque option de réponse, on crée une checkbox et un label
    for (let i = 0; i < question.options.length; i++) {
      //creation d'une div horizontale pour contenir checkboxes et labels
      let checkboxRow = document.createElement("div");
      checkboxRow.className = "checkbox-container-row";
      checkboxDiv.appendChild(checkboxRow);

      //creation d'une checkbox
      let label = document.createElement("label");
      label.innerHTML = question.options[i];
      label.htmlFor = question.id + question.options[i];
      checkboxRow.appendChild(label);

      //Creation d'une div horizontale pour contenir le bouton +, l'input et le bouton -
      let addRemoveDiv = document.createElement("div");
      addRemoveDiv.className = "add-remove-container-row";
      checkboxRow.appendChild(addRemoveDiv);

      //creation d'un bouton pour diminuer la valeur du nombre
      let removeBtn = document.createElement("button");
      removeBtn.innerHTML = `<span class="material-symbols-outlined">remove</span>`;
      removeBtn.className = "remove-btn";
      removeBtn.addEventListener("click", function () {
        let input = document.getElementById(question.id + question.options[i]);
        if (input.value > question.minimum) {
          input.value--;
        }
      });
      addRemoveDiv.appendChild(removeBtn);

      let input = document.createElement("input");
      input.type = "number";
      input.min = question.minimum;
      input.value = 0;
      input.focus();
      input.id = question.id + question.options[i];
      input.className = "number-input-b";
      addRemoveDiv.appendChild(input);

      //creation d'un bouton pour augmenter la valeur du nombre
      let addBtn = document.createElement("button");
      addBtn.innerHTML = `<span class="material-symbols-outlined">add</span>`;
      addBtn.className = "add-btn";
      addBtn.addEventListener("click", function () {
        let input = document.getElementById(question.id + question.options[i]);
        input.value++;
      });
      addRemoveDiv.appendChild(addBtn);
    }

    //Afficher les boutons suivant et précédent
    displayButtons(questionGlobal, question);
    questionGlobal.style.display = "none"; //On masque la question pour l'instant
  }
}

//Fonction pour afficher les boutons suivant et précédent
function displayButtons(questionArea, question) {
  //Création d'une div horizontale pour habriter les boutons suivant et précédent
  let buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons-container-row";
  questionArea.appendChild(buttonsDiv);

  //Création du bouton pour revenir à la question précédente
  if (question.prevQuestion != null) {
    //Si la question a une question précédente, on affiche le bouton pour revenir à la question précédente
    let previousBtn = document.createElement("button");
    previousBtn.className = "nav-btn-left";
    previousBtn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span>Précédent`;
    previousBtn.addEventListener("click", function () {
      let actualId = question.id;
      let previousId = path.pop(); //On récupère l'id de la question précédente car path.pop() renvoie la dernière valeur du tableau path,c-à-d l'id de la question précédente
      previousQuestion(actualId, previousId); //On revient à la question précédente
    });
    buttonsDiv.appendChild(previousBtn);
  }

  //Création du bouton pour passer à la question suivante
  if (question.subQuestion == null) {
    //Si la question n'a pas de question suivante, on affiche le bouton pour afficher les résultats
    let nextBtn = document.createElement("button");
    nextBtn.innerHTML = `Découvrir les résultats`;
    nextBtn.onclick = function () {
      let valid = fetchAnswers(question.id);
      if (!valid) {
        //console.log("Veuillez entrer une valeur valide");
        return;
      } else {
        //console.log("Valeur valide");
        displayResults();
      }
    };
    nextBtn.type = "button";
    nextBtn.className = "nav-btn";

    buttonsDiv.appendChild(nextBtn);
  } else {
    let nextBtn = document.createElement("button");
    nextBtn.innerHTML = `Suivant<span class="material-symbols-outlined">arrow_forward</span>`;
    nextBtn.className = "nav-btn-right";
    nextBtn.addEventListener("click", function () {
      let subQuestionId = question.subQuestion[0]; //On récupère l'id de la question suivante
      let actualId = question.id; //On récupère l'id de la question actuelle
      nextQuestion(actualId, subQuestionId);
    });
    buttonsDiv.appendChild(nextBtn);
  }
}

function displayAdvice(advice, questionArea) {
  let adviceDiv = document.createElement("div");
  adviceDiv.className = "advice-container";
  questionArea.appendChild(adviceDiv);

  let adviceText = document.createElement("p");
  adviceText.innerHTML = `<div style="display: flex;"><span class="material-symbols-outlined">help</span></div>`;
  adviceText.className = "advice-icon";
  adviceDiv.appendChild(adviceText);

  let adviceContent = document.createElement("p");
  adviceContent.innerHTML = `<div>${advice}</div>`;
  adviceContent.className = "advice-content";
  adviceDiv.appendChild(adviceContent);
}

//Fonction pour afficher les résultats
function displayResults() {
  let total = calculateResults();
  let total1 = total[0]; //On récupère le total des réponses pour les habitudes de consommation
  let total2 = total[1]; //On récupère le total des réponses pour les appaireils
  let questionContainer = document.getElementById("questionsContainer");
  questionContainer.innerHTML = ""; //On vide la div pour afficher les résultats

  //Création de la div pour englober les résultats
  let resultsGlobal = document.createElement("div");
  resultsGlobal.id = "results";
  resultsGlobal.className = "results-global";
  questionContainer.appendChild(resultsGlobal);

  //Création de la div pour afficher les résultats
  let resultsArea = document.createElement("div");
  resultsArea.id = "resultsArea";
  resultsArea.className = "column";
  resultsGlobal.appendChild(resultsArea);

  //Création de la phrase pour afficher les références
  if (total1 != 0 && total2 != 0) {
    //Affichage du chiffre total des émissions de CO2 sur 1 an
    let totalText = document.createElement("p");
    totalText.innerHTML = `Estimation de votre total d'émissions sur 1 an : ${total1.toLocaleString()} Kg de CO2`;
    totalText.className = "major-text";
    resultsArea.appendChild(totalText);

    //Création de la phrase pour expliquer les résultats
    let questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.innerHTML = `Cela ne concerne que les émissions de CO2 liées à votre consommation numérique <u>sur 1 an</u>, celle de vos appareils n'est pas prise en compte ici. Au total, vos habitudes de consommation numérique équivalent à :`;
    resultsArea.appendChild(questionText);

    let referenceMajorDiv = document.createElement("div");
    referenceMajorDiv.className = "column-b";
    resultsArea.appendChild(referenceMajorDiv);
    references.forEach((reference) => {
      displayReferences(reference, referenceMajorDiv, total1);
    });

    //Création d'une ligne pour séparer les résultats
    resultsArea.appendChild(document.createElement("hr"));

    //Affichage du chiffre total des émissions de CO2 sur 1 an
    let totalText2 = document.createElement("p");
    totalText2.innerHTML = `Estimation du total d'émission de vos appareils: ${total2.toLocaleString()} Kg de CO2`;
    totalText2.className = "major-text";
    resultsArea.appendChild(totalText2);

    //Création de la phrase pour expliquer les résultats
    let questionText2 = document.createElement("p");
    questionText2.className = "question-text";
    questionText2.innerHTML = `Cela ne concerne que les émissions de CO2 liées à vos appareils <u>tout au long de leurs vies</u>, de leur fabrication à leur destruction ou recyclage. Au total, la consommation de vos appareils équivaut à :`;
    resultsArea.appendChild(questionText2);

    let referenceMajorDiv2 = document.createElement("div");
    referenceMajorDiv2.className = "column-b";
    resultsArea.appendChild(referenceMajorDiv2);
    references.forEach((reference) => {
      displayReferences(reference, referenceMajorDiv2, total2);
    });
    displayStats(resultsGlobal, total1, total2);
  } else if (total1 != 0 && total2 == 0) {
    //Affichage du chiffre total des émissions de CO2 sur 1 an
    let totalText = document.createElement("p");
    totalText.innerHTML = `Estimation de votre total d'émissions sur 1 an : ${total1.toLocaleString()} Kg de CO2`;
    totalText.className = "major-text";
    resultsArea.appendChild(totalText);

    //Création de la phrase pour expliquer les résultats
    let questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.innerHTML = `Cela ne concerne que les émissions de CO2 liées à votre consommation numérique <u>sur 1 an</u>, celle de vos appareils n'est pas prise en compte ici. Au total, vos habitudes de consommation numérique équivalent à :`;
    resultsArea.appendChild(questionText);

    let referenceMajorDiv = document.createElement("div");
    referenceMajorDiv.className = "column-b";
    resultsArea.appendChild(referenceMajorDiv);
    references.forEach((reference) => {
      displayReferences(reference, referenceMajorDiv, total1);
    });
    displayStats(resultsGlobal, total1, total2);
  } else if (total2 != 0 && total1 == 0) {
    //Affichage du chiffre total des émissions de CO2 sur 1 an
    let totalText2 = document.createElement("p");
    totalText2.innerHTML = `Estimation du total d'émission de vos appareils: ${total2.toLocaleString()} Kg de CO2`;
    totalText2.className = "major-text";
    resultsArea.appendChild(totalText2);

    //Création de la phrase pour expliquer les résultats
    let questionText2 = document.createElement("p");
    questionText2.className = "question-text";
    questionText2.innerHTML = `Cela ne concerne que les émissions de CO2 liées à vos appareils <u>tout au long de leurs vies</u>, de leur fabrication à leur destruction ou recyclage. Au total, la consommation de vos appareils équivaut à :`;
    resultsArea.appendChild(questionText2);

    let referenceMajorDiv = document.createElement("div");
    referenceMajorDiv.className = "column-b";
    resultsArea.appendChild(referenceMajorDiv);
    references.forEach((reference) => {
      displayReferences(reference, referenceMajorDiv, total2);
    });
    displayStats(resultsGlobal, total1, total2);
  } else if (total1 == 0 && total2 == 0) {
    //Création de la phrase pour afficher les résultats
    let questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.innerHTML = `On a rien à dire sur votre consommation numérique, vous êtes un modèle pour nous tous !`;
    resultsArea.appendChild(questionText);
  }

  //Création du bouton pour recommencer le questionnaire
  let resetBtn = document.createElement("button");
  resetBtn.innerHTML = `<span class="material-symbols-outlined">restart_alt</span>Recommencer le questionnaire`;
  resetBtn.className = "reset-btn";
  resetBtn.onclick = function () {
    location.reload(); //On recharge la page pour recommencer le questionnaire
  };
  resultsArea.appendChild(resetBtn);
}

//Fonction pour calculer les résultats
function calculateResults() {
  var total = 0;
  let subtotal = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].answerType == "number" && questions[i].answer != null) {
      total = total + parseInt(questions[i].answer);
    } else if (
      questions[i].answerType == "checkbox" &&
      questions[i].answer != null
    ) {
      //console.log("dans la boucle des checkbox");
      questions[i].answer.forEach((answer) => {
        subtotal = subtotal + parseInt(answer);
        //console.log("subtotal : " + subtotal);
      });
    }
  }
  //console.log("total : " + total);
  return [total, subtotal];
}

//Fonction pour afficher les résultats
function displayStats(resultsGlobal, total1, total2) {
  let row = document.createElement("div");
  row.id = "row";
  row.className = "row";
  resultsGlobal.appendChild(row);
  if (total1 == 0) {
    //
  } else {
    let statsArea = document.createElement("div");
    statsArea.id = "statsArea";
    statsArea.className = "column";
    row.appendChild(statsArea);

    let title = document.createElement("p");
    title.className = "reference-title";
    title.innerHTML = "Les émissions de votre consommation";
    statsArea.appendChild(title);

    questions.forEach((question) => {
      if (question.answerType == "number") {
        let value = question.answer;
        if (value == 0 || value == null) {
          return;
        } else {
          value = question.answer;
          let percent = (value * 100) / total1;
          if (percent > 100) {
            percent = 100;
          }
          let div = document.createElement("div");
          div.className = "column-a";
          statsArea.appendChild(div);

          let resultText = document.createElement("p");
          resultText.className = "p-label";
          resultText.innerHTML = `${
            question.category
          } : ${value.toLocaleString()} Kg de CO2 émis par an.`;
          div.appendChild(resultText);
          displayProgressBar(div, percent);
        }
        //On affiche les conseils pour réduire les émissions
        let adviceDiv = document.createElement("div");
        adviceDiv.className = "advice-container";
        let adviceText = document.createElement("p");
        adviceText.innerHTML = `<div style="display: flex;"><span class="material-symbols-outlined">nest_eco_leaf</span></div>`;
        adviceText.className = "advice-icon";
        adviceDiv.appendChild(adviceText);
        let adviceContent = document.createElement("p");
        adviceContent.innerHTML = `<div>${question.resultsAdvices}</div>`;
        adviceContent.className = "advice-content";
        adviceDiv.appendChild(adviceContent);
        statsArea.appendChild(adviceDiv);
      }
    });
  }
  if (total2 == 0) {
    //
  } else {
    let statsArea1 = document.createElement("div");
    statsArea1.id = "statsArea1";
    statsArea1.className = "column";
    row.appendChild(statsArea1);

    let title = document.createElement("p");
    title.className = "reference-title";
    title.innerHTML = "Les émissions de vos appareils.";
    statsArea1.appendChild(title);

    questions.forEach((question) => {
      if (question.answerType == "checkbox") {
        let i = 0;

        //On affiche les conseils pour réduire les émissions
        let adviceDiv = document.createElement("div");
        adviceDiv.className = "advice-container";
        let adviceText = document.createElement("p");
        adviceText.innerHTML = `<div style="display: flex;"><span class="material-symbols-outlined">nest_eco_leaf</span></div>`;
        adviceText.className = "advice-icon";
        adviceDiv.appendChild(adviceText);
        let adviceContent = document.createElement("p");
        adviceContent.innerHTML = `<div>${question.resultsAdvices}</div>`;
        adviceContent.className = "advice-content";
        adviceDiv.appendChild(adviceContent);
        statsArea1.appendChild(adviceDiv);

        //On affiche les résultats pour chaque appareil
        question.answer.forEach((answer) => {
          let value = answer;
          if (value == 0 || value == null) {
            return;
          } else {
            value = answer;
            let percent = (value * 100) / total2;
            if (percent > 100) {
              percent = 100;
            }
            let div = document.createElement("div");
            div.className = "column-a";
            statsArea1.appendChild(div);

            let resultText = document.createElement("p");
            resultText.className = "p-label";
            resultText.innerHTML = `${
              question.options[i]
            } : ${value.toLocaleString(1)} Kg de CO2 émi${
              value.toLocaleString >= 2 ? "" : "s"
            }.`;
            div.appendChild(resultText);
            displayProgressBar(div, percent);
          }
          i++;
        });
      }
    });
  }
  let alternativesDivs = document.createElement("div");
  alternativesDivs.className = "scrollmenu";
  displayAlternatives(alternativesDivs);
  resultsGlobal.appendChild(alternativesDivs);

  //creation d'une ligne pour séparer
  resultsGlobal.appendChild(document.createElement("hr"));

  //creation du texte pour les boutons de partage
  let shareText = document.createElement("p");
  shareText.innerHTML = "Partagez le questionnaire avec vos amis !";
  shareText.className = "reference-title";
  shareText.style.padding = "20px 20px 0px 20px";
  shareText.style.fontSize = "calc(1.5em + 1vw)";
  document.getElementById("shareDiv").appendChild(shareText);

  //creation d'une div qui contiendra les boutons de partage
  let shareDiv = document.createElement("div");
  shareDiv.style.display = "flex";
  shareDiv.style.justifyContent = "center";
  shareDiv.style.margin = "20px";
  shareDiv.style.padding = "20px";
  shareDiv.style.flexDirection = "column";
  shareDiv.style.gap = "10px";
  shareDiv.style.backgroundColor = "var(--md-sys-color-on-tertiary-container)";
  shareDiv.style.borderRadius = "25px";
  document.getElementById("shareDiv").appendChild(shareDiv);
  displayShareBtn(shareDiv);
}

//Fonction pour afficher des barre de progression
function displayProgressBar(statsArea, percent) {
  if (percent == 0) {
    return;
  } else {
    let progressBarBg = document.createElement("div");
    progressBarBg.id = "progressBarBg";
    progressBarBg.style.height = "25px";
    progressBarBg.className = "progress-bar-bg-a";
    progressBarBg.style.width = "100%";
    statsArea.appendChild(progressBarBg); // Add progressBarBg to statsArea

    let progressBarFg = document.createElement("div");
    progressBarFg.id = "progressBarFg";
    progressBarFg.className = "progress-bar-fg-a";
    progressBarFg.style.width = `${percent}%`;
    progressBarBg.appendChild(progressBarFg);
  }
}
