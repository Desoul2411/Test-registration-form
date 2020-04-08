document.addEventListener('DOMContentLoaded', () => {

	let form = document.querySelector('.registration_form');


	/***Email validation***/
	let emptyFieldValidSpan = document.querySelectorAll('.empty_validation'); 
	let emailField = document.querySelector('.email'); 
	let emailBlock = document.querySelector('.email_input'); 
	let emailValidationSpan = document.querySelector('.email_validation');


	const validateEmail = () => {

		let email = emailField.value;
		let regex = /^[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

		if(regex.test(email)) {
			emailField.classList.remove("invalid_red_border");
			emailValidationSpan.style.display = 'none';
			emailBlock.classList.add("email-ok_mark");
			return true
			
		} else {
			if(emailField.value === '') {
				emailValidationSpan.innerHTML = 'Please,&nbsp;fill&nbsp;out&nbsp;this&nbsp;field!';
				emailValidationSpan.style.display = 'block';
				emailBlock.classList.remove("email-ok_mark");
				return false;
			} 

			else {
				emailValidationSpan.innerHTML = 'Please&nbsp;enter&nbsp;a&nbsp;valid&nbsp;email&nbsp;address!';
				emailValidationSpan.style.display = 'block';
				emailBlock.classList.remove("email-ok_mark");
				emailField.classList.add("invalid_red_border");
				return false;
			}
		}
	}





	/***Password validation***/
	let passwordBlock = document.querySelector('.password_input'); 
	let passwordField = document.querySelector('.password'); 
	let confirmPasswordField = document.querySelector('.confirm_password'); 
	let confirmPasswordBlock = document.querySelector('.confirm_password_input'); 
	let passwordValidationSpan = document.querySelector('.password_validation');
	let passwordConfirmSpan = document.querySelector('.confirm_password_validation');

	/*at least one digit, uppercase and lowercase letter must be entered. Letters, digits and special symbols are allowed to enter. Minimal legth - 8 symbols.*/
	const validatePassword = () => {
		let password = passwordField.value;
		let passwordToConfirm = confirmPasswordField.value;
		let regex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g ;

		/*Check if at least one digit, uppercase and lowercase letter are entered (for validation message)*/
		const checkMandatoryChar = password => {
		  let upperChar;
		  let lowerChar;
	      let digitChar;
	      
		  for(let i = 0; i < password.length; i++) {
		    if ( isNaN(password[i]) && password.includes(password[i].toUpperCase())) {
		      upperChar = 'true';
		      break;
		    } 
		  }
		  
		  for(let i = 0; i < password.length; i++) {
		    if ( isNaN(password[i]) && password.includes(password[i].toLowerCase())) {
		      lowerChar = 'true';
		      break;
		    } 
		  }
	      
	      for(let i = 0; i < password.length; i++) {
		    if (!isNaN(password[i])) {
		      digitChar = 'true';
		      break;
		    }
		  }
		  
		  if (upperChar === lowerChar && lowerChar === digitChar) {
		  } else return false
		};




		if(regex.test(password)) {
			passwordValidationSpan.innerHTML = '';
			passwordField.classList.remove("invalid_red_border");
			passwordConfirmSpan.style.display = 'none';
			confirmPasswordField.classList.remove("invalid_red_border");
			if(password === passwordToConfirm) {
				return true
				
			} else {
				passwordConfirmSpan.innerHTML = 'Passwords&nbsp;do&nbsp;not&nbsp;match!';
				passwordConfirmSpan.style.display = 'block';
				confirmPasswordField.classList.add("invalid_red_border");
				return false
			}
		}  else {
			if(password.length > 0 && password.length < 8) {
				passwordValidationSpan.innerHTML = 'At&nbsp;least&nbsp;8&nbsp;characters&nbsp;must&nbsp;be&nbsp;entered!';
				passwordValidationSpan.style.display = 'block';
				passwordField.classList.add("invalid_red_border");
				return false;
			} else if(checkMandatoryChar(password) === false ) {
				passwordValidationSpan.innerHTML = 'At&nbsp;least&nbsp;one&nbsp;number,&nbsp;uppercase&nbsp;and lowercase&nbsp;letter&nbsp;must&nbsp;be&nbsp;entered!';
				passwordValidationSpan.style.display = 'block';
				passwordField.classList.add("invalid_red_border");
				return false;
			}
		}
	}   
	/** end of validatePassword function **/






	/** Name and lastname validation **/

	let userNameBlock = document.querySelector('.name_input');
	let userNameField = document.querySelector('.name');
	let nameValidationSpan = document.querySelector('.name_validation');

	const validateName = () => {
		let name = userNameField.value;
	    /*At least 2 latin letters must be entered*/ 
		var regex = /^([A-Za-z]{1}[A-Za-z]{1,30})$/;

		if(regex.test(name.trim())) {
			nameValidationSpan.style.display = 'none';
			userNameField.classList.remove("invalid_red_border");
		    return true;
		} else {
			if(userNameField.value !== '') {
				nameValidationSpan.innerHTML = 'Please,&nbsp;check&nbsp;if&nbsp;the&nbsp;name&nbsp;entered&nbsp;is&nbsp;correct!';
				nameValidationSpan.style.display = 'block';
				userNameField.classList.add("invalid_red_border");
			    return false
			};
		}
	}



	let userLastnameBlock = document.querySelector('.lastname_input')
	let userLastnameField = document.querySelector('.lastname');
	let lastnameValidationSpan = document.querySelector('.lastname_validation');

	const validateLastname = () => {
		let lastname = userLastnameField.value;
	   /*At least 2 latin letters must be entered*/ 
		var regex = /^([A-Za-z]{1}[A-Za-z]{1,30})$/;

		if (regex.test(lastname.trim())) {
		   	lastnameValidationSpan.style.display = 'none';
			userLastnameField.classList.remove("invalid_red_border");
		    return true;

		} else {
			if (lastname !== '') {
				lastnameValidationSpan.innerHTML = 'Please,&nbsp;check&nbsp;if&nbsp;the&nbsp;lastname&nbsp;entered&nbsp;is&nbsp;correct!';
				lastnameValidationSpan.style.display = 'block';
				userLastnameField.classList.add("invalid_red_border");
			    return false;
			}
		}
	}
	/** End of name and lastname validation **/




	/** Return default color to input on focus **/
	let inputs = document.querySelectorAll('input');  
		inputs.forEach(input => {
			input.addEventListener('focus', (event)=> {
				if(event.target.classList.contains('invalid_red_border')) {
					event.target.style.color = "#111111"
				}
			})
		});





	/*Add validate message if inputs and selects values are empty*/
	form.addEventListener('submit', (event)=> {
		inputs.forEach(input => {  
		   if (input.classList.contains('empty_validation')) {
		   	if (input.value === '') {
					input.parentElement.lastElementChild.style.display = 'block';
					input.parentElement.lastElementChild.innerHTML = "Please,&nbsp;fill&nbsp;out&nbsp;this&nbsp;field!";
					return false
			} else {
					input.parentElement.lastElementChild.style.display = 'none';
					input.parentElement.lastElementChild.innerHTML = "";
				}
		   } 
		})
	})





	/*** Nationality select validation (on empty value) ***/
	let nationalityBlock = document.querySelector('.nationality_select');
	let nationalityField = document.getElementById('nationality');
	let nationalityValidationSpan = document.querySelector('.nationality_validation');

	const validateNationailty = () => {
		if (nationalityField.value === '') {
			nationalityValidationSpan.style.display = 'block';
			return false
		} else {
			nationalityValidationSpan.style.display = 'none';
			return true
		}
	}


	/*Remove validate message on value change*/
	nationalityField.addEventListener('change', (event) => {
		if (nationalityField.value !== '') {
			nationalityValidationSpan.style.display = 'none';
		}
	})







	/*** Date selects validation (on empty value) ***/
	let dateFields = document.querySelectorAll('select.date');
	let dayField = document.getElementById('day');
	let monthField = document.getElementById('month');
	let yearField = document.getElementById('year');
	let dateValidationSpan = document.querySelector('.date_validation');

	const validateDate = () => {
		/***Date selects validation (on empty values)***/
		if (dayField.value === '' || monthField.value === '' || yearField.value === '') {
			dateValidationSpan.style.display = 'block';
			return false
		} else {
			return true

		}
	}

	/*Remove validate message if all the date fields values are not empty*/
	dateFields.forEach(dateField => {
		dateField.addEventListener('change', (event)=>{
			if (dayField.value !== '' && monthField.value !== '' && yearField.value !== '') {
				dateValidationSpan.style.display = 'none';
			};
		});	
	});




	let formContent = document.querySelector('.form-content');
	let formContentTop = document.querySelector('.form-content-top');
	let submitButton = document.querySelector('.submit_button');
	let successRegContent = document.querySelector('.form_content_succesfull_registration'); /*Content to show if the validation was successfull*/
	let fadeInUpElements = document.querySelectorAll('.fadeInUp');   /*fadeInUp - 'Animate'CSS class. Visibility value must be changed to 'hidden' to hide input rows*/
	let windowWidth = document.documentElement.clientWidth;
	let formWrapper = document.querySelector('.form-wrapper');



	const validateForm = () => {
		if (validateEmail() &&
			validatePassword() &&
			validateName() &&
			validateLastname() &&
		    validateDate() && 
		    validateNationailty()
		    ) {
			/*Hide content and show success message*/
			form.style.background = 'none';
			formContentTop.style.visibility = 'hidden';
			submitButton.style.visibility = 'hidden';
			successRegContent.style.display = 'block';
			fadeInUpElements.forEach(elem => {
				elem.style.visibility = 'hidden';
			}); 

			window.addEventListener('resize', (event)=> {
				if(windowWidth < 510) {
					fadeInUpElements.forEach(elem => {
						elem.style.display = 'flex';
						submitButton.style.display = 'none';
					}); 
				} 
			});
			return true
		} else {
			return false
		}
	};




	/*JQuery AJAX  - if data entered is valid - send it to mail.php*/
	/*$('.registration_form').submit(function() {
		event.preventDefault();
		validateName();
		validateLastname();
		validateDate();
		validateNationailty();
		if(validateForm() === true) {
			$.ajax({
				type: "POST",
				url: "../mail.php",
				data: $(this).serialize()
			}).done(function(data) {
				$(this).find("input").val("");
				$(this).find("select").val("");
				alert(data);
				$("#form").trigger("reset");
			});
			return false;
		} else return false	
	});*/


 	/*Custom serialize form data function*/
	/*const serializeForm = ()=> {
		let data = {};
		let radioButtons = document.querySelectorAll('input[type="radio"]');
		let gender;

		const getGenderValue = ()=> {
			radioButtons.forEach(radio=>{
					if(radio.checked) {
				  	gender = radio.value;
				  	return gender;
				}
			});
		};
		getGenderValue();

		data.name = userNameField.value;
		data.lastname = userLastnameField.value;
		data.nationality = nationalityField.value;
		data.email = emailField.value;
		data.day = dayField.value;
		data.month = monthField.value;
		data.year = yearField.value;
		data.gender = gender;
		data.password = password.value;
		return data
	}*/



    const ajaxSend = (formData) => {
        fetch('../mail.php', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(data => alert(data))   // show successful registration messga from mail.php
            .catch(error => console.error(error))
    };


   
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        event.preventDefault();
		validateName();
		validateLastname();
		validateDate();
		validateNationailty();
		if(validateForm() === true) {
	       let formData = new FormData(this);
	        formData = Object.fromEntries(formData);  // create JSON
	        ajaxSend(formData);
	        this.reset(); // reset form fields
	    }
    });
});