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
                    <li><a href="/addonline/">+Онлайн-игра&nbsp;&nbsp;<span style="opacity: 0.5" class="icon-lock icon-white"></span></a></li>
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
        <td><a href="/graphs/?user=%D0%9F%D0%BE%D0%BB%D1%83%D0%BE%D1%81%D1%8C">Полуось</a></td>
        <td><span class="badge badge-success">1553.35</span></td>
        <td>1.4</td>
        <td>0.4899</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=RQD">RQD</a></td>
        <td><span class="badge badge-success">1534.78</span></td>
        <td>1.8</td>
        <td>0.7483</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Benawi">Benawi</a></td>
        <td><span class="badge badge-success">1526.19</span></td>
        <td>2</td>
        <td>0.8944</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=recursor">recursor</a></td>
        <td><span class="badge badge-success">1524.44</span></td>
        <td>2</td>
        <td>0.8944</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=%5C%28%2A.%2A%29%2F">\(*.*)/</a></td>
        <td><span class="badge badge-success">1523.84</span></td>
        <td>2.2</td>
        <td>0.9798</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Suslik">Suslik</a></td>
        <td><span class="badge badge-success">1519.74</span></td>
        <td>2.2</td>
        <td>1.1662</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Replay">Replay</a></td>
        <td><span class="badge badge-success">1516</span></td>
        <td>2.4</td>
        <td>1.0198</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=%EF%BC%AD%EF%BD%81%EF%BD%94%EF%BD%94%EF%BD%85">Ｍａｔｔｅ</a></td>
        <td><span class="badge badge-success">1509.6</span></td>
        <td>2.2</td>
        <td>1.1662</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Rumkin">Rumkin</a></td>
        <td><span class="badge badge-success">1509.59</span></td>
        <td>2.6</td>
        <td>1.3565</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=J%D0%B0yTord">JаyTord</a></td>
        <td><span class="badge badge-success">1507.1</span></td>
        <td>2.2</td>
        <td>1.1662</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Mult">Mult</a></td>
        <td><span class="badge badge-important">1489.3</span></td>
        <td>3</td>
        <td>0.6325</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Nyaka">Nyaka</a></td>
        <td><span class="badge badge-important">1488.71</span></td>
        <td>2.8</td>
        <td>1.1662</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=TinkBell">TinkBell</a></td>
        <td><span class="badge badge-important">1486.38</span></td>
        <td>2.8</td>
        <td>1.4697</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Tyanka">Tyanka</a></td>
        <td><span class="badge badge-important">1484.45</span></td>
        <td>2.6</td>
        <td>1.0198</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=B3nya">B3nya</a></td>
        <td><span class="badge badge-important">1481.59</span></td>
        <td>3</td>
        <td>0.6325</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Sayaka-s">Sayaka-s</a></td>
        <td><span class="badge badge-important">1479.46</span></td>
        <td>3</td>
        <td>0.8944</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=-%E3%83%A9%E3%83%90%E3%83%83%E3%82%AF-">-ラバック-</a></td>
        <td><span class="badge badge-important">1476.94</span></td>
        <td>2.8</td>
        <td>0.7483</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Drow">Drow</a></td>
        <td><span class="badge badge-important">1466.06</span></td>
        <td>3</td>
        <td>0.8944</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=Fly">Fly</a></td>
        <td><span class="badge badge-important">1464.11</span></td>
        <td>3</td>
        <td>1.0954</td>
        <td>5</td>
    </tr>
        <tr>
        <td><a href="/graphs/?user=RuRoLe">RuRoLe</a></td>
        <td><span class="badge badge-important">1458.37</span></td>
        <td>3</td>
        <td>1.2649</td>
        <td>5</td>
    </tr>
    </table>
</div>

</body>
</html>
