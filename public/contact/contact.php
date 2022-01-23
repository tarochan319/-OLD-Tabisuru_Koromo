<?php

// SSLでセキュリティ担保
if (isset($_POST['send'])) {
    require_once("php_mailer/vendor/autoload.php");
    mb_language("japanese");
    mb_internal_encoding("UTF-8");

    $to = "isenti.fashion@gmail.com";  //宛先
    $subject = $_POST['name']."からお問い合わせが届いたよ！";  //件名
    $body = "お問い合わせ内容：\n".$_POST['message'];  //本文
    $from = $_POST['email'];  //差出人
    $fromname = $_POST['name'];  //差し出し人名

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->CharSet = "iso-2022-jp";
    $mail->Encoding = "7bit";

    $mail->IsSMTP();    //「SMTPサーバーを使うよ」設定
    $mail->SMTPAuth = true;   //「SMTP認証を使うよ」設定
    $mail->Host = 'smtp.gmail.com:587';   // SMTPサーバーアドレス:ポート番号
    $mail->Username = 'isenti.fashion@gmail.com';   // SMTP認証用のユーザーID
    $mail->Password = 'senty@55';   // SMTP認証用のパスワード

    $mail->AddAddress($to);
    $mail->From = $from;
    $mail->FromName = mb_encode_mimeheader(mb_convert_encoding($fromname, "JIS", "UTF-8"));
    $mail->Subject = mb_encode_mimeheader(mb_convert_encoding($subject, "JIS", "UTF-8"));
    $mail->Body = mb_convert_encoding($body, "JIS", "UTF-8");

    //メールを送信
    $mail->send();
}

// リロード対策
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    header("Location:contact.php");
    exit;
}

?>

<!DOCTYPE html>

<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="css/style.css" rel="stylesheet" />

  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>

  <title>Contact</title>
</head>

<body>

  <div class="wrap">

    <header>
      <div class="logo">
        <a href="../index.html" class="title"><span class="tabi">旅</span> <span class="title_text">する衣 </span>
          <span class="title_koromo">-TABISURU KOROMO-</span></a>
        <a href="../index.html" class="title2"><span class="tabi">旅</span> <span class="title_text2">する衣 </span>
          <span class="title_koromo2">-TABISURU KOROMO-</span></a>
      </div>

      <!-- ハンバーガーメニュー -->
      <div id="navArea">
        <nav>
          <div class="inner">
            <ul>
              <li class="illust"><a href="../index.html #new_post">■ ILLUSTRATION</a></li>
              <li class="illust2"><a href="../index.html #new_post">■ ILLUSTRATION</a></li>

              <li class="about"><a href="../index.html #about_us">■ ABOUT US</a></li>
              <li class="about2"><a href="../index.html #about_us">■ ABOUT US</a></li>

              <li class="create"><a href="../info/info.html">■ WHO CREATE?</a></li>
              <li class="create2"><a href="../info/info.html">■ WHO CREATE?</a></li>

              <li class="contact"><a href="contact.php">■ CONTACT US</a></li>
              <li class="contact2"><a href="contact.php">■ CONTACT US</a></li>

              <li class="spt"><a href="../support/support.html">■ SUPPORTERS</a></li>
              <li class="spt2"><a href="../support/support.html">■ SUPPORTERS</a></li>
            </ul>
          </div>
        </nav>

        <div class="toggle_btn1">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="toggle_btn2">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>

    <div class="midasi_us">
      <h1 class="contact_midasi">Contact US</h1>
      <h1 class="contact_midasi2">Contact US</h1>
    </div>

    <div class="midasi_small">
      <h2 class="to">To.</h3>
        <h2 class="to2">To.</h3>
    </div>
    <p class="mail-text">isenti.fashion@gmail.com</p>


    <div class="midasi_form">
      <h2 class="form">Contact Form</h3>
        <h2 class="form2">Contact Form</h3>
    </div>

    <div class="contact_form">
      <form action="contact.php" method="POST" name="form">
        <dl>
          <dt><span class="name">Name -お名前-</span></dt>
          <dd><input type="text" name="name" class="name_form" require></dd>

          <dt><span class="mail">Email -メールアドレス-</span></dt>
          <dd><input type="email" name="email" class="mail_form" require></dd>

          <dt><span class="content">Contents -内容-</span></dt>
          <dd><textarea name="message" class="message" require></textarea></dd>
        </dl>

        <button type="button" id="confi-btn"><span class="confi">確 認</span><button type="button" class="confi-btn2"></button></button>
        <!-- 送信確認モーダル -->
        <div id="overlay" class="overlay"></div>
        <div class="modal-window">
          <a href="" class="close-btn">×</a>
          <h1>送信しますか？</h1>
          <div class="modal-btn">
            <button type="button" name="back" id="back">戻 る</button>
            <button type="submit" name="send" id="send" onclick="formReset()">送 信</button>
          </div>
        </div>
        <!-- 送信完了モーダル -->
        <div class="comp-modal">
          <div class="back-band">
            <div class="comp-text">
            <h1>送信完了</h1>
            </div>
          </div>
        </div>
      </form>
    </div>

    <footer>
      <small>© 2021 ISENTI</small>
    </footer>
  </div>

  <script src="js/script.js"></script>
</body>

</html>