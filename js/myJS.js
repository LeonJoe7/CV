$(function(){
    $('#pagepiling').pagepiling({
        loopBottom: true,
        loopTop: true,
        navigation: {
            textColor: '#fff',
            bulletsColor: '#000',
            position: 'left',
            tooltips: ['主页','技能','工作','实践','教育','联系']
        }
    });
    //皮肤按键
    var bs = document.getElementById("blueStyle");
    var gs = document.getElementById("greenStyle");
    var rs = document.getElementById("redStyle");
    bs.style.opacity = '1';
    bs.onclick = function(){
        document.getElementById("ChooseStyle").href="css/skinStyle/blueStyle.css";
        bs.style.opacity = '1';
        gs.style.opacity = '0.75';
        rs.style.opacity = '0.75';
    }
    gs.onclick = function(){
        document.getElementById("ChooseStyle").href="css/skinStyle/greenStyle.css";
        bs.style.opacity = '0.75';
        gs.style.opacity = '1';
        rs.style.opacity = '0.75';
    }
    rs.onclick = function(){
        document.getElementById("ChooseStyle").href="css/skinStyle/redStyle.css";
        bs.style.opacity = '0.75';
        gs.style.opacity = '0.75';
        rs.style.opacity = '1';
    }
});