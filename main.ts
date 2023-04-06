namespace SpriteKind {
    export const Poinr1 = SpriteKind.create()
    export const poinr2 = SpriteKind.create()
    export const point3 = SpriteKind.create()
    export const defender = SpriteKind.create()
    export const Tower = SpriteKind.create()
    export const ANGEL = SpriteKind.create()
    export const defender2 = SpriteKind.create()
    export const runner = SpriteKind.create()
    export const guard = SpriteKind.create()
    export const bow = SpriteKind.create()
    export const tyler = SpriteKind.create()
    export const angel2 = SpriteKind.create()
    export const fire1 = SpriteKind.create()
    export const pointerfinger1 = SpriteKind.create()
    export const pointerfinger2 = SpriteKind.create()
    export const pointerfinger3 = SpriteKind.create()
    export const pointerfinger4 = SpriteKind.create()
    export const fire2 = SpriteKind.create()
    export const angel3 = SpriteKind.create()
    export const piece1 = SpriteKind.create()
    export const runner2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.defender, SpriteKind.poinr2, function (sprite, otherSprite) {
    mySprite5.follow(mySprite2, 25)
})
sprites.onOverlap(SpriteKind.fire1, SpriteKind.Tower, function (sprite, otherSprite) {
    hhhddh.follow(kkdkkd, 30)
    animation.runImageAnimation(
    hhhddh,
    assets.animation`jhshjs`,
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.angel3, SpriteKind.fire1, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel3)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.fire1, SpriteKind.runner2, function (sprite, otherSprite) {
    hhhddh.follow(mySprite6, 30)
})
info.onScore(250, function () {
    if (!(boughtDefender2)) {
        game.showLongText("PRESS A ON THE TOWER TO GAIN A NEW DEFENCE", DialogLayout.Bottom)
        score_100 = true
    } else if (boughtDefender2 && !(boughtdefender3)) {
        game.showLongText("PRESS A ON THE TOWER TO GAIN A NEW DEFENCE", DialogLayout.Bottom)
        _250number = true
        for (let index = 0; index < 90000; index++) {
            pause(4000)
            mySprite11 = sprites.create(assets.image`angel 2`, SpriteKind.angel2)
            tiles.placeOnRandomTile(mySprite11, assets.tile`myTile5`)
            animation.runImageAnimation(
            mySprite11,
            assets.animation`also angel 2`,
            200,
            true
            )
            mySprite11.follow(mySprite6, 20)
        }
    } else if (!(boughtdeathsquare) && boughtdefender3) {
        _new = true
        game.showLongText("PRESS B ON THE TOWER TO GAIN THE NEXT DEFENCE", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.defender, SpriteKind.point3, function (sprite, otherSprite) {
    mySprite5.follow(mysprite4, 25)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_new && (mySprite.overlapsWith(mySprite6) && (boughtdefender3 && !(boughtdeathsquare)))) {
        hhhddh = sprites.create(assets.image`ususju`, SpriteKind.fire1)
        kkdkkd = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 5 2 4 5 . . . . . . 
            . . . . . 4 5 2 4 5 . . . . . . 
            . . . . . 4 5 2 4 5 . . . . . . 
            . . . . . 4 5 2 4 5 . . . . . . 
            . . . . . 4 5 2 4 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.runner2)
        hhhddh.follow(kkdkkd, 30)
        boughtdeathsquare = true
        tiles.placeOnRandomTile(hhhddh, assets.tile`myTile4`)
        tiles.placeOnRandomTile(kkdkkd, assets.tile`myTile10`)
        _new = false
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Poinr1, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        mySprite2.follow(mySprite, 0)
    }
})
sprites.onOverlap(SpriteKind.angel3, SpriteKind.defender2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    info.changeScoreBy(25)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.follow(mySprite)
    } else if (mySprite.overlapsWith(mySprite3)) {
        mySprite3.follow(mySprite)
    } else if (mySprite.overlapsWith(mysprite4)) {
        mysprite4.follow(mySprite)
    } else if (mySprite.overlapsWith(mySprite6) && (score_100 && !(boughtDefender2))) {
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . 2 . . . 2 . 2 . 2 . 2 2 . . 
            . . . 2 . . 2 . 4 . 2 . 2 2 . . 
            . . . . 4 . 2 . 5 . 2 2 4 4 . . 
            . . . . . 5 2 . . . 2 . 4 4 . . 
            . . . . . . 2 2 2 2 2 . 5 5 . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.defender2)
        mySprite9 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 4 2 5 4 . . . . . . 
            . . . . . 2 4 2 5 4 . . . . . . 
            . . . . . 2 4 2 5 4 . . . . . . 
            . . . . . 2 4 2 5 4 . . . . . . 
            . . . . . 2 4 2 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.runner)
        animation.runImageAnimation(
        mySprite8,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . 2 . . . 2 . 2 . 2 . 2 2 . . 
            . . . 2 . . 2 . 4 . 2 . 2 2 . . 
            . . . . 4 . 2 . 5 . 2 . 4 4 . . 
            . . . . . 5 2 . . . 2 5 4 4 . . 
            . . . . . . 2 2 2 2 2 . 5 5 . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . . . . . 2 . 2 . 2 . 2 2 . . 
            . . . . . . 2 . 4 . 2 . 2 2 . . 
            . . . . . . 2 . 5 . 2 . 4 4 . . 
            . 2 2 4 4 5 2 . . . 2 5 4 4 . . 
            . . . . . . 2 2 2 2 2 . 5 5 . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . . . . . 2 . 2 . 2 . 2 2 . . 
            . . . . . . 2 . 4 . 2 . 2 2 . . 
            . . . . . . 2 . 5 . 2 . 4 4 . . 
            . . . . . 5 2 . . . 2 5 4 4 . . 
            . . . . 4 . 2 2 2 2 2 . 5 5 . . 
            . . . 2 . . 2 . . . 2 . . . . . 
            . . 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . . . . 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . . . . . 2 . 2 . 2 . 2 2 . . 
            . . . . . . 2 . 4 . 2 . 2 2 . . 
            . . . . . . 2 . 5 . 2 . 4 4 . . 
            . . 2 2 4 5 2 . . . 2 5 4 4 . . 
            . . . . . . 2 2 2 2 2 . 5 5 . . 
            . . . . . . 2 . . . 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        250,
        true
        )
        tiles.placeOnRandomTile(mySprite9, assets.tile`myTile7`)
        tiles.placeOnRandomTile(mySprite8, assets.tile`myTile4`)
        mySprite8.follow(mySprite9, 30)
        score_100 = false
        info.setScore(0)
        boughtDefender2 = true
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite6)
    }
})
sprites.onOverlap(SpriteKind.angel2, SpriteKind.Tower, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel2)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.defender2, SpriteKind.runner, function (sprite, otherSprite) {
    mySprite8.follow(mySprite6, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.runner, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        mySprite9.follow(mySprite)
    } else if (controller.B.isPressed()) {
        mySprite9.follow(mySprite, 0)
    }
})
sprites.onOverlap(SpriteKind.angel3, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel3)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.defender, SpriteKind.Poinr1, function (sprite, otherSprite) {
    mySprite5.follow(mySprite3, 25)
})
sprites.onOverlap(SpriteKind.fire1, SpriteKind.ANGEL, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ANGEL)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.defender, SpriteKind.angel2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel2)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.angel2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel2)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.defender2, SpriteKind.ANGEL, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ANGEL)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.defender, SpriteKind.Tower, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "NO TOUCHING THY TOWER")
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.overlapsWith(mySprite6) && (_250number && (boughtDefender2 && !(boughtdefender3)))) {
        mySprite10 = sprites.create(img`
            ..................
            ........222.......
            ........555.......
            ........444.......
            ........222.......
            ....22555555522...
            .....22..5..22....
            ......2224222.....
            .........4........
            .........2........
            .........2........
            ..................
            ..................
            ..................
            ..................
            ..................
            ..................
            ..................
            `, SpriteKind.bow)
        tiles.placeOnRandomTile(mySprite10, assets.tile`myTile8`)
        info.setScore(0)
        bowisbought = true
        for (let index = 0; index < 900; index++) {
            pause(2500)
            animation.runImageAnimation(
            mySprite10,
            [img`
                ..................
                ........222.......
                ........222.......
                ........222.......
                ....22555555522...
                .....22.242.22....
                ......22.5.22.....
                .........4........
                .........2........
                .........2........
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                `,img`
                ..................
                ........252.......
                ........545.......
                .......52525......
                ....225.242.522...
                .....22.222.22....
                ......22.2.22.....
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                `,img`
                ..................
                ........222.......
                ........222.......
                ........222.......
                ....22555555522...
                .....22.2.2.22....
                ......22...22.....
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                `,img`
                ..................
                ........222.......
                ........222.......
                ........222.......
                ....22555555522...
                .....22.242.22....
                ......22.5.22.....
                .........4........
                .........2........
                .........2........
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                ..................
                `],
            100,
            false
            )
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 4 . . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . . 4 . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . . . . 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite10, 0, 50)
            boughtdefender3 = true
            _250number = false
        }
    } else {
        dud = true
    }
})
sprites.onOverlap(SpriteKind.fire1, SpriteKind.angel2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel2)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.runner2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        kkdkkd.follow(mySprite)
    } else if (controller.B.isPressed()) {
        kkdkkd.follow(mySprite, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bow, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        mySprite10.follow(mySprite)
    } else if (controller.B.isPressed()) {
        mySprite10.follow(mySprite, 0)
    }
})
sprites.onOverlap(SpriteKind.angel3, SpriteKind.defender, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel3)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        mysprite4.follow(mySprite, 0)
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.defender2, SpriteKind.Tower, function (sprite, otherSprite) {
    mySprite8.follow(mySprite9, 30)
})
sprites.onOverlap(SpriteKind.defender, SpriteKind.ANGEL, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ANGEL)
    info.changeScoreBy(250)
})
sprites.onOverlap(SpriteKind.Tower, SpriteKind.ANGEL, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ANGEL)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.defender2, SpriteKind.angel2, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel2)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ANGEL, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ANGEL)
    info.changeScoreBy(25)
})
sprites.onOverlap(SpriteKind.angel3, SpriteKind.Tower, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.angel3)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.poinr2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        mysprite4.follow(mySprite, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.point3, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        mySprite3.follow(mySprite, 0)
    }
})
let mySprite7: Sprite = null
let dud = false
let projectile: Sprite = null
let bowisbought = false
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let _new = false
let mySprite11: Sprite = null
let _250number = false
let score_100 = false
let boughtdeathsquare = false
let boughtdefender3 = false
let boughtDefender2 = false
let kkdkkd: Sprite = null
let hhhddh: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mysprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Poinr1)
mysprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.poinr2)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.point3)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile1`)
tiles.placeOnRandomTile(mySprite3, assets.tile`myTile2`)
tiles.placeOnRandomTile(mysprite4, assets.tile`myTile3`)
mySprite5 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    .......2.......2........
    ........2.222.2.........
    .........2...2..........
    ........2..2..2.........
    ........2..4..2.........
    ........2..5..2.........
    .........2...2..........
    ........2.222.2.........
    .......2.......2........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.defender)
tiles.placeOnRandomTile(mySprite5, assets.tile`myTile3`)
mySprite5.follow(mySprite2, 25)
mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 5 5 5 2 5 5 5 2 . . . . 
    . . . 2 5 5 5 2 5 5 5 2 . . . . 
    . . . 2 5 5 5 2 5 5 5 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . b f b b f b b . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . . b f b f b . . . . . . 
    . . . . . b f b f b . . . . . . 
    . . . . . b f b f b . . . . . . 
    . . . . . b f b f b . . . . . . 
    . . . . b b b b f b b . . . . . 
    . . . b b b f b b b f b . . . . 
    . . b b b b b b b b b b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Tower)
tiles.placeOnRandomTile(mySprite6, assets.tile`myTile4`)
game.showLongText("PRESS A TO PICK UP A BOX AND B TO DROP IT. MOVE THE BOXES TO CHANGE THE PATH OF YOUR DEFENDERS. AND FINALLY PROTECT THE TOWER", DialogLayout.Full)
animation.runImageAnimation(
mySprite5,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . . 2 . 2 2 2 . 2 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . 2 . . 2 . . 2 . . . . . 
    . . . . 2 . . 4 . . 2 . . . . . 
    . . . . 2 . . 5 . . 2 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . 2 . 2 2 2 . 2 . . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . 2 . . 2 . . 2 . . . . . 
    . . 2 2 2 . . 4 . . 2 2 2 . . . 
    . . . . 2 . . 5 . . 2 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
info.setScore(0)
info.setLife(5)
forever(function () {
    mySprite7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . . 1 . . . 
        . . . 1 . . . . . . . 1 . . . . 
        . . . . 1 . 1 1 1 . 1 . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . 1 . . 1 . . 1 . . . . . 
        . . . . 1 . . 1 . . 1 . . . . . 
        . . . . 1 . . 1 . . 1 . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . 1 . 1 1 1 . 1 . . . . . 
        . . . 1 . . . . . . . 1 . . . . 
        . . 1 . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.ANGEL)
    tiles.placeOnRandomTile(mySprite7, assets.tile`myTile5`)
    mySprite7.follow(mySprite6, 15)
    animation.runImageAnimation(
    mySprite7,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . 1 . . 
        . . . . 1 . . . . . . . 1 . . . 
        . . . . . 1 . 1 1 1 . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . 1 . 1 1 1 . 1 . . . . 
        . . . . 1 . . . . . . . 1 . . . 
        . . . 1 . . . . . . . . . 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . 1 1 1 1 . . 1 . . 1 1 1 1 . 
        . . . . . 1 . . 1 . . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    pause(10000)
})
