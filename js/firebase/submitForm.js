function submitForm() {
    var name = document.querySelector("#contact_form_name");
    var email = document.querySelector("#contact_form_email");
    var message = document.querySelector("#contact_form_message");

    firestore
        .collection("issues")
        .doc("site")
        .collection("issue")
        .add({
            name: name.value,
            email: email.value,
            message: message.value,
            date: Date.now()
        }).then(function () {
        alert("Сообщение успешно отправлено");
        clearInputFields();
    }).catch(function (error) {
        console.log(error);
        alert("Упс, произошла ошибка. Попробуйте снова через несколько минут");
    });

    function clearInputFields() {
        name.value = "";
        email.value = "";
        message.value = "";
    }
}