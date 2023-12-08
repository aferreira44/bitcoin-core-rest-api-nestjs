import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';

@Injectable()
export class UtilService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    CREATE_MULTISIG: 'createmultisig',
    DERIVE_ADDRESSES: 'deriveaddresses',
    ESTIMATE_SMART_FEE: 'estimatesmartfee',
    GET_DESCRIPTOR_INFO: 'getdescriptorinfo',
    GET_INDEX_INFO: 'getindexinfo',
    SIGN_MESSAGE_WITH_PRIV_KEY: 'signmessagewithprivkey',
    VALIDATE_ADDRESS: 'validateaddress',
    VERIFY_MESSAGE: 'verifymessage',
  };

  createMultiSig(
    nrequired: number,
    keys: string[],
    address_type = 'legacy',
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.CREATE_MULTISIG, {
      nrequired,
      keys,
      address_type,
    });
  }

  deriveAddresses(
    descriptor: string,
    range: string[] | [number, number],
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.DERIVE_ADDRESSES, {
      descriptor,
      range,
    });
  }

  estimateSmartFee(
    conf_target: number,
    estimate_mode = 'conservative',
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.ESTIMATE_SMART_FEE, {
      conf_target,
      estimate_mode,
    });
  }

  getDescriptorInfo(descriptor: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_DESCRIPTOR_INFO, {
      descriptor,
    });
  }

  getIndexInfo(index_name?: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_INDEX_INFO, {
      index_name,
    });
  }

  signMessageWithPrivKey(privkey: string, message: string): Observable<any> {
    return this.rpcService.request(
      this.availableMethods.SIGN_MESSAGE_WITH_PRIV_KEY,
      { privkey, message },
    );
  }

  validateAddress(address: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.VALIDATE_ADDRESS, {
      address,
    });
  }

  verifyMessage(
    address: string,
    signature: string,
    message: string,
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.VERIFY_MESSAGE, {
      address,
      signature,
      message,
    });
  }
}
