const config = {
    apiKey: "AIzaSyBFk5GSkxIyqXInE3LopEbkYwqIMLXu0kE",
    authDomain: "lady-happy.firebaseapp.com",
    databaseURL: "https://lady-happy.firebaseio.com",
    projectId: "lady-happy",
    storageBucket: "lady-happy.appspot.com",
    messagingSenderId: "68697334520"
};

firebase.initializeApp(config);
var firestore = firebase.firestore();
var idFeedback = 1;

const docReference = firestore.collection("feedback");
docReference
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
            setFeedback(doc, idFeedback);
            idFeedback++;
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });

function setFeedback(doc, idFeedback) {
    const image = document.getElementById("feedback-" + idFeedback);

    image.children[0].innerHTML = doc.data().review;
    image.children[1].innerHTML = doc.data().reviewer;
}