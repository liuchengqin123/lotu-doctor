/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings,
  GrpcEvent
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './lotus.pb';
import * as gogoproto000 from '../gogoproto/gogo.pb';
import * as googleProtobuf001 from '../google/protobuf/empty.pb';
import * as validate002 from '../validate/validate.pb';
import { GRPC_LOTUS_SERVICE_CLIENT_SETTINGS } from './lotus.pbconf';
/**
 * Service client implementation for lotuspb.LotusService
 */
@Injectable({
  providedIn: 'root'
})
export class LotusServiceClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_LOTUS_SERVICE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    settings = settings instanceof Function ? settings() : settings
    this.client = clientFactory.createClient('lotuspb.LotusService', settings);
  }

  /**
   * Unary RPC for /lotuspb.LotusService/UnaryRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  unaryRPC(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.unaryRPC$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/UnaryRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  unaryRPC$eventStream(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/UnaryRPC',
      requestData,
      requestMetadata,
      requestClass: thisProto.Request,
      responseClass: thisProto.Response
    });
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/ServerStreamingRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  serverStreamingRPC(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.serverStreamingRPC$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/ServerStreamingRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  serverStreamingRPC$eventStream(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/lotuspb.LotusService/ServerStreamingRPC',
      requestData,
      requestMetadata,
      requestClass: thisProto.Request,
      responseClass: thisProto.Response
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/ClientStreamingRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  clientStreamingRPC(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.clientStreamingRPC$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /lotuspb.LotusService/ClientStreamingRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  clientStreamingRPC$eventStream(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/ClientStreamingRPC',
      requestData,
      requestMetadata,
      requestClass: thisProto.Request,
      responseClass: thisProto.Response
    });
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/BidirectionalStreamingRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  bidirectionalStreamingRPC(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.bidirectionalStreamingRPC$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/BidirectionalStreamingRPC
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  bidirectionalStreamingRPC$eventStream(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/lotuspb.LotusService/BidirectionalStreamingRPC',
      requestData,
      requestMetadata,
      requestClass: thisProto.Request,
      responseClass: thisProto.Response
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/PledgeGarbage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  pledgeGarbage(
    requestData: thisProto.PledgeGarbageRequest,
    requestMetadata: Metadata = {}
  ): Observable<googleProtobuf001.Empty> {
    return this.pledgeGarbage$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/PledgeGarbage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
   */
  pledgeGarbage$eventStream(
    requestData: thisProto.PledgeGarbageRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<googleProtobuf001.Empty>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/PledgeGarbage',
      requestData,
      requestMetadata,
      requestClass: thisProto.PledgeGarbageRequest,
      responseClass: googleProtobuf001.Empty
    });
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/MpoolPushMessageSign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MpoolPushMessageSignResponse>
   */
  mpoolPushMessageSign(
    requestData: thisProto.MpoolPushMessageSignRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MpoolPushMessageSignResponse> {
    return this.mpoolPushMessageSign$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/MpoolPushMessageSign
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MpoolPushMessageSignResponse>>
   */
  mpoolPushMessageSign$eventStream(
    requestData: thisProto.MpoolPushMessageSignRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MpoolPushMessageSignResponse>> {
    return this.handler.handle({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/lotuspb.LotusService/MpoolPushMessageSign',
      requestData,
      requestMetadata,
      requestClass: thisProto.MpoolPushMessageSignRequest,
      responseClass: thisProto.MpoolPushMessageSignResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/WorkerState
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WorkerStateResponse>
   */
  workerState(
    requestData: thisProto.Worker,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.WorkerStateResponse> {
    return this.workerState$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/WorkerState
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.WorkerStateResponse>>
   */
  workerState$eventStream(
    requestData: thisProto.Worker,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.WorkerStateResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/WorkerState',
      requestData,
      requestMetadata,
      requestClass: thisProto.Worker,
      responseClass: thisProto.WorkerStateResponse
    });
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerAddPiece
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddPiece>
   */
  workerAddPiece(
    requestData: thisProto.AddPieceResult,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AddPiece> {
    return this.workerAddPiece$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerAddPiece
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AddPiece>>
   */
  workerAddPiece$eventStream(
    requestData: thisProto.AddPieceResult,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AddPiece>> {
    return this.handler.handle({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/lotuspb.LotusService/WorkerAddPiece',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddPieceResult,
      responseClass: thisProto.AddPiece
    });
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerReadPiece
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PiecePartRequest>
   */
  workerReadPiece(
    requestData: thisProto.PiecePart,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PiecePartRequest> {
    return this.workerReadPiece$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerReadPiece
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PiecePartRequest>>
   */
  workerReadPiece$eventStream(
    requestData: thisProto.PiecePart,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PiecePartRequest>> {
    return this.handler.handle({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/lotuspb.LotusService/WorkerReadPiece',
      requestData,
      requestMetadata,
      requestClass: thisProto.PiecePart,
      responseClass: thisProto.PiecePartRequest
    });
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerFetchTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Task>
   */
  workerFetchTask(
    requestData: thisProto.TaskReceipt,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Task> {
    return this.workerFetchTask$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerFetchTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Task>>
   */
  workerFetchTask$eventStream(
    requestData: thisProto.TaskReceipt,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Task>> {
    return this.handler.handle({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/lotuspb.LotusService/WorkerFetchTask',
      requestData,
      requestMetadata,
      requestClass: thisProto.TaskReceipt,
      responseClass: thisProto.Task
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/WorkerFinishTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  workerFinishTask(
    requestData: thisProto.TaskResult,
    requestMetadata: Metadata = {}
  ): Observable<googleProtobuf001.Empty> {
    return this.workerFinishTask$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/WorkerFinishTask
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
   */
  workerFinishTask$eventStream(
    requestData: thisProto.TaskResult,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<googleProtobuf001.Empty>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/WorkerFinishTask',
      requestData,
      requestMetadata,
      requestClass: thisProto.TaskResult,
      responseClass: googleProtobuf001.Empty
    });
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerReadSector
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SectorPartRequest>
   */
  workerReadSector(
    requestData: thisProto.SectorPart,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SectorPartRequest> {
    return this.workerReadSector$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Server streaming RPC for /lotuspb.LotusService/WorkerReadSector
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SectorPartRequest>>
   */
  workerReadSector$eventStream(
    requestData: thisProto.SectorPart,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SectorPartRequest>> {
    return this.handler.handle({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/lotuspb.LotusService/WorkerReadSector',
      requestData,
      requestMetadata,
      requestClass: thisProto.SectorPart,
      responseClass: thisProto.SectorPartRequest
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/WalletBalance
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.WalletBalanceResponse>
   */
  walletBalance(
    requestData: thisProto.WalletBalanceRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.WalletBalanceResponse> {
    return this.walletBalance$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/WalletBalance
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.WalletBalanceResponse>>
   */
  walletBalance$eventStream(
    requestData: thisProto.WalletBalanceRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.WalletBalanceResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/WalletBalance',
      requestData,
      requestMetadata,
      requestClass: thisProto.WalletBalanceRequest,
      responseClass: thisProto.WalletBalanceResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerPower
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MinerPowerResponse>
   */
  minerPower(
    requestData: thisProto.MinerPowerRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MinerPowerResponse> {
    return this.minerPower$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerPower
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MinerPowerResponse>>
   */
  minerPower$eventStream(
    requestData: thisProto.MinerPowerRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MinerPowerResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/MinerPower',
      requestData,
      requestMetadata,
      requestClass: thisProto.MinerPowerRequest,
      responseClass: thisProto.MinerPowerResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerSectorCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MinerSectorCountResponse>
   */
  minerSectorCount(
    requestData: thisProto.MinerSectorCountRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MinerSectorCountResponse> {
    return this.minerSectorCount$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerSectorCount
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MinerSectorCountResponse>>
   */
  minerSectorCount$eventStream(
    requestData: thisProto.MinerSectorCountRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MinerSectorCountResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/MinerSectorCount',
      requestData,
      requestMetadata,
      requestClass: thisProto.MinerSectorCountRequest,
      responseClass: thisProto.MinerSectorCountResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerWorkers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MinerWorkersResponse>
   */
  minerWorkers(
    requestData: thisProto.MinerWorkersRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MinerWorkersResponse> {
    return this.minerWorkers$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerWorkers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MinerWorkersResponse>>
   */
  minerWorkers$eventStream(
    requestData: thisProto.MinerWorkersRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MinerWorkersResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/MinerWorkers',
      requestData,
      requestMetadata,
      requestClass: thisProto.MinerWorkersRequest,
      responseClass: thisProto.MinerWorkersResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerWindowPoSt
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MinerWindowPoStResponse>
   */
  minerWindowPoSt(
    requestData: thisProto.MinerWindowPoStRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MinerWindowPoStResponse> {
    return this.minerWindowPoSt$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerWindowPoSt
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MinerWindowPoStResponse>>
   */
  minerWindowPoSt$eventStream(
    requestData: thisProto.MinerWindowPoStRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MinerWindowPoStResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/MinerWindowPoSt',
      requestData,
      requestMetadata,
      requestClass: thisProto.MinerWindowPoStRequest,
      responseClass: thisProto.MinerWindowPoStResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MinerInfoResponse>
   */
  minerInfo(
    requestData: googleProtobuf001.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MinerInfoResponse> {
    return this.minerInfo$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MinerInfoResponse>>
   */
  minerInfo$eventStream(
    requestData: googleProtobuf001.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MinerInfoResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/MinerInfo',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf001.Empty,
      responseClass: thisProto.MinerInfoResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerInfoDetailed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MinerInfoDetailedResponse>
   */
  minerInfoDetailed(
    requestData: googleProtobuf001.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MinerInfoDetailedResponse> {
    return this.minerInfoDetailed$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /lotuspb.LotusService/MinerInfoDetailed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MinerInfoDetailedResponse>>
   */
  minerInfoDetailed$eventStream(
    requestData: googleProtobuf001.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MinerInfoDetailedResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/MinerInfoDetailed',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf001.Empty,
      responseClass: thisProto.MinerInfoDetailedResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorLegalStates
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SectorLegalStatesResponse>
   */
  sectorLegalStates(
    requestData: googleProtobuf001.Empty,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SectorLegalStatesResponse> {
    return this.sectorLegalStates$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorLegalStates
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SectorLegalStatesResponse>>
   */
  sectorLegalStates$eventStream(
    requestData: googleProtobuf001.Empty,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SectorLegalStatesResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/SectorLegalStates',
      requestData,
      requestMetadata,
      requestClass: googleProtobuf001.Empty,
      responseClass: thisProto.SectorLegalStatesResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Sector>
   */
  sectorStatus(
    requestData: thisProto.SectorRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Sector> {
    return this.sectorStatus$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Sector>>
   */
  sectorStatus$eventStream(
    requestData: thisProto.SectorRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Sector>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/SectorStatus',
      requestData,
      requestMetadata,
      requestClass: thisProto.SectorRequest,
      responseClass: thisProto.Sector
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SectorListResponse>
   */
  sectorList(
    requestData: thisProto.SectorListRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SectorListResponse> {
    return this.sectorList$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SectorListResponse>>
   */
  sectorList$eventStream(
    requestData: thisProto.SectorListRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SectorListResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/SectorList',
      requestData,
      requestMetadata,
      requestClass: thisProto.SectorListRequest,
      responseClass: thisProto.SectorListResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorRemove
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SectorBatchResponse>
   */
  sectorRemove(
    requestData: thisProto.SectorRemoveRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SectorBatchResponse> {
    return this.sectorRemove$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorRemove
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SectorBatchResponse>>
   */
  sectorRemove$eventStream(
    requestData: thisProto.SectorRemoveRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SectorBatchResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/SectorRemove',
      requestData,
      requestMetadata,
      requestClass: thisProto.SectorRemoveRequest,
      responseClass: thisProto.SectorBatchResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorUpdate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SectorBatchResponse>
   */
  sectorUpdate(
    requestData: thisProto.SectorUpdateRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SectorBatchResponse> {
    return this.sectorUpdate$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorUpdate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SectorBatchResponse>>
   */
  sectorUpdate$eventStream(
    requestData: thisProto.SectorUpdateRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SectorBatchResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/SectorUpdate',
      requestData,
      requestMetadata,
      requestClass: thisProto.SectorUpdateRequest,
      responseClass: thisProto.SectorBatchResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorLog
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SectorLogResponse>
   */
  sectorLog(
    requestData: thisProto.SectorRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.SectorLogResponse> {
    return this.sectorLog$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorLog
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.SectorLogResponse>>
   */
  sectorLog$eventStream(
    requestData: thisProto.SectorRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.SectorLogResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/SectorLog',
      requestData,
      requestMetadata,
      requestClass: thisProto.SectorRequest,
      responseClass: thisProto.SectorLogResponse
    });
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorWorker
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Worker>
   */
  sectorWorker(
    requestData: thisProto.SectorRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Worker> {
    return this.sectorWorker$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /lotuspb.LotusService/SectorWorker
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Worker>>
   */
  sectorWorker$eventStream(
    requestData: thisProto.SectorRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Worker>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/lotuspb.LotusService/SectorWorker',
      requestData,
      requestMetadata,
      requestClass: thisProto.SectorRequest,
      responseClass: thisProto.Worker
    });
  }
}
