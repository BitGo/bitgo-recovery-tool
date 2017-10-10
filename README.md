BitGo Offline Recovery Tool
===========================

A Bitcoin recovery tool for BitGo wallets

## Requirements

- node & npm (https://nodejs.org/)
- BitGo KeyCard that was provided upon wallet creation
- Your BitGo wallet password

## Goal

The BitGo Offline Recovery Tool provides BitGo customers with a mechanism to retrieve their Bitcoin stored with BitGo wallets without depending on BitGo's co-signing service or any of BitGo's backend services.

This tool intentionally has no dependencies on the BitGo platform API. It uses an external API (Blockr) for retrieving blockchain data. This is in order to demonstrate that Bitcoin stored in wallets created through the BitGo service can be recovered independently of BitGo, using only the KeyCard provided when creating a wallet on BitGo along with the wallet password.

If you are trying to recover a live BitGo wallet due to a lost password, please use the online wallet recovery functionality available inside the BitGo interface. Contact support@bitgo.com for assistance.

This tool is also hosted at: http://bitgo.github.io/bitgo-recovery-tool/