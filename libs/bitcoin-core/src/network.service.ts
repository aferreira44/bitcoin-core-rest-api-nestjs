import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RpcService } from './rpc.service';

@Injectable()
export class NetworkService {
  constructor(private readonly rpcService: RpcService) {}

  availableMethods = {
    ADD_NODE: 'addnode',
    CLEAR_BANNED: 'clearbanned',
    DISCONNECT_NODE: 'disconnectnode',
    GET_ADDED_NODE_INFO: 'getaddednodeinfo',
    GET_ADDR_MAN_INFO: 'getaddrmaninfo',
    GET_CONNECTION_COUNT: 'getconnectioncount',
    GET_NET_TOTALS: 'getnettotals',
    GET_NETWORK_INFO: 'getnetworkinfo',
    GET_NODE_ADDRESSES: 'getnodeaddresses',
    GET_PEER_INFO: 'getpeerinfo',
    LIST_BANNED: 'listbanned',
    PING: 'ping',
    SET_BAN: 'setban',
    SET_NETWORK_ACTIVE: 'setnetworkactive',
  };

  addNode(
    node: string,
    command: 'add' | 'remove' | 'onetry',
    v2transport = false,
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.ADD_NODE, {
      node,
      command,
      v2transport,
    });
  }

  clearBanned(): Observable<any> {
    return this.rpcService.request(this.availableMethods.CLEAR_BANNED);
  }

  disconnectNode(address?: string, nodeid?: number): Observable<any> {
    return this.rpcService.request(this.availableMethods.DISCONNECT_NODE, {
      address,
      nodeid,
    });
  }

  getAddedNodeInfo(node?: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_ADDED_NODE_INFO, {
      node,
    });
  }

  getAddrManInfo(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_ADDR_MAN_INFO);
  }

  getConnectionCount(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_CONNECTION_COUNT);
  }

  getNetTotals(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_NET_TOTALS);
  }

  getNetworkInfo(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_NETWORK_INFO);
  }

  getNodeAddresses(count = 1, network?: string): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_NODE_ADDRESSES, {
      count,
      network,
    });
  }

  getPeerInfo(): Observable<any> {
    return this.rpcService.request(this.availableMethods.GET_PEER_INFO);
  }

  listBanned(): Observable<any> {
    return this.rpcService.request(this.availableMethods.LIST_BANNED);
  }

  ping(): Observable<any> {
    return this.rpcService.request(this.availableMethods.PING);
  }

  setBan(
    subnet: string,
    command: 'add' | 'remove',
    bantime = 0,
    absolute = false,
  ): Observable<any> {
    return this.rpcService.request(this.availableMethods.SET_BAN, {
      subnet,
      command,
      bantime,
      absolute,
    });
  }

  setNetworkActive(state: boolean): Observable<any> {
    return this.rpcService.request(this.availableMethods.SET_NETWORK_ACTIVE, {
      state,
    });
  }
}
