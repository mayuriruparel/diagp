    var ClickableView = joint.dia.ElementView.extend({
    pointerdown: function () {
        this._click = true;
        joint.dia.ElementView.prototype.pointerdown.apply(this, arguments);
    },
    pointermove: function () {
        this._click = false;
        joint.dia.ElementView.prototype.pointermove.apply(this, arguments);
    },
    pointerup: function (evt, x, y) {
        if (this._click) {
            this.notify('cell:click', evt, x, y);
        } else {
            joint.dia.ElementView.prototype.pointerup.apply(this, arguments);
        }
    },
    pointerdblclick: function(){
       this._click = true;
        joint.dia.ElementView.prototype.pointerdblclick.apply(this, arguments); 
    }
    
});
    
    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-element-styling'),
        width: 600,
        height: 200,
        model: graph,
        elementView: ClickableView
    });

    var rect = new joint.shapes.basic.Rect({
        position: { x: 10, y: 10 },
        size: { width: 200, height: 60 },
        attrs: { rect: { width: 100, height: 30 } }
    });   
    
    rect.attr({
        
        rect: { fill: '#cccccc', rx: 5, ry: 5, 'stroke-width': 2, stroke: 'black' },
        text: {
            text: 'my label', fill: '#3498DB',
            'font-size': 18, 'font-weight': 'bold', 'font-variant': 'small-caps', 'text-transform': 'capitalize'
        }
    });
  
  //rect.resize(400,400);
  paper.model.addCells([rect]);


paper.on('cell:click', function () {
    $('#message').text('click!');
});
paper.on('cell:pointerup', function () {
    $('#message').text('pointerup!');
});
paper.on('cell:pointerdblclick', function () {
    $('#message').text('dbl click!');
});
paper.on('blank:pointerup', function () {
    $('#message').text('blank!');
});
    graph.addCell(rect);
