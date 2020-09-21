/**
 * 略略略
 * 
 */


	// var divider = " — ";//网站上显示的分隔符
	var divider = "  ";//网站上显示的分隔符
	var arr = originalList.split('	');//原始歌单文件分割为array
	console.log(arr);

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
		var counter = setInterval(timer, 2);
		var text = "";

		function timer(){

		    count += 1;
		  	if (count === total+1){

		    	clearInterval(counter);
		        
		        setTimeout(function(){
		            count = total;
		            document.getElementById("counter").innerHTML= text;
		        }, 800);

		     return;
		    }
			text = "<div style=\"display:block;color:white;font-size:19px;\">已收录曲目</p>" + "<div style=\"font-size:90px;font-weight:bold;display:block;width:100%;font-family:Heiti;\">" + count + "</div>";
		    document.getElementById("counter").innerHTML = text;
		}
	    
	}


	/////////////////// 动态背景图 //////////////////////////
	function sajiao(){
		var day = new Date();
		var startTime = Math.floor(day.getTime()/200);
		
		if (startTime % 2 == 0){
			var elem = document.getElementById("songList");
			elem.setAttribute("style","background-image:url(\"one_piece_jt2.png\");transition: .1s;");
		}else{
			var elem = document.getElementById("songList");
			elem.setAttribute("style","background-image:url(\"one_piece_jt3.png\");transition: .1s;");

		}

	}



//////////////////////////////////// 显示最新的歌 ///////////////////////////////////////

		var newSongs = "";
		for(i = 0 ; i < 20; i ++){
			newSongs +=  "<p style=\"display:inline; font-size:15px;color:#85929E; \";>" + " ○ " + arr[i].split('-')[0] +  "&nbsp<p style=\"display:inline; font-size:13px; color:#D6DBDF; \";>" + arr[i].split('-')[1] + "</br>";
			//+ "(" + arr[i].split('-')[1] + ")  "  
		}

		document.getElementById("new").innerHTML = newSongs;


//////////////////////////////////// pending ///////////////////////////////////////
		var pendingList = [];





/////////////////////////////////change class//////////////////////////////////////////

		function changeTabClass(id){
			console.log(id);

			switch(id) {
  				case 'titleClass':

  				document.getElementById(id).classList.add('selected');
 				document.getElementById('singerClass').classList.remove('selected');
 				console.log(document.getElementById(id).classList);
    			break;

 				case 'singerClass':
 				document.getElementById(id).classList.add('selected');
 				document.getElementById('titleClass').classList.remove('selected');
 				console.log(document.getElementById(id).classList);
   				break;

			}
			

		}






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
		}



///////////////////////////////////// 改变歌单内容 /////////////////////////////////////////

		function setContent() {
			
			var length = arr.length;
			var arrToStr = "";
			var temp = "";
			var letter = "";
			
			var segList = pySegSort(arr).slice();
			
			//-----------------------------结构说明-
			//整个list ：segList
			//a里的内容 ： segList[0].data
			//a里的第一首歌： segList[0].data[0]
			//-------------------------------------


			for(i = 0; i < segList.length; i ++){
				// console.log("i : " + i + " letter : " + segList[i].letter);
				

				letter = segList[i].letter.toUpperCase();
				
				// 歌名排序首字母的颜色
				arrToStr += "<p style=\"font-size:36px; color: #85929E; width:60px; font-weight:1000; text-align:left; margin:0;\">" + letter + "</p>" ;
				


				

				segList[i].data.forEach(function(arr){


					var _title = arr.split('-')[0];
					var _singer = arr.split('-')[1];
					var _tag1 = arr.split('-')[2];
					var _tag2 = arr.split('-')[3];
					var _tag3 = arr.split('-')[4];
					var _tag4 = arr.split('-')[5];
					var _tag5 = arr.split('-')[6];


					//歌名的字体字号 & 歌手的字体颜色 在这里设置
					temp += "<p style=\"display:inline; line-height:2;color:#85929E;font-size:17px;font-family:Microsoft YaHei;\">" + _title + "</p>" + divider + "<p style=\"display:inline; margin:0;font-size:13px; color:#D5DBDB;\">" + _singer ;
					
					
					//----------------添加标签----------------------

					if(_tag1 != ""){//如果第一个分类标签不为空
						temp += "<button class = \"tags\" style=\"margin-left:3px;\">" + _tag1 + "</button>";
					}
					if(_tag2 != "" && _tag2 != "10"){//如果第二个分类标签不为空
						temp += "<button class = \"tags\">" + _tag2 + "年代" + "</button>";
					}
					if(_tag3 != ""){//如果第二个分类标签不为空
						temp += "<button class = \"tags\">" + _tag3 + "</button>";
					}
					if(_tag4 != ""){//如果第二个分类标签不为空
						temp += "<button class = \"tags\">" + _tag4 + "</button>";
					}
					if(_tag5 != ""){//如果第二个分类标签不为空
						temp += "<button class = \"tags\">" + _tag5 + "</button>";
					}
						
					temp += "</p>"+ "<br>";
					//----------------------------------------------

				});

				arrToStr += temp;
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
						titleStr = sortedBySinger[i].split('-')[0].toString() + "  /  ";
					}

					str[i] += titleStr;

					
					
				}else{ //如果歌手不在array里

					if ( i == 0 ){//歌手分类下歌手的颜色
						str.push("<p style=\"font-size:23px; font-weight:bold;color:#D5DBDB; height:25px; width:180px; padding:0; display:inline-block; margin-top:7; margin-bottom:0;font-family:Heiti;\">" + singerStr + " </p>" ); //加入str 没有回车 
					}else{
						str.push("<br><p style=\"font-size:23px; font-weight:bold; color:#D5DBDB; height:25px; width:180px; padding:0; display:inline-block; margin-top:18px; margin-bottom:0;font-family:Heiti; \">" + singerStr + " </p>" ); //加入str 回车~
					} 

					if(str.toString().includes(nextSingerStr) == false){
						titleStr = sortedBySinger[i].split('-')[0].toString();
					}else{
						titleStr = sortedBySinger[i].split('-')[0].toString() + "  /  " ;
					}

					str[i] +=  "<p style=\"line-height:2;margin:0;padding:0;color:#85929E;font-size:14px;\">" + titleStr + "  ";

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
			title += "<div style=\"border-radius:15px; font-size: 17px; color: #373854; background-color:#d2d4dc; width: 20px; font-weight: bold; display: inline-block; padding: 0 5px; margin-right: 5px; margin-top:20px; text-align: center;\">" + letter  +"</div>" ;

			var idx = 0 ;

			segList[i].data.forEach(function(arr){

				if(idx === segList[i].data.length - 1){     
					temptitle += arr.split('-')[0];     
				console.log("idx === 最后一个");

				}else{
					temptitle += arr.split('-')[0] + " 、 " ;
					idx ++;
				}
			});

			title += "<p style=\"display:inline; line-height:2;\">" + temptitle + "</p><br>";
			temptitle = "";

		};


		var text = "<div style=\"opacity:0.9; overflow:auto; height:220px; width:98%; background-color:#373854; color:#d2d4dc; font-size:13px; margin:auto; padding:0px 20px; line-height: 1.5;\"><div><p style=\"display:inline-block; color:#f8f8fa; font-size:15px; width:50%;\"><strong>▁ ▂ ▃ ▅ ▆ ▇ &nbsp;&nbsp;歌单持续更新中</strong></p><a href=\"https://leila77.github.io/github.io/\" style=\"margin-right:10px; border-radius:20px; border:2px solid #7bb3ff; width:180px; padding:2px; text-align: center; display:inline-block; background-color:#493267; color:#7bb3ff; text-decoration:none; font-size:11px;\"> 网页版歌单</a></p><a target=\"_blank\" href=\"//shang.qq.com/wpa/qunwpa?idkey=442f36be207473ecd3a95b0540d9e194cd579d4597af4df75fba77946bc1cbcc\" style=\"border-radius:20px; border:2px solid #7bb3ff; width:180px; padding:2px; text-align:center; display:inline-block; background-color:#493267; color:#7bb3ff; font-size:10px;\">群951162656</a></div>" + title +"</div>\
		<p><img style=\"height:80px; margin:auto; display:block;\" src=\"https://i0.hdslb.com/bfs/face/ab805e58ea92ec4aa84e6c734afb332cd3340c87.jpg@100Q.webp@128w_128h_100Q_1c.webp\" /></p>\
		<p style=\"color:#373854; text-align:center; font-size:13px;\">感谢大家的陪伴和礼物( *¯ ³¯*)♡ㄘゅ</p>";




		var dummy = document.createElement("input");
		document.body.appendChild(dummy);
		dummy.setAttribute('value', text);
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
		alert("复制成功惹~");

	}

//////////////////////////////   旧的一号魔法按钮   /////////////////////////////////

	// function magic(){
	// 	var temptitle = "";
	// 	var title ="";
	// 	var i = 0;
	// 	var length = arr.length;
	// 	var segList = pySegSort(arr);
	// 	var letter = "";


	// 	for(i = 0; i < segList.length; i ++){

	// 		letter = segList[i].letter.toUpperCase();
	// 		title += "<div style=\"font-size: 17px; color: #333333; background-color: #f2f2f2; width: 20px; font-weight: bold; display: inline-block; padding: 0 5px; margin-right: 5px; margin-top:20px; text-align: center;\">" + letter  +"</div>" ;

	// 		var idx = 0 ;

	// 		segList[i].data.forEach(function(arr){

	// 			if(idx === segList[i].data.length - 1){     
	// 				temptitle += arr.split('-')[0];     
	// 			console.log("idx === 最后一个");

	// 			}else{
	// 				temptitle += arr.split('-')[0] + " 、 " ;
	// 				idx ++;
	// 			}
	// 		});

	// 		title += "<p style=\"display:inline; line-height:2;\">" + temptitle + "</p><br>";
	// 		temptitle = "";

	// 	};


	// 	var text = "<div style=\"overflow: auto; height: 220px; width: 98%; background-image: linear-gradient(to bottom right, #333333,#666666); color: #f2f2f2; font-size: 13px; margin: auto; padding: 0px 20px; line-height: 1.5;opacity:0.9;\"><p style=\"color: #333333; background-color: #f2f2f2; font-size: 15px; padding-left: 20px; display:block; width:180px;\"><strong>❤&nbsp;歌单持续更新中&hellip;&hellip;</strong></p>" + title +"</div>\
	// 	<p><img style=\"height: 80px; margin: auto; display: block;\" src=\"https://i0.hdslb.com/bfs/face/ab805e58ea92ec4aa84e6c734afb332cd3340c87.jpg@100Q.webp@128w_128h_100Q_1c.webp\" /></p>\
	// 	<p style=\"text-align: center;font-size:10px;\">感谢大家的陪伴 &gt; &lt;</p><p style=\"text-align:center;display:block;color:#333333;font-size:10px;margin-bottom:15px;\">群 951162656</p><a href=\"https://leila77.github.io/github.io/\";style=\"text-align: center; display:block; margin:auto; width:100px;background-color:#333333;color:#f2f2f2;text-decoration:none;font-weight:bold;font-size: 11px;padding:2px 2px; font-size:10px;\">网页版歌单戳我</a>";




	// 	var dummy = document.createElement("input");
	// 	document.body.appendChild(dummy);
	// 	dummy.setAttribute('value', text);
	// 	dummy.select();
	// 	document.execCommand("copy");
	// 	document.body.removeChild(dummy);
	// 	alert("复制成功惹~");

	// }




////////////////////////////// 魔法2号 /////////////////////////
	function magic2(){

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
					console.log("idx === 最后一个");

				}else{
					temptitle += arr.split('-')[0] + " 、 " ;
					idx ++;
				}
			});

			title += "<p style=\"display:inline; line-height:2;\">" + temptitle + "</p><br>";
			temptitle = "";

		};


		// var text = "<div style=\"display:block; width:100%;margin:auto;\"><div style=\"display:inline-block; float:left; width:10%;\"><img style=\"height: 80px; display: inline;\" src=\"https://i0.hdslb.com/bfs/face/ab805e58ea92ec4aa84e6c734afb332cd3340c87.jpg@100Q.webp@128w_128h_100Q_1c.webp\" /></div>\
		// <div style=\"display:inline-block; float:left; width:80%;\"><a target=\"_blank\" href=\"//shang.qq.com/wpa/qunwpa?idkey=2082e347d9daf8ea5568575ea9ffee772ddecbf35093a3ef860d41efccfc3233\" style=\"text-align:left;display:block;color:#333333;font-size:15px;\">欢迎加群→951162656</a>\
		// <a href=\"https://leila77.github.io/github.io/\";style=\"text-align: center; display:block; width:30%;background-color:#333333;color:#f2f2f2;text-decoration:none;font-weight:bold;font-size:15px;\">网页版歌单</a>\
		// <p style=\"text-align:left; font-size:15px; display:block;width:60%;\">♡感谢大家的礼物和陪伴♡</p></div></div>\
		// <div style=\"display:block; position:absolute; top: 200px;width: 98%; background-image: linear-gradient(to bottom right, #333333,#666666); color: #f2f2f2; font-size: 13px; margin: auto; padding: 0px 20px; line-height: 1.5;opacity:0.9;\">" + title +"</div>";

var text = "<div style=\"width:95%; margin-right:0;\"><img style=\"height: 80px; display: block; margin:1px auto;\" src=\"http://i1.hdslb.com/bfs/face/797eab41223490ec6d1acba6b93ac47d5dce8ade.jpg\" />\
		<div style=\"display:block; margin:auto; text-align: center;\"><a target=\"_blank\" href=\"//shang.qq.com/wpa/qunwpa?idkey=2082e347d9daf8ea5568575ea9ffee772ddecbf35093a3ef860d41efccfc3233\" style=\"margin:auto;width:20%;margin:auto;text-align:center;display:inline-block;background-color:#333333;color:#f2f2f2;text-decoration:none;font-size:13px;\">直播通知群951162656</a>\
		<a href=\"https://leila77.github.io/github.io/\";style=\"margin:auto;width:20%;margin:auto;text-align: center; display:inline-block;background-color:#333333;color:#f2f2f2;text-decoration:none;font-size:13px;\">网页版歌单</a></div>\
		<p style=\"margin:0 auto;text-align:center; font-size:13px; display:block;\">♡感谢大家的礼物和陪伴♡</p>\
		<p style=\"margin:auto;text-align:center; font-size:10px; display:block;\">v v v 以下是不太常更新的歌单 v v v</p>\
		<div style=\"display:block; position:absolute; top:140px; width:95%; background-image: linear-gradient(to bottom right, #333333,#666666); color: #f2f2f2; font-size: 13px; margin: auto; padding: 0px 20px; line-height: 1.5;opacity:0.9;\">" + title +"</div></div>";



		var dummy = document.createElement("input");
		document.body.appendChild(dummy);
		dummy.setAttribute('value', text);
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
		alert("复制成功惹~");

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

	// function getSchedule(){
	// 	var date = new Date();
	// 	var dayNum = date.getDay();
	// 	var day = "";
	// 	var liveTime = "";
	// 	var result = "";
	// 	console.log(day);

	// 	switch(dayNum) {
	// 		case 0:
	// 		day = "星期天";
	// 		liveTime = "下午3点左右直播~具体看群";
	// 		break;

	// 		case 1:
	// 		day = "星期一";
	// 		liveTime = "今天休息噢~~明天见下午4点见~！";
	// 		break;

	// 		case 2:
	// 		day = "星期二";
	// 		liveTime = "下午4点直播~";
	// 		break;

	// 		case 3:
	// 		day = "星期三";
	// 		liveTime = "下午4点直播~";
	// 		break;

	// 		case 4:
	// 		day = "星期四";
	// 		liveTime = "下午4点直播";
	// 		break;

	// 		case 5:
	// 		day = "星期五";
	// 		liveTime = "下午4点直播~";
	// 		break;

	// 		case 6:
	// 		day = "星期六";
	// 		liveTime = "下午4点直播~";
	// 		break;

	// 	}

	// 	result = "今天" + day + "(｡･ω･｡)" + liveTime;
	// 	return result;

	// }


	// function setSchedule(){
	// 	var sche = getSchedule();
	// 	document.getElementById("liveSchedule").innerHTML = sche;
	// }



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

function hasDuplicates(arr) {
  let findDuplicates = [];
  findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) != index);
  console.log(findDuplicates(arr).length);
  if (findDuplicates(arr).length > 0) {
    window.alert("歌单重复拉~!\n" + findDuplicates(arr));
  }
}
////////////////////////////////////// onLoad ///////////////////////////////////////////
	function run(){
		//modalOnLoad();
		hasDuplicates(arr);
		sortByTitle();
		setContent();
		// setSchedule();
		count();
	}

