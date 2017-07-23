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

function newitem (json) {
	var name = json.Name;
	var dueDate = json.DueDate;
	var amount =json.Amount;
	var priority = json.Priority;
	var text = '<td>1</td><td>' + name + '</td><td>'+ dueDate + '</td><td>' +amount+'</td><td>' + priority +'</td><td><button type="button"  class="btn btn-pencil" aria-label="Left Align"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button type="button" class="btn btn-trash" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>'
	return text;
}

