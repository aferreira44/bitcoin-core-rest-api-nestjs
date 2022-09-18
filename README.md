## Description

REST API for Bitcoin Core RPC methods written in Node.js using [NestJS](https://nestjs.com/).

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

##  Roadmap

### Blockchain
- [x] getbestblockhash
- [ ] getblock "blockhash" ( verbosity )
- [x] getblockchaininfo
- [x] getblockcount
- [ ] getblockfilter "blockhash" ( "filtertype" )
- [ ] getblockfrompeer "blockhash" peer_id
- [x] getblockhash height
- [ ] getblockheader "blockhash" ( verbose )
- [ ] getblockstats hash_or_height ( stats )
- [ ] getchaintips
- [ ] getchaintxstats ( nblocks "blockhash" )
- [ ] getdeploymentinfo ( "blockhash" )
- [ ] getdifficulty
- [ ] getmempoolancestors "txid" ( verbose )
- [ ] getmempooldescendants "txid" ( verbose )
- [ ] getmempoolentry "txid"
- [ ] getmempoolinfo
- [ ] getrawmempool ( verbose mempool_sequence )
- [ ] gettxout "txid" n ( include_mempool )
- [ ] gettxoutproof ["txid",...] ( "blockhash" )
- [ ] gettxoutsetinfo ( "hash_type" hash_or_height use_index )
- [ ] preciousblock "blockhash"
- [ ] pruneblockchain height
- [ ] savemempool
- [ ] scantxoutset "action" ( [scanobjects,...] )
- [ ] verifychain ( checklevel nblocks )
- [ ] verifytxoutproof "proof"

### Control
- [ ] getmemoryinfo ( "mode" )
- [ ] getrpcinfo
- [ ] help ( "command" )
- [ ] logging ( ["include_category",...] ["exclude_category",...] )
- [ ] stop
- [ ] uptime

### Mining
- [ ] getblocktemplate ( "template_request" )
- [ ] getmininginfo
- [ ] getnetworkhashps ( nblocks height )
- [ ] prioritisetransaction "txid" ( dummy ) fee_delta
- [ ] submitblock "hexdata" ( "dummy" )
- [ ] submitheader "hexdata"

### Network
- [ ] addnode "node" "command"
- [ ] clearbanned
- [ ] disconnectnode ( "address" nodeid )
- [ ] getaddednodeinfo ( "node" )
- [ ] getconnectioncount
- [ ] getnettotals
- [ ] getnetworkinfo
- [ ] getnodeaddresses ( count "network" )
- [ ] getpeerinfo
- [ ] listbanned
- [ ] ping
- [ ] setban "subnet" "command" ( bantime absolute )
- [ ] setnetworkactive state

### Rawtransactions
- [ ] analyzepsbt "psbt"
- [ ] combinepsbt ["psbt",...]
- [ ] combinerawtransaction ["hexstring",...]
- [ ] converttopsbt "hexstring" ( permitsigdata iswitness )
- [ ] createpsbt [{"txid":"hex","vout":n,"sequence":n},...] [{"address":amount,...},{"data":"hex"},...] ( locktime replaceable )
- [ ] createrawtransaction [{"txid":"hex","vout":n,"sequence":n},...] [{"address":amount,...},{"data":"hex"},...] ( locktime replaceable )
- [ ] decodepsbt "psbt"
- [ ] decoderawtransaction "hexstring" ( iswitness )
- [ ] decodescript "hexstring"
- [ ] finalizepsbt "psbt" ( extract )
- [ ] fundrawtransaction "hexstring" ( options iswitness )
- [ ] getrawtransaction "txid" ( verbose "blockhash" )
- [ ] joinpsbts ["psbt",...]
- [ ] sendrawtransaction "hexstring" ( maxfeerate )
- [ ] signrawtransactionwithkey "hexstring" ["privatekey",...] ( [{"txid":"hex","vout":n,"scriptPubKey":"hex","redeemScript":"hex","witnessScript":"hex","amount":amount},...] "sighashtype" )
- [ ] testmempoolaccept ["rawtx",...] ( maxfeerate )
- [ ] utxoupdatepsbt "psbt" ( ["",{"desc":"str","range":n or [n,n]},...] )

### Signer
- [ ] enumeratesigners

### Util
- [ ] createmultisig nrequired ["key",...] ( "address_type" )
- [ ] deriveaddresses "descriptor" ( range )
- [ ] estimatesmartfee conf_target ( "estimate_mode" )
- [ ] getdescriptorinfo "descriptor"
- [ ] getindexinfo ( "index_name" )
- [ ] signmessagewithprivkey "privkey" "message"
- [ ] validateaddress "address"
- [ ] verifymessage "address" "signature" "message"

### Wallet
- [ ] abandontransaction "txid"
- [ ] abortrescan
- [ ] addmultisigaddress nrequired ["key",...] ( "label" "address_type" )
- [ ] backupwallet "destination"
- [ ] bumpfee "txid" ( options )
- [ ] createwallet "wallet_name" ( disable_private_keys blank "passphrase" avoid_reuse descriptors load_on_startup external_signer )
- [ ] dumpprivkey "address"
- [ ] dumpwallet "filename"
- [ ] encryptwallet "passphrase"
- [ ] getaddressesbylabel "label"
- [ ] getaddressinfo "address"
- [ ] getbalance ( "dummy" minconf include_watchonly avoid_reuse )
- [ ] getbalances
- [ ] getnewaddress ( "label" "address_type" )
- [ ] getrawchangeaddress ( "address_type" )
- [ ] getreceivedbyaddress "address" ( minconf include_immature_coinbase )
- [ ] getreceivedbylabel "label" ( minconf include_immature_coinbase )
- [ ] gettransaction "txid" ( include_watchonly verbose )
- [ ] getunconfirmedbalance
- [ ] getwalletinfo
- [ ] importaddress "address" ( "label" rescan p2sh )
- [ ] importdescriptors "requests"
- [ ] importmulti "requests" ( "options" )
- [ ] importprivkey "privkey" ( "label" rescan )
- [ ] importprunedfunds "rawtransaction" "txoutproof"
- [ ] importpubkey "pubkey" ( "label" rescan )
- [ ] importwallet "filename"
- [ ] keypoolrefill ( newsize )
- [ ] listaddressgroupings
- [ ] listdescriptors ( private )
- [ ] listlabels ( "purpose" )
- [ ] listlockunspent
- [ ] listreceivedbyaddress ( minconf include_empty include_watchonly "address_filter" include_immature_coinbase )
- [ ] listreceivedbylabel ( minconf include_empty include_watchonly include_immature_coinbase )
- [ ] listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed )
- [ ] listtransactions ( "label" count skip include_watchonly )
- [ ] listunspent ( minconf maxconf ["address",...] include_unsafe query_options )
- [ ] listwalletdir
- [ ] listwallets
- [ ] loadwallet "filename" ( load_on_startup )
- [ ] lockunspent unlock ( [{"txid":"hex","vout":n},...] persistent )
- [ ] newkeypool
- [ ] psbtbumpfee "txid" ( options )
- [ ] removeprunedfunds "txid"
- [ ] rescanblockchain ( start_height stop_height )
- [ ] restorewallet "wallet_name" "backup_file" ( load_on_startup )
- [ ] send [{"address":amount,...},{"data":"hex"},...] ( conf_target "estimate_mode" fee_rate options )
- [ ] sendmany "" {"address":amount,...} ( minconf "comment" ["address",...] replaceable conf_target "estimate_mode" fee_rate verbose )
- [ ] sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount replaceable conf_target "estimate_mode" avoid_reuse fee_rate verbose )
- [ ] sethdseed ( newkeypool "seed" )
- [ ] setlabel "address" "label"
- [ ] settxfee amount
- [ ] setwalletflag "flag" ( value )
- [ ] signmessage "address" "message"
- [ ] signrawtransactionwithwallet "hexstring" ( [{"txid":"hex","vout":n,"scriptPubKey":"hex","redeemScript":"hex","witnessScript":"hex","amount":amount},...] "sighashtype" )
- [ ] unloadwallet ( "wallet_name" load_on_startup )
- [ ] upgradewallet ( version )
- [ ] walletcreatefundedpsbt ( [{"txid":"hex","vout":n,"sequence":n,"weight":n},...] ) [{"address":amount,...},{"data":"hex"},...] ( locktime options bip32derivs )
- [ ] walletdisplayaddress "address"
- [ ] walletlock
- [ ] walletpassphrase "passphrase" timeout
- [ ] walletpassphrasechange "oldpassphrase" "newpassphrase"
- [ ] walletprocesspsbt "psbt" ( sign "sighashtype" bip32derivs finalize )

### Zmq
 - [ ] getzmqnotifications
