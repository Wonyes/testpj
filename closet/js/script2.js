$(document).ready(function () {
    $('.slick-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick-wrapper2').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.lib-item').hover(function () {
        if (!($(this).index() == 1)) {
            // 마우스가 들어올때 : hover  function1
            // 두번째 아이템이 아니면 // !(두번째 아이템)
            // 나한테 active를 넣어주고, 두번째 아이가 가지고 있는 active를 지워준다
            $(this).addClass('active');
            $('.lib-item.item-dress').removeClass('active');
        }
    }, function () {
        if (!($(this).index() == 1)) {
            // 마우스가 떠날때 두번째 아이템이 아니면 
            // 나한테 있는 atvie를 지워주고
            // 두번때 아이템한테만 active를 넣어준다
            $(this).removeClass('active');
            $('.lib-item.item-dress').addClass('active');
        } else {
            // 마우스가 떠날때 두번째 아이템이면 active를 넣어준다
            $(this).addClass('active');
        }
    });
    $('.lib-item').hover(function () {
        if (!($(this).index() == 1)) {
            // 마우스가 들어올때 : hover  function1
            // 두번째 아이템이 아니면 // !(두번째 아이템)
            // 나한테 active를 넣어주고, 두번째 아이가 가지고 있는 active를 지워준다
            $(this).addClass('active');
            $('.lib-item.item-pants').removeClass('active');
        }
    }, function () {
        if (!($(this).index() == 1)) {
            // 마우스가 떠날때 두번째 아이템이 아니면 
            // 나한테 있는 atvie를 지워주고
            // 두번때 아이템한테만 active를 넣어준다
            $(this).removeClass('active');
            $('.lib-item.item-pants').addClass('active');
        } else {
            // 마우스가 떠날때 두번째 아이템이면 active를 넣어준다
            $(this).addClass('active');
        }
    })

    $('ul.category-list li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.category-list li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })
    $('.slick--slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true
    });
});
// document 사용 x 
var mixerOption = {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
};


var mixer = mixitup('.item-list');