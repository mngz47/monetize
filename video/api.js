     
e('yt_tv').style.height = (e('yt_tv').offsetWidth*220/400)+'px';
    
e('yt_tv').onresize = function(){
e('yt_tv').style.height = (e('yt_tv').offsetWidth*220/400)+'px';
    };



var video_index = 0;

if(getCookie("video_index")){
video_index = parseInt(getCookie("video_index"));
}


var videos = 
[
	'https://www.youtube.com/embed/NK3DWlgCv14',
	'https://www.youtube.com/embed/7QKCJW8hCbQ',
	'https://www.youtube.com/embed/EU_P_WEsYug',
	'https://www.youtube.com/embed/pw2rfk4BUOo',
	'https://www.youtube.com/embed/pZROcOdfnBg',
	'https://www.youtube.com/embed/e9mT2Hrc-sg',
	'https://www.youtube.com/embed/yk4l24fq6g8',
	'https://www.youtube.com/embed/ysQFgJuyo_w',
	'https://www.youtube.com/embed/VF_H9xse6FY',
	'https://www.youtube.com/embed/WpHd3HD9Jqw',
	'https://www.youtube.com/embed/A1B95yFU2kc',
	'https://www.youtube.com/embed/-ByIx0s1Y7Y',
	'https://www.youtube.com/embed/ZXnXq9aiJ9A',
	'https://www.youtube.com/embed/R__rDDIDTDo',
	'https://www.youtube.com/embed/g1Si46GmvDs',
	'https://www.youtube.com/embed/SDxC5JlXvBc',
	'https://www.youtube.com/embed/HtqXE1LB9H8',
	'https://www.youtube.com/embed/ZN_J6n9lpK4',
	'https://www.youtube.com/embed/mxXAN9cQawA',
	'https://www.youtube.com/embed/RBlp_BwALH0',
	'https://www.youtube.com/embed/xr09cilI-yI',
	'https://www.youtube.com/embed/8Bl9YZW9Zfk',
	'https://www.youtube.com/embed/eZ6vpWpMlPI',
 	'https://www.youtube.com/embed/PX6iKC9FW7w',
	'https://www.youtube.com/embed/ztbU1NVRJYE',
	'https://www.youtube.com/embed/NHdD5ilUg1s',
	'https://www.youtube.com/embed/lcSJs95cEFM',
	'https://www.youtube.com/embed/B4RgQEuzcLY',
	'https://www.youtube.com/embed/dB3Bdr9t0FY',
	'https://www.youtube.com/embed/57kS-89h9-E',
'https://www.youtube.com/embed/HjDiASNwExU',
'https://www.youtube.com/embed/B4RgQEuzcLY',
'https://www.youtube.com/embed/4uU7UIrSFlg',
'https://www.youtube.com/embed/T4vuh_kQvcA',
'https://www.youtube.com/embed/bDqhFfTObsw',
'https://www.youtube.com/embed/2HSbisFCLrk',
'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fproductlists.co.za%2Fvideos%2F830921624389241%2F&show_text=false&width=560',
'https://www.youtube.com/embed/57kS-89h9-E',
'https://www.youtube.com/embed/Joi5lIH3E4g',
'https://www.youtube.com/embed/XDv6u7Pw3m4',
'https://www.youtube.com/embed/lmrqxiq83pM'
];

e('yt_tv').src = videos[video_index];
	
e('yt_title').innerHTML = e('amazon_products').getElementsByTagName('span')[0].innerHTML;
e('group_four_affiliate_video_dd').innerHTML = e('amazon_products').getElementsByTagName('p')[0].innerHTML;

function nextVideo(){
	if(video_index<(videos.length-1)){
		video_index+=1;
		 setCookie("video_index", video_index, 30);
		e('yt_tv').src = videos[video_index];
		e('yt_title').innerHTML = e('amazon_products').getElementsByTagName('span')[video_index].innerHTML;
		e('group_four_affiliate_video_dd').innerHTML = e('amazon_products').getElementsByTagName('p')[video_index].innerHTML;
	
	}else{
		video_index=0;
		setCookie("video_index", video_index, 30);
		e('yt_tv').src = videos[video_index];
		e('yt_title').innerHTML = e('amazon_products').getElementsByTagName('span')[video_index].innerHTML;
		e('group_four_affiliate_video_dd').innerHTML = e('amazon_products').getElementsByTagName('p')[video_index].innerHTML;
	}
}
