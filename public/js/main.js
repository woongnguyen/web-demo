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
            this.numeffect();
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
        numeffect:function(){
            function easeOutExpo(x) {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
              }
              
              function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
                const startTime = performance.now()
                function updateNumber(currentTime) {
                  const elapsedTime = currentTime - startTime
                  if (elapsedTime > duration) {
                    callback(finalNumber)
                  } else {
                    const timeRate = (1.0 * elapsedTime) / duration
                    const numberRate = easeOutExpo(timeRate)
                    const currentNumber = Math.round(numberRate * finalNumber)
                    callback(currentNumber)
                    requestAnimationFrame(updateNumber)
                  }
                }
                requestAnimationFrame(updateNumber)
              }
              
              document.addEventListener('DOMContentLoaded', function () {
                animateNumber(4530, 3000, 0, function (number) {
                  const formattedNumber = number.toLocaleString()
                  document.getElementById('cont1').innerText = formattedNumber
                })
                
                animateNumber(2350, 3000, 0, function (number) {
                  const formattedNumber = number.toLocaleString()
                  document.getElementById('cont2').innerText = formattedNumber
                })
                
                animateNumber(200, 3000, 0, function (number) {
                  const formattedNumber = number.toLocaleString()
                  document.getElementById('cont3').innerText = formattedNumber
                })
              })
        }
    };

})(jQuery);
