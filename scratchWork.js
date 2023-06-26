// Question 6 Trial stuff ======================================================================================

// let today = new Date().toISOString().slice(0, 10);
// console.log(today);


// let dob = new Date("1998-11-05");  

// //calculate month difference from current date in time  
// let month_diff = Date.now() - dob.getTime();  
// console.log(month_diff);
  
// //convert the calculated difference in date format  
// let age_dt = new Date(month_diff);   
// console.log(age_dt);
  
// //extract year from date      
// let year = age_dt.getUTCFullYear();  
// console.log(year);
  
// //now calculate the age of the user  
// let age = Math.abs(year - 1970);  
// console.log(age);
  
// if(age === 24)
// {
//     console.log(`YUP`);
// }
// else
// {
//     console.log(`NOPE`);
// }

// function findAge(num)
// {
//     let dob = new Date(num);
//     let month_diff = Date.now() - dob.getTime();
//     let age_dt = new Date(month_diff); 
//     let year = age_dt.getUTCFullYear();  
//     let age = Math.abs(year - 1970);  
//     return age;
// }

// console.log(findAge(`1998-11-05`));

// function getCastMembers55OrOlder() 
// { 
// 	return info._embedded.cast.map(x=>x.person).map(x=> {
// 		return({name:x.name,birthday:x.birthday})}).filter(x=> findAge(x.birthday)>=55).map(x=>x.name);	
	
// 	function findAge(num)                       //function that takes the birthday string and returns current age
// 	{
// 		let dob = new Date(num);                        //turns birthdate string into an actual date
// 		let month_diff = Date.now() - dob.getTime();    //creates the current date, subtracts the input birthdate as miliseconds since Jan. 1st 1970
// 		let age_dt = new Date(month_diff);              //turning it into a date
// 		let year = age_dt.getUTCFullYear();             //getting the year using UTC
// 		let age = Math.abs(year - 1970);                //finding the absolute age from the year - 1970
// 		return age;
// 	}
// }

// Question 10 Trial work ===========================================================================================================================================

// function capitalizeTheFriends() 
// { 
// 	// let theString = info._embedded.episodes.map(x=> {return(x.name + x.summary)}).join();
// 	// let theString = (nameChange(info._embedded.episodes.map(x=> {
// 	// 	return(x.name + "*" + x.summary + "*")
// 	// }).join()).split("*"));

// 	let theString = info._embedded.episodes.filter(x=> (x.name && x.summary).map(x=> nameChange(x)));
// 	console.log(theString);

// 	function nameChange(str)
// 	{
// 		const toUpperName = {"Rachel": "RACHEL", "Monica": "MONICA", "Pheobe": "PHEOBE", "Joey": "JOEY", "Chandler": "CHANDLER", "Ross": "ROSS"};	
// 		return str.replace(/Rachel|Monica|Pheobe|Joey|Chandler|Ross/g, match=> toUpperName[match]);
// 	}
// }

// function capitalizeTheFriends()
// {
// 	return info._embedded.episodes.filter((x=> x.name).reduce((newStr,nameStr)=>{
// 		const toUpperName = {"Rachel": "RACHEL", "Monica": "MONICA", "Pheobe": "PHEOBE", "Joey": "JOEY", "Chandler": "CHANDLER", "Ross": "ROSS"};	
// 		if(nameStr.includes('Monica'|'Rachel'|'Pheobe'|'Joey'|'Chandler'|'Ross'))
// 		{
// 			newStr += nameStr.replace(/Monica|Rachel|Pheobe|Joey|Chandler|Ross/g, match=> toUpperName[match]);
// 		}
// 		return newStr;
// 	},""));
// }

// function capitalizeTheFriends()
// {
// 	return info._embedded.episodes.filter(x=> (
// 		x.name.includes('Monica') || 
// 		x.name.includes('Rachel') || 
// 		x.name.includes('Pheobe') || 
// 		x.name.includes('Joey') || 
// 		x.name.includes('Chandler') || 
// 		x.name.includes('Ross') || 
// 		x.summary.includes('Monica') || 
// 		x.summary.includes('Rachel') ||
// 		x.summary.includes('Pheobe') ||
// 		x.summary.includes('Joey') ||
// 		x.summary.includes('Chandler') ||
// 		x.summary.includes('Ross')
// 		));
// }

//const replaceNames = namesIncluded
//.replace(/Monica/g, 'MONICA');
// .replaceAll('Rachel', 'RACHEL')
// .replaceAll('Pheobe', 'PHEOBE')
// .replaceAll('Joey', 'JOEY')
// .replaceAll('Chandler', 'CHANDLER')
// .replaceAll('Ross', 'ROSS');

// return replaceNames;
// info._embedded.episodes.filter(x=> (x.summary.includes('Monica') || x.name.includes('Rachel') || x.name.includes('Pheobe') || x.name.includes('Joey') || x.name.includes('Chandler') || x.name.includes('Ross')));


// function capitalizeTheFriends()
// {
// 	return info._embedded.episodes.filter((x=> x.name).reduce((newStr,nameStr)=>{
// 		const toUpperName = {"Rachel": "RACHEL", "Monica": "MONICA", "Pheobe": "PHEOBE", "Joey": "JOEY", "Chandler": "CHANDLER", "Ross": "ROSS"};	
// 		if(nameStr.includes('Monica'|'Rachel'|'Pheobe'|'Joey'|'Chandler'|'Ross'))
// 		{
// 			newStr += nameStr.replace(/Monica|Rachel|Pheobe|Joey|Chandler|Ross/g, match=> toUpperName[match]);
// 		}
// 		return newStr;
// 	},""));
// }

// function capitalizeTheFriends()
// {
// 	return info._embedded.episodes.map(x=> x.name + "*" + x.summary
// 		.replace(/Monica/g, 'MONICA')
// 		.replace(/Rachel/g,'RACHEL')
// 		.replace(/Phoebe/g,'PHOEBE')
// 		.replace(/Joey/g,'JOEY')
// 		.replace(/Chandler/g,'CHANDLER')
// 		.replace(/Ross/g,'ROSS')
// 		);
// }


//returns array of 77 
// info._embedded.episodes.filter(x=> (x.name.includes('Monica') || x.name.includes('Rachel') || x.name.includes('Pheobe') || x.name.includes('Joey') || x.name.includes('Chandler') || x.name.includes('Ross')))

//returns array of 170
// info._embedded.episodes.filter(x=> (x.summary.includes('Monica') || x.name.includes('Rachel') || x.name.includes('Pheobe') || x.name.includes('Joey') || x.name.includes('Chandler') || x.name.includes('Ross')));
