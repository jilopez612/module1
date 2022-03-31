(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('.owl-carousel').owlCarousel({
        stagePadding: 90,
        loop:true,
        margin:20,
        nav:true,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        center:true,
        autoHeight:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3,
                nav:true
            }
        }
    })


})(jQuery);


function formatRows(main, prefer, common, main2, prefer2, common2) {
  return '<tr><td class="col-xs-3"><input type="text" value="' +main+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +prefer+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +common+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +main2+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +prefer2+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +common2+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-1 text-center"><a href="#" onClick="deleteRow(this)">' +
         '<i class="fa fa-trash-o" aria-hidden="true"></a></td></tr>';
};

function formatRows3(main, prefer, common, main2) {
  return '<tr><td class="col-xs-3"><input type="text" value="' +main+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +prefer+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +common+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +main2+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-1 text-center"><a href="#" onClick="deleteRow(this)">' +
         '<i class="fa fa-trash-o" aria-hidden="true"></a></td></tr>';
};

function formatRows2(main, prefer, common) {
  return '<tr><td class="col-xs-3"><input type="text" value="' +main+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +prefer+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-3"><input type="text" value="' +common+ '" class="form-control editable" style="text-align:center;"/></td>' +
         '<td class="col-xs-1 text-center"><a href="#" onClick="deleteRow(this)">' +
         '<i class="fa fa-trash-o" aria-hidden="true"></a></td></tr>';
};

function deleteRow(trash) {
  $(trash).closest('tr').remove();
};

function addRow() {
  var main = $('.addMain').val();
  var preferred = $('.addPrefer').val();
  var common = $('.addCommon').val();
  var main2 = $('.addMain2').val();
  var prefer2 = $('.addPrefer2').val();
  var common2 = $('.addCommon2').val();
  $(formatRows(main,preferred,common,main2,prefer2,common2)).insertAfter('#addRow');
  $(input).val('');
}
$('.addBtn').click(function()  {
  addRow();
});

function addRow3() {
  var main = $('.addMain').val();
  var preferred = $('.addPrefer').val();
  var common = $('.addCommon').val();
  var main2 = $('.addMain2').val();
  $(formatRows3(main,preferred,common,main2)).insertAfter('#addRow3');
  $(input).val('');
}
$('.addBtn3').click(function()  {
  addRow3();
});


function addRow2() {
  var main = $('.addMain').val();
  var preferred = $('.addPrefer').val();
  var common = $('.addCommon').val();
  $(formatRows2(main,preferred,common)).insertAfter('#addRow2');
  $(input).val('');
}
$('.addBtn2').click(function()  {
  addRow2();
});

// Get elements
const buttons = document.querySelectorAll(".button");
const title = document.querySelector(".title2");
const feedback = document.querySelector(".feedback");
const content = feedback.querySelector(".content2");

const giveRating = (event) => {
  // Button that was clicked
  const element = event.currentTarget;
  // Current value (negative or positive)
  const value = element.value;
  // Emoji of the button that was clicked
  const emoji = element.querySelector(".emoji");
  // If the current button is already pressed, return early
  if (element.classList.contains("selected")) {
    return;
  }
  // Remove selected statuses (class ".selected")
  buttons.forEach((button) => button.classList.remove("selected"));
  // Add selected class to the button that was clicked
  element.classList.add("selected");
  // Animate emoji within the button
  emoji.classList.add("emphasize");
  // Show proper feedback based on button value
  showFeedback(value);
  emoji.addEventListener("transitionend", () => {
    // Remove emphasis animation
    emoji.classList.remove("emphasize");
    // Defocus button
    element.blur();
  });
};

const createContent = (value) => {
  if (value === "positive") {
    content.innerHTML = `
          <p style="color:#090E35">Nice! Any other comments or suggestions that could improve this course?</p>
          <textarea rows="3" class="field" placeholder="Type your suggestions and comments here."></textarea>
          <button class="submit">Submit</button>
          `;
  } else {
    content.innerHTML = `
          <p style="color:#090E35">Sorry to hear that! Please leave a suggestion on how we can improve this delivery.</p>
          <textarea rows="4" class="field" placeholder="Type your suggestions and comments here."></textarea>
          <button class="submit">Submit</button>
          `;
  }
};

const showFeedback = (value) => {
  createContent(value);
  if (content.dataset.value === value) {
    return;
  } else {
    content.dataset.value = value;
  }
  // Hide content while transitioning
  content.classList.remove("visible");
  // Set feedback container height to be the same as the height of the current content
  feedback.style.height = `${content.scrollHeight}px`;
  // Grab top margin from title and add it to feedback container
  feedback.style.marginTop = getComputedStyle(title).marginBottom;
  feedback.addEventListener("transitionend", () => {
    // Show content after transition has ended
    content.classList.add("visible");
  });
};

// Listen for buttons
buttons.forEach((button) => {
  button.addEventListener("click", giveRating);
});
