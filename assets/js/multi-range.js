var $range = $("#demo_4");
var $inputFrom = $(".from");
var $inputTo = $(".to");
var instance;
var min = '00:00';
var max = '12:12';
var from = '00:00';
var to = '12:12';
var step = '0:30';

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: from,
    to: to,
    step: step,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
});

instance = $range.data("ionRangeSlider");
    
function updateInputs (data) {
    from = data.from;
    to = data.to;
    step = data.step;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}
    
$inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

});
    
$inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);
});

// SEE MORE AND LESS EVENT
const seeless = document.querySelector('.btn-showless');
const showmore = document.querySelector('.btn-showall');

seeless.addEventListener('click', toggleSeeLess);
showmore.addEventListener('click', toggleMore);

function toggleSeeLess() {
    const tagbox = document.querySelector('.tag-buttons');

    if(tagbox.classList.contains('show')) {
        tagbox.classList.remove('show');
        seeless.textContent = 'See more';
    } else {
        tagbox.classList.add('show');
        seeless.textContent = 'See less';
    }
}

function toggleMore() {
    const libraryBox = document.querySelector('.library-buttons');

    if(libraryBox.classList.contains('show')) {
        libraryBox.classList.remove('show');
        showmore.textContent = 'See more';
    } else {
        libraryBox.classList.add('show');
        showmore.textContent = 'See less';
    }
}

const collapseBtn = document.querySelector('.btn-collapse');
const collapse = document.querySelector('.collapse');


collapseBtn.addEventListener('click', () => {
    if(collapseBtn.classList.contains('active')) {
        collapseBtn.classList.remove('remove');
    } else {
        collapseBtn.classList.add('active');
    }
});

// $(document).ready(function () {
//   $('#sidebarMenu').hide();
//   $('#prantmanue').on('click', function() {
//     $('#sidebarMenu').toggle(200);
//   });
//     $('.collapse').on('show.bs.collapse', function () {
//         $('.collapse.show').each(function () {
//             $(this).collapse('toggle');
//         });
//     });
// });