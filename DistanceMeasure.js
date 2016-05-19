/* Measures the distans between click one and two on webpage*/
var position = { firstx: 0, firsty: 0, secondx: 0, secondy: 0 }
var first = true;

function GetClickPosition(e) {
        if (position.firstx == 0 && position.firsty == 0) {
            position.firstx = e.pageX;
            position.firsty = e.pageY;
        } else {
            position.secondx = e.pageX;
            position.secondy = e.pageY;
        }
        //document.addEventListener('mouseover', ShowArea, false);
    if (position.firstx != 0 && position.firsty != 0 && position.secondy != 0) {
        var width = position.firstx - position.secondx;
        var height = position.firsty - position.secondy;
        DisplayResultBox('<span>Width:' + Math.abs(width) + 'px</span><br><span>Height:' + Math.abs(height) + ' px</span><br><span id="butn">Close</span>');
        document.getElementById('butn').addEventListener('click', Exit, false);
        position = { firstx: 0, firsty: 0, secondx: 0, secondy: 0 }
    }
}
var ShowArea = function (e) {
    if (first) {
        setInterval(ShowArea, 1000);
    }
    if (first)
    {
        var div = document.createElement('div');
        div.id = 'measuredarea';
        div.style.position = 'fixed';
        div.style.left = position.firstx;
        div.style.top = position.firsty;
        div.style.backgroundColor = 'blue';
        div.style.border = '1px solid #000';
        div.style.right = e.pageX;
        div.style.bottom = e.pageY;
        first = false;
    } else {
        var div = document.getElementById('measuredarea');
        div.style.right = e.pageX;
        div.style.bottom = e.pageY;
    }

    
}

var DisplayResultBox = function (message) {
    var div = document.createElement('div');
    div.id = 'measure';
    div.style.position = 'fixed';
    div.style.right = '0';
    div.style.top = '0';
    div.style.textAlign = 'center';
    div.style.lineHeight = '150%';
    div.style.width = '200px';
    div.style.height = '100px';
    div.style.border = '1px solid #000';
    div.style.backgroundColor = '#ffffff';
    div.style.color = '#000';
    document.body.appendChild(div);
    div.innerHTML = message;
    var span = document.getElementById('butn');
    span.style.display = 'inline-block';
    span.style.border = '1px solid red';
    span.style.borderRadius = '10px';
    span.style.color = 'red';
}
var Exit = function () {
    var div = document.getElementById('measure');
    div.style.display = 'none';
    document.removeEventListener('click', GetClickPosition, false);
}

var pos = document.addEventListener('click', GetClickPosition, false);