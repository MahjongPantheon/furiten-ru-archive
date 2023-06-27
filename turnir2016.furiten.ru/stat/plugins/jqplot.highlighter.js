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
                    <li><a href="/stat/">Рейтинг</a></li>
                    <li><a href="/graphs/">Графики</a></li>
                                        <li><a href="/add/">+Игра&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                                        <li><a href="/reg/">+Игрок&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/login/">Вход&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/timer/" target="_blank">Таймер</a></li>
                    <li><a href="/sortition/gennew/" target="_blank">Рассадка&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
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
        <th><abbr title="Среднеквадратичное отклонение">СКО</abbr></th>
        <th>Сыграно игр</th>
    </tr>
        <tr>
        <td><a href="/graphs/?user=nusha">Nusharik</a></td>
        <td><span class="badge badge-success">1599.8</span></td>
        <td>1.5</td>
        <td>0.866</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=sifsi">Сифси</a></td>
        <td><span class="badge badge-success">1585.4</span></td>
        <td>1.25</td>
        <td>0.433</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=rumkin">Rumkin</a></td>
        <td><span class="badge badge-success">1563.2</span></td>
        <td>1.75</td>
        <td>1.299</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=sayaka">Sayaka</a></td>
        <td><span class="badge badge-success">1560.6</span></td>
        <td>2</td>
        <td>1.2247</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=tyan">Тян</a></td>
        <td><span class="badge badge-success">1551.8</span></td>
        <td>2</td>
        <td>1.2247</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=oath">Faithful to the Oath</a></td>
        <td><span class="badge badge-success">1551.3</span></td>
        <td>2</td>
        <td>1.2247</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=coms">eComs</a></td>
        <td><span class="badge badge-success">1547.7</span></td>
        <td>2</td>
        <td>0.7071</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=jun">June</a></td>
        <td><span class="badge badge-success">1547</span></td>
        <td>2</td>
        <td>0.7071</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=yllin">yllin</a></td>
        <td><span class="badge badge-success">1545.4</span></td>
        <td>1.75</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=baron">Барон</a></td>
        <td><span class="badge badge-success">1540.2</span></td>
        <td>2</td>
        <td>1.2247</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=maaonni">maaonni</a></td>
        <td><span class="badge badge-success">1537.9</span></td>
        <td>1.75</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=replay">Replay</a></td>
        <td><span class="badge badge-success">1533.4</span></td>
        <td>2.25</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=madcat">Mad Cat</a></td>
        <td><span class="badge badge-success">1532.6</span></td>
        <td>2</td>
        <td>1.2247</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=vell">WE8</a></td>
        <td><span class="badge badge-success">1532.2</span></td>
        <td>2.25</td>
        <td>0.433</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=oringer">Oringer</a></td>
        <td><span class="badge badge-success">1528.9</span></td>
        <td>2.25</td>
        <td>0.433</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=richi">Richi</a></td>
        <td><span class="badge badge-success">1526.3</span></td>
        <td>2.25</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=ktoto">KTO-TO</a></td>
        <td><span class="badge badge-success">1516.3</span></td>
        <td>2</td>
        <td>0.7071</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=tensai">Tensai</a></td>
        <td><span class="badge badge-success">1509.3</span></td>
        <td>2.25</td>
        <td>1.0897</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=fazig">FaZiG</a></td>
        <td><span class="badge badge-success">1509</span></td>
        <td>2.5</td>
        <td>0.866</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=musashi">Miyamoto Musashi</a></td>
        <td><span class="badge badge-success">1505.8</span></td>
        <td>2.5</td>
        <td>1.118</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=flashka">flashka</a></td>
        <td><span class="badge badge-success">1502.3</span></td>
        <td>2.25</td>
        <td>1.299</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=babaika">Babaika</a></td>
        <td><span class="badge badge-important">1498.9</span></td>
        <td>2.5</td>
        <td>1.118</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=mox">Александр С</a></td>
        <td><span class="badge badge-important">1498</span></td>
        <td>2.25</td>
        <td>1.299</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=rqd">RQD</a></td>
        <td><span class="badge badge-important">1497.7</span></td>
        <td>2.5</td>
        <td>1.118</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=maki">maki</a></td>
        <td><span class="badge badge-important">1494.9</span></td>
        <td>2.25</td>
        <td>1.0897</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=yami">Yami</a></td>
        <td><span class="badge badge-important">1492</span></td>
        <td>2.75</td>
        <td>1.0897</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=noob">Нубищееее</a></td>
        <td><span class="badge badge-important">1491.5</span></td>
        <td>2.75</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=angry">Angrymodern</a></td>
        <td><span class="badge badge-important">1484.1</span></td>
        <td>2.5</td>
        <td>1.118</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=rabakku">Rabakku</a></td>
        <td><span class="badge badge-important">1484.1</span></td>
        <td>2.75</td>
        <td>1.0897</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=tslaf">TslaF</a></td>
        <td><span class="badge badge-important">1482.3</span></td>
        <td>3</td>
        <td>1.2247</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=silen">Silen-san</a></td>
        <td><span class="badge badge-important">1478.9</span></td>
        <td>2.5</td>
        <td>1.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=fobos">foboskilla</a></td>
        <td><span class="badge badge-important">1474.9</span></td>
        <td>2.75</td>
        <td>0.433</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=olex">olex</a></td>
        <td><span class="badge badge-important">1470.3</span></td>
        <td>2.75</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=kuzmich">kuzmich</a></td>
        <td><span class="badge badge-important">1467.3</span></td>
        <td>3</td>
        <td>0.7071</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=ushkan">Ushkan</a></td>
        <td><span class="badge badge-important">1465.2</span></td>
        <td>3</td>
        <td>0.7071</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=sladki">Сладкий</a></td>
        <td><span class="badge badge-important">1462.6</span></td>
        <td>3</td>
        <td>1</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=rh">RH</a></td>
        <td><span class="badge badge-important">1448.5</span></td>
        <td>3.25</td>
        <td>0.433</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=kuzma">Кузьма</a></td>
        <td><span class="badge badge-important">1434.4</span></td>
        <td>3.25</td>
        <td>1.299</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=night">nwalker</a></td>
        <td><span class="badge badge-important">1427.6</span></td>
        <td>3.5</td>
        <td>0.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=ovvost">ovvost</a></td>
        <td><span class="badge badge-important">1426.1</span></td>
        <td>3.75</td>
        <td>0.433</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=kvega">Kvega</a></td>
        <td><span class="badge badge-important">1424.1</span></td>
        <td>3.25</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=minori">Minori</a></td>
        <td><span class="badge badge-important">1420.2</span></td>
        <td>3.5</td>
        <td>0.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=orych">Лорд Тентаклис</a></td>
        <td><span class="badge badge-important">1413.9</span></td>
        <td>3.25</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=benya">Benya</a></td>
        <td><span class="badge badge-important">1413.1</span></td>
        <td>3.5</td>
        <td>0.5</td>
        <td>4</td>
    </tr>
    </table>
</div>

</body>
</html>
