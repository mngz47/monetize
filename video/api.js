     
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
	'https://www.youtube.com/embed/UsNllE9PM0M',
	'https://www.youtube.com/embed/xnJu1pIwIos',
	'https://www.youtube.com/embed/HDXyZV-SP34',
	'https://www.youtube.com/embed/hybEUOFwi0s',
	'https://www.youtube.com/embed/bMTdSJtII5w',
	'https://www.youtube.com/embed/t46Jx6dunYE',
	'https://www.youtube.com/embed/kl3YyOdF7SQ',
	'https://www.youtube.com/embed/vqozy_sohYg',
	'https://www.youtube.com/embed/Sgfkpr6qUrA',
	'https://www.youtube.com/embed/tn9_TqyNSak',
	
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

var yt_titles = 
[
	'New York Session US30 Trading',
	'Lithuania vs. ZA | Nice Try',
	'Skipped stage 2 and 3 ended up in stage 6 | flower snake',
	'Few missing links on my roulette strategy',
	'Mexico vs. ZA on chess.com | ran out of ideas',
	'Stuck on stage 3 | flower snake',
	'Struggling with 21 BlackJack',
	'USA vs. ZA on chess.com | time ran out',
	'Stuck on stage 3 reached stage 5 twice | flower snake',
	'Double my account on roulette',
	
	'Nepal vs. ZA | clouded judge until I ran out of time',
	'Stuck on stage 3 formulating movement | classic flower snake',
	'Won the houses price in the first 46 seconds | Pamel Slots',
	'Japan vs. ZA on chess.com | won last 57 seconds',
	'Ended up on stage 7 on the 29th minute | Classic Flower Snake',
	'Turkey vs. ZA on chess.com | resigned after a good fight',
	'Stuck on stage 2 but in the end skipped 2 stages | Classic Flower Snake',
	'India vs. ZA on chess.com | gave a good fight before forfeit',
	'After skipping stage 2 and 5 I made it to the blue obstacle stage 6 | Classic Flower Snake',
	'India vs. ZA on chess.com | 30 min of torture',
	'Classic Flower Snake P5 | Reached Stage 5',
	'India(rishi_788) vs. ZA on chess.com | quickly resigned',
	'classic flower snake p4 | reached stage 3',
	'Costa Rica(sheepwar29) vs. ZA on chess.com | quickly resigned',
	'classic flower snake p3 | reached stage 4',
	'Turkey vs. ZA on chess.com | total destruction',
	'Classic Snake Game Part 2 | Flying Cam Cast | Stuck On Stage 1',
	'India vs ZA on chess.com - Exploring Nature Challenge',
	'South Africa vs. Japan on Chess.com - Dealing with Online Harassment 😞',
	'Flower Snake Game - All The Way To Stage 3 - Challenge Prep',
	'Why South African Forex Traders Need Quants',
	'A Skill Everyone Should Have (bank leverage), Get NYDF Funding',
	'Specialized Software Using Framework and API of Established Businesses',
 	'I Stopped Doing My Homework To Focus On Girls At 6th Grade 😅',
	'Creating A Travel Website With sites.google.com — In An Hour — For Free',
	'My First Github Repository (Black Box)',
	'PHP Remote Text Writer/Editor Github Repository',
	'Kasi Nametest — Testing Ten South African Girl Names',
	'F Snake Easy vs. Hard Mode',
	'How to generate your CV in 3 minutes',
'Introduction To Productlists',
'Kasi Nametest',
'Recreational Activies In Newcastle South Africa',
'F-Snake Classic Productlists Game',
'F-Snake Classic Productlists Game',
'Touch Bistro Restaurant POS',
'Touch Bistro Digital Menu and Payment',
'CV Engine',
'Stop Paying For Traffic.',
'Jungle Scout',
'Adzooma'
];

var yt_descriptions = 
[       
	'-<a href=https://www.youtube.com/watch?v=UsNllE9PM0M >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=xnJu1pIwIos >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=HDXyZV-SP34 >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=hybEUOFwi0s >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=bMTdSJtII5w >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=t46Jx6dunYE >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=kl3YyOdF7SQ >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=vqozy_sohYg >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=Sgfkpr6qUrA >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=tn9_TqyNSak >Video</a>',
	
	'-<a href=https://www.youtube.com/watch?v=NK3DWlgCv14 >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=7QKCJW8hCbQ >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=EU_P_WEsYug >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=pw2rfk4BUOo >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=pZROcOdfnBg >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=e9mT2Hrc-sg >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=yk4l24fq6g8 >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=ysQFgJuyo_w >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=VF_H9xse6FY >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=WpHd3HD9Jqw >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=A1B95yFU2kc >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=-ByIx0s1Y7Y >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=ZXnXq9aiJ9A >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=R__rDDIDTDo >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=g1Si46GmvDs >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=SDxC5JlXvBc >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=HtqXE1LB9H8 >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=ZN_J6n9lpK4 >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=mxXAN9cQawA >Video</a>',
	'-<a href=https://www.youtube.com/watch?v=RBlp_BwALH0 >Video</a>',
	'Quantitative trading, or “quant” trading, is a sophisticated approach that involves using mathematical models and algorithms to analyze vast datasets and execute trading strategies. In the dynamic world of finance, these quant machines rely on a myriad of fundamental indicators to make buy and sell decisions. <a href=https://mngz636.medium.com/why-south-african-forex-traders-need-quants-d0cfb5f77fe6 >Article</a>-<a href=https://www.youtube.com/watch?v=xr09cilI-yI >Video</a>',
	'Understanding the intricacies of banking, loans, and financial planning is indeed crucial for navigating the complex landscape of personal and business finance. <a href=https://mngz636.medium.com/a-skill-everyone-should-have-bank-leverage-get-nydf-funding-85c3797c53a3 >Article</a>-<a href=https://www.youtube.com/watch?v=8Bl9YZW9Zfk >Video</a>',
	'Why start from square one when you can ride the wave of success with the giants? Imagine this: instead of painstakingly building your own audience, leverage the colossal user base of industry titans to showcase your skills and skyrocket your success. <a href=https://mngz636.medium.com/specialized-software-using-framework-and-api-of-established-businesses-5620648545ab >Article</a>-<a href=https://www.youtube.com/watch?v=eZ6vpWpMlPI >Video</a>',
 	'It all began when the complexities of reading in English became a formidable obstacle in my academic path. Frustration and difficulty led me to make a radical decision — I stopped doing homework. It was a bold move, one that reflected a desire to redefine my priorities and focus on what I believed truly mattered. <a href=https://mngz636.medium.com/i-stopped-doing-my-homework-to-focus-on-girls-at-6th-grade-6048a1ca52f1 >Article</a>-<a href=https://www.youtube.com/watch?v=PX6iKC9FW7w >Video</a>',
	'Unlock the power of cutting-edge web building features without breaking the bank! Say goodbye to the financial woes and coding setbacks with sites.google.com — your ticket to free, stable hosting that is both sophisticated and reliable. <a href=https://mngz636.medium.com/creating-a-travel-website-with-sites-google-com-in-an-hour-for-free-97b5177a91c7 >Article</a>-<a href=https://www.youtube.com/watch?v=ztbU1NVRJYE >Video</a>',
	'In the wake of a disheartening experience where all my hard work was pilfered and erased, I made a resolute decision to take control of my code and embrace the collaborative power of GitHub. It was time to turn the page and navigate the world of version control, learning that sometimes, joining the ranks of collaborators is the key to safeguarding ones creations. As the saying goes, “If you can not beat them, join them.” <a href=https://mngz636.medium.com/my-first-github-repository-black-box-a50b4f93b6ab >Article</a>-<a href=https://www.youtube.com/watch?v=NHdD5ilUg1s >Video</a>',
	'Now, here is the deal: We are not just building features; we are crafting an experience. An experience that screams innovation, collaboration, and a touch of developer genius. We are inviting you to be a part of this journey — to shape, enhance, and bring your unique skills to the table. <a href=https://mngz636.medium.com/php-remote-text-writer-editor-github-repository-9a7014362aa1 >Article</a>-<a href=https://www.youtube.com/watch?v=lcSJs95cEFM >Video</a>',
	'"Kasi Namatest" sounds like an incredibly engaging and culturally resonant game! Drawing inspiration from the popular name tests on platforms like Facebook is a clever move, given the widespread interest people have in exploring aspects of their own identity. <a href=https://mngz636.medium.com/kasi-nametest-testing-ten-south-african-girl-names-b25c1ac92b92 >Article</a>-<a href=https://www.youtube.com/watch?v=B4RgQEuzcLY >Video</a>',
	'In the midst of the challenging times brought about by Covid-19, I found myself unexpectedly without my employer. Before he passed away, his cryptic words lingered, "I can help you, only mom F can tell you the truth — it is the snake." <a href=https://mngz636.medium.com/f-snake-easy-vs-hard-mode-d09ac064d4b0 >Article</a>-<a href=https://www.youtube.com/watch?v=dB3Bdr9t0FY >Video</a>',
	'Embark on a hassle-free journey to create your professional CV in just three minutes — for free! Drawing from my experience at Philippi Browns Farm Internet Café, where I diligently crafted over 100 CVs, I have come to understand the crucial need for a service like this, especially for individuals stepping into the job market. <a href=https://mngz636.medium.com/how-to-generate-your-cv-in-3-minutes-b55e452f90ab >Article</a>-<a href=https://www.youtube.com/watch?v=57kS-89h9-E >Video</a>',
'Productlists is a tech firm working towards solutions to free the youth. Enjoy our instant game service, product listings and reviews.',
'South African local instant game - enter your name and find out with Mzansi kasi you are from.',
'Get the latest business and tourist information about Newcastle. Learn about Accommodation, Job Recruitment and more.',
'Play our classic snake game with seven stages. Overcome the obstacle and score as much points as you can.',
'Play our classic snake game. As you progress in the stages the obstacle moves faster and faster.',
'Replace your printed out food menu with a digital tablet menu able to send orders directly to kitchen without calling for waiter.',
'Collect more information during payment so you can resell your specials to frequent customers.',
'Generate Your CV For FREE in 3 minutes and send it to your email.',
'Saas and other large companies that need to pay for advertising on a monthly basis can create a content division in their businesses.',
'Use the best tools to sell on Amazon, optimize your listing - access best selling keywords and automatic repricing.',
'Automate and manage all your Google, Facebook and Microsoft Ads in one place. Award winning App.'
];



e('yt_tv').src = videos[video_index]+'?autoplay=1';
	
e('yt_title').innerHTML = e('amazon_products').getElementsByTagName('span')[0].innerHTML;
e('group_four_affiliate_video_dd').innerHTML = e('amazon_products').getElementsByTagName('p')[0].innerHTML;

function nextVideo(){
	if(video_index<(videos.length-1)){
		video_index+=1;
		 setCookie("video_index", video_index, 30);
		e('yt_tv').src = videos[video_index];
		e('yt_title').innerHTML = yt_titles[video_index];//e('amazon_products').getElementsByTagName('span')[video_index].innerHTML;
		e('group_four_affiliate_video_dd').innerHTML = yt_descriptions[video_index];//e('amazon_products').getElementsByTagName('p')[video_index].innerHTML;
	
	}else{
		video_index=0;
		setCookie("video_index", video_index, 30);
		e('yt_tv').src = videos[video_index];
		e('yt_title').innerHTML = e('amazon_products').getElementsByTagName('span')[video_index].innerHTML;
		e('group_four_affiliate_video_dd').innerHTML = e('amazon_products').getElementsByTagName('p')[video_index].innerHTML;
	}
}

nextVideo();
