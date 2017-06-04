//drop-down Menu
function menu() {
	var nav = document.getElementById('navi'); 
	var li = nav.getElementsByTagName('li'); 
	for (var i=0; i<li.length; i++){  
		li[i].onmouseover = function(){  
			
			var sub = this.getElementsByTagName('ul');
			for (var j=0; j<sub.length; j++){
				if (j==0){
					sub[j].style.display = 'block';
					sub[j].style.color = 'yellow'; 

					break;
				}
			}
		}
		li[i].onmouseout = function(){
			var sub = this.getElementsByTagName('ul');
			for (var j=0; j<sub.length; j++){
				if (j==0){
					sub[j].style.display = 'none';
					break;
				}
			}
		}
	}


	$(function(){
		$('.bxslider').bxSlider({
			auto: true,
		});
	});

};

window.onload = function(){menu();}