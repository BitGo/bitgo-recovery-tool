var sjcl = require('sjcl');
var Crypto = require('bitcoinjs-lib/src/crypto');
var Scripts = require('bitcoinjs-lib/src/scripts');

var util = module.exports; 

/**
 * The p2shMultisigOutputScript creates a script hash for a m of n output
 * 
 * @param m {Integer} m of the multisig transaction
 * @param pubKeys {String[]} list of pubkeys for use in script hash
 * @returns {string} the script hash output for the p2sh tx   
 */
util.p2shMultisigOutputScript = function(m, pubKeys) {
  var redeemScript = Scripts.multisigOutput(2, pubKeys);
  var hash = Crypto.ripemd160(Crypto.sha256(redeemScript.toBuffer()));
  return Scripts.scriptHashOutput(hash);
};

/**
 * The decrypt function uses sjcl to decrypt an encrypted string
 *
 *  @param params {Object} contains encrypted string and password 
 *  @returns {string} the decrypted string in plaintext 
 */

util.decrypt = function decrypt(params) {
  params = params || {};
  validateParams(params, ['input', 'password'], []);
  return sjcl.decrypt(params.password, params.input);
};


/**
 * Helper function to validate the input parameters to an SDK method.
 * Only validates for strings - if parameter is different, check that manually
 *
 * @param params {Object} dictionary of parameter key-value pairs
 * @param expectedParams {string[]} list of expected string parameters
 * @param optionalParams {string[]} list of optional string parameters
 * @param optionalCallback {Function} if callback provided, must be a function
 * @returns {boolean} true if validated, throws with reason otherwise
 */
function validateParams(params, expectedParams, optionalParams, optionalCallback) {
  if (typeof(params) != 'object') {
    throw new Error('Must pass in parameters dictionary');
  }

  expectedParams = expectedParams || [];

  expectedParams.forEach(function(expectedParam) {
    if (!params[expectedParam]) {
      throw new Error('Missing parameter: ' + expectedParam);
    }
    if (typeof(params[expectedParam]) != 'string') {
      throw new Error('Expecting parameter string: ' + expectedParam + ' but found ' + typeof(params[expectedParam]));
    }
  });

  optionalParams = optionalParams || [];
  optionalParams.forEach(function(expectedParam) {
    if (params[expectedParam] && typeof(params[expectedParam]) != 'string') {
      throw new Error('Expecting parameter string: ' + expectedParam + ' but found ' + typeof(params[expectedParam]));
    }
  });

  if (optionalCallback && typeof(optionalCallback) != 'function') {
    throw new Error('illegal callback argument');
  }

  return true;
};


