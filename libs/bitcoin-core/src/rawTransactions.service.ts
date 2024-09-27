import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';

@Injectable()
export class RawTransactionsService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    ANALYSE_PSBT: 'analyzepsbt',
    COMBINE_PSBT: 'combinepsbt',
    COMBINE_RAW_TRANSACTION: 'combinerawtransaction',
    CONVERT_TO_PSBT: 'converttopsbt',
    CREATE_PSBT: 'createpsbt',
    CREATE_RAW_TRANSACTION: 'createrawtransaction',
    DECODE_PSBT: 'decodepsbt',
    DECODE_RAW_TRANSACTION: 'decoderawtransaction',
    DECODE_SCRIPT: 'decodescript',
    DESCRIPTOR_PROCESS_PSBT: 'descriptorprocesspsbt',
    FINALISE_PSBT: 'finalizepsbt',
    FUND_RAW_TRANSACTION: 'fundrawtransaction',
    GET_RAW_TRANSACTION: 'getrawtransaction',
    JOIN_PSBTS: 'joinpsbts',
    SEND_RAW_TRANSACTION: 'sendrawtransaction',
    SIGN_RAW_TRANSACTION_WITH_KEY: 'signrawtransactionwithkey',
    SUBMIT_PACKAGE: 'submitpackage',
    TEST_MEMPOOL_ACCEPT: 'testmempoolaccept',
    UTXO_UPDATE_PSBT: 'utxoupdatepsbt',
  };

  // getZmqNotifications(): Observable<any> {
  //   return this.rpcService.request(this.availableMethods.GET_ZMQ_NOTIFICATIONS);
  // }
}
