import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';

@Injectable()
export class WalletService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    ABANDON_TRANSACTION: 'abandontransaction',
    ABORT_RESCAN: 'abortrescan',
    ADD_MULTISIG_ADDRESS: 'addmultisigaddress',
    BACKUP_WALLET: 'backupwallet',
    BUMP_FEE: 'bumpfee',
    CREATE_WALLET: 'createwallet',
    DUMP_PRIV_KEY: 'dumpprivkey',
    DUMP_WALLET: 'dumpwallet',
    ENCRYPT_WALLET: 'encryptwallet',
    GET_ADDRESSES_BY_LABEL: 'getaddressesbylabel',
    GET_ADDRESS_INFO: 'getaddressinfo',
    GET_BALANCE: 'getbalance',
    GET_BALANCES: 'getbalances',
    GET_NEW_ADDRESS: 'getnewaddress',
    GET_RAW_CHANGE_ADDRESS: 'getrawchangeaddress',
    GET_RECEIVED_BY_ADDRESS: 'getreceivedbyaddress',
    GET_RECEIVED_BY_LABEL: 'getreceivedbylabel',
    GET_TRANSACTION: 'gettransaction',
    GET_UNCONFIRMED_BALANCE: 'getunconfirmedbalance',
    GET_WALLET_INFO: 'getwalletinfo',
    IMPORT_ADDRESS: 'importaddress',
    IMPORT_DESCRIPTORS: 'importdescriptors',
    IMPORT_MULTI: 'importmulti',
    IMPORT_PRIV_KEY: 'importprivkey',
    IMPORT_PRUNED_FUNDS: 'importprunedfunds',
    IMPORT_PUB_KEY: 'importpubkey',
    IMPORT_WALLET: 'importwallet',
    KEYPOOL_REFILL: 'keypoolrefill',
    LIST_ADDRESS_GROUPINGS: 'listaddressgroupings',
    LIST_DESCRIPTORS: 'listdescriptors',
    LIST_LABELS: 'listlabels',
    LIST_LOCK_UNSPENT: 'listlockunspent',
    LIST_RECEIVED_BY_ADDRESS: 'listreceivedbyaddress',
    LIST_RECEIVED_BY_LABEL: 'listreceivedbylabel',
    LIST_SINCE_BLOCK: 'listsinceblock',
    LIST_TRANSACTIONS: 'listtransactions',
    LIST_UNSPENT: 'listunspent',
    LIST_WALLET_DIR: 'listwalletdir',
    LIST_WALLETS: 'listwallets',
    LOAD_WALLET: 'loadwallet',
    LOCK_UNSPENT: 'lockunspent',
    MIGRATE_WALLET: 'migratewallet',
    NEW_KEYPOOL: 'newkeypool',
    PSBT_BUMP_FEE: 'psbtbumpfee',
    REMOVE_PRUNED_FUNDS: 'removeprunedfunds',
    RESCAN_BLOCKCHAIN: 'rescanblockchain',
    RESTORE_WALLET: 'restorewallet',
    SEND: 'send',
    SEND_ALL: 'sendall',
    SEND_MANY: 'sendmany',
    SEND_TO_ADDRESS: 'sendtoaddress',
    SET_HD_SEED: 'sethdseed',
    SET_LABEL: 'setlabel',
    SET_TX_FEE: 'settxfee',
    SET_WALLET_FLAG: 'setwalletflag',
    SIGN_MESSAGE: 'signmessage',
    SIGN_RAW_TRANSACTION_WITH_WALLET: 'signrawtransactionwithwallet',
    SIMULATE_RAW_TRANSACTION: 'simulaterawtransaction',
    UNLOAD_WALLET: 'unloadwallet',
    UPGRADE_WALLET: 'upgradewallet',
    WALLET_CREATE_FUNDED_PSBT: 'walletcreatefundedpsbt',
    WALLET_DISPLAY_ADDRESS: 'walletdisplayaddress',
    WALLET_LOCK: 'walletlock',
    WALLET_PASSPHRASE: 'walletpassphrase',
    WALLET_PASSPHRASE_CHANGE: 'walletpassphrasechange',
    WALLET_PROCESS_PSBT: 'walletprocesspsbt',
  };

  // getMemoryInfo(mode = 'stats'): Observable<any> {
  //   return this.rpcService.request(this.availableMethods.GET_MEMORY_INFO, {
  //     mode,
  //   });
  // }
}
