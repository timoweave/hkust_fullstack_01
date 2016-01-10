window.onload = function() {
    
    function dating_web_site_preview_img(file_css_selector, preview_elem_id)
    {
        var files = document.querySelectorAll(file_css_selector);
        files[0].addEventListener("change", function(e) {
            if(this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) { document.getElementById(preview_elem_id).setAttribute("src", e.target.result); }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }
    
    dating_web_site_preview_img("input[type=file]", "preview")
}
