/**
 * @fileoverview  User Fanout services
 * @author Darshit Vora
 * @class User\Hookshot
 * @extends User
 * @description uses subscription.json
 * @return {Object} returns user methods for triggering webhooks
 */
const hookshot = require('../../conn/hookshot');
import * as logger from '../../components/logger/index';

/**
 * Trigger user email
 * @author Darshit Vora
 * @version 0.0.1
 * @function
 * @name upgradeRequestMail
 * @memberof User\Hookshot
 */
exports.upgradeRequestMail = (emailData: any) => {
  try {
    return hookshot.trigger('email:sendMail', {
      object: 'email',
      event: 'sendMail',
      emailData,
    });
  } catch (err) {
    return logger.error(err);
  }
};
