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
    var radius = +document.getElementById("radius").value;
    var l = +document.getElementById("left").value || 250;
    var t = +document.getElementById("top").value || 100;
    if(typeof radius == "number") {
        var rad =  Math.abs(radius)|| 100;
    }
    var circle = new fabric.Circle({
        borderColor: 'red',
        left: l,
        top: t,
        radius: rad,
        fill: color1,
        stroke: 'gray',
        strokeWidth: 2,
        hasControls: false
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
        hasControls: false
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
                    onChange: shape.renderAll.bind(shape)
                }
            )
        }
    }

}
function removeShape() {
    shape.remove(shape.getActiveObject());
}