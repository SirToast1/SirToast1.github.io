var msg1 = " | My Cool Site! |";
var speed=100;
function ScrollTitle() {
  document.title=msg1;
  msg1=msg1.substring(1,msg1.length)+msg1.charAt(0);
  setTimeout("ScrollTitle()",speed);
}
ScrollTitle();
