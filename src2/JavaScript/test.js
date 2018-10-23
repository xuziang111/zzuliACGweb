


  $('#anniu').click(function(){
    $('.yincang').addClass('active')
    $('.container > img').cropper({
        aspectRatio:1/1,
        movable:true,
        minContainerWidth:200,
        minContainerHeight:127,
        preview:$(".img-preview"),
        dragMode:'move',
        crop: function(e) {
          // Output the result data for cropping image.

        }
      });
  })