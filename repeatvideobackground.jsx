var offset = 48;
var yoff = 28;

x= thisComp.layer(index+1).transform.position[0]+offset;
if((index+1)%41 != 0) {
y= thisComp.layer(index+1).transform.position[1];
} else {
y = thisComp.layer(40).transform.position[1] + (( index+1) - 41)/41 * yoff;
}
[x,y]
