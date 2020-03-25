(function ($, Coral) {
    'use strict';

    var DIALOG_CONTENT_SELECTOR = '.cmp-datasourcedemo__editor';
    var COLOR_INPUT_SELECTOR = '[data-datasourcedemo-edit-hook="backgroundColor"]';
    var OVERLAY_SELECTOR = 'coral-overlay';

    $(document).on('dialog-loaded', function () {

        // Find the overlay
        const $overlay = $([DIALOG_CONTENT_SELECTOR, COLOR_INPUT_SELECTOR, OVERLAY_SELECTOR].join(' '));

        // Adjust overlay positioning
        $overlay.toArray().forEach(overlay => {
            overlay.alignAt = Coral.Overlay.align.LEFT_BOTTOM;
            overlay.alignMy = Coral.Overlay.align.LEFT_TOP;
        });
    });

})(jQuery, Coral);
