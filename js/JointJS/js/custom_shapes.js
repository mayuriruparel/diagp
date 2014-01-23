    
    var graph = new joint.dia.Graph;
    var readonly_graph = new joint.dia.Graph;
    var resize_graph = new joint.dia.Graph;
    
    
    var paper = new joint.dia.Paper({
        el: $('#paper-element-styling'),
        width: 800,
        height: 400,
        model: graph
        
    });
    
     var readonly_paper = new joint.dia.Paper({
        el: $('#readonly_paper'),
        width: 600,
        height: 200,
        model: readonly_graph
        
    });
    
    var resize_paper = new joint.dia.Paper({
        el: $('#resize_paper'),
        width: 600,
        height: 200,
        model: resize_graph,
        
        
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
    
    var readonly_rect = new joint.shapes.basic.Rect({
        position: { x: 10, y: 10 },
        size: { width: 200, height: 60 },
        attrs: { readonly_rect: { width: 100, height: 30 } }
    });   
    
    readonly_rect.attr({
        
        rect: { fill: '#cccccc', rx: 5, ry: 5, 'stroke-width': 2, stroke: 'black' },
        text: {
            text: 'Read Only', fill: '#3498DB',
            'font-size': 18, 'font-weight': 'bold', 'font-variant': 'small-caps', 'text-transform': 'capitalize'
        }
    });
    
    var diamond =  new joint.shapes.basic.Diamond({
        position: { x: 100, y: 100 },
        size: { width: 100, height: 100 },
        attrs: { diamond: { width: 100, height: 30 } }
    }); 
    diamond.attr({
        
        rect: { fill: '#cccccc', 'stroke-width': 2, stroke: 'black' },
        text: {
            text: 'Diamond', fill: '#3498DB',
            'font-size': 18, 'font-weight': 'bold', 
            'font-variant': 'small-caps', 
            'text-transform': 'capitalize'
        }
    });
  //diamond.rotate(45);
 
 
    var resize_rect =  new joint.shapes.basic.Rect({
        position: { x: 10, y:10 },
        size: { width: 100, height: 100 },
        attrs: { resize_rect: { width: 100, height: 30 } }
    }); 
    resize_rect.attr({
        
        rect: { fill: '#cccccc', 'stroke-width': 2, stroke: 'black' },
        text: {
            text: 'Resize Me', fill: '#3498DB',
            'font-size': 18, 'font-weight': 'bold', 
            'font-variant': 'small-caps', 
            'text-transform': 'capitalize'
        }
    });
 
 
  paper.model.addCells([rect,diamond]);
   resize_paper.model.addCells([resize_rect]);
   resize_paper.on('cell:pointerdown', function(cellView, evt, x, y) {
    var bbox = cellView.getBBox();
    console.log("---------bbox--"+(bbox));
    var strokeWidth = cellView.model.attr('rect/stroke-width') || 1;
    console.log("---------strokeWidth--"+(strokeWidth));
    console.log("---------x--"+(x));
    console.log("---------y--"+(y));
    isBorderClicked(bbox, x, y, strokeWidth);
});
  readonly_paper.model.addCells([readonly_rect]);
  readonly_paper.$el.css('pointer-events', 'none');
 
  
function isBorderClicked(bbox, x, y, strokeWidth){
     console.log("---- border clicked----");
    console.log("1111111---------bbox--"+(bbox));
    console.log("1111111---------strokeWidth--"+(strokeWidth));
    console.log("11111---------x--"+(x));
    console.log("1111111---------y--"+(y));
}
