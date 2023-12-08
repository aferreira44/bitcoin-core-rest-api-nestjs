import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';

@Injectable()
export class ControlService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    GET_MEMORY_INFO: 'getmemoryinfo',
    GET_RPC_INFO: 'getrpcinfo',
    HELP: 'help',
    LOGGING: 'logging',
    STOP: 'stop',
    UPTIME: 'uptime',
  };

  getMemoryInfo(mode = 'stats'): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_MEMORY_INFO, {
      mode,
    });
  }

  getRpcInfo(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_RPC_INFO);
  }

  help(command?: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.HELP, { command });
  }

  logging(
    include_category?: string[],
    exclude_category?: string[],
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.LOGGING, {
      include_category,
      exclude_category,
    });
  }

  stop(): Observable<any> {
    return this.rpcService.request(this.availableMethods.STOP);
  }

  uptime(): Observable<any> {
    return this.rpcService.request(this.availableMethods.UPTIME);
  }
}
