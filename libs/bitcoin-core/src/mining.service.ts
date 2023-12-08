import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';
import { TemplateRequest } from './types';

@Injectable()
export class MiningService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    GET_BLOCK_TEMPLATE: 'getblocktemplate',
    GET_MINING_INFO: 'getmininginfo',
    GET_NETWORK_HASH_PS: 'getnetworkhashps',
    GET_PRIORITISED_TRANSACTIONS: 'getprioritisedtransactions',
    PRIORITISE_TRANSACTION: 'prioritisetransaction',
    SUBMIT_BLOCK: 'submitblock',
    SUBMIT_HEADER: 'submitheader',
  };

  getBlockTemplate(template_request: TemplateRequest): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_BLOCK_TEMPLATE, {
      template_request,
    });
  }

  getMiningInfo(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_MINING_INFO);
  }

  getNetworkHashPs(nblocks = 120, height = 1): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_NETWORK_HASH_PS, {
      nblocks,
      height,
    });
  }

  getPrioritisedTransactions(): Observable<any> {
    return this.rpcService.request(
      this.availableMethods.GET_PRIORITISED_TRANSACTIONS,
    );
  }

  prioritiseTransaction(
    txid: string,
    fee_delta: number,
    dummy?: number,
  ): Observable<any> {
    return this.rpcService.request(
      this.availableMethods.PRIORITISE_TRANSACTION,
      {
        txid,
        dummy,
        fee_delta,
      },
    );
  }

  submitBlock(hexdata: string, dummy = 'ignored'): Observable<any> {
    return this.rpcService.request(this.availableMethods.SUBMIT_BLOCK, {
      hexdata,
      dummy,
    });
  }

  submitHeader(hexdata: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.SUBMIT_HEADER, {
      hexdata,
    });
  }
}
