$(document).ready(function () {
    var blocks = $('.news-item__info__date');

    itemInfoDateBlocksDisabler(blocks);

    // new ResizeSensor(blocks, function(){
    //     itemInfoDateBlocksDisabler(blocks);
    // });
});

function itemInfoDateBlocksDisabler(blocks) {
    var maxHeight = 18;
    blocks.each(function() {
        var self = $(this);
        var infoSection = self.children('.news-item__info__section');
        if (self.height() > maxHeight) {
            // var infoTime = self.children('.news-item-info__time');
            // var infoDate = self.children('.info-date');
            // infoTime.css('display', 'none');
            // infoDate.css('display', 'none');

            infoSection.css('border', 'none');
            self.children('span').css('display', 'none');
        } else {
            infoSection.css('border-right', '1px solid #a69c9c');
            self.children('span').css('display', 'inline-flex');
        }
    });
}

(function () {
   var $headMenu = $('#head_menu');
   var $headLinks = $headMenu.find('[data-target]');

    $headLinks.each(function (index, item) {
        var $em = $(item);
        var target = $em.data('target');
        var $target = $headMenu.find(target);
        $em.hover(
            function () {
                $em.addClass('header-menu__link_dropdown-action_active');
                $target.addClass('header-submenu_active');
            },
            function () {
                $em.removeClass('header-menu__link_dropdown-action_active');
                $target.removeClass('header-submenu_active');
            }
        )
    });
})();