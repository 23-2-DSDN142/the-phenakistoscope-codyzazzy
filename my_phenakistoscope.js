const SLICE_COUNT = 13;  // Set the slice count to 10

// Function to initialize pScope
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK); // Set output mode to animated disk
  pScope.scale_for_screen(true); // Auto-scale to fit the screen
  pScope.draw_layer_boundaries(false); // Display layer boundaries
  pScope.set_direction(CW); // Set direction to counter-clockwise
  pScope.set_slice_count(SLICE_COUNT); // Set the slice count
  pScope.load_image_sequence("frame", "png", 14); // Load a sequence of images
  pScope.load_image("earth", "png"); // Load a sequence of images
  pScope.load_image("cloud", "png"); // Load a sequence of images
}
//animation wave
//animation.wave+somhting();
// Function to set up layers
function setup_layers(pScope){
  new PLayer(null, 0,10,80);  // Create a full-circle background layer, ignoring boundaries
 
  // Square layer
  var layer1 = new PLayer(sky);
  layer1.mode(RING); // Set mode to ring
  layer1.set_boundary(0, 400); // Set boundary  

  // Square layer
  var layer2 = new PLayer(sky2);
  layer2.mode(RING); // Set mode to ring
  layer2.set_boundary(400, 600); // Set boundary
  
  var layer3 = new PLayer(sky3);
  layer3.mode(RING); // Set mode to ring
  layer3.set_boundary(600, 800); // Set boundary    
 
  // Star layer
  var layer4 = new PLayer(stars); 
  layer4.mode(RING);  // Set mode to ring
  layer4.set_boundary(0, 800);  // Set boundary

  // Square layer
  var layer5 = new PLayer(animation);
  layer5.mode(RING); // Set mode to ring
  layer5.set_boundary(0, 400); // Set boundary  

  var layer6 = new PLayer(earth);
  layer6.mode(RING); // Set mode to ring
  layer6.set_boundary(0, 400); // Set boundary  

  // Text layer
  var layer7 = new PLayer(texts);
  layer7.mode(SWIRL(1.5)); // Set mode to swirl, parameter is 2
  layer7.set_boundary(200, 1000); // Set boundary

  // Square layer
  var layer8 = new PLayer(cloud);
  layer8.mode(RING);
  layer8.set_boundary( 100, 1050 );

}

// Function to draw stars
function drawStar(x, y, size, alpha) {
  fill(255, 255, 255, alpha); // Set fill color and opacity
  noStroke(); // Remove stroke
  ellipse(x, y, size); // Draw ellipse (circle in this case)
}

// Function to draw the star layer
function stars(x, y, animation, pScope) {
  // Draw multiple stars at specified coordinates
  drawStar(10, -900, 7, 255);
  drawStar(13, -850, 5, 255);
  drawStar(13, -920, 3, 300);
  drawStar(64, -900, 5, 320);
  drawStar(128, -830, 6, 300);
  drawStar(-20, -830, 6, 300);
  drawStar(-64, -800, 7, 350);
  drawStar(-128, -850, 8, 400);
}

// Function to draw the text layer
function texts(x, y, animation, pScope){
  scale(animation.frame*2);  // Scale the drawing area based on frame number
  
  // Calculate opacity dynamically
  let alpha = map(animation.frame*100, 0, 50, 100, 150); 

  fill(255, 255, 255, alpha);  // Set text color and opacity
  textSize(16);  // Set font size
  
  // Original text
  text("fill(66, 135, 245)", x-100, y+50);  
  text("print('Hello, World!')", x, y);  
  text("console.log(alpha);", x+100, y-50);  
  text("bugs", x+130, y-30);  
  
  //console.log("alpha: ", alpha); // Output opacity for debugging
}

function animation(x, y, animation, pScope){
  scale(0.6); // Scale the drawing area
  pScope.draw_image_from_sequence("frame", x, 1400-animation.wave()*60, animation.frame); // Draw image sequence
}

// Function to draw the square layer
function squares(x, y, animation, pScope){
  // Set background slice angle
  let angleOffset = (360 / SLICE_COUNT) / 2;
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  
  fill(66, 135, 245); // Set background color
  arc(x,y,1200,1200,backgroundArcStart,backgroundArcEnd); // Draw background slice

  fill(255); // Set square color
  rect(20,400-animation.wave()*40,40,40); // Draw square
  
}



function earth(x, y, animation, pScope){
// Set background slice angle
scale(0.27);
pScope.draw_image("earth",x,y);

}

function sky(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2;
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  
  fill(3,33,104); // Set background color
  arc(x,y,1400,1400,backgroundArcStart,backgroundArcEnd); // Draw background slice
  }

function sky2(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2;
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  
  fill(4,44,128); // Set background color
  arc(x,y,1500,1500,backgroundArcStart,backgroundArcEnd); // Draw background slice
  }

  function sky3(x, y, animation, pScope){
    let angleOffset = (360 / SLICE_COUNT) / 2;
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
  
    
    fill(0,90,220); // Set background color
    arc(x,y,1100,1100,backgroundArcStart,backgroundArcEnd); // Draw background slice
    }

function cloud(x,y,animation,pScope){
  scale(0.1);
  //pScope.draw_image("cloud",animation.wave(1)*200,-1800-animation.wave(1)*200);
  pScope.draw_image("cloud", x, 4000-animation.wave()*500, animation.frame); 
}