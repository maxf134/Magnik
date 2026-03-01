gdjs._1052_1045_1053_1070Code = {};
gdjs._1052_1045_1053_1070Code.localVariables = [];
gdjs._1052_1045_1053_1070Code.idToCallbackMap = new Map();
gdjs._1052_1045_1053_1070Code.GDEmptyCloudBackgroundObjects1= [];
gdjs._1052_1045_1053_1070Code.GDEmptyCloudBackgroundObjects2= [];
gdjs._1052_1045_1053_1070Code.GDNameTextObjects1= [];
gdjs._1052_1045_1053_1070Code.GDNameTextObjects2= [];
gdjs._1052_1045_1053_1070Code.GDStartTextObjects1= [];
gdjs._1052_1045_1053_1070Code.GDStartTextObjects2= [];
gdjs._1052_1045_1053_1070Code.GDExitTextObjects1= [];
gdjs._1052_1045_1053_1070Code.GDExitTextObjects2= [];
gdjs._1052_1045_1053_1070Code.GDNewSpriteObjects1= [];
gdjs._1052_1045_1053_1070Code.GDNewSpriteObjects2= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite2Objects1= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite2Objects2= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite3Objects1= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite3Objects2= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite4Objects1= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite4Objects2= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite5Objects1= [];
gdjs._1052_1045_1053_1070Code.GDNewSprite5Objects2= [];


gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDStartTextObjects1Objects = Hashtable.newFrom({"StartText": gdjs._1052_1045_1053_1070Code.GDStartTextObjects1});
gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDStartTextObjects1Objects = Hashtable.newFrom({"StartText": gdjs._1052_1045_1053_1070Code.GDStartTextObjects1});
gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDStartTextObjects1Objects = Hashtable.newFrom({"StartText": gdjs._1052_1045_1053_1070Code.GDStartTextObjects1});
gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDExitTextObjects1Objects = Hashtable.newFrom({"ExitText": gdjs._1052_1045_1053_1070Code.GDExitTextObjects1});
gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDExitTextObjects1Objects = Hashtable.newFrom({"ExitText": gdjs._1052_1045_1053_1070Code.GDExitTextObjects1});
gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDExitTextObjects1Objects = Hashtable.newFrom({"ExitText": gdjs._1052_1045_1053_1070Code.GDExitTextObjects1});
gdjs._1052_1045_1053_1070Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "f731b15834e3dd5.mp3", true, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs._1052_1045_1053_1070Code.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDStartTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1 Уровень", true);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "1 Уровень");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs._1052_1045_1053_1070Code.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDStartTextObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22761108);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1052_1045_1053_1070Code.GDStartTextObjects1 */
{for(var i = 0, len = gdjs._1052_1045_1053_1070Code.GDStartTextObjects1.length ;i < len;++i) {
    gdjs._1052_1045_1053_1070Code.GDStartTextObjects1[i].getBehavior("ShakeObject_PositionAngle").StopShaking(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs._1052_1045_1053_1070Code.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDStartTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22762028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1052_1045_1053_1070Code.GDStartTextObjects1 */
{for(var i = 0, len = gdjs._1052_1045_1053_1070Code.GDStartTextObjects1.length ;i < len;++i) {
    gdjs._1052_1045_1053_1070Code.GDStartTextObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 0, 0, 10, 0.2, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs._1052_1045_1053_1070Code.GDExitTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDExitTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs._1052_1045_1053_1070Code.GDExitTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDExitTextObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22763988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1052_1045_1053_1070Code.GDExitTextObjects1 */
{for(var i = 0, len = gdjs._1052_1045_1053_1070Code.GDExitTextObjects1.length ;i < len;++i) {
    gdjs._1052_1045_1053_1070Code.GDExitTextObjects1[i].getBehavior("ShakeObject_PositionAngle").StopShaking(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs._1052_1045_1053_1070Code.GDExitTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1052_1045_1053_1070Code.mapOfGDgdjs_9546_95951052_95951045_95951053_95951070Code_9546GDExitTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22763804);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1052_1045_1053_1070Code.GDExitTextObjects1 */
{for(var i = 0, len = gdjs._1052_1045_1053_1070Code.GDExitTextObjects1.length ;i < len;++i) {
    gdjs._1052_1045_1053_1070Code.GDExitTextObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 0, 0, 10, 0.2, true, null);
}
}
}

}


};

gdjs._1052_1045_1053_1070Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1052_1045_1053_1070Code.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNameTextObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNameTextObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDStartTextObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDStartTextObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDExitTextObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDExitTextObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSpriteObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSpriteObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite2Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite2Objects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite3Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite3Objects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite4Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite4Objects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite5Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite5Objects2.length = 0;

gdjs._1052_1045_1053_1070Code.eventsList0(runtimeScene);
gdjs._1052_1045_1053_1070Code.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNameTextObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNameTextObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDStartTextObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDStartTextObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDExitTextObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDExitTextObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSpriteObjects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSpriteObjects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite2Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite2Objects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite3Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite3Objects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite4Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite4Objects2.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite5Objects1.length = 0;
gdjs._1052_1045_1053_1070Code.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['_1052_1045_1053_1070Code'] = gdjs._1052_1045_1053_1070Code;
