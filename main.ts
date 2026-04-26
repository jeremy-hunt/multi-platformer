browserEvents.W.onEvent(browserEvents.KeyEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -150
})
tiles.setCurrentTilemap(tilemap`level1`)
let statusbar_1 = statusbars.create(20, 0, StatusBarKind.Health)
let statusbar_2 = statusbars.create(20, 4, StatusBarKind.Health)
let statusbar_3 = statusbars.create(20, 4, StatusBarKind.Health)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . f f f 2 2 2 2 2 2 f f f . . 
    . . f 2 f 2 2 2 2 2 2 f 2 f . . 
    . . f f f 2 f f f f 2 f f f . . 
    . . 2 2 2 f f f f f f 2 2 2 . . 
    . . 2 2 f f f f f f f f 2 2 . . 
    . . 2 f f f f f f f f f f 2 . . 
    . 8 8 8 f f f f f f f f 8 8 8 . 
    . 8 8 8 8 f f f f f f 8 8 8 8 . 
    . 8 8 8 8 8 f f f f 8 8 8 8 8 . 
    . 8 8 8 8 8 8 f f 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . f f f 9 9 9 9 9 9 f f f . . 
    . . f 9 f 9 9 9 9 9 9 f 9 f . . 
    . . f f f 9 f f f f 9 f f f . . 
    . . 9 9 9 f f f f f f 9 9 9 . . 
    . . 9 9 f f f f f f f f 9 9 . . 
    . . 9 f f f f f f f f f f 9 . . 
    . 8 8 8 f f f f f f f f 8 8 8 . 
    . 8 8 8 8 f f f f f f 8 8 8 8 . 
    . 8 8 8 8 8 f f f f 8 8 8 8 8 . 
    . 8 8 8 8 8 8 f f 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . f f f 5 5 5 5 5 5 f f f . . 
    . . f 5 f 5 5 5 5 5 5 f 5 f . . 
    . . f f f 5 f f f f 5 f f f . . 
    . . 5 5 5 f f f f f 5 5 5 5 . . 
    . . 5 5 f f f f f f f f 5 5 . . 
    . . 5 f f f f f f f f f f 5 . . 
    . 8 8 8 f f f f f f f f 8 8 8 . 
    . 8 8 8 8 f f f f f f 8 8 8 8 . 
    . 8 8 8 8 8 f f f f 8 8 8 8 8 . 
    . 8 8 8 8 8 8 f f 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    . . 8 8 . . . 8 8 . . . 8 8 . . 
    `, SpriteKind.Player))
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), sprites.dungeon.stairLadder)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), sprites.dungeon.stairLadder)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), sprites.dungeon.stairLadder)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 500
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 500
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).ay = 500
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 0)
statusbar_1.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 200)
statusbar_2.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 200)
statusbar_3.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 200)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
