var animate;
var original = null;

function moveRight(imgObj, amountToMoveTotal, amountToMovePerStep, timeToWaitBeforeNextIncrement)
{
    //Copy original image location
    if (original === null){
        original = parseInt(imgObj.style.left);
    }

    //Check if the image has moved the distance requested
    //If the image has not moved requested distance continue moving.
    if (parseInt(imgObj.style.left) < amountToMoveTotal) {
        imgObj.style.left = (parseInt(imgObj.style.left) + amountToMovePerStep) + 'px';

        animate = setTimeout(function(){moveRight(imgObj, amountToMoveTotal, amountToMovePerStep, timeToWaitBeforeNextIncrement);},timeToWaitBeforeNextIncrement);
    }else {
        imgObj.style.left = original;
        original = null;        
        clearTimeout(animate);
    }
}
function fadeIn(imgObj, amountToFadeTotal, amountToFadePerStep, timeToWaitBeforeNextIncrement)
{
    //Copy original opacity
    if (original === null){
        original = parseFloat(imgObj.style.opacity);
    }

    //Check if the image has faded the amount requested
    //If the image has not faded requested amount continue fading.
    if (parseFloat(imgObj.style.opacity) < amountToFadeTotal) {
        imgObj.style.opacity = (parseFloat(imgObj.style.opacity) + amountToFadePerStep);

        animate = setTimeout(function(){fadeIn(imgObj, amountToFadeTotal, amountToFadePerStep, timeToWaitBeforeNextIncrement);},timeToWaitBeforeNextIncrement);
    }else {
        imgObj.style.opacity = original;
        original = null;
        clearTimeout(animate);
    }
}