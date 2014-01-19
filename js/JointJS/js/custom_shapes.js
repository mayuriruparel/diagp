    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-element-styling'),
        width: 600,
        height: 600,
        model: graph,
       
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
  
    graph.addCell(rect);
