/**
 * Created by spr47 on 20.11.15.
 */
var Elements = [];
var CANVAS_HEIGHT = 500;
var CANVAS_WIDTH = 700;

function createRectangle() {
    var color = document.getElementById("color").value;
    var h = +document.getElementById("height").value || 100;
    var w = +document.getElementById("width").value || 100;
    var l = +document.getElementById("left").value || 250;
    var t = +document.getElementById("top").value || 100;
    var rect = new fabric.Rect({
        borderColor: 'red',
        left: l,
        top: t,
        fill: color,
        width: w,
        height: h,
        stroke: 'gray',
        strokeWidth: 2,
        hasControls: false
    });
    Elements.push(rect);
    shape.add(rect);
}

function createCircle() {
    var color1 = document.getElementById("color1").value;
    var radius = +document.getElementById("radius").value || 60;
    var l = +document.getElementById("left").value || 250;
    var t = +document.getElementById("top").value || 100;

    var circle = new fabric.Circle({
        borderColor: 'red',
        left: l,
        top: t,
        radius: radius,
        fill: color1,
        stroke: 'gray',
        strokeWidth: 2,
        hasControls: false,
        perPixelTargetFind: true
    });
    Elements.push(circle);
    shape.add(circle);
}

function createTriangle() {
    var color0 = document.getElementById("color0").value;
    var h1 = +document.getElementById("height1").value || 100;
    var w1 = +document.getElementById("width1").value || 100;
    var l = +document.getElementById("left").value || 250;
    var t = +document.getElementById("top").value || 100;
    var triangle = new fabric.Triangle({
        borderColor: 'red',
        left: l,
        top: t,
        width: w1,
        height: h1,
        fill: color0,
        stroke: 'gray',
        strokeWidth: 2,
        hasControls: false,
        perPixelTargetFind: true
    });
    Elements.push(triangle);
    shape.add(triangle);
}


function grav(obj) {
    if(obj.checked){
        for(var key in Elements) {
            Elements[key].animate({
                    'top': CANVAS_HEIGHT-Elements[key].height

                },
                {
                    onChange: shape.renderAll.bind(shape),
                    duration: 2000,
                    easing: fabric.util.ease.easeOutBounce
                }
            )
        }
    }

}
function removeShape() {
    shape.getActiveObject().remove();

}

function removeShapes() {
        shape.clear().renderAll();

}

var heading = document.querySelector('h3');

setInterval(function() {
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +
        ',' +
        (Math.floor(Math.random() * 256)) +
        ',' +
        (Math.floor(Math.random() * 256)) + ')';

    heading.style.color = hue;
}, 1000);

var shape = this.__shape =  new fabric.Canvas('shape');
shape.backgroundColor = 'white';
shape.selection = false;
shape.hoverCursor = 'pointer';

shape.on('mouse:over', function(e) {
    e.target.setStroke('red');
    e.target.setOpacity(0.8);
    e.target.setStrokeDashArray ([5, 5]);
    shape.renderAll();
});

shape.on('mouse:out', function(e) {
    e.target.setStroke('grey');
    e.target.setOpacity(1);
    e.target.setStrokeDashArray ([5, 0]);
    shape.renderAll();
});

shape.on('mouse:down', function(options) {
    //alert(shape.getActiveObject().left);
    document.getElementById("left").value = options.e.clientX;
    document.getElementById("top").value = options.e.clientY
});
var a = 0;
function bord(obj) {
    if (obj.checked) {
        a = 1;
        alert("Работает правильно если перемещать фигуру за центр");
    }
    else{
        a = 0;
    }
}


shape.on('mouse:move', function(options) {

    if (options.e.clientX > 710 - shape.getActiveObject().width/2 && a == 1) {
        shape.getActiveObject().lockMovementX = true;
    }
    else if (options.e.clientX < 10 + shape.getActiveObject().width/2 && a == 1) {
        shape.getActiveObject().lockMovementX = true;
    }
    else if (options.e.clientX > 10 + shape.getActiveObject().width/2 && a == 1) {
        shape.getActiveObject().lockMovementX = false;
    }
    if (options.e.clientY > 510 - shape.getActiveObject().height/2 && a == 1) {
        shape.getActiveObject().lockMovementY = true;
    }
    else if (options.e.clientY < 10 + shape.getActiveObject().height/2 && a == 1) {
        shape.getActiveObject().lockMovementY = true;
    }
    else if (options.e.clientY > 10 + shape.getActiveObject().height/2 && a == 1) {
        shape.getActiveObject().lockMovementY = false;
    }
    else if (a == 0) {
        shape.getActiveObject().lockMovementY = false;
        shape.getActiveObject().lockMovementX = false;

    }
});