len = text.sourceText.length;
speed = time*effect("Speed")("Slider") - effect("Start At")("Slider")*effect("Speed")("Slider");
F = Math.round(time % 1);

if(F == 1 | (speed<len & speed>0) ){Fl = "|";}else{Fl=" ";}

substr(0,speed) + Fl
