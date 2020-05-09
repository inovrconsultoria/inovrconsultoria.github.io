var panorama1, panorama2, panorama3, panorama4, viewer, container, infospot;

var bar = document.querySelector( '#bar' );

function onProgressUpdate ( event ) {
  var percentage = event.progress.loaded/ event.progress.total * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100){
    bar.classList.add( 'hide' );
    setTimeout(function(){
      bar.style.width = 0;
    }, 1000);
  }
}

container = document.querySelector( '#container' );

panorama1 = new PANOLENS.ImagePanorama( 'EX1.jpg' );
panorama1.addEventListener( 'progress', onProgressUpdate );

panorama2 = new PANOLENS.ImagePanorama( 'EX3.jpg' );
panorama2.addEventListener( 'progress', onProgressUpdate );

panorama3 = new PANOLENS.ImagePanorama( 'teste.jpg' );
panorama3.addEventListener( 'progress', onProgressUpdate );

panorama4 = new PANOLENS.ImagePanorama( 'teste.jpg' );
panorama4.addEventListener( 'progress', onProgressUpdate );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );

panorama1.add( infospot );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama1, panorama2, panorama3, panorama4 );

// Maunal Set Panorama
var button1 = document.querySelector( '#btn1' );
var button2 = document.querySelector( '#btn2' );
var button3 = document.querySelector( '#btn3' );
var button5 = document.querySelector( '#btn5' );

// Enter panorama when load completes
function onButtonClick( targetPanorama ) {
  bar.classList.remove( 'hide' );
  viewer.setPanorama( targetPanorama );
}

button1.addEventListener( 'click', onButtonClick.bind( this, panorama1 ) );

button2.addEventListener( 'click', onButtonClick.bind( this, panorama2 ) );

button3.addEventListener( 'click', onButtonClick.bind( this, panorama3 ) );

button5.addEventListener( 'click', onButtonClick.bind( this, panorama4 ) );