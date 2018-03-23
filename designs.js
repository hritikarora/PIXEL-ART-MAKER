var row,col;

var color=$('#colorPicker').val();// Select color input


$('#submit').click(function makeGrid(e){
               // When size is submitted by the user, call makeGrid()
e.preventDefault();
row=Number($('#inputHeight').val());
col=Number($('#inputWeight').val());  // Select size input
$('#pixelCanvas').empty();
var i,c;
for(i=0;i<row;i++)
	{
		$('#pixelCanvas').append("<tr></tr>");
	}

for(c=0;c<col;c++)
	{
          $('tr').append("<td></td>");
	}
});




$('#reset').click(function(){
   
   $('#pixelCanvas').empty(); 
   $('#colorPicker').val("#000000");
   
});//reset the canvas


$('#pixelCanvas').on('click','td',function(e){
    $(this).css('background-color',color);

});
$('#pixelCanvas').on('dblclick','td',function(){
    $(this).css('background-color','');
     
});
$('#colorPicker').change('color',function(){
    color=$('#colorPicker').val();

});