gdjs._1050_1086_1085_1077_1094Code = {};
gdjs._1050_1086_1085_1077_1094Code.localVariables = [];
gdjs._1050_1086_1085_1077_1094Code.idToCallbackMap = new Map();
gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects1= [];
gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects2= [];
gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1= [];
gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects2= [];
gdjs._1050_1086_1085_1077_1094Code.GDNewSpriteObjects1= [];
gdjs._1050_1086_1085_1077_1094Code.GDNewSpriteObjects2= [];


gdjs._1050_1086_1085_1077_1094Code.mapOfGDgdjs_9546_95951050_95951086_95951085_95951077_95951094Code_9546GDNewSprite12Objects1Objects = Hashtable.newFrom({"NewSprite12": gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1});
gdjs._1050_1086_1085_1077_1094Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._1050_1086_1085_1077_1094Code.mapOfGDgdjs_9546_95951050_95951086_95951085_95951077_95951094Code_9546GDNewSprite12Objects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + gdjs.randomInRange(-(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0)) / 2, gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2, "");
}
{for(var i = 0, len = gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].activateBehavior("DraggablePhysics", false);
}
}
{for(var i = 0, len = gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].pauseAnimation();
}
}
{for(var i = 0, len = gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].setAnimation(gdjs.randomInRange(0, 6));
}
}
{for(var i = 0, len = gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].setZOrder(0);
}
}
{for(var i = 0, len = gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].getBehavior("Physics2").setFixedRotation(false);
}
}
{for(var i = 0, len = gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}
{for(var i = 0, len = gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].getBehavior("Physics2").applyPolarImpulse(gdjs.randomInRange(235, 315), 25, (gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].getCenterXInScene()), (gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1[i].getCenterYInScene()));
}
}
}

}


};gdjs._1050_1086_1085_1077_1094Code.mapOfGDgdjs_9546_95951050_95951086_95951085_95951077_95951094Code_9546GDTheEndObjects1Objects = Hashtable.newFrom({"TheEnd": gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects1});
gdjs._1050_1086_1085_1077_1094Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Tom Gregory - Footprints.mp3", true, 60, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "SpawnVse", 0.2, null);
if (isConditionTrue_0) {

{ //Subevents
gdjs._1050_1086_1085_1077_1094Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TheEnd"), gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1050_1086_1085_1077_1094Code.mapOfGDgdjs_9546_95951050_95951086_95951085_95951077_95951094Code_9546GDTheEndObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs._1050_1086_1085_1077_1094Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects1.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects2.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects2.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSpriteObjects1.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSpriteObjects2.length = 0;

gdjs._1050_1086_1085_1077_1094Code.eventsList1(runtimeScene);
gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects1.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDTheEndObjects2.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects1.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSprite12Objects2.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSpriteObjects1.length = 0;
gdjs._1050_1086_1085_1077_1094Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['_1050_1086_1085_1077_1094Code'] = gdjs._1050_1086_1085_1077_1094Code;
