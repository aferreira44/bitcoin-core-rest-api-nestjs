import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';

@Injectable()
export class SignerService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    ENUMERATE_SIGNERS: 'enumeratesigners',
  };

  enumerateSigners(): Observable<any> {
    return this.rpcService.request(this.availableMethods.ENUMERATE_SIGNERS);
  }
}
