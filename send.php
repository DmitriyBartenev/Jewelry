<?php

if(isset($_POST['submit'])){
    $to = "dimonBart@yandex.ru";; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $subject = "Форма отправки сообщений с сайта";
    $subject2 = "Copy of your form submission";

    $headers = "From:" . $from;

    mail($to,$subject,$headers);

    echo "Сообщение отправлено. Спасибо, мы скоро свяжемся с Вами.";
    echo "<br /><br /><a href='https://www.instagram.com/de.un1verse/'>Вернуться на сайт.</a>";

}

?>

<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://www.instagram.com/de.un1verse/");}
window.setTimeout("changeurl();",3000);
</script>