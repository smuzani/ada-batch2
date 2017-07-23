var url = "http://localhost:8000"

$(document).ready(function(){
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker();
	$(".delete").click(deleteItem);

function deleteItem(){
	alert('button clicked')
	$.ajax({
    url: 'http://localhost:8000/bill/:id',
    type: 'DELETE',
    success: function(){
    	alert('Bill deleted');
    },
    error: function(){
    	alert('Error');
    }
});
}

});

function newitem () {
	var name = "";
	var dueDate = "";
	var text = '<td>1</td><td>' + name + '</td><td>'+ dueDate + '</td><td>RM10</td><td>High</td><td><button type="button"  class="btn btn-pencil" aria-label="Left Align"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button type="button" class="btn btn-trash" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>'
	for (var i = list.length - 1; i >= 0; i--) {
		$().HTML += text;
	}
}



