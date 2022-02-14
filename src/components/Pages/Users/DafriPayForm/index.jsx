import React, { useEffect } from 'react';

const DafriPayForm = ({ type, target = true, formData, onLoadCallback }) => {
  useEffect(() => {
    onLoadCallback(true);
  }, []);

  return (
    <>
      {target ? (
        <form
          action={
            type === 'deposit' ? formData.url_deposit : formData.url_withdrawal
          }
          method="post"
          id="dafriform"
          className="hidden"
          target="_blank"
        >
          <input type="hidden" name="order_id" value={formData.order_id} />
          <input
            type="hidden"
            name="order_amount"
            value={formData.order_amount}
          />
          <input
            type="hidden"
            name="currency_code"
            value={formData.currency_code}
          />
          <input
            type="hidden"
            name="merchant_key"
            value={formData.merchant_id}
          />
          <input
            type="hidden"
            name="return_url"
            value={
              type === 'deposit'
                ? formData.return_url_deposit
                : formData.return_url_withdrawal
            }
          />
        </form>
      ) : (
        <form
          action={
            type === 'deposit' ? formData.url_deposit : formData.url_withdrawal
          }
          method="post"
          id="dafriform"
        >
          <input type="hidden" name="order_id" value={formData.order_id} />
          <input
            type="hidden"
            name="order_amount"
            value={formData.order_amount}
          />
          <input
            type="hidden"
            name="currency_code"
            value={formData.currency_code}
          />
          <input
            type="hidden"
            name="merchant_key"
            value={formData.merchant_id}
          />
          <input
            type="hidden"
            name="return_url"
            value={
              type === 'deposit'
                ? formData.return_url_deposit
                : formData.return_url_withdrawal
            }
          />
        </form>
      )}
    </>
  );
};

export default DafriPayForm;
