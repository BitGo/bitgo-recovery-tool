BitGo Offline Recovery Tool
===========================

A Bitcoin recovery tool for BitGo wallets

## Requirements

- node & npm (https://nodejs.org/)
- BitGo KeyCard that was provided upon wallet creation
- Your BitGo wallet password

## Goal

The BitGo Offline Recovery Tool provides BitGo customers with a mechanism to retrieve their Bitcoin stored with BitGo wallets agnostic of the status of BitGo.

This tool intentionally has no dependencies on the BitGo platform API. It uses an external API (Blockr) for retrieving blockchain data. This is in order to demonstrate that Bitcoin stored in wallets created through the BitGo service can be recovered independently of BitGo, using only the KeyCard provided when creating a wallet on BitGo along with the wallet password.

If you are trying to recover a live BitGo wallet due to a lost password, please use the online wallet recovery functionality available inside the BitGo interface.  Contact support@bitgo.com for assistance.

## Instructions

### Mac/Linux

Download a zip of the project from GitHub.com, and extract all of the files. Then open up the Terminal program and change your folder to wherever you extracted the files to

```
cd /Users/your_username/Downloads/bitgo-recovery-tool-master
```

Then install the the recovery tool's dependencies.

```
npm install
```

Using the recovery tool:

```
cd bin/

./bitgo-recovery-tool
```

### Windows

Download a zip of the project from GitHub.com, and extract all of the files. Then open up the Powershell program. Assuming the path to your nodejs folder containing the node and npm programs is:

```
C:\Program Files\nodejs
```

and the path to the bitgo recovery tool's project folder is:

```
C:\Users\your_username\Documents\GitHub\bitgo-recovery-tool-master\bitgo-recovery-tool-master
```

then the following commands will start the recovery tool:

```
cd C:\Users\your_username\Documents\GitHub\bitgo-recovery-tool-master\bitgo-recovery-tool-master
```

```
& "C:\Program Files\nodejs\npm" install
```

```
& "C:\Program Files\nodejs\node" .\bin\bitgo-recovery-tool
