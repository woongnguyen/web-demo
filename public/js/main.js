"use strict";
(function($) {
    $(document).ready(function() {
        taxi.init();
    });
    var taxi = {
        globalvariable:false,
        init: function(){
            this.registerSubmit();
            this.initScrollTop();
        },
        registerSubmit: function(){
            $('#form-dang-ky').submit( function(e){
                e.preventDefault();
                let tp = $("#tp").children('option:selected').val();
                let ten = $("#ten").val();
                let cmnd = $("#cmnd").val();
                let sdt = $("#sdt").val();
                let bien = $("#bien").val();
                let nam = $("#nam").val();
                let loai = $("#loai").children('option:selected').val();

                if (tp == undefined || ten == undefined || cmnd == undefined || sdt == undefined || bien == undefined || loai == undefined ){
                alert('vui lòng điền đầy đủ thông tin trước khi gửi !')
                }else{
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfMx2kzpsD_c_MPHVm7At49N64I-f6cNhlAvNy6Zk4WktV_fA/formResponse?",
                    data: {
                    "entry.2137990500": tp,
                    "entry.839146276": ten,
                    "entry.1208534843": cmnd,
                    "entry.2048904658": sdt,
                    "entry.295418787":bien,
                    "entry.826883964":nam,
                    "entry.525231553":loai
                    },
                    type: "POST",
                    dataType: "jsonp",
                    success: function (d) { },
                    error: function (x, y, z) {
                    $('.alert-box').show();
                    $('.modal').modal('hide');
                    $('.alert-box').fadeIn(500).delay(5000).fadeOut(500);
                    }
                });
                return false;
                }
            });
        },
        initScrollTop: function() {
            $('#dang-ky').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        },
    };

})(jQuery);
