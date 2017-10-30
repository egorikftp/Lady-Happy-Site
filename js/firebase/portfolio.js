var firestore = firebase.firestore();
var idItem = 1;

const postsReference = firestore.collection("posts");
postsReference
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
            postsReference.doc(doc.id).collection("images")
                .get()
                .then(function (images) {
                    images.forEach(function (doc) {
                        console.log(doc.id, " => ", doc.data().url);
                        setImage(doc, idItem);
                        idItem++;
                    })
                })
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });

function setImage(doc, idItem) {
    console.log(idItem);

  //  const image = document.getElementById("portfolio-" + idItem);
   // console.log(image.childElementCount);
    document.getElementById("image-" + idItem).src = doc.data().url;

    /*image.children[0].innerHTML = doc.data().review;
    image.children[1].innerHTML = doc.data().reviewer;*/
}