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

  // TODO: remove any type
  getBestBlockHash(): Observable<any> {
    return this.rpcRequest('getbestblockhash');
  }

  // TODO: remove any type
  getBlock(blockHash: string): Observable<any> {
    return this.rpcRequest('getblock', {
      blockhash: blockHash,
    });
  }

  // TODO: remove any type
  getBlockchainInfo(): Observable<any> {
    return this.rpcRequest('getblockchaininfo');
  }

  // TODO: remove any type
  getBlockCount(): Observable<any> {
    return this.rpcRequest('getblockcount');
  }

  // TODO: remove any type
  getBlockFilter(blockHash: string): Observable<any> {
    return this.rpcRequest('getblockfilter', {
      blockhash: blockHash,
    });
  }

  // TODO: remove any type
  getBlockFromPeer(blockHash: string, peerId: number): Observable<any> {
    return this.rpcRequest('getblockfrompeer', {
      blockhash: blockHash,
      peer_id: peerId,
    });
  }

  // TODO: remove any type
  getBlockHash(height: number): Observable<any> {
    return this.rpcRequest('getblockhash', {
      height: Number(height),
    });
  }

  // TODO: remove any type
  getBlockHeader(blockHash: string): Observable<any> {
    return this.rpcRequest('getblockheader', {
      blockhash: blockHash,
    });
  }

  // TODO: remove any type
  getBlockStats(hashOrHeight: string | number): Observable<any> {
    return this.rpcRequest('getblockstats', {
      hash_or_height: hashOrHeight,
    });
  }

  // TODO: remove any type
  getChainTips(): Observable<any> {
    return this.rpcRequest('getchaintips');
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
