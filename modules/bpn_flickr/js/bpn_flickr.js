var bpnFlickrCount = 0;

(function ($) {

  Drupal.behaviors.bulkphotonode = {
  
    attach:function(context, settings) {

      bpnFlickrCount = parseInt($('.bpn-flickr-count').text());

      $('#edit-photostream input[type=checkbox]').change(function() {
        
        if ($(this).is(':checked')) {
          bpnFlickrCount++; 
        }
        else {
          bpnFlickrCount--;
        }

        $('.bpn-flickr-count').text(bpnFlickrCount);

      });

    } // attach
  
  } // Drupal.behaviors.bulkphotonode
  
})(jQuery);