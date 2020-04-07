$(document).ready(function() {
    $("select").attr('disabled', true);
});


function edit_row(no)
{
    $("select").attr("disabled", false);
    $("edit_button" + no).show();
    $("save_button" + no).show();

    var bill=document.getElementById("bill_row"+no);
    var dueDate=document.getElementById("dueDate_row"+no);

    var bill_data=bill.innerHTML;
    var dueDate_data=dueDate.innerHTML;

    bill.innerHTML="<input type='text' id='bill_text"+no+"' value='"+bill_data+"'>";
    dueDate.innerHTML="<input type='text' id='dueDate_text"+no+"' value='"+dueDate_data+"'>";
}

function save_row(no) {
    $("input[type='text']").css({
        border: 0
    });

    $("#edit_button" + no).show();

    $("select").attr('disabled', true);

    var bill_val = $("bill_text" + no).val();
    var dueDate_val = $("#dueDate_text" + no).val();
    var status_val = $("#status_text" + no).val();

    $("#bill_row" + no).html(bill_val);
    $("#dueDate_row" + no).html(dueDate_val);
    $("#status_row" + no).html(status_val);

    $("#edit_button" + no).show();
    $("#save_button" + no).show();


}
function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{

    var new_bill=document.getElementById("new_bill").value;
    var new_dueDate=document.getElementById("new_dueDate").value;

    var table=document.getElementById("billTbl");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="" +
        "<tr id='row"+table_len+"'>" +
        "   <td id='bill_row"+table_len+"'>"+new_bill+"</td>" +
        "   <td id='dueDate_row"+table_len+"'>"+new_dueDate+"</td>" +
        "   <td id='status_row'" +table_len+"'>"+
                "<select class='selectpicker1'>"+
                    "<option>Daily</option>"+
                    "<option>Weekly</option>"+
                    "<option>Monthly</option>"+
                "</select>"+
            "</td>" +
        "   <td><i id='edit_button"+table_len+"' value='Edit' class='fa fa-pencil' onclick='edit_row("+table_len+")'></i> " +
        "       <i id='save_button"+table_len+"' value='Save' class='fa fa-floppy-o' onclick='save_row("+table_len+")'></i> " +
        "       <i id='dalete_button' value='Delete' class='fa fa-trash' onclick='delete_row("+table_len+")'></i>" +
        "   </td>" +
        "</tr>";
    document.getElementById("new_bill").value="";
    document.getElementById("new_dueDate").value="";
    document.getElementById("new_status").value="";
}