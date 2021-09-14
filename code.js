var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e5746879-5dbc-4c25-a4ac-e019a03af7b5","333ac948-74eb-4981-bbbd-f9be7d8e5571","4bc48094-57b3-4881-a124-10803f44678b","37f5a015-3aee-4112-b4b9-9263574923db","b25e4c6d-5ab0-4ddd-8d6f-ac027cb67cfe","96d9bab6-321e-4cb7-bd1a-6b503004c902","dcd593d5-b1a3-45f0-b75b-40b88bb9d290"],"propsByKey":{"e5746879-5dbc-4c25-a4ac-e019a03af7b5":{"name":"monster_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png","frameSize":{"x":292,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"2de9sEWYWWzKx26s6d8L64mN3b5hcuSw","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png"},"333ac948-74eb-4981-bbbd-f9be7d8e5571":{"name":"robot_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.OxRwIFUg8dQDf_ZezW61UD3P0Vct5t2/category_robots/robot_11.png","frameSize":{"x":320,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":".OxRwIFUg8dQDf_ZezW61UD3P0Vct5t2","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.OxRwIFUg8dQDf_ZezW61UD3P0Vct5t2/category_robots/robot_11.png"},"4bc48094-57b3-4881-a124-10803f44678b":{"name":"kidportrait_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"37f5a015-3aee-4112-b4b9-9263574923db":{"name":"gameplaywacky_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png","frameSize":{"x":397,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png"},"b25e4c6d-5ab0-4ddd-8d6f-ac027cb67cfe":{"name":"commercial_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wY092gM7V8P69aiBJgZhtKdG6W6mq2K6/category_buildings/commercial_11.png","frameSize":{"x":270,"y":206},"frameCount":1,"looping":true,"frameDelay":2,"version":"wY092gM7V8P69aiBJgZhtKdG6W6mq2K6","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":206},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wY092gM7V8P69aiBJgZhtKdG6W6mq2K6/category_buildings/commercial_11.png"},"96d9bab6-321e-4cb7-bd1a-6b503004c902":{"name":"gameplaywacky_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png","frameSize":{"x":399,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png"},"dcd593d5-b1a3-45f0-b75b-40b88bb9d290":{"name":"gameplaywacky_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boy = createSprite(28, 28, 20, 20);
boy.shapeColor = "darkblue";

var wall1 = createSprite(170,300,120,20);
wall1.shapeColor = "red";

var wall2 = createSprite(100,100,20,120);
wall2.shapeColor = "red";

var wall3 = createSprite(210,124,120,20);
wall3.shapeColor = "red";

var wall4 = createSprite(320,250,20,120);
wall4.shapeColor = "red";

var germ1 = createSprite(297,30,15,15);
germ1.shapeColor = "yellow";
germ1.setAnimation("gameplaywacky_05_1");
germ1.scale = 0.1;

var germ2 = createSprite(36,210,20,20);
germ2.shapeColor = "cyan";
germ2.setAnimation("gameplaywacky_06_1");
germ2.scale = 0.1;

var germ3 = createSprite(260,260,20,20);
germ3.shapeColor = "gold";
germ3.setAnimation("gameplaywacky_13_1");
germ3.scale = 0.1;

var hospital = createSprite(362, 371, 25, 25);
hospital.shapeColor = "pink";
hospital.setAnimation("commercial_11_1");
hospital.scale = 0.2;

wall1.velocityX = 6;
wall2.velocityY = -4;
wall3.velocityX = -6;
wall4.velocityY = 4;

var life = 0;
var wall1,wall2,wall3,wall4;
var boy;
var germ1,germ2,germ3;

function draw() {
  background("orange");
  
  textSize(18);
  stroke("brown");
  text("Lives:" + life, 174, 27);
 
  createEdgeSprites();
  wall1.bounceOff(edges);
  wall2.bounceOff(edges);
  wall3.bounceOff(edges);
  wall4.bounceOff(edges);
  boy.bounceOff(edges);
  
  if (keyDown("RIGHT_ARROW")) {
    boy.x = boy.x + 4;
  }
  if (keyDown("LEFT_ARROW")) {
    boy.x = boy.x-4;
  }
  if (keyDown("UP_ARROW")) {
    boy.y = boy.y-4;
  }
  if (keyDown("DOWN_ARROW")) {
    boy.y = boy.y+4;
  }
 
 if (boy.isTouching(wall1)|| (boy.isTouching(wall2))|| (boy.isTouching(wall3))|| boy.isTouching(wall4)){
    boy.x = 28;
  boy.y = 28;
    boy.velocityX = 0;
    boy.velocityY = 0;
    life = life+1;
 }
 
  if (life==5||boy.isTouching(germ3)) {
    textSize(18);
    fill("green");
    text("Game Over!", 200, 200);
    boy.x = 28;
    boy.y = 28;
    boy.velocityX = 0;
    boy.velocityY = 0;
    wall1.velocityX = 0;
    wall2.velocityY = 0;
    wall3.velocityX = 0;
    wall4.velocityY = 0;
  }
  if (boy.collide(hospital)) {
    textSize(20);
    fill("maroon");
    text("Congratulations You won", 150, 200);
    wall1.velocityX = 0;
    wall2.velocityY = 0;
    wall3.velocityX = 0;
    wall4.velocityY = 0;
    boy.velocityX = 0;
    boy.velocityY = 0;
  }
 
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
