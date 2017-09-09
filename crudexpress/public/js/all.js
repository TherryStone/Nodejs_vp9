function addUser(){

    window.location.href = '/users/add';
}
function cancelAdd(){

    window.location.href = '/users';
}
function confirmDelete(){
  var result = confirm("Are you sure delete");
  if(result){
    window.location.href = '/users/delete_user'
  }else{
      return false;
  }

}
// function saveUser(){
//   window.location.href = '/users.save';
// }
// $(document).ready(function(){
//   console.log('this');
//   $("#username_error_messeage").hide();
//   $("#password_error_messeage").hide();
//   $("#name_error_messeage").hide();
//   $("#address_error_messeage").hide();
//   $("#email_error_messeage").hide();
//   $("#phone_error_messeage").hide();
//
//   var error_username =  false;
//   var error_password = false;
//   var error_name = false;
//   var error_address = false;
//   var error_email = false;
//   var error_phone = false;
//
//   $("#username").focusout(function(){
//     check_username();
//   });
//   $("#password").focusout(function(){
//     check_password();
//   });
//   $("#name").focusout(function(){
//     check_name();
//   });
//
//   $("#address").focusout(function(){
//     check_address();
//   });
//
//   $("#email").focusout(function(){
//     check_email();
//   });
//
//   $("#phone").focusout(function(){
//     check_phone();
//   });
//     });
//
//   function check_username(){
//
//     console.log("username ");
//     var username_length = $("#username").val();
//     if(username_length.length < 5 || username_length.length > 20) {
// 			$('#username_error_messeage').text("Should be between 5-20 characters");
// 			$('#username_error_messeage').show();
// 			//error_username = true;
// 		} else {
// 			$("#username_error_messeage").hide();
// 		}
//   }
//
//   function check_password(){
//     var password_length = $("#password").val().length;
//     if(password_length < 8) {
// 			$("#password_error_messeage").html("At least 8 characters");
// 			$("#password_error_messeage").show();
// 			error_password = true;
// 		} else {
// 			$("#password_error_messeage").hide();
// 		}
//   }
//   function check_name(){
//     var name_length = $("#name").val().length;
//     if(name_length < 0) {
// 			$("#name_error_messeage").html("please fill filed");
// 			$("#name_error_messeage").show();
// 			error_name= true;
// 		} else {
// 			$("#name_error_messeage").hide();
//
// 		}
//   }
//
//   function check_address(){
//     var address_length = $("#address").val().length;
//     if(address_length < 0){
//       $("address_error_messeage").html("Please fill filed");
//       $("address_error_messeage").show();
//       error_address = true;
//     }else{
//       $("#address_error_messeage").hide();
//     }
//   }
//
//   function check_email(){
//     var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
//
// 		if(pattern.test($("#email").val())) {
// 			$("#email_error_messeage").hide();
// 		} else {
// 			$("#email_error_messeage").html("Invalid email address");
// 			$("#email_error_messeage").show();
// 			error_email = true;
// 		}
//   }
//
//   function check_phone(){
//     var phone_number = $("#phone").val();
//     if(!isNaN(phone_number) || phone_number.length < 6 || phone_number.length > 12){
//       $("#phone_error_messeage").html("Phone number incorrect format");
//       $("#phone_error_messeage").show();
//       error_phone = true;
//     }else{
//       $("#phone_error_messeage").hide();
//     }
//   }
//   $("#form_validation").submit(function(){
//     error_username = false;
//     error_password = false;
//     error_name = false;
//     error_address = false;
//     error_email = false;
//     error_phone = false;
//
//     check_username();
//     check_password();
//     check_name();
//     check_address();
//     check_email();
//     check_phone();
//
//     if(error_username == false && error_name == false && error_password == false
//     && error_address == false && error_email == false && error_phone == false){
//       return true;
//     }else{
//       return false;
//     }
//   });
