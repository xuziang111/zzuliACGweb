var xxx
$(document).ready(function(){

	xxx = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Xenosaga",
			mp3:"Xenosaga.mp3",
			oga:"Xenosaga.mp3"
		},
		{
			title:"打上花火",
			mp3:"打上花火.mp3",
		},
		{
			title:"Cyber Sonnet",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
		},
		{
			title:"Tempered Song",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
		},
		{
			title:"Hidden",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
			title:"Lentement",
			free:true,
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
		},
		{
			title:"Lismore",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
		},
		{
			title:"The Separation",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
		},
		{
			title:"Beside Me",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
		},
		{
			title:"Bubble",
			free:true,
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
			title:"Stirring of a Fool",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
		},
		{
			title:"Partir",
			free: true,
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
		},
		{
			title:"Thin Ice",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
		}
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: false,
		keyEnabled: true
	});
});

$(".jp-list").on('click',function(){
	if($(".jp-playlist").hasClass('active')){
		$(".jp-playlist").removeClass('active')
	}else{
		$(".jp-playlist").addClass('active')
	}
})
let switchplay=0
$(".switch-play").on('click',function(){
	if(switchplay===0){
		$(".switch-play i:nth-child(2)").addClass('active')
		$(".switch-play i:nth-child(1)").removeClass('active')
		$("#jp_container_1").removeClass('active')
		switchplay++
	}else{
		$(".switch-play i:nth-child(2)").removeClass('active')
		$(".switch-play i:nth-child(1)").addClass('active')
		$("#jp_container_1").addClass('active')
		switchplay--
	}

})
$('.jp-cir').on('mousedown',function(e){
	console.log(e)

	$('body').on('mousemove',function(e){
		let temp = e.pageX-175
		if(temp<0){
			$("#jquery_jplayer_1").jPlayer("playHead", temp)
			temp = 0+'%'
		}else if(temp>129){
			temp = 99.9
			$("#jquery_jplayer_1").jPlayer("playHead", temp)
			temp = temp+'%'
			console.log(temp)
		}else{
			temp = temp/130*100
			console.log(temp)
			$("#jquery_jplayer_1").jPlayer("playHead", temp)
			temp = temp+'%'
		}
		$('.jp-cir').css('left',temp)
	})
	$('body').on('mouseup',function(e){
		$('body').unbind('mousemove')
	})
})

$('.jp-seek-bar').on('click',(e)=>{
    let temp = e.pageX-175
		if(temp<0){
			$("#jquery_jplayer_1").jPlayer("playHead", temp)
			temp = 0+'%'
		}else if(temp>129){
			temp = 99.9
			$("#jquery_jplayer_1").jPlayer("playHead", temp)
			temp = temp+'%'
			console.log(temp)
		}else{
			temp = temp/130*100
			console.log(temp)
			$("#jquery_jplayer_1").jPlayer("playHead", temp)
			temp = temp+'%'
		}
		$('.jp-cir').css('left',temp)
})