$(document).ready(function() {
    //Laoad dữ liệu:
    //--> gọi api lấy dữ liệu

    //Thực hiện gán các sự kiện:
    //Nhãn thêm mới:
    $("#btnAdd").click(function() {
        //Hiển thị form thêm mới:
        $("#dlgDialog").show();
        //Focus vào ô nhập liệu đầu tiên:
        $("#txtEmployeeCode").focus();
    })
    //Ẩn form:
    $(".m-dialog-close").click(function() {
        //Ẩn form thêm mới:
        $("#dlgDialog").hide();
    })
    
    //Nhấn đúp chuột khi chọn dòng dữ liệu hiển thị
    $(".m-table tr").dblclick(function() {
        $("#dlgDialog").show();
    })

    //Validate dữ liệu khi nhấn lưu:
    $("#btnSave").click(function(){
        // debugger
        //1. validate dữ liệu:
        let employeeCode = $("#txtEmployeeCode").val();
        let fullname = $("#txtFullName").val();
        let dob = $("#txtDateOfBirth").val();
        let email = $("#txtEmail").val();
        let salary = $("#txtSalary").val();
        if(employeeCode == null || employeeCode == ""){
            alert("Mã nhân viên không được phép để trống");
        }
        console.log(dob);
        if(dob){
            dob = new Date(dob);
        }
        if(dob > new Date()){
            alert("Ngày sinh không được phép lớn hơn ngày hiện tại");
        }
    })
    //Hiển thị lỗi validate khi khong nhập vào trường bắt buộc
    $("#txtEmployeeCode").blur(function(){
        let employeeCode = $("#txtEmployeeCode").val();
        if(employeeCode == null || employeeCode === ""){
            // alert("Mã nhân viên không được để trống");
            //set style cho ô nhập liệu có border màu đỏ:
            $("#txtEmployeeCode").addClass("m-input-error");
            // set thong tin lỗi tương ứng khi người dùng hover vào ô nhập liệu
            $("#txtEmployeeCode").attr("title","Mã nhân viên không được để trống");
        }else{
            $("#txtEmployeeCode").removeClass("m-input-error");
            $("#txtEmployeeCode").removeAttr("title");
        }
    })

    $("#txtFullName").blur(function(){
        let employeeCode = $("#txtFullName").val();
        if(employeeCode == null || employeeCode === ""){
            // alert("Mã nhân viên không được để trống");
            //set style cho ô nhập liệu có border màu đỏ:
            $("#txtFullName").addClass("m-input-error");
            // set thong tin lỗi tương ứng khi người dùng hover vào ô nhập liệu
            $("#txtFullName").attr("title","Họ và tên không được để trống");
        }else{
            $("#txtFullName").removeClass("m-input-error");
            $("#txtFullName").removeAttr("title");
        }
    })

    $("#txtIdcard").blur(function(){
        let employeeCode = $("#txtIdcard").val();
        if(employeeCode == null || employeeCode === ""){
            // alert("Mã nhân viên không được để trống");
            //set style cho ô nhập liệu có border màu đỏ:
            $("#txtIdcard").addClass("m-input-error");
            // set thong tin lỗi tương ứng khi người dùng hover vào ô nhập liệu
            $("#txtIdcard").attr("title","Số CMTND/ Căn cước không được để trống");
        }else{
            $("#txtIdcard").removeClass("m-input-error");
            $("#txtIdcard").removeAttr("title");
        }
    })

    $("#txtPhoneNumber").blur(function(){
        let employeeCode = $("#txtPhoneNumber").val();
        if(employeeCode == null || employeeCode === ""){
            // alert("Mã nhân viên không được để trống");
            //set style cho ô nhập liệu có border màu đỏ:
            $("#txtPhoneNumber").addClass("m-input-error");
            // set thong tin lỗi tương ứng khi người dùng hover vào ô nhập liệu
            $("#txtPhoneNumber").attr("title","Số điện thoại không được để trống");
        }else{
            $("#txtPhoneNumber").removeClass("m-input-error");
            $("#txtPhoneNumber").removeAttr("title");
        }
    })

    $("#txtEmail").blur(function(){
        let employeeCode = $("#txtEmail").val();
        if(employeeCode == null || employeeCode === ""){
            // alert("Mã nhân viên không được để trống");
            //set style cho ô nhập liệu có border màu đỏ:
            $("#txtEmail").addClass("m-input-error");
            // set thong tin lỗi tương ứng khi người dùng hover vào ô nhập liệu
            $("#txtEmail").attr("title","Email không được để trống");
        }else{
            $("#txtEmail").removeClass("m-input-error");
            $("#txtEmail").removeAttr("title");
        }
    })
})
