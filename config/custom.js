/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …

  jwtSecret: 'YOUR_SECRET_HERE', // Secret string (e.g: ES3yqJfve0v9J0wwQEX22KrQ1RBp0xAOqdFePrmD)
  jwtExpiry: '8h', // Time in hours before expiry
  jwtSalt: 10, // Salt encryption level (higher numbers will increase response time)

};
