import Ember from 'ember';

export default Ember.Service.extend({
  // Create the responses object
  responses: [{
    'code': '00',
    'success': true,
    'responseCode': '00_success',
    'description': 'Successful – the transaction has processed and you may proceed with the sale.',
    'checkoutmessage': 'Thank you for you purchase',
    'checkoutOptions': {
      'Keep Shopping': ['reset']
    }
  }, {
    'code': '100',
    'success': false,
    'responseCode': '100_3dsecure',
    'description': 'Successful – 3D secure verification needed.',
    'checkoutmessage': 'Pending - your bank requests you verify this purchase. Click Verify to open the bank verification page.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Verify': ['threeDSecure']
    }
  }, {
    'code': '101',
    'success': false,
    'responseCode': '101_declined_bank',
    'description': 'A failed transaction specifically meaning: Declined by Bank – generally insufficient funds or incorrect expiry date.',
    'checkoutmessage': 'We\'re sorry but your bank has declined your transaction. Please confirm your card CVV and expiry date, then try again.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Review Detail': ['highlight', 'cvv,expiry']
    }
  }, {
    'code': '102',
    'success': false,
    'responseCode': '102_declined_offline',
    'description': 'A failed transaction specifically meaning: Transaction Declined Pending Offline Authorisation..',
    'checkoutmessage': 'We\'re sorry but your bank has declined your transaction. Contact your bank at +3538787878 to find out why.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Phone Bank': ['rest']
    }
  }, {
    'code': '103',
    'success': false,
    'responseCode': '103_card_stolen',
    'description': 'A failed transaction specifically meaning: Card reported lost or stolen.',
    'checkoutmessage': 'We\'re sorry but it looks like you\'re using a stolen card. We\'ve suspended your account pending further details.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '107',
    'success': false,
    'responseCode': '107_fraud',
    'description': 'A failed transaction specifically meaning: Your fraud checks blocked the transaction.',
    'checkoutmessage': 'We\'re sorry, you seem to be a fraudster. Contact us if you wish to dispute this.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '110',
    'success': false,
    'responseCode': '110_fail_eci',
    'description': 'A failed 3D Secure verification, possibly fraudulent transaction. ECI result is 7',
    'checkoutmessage': 'We\'re sorry, you seem to be a fraudster. Contact us if you wish to dispute this.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '600',
    'success': false,
    'responseCode': '600_error',
    'description': 'Generic error 600',
    'checkoutmessage': 'Empty message',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '601',
    'success': false,
    'responseCode': '601_error',
    'description': 'Generic error 601',
    'checkoutmessage': '',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '603',
    'success': false,
    'responseCode': '603_error',
    'description': 'Generic error 603',
    'checkoutmessage': '',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '666',
    'success': false,
    'responseCode': '666_deactivated',
    'description': 'Account deactivated',
    'checkoutmessage': '',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '200',
    'success': false,
    'responseCode': '200_bank_comm',
    'description': 'A failed transaction specifically meaning: bank communication error.',
    'checkoutmessage': 'Bank Communication Failed',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '205',
    'success': false,
    'responseCode': '205_bank_comm',
    'description': 'A failed transaction specifically meaning: bank communication error.',
    'checkoutmessage': '',
    'checkoutOptions': {
      'Cancel':['rest'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '501',
    'success': false,
    'responseCode': '501_already_processed',
    'description': 'This transaction has already been processed.',
    'checkoutmessage': 'We\'re sorry, a technical issue has stopped your purchase from completing. Your card has not been charged. Re-try to complete the purchase or contact us to talk more about this problem.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Retry': ['retry'],
      'Contact Us': ['contactUs']
    }
  }, {
    'code': '507',
    'success': false,
    'responseCode': '507_currency',
    'description': 'Currency/card combination not allowed.',
    'checkoutmessage': 'We\'re sorry, that item is not available to buy in that currency. You can complete your purchase using one of our alternatives.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'EUR': ['change_currency', 'EUR'],
      'GBP': ['change_currency', 'GBP'],
      'USD': ['change_currency', 'USD'],
      'RUB': ['change_currency', 'RUB']
    }
  }, {
    'code': '509',
    'success': false,
    'responseCode': '509_expiry_date',
    'description': 'Card expiry date is invalid',
    'checkoutmessage': 'We\'re sorry, we could not process your card request. Please verify the card expiry date on your card and retry.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Verify Expiry': ['highlight', 'expiry']
    }
  }, {
    'code': '502',
    'success': false,
    'responseCode': '502_invalid_card_name',
    'description': 'Invalid cardholder name',
    'checkoutmessage': 'We\'re sorry, we could not process your card request. Please verify the cardholder name and retry.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Verify Name': ['highlight', 'firstName,lastName']
    }
  }, {
    'code': '101N',
    'success': false,
    'responseCode': '101_cvv_not_match',
    'description': 'A failed transaction specifically meaning: CVV Not Matched.',
    'checkoutmessage': 'We\'re sorry, we could not process your card request. Please verify the card CVV and retry.',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Re-enter CVV': ['highlight', 'cvv']
    }
  }, {
    'code': '101I',
    'success': false,
    'responseCode': '101_cvv_not_checked',
    'description': 'A failed transaction specifically meaning: CVV Not checked due to circumstances.',
    'checkoutmessage': 'Warning, there was a problem verifying your CVV. Do you wish to complete the purchase without verifying CVV?',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Re-enter CVV': ['highlight', 'cvv']
    }
  }, {
    'code': '101U',
    'success': false,
    'responseCode': '101_cvv_issuer_no_cert',
    'description': 'A failed transaction specifically meaning: CVV Issuer not certified.',
    'checkoutmessage': 'We\'re sorry, we could not process your card request. Your card issuer does not support CVV codes - we cannot accept such cards.',
    'checkoutOptions': {
      'Cancel': ['reset'],
      'Try with Paypal': ['otherProcessor']
    }
  }, {
    'code': '101P',
    'success': false,
    'responseCode': '101_cvv_not_processed',
    'description': 'A failed transaction specifically meaning: CVV Not processed.',
    'checkoutmessage': 'We\'re sorry, we could not process your card request. Your card issuer does not support CVV codes - we cannot accept such cards.',
    'checkoutOptions': {
      'Cancel': ['reset'],
      'Try with Paypal': ['otherProcessor']
    }
  }, {
    'code': 'timeout',
    'success': false,
    'responseCode': 'timeout',
    'description': 'Timeout.',
    'checkoutmessage': 'Sorry, we experienced a problem sending your request to your bank and your transaction was not successfull. ',
    'checkoutOptions': {
      'Cancel': ['rest'],
      'Retry': ['retry']
    }
  }],

  get_response_code(resultCode) {
    return this.get('responses').find((element) => {
      return resultCode === element.code;
    });
  }
});
