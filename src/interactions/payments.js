'use strict';
const mathjs = require("mathjs");

module.exports = {
  data: {
    name: 'payments',
    description: 'Displays all payment addresses.',
  },
  execute: interaction => {
    const type = interaction.options.getString('type');

    return interaction.reply(`Addresses:

    CashApp: https://cash.app/$Razr7315
    PayPal: https://www.paypal.me/finraz
    DOGE: DT3r7bmn153xRp8VaCYxzj2LoLFMirNR2g
    FOX: 0x8d75a861B94F58c2452a10d065CdF6b756f5E35d
    WETH: 0x8d75a861B94F58c2452a10d065CdF6b756f5E35d
    BTC: 3DFdkXWwQQmGXc3GdZW6NGjc4BBMX3fize
    USDC: 0x8d75a861B94F58c2452a10d065CdF6b756f5E35d
    ETH: 0x8d75a861B94F58c2452a10d065CdF6b756f5E35d
    LTC: MPX5qDuNNr6GNzHwgyXUFfoyTHfBDw43ha
    BCH: qzg82p8fnfyy8y3hx5n4z2z957n5rda8dc2dq0ag9l
    
    For any other addresses, please ask @Razr#7315!
    
    PAYPAL __**MUST**__ BE SENT AS F&F! G&S WILL NOT BE ACCEPTED AND THE PRODUCT WILL NOT BE GIVEN, WE WILL REFUND YOU (CBP System)`);
  },
};
