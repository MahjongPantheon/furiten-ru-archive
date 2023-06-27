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
                    <!--li><a href="/nominations/">Номинации</a></li-->
                    <li><a href="/logs/">Логи</a></li>
                    <!--li><a href="/add/">+Игра&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/addonline/">+Онлайн-игра&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/reg/">+Игрок&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/login/">Вход&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
                    <li><a href="/timer/" target="_blank">Таймер</a></li>
                    <li><a href="/sortition/" target="_blank">Рассадка</a></li-->
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
        <td><a href="/graphs/?user=Replay">Replay</a></td>
        <td><span class="badge badge-success">1656.7</span></td>
        <td>1</td>
        <td>0</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=XAOT">XAOT</a></td>
        <td><span class="badge badge-success">1545.6</span></td>
        <td>2</td>
        <td>0</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=0ado3">0ado3</a></td>
        <td><span class="badge badge-success">1544.4</span></td>
        <td>2</td>
        <td>1</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=vedun">vedun</a></td>
        <td><span class="badge badge-success">1529.8</span></td>
        <td>2</td>
        <td>0.7071</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Jun-90">Jun-90</a></td>
        <td><span class="badge badge-success">1513.2</span></td>
        <td>2.5</td>
        <td>0.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=totoiono">totoiono</a></td>
        <td><span class="badge badge-success">1510.9</span></td>
        <td>2.25</td>
        <td>0.8292</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Manabi0">Manabi0</a></td>
        <td><span class="badge badge-success">1510.9</span></td>
        <td>2.5</td>
        <td>1.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=nekokuza">nekokuza</a></td>
        <td><span class="badge badge-important">1497.3</span></td>
        <td>2.5</td>
        <td>1.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Tyanka">Tyanka</a></td>
        <td><span class="badge badge-important">1463.7</span></td>
        <td>3</td>
        <td>0.7071</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Psyhistr">Psyhistr</a></td>
        <td><span class="badge badge-important">1442.9</span></td>
        <td>3</td>
        <td>1</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=eComS">eComS</a></td>
        <td><span class="badge badge-important">1397.9</span></td>
        <td>3.5</td>
        <td>0.5</td>
        <td>4</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=B3nya">B3nya</a></td>
        <td><span class="badge badge-important">1386.7</span></td>
        <td>3.75</td>
        <td>0.433</td>
        <td>4</td>
    </tr>
    </table>

</div>

</body>
</html>
