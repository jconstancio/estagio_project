$(document).ready(initialise)
function initialise() {
    $('#createPDF').click(
        function(){  
        var config = {              
            'fileName':'CDR'
        }   
        var quotes = document.getElementById('sheetToPrint');
        html2canvas(quotes, 
            {
            onrendered: function(canvas) {                  
                var pdf = new jsPDF('p', 'pt', 'letter');
                for (var i = 0; i <= quotes.clientHeight/980; i++) {
                var srcImg  = canvas;
                var sX      = 0;
                var sY      = 980*i;
                var sWidth  = 900;
                var sHeight = 980;
                var dX      = 0;
                var dY      = 0;
                var dWidth  = 900;
                var dHeight = 980;
                window.onePageCanvas = document.createElement("canvas");
                onePageCanvas.setAttribute('width', 900);
                onePageCanvas.setAttribute('height', 980);
                var ctx = onePageCanvas.getContext('2d');
                ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

                var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
                var width         = onePageCanvas.width;
                var height        = onePageCanvas.clientHeight;
                if (i > 0) {pdf.addPage(612, 791)}

                pdf.setPage(i+1);
                pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));
                }
                pdf.save(config.fileName);
            }
            }
        )    
        }
    )
                
    
}