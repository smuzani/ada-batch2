$(document).ready(function(){
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker();
});

function newitem () {
	var name = ...;
	var dueDate = "";
	var text = '<td>1</td><td>' + name + '</td><td>'+ dueDate + '</td><td>RM10</td><td>High</td><td><button type="button"  class="btn btn-pencil" aria-label="Left Align"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button type="button" class="btn btn-trash" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>'
	for (var i = list.length - 1; i >= 0; i--) {
		$().HTML += text;
	}
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

