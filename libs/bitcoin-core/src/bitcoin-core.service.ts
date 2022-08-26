import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BitcoinCoreService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  // TODO: add error handling
  // TODO: remove any type
  getBlockchainInfo(): Observable<any> {
    return this.rpcRequest('getblockchaininfo');
  }

  // TODO: add returned data type
  rpcRequest(method: string, params?: any) {
    const id = uuidv4();
    Logger.debug(
      `BitcoinCoreService.rpcRequest: method: ${method}, params: ${JSON.stringify(
        params,
      )}, id: ${id}`,
    );
    return this.httpService
      .post(
        this.configService.getOrThrow('BITCOIN_CORE_RPC_URL'),
        {
          jsonrpc: '2.0',
          id,
          method,
          params,
        },
        {
          auth: {
            username: this.configService.getOrThrow(
              'BITCOIN_CORE_RPC_USERNAME',
            ),
            password: this.configService.getOrThrow(
              'BITCOIN_CORE_RPC_PASSWORD',
            ),
          },
        },
      )
      .pipe(map((response) => response.data));
  }
}
