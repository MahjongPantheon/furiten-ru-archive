<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Riichi statboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Oleg Klimenko @ Novosibirsk Mahjong Club">

    <link href="/assets/css/bootstrap.css" rel="stylesheet">
    <script src="/assets/js/jquery.js"></script>
    <script src="/assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="/assets/js/jquery.jqplot.min.js"></script>
    <script type="text/javascript" src="/assets/js/jqplot.categoryAxisRenderer.min.js"></script>
    <script type="text/javascript" src="/assets/js/jqplot.barRenderer.min.js"></script>
    <script type="text/javascript" src="/assets/js/jqplot.highlighter.js"></script>
    <script type="text/javascript" src="/assets/js/jqplot.cursor.js"></script>
    <link rel="stylesheet" type="text/css" href="/assets/css/jquery.jqplot.min.css" />
    <link href="/assets/css/bootstrap-responsive.css" rel="stylesheet">
    <style>
        body {
            padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
        }
    </style>

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="shortcut icon" href="/assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="/assets/ico/apple-touch-icon-57-precomposed.png">

    <link rel="stylesheet" type="text/css" href="/assets/styles.css">
</head>

<body>
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <div class="nav-collapse">
                <ul class="nav">
                    <li><a href="/last/">Последние игры</a></li>
                    <li><a href="/stat/">Рейтинг игроков</a></li>
                    <li><a href="/graphs/">Графики рейтинга</a></li>
                    <li><a href="/logs/">Логи</a></li>
                    <li><a href="/add/">Добавить игру&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/reg/">Добавить игрока&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/login/">Вход&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/timer/" target="_blank">Таймер</a></li>
                    <li><a href="/sortition/" target="_blank">Рассадка</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <h2>Рейтинг игроков</h2>
<br>
<table class="table table-striped table-condensed">
    <tr>
        <th>Игрок</th>
        <th><a href="?sort=rating">Рейтинг</a></th>
        <th><a href="?sort=avg">Среднее место</a></th>
        <th>Сыграно игр</th>
    </tr>
        <tr>
        <td><a href="/graphs/?user=kuzmich">kuzmich</a></td>
        <td><span class="badge badge-success">1579.9</span></td>
        <td>1.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=jun">Jun</a></td>
        <td><span class="badge badge-success">1570.5</span></td>
        <td>1.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=sladki">Сладкий</a></td>
        <td><span class="badge badge-success">1558.9</span></td>
        <td>1.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=harmony">Harmony</a></td>
        <td><span class="badge badge-success">1556.4</span></td>
        <td>1.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=flashka">Flashka</a></td>
        <td><span class="badge badge-success">1548.5</span></td>
        <td>1.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=tslaf">TslaF</a></td>
        <td><span class="badge badge-success">1544.4</span></td>
        <td>2.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=oringer">Oringer</a></td>
        <td><span class="badge badge-success">1543.4</span></td>
        <td>1.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=baron">Барон</a></td>
        <td><span class="badge badge-success">1538.2</span></td>
        <td>2.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=takara">Такара</a></td>
        <td><span class="badge badge-success">1532.8</span></td>
        <td>2</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=selva">Selva</a></td>
        <td><span class="badge badge-success">1532</span></td>
        <td>2.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=tyan">Тян</a></td>
        <td><span class="badge badge-success">1525.7</span></td>
        <td>2.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=maki">maki</a></td>
        <td><span class="badge badge-success">1522.9</span></td>
        <td>2.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=ken">HadoKEN</a></td>
        <td><span class="badge badge-success">1520.2</span></td>
        <td>2.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=neko">Сережа</a></td>
        <td><span class="badge badge-success">1508.4</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=sifsi">Сифси</a></td>
        <td><span class="badge badge-success">1507</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=lera">Валерия</a></td>
        <td><span class="badge badge-success">1503.5</span></td>
        <td>2.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=samal">Samal</a></td>
        <td><span class="badge badge-success">1501.6</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=yagef">Yagef</a></td>
        <td><span class="badge badge-success">1501.1</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=benya">Benya</a></td>
        <td><span class="badge badge-important">1491</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=airee">Airee</a></td>
        <td><span class="badge badge-important">1489</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=vell">НоСоЯк</a></td>
        <td><span class="badge badge-important">1487.8</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=pie">Пай</a></td>
        <td><span class="badge badge-important">1482</span></td>
        <td>2.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=jojo">JoJo</a></td>
        <td><span class="badge badge-important">1481.4</span></td>
        <td>2.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=shandow">Shandow</a></td>
        <td><span class="badge badge-important">1480.9</span></td>
        <td>2.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=tensai">Тенсай</a></td>
        <td><span class="badge badge-important">1475.5</span></td>
        <td>2.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=hif">Хиф</a></td>
        <td><span class="badge badge-important">1474.2</span></td>
        <td>3</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=nusha">Nusharik</a></td>
        <td><span class="badge badge-important">1472.1</span></td>
        <td>2.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=mox">ЕЩЕ СЛАЩЕ!</a></td>
        <td><span class="badge badge-important">1472</span></td>
        <td>2.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=coms">eComs</a></td>
        <td><span class="badge badge-important">1466.9</span></td>
        <td>3</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=psy">Psyhister</a></td>
        <td><span class="badge badge-important">1466.5</span></td>
        <td>3</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=richi">Richi</a></td>
        <td><span class="badge badge-important">1465.8</span></td>
        <td>3</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=tako">Тако-кун</a></td>
        <td><span class="badge badge-important">1462.2</span></td>
        <td>3</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=kenny">Сладкоежка</a></td>
        <td><span class="badge badge-important">1460.9</span></td>
        <td>2.75</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=daler">Daler</a></td>
        <td><span class="badge badge-important">1428.1</span></td>
        <td>3.25</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=ushkan">Ushkan</a></td>
        <td><span class="badge badge-important">1399.4</span></td>
        <td>3.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=kuzma">Кузьма</a></td>
        <td><span class="badge badge-important">1388</span></td>
        <td>4</td>
        <td>4</td>
    </tr>
    </table></div>

</body>
</html>
