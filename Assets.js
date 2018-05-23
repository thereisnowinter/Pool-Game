let sprites = {}
let assestsStillLoading = 0;

function assestsLoadingLoop(callback) {
  // if there is still pics being loaded
  if (assestsStillLoading) {
    requestAnimationFrame (assestsLoadingLoop.bind(this, callback))
  } else {
    callback()
  }
}

function loadAssets (callback) {
  function loadSprites(fileName) {
    assestsStillLoading++
    let spriteImage = new Image()
    spriteImage.src = "./assets/sprites/" + fileName

    spriteImage.onload = function () {
      assestsStillLoading--
    }

    return spriteImage
  }

  sprites.background = loadSprites('spr_background4.png')
  sprites.stick = loadSprites('spr_stick.png')
  sprites.whiteBall = loadSprites('spr_ball2.png')
  // all pics are loaded, excute the callback
  assestsLoadingLoop(callback)
}