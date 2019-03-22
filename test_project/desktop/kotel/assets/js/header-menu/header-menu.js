

(function () {
    var $headerMenu = $('#head_menu');
    var $headLinks = $headerMenu.find('[data-target]');
    var $headerSubmenu = $('.header-submenu');
    // mouse hover on submenu
    var submenuEnter = false;
    $headerSubmenu.on('mouseenter', function() {
        submenuEnter = true;
    });
    $headerSubmenu.on('mouseleave', function() {
        submenuEnter = false;
    });
    $headLinks.each(function (index, item) {
        var $em = $(this);
        $em.bind('mouseenter', function(e) {
            var linkEnter = true;
            var target = $em.data('target');
            var $target = $headerMenu.find(target);
            $em.on('mouseleave', function() {
                linkEnter = false;
            });

            setTimeout(function() {
                // menu open
                if (linkEnter) {
                    $em.addClass('header-menu__link_dropdown-action_active');
                    $target.addClass('header-submenu_active');
                    //menu close
                    $em.on('mouseleave', function() {
                        setTimeout(function() {
                            if (!linkEnter && !submenuEnter) {
                                $em.removeClass('header-menu__link_dropdown-action_active');
                                $target.removeClass('header-submenu_active');
                            }
                            else {
                                $headerSubmenu.on('mouseleave', function() {
                                    setTimeout(function() {
                                        if (!linkEnter && !submenuEnter) {
                                            $em.removeClass('header-menu__link_dropdown-action_active');
                                            $target.removeClass('header-submenu_active');
                                        }
                                    }, 100);
                                });
                            }
                        }, 100);
                    });
                }
            }, 100);
        });
    });
})();