var url = "http://localhost:8000"

$(document).ready(function(){
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker();
	var url = "http://localhost:8080";
	var endpoint = url + "/bill";

$(document).ready(function(){
  $.getJSON(endpoint,
function (json,status){
  for (i=0; i<json.length; i++){ 
    document.getElementById ("myTable").innerHTML += newitem(json[i]);
  	$("#delete").click(deleteItem)
       
  }
});
});	

function deleteItem(){
	alert('Confirm delete bill?')
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
	var text = '<td>1</td><td>' + name + '</td><td>'+ dueDate + '</td><td>' +amount+'</td><td>' + priority +'</td><td><a href="editPage.html"><button type="button"  class="btn btn-pencil" aria-label="Left Align"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></a><button type="button" class="btn btn-trash delete" id = "delete" aria-label="Left Align" ><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>'
	return text;
}

