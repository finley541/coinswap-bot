'use strict';

const mathjs = require("mathjs");
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: {
    name: 'summary',
    description: 'Creates a summary of the exchange.',
    options: [
      {
        name: 'sent',
        description: 'Method Sent',
        type: 'STRING',
        required: true,
        choices: [
          { name: 'PayPal', value: 'PayPal' },
          { name: 'CashApp', value: 'CashApp' },
          { name: 'DOGE', value: 'DOGE' },
          { name: 'FOX', value: 'FOX' },
          { name: 'WETH', value: 'WETH' },
          { name: 'BTC', value: 'BTC' },
          { name: 'USDC', value: 'USDC' },
          { name: 'ETH', value: 'ETH' },
          { name: 'LTC', value: 'LTC' },
          { name: 'BCH', value: 'BCH' },
          { name: 'Other', value: 'Other' },
        ],
      },
      {
        name: 'receiving',
        description: 'Method Receiving',
        type: 'STRING',
        required: true,
        choices: [
            { name: 'PayPal', value: 'PayPal' },
            { name: 'CashApp', value: 'CashApp' },
            { name: 'DOGE', value: 'DOGE' },
            { name: 'FOX', value: 'FOX' },
            { name: 'WETH', value: 'WETH' },
            { name: 'BTC', value: 'BTC' },
            { name: 'USDC', value: 'USDC' },
            { name: 'ETH', value: 'ETH' },
            { name: 'LTC', value: 'LTC' },
            { name: 'BCH', value: 'BCH' },
            { name: 'Other', value: 'Other' },
        ],
      },
      {
        name: 'amount',
        description: 'Amount Receiving',
        type: 'STRING',
        required: true,
      },
      {
        name: 'address',
        description: 'Address to Deposit Funds',
        type: 'STRING',
        required: true,
      },
    ],
  },
  execute: interaction => {
    const sent = interaction.options.getString('sent');
    const receiving = interaction.options.getString('receiving');
    const amount = interaction.options.getString('amount');
    const address = interaction.options.getString('address');
    const feesc = amount - amount * 0.1;

    const summaryEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Exchange Summary')
	.setDescription('Thanks for choosing CoinSwap! Please wait for Razr to finish the transaction, please do not ping him. Please ping your support representative for questions/concerns!')
	.addFields(
		{ name: 'Method Sent', value: `${sent}` },
    { name: 'Method Receiving', value: `${receiving}` },
    { name: 'Amount Before Fees', value: `${amount}` },
    { name: 'Amount After Fees', value: `${feesc}` },
    { name: 'Address', value: `${address}` },
	)

    if (sent === 'PayPal') feesc;
    if (sent === 'CashApp') feesc;
    if (sent === 'DOGE') feesc;
    if (sent === 'FOX') feesc;
    if (sent === 'WETH') feesc;
    if (sent === 'BTC') feesc;
    if (sent === 'USDC') feesc;
    if (sent === 'ETH') feesc;
    if (sent === 'LTC') feesc;
    if (sent === 'BCH') feesc;
    if (sent === 'Other') feesc;

    return interaction.reply({ embeds: [summaryEmbed] });
  },
};
