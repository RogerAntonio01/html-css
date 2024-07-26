function attachATCButtonHandler(cartxData) {
    var btn_selectors = $(btnSelectors);
    setATCButtonStatus('original');
    if (cartxData && cartxData.skip_cart) {
        btn_selectors.addClass("cartx_mainBtn cartx_elem_0");
        console.log('ATC cartx event ready');
        $('.cartx_mainBtn').on('click', function(event) {
            event.preventDefault();
            const formSelector = 'form[action$="/cart/add"]';
            var form_count = $(formSelector).length;
            if (typeof form_count != 'undefined' && form_count <= 1) {
                var form = $(formSelector);
            } else {
                var form = $(this).parents(formSelector);
            }

            $.post("/cart/add.js", $(form).serialize(), function( data, status, XHR ) {}).always(function() {
                window.location.href = '/cart?ref=cartx_buy_button' + e_param
            });
        });
    }
}









<form id='cart-form' action="{{ routes.cart_url }}" method="post" novalidate class="cart">
              <button type="submit" name="checkout" class="btn btn--primary btn--large btn--full checkout__button">
                {{ 'cart.general.checkout' | t }} •
                <span data-cart-final>
                  {{ cart.total_price | money_with_currency }}
                </span>
              </button>
            </form>