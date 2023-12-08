import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RpcService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  request(method: string, params?: any) {
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
          throw new HttpException(error.message, 500);
        }),
      );
  }
}
