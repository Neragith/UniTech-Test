	$(document).ready(function(){
				$("#save").click(function(){
					var ndis = $("#ndis").val();
					var name = $("#name").val();
					var address = $("#address").val();
					var phone = $("#phone").val();
					var nok = $("#nok").val();
					var dob = $("#dob").val();
					var notes = $("#notes").val();
					var clientInfo = 'ndis1=' + ndis + '&name1=' + name + '&address1=' + address + '&phone1=' + phone + '&nok1=' + nok + '&dob1=' + dob + '&notes1=' + notes;
					if(ndis=='' ||name==''||address==''||phone==''||nok==''||dob==''||notes=='')
					{
						alert("All fields are required");
					}
					else
					{
						$.ajax({
							type: "POST",
							url: "insertClient.php",
							data: clientInfo,
							cache: false,
							success: function(result){
								alert(result);
							}
						});	
					}
					return false;
				});
				
			});