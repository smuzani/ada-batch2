$(document).ready(function(){
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker();
});

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

