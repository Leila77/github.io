/**
 * 略略略
 * 
 */


	var divider = " — ";//网站上显示的分隔符
	var arr = originalList.split('	');//原始歌单文件分割为array

	//////////////////////////////////回车搜索//////////////////////////////////////
	var input = document.getElementById("search");

	input.addEventListener("keyup", function(event) {
	  			// Cancel the default action, if needed
	  			event.preventDefault();
	 				 // Number 13 is the "Enter" key on the keyboard
	 				 if (event.keyCode === 13) {
	    // Trigger the button element with a click
	    document.getElementById("submit").click();
	}
	});




	////////////////////////////////////////// 歌单 ///////////////////////////////////////////
	//格式 歌名-歌手
	//新歌加在最前面方便到时候显示新添加歌曲
	//没找到歌手名的话也要填，不能空着

// 	var xmlhttp;
// 	xmlhttp=new XMLHttpRequest();
// 	xmlhttp.open('GET', "test.txt", false);
// 	xmlhttp.send();
// 	var output = xmlhttp.responseText.split('\r\n').map(function (i) {return i.replace(/(.+),(.+),(.+)/g, 'Name: $1<br>Color: $2<br>Avatar: $3<br>')} ).join('<br/>');
// console.log(output);



	
		

///////////////歌单总数动画//////////////////
		

	function count() {

   
		var count = 0;
		var total = arr.length;
		var counter = setInterval(timer, 13);

		function timer(){

		    count += 1;
		  	if (count === total+1){

		    	clearInterval(counter);
		        
		        setTimeout(function(){
		            count = total;
		            document.getElementById("counter").innerHTML=count;
		   
		        }, 800);

		     return;
		  }
		 document.getElementById("counter").innerHTML=count;
		}
	    
	};


	/////////////////// 动态背景图 //////////////////////////
	function sajiao(){
		var day = new Date();
		var startTime = Math.floor(day.getTime()/200);
		
		if (startTime % 2 == 0){
			var elem = document.getElementById("songList");
			elem.setAttribute("style","background-image:url(\"one_piece_jt2.png\");");
		}else{
			var elem = document.getElementById("songList");
			elem.setAttribute("style","background-image:url(\"one_piece_jt3.png\");");

		}

	}



//////////////////////////////////// 显示最新的歌 ///////////////////////////////////////

		var newSongs = "";
		for(i = 0 ; i < 20; i ++){
			newSongs +=  " ♡ " + arr[i].split('-')[0] + "&nbsp&nbsp&nbsp";
			//+ "(" + arr[i].split('-')[1] + ")  "  
		}

		document.getElementById("new").innerHTML = newSongs;


//////////////////////////////////// pending ///////////////////////////////////////
		var pendingList = [];




////////////////////////////////////// 按歌手排序 //////////////////////////////////////////
		
		function sortBySinger(){

			arr = arr.sort(function(a,b){
				
				return a.toString().split('-')[1].localeCompare(b.toString().split('-')[1],'zh-CN')
			});
		}




////////////////////////////////////// 按歌名排序 ///////////////////////////////////////////

		function sortByTitle(){
			
			arr.sort(function(a,b){
				
				return a.localeCompare(b,'zh-CN');
			});
		};



///////////////////////////////////// 改变歌单内容 /////////////////////////////////////////

		function setContent() {
			
			var length = arr.length;
			var arrToStr = "";
			var temp = "";
			var letter = "";
			
			var segList = pySegSort(arr).slice();
			
			

			
			//整个list ：segList
			//a里的内容 ： segList[0].data
			//a里的第一首歌： segList[0].data[0]


			for(i = 0; i < segList.length; i ++){
				// console.log("i : " + i + " letter : " + segList[i].letter);
				

				letter = segList[i].letter.toUpperCase();
				
				
				arrToStr += "<p style=\"font-size:17px; color:pink; background-color: #f2f2f2; width:23px; font-weight:bold;border-radius:4px; text-align:center; \">" + letter + "</p>" ;
				


				

				segList[i].data.forEach(function(arr){
					temp += arr.split('-')[0] + divider + arr.split('-')[1] + "<br>";

				});

				arrToStr += temp + "<br>";
				temp = "";	
			};
			// console.log("arrToStr = " + arrToStr);
			
			


			document.getElementById("songList").innerHTML = arrToStr;
			// var elem = document.getElementById("titleBtn");
			// elem.classList.add("active");
		}


////////////////////////////////////// 简化歌手 ///////////////////////////////////////////



		function simplifySinger() {

			sortBySinger();
			var sortedBySinger = arr.slice();
			var str = [];
			

			for ( i = 0; i < sortedBySinger.length; i ++){

				var singerStr = sortedBySinger[i].toString().split('-')[1];

				if (i + 1 < sortedBySinger.length){
					var nextSingerStr = sortedBySinger[i+1].toString().split('-')[1];
				}


				if(str.toString().includes(singerStr) == true){ //如果歌手已经在array里

					str[i] = "";

					if(str.toString().includes(nextSingerStr) == false){
						titleStr = sortedBySinger[i].split('-')[0].toString();
					}else{
						titleStr = sortedBySinger[i].split('-')[0].toString() + "  丶  ";
					}

					str[i] += titleStr;

					
					
				}else{ //如果歌手不在array里

					if ( i == 0 ){
						str.push("<p style=\"font-size:13px; color:pink; background-color: #f2f2f2; height:25px; width:100px;padding:6px; display:inline-block;font-weight:bold;border-radius:4px; \">" + singerStr + " </p>" ); //加入str 没有回车 
					}else{
						str.push("<br><p style=\"font-size:13px; color:pink; background-color: #f2f2f2; height:25px; width:100px;padding:6px; display:inline-block;font-weight:bold;border-radius:4px; \">" + singerStr + " </p>" ); //加入str 回车~
					}

					if(str.toString().includes(nextSingerStr) == false){
						titleStr = sortedBySinger[i].split('-')[0].toString();
					}else{
						titleStr = sortedBySinger[i].split('-')[0].toString() + "  丶  " ;
					}

					str[i] +=  "<br>" + titleStr + "  ";

				}
			}
			return str;
		}
		


///////////////////////////////////// 简化显示歌手 ////////////////////////////////////////


		function setContentSinger(str) {
			
			var length = str.length;
			var arrToStr = "";
			
			for (var i = 0; i <= length; i ++){

				arrToStr += str[i];

			}
		

			document.getElementById("songList").innerHTML = arrToStr;

			
		}


////////////////////////////////////// 搜索 ///////////////////////////////////////////


	function search() {

		var str = "";
		var keywords = "";
		keywords = document.getElementById("search").value.toLowerCase();

		var alert = "";
		var singerStr = "";
		var titleStr = "";


		if(keywords == ""){
			window.alert("请输入关键字~");
			return;
		}


		arr.forEach(function(arr){
			titleStr = arr.split('-')[0];
			_titleStr = arr.split('-')[0].toLowerCase();
			singerStr = arr.split('-')[1];
			_singerStr = arr.split('-')[1].toLowerCase();
			str += arr.toString();
			if(_titleStr.includes(keywords) == true || _singerStr.includes(keywords) == true){
				alert += titleStr + " — " + singerStr+ "\n";

			}

		});

		if(str.toString().toLowerCase().includes(keywords.toString().toLowerCase()) != true){ 

			alert = "木有找到诶 QAQ \n有可能是忘了加上！快去问问老糖会不会唱~"

		}
		window.alert(alert);

	}



//////////////////////////////// 添加歌曲到pending list //////////////////////////////////////

	function addToPending(){

		var pendingSongTitle = document.getElementById("pendingSongTitle").value;
		var pendingSongArtist = document.getElementById("pendingSongArtist").value;


		if(pendingSongArtist == "" || pendingSongTitle == "" ){
			alert("呀！歌名和歌手都要输入噢！");
			return;
		}
		console.log(str);
		console.log("pendingSongTitle = " + pendingSongTitle);
		console.log("pendingSongArtist = " + pendingSongArtist);


		if(pendingList.toString().includes(pendingSongTitle + "-" + pendingSongArtist) == true){
			alert("呀！这首歌已经在[待添加歌单]里了哟~！");
			return;
		}



		if(arr.includes(pendingSongTitle + "-" + pendingSongArtist) == true){
			alert("呀！这首歌已经在[歌单]里了哟~！");

		}else{

			pendingList.push(pendingSongTitle + "-" + pendingSongArtist);

			alert("添加成功啦~！万分感谢！");

			document.getElementById("pendingSongList").innerHTML = pendingList ;
			
		}

	}


/////////////////////////////// 给老糖的魔法按钮 /////////////////////////////

	function magic(){
		var temptitle = "";
		var title ="";
		var i = 0;
		var length = arr.length;
		var segList = pySegSort(arr);
		var letter = "";


		for(i = 0; i < segList.length; i ++){

			letter = segList[i].letter.toUpperCase();
			title += "<div style=\"font-size: 17px; color: #333333; background-color: #f2f2f2; width: 20px; font-weight: bold; display: inline-block; padding: 0 5px; margin-right: 5px; margin-top:20px; text-align: center;\">" + letter  +"</div>" ;

			var idx = 0 ;

			segList[i].data.forEach(function(arr){

				if(idx === segList[i].data.length - 1){
					temptitle += arr.split('-')[0];
					console.log("idx === 最后一个" );

				}else{
					temptitle += arr.split('-')[0] + " 、 " ;
					idx ++;
				}
			});

			title += "<p style=\"display:inline; line-height:2;\">" + temptitle + "</p><br>";
			temptitle = "";

		};


		var text = "<div style=\"overflow: auto; height: 220px; width: 98%; background-image: linear-gradient(to bottom right, #333333,#666666); color: #f2f2f2; font-size: 13px; margin: auto; padding: 0px 20px; line-height: 1.5;opacity:0.9;\"><p style=\"color: #333333; background-color: #f2f2f2; font-size: 15px; padding-left: 20px; display:block; width:180px;\"><strong>❤&nbsp;歌单持续更新中&hellip;&hellip;</strong></p>" + title +"</div>\
		<p><img style=\"height: 80px; margin: auto; display: block;\" src=\"https://i0.hdslb.com/bfs/face/ab805e58ea92ec4aa84e6c734afb332cd3340c87.jpg@100Q.webp@128w_128h_100Q_1c.webp\" /></p>\
		<p style=\"text-align: center;font-size:10px;\">感谢大家的陪伴 &gt; &lt;</p><a target=\"_blank\" href=\"//shang.qq.com/wpa/qunwpa?idkey=06e5435f9776b7845974c13619bb8f6f33a6e7df157e84ed4b9dc53267f1c47f\" style=\"text-align:center;display:block;color:#333333;font-size:10px;margin-bottom:15px;\">戳我加群 665380472</p></a><a href=\"https://leila77.github.io/github.io/\";style=\"text-align: center; display:block; margin:auto; width:100px;background-color:#333333;color:#f2f2f2;text-decoration:none;font-weight:bold;font-size: 11px;padding:2px 2px; font-size:10px;\">一个神 ♂ 秘网站</a>";




		var dummy = document.createElement("input");
		document.body.appendChild(dummy);
		dummy.setAttribute('value', text);
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
		alert("复制成功惹~");

	}




////////////////////////////// 魔法2号 /////////////////////////
	function magic2(){

		alert("你点我干嘛?? 👀 hentaiですが?");

	}



//////////////////////// 按拼音首字母分类 ///////////////////////////

	function pySegSort(arr) {
		var letters = "";
		var zh = "";
		var segs = [];
		var curr = [];
		console.log(arr);

		if(!String.prototype.localeCompare)
			return null;

		letters = "*abcdefghjklmnopqrstwxyz".split('');
		zh = "阿八嚓哒妸发旮哈讥咔垃麻拏噢妑七呥爇它穵夕丫帀".split('');



		letters.forEach(function(item,i){

	curr = {letter: item, data:[]};
			arr.forEach(function(item2){
	        	// console.log(item2);

	        	if (!item2.charAt(0).match(/[\u3400-\u9FBF]/)){
	        		if (item2.charAt(0).toLowerCase() == letters[i]){

	        			curr.data.push(item2);
	        		}
	        	}else{
	        		if((!zh[i-1] || zh[i-1].localeCompare(item2) <= 0) && (item2.localeCompare(zh[i]) == -1 )) 
	        			curr.data.push(item2);

	        	}

	        });



			if(curr.data.length) {

				segs.push(curr);
				curr.data.sort(function(a,b){
					return a.localeCompare(b);
				});
			}
		});


		return segs;
	}



/////////////////////// 直播时间 ////////////////////////////////////

	function getSchedule(){
		var date = new Date();
		var dayNum = date.getDay();
		var day = "";
		var liveTime = "";
		var result = "";
		console.log(day);

		switch(dayNum) {
			case 0:
			day = "星期天";
			liveTime = "下午4点直播~";
			break;

			case 1:
			day = "星期一";
			liveTime = "今天休息噢~~明天见下午4点见~！";
			break;

			case 2:
			day = "星期二";
			liveTime = "下午4点直播~";
			break;

			case 3:
			day = "星期三";
			liveTime = "早上9点 & 下午4点都有直播噢~";
			break;

			case 4:
			day = "星期四";
			liveTime = "下午4点直播~晚上10点半随缘!";
			break;

			case 5:
			day = "星期五";
			liveTime = "早上9点 & 下午4点都有直播噢~";
			break;

			case 6:
			day = "星期六";
			liveTime = "下午4点直播~晚上10点半随缘!";
			break;

		}

		result = day + "(｡･ω･｡)" + liveTime;
		return result;

	}


	function setSchedule(){
		var sche = getSchedule();
		document.getElementById("liveSchedule").innerHTML = sche;
	}



/////////////////////// 启动弹出窗口 ///////////////////////

	function modalOnLoad(){
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 

	modal.style.display = "block";


	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	}


////////////////////////////////////// onLoad ///////////////////////////////////////////
	function run(){
		modalOnLoad();
		sortByTitle();
		setContent();
		setSchedule();
		count();
	}

