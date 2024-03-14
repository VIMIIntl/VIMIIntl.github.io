---
---
$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var subject = encodeURIComponent("VIMI Contact Form Request")

      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var name = $("input#name").val();

      var body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\n\nMessage:\n${message}`)
      
	  var url = `mailto:{{ site.email }}?subject=${subject}&body=${body}`;

      window.open(url)
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});