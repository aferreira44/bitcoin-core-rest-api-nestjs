import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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

  getBlockHash(height: number): Observable<any> {
    return this.rpcRequest('getblockhash', {
      height: Number(height),
    });
  }

  // TODO: add returned data type
  rpcRequest(method: string, params?: any) {
    const payload = {
      id: uuidv4(),
      method,
      params,
      jsonrpc: '2.0',
    };
    Logger.debug(`BitcoinCoreService.rpcRequest: ${JSON.stringify(payload)}`);
    return this.httpService
      .post(this.configService.getOrThrow('BITCOIN_CORE_RPC_URL'), payload, {
        auth: {
          username: this.configService.getOrThrow('BITCOIN_CORE_RPC_USERNAME'),
          password: this.configService.getOrThrow('BITCOIN_CORE_RPC_PASSWORD'),
        },
      })
      .pipe(
        map((response) => {
          Logger.debug(
            `BitcoinCoreService.rpcRequest: ${JSON.stringify(response.data)}`,
          );
          return response.data.result;
        }),
        catchError((error) => {
          Logger.error(
            `BitcoinCoreService.rpcRequest: ${JSON.stringify(
              error.response.data,
            )}`,
          );
          throw new HttpException(
            error.response.data.error.message,
            error.response.status,
          );
        }),
      );
  }
}
