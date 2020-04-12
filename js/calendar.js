document.addEventListener('DOMContentLoaded', () => {
	const calendarDayValid = () => {
		let day = document.getElementById('day');
		let monthFieldEl = document.getElementById('month');
		day.insertAdjacentHTML( 'beforeend','<option selected disabled value="">Day</option>');

		monthFieldEl.addEventListener('change', (e)=> {

			let monthVal = monthFieldEl.value;
			let i = 1; 
			if(monthVal === 'September' || monthVal === 'November' || monthVal === 'March' || monthVal === 'May' || monthVal === 'April'  || monthVal === 'June') {
				day.innerHTML = '';
				while(i<= 30) {
					 day.insertAdjacentHTML('beforeend', `<option value='${i}'>${i}</option>`);
					i++;
				}
				 day.insertAdjacentHTML('beforeend','</select>');
			} else if(monthVal === 'February') {
				day.innerHTML = '';
					while(i<= 28) {
					 day.insertAdjacentHTML('beforeend', `<option value='${i}'>${i}</option>`);
					i++;
				}
			} else if (monthVal === '') {
				day.innerHTML = '';
				day.setAttribute("disabled", "disabled");
			} else {
				day.innerHTML = '';
				while(i<= 31) {
					 day.insertAdjacentHTML('beforeend', `<option value='${i}'>${i}</option>`);
					i++;
				}
			}
		})
	}
	calendarDayValid();



	const yearParse = () => {
		let year = document.getElementById('year');
		 year.insertAdjacentHTML( 'beforeend','<option selected disabled value="">Year</option>');
		let j = 1900; 
		while(j<= 2005) {
			 year.insertAdjacentHTML('beforeend', `<option value='${j}'>${j}</option>`);
			j++;
		}
	}
	yearParse();
})

