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

    <link rel="stylesheet" type="text/css" href="/assets/styles.css?111">
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
            	    <li><a href="https://furiten.ru/">Furiten</a></li>
            	    <li><a href="/">Описание турнира</a></li>
                    <li><a href="/last/">Логи игр</a></li>
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
        <td><a href="/graphs/?user=kim">Валерия Ким</a></td>
        <td><span class="badge badge-success">170900</span></td>
        <td>1.875</td>
        <td>0.7806</td>
        <td>8</td>
    </tr>
        <tr>
        <td>2</td>
        <td><a href="/graphs/?user=meshin">Виталий Мешин</a></td>
        <td><span class="badge badge-success">124800</span></td>
        <td>1.875</td>
        <td>1.0533</td>
        <td>8</td>
    </tr>
        <tr>
        <td>3</td>
        <td><a href="/graphs/?user=timofeev">Валентин Тимофеев</a></td>
        <td><span class="badge badge-success">78500</span></td>
        <td>1.875</td>
        <td>1.2686</td>
        <td>8</td>
    </tr>
        <tr>
        <td>4</td>
        <td><a href="/graphs/?user=kuzkokov">Сергей Кузькоков</a></td>
        <td><span class="badge badge-success">74100</span></td>
        <td>2</td>
        <td>1.118</td>
        <td>8</td>
    </tr>
        <tr>
        <td>5</td>
        <td><a href="/graphs/?user=sanatullov">Ренат Санатуллов</a></td>
        <td><span class="badge badge-success">66000</span></td>
        <td>2.25</td>
        <td>1.0897</td>
        <td>8</td>
    </tr>
        <tr>
        <td>6</td>
        <td><a href="/graphs/?user=titova">Елена Титова</a></td>
        <td><span class="badge badge-success">60700</span></td>
        <td>2.125</td>
        <td>1.1659</td>
        <td>8</td>
    </tr>
        <tr>
        <td>7</td>
        <td><a href="/graphs/?user=matveeva">Алена Матвеева</a></td>
        <td><span class="badge badge-success">54100</span></td>
        <td>2.25</td>
        <td>1.199</td>
        <td>8</td>
    </tr>
        <tr>
        <td>8</td>
        <td><a href="/graphs/?user=karpov">Александр Карпов</a></td>
        <td><span class="badge badge-success">43500</span></td>
        <td>2.25</td>
        <td>0.9682</td>
        <td>8</td>
    </tr>
        <tr>
        <td>9</td>
        <td><a href="/graphs/?user=knyazhev">Анатолий Княжев</a></td>
        <td><span class="badge badge-success">35900</span></td>
        <td>2.375</td>
        <td>0.9922</td>
        <td>8</td>
    </tr>
        <tr>
        <td>10</td>
        <td><a href="/graphs/?user=sokolov">Михаил Соколов</a></td>
        <td><span class="badge badge-success">32600</span></td>
        <td>2.25</td>
        <td>1.0897</td>
        <td>8</td>
    </tr>
        <tr>
        <td>11</td>
        <td><a href="/graphs/?user=trubitsina">Лукерья Трубицына</a></td>
        <td><span class="badge badge-success">23000</span></td>
        <td>2.125</td>
        <td>0.927</td>
        <td>8</td>
    </tr>
        <tr>
        <td>12</td>
        <td><a href="/graphs/?user=fedorkevich">Антон Федоркевич</a></td>
        <td><span class="badge badge-success">22500</span></td>
        <td>2.375</td>
        <td>1.111</td>
        <td>8</td>
    </tr>
        <tr>
        <td>13</td>
        <td><a href="/graphs/?user=vodilov">Дмитрий Водилов</a></td>
        <td><span class="badge badge-success">17800</span></td>
        <td>2.25</td>
        <td>0.9682</td>
        <td>8</td>
    </tr>
        <tr>
        <td>14</td>
        <td><a href="/graphs/?user=falko">Ирина Фалько</a></td>
        <td><span class="badge badge-success">11300</span></td>
        <td>2.5</td>
        <td>1.118</td>
        <td>8</td>
    </tr>
        <tr>
        <td>15</td>
        <td><a href="/graphs/?user=gubanova">Кристина Губанова</a></td>
        <td><span class="badge badge-success">9300</span></td>
        <td>2.375</td>
        <td>1.111</td>
        <td>8</td>
    </tr>
        <tr>
        <td>16</td>
        <td><a href="/graphs/?user=kozlovskaya">Яна Козловская </a></td>
        <td><span class="badge badge-success">4700</span></td>
        <td>2.25</td>
        <td>0.8292</td>
        <td>8</td>
    </tr>
        <tr>
        <td>17</td>
        <td><a href="/graphs/?user=zarezin">Иван Зарезин</a></td>
        <td><span class="badge badge-important">-800</span></td>
        <td>2.375</td>
        <td>1.2183</td>
        <td>8</td>
    </tr>
        <tr>
        <td>18</td>
        <td><a href="/graphs/?user=goncharenko">Александр Гончаренко</a></td>
        <td><span class="badge badge-important">-14100</span></td>
        <td>2.625</td>
        <td>1.111</td>
        <td>8</td>
    </tr>
        <tr>
        <td>19</td>
        <td><a href="/graphs/?user=poroshin">Семен Порошин</a></td>
        <td><span class="badge badge-important">-15200</span></td>
        <td>2.75</td>
        <td>0.9682</td>
        <td>8</td>
    </tr>
        <tr>
        <td>20</td>
        <td><a href="/graphs/?user=gracheva">Евгения Грачева</a></td>
        <td><span class="badge badge-important">-34000</span></td>
        <td>3</td>
        <td>1</td>
        <td>8</td>
    </tr>
        <tr>
        <td>21</td>
        <td><a href="/graphs/?user=maslatsova">Елизавета Маслацова</a></td>
        <td><span class="badge badge-important">-47800</span></td>
        <td>2.625</td>
        <td>1.2183</td>
        <td>8</td>
    </tr>
        <tr>
        <td>22</td>
        <td><a href="/graphs/?user=svirid">Станислав Свирид</a></td>
        <td><span class="badge badge-important">-51500</span></td>
        <td>2.625</td>
        <td>0.9922</td>
        <td>8</td>
    </tr>
        <tr>
        <td>23</td>
        <td><a href="/graphs/?user=levin">Сергей Левин</a></td>
        <td><span class="badge badge-important">-52100</span></td>
        <td>2.75</td>
        <td>1.0897</td>
        <td>8</td>
    </tr>
        <tr>
        <td>24</td>
        <td><a href="/graphs/?user=stolbova">Анастасия Столбова</a></td>
        <td><span class="badge badge-important">-64000</span></td>
        <td>3</td>
        <td>1.118</td>
        <td>8</td>
    </tr>
        <tr>
        <td>25</td>
        <td><a href="/graphs/?user=vgolubev">Виталий Голубев</a></td>
        <td><span class="badge badge-important">-65800</span></td>
        <td>2.875</td>
        <td>1.2686</td>
        <td>8</td>
    </tr>
        <tr>
        <td>26</td>
        <td><a href="/graphs/?user=chernih">Антон Черных</a></td>
        <td><span class="badge badge-important">-66400</span></td>
        <td>2.75</td>
        <td>1.199</td>
        <td>8</td>
    </tr>
        <tr>
        <td>27</td>
        <td><a href="/graphs/?user=karasyuk">Павел Карасюк</a></td>
        <td><span class="badge badge-important">-69400</span></td>
        <td>2.875</td>
        <td>0.7806</td>
        <td>8</td>
    </tr>
        <tr>
        <td>28</td>
        <td><a href="/graphs/?user=sanzharov">Роман  Санжаров</a></td>
        <td><span class="badge badge-important">-79800</span></td>
        <td>2.75</td>
        <td>0.6614</td>
        <td>8</td>
    </tr>
        <tr>
        <td>29</td>
        <td><a href="/graphs/?user=novik">Дмитрий Новик</a></td>
        <td><span class="badge badge-important">-81900</span></td>
        <td>3.125</td>
        <td>0.927</td>
        <td>8</td>
    </tr>
        <tr>
        <td>30</td>
        <td><a href="/graphs/?user=levina">Вера Левина</a></td>
        <td><span class="badge badge-important">-83600</span></td>
        <td>3</td>
        <td>0.866</td>
        <td>8</td>
    </tr>
        <tr>
        <td>31</td>
        <td><a href="/graphs/?user=mazin">Дмитрий Мазин</a></td>
        <td><span class="badge badge-important">-92900</span></td>
        <td>3</td>
        <td>1</td>
        <td>8</td>
    </tr>
        <tr>
        <td>32</td>
        <td><a href="/graphs/?user=goman">Роман Гоман</a></td>
        <td><span class="badge badge-important">-110400</span></td>
        <td>2.875</td>
        <td>1.2686</td>
        <td>8</td>
    </tr>
    </table>
</div>

</body>
</html>
