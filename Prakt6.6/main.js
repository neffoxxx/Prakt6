function checkIt() { // функція перевірки полів форми
    if (document.forms.mailer.Name.value !== "") { // функція перевірки поля Name
    } else {
        alert("\nОбласть \"Ім'я\" у формі. \nБудь ласка, введіть своє ім'я."); // виводить повідомлення, якщо поле Name не заповнено
        document.forms.mailer.Name.focus(); // вертає курсор на поле Name
        return false;
    }
//-----------
    if (document.forms.mailer.Subject.value !== "") { // функція перевірки поля Subject
    } else {
        alert("\nОбласть \"Тема\" в формі. \nБудь ласка, введіть, введите те-му."); //
        document.forms.mailer.Subject.focus(); // вертає курсор на поле Subject
        return false;
    }
//-----------
    if (document.forms.mailer.Message.value !== "") { // функція перевірки поля Message
        return true; // ВСЕ ВІДМІННО
    } else {
        alert("\nОбласть \"Повідомлення\" в формі. \n\nБудь ласка, напишіть повідомлення."); // виводить повідомлення, якщо поле Message не заповнено
        document.forms.mailer.Message.focus(); // вертає курсор на поле Message
        return false;
    }
    if (document.forms.mailer.email.value !== "") { // функція перевірки поля Email
        return true; // ВСЕ ВІДМІННО
    } else {
        alert("\nОбласть \"Email\" в формі. \n\nБудь ласка, напишіть повідомлення."); // виводить повідомлення, якщо поле Message не заповнено
        document.forms.mailer.Message.focus(); // вертає курсор на поле Message
        return false;
    }
//-----------
}
function msg() { // функція відправки
    document.mailer.action = "artemkutskyi21@gmail.com"
    mailtoandSubject = (('?Subject=' + document.mailer.Subject.value) + '&Body=' + document.mailer.Message.value);
}