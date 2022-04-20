"use script";

// ▼Test modal
$(".inline").modaal({
  content_source: '#inline'
});

// 世界地図
jQuery(document).ready(function () {
  jQuery("#vmap").vectorMap({
    map: "world_en",
    backgroundColor: "url(#Pattern)",
    borderColor: "black",
    borderOpacity: 1,
    borderWidth: 0.5,
    color: "url(#Pattern)",
    enableZoom: true,
    hoverColor: "#ededed",
    hoverOpacity: 0.8,
    normalizeFunction: "linear",
    scaleColors: ["#b6d6ff", "#005ace"],
    selectedColor: "#2BBF00",
    selectedRegions: ['us', 'cn', 'de', 'in', 'gb', 'fr', 'it', 'br', 'ca', 'ru'],
    showTooltip: true,
    // ▼ codeオブジェクトで国ごとにモーダルウィンドウを表示
    onRegionClick: function (event, code, region) {

      // ！！！アメリカ！！！
      if (code == 'us') {

        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiUS = $("<div>自由の女神</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgUS = document.createElement('img');
        imgUS.src = 'img/自由の女神(アメリカ)SNS.png';
        imgUS.alt = 'アメリカ';
        imgUS.setAttribute("width", "250px");
        imgUS.setAttribute("height", "250px");

        let wikiUS = $("<a>詳  細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E3%81%AE%E5%A5%B3%E7%A5%9E%E5%83%8F_(%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF)',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>自由の女神像はアメリカ合衆国の独立100周年を記念して、独立運動を支援したフランス人の募金によって贈呈され1886年に完成した。アメリカ合衆国の自由と民主主義の象徴であるとともに、19世紀以来絶えることなく世界各地から観光客が訪れている。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiUS);
        left.append(imgUS);
        left.append(wikiUS);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
          $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
        });

      } else if (code == 'cn') {

        // ！！！中国！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiCn = $("<div>万里の長城</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgCn = document.createElement('img');
        imgCn.src = 'img/万里の長城(中国)SNS.png';
        imgCn.alt = '中国';
        imgCn.setAttribute("width", "250px");
        imgCn.setAttribute("height", "250px");

        let wikiCn = $("<a>詳  細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E4%B8%87%E9%87%8C%E3%81%AE%E9%95%B7%E5%9F%8E',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>匈奴のような北方の異民族が侵攻してくるのを迎撃するために、秦代の紀元前214年に始皇帝によって建設された。長城は始皇帝によって建設されたと一般には考えられているが、実際にはその後いくつかの王朝によって修築と移転が繰り返され、現存の「万里の長城」の大部分は明代に作られたものである。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiCn);
        left.append(imgCn);
        left.append(wikiCn);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'de') {

        // ！！！ドイツ！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiDe = $("<div>ケルン大聖堂</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgDe = document.createElement('img');
        imgDe.src = 'img/ケルン大聖堂(ドイツ)SNS.png';
        imgDe.alt = 'ドイツ';
        imgDe.setAttribute("width", "250px");
        imgDe.setAttribute("height", "250px");

        let wikiDe = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%AB%E3%83%B3%E5%A4%A7%E8%81%96%E5%A0%82',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>ケルン大聖堂はドイツのケルンにあるゴシック様式の大聖堂。正式名称はザンクト・ペーター・ウント・マリア大聖堂。ゴシック様式の建築物としては世界最大であり、ローマ・カトリック教会のミサが行われている。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiDe);
        left.append(imgDe);
        left.append(wikiDe);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'in') {

        // ！！！インド！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiIn = $("<div>タージマハル</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgIn = document.createElement('img');
        imgIn.src = 'img/タージマハル(インド)SNS.png';
        imgIn.alt = 'インド';
        imgIn.setAttribute("width", "250px");
        imgIn.setAttribute("height", "250px");

        let wikiIn = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E3%82%BF%E3%83%BC%E3%82%B8%E3%83%BB%E3%83%9E%E3%83%8F%E3%83%AB',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>タージ・マハルは、インド北部アーグラにある、総大理石の墓廟。ムガル帝国第5代皇帝シャー・ジャハーンが、1631年に死去した愛妃ムムターズ・マハルのため建設した。インド・イスラーム文化の代表的建築である。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiIn);
        left.append(imgIn);
        left.append(wikiIn);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'gb') {

        // ！！！イギリス！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiGb = $("<div>ビック・ベン</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgGb = document.createElement('img');
        imgGb.src = 'img/ビッグベン(イギリス)SNS.png';
        imgGb.alt = 'イギリス';
        imgGb.setAttribute("width", "250px");
        imgGb.setAttribute("height", "250px");

        let wikiGb = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E3%83%93%E3%83%83%E3%82%B0%E3%83%BB%E3%83%99%E3%83%B3',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>ビッグ・ベンは、イギリスの首都ロンドンにあるウェストミンスター宮殿（英国国会議事堂）に付属する時計台の大時鐘の愛称。現在では、転じて時計台全体・大時計そのものの名称として使われている。1859年5月31日に作られた。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiGb);
        left.append(imgGb);
        left.append(wikiGb);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'fr') {

        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiFn = $("<div>エッフェル塔</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgFn = document.createElement('img');
        imgFn.src = 'img/エッフェル塔(フランス)SNS.png';
        imgFn.alt = 'フランス';
        imgFn.setAttribute("width", "250px");
        imgFn.setAttribute("height", "250px");

        let wikiFn = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%83%E3%83%95%E3%82%A7%E3%83%AB%E5%A1%94',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>エッフェル塔は、フランスの首都パリの象徴的な名所となっている塔である。パリ7区、シャン・ド・マルス公園の北西に位置する。エッフェル塔の名は、塔の設計および建設者であるギュスターヴ・エッフェルに由来する。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiFn);
        left.append(imgFn);
        left.append(wikiFn);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'it') {

        // ！！！イタリア！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiIt = $("<div>ピサの斜塔</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgIt = document.createElement('img');
        imgIt.src = 'img/ピサの斜塔(イタリア)SNS.png';
        imgIt.alt = 'イタリア';
        imgIt.setAttribute("width", "250px");
        imgIt.setAttribute("height", "250px");

        let wikiIt = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>ピサの斜塔は、イタリアのピサ市にあるピサ大聖堂の鐘楼であり、世界遺産「ピサのドゥオモ広場」を構成する観光スポットである。かつてのガリレオの実験に対して行われた異端審問の弾圧に関連してローマ法王が詫びの公式声明を塔の頂上にて行ったことも有名。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiIt);
        left.append(imgIt);
        left.append(wikiIt);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'br') {

        // ！！！ブラジル！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiBr = $("<div>コルコバードのキリスト像</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgBr = document.createElement('img');
        imgBr.src = 'img/キリスト(ブラジル)SNS.png';
        imgBr.alt = 'ブラジル';
        imgBr.setAttribute("width", "250px");
        imgBr.setAttribute("height", "250px");

        let wikiBr = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%AB%E3%82%B3%E3%83%90%E3%83%BC%E3%83%89%E3%81%AE%E3%82%AD%E3%83%AA%E3%82%B9%E3%83%88%E5%83%8F',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>1922年のブラジル独立100周年を記念して、1922年から1931年にかけて建設された。高さ39.6メートル（内台座の高さが9.5メートル）、左右30メートルであり、635トンの重量がある。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiBr);
        left.append(imgBr);
        left.append(wikiBr);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'ca') {

        // ！！！カナダ！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiCa = $("<div>メープル金貨</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgCa = document.createElement('img');
        imgCa.src = 'img/金貨(カナダ)SNS.png';
        imgCa.alt = 'カナダ';
        imgCa.setAttribute("width", "250px");
        imgCa.setAttribute("height", "250px");

        let wikiCa = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%97%E3%83%AB%E3%83%AA%E3%83%BC%E3%83%95%E9%87%91%E8%B2%A8',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>1979年に創鋳され、以後毎年発行されている。表面にエリザベス2世の肖像、裏面にサトウカエデの葉が浮き彫りされている。純度99.99パーセント（.9999）以上の純金製（24カラット）である。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiCa);
        left.append(imgCa);
        left.append(wikiCa);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });

      } else if (code == 'ru') {

        // ！！！ロシア！！！
        let modal = $("<div></div>", {
          class: 'modalContent',
          css: {
            "position": "absolute", "border-radius": "10px", "top": "35%", "left": "50%", "transform": "translate(-50%,-50%)", "background": "white", "width": "50%", "height": "auto", "transition": "0.5s", "z-index": "1", "padding": "45px",
          },
        });

        let close = $("<a>×</a>").attr('href', '').css({
          "color": "#2BBF00", "text-decoration": "none", "font-size": "35px", "position": "absolute", "top": "15px", "right": "25px", "cursor": "pointer",
        });

        let midasiRu = $("<div>聖ワシリィ大聖堂</div>").css({
          "display": "flex", "justify-content": "center", "font-size": "30px", "font-weight": "bold", "position": "relative", "bottom": "10px", "letter-spacing": "2px",
        });

        // コンテンツ左半分
        let left = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "float": "left", "padding": "10px 25px",
        });
        let imgRu = document.createElement('img');
        imgRu.src = 'img/聖ワシリィ大聖堂(ロシア)SNS.png';
        imgRu.alt = 'ロシア';
        imgRu.setAttribute("width", "250px");
        imgRu.setAttribute("height", "250px");

        let wikiRu = $("<a>詳　細</a>").attr({
          href: 'https://ja.wikipedia.org/wiki/%E8%81%96%E3%83%AF%E3%82%B7%E3%83%AA%E3%82%A4%E5%A4%A7%E8%81%96%E5%A0%82',
          target: '_blank',
          rel: 'norefferrer'
        })
          .css({
            "text-align": "center", "text-decoration": "none", "background-color": "#FF9900", "color": "white", "position": "absolute", "padding": "5px 20px", "margin": "0 auto", "font-weight": "bold", "border-radius": "5px", "bottom": "37px", "font-size": "18px", "margin": "0 auto",
          });

        // コンテンツ右半分
        let right = $("<div></div>").css({
          "display": "flex", "flex-direction": "column", "align-items": "center", "padding": "10px 25px",
        });
        let modalText = $("<p>「1551年から1560年にかけて、イヴァン4世（雷帝）が、カザン・ハーンを捕虜とし勝利したことを記念して建立した。ロシアの聖堂でもっとも美しい建物のひとつと言われる。1990年にユネスコの世界遺産に登録された。</p>")
          .css({
            "font-size": "14px"
          });

        let rankMidasi = $("<div>ご購入者様ランキング</div>").css({
          "background-color": "#2EC4B6", "color": "white", "padding": "5px 10px", "margin": "10px 0px", "font-weight": "bold", "font-size": "18px",
        });

        let rankOverAll = $("<div></div>").css({
          "display": "flex", "margin": "10px 0px", "font-size": "16px",
        });
        let rank = $("<div>1位：<br>2位：<br>3位：</div>").css({
          "color": "#2EC4B6", "padding": "0px 5px",
        });
        let rankName = $("<div>アイボー<br>アイボー<br>アイボー</div>").css({
          "color": "#2EC4B6",
        });
        let base = $("<a>ご購入はこちら＞＞＞</a>").attr('href', "https://isenti.base.shop/").css({
          "position": "relative", "color": "#FF9900", "text-decoration": "none", "font-weight": "bold", "font-size": "18px", "top": "17px", "letter-spacing": "2px",
        });

        modal.append(close);
        modal.append(midasiRu);
        left.append(imgRu);
        left.append(wikiRu);
        right.append(modalText);
        right.append(rankMidasi);
        rankOverAll.append(rank);
        rankOverAll.append(rankName);
        right.append(rankOverAll);
        right.append(base);
        modal.append(left);
        modal.append(right);
        modal.fadeIn(100);
        $('#vmap').append(modal);

        $(close).on('click', function () {
          $(modal).fadeOut(100);
        });
        return false;

      } else if (code !== 'us', 'cn', 'de', 'in', 'gb', 'fr', 'it', 'br', 'ca', 'ru') {
        let message = 'Comming Soon...';
        alert(message);
      }
      // 第2弾 kr ,es ,au ,mx ,id ,nl ,sa ,tr ,ch ,tw
    },
  });
});



//   #vmap配下に変更があったとき
$("#vmap").on("DOMSubtreeModified propertychange", function () {
  //   svg要素を作成する
  let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  let pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  pattern.setAttribute("id", "Pattern");
  pattern.setAttribute("x", "0");
  pattern.setAttribute("y", "0");
  pattern.setAttribute("patternUnits", "userSpaceOnUse");
  pattern.setAttribute("width", "5");
  pattern.setAttribute("height", "5");
  rect.setAttribute("x", "0");
  rect.setAttribute("y", "0");
  rect.setAttribute("width", "100");
  rect.setAttribute("height", "100");
  rect.setAttribute("fill", "white");
  circle.setAttribute("cx", "2");
  circle.setAttribute("cy", "2");
  circle.setAttribute("r", "1");
  circle.setAttribute("fill", "#2BBF00");
  pattern.append(rect);
  pattern.appendChild(circle);
  defs.appendChild(pattern);


  // svg要素を追加する
  if ($("svg defs").length == 0) {
    $("svg").prepend(defs);
  }
});


// メインメニュー
$(document).ready(function () {

  // (function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn1");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
});



// サブメニュー 
// $(function () {
//   $('.js-modal-open').each(function () {
//     $(this).on('click', function () {
//       let target = $(this).data('target');
//       let modal = document.getElementById(target);
//       $(modal).fadeIn();
//       return false;
//     });
//   });
//   $('.js-modal-close-btn').on('click', function () {
//     $('.js-modal').fadeOut();
//     return false;
//   });
// });



// メインメニュー：illustration
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#new_post]').click(function () {
    // スクロールの速度
    let speed = 1500;
    // アンカーの値取得
    let href = $(this).attr("href");
    // 移動先を取得
    let target = $(href == "new_post" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    let position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// メインメニュー：about
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#about_us]').click(function () {
    // スクロールの速度
    let speed = 1500; // ミリ秒
    // アンカーの値取得
    let href = $(this).attr("href");
    // 移動先を取得
    let target = $(href == "about_us" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    let position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

