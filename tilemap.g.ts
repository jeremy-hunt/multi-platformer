// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007070707070707070707070707010205070707070707070707070707070702050707070707070707070707010701020507070707070707070707010707070205070707070707070707070707070102050707070707070707070107070707020507070707070707070707070107010205070707070707070707070707070702050707070707070707070707070701020507070707070707070101070707070205070707070101070707070707070102050707070707070707070707070707020507070707070701010707070707010205070701070707070707010707070701050403010107070707070707070707070101010101010601060106060106010606`, img`
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . 2 . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . . 2 . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . 2 2 . . . . . . 
. . . . 2 2 . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . 2 . . 
. . 2 . . . . . . 2 . . . . 2 . 
. 2 2 2 . . . . . . . . . . . 2 
2 2 2 2 2 . 2 . 2 . . 2 . 2 . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.rock2,sprites.castle.rock1,sprites.dungeon.stairLadder,myTiles.tile1,sprites.dungeon.hazardSpike,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
