import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';

@Injectable()
export class ZmqService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    GET_ZMQ_NOTIFICATIONS: 'getzmqnotifications',
  };

  getZmqNotifications(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_ZMQ_NOTIFICATIONS);
  }
}
