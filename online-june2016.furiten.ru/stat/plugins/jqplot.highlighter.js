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
            	    <li><a href="https://furiten.ru/" target="_blank">Фуритен</a></li>
                    <li><a href="/last/">Последние игры</a></li>
                    <li><a href="/stat/">Рейтинг</a></li>
                    <li><a href="/graphs/">Графики</a></li>
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
        <th>#</th>
        <th>Игрок</th>
        <th><a href="?sort=rating">Рейтинг</a></th>
        <th><a href="?sort=avg">Среднее место</a></th>
        <th><abbr title="Среднеквадратичное отклонение">СКО</abbr></th>
        <th>Сыграно игр</th>
    </tr>
            <tr>
        <td>1</td>
        <td><a href="/graphs/?user=Githz">Githz</a></td>
        <td><span class="badge badge-success">1505.62</span></td>
        <td>2</td>
        <td>1.32</td>
        <td>8</td>
    </tr>
        <tr>
        <td>2</td>
        <td><a href="/graphs/?user=%E3%82%A2%E3%83%AB%E3%83%94%E3%83%8A">アルピナ</a></td>
        <td><span class="badge badge-success">1505.47</span></td>
        <td>1.63</td>
        <td>0.86</td>
        <td>8</td>
    </tr>
        <tr>
        <td>3</td>
        <td><a href="/graphs/?user=Frodo">Frodo</a></td>
        <td><span class="badge badge-success">1504.22</span></td>
        <td>1.75</td>
        <td>0.83</td>
        <td>8</td>
    </tr>
        <tr>
        <td>4</td>
        <td><a href="/graphs/?user=Valery">Valery</a></td>
        <td><span class="badge badge-success">1503.33</span></td>
        <td>2.13</td>
        <td>1.05</td>
        <td>8</td>
    </tr>
        <tr>
        <td>5</td>
        <td><a href="/graphs/?user=41u">41u</a></td>
        <td><span class="badge badge-success">1503.54</span></td>
        <td>1.86</td>
        <td>0.83</td>
        <td>7</td>
    </tr>
        <tr>
        <td>6</td>
        <td><a href="/graphs/?user=Zloyfil">Zloyfil</a></td>
        <td><span class="badge badge-success">1503.32</span></td>
        <td>2.14</td>
        <td>0.64</td>
        <td>7</td>
    </tr>
        <tr>
        <td>7</td>
        <td><a href="/graphs/?user=dRainCat">dRainCat</a></td>
        <td><span class="badge badge-success">1502.44</span></td>
        <td>2.29</td>
        <td>0.88</td>
        <td>7</td>
    </tr>
        <tr>
        <td>8</td>
        <td><a href="/graphs/?user=xxldr">xxldr</a></td>
        <td><span class="badge badge-success">1502.18</span></td>
        <td>2.29</td>
        <td>1.16</td>
        <td>7</td>
    </tr>
        <tr>
        <td>9</td>
        <td><a href="/graphs/?user=Trilon57">Trilon57</a></td>
        <td><span class="badge badge-success">1501.81</span></td>
        <td>2.29</td>
        <td>1.16</td>
        <td>7</td>
    </tr>
        <tr>
        <td>10</td>
        <td><a href="/graphs/?user=Tentacle">Tentacle</a></td>
        <td><span class="badge badge-success">1501.17</span></td>
        <td>2.14</td>
        <td>0.99</td>
        <td>7</td>
    </tr>
        <tr>
        <td>11</td>
        <td><a href="/graphs/?user=Razout">Razout</a></td>
        <td><span class="badge badge-success">1500.92</span></td>
        <td>2.43</td>
        <td>0.73</td>
        <td>7</td>
    </tr>
        <tr>
        <td>12</td>
        <td><a href="/graphs/?user=KOTOBAZA">KOTOBAZA</a></td>
        <td><span class="badge badge-success">1500.64</span></td>
        <td>2.43</td>
        <td>0.9</td>
        <td>7</td>
    </tr>
        <tr>
        <td>13</td>
        <td><a href="/graphs/?user=Benawi">Benawi</a></td>
        <td><span class="badge badge-success">1500.54</span></td>
        <td>2.14</td>
        <td>0.83</td>
        <td>7</td>
    </tr>
        <tr>
        <td>14</td>
        <td><a href="/graphs/?user=%5C%28%2A.%2A%29%2F">\(*.*)/</a></td>
        <td><span class="badge badge-success">1500.22</span></td>
        <td>2.43</td>
        <td>0.9</td>
        <td>7</td>
    </tr>
        <tr>
        <td>15</td>
        <td><a href="/graphs/?user=Sayaka-s">Sayaka-s</a></td>
        <td><span class="badge badge-success">1500.2</span></td>
        <td>2.43</td>
        <td>1.05</td>
        <td>7</td>
    </tr>
        <tr>
        <td>16</td>
        <td><a href="/graphs/?user=%3E%3A3">>:3</a></td>
        <td><span class="badge badge-important">1499.78</span></td>
        <td>2.71</td>
        <td>1.28</td>
        <td>7</td>
    </tr>
        <tr>
        <td>17</td>
        <td><a href="/graphs/?user=heilage">heilage</a></td>
        <td><span class="badge badge-important">1499.73</span></td>
        <td>2.71</td>
        <td>1.28</td>
        <td>7</td>
    </tr>
        <tr>
        <td>18</td>
        <td><a href="/graphs/?user=Suanko">Suanko</a></td>
        <td><span class="badge badge-important">1499.7</span></td>
        <td>2.71</td>
        <td>1.16</td>
        <td>7</td>
    </tr>
        <tr>
        <td>19</td>
        <td><a href="/graphs/?user=Jun-90">Jun-90</a></td>
        <td><span class="badge badge-important">1499.63</span></td>
        <td>2.71</td>
        <td>1.03</td>
        <td>7</td>
    </tr>
        <tr>
        <td>20</td>
        <td><a href="/graphs/?user=recursor">recursor</a></td>
        <td><span class="badge badge-important">1499.27</span></td>
        <td>2.86</td>
        <td>1.36</td>
        <td>7</td>
    </tr>
        <tr>
        <td>21</td>
        <td><a href="/graphs/?user=DpakoH87">DpakoH87</a></td>
        <td><span class="badge badge-important">1499.16</span></td>
        <td>2.86</td>
        <td>1.12</td>
        <td>7</td>
    </tr>
        <tr>
        <td>22</td>
        <td><a href="/graphs/?user=Monti">Monti</a></td>
        <td><span class="badge badge-important">1498.85</span></td>
        <td>2.43</td>
        <td>1.05</td>
        <td>7</td>
    </tr>
        <tr>
        <td>23</td>
        <td><a href="/graphs/?user=%D0%91%D0%9E%D0%A0%D0%A9">БОРЩ</a></td>
        <td><span class="badge badge-important">1498.82</span></td>
        <td>2.57</td>
        <td>0.73</td>
        <td>7</td>
    </tr>
        <tr>
        <td>24</td>
        <td><a href="/graphs/?user=Anzeloto">Anzeloto</a></td>
        <td><span class="badge badge-important">1498.74</span></td>
        <td>2.57</td>
        <td>1.05</td>
        <td>7</td>
    </tr>
        <tr>
        <td>25</td>
        <td><a href="/graphs/?user=eComS">eComS</a></td>
        <td><span class="badge badge-important">1497.83</span></td>
        <td>2.86</td>
        <td>1.12</td>
        <td>7</td>
    </tr>
        <tr>
        <td>26</td>
        <td><a href="/graphs/?user=dis">dis</a></td>
        <td><span class="badge badge-important">1497.35</span></td>
        <td>2.71</td>
        <td>0.7</td>
        <td>7</td>
    </tr>
        <tr>
        <td>27</td>
        <td><a href="/graphs/?user=Suslik">Suslik</a></td>
        <td><span class="badge badge-important">1497.17</span></td>
        <td>2.86</td>
        <td>1.12</td>
        <td>7</td>
    </tr>
        <tr>
        <td>28</td>
        <td><a href="/graphs/?user=relghufr">relghufr</a></td>
        <td><span class="badge badge-important">1497.05</span></td>
        <td>2.86</td>
        <td>1.25</td>
        <td>7</td>
    </tr>
        <tr>
        <td>29</td>
        <td><a href="/graphs/?user=babaika">babaika</a></td>
        <td><span class="badge badge-important">1496.75</span></td>
        <td>2.86</td>
        <td>1.12</td>
        <td>7</td>
    </tr>
        <tr>
        <td>30</td>
        <td><a href="/graphs/?user=Manabi0">Manabi0</a></td>
        <td><span class="badge badge-important">1496.36</span></td>
        <td>3.14</td>
        <td>1.12</td>
        <td>7</td>
    </tr>
        <tr>
        <td>31</td>
        <td><a href="/graphs/?user=mrRiichi">mrRiichi</a></td>
        <td><span class="badge badge-important">1494.09</span></td>
        <td>3.14</td>
        <td>0.99</td>
        <td>7</td>
    </tr>
        <tr>
        <td>32</td>
        <td><a href="/graphs/?user=Tyanka">Tyanka</a></td>
        <td><span class="badge badge-important">1496.02</span></td>
        <td>3.4</td>
        <td>1.2</td>
        <td>5</td>
    </tr>
        <tr>
        <td>33</td>
        <td><a href="/graphs/?user=Alfa-Tom">Alfa-Tom</a></td>
        <td><span class="badge badge-important">1498.01</span></td>
        <td>3.5</td>
        <td>0.5</td>
        <td>2</td>
    </tr>
        </table>
</div>

</body>
</html>
