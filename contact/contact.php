<?php

session_start();
 mb_language("japanese");
 mb_internal_encoding("UTF-8");

//  名前フォーム
 $name = $_POST['name'];
 if (!$_POST['name']) {
     $errmessage[] = "名前を入力してください";
 } elseif (mb_strlen($_POST['name']) > 20) {
     $errmessage[] = "名前は20文字以内にしてください";
 }
$_POST['name'] = htmlspecialchars($_POST['name'], ENT_QUOTES);

// メールフォーム
 $email = $_POST['email'];
 if (!$_POST['email']) {
     $errmessage[] = "Eメールを入力してください";
 } elseif (mb_strlen($_POST['email']) > 50) {
     $errmessage[] = "Eメールは50文字以内にしてください";
 } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
     $errmessage[] = "メールアドレスが不正です";
 }
$_POST['email']    = htmlspecialchars($_POST['email'], ENT_QUOTES);

// メッセージ
 $message = "▼内容\r\n"
           . "名前：".$_POST["name"]."\r\n"
           . "アドレス：".$_POST['email']."\r\n"
           . "お問い合わせ内容:\r\n"
           . preg_replace("/\r\n|\r|\n/", "\r\n", $_POST["message"]);
           
 if (!$_POST['message']) {
     $errmessage[] = "お問い合わせ内容を入力してください";
 } elseif (mb_strlen($_POST['message']) > 500) {
     $errmessage[] = "お問い合わせ内容は500文字以内にしてください";
 }
$_POST['message'] = htmlspecialchars($_POST['message'], ENT_QUOTES);

 mb_send_mail("isenti.fashion@gmail.com", "お問い合わせが届いたよ！", $message);
 $_POST = array();
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
        <a href="../top/index_demo.html" class="title"><span class="tabi">旅</span> <span class="title_text">する衣 </span>
          <span class="title_koromo">-TABISURU KOROMO-</span></a>
        <a href="../top/index_demo.html" class="title2"><span class="tabi">旅</span> <span class="title_text">する衣 </span>
          <span class="title_koromo2">-TABISURU KOROMO-</span></a>
      </div>

      <!-- ハンバーガーメニュー -->
      <div id="navArea">
        <nav>
          <div class="inner">
            <ul>
              <li class="illust"><a href="../top/index_demo.html #new_post">■ ILLUSTRATION</a></li>
              <li class="illust2"><a href="../top/index_demo.html #new_post">■ ILLUSTRATION</a></li>

              <li class="about"><a href="../top/index_demo.html #about_us">■ ABOUT US</a></li>
              <li class="about2"><a href="../top/index_demo.html #about_us">■ ABOUT US</a></li>

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

    <div class="midasi_big">
      <h1 class="contact">Contact US</h1>
      <h1 class="contact2">Contact US</h1>
    </div>

    <div class="midasi_small">
      <h2 class="to">To.</h3>
        <h2 class="to2">To.</h3>
    </div>
    <p class="text">isenti.fashion@gmail.com</p>


    <div class="midasi2">
      <h2 class="form">Contact Form</h3>
        <h2 class="form2">Contact Form</h3>
    </div>

    <div class="contact_form">
      <form action="contact.php" method="POST">
        <dl>
          <dt><span class="name">Name -お名前-</span></dt>
          <dd><input type="text" name="name" class="name_form" value="<?php echo $_POST["name"] ?>" required></dd>

          <dt><span class="mail">Email -メールアドレス-</span></dt>
          <dd><input type="email" name="email" class="mail_form" value="<?php echo $_POST["email"] ?>" required></dd>

          <dt><span class="content">Contents -内容-</span></dt>
          <dd><textarea name="message" class="message" value="<?php echo $_POST["message"] ?>"></textarea></dd>
        </dl>

        <button type="submit" class="btn"><span>送　信</span><button type="submit" class="btn2"></button>
        </button>
      </form>
    </div>

    <footer>
      <small>© 2021 ISENTI</small>
    </footer>
  </div>

  <script src="js/script_oshimo.js"></script>
</body>

</html>