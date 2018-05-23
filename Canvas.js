function Canvas2D() {
  this._canvas = document.getElementById('screen')
  this._canvasContext = this._canvas.getContext('2d')
}

Canvas2D.prototype.clear = function() {
  // clearRect() receive four arguments, x, y, width, height
  this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height)
}

Canvas2D.prototype.drawImage = function(image, position, origin, rotation = 0) {
  // if position does not exsit, position will be x: 0, y: 0
  if (!position) {
    position = new Vector2 () 
  }

  if (!origin) {
    origin = new Vector2 ()
  }
// The CanvasRenderingContext2D.save() method of the Canvas 2D API 
// saves the entire state of the canvas by pushing the current state onto a stack.
  this._canvasContext.save()
// The CanvasRenderingContext2D.translate() method of the Canvas 2D API
// adds a translation transformation by moving the canvas and its origin x horizontally and y vertically on the grid.
  this._canvasContext.translate (position.x, position.y)
  this._canvasContext.rotate (rotation)
  // The drawImage() method draws an image, canvas, or video onto the canvas
  this._canvasContext.drawImage (image, -origin.x, -origin.y)
  this._canvasContext.restore ()
}

let Canvas = new Canvas2D()

