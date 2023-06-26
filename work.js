(function(){
	
	//Choose an array method to implement for each of the incomplete functions.
	//You MUST only use a combination of MAP, FILTER, and REDUCE array functions in order to accomplish your goal.
	//No use of for loops of any kind or the forEach function is permitted.

	//Remember, you can if you wish chain together array function calls to attain your goals.
	// Ex: array.filter().map()

	//Get data for the TV Show "Friends"
	fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
	.then(response => response.json())
    .then(json => {
        info = json;
	        
		//DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output

	    //1 - Implement the function called getGuntherCount which returns the total number of episodes where the character Gunther is mentioned in the episode summary.
	    console.log('--------------------------------');
	    console.log(`Gunther Count: ${getGuntherCount(json)}`);

	    //2 - Implement the function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
	    console.log('--------------------------------');
	    console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

	    //3 - Implement the function called getTotalEpisodesInYear() that returns the number of episodes that aired in the year 2000
	    console.log('--------------------------------');
	    console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json)}`);

	    //4 - Implement the function called getFemaleCastMembers() that returns an array of the names of the female cast members.
        console.log('--------------------------------');
	    console.log(`Female Cast Members:`);
	    console.log(getFemaleCastMembers(json));

	    //5 - Implement the function called getEpisodeTitles() which returns a list of episode where the argument string is found in the episode summary.
        console.log('--------------------------------');
	    console.log(`Episodes that mention Ursula:`);
	    console.log(getEpisodeTitles(json, 'Ursula'));

	    //6 - Implement the function called getCastMembersOver55() which returns a list of cast members who are currently 55 years of age or older.
        console.log('--------------------------------');
	    console.log(`Cast Members who are currently 55 or older:`);
	    console.log(getCastMembers55OrOlder(json));

        //7 - Implement the function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total runtime minutes for all episodes excluding episodes in season 6
	    console.log('--------------------------------');
        console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);
    
	    //8 - Implement the function called getFirstFourSeasons that gets the episodes for the first four seasons but only return an array of JSON objects containing the season number and episode name
        console.log('--------------------------------');
	    console.log(`Episode JSON for first four seasons:`)
	    console.log(getFirstFourSeasons(json));

        //9 - Implement the function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
	    console.log('--------------------------------');
	    console.log(`Tally of episodes by season:`);
        console.log(getEpisodeTallyBySeason(json));

	    //10 - Implement the function called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both the name and summary of the episodes.
        console.log('--------------------------------');
	    console.log(`Capitalized Friends:`);
	    console.log(capitalizeTheFriends(json));
	})

	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER (or a combination) ON THE PROVIDED JSON DATA
	// Complete the required ten functions below this line...

	//1 - Implement the function called getGuntherCount which returns the total number of episodes where the character Gunther is mentioned in the episode summary.
	function getGuntherCount()
	{ 
		return info._embedded.episodes.map(x=> {return({summary:x.summary})}).filter(x=> x.summary.includes('Gunther')).length; 
	}

	//2 - Implement the function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
	function getTotalRuntimeMinutes() 
	{ 
		return info._embedded.episodes.map(x=> x.runtime).reduce((sum,next)=>sum+=next); 
	}

	//3 - Implement the function called getTotalEpisodesInYear() that returns the number of episodes that aired in the year 2000	
	function getTotalEpisodesInYear() 
	{ 
		return info._embedded.episodes.map(x=>x.airdate.substr(0,4)).filter(x=> x.includes('2000')).length; 
	}

	//4 - Implement the function called getFemaleCastMembers() that returns an array of the names of the female cast members.
	function getFemaleCastMembers() 
	{
		return info._embedded.cast.filter(x=>x.person.gender.includes('Female')).map(x=>x.person.name);
	}

	//5 - Implement the function called getEpisodeTitles() which returns a list of episodes where the argument string is found in the episode summary.
	function getEpisodeTitles(info,str) 
	{ 
		return info._embedded.episodes.map(x=> {return({name:x.name,summary:x.summary})}).filter(x=> x.summary.includes(str)).map(x=>x.name); 
	}
		
	//6 - Implement the function called getCastMembersOver55() which returns a list of cast members who are currently 55 years of age or older.
	function getCastMembers55OrOlder() 
	{ 
		return info._embedded.cast.map(x=>x.person).map(x=> {
			return({name:x.name,birthday:x.birthday})}).filter(x=> {
				let dob = new Date(x.birthday);                 //turns birthdate string into an actual date
				let month_diff = Date.now() - dob.getTime();    //creates the current date, subtracts the input birthdate as miliseconds since Jan. 1st 1970
				let age_dt = new Date(month_diff);              //turning it into a date
				let year = age_dt.getUTCFullYear();             //getting the year using UTC
				let age = Math.abs(year - 1970);                //finding the absolute age from the year - 1970
				return age>=55;
			}).map(x=>x.name);									//sources of help for this question from linuxhint.com and stackoverflow
	}

    //7 - Implement the function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total runtime minutes for all episodes excluding episodes in season 6
	function getTotalRuntimeMinutesExcludingSeasonSix(info) 
	{ 
		return info._embedded.episodes.map(x=> {return({season:x.season,runtime:x.runtime})}).filter(x=> x.season != 6).map(x=>x.runtime).reduce((sum,next)=> sum+=next); 
	}
		
    //8 - Implement the function called getFirstFourSeasons that gets the episodes for the first four seasons but only return an array of JSON objects containing the season number and episode name
	function getFirstFourSeasons() 
	{ 
		return info._embedded.episodes.map(x=> {return({name:x.name,season:x.season})}).filter(x=> x.season ===1 || x.season ===2 || x.season ===3 || x.season ===4); 
	}
	
	//9 - Implement the function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
	function getEpisodeTallyBySeason(info) 
	{ 
		return info._embedded.episodes.map(x=> {return({season:x.season})}).reduce((accumulator,currentObject)=>{
			let property = "season";
			if(accumulator["Season " + currentObject[property]] === undefined)
			{
				accumulator["Season " + currentObject[property]] = 1;
			}
			else
			{
				accumulator["Season " + currentObject[property]] = accumulator["Season " + currentObject[property]] + 1;
			}
			return accumulator;
		},{});
	}
	
	//10 - Implement the function called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both the name and summary of the episodes.
	function capitalizeTheFriends()
	{
		let str = JSON.stringify(info._embedded.episodes);
		const toUpperName = {"Rachel": "RACHEL", "Monica": "MONICA", "Pheobe": "PHEOBE", "Joey": "JOEY", "Chandler": "CHANDLER", "Ross": "ROSS"};	
		let replaceStr = str.replace(/Rachel|Monica|Pheobe|Joey|Chandler|Ross/g, match=> toUpperName[match]);
		return JSON.parse(replaceStr);
	}														//sources of help for this question from samanthaming.com (for the stringify idea) and tjvantoll.com (for the matching idea)

})();
