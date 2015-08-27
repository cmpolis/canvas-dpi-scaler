//
//
// Based on: http://www.html5rocks.com/en/tutorials/canvas/hidpi/

//
module.exports = function(canvas, context, customWidth, customHeight) {
  var width = customWidth ||
              canvas.width || // attr, eg: <canvas width='400'>
              canvas.clientWidth; // keep existing width
  var height = customHeight ||
               canvas.height ||
               canvas.clientHeight;
  var deviceRatio = window.devicePixelRatio || 1;
  var bsRatio = context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio || 1;
  var ratio = deviceRatio / bsRatio;

  // Adjust canvas if ratio =/= 1
  if (deviceRatio !== bsRatio) {
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    context.scale(ratio, ratio);
  }
  return ratio;
};