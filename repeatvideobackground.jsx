var offset = 48;
var yoff = 28;
var nullanum = 41;
var baselayernum = 40;

x= thisComp.layer(index+1).transform.position[0]+offset;
if((index+1)%nullanum != 0) {
y= thisComp.layer(index+1).transform.position[1];
} else {
y = thisComp.layer(baselayernum).transform.position[1] + (( index+1) - nullanum)/nullanum * yoff;
}
[x,y]
