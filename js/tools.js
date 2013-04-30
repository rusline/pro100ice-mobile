$(document).ready(function() {

        // оформление заказа
        $('.order-form-complect-row').each(function() {
            $(this).find('.order-form-complect-count-val input').val($(this).find('.order-form-complect-count-val span').html());
            if ($(this).find('.order-form-complect-count-val input').val() == '0') {
                $(this).addClass('order-form-complect-row-dis');
            }
        });

        $('.order-form-complect-count-minis').click(function() {
            var curItem = $(this).parents().filter('.order-form-complect-row');
            var curCount = Number(curItem.find('.order-form-complect-count-val input').val());
            if (curCount > 0) {
                curCount--;
            }
            curItem.find('.order-form-complect-count-val input').val(curCount);
            curItem.find('.order-form-complect-count-val span').html(curCount);
            if (curCount == 0) {
                curItem.addClass('order-form-complect-row-dis');
            }

            recalcOrder();
        });

        $('.order-form-complect-count-plus').click(function() {
            var curItem = $(this).parents().filter('.order-form-complect-row');
            var curCount = Number(curItem.find('.order-form-complect-count-val input').val());
            curCount++;
            curItem.find('.order-form-complect-count-val input').val(curCount);
            curItem.find('.order-form-complect-count-val span').html(curCount);
            curItem.removeClass('order-form-complect-row-dis');

            recalcOrder();
        });


   

    // пересчет заказа
    function recalcOrder() {
        var curSumm   = 0;

        $('.order-form-complect-row').each(function() {
            var curItem = $(this);
            var curItemPrice = Number(curItem.find('.order-form-complect-price span').html().replace(' ', ''));
            var curItemCount = Number( parseFloat( curItem.find('.order-form-complect-count-val input').val() ) );
            curItem.find('.order-form-complect-summ span').html(Number(curItemPrice * curItemCount).toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            curSumm += curItemPrice * curItemCount;
        });
        $('.order-form-complect-result-summ span').html(String(curSumm.toFixed(0)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        var curCount = 0;
        $('.order-form-complect-count-val input').each(function() {
            curCount += Number($(this).val());
        });
        $('.order-form-confirm-summ').html(String(curSumm).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        $('.order-form-confirm-all').html(String(curSumm).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    }

 });

(jQuery);