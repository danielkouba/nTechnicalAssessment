////////////////////////////////////////
// Get form elements	
var form = {
	submit: document.getElementById('submit'),
	close: document.getElementById('close'),
	name: document.getElementById('full_name'),
	nameLabel: document.getElementById('naLabel'),
	nameError: document.getElementById('naError'),
	phone: document.getElementById('phone'),
	phoneLabel: document.getElementById('phLabel'),
	phoneError: document.getElementById('phError'),
	state: document.getElementById('state'),
	stateLabel: document.getElementById('stLabel'),
	stateError: document.getElementById('stError'),
	question: document.getElementById('question'),
	questionLabel: document.getElementById('quLabel'),
	questionError: document.getElementById('quError')
}

////////////////////////////////////////
// Add event listeners
form.submit.addEventListener("click", function(){validateForm(form)});
form.close.addEventListener("click", function(){close(form)});
form.name.addEventListener("blur", function(){
	clearErrors("name")
})
form.phone.addEventListener("blur", function(){
	clearErrors("phone")
})
form.state.addEventListener("blur", function(){
	clearErrors("state")
})
form.question.addEventListener("blur", function(){
	clearErrors("question")
})

////////////////////////////////////////
// Remove errors class on blur
function clearErrors(id){
	switch(id) {
	    case "name":
	        form.name.classList.remove('error');
	        form.nameLabel.classList.remove('hidden');
	        form.nameError.classList.add('hidden');
	        break;
	    case "phone":
	    	form.phone.classList.remove('error');
	    	form.phoneLabel.classList.remove('hidden');
	        form.phoneError.classList.add('hidden');
	        break;
	    case "state":
	    	form.state.classList.remove('error');
	    	form.stateLabel.classList.remove('hidden');
	        form.stateError.classList.add('hidden');
	    	break;
	    case "question":
	    	form.question.classList.remove('error');
	    	form.questionLabel.classList.remove('hidden');
	        form.questionError.classList.add('hidden');
	    	break;
	    default:
	    	break;
	}
}

////////////////////////////////////////
// Validations
function validateForm(page){
    var x = document.getElementById('form-wrapper');
    var y = document.getElementById('success-wrapper');
    var success = true;

	////////////////////////////////////////
	// Was a name given?
	if (!page.name.value){
		success = false;
		page.name.classList.add('error');
		page.nameLabel.classList.add('hidden');
        page.nameError.classList.remove('hidden');
	}

	////////////////////////////////////////
	// Was a phone number given?
	if (!page.phone.value){
		success = false;
		page.phone.classList.add('error');
		page.phoneLabel.classList.add('hidden');
        page.phoneError.classList.remove('hidden');
	}
	////////////////////////////////////////
	// Phone number valid?
	// var test = /^\(?([2-9]\d{2})\)?[- ]?([2-9]\d{2})[- ]?(\d{4})/g;
	var test = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/g;
	if (page.phone.value.match(test) == null){
		success = false;
		page.phone.classList.add('error');
		page.phoneLabel.classList.add('hidden');
        page.phoneError.classList.remove('hidden');
	}

	////////////////////////////////////////
	// Was a State given?
	if (!page.state.value){
		success = false;
		page.state.classList.add('error');
		page.stateLabel.classList.add('hidden');
        page.stateError.classList.remove('hidden');
	}
	////////////////////////////////////////
	// Was a question given?
	if (!page.question.value){
		success = false;
		page.question.classList.add('error');
		page.questionLabel.classList.add('hidden');
        page.questionError.classList.remove('hidden');
	}

	////////////////////////////////////////
	// If it passed all conditions transition
    if (success) {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}

function close(page){
    var x = document.getElementById('form-wrapper');
    var y = document.getElementById('success-wrapper');
    x.style.display = 'block';
    y.style.display = 'none';

    page.name.value = "";
	page.phone.value = "";
	page.state.value = "";
	page.question.value = "";
}