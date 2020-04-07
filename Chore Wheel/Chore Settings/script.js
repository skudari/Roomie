$(document).ready(function() {
    $("select").attr('disabled', true);
});


function edit_row(no)
{
    $("select").attr("disabled", false);
    $("edit_button" + no).show();
    $("save_button" + no).show();

    //document.getElementById("edit_button"+no).style.display="none";
    //document.getElementById("save_button"+no).style.display="block";

    var chore=document.getElementById("bill_row"+no);
    var duration=document.getElementById("duration_row"+no);

    var chore_data=chore.innerHTML;
    var duration_data=duration.innerHTML;

    chore.innerHTML="<input type='text' id='chore_text"+no+"' value='"+chore_data+"'>";
    duration.innerHTML="<input type='text' id='duration_text"+no+"' value='"+duration_data+"'>";
}

function save_row(no) {
    $("input[type='text']").css({
        border: 0
    });

    $("#edit_button" + no).show();

    $("select").attr('disabled', true);

    var chore_val = $("chore_text" + no).val();
    var duration_val = $("#duration_text" + no).val();
    var rotation_val = $("#rotation_text" + no).val();

    $("#bill_row" + no).html(chore_val);
    $("#duration_row" + no).html(duration_val);
    $("#rotation_row" + no).html(rotation_val);

    $("#edit_button" + no).show();
    $("#save_button" + no).show();


}
function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    $("select").attr('disabled', true);
    var new_chore=document.getElementById("new_chore").value;
    var new_duration=document.getElementById("new_duration").value;

    var table=document.getElementById("ChoreTbl");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="" +
        "<tr id='row"+table_len+"'>" +
        "   <td id='bill_row"+table_len+"'>"+new_chore+"</td>" +
        "   <td id='duration_row"+table_len+"'>"+new_duration+"</td>" +
        "   <td id='rotation_row'" +table_len+"'>"+
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
    document.getElementById("new_chore").value="";
    document.getElementById("new_duration").value="";
    document.getElementById("new_rotation").value="";
}