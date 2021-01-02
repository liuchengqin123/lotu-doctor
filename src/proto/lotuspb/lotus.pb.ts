/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as gogoproto000 from '../gogoproto/gogo.pb';
import * as googleProtobuf001 from '../google/protobuf/empty.pb';
import * as validate002 from '../validate/validate.pb';
export enum SectorFileType {
  FTUnsealed = 0,
  FTSealed = 1,
  FTCache = 2
}
export enum TaskType {
  Unspecified = 0,
  NewSector = 1,
  PreCommit1 = 2,
  PreCommit2 = 3,
  Commit1 = 4,
  Commit2 = 5,
  Finalize = 6
}
/**
 * Message implementation for lotuspb.Request
 */
export class Request implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Request();
    Request.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Request) {
    _instance.request = _instance.request || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Request,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.request = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    Request.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Request, _writer: BinaryWriter) {
    if (_instance.request && _instance.request.length) {
      _writer.writeBytes(1, _instance.request);
    }
  }

  private _request?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Request to deeply clone from
   */
  constructor(_value?: RecursivePartial<Request>) {
    _value = _value || {};
    this.request = _value.request;
    Request.refineValues(this);
  }
  get request(): Uint8Array | undefined {
    return this._request;
  }
  set request(value: Uint8Array | undefined) {
    this._request = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Request.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Request.AsObject {
    return {
      request: this.request ? this.request.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Request {
  /**
   * Standard JavaScript object representation for Request
   */
  export interface AsObject {
    request?: Uint8Array;
  }
}

/**
 * Message implementation for lotuspb.Response
 */
export class Response implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Response();
    Response.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Response) {
    _instance.response = _instance.response || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Response,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    Response.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Response, _writer: BinaryWriter) {
    if (_instance.response && _instance.response.length) {
      _writer.writeBytes(1, _instance.response);
    }
  }

  private _response?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Response to deeply clone from
   */
  constructor(_value?: RecursivePartial<Response>) {
    _value = _value || {};
    this.response = _value.response;
    Response.refineValues(this);
  }
  get response(): Uint8Array | undefined {
    return this._response;
  }
  set response(value: Uint8Array | undefined) {
    this._response = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Response.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Response.AsObject {
    return {
      response: this.response ? this.response.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Response {
  /**
   * Standard JavaScript object representation for Response
   */
  export interface AsObject {
    response?: Uint8Array;
  }
}

/**
 * Message implementation for lotuspb.PledgeGarbageRequest
 */
export class PledgeGarbageRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PledgeGarbageRequest();
    PledgeGarbageRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PledgeGarbageRequest) {
    _instance.auto = _instance.auto || false;
    _instance.autoEnable = _instance.autoEnable || false;
    _instance.expirationDays = _instance.expirationDays || 0;
    _instance.useExisting = _instance.useExisting || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PledgeGarbageRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.auto = _reader.readBool();
          break;
        case 2:
          _instance.autoEnable = _reader.readBool();
          break;
        case 3:
          _instance.expirationDays = _reader.readInt32();
          break;
        case 4:
          _instance.useExisting = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    PledgeGarbageRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PledgeGarbageRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.auto) {
      _writer.writeBool(1, _instance.auto);
    }
    if (_instance.autoEnable) {
      _writer.writeBool(2, _instance.autoEnable);
    }
    if (_instance.expirationDays) {
      _writer.writeInt32(3, _instance.expirationDays);
    }
    if (_instance.useExisting) {
      _writer.writeBool(4, _instance.useExisting);
    }
  }

  private _auto?: boolean;
  private _autoEnable?: boolean;
  private _expirationDays?: number;
  private _useExisting?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PledgeGarbageRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PledgeGarbageRequest>) {
    _value = _value || {};
    this.auto = _value.auto;
    this.autoEnable = _value.autoEnable;
    this.expirationDays = _value.expirationDays;
    this.useExisting = _value.useExisting;
    PledgeGarbageRequest.refineValues(this);
  }
  get auto(): boolean | undefined {
    return this._auto;
  }
  set auto(value: boolean | undefined) {
    this._auto = value;
  }
  get autoEnable(): boolean | undefined {
    return this._autoEnable;
  }
  set autoEnable(value: boolean | undefined) {
    this._autoEnable = value;
  }
  get expirationDays(): number | undefined {
    return this._expirationDays;
  }
  set expirationDays(value: number | undefined) {
    this._expirationDays = value;
  }
  get useExisting(): boolean | undefined {
    return this._useExisting;
  }
  set useExisting(value: boolean | undefined) {
    this._useExisting = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PledgeGarbageRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PledgeGarbageRequest.AsObject {
    return {
      auto: this.auto,
      autoEnable: this.autoEnable,
      expirationDays: this.expirationDays,
      useExisting: this.useExisting
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PledgeGarbageRequest {
  /**
   * Standard JavaScript object representation for PledgeGarbageRequest
   */
  export interface AsObject {
    auto?: boolean;
    autoEnable?: boolean;
    expirationDays?: number;
    useExisting?: boolean;
  }
}

/**
 * Message implementation for lotuspb.MpoolPushMessageSignRequest
 */
export class MpoolPushMessageSignRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MpoolPushMessageSignRequest();
    MpoolPushMessageSignRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MpoolPushMessageSignRequest) {
    _instance.message = _instance.message || new Uint8Array();
    _instance.signedMessage = _instance.signedMessage || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MpoolPushMessageSignRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readBytes();
          break;
        case 2:
          _instance.signedMessage = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    MpoolPushMessageSignRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MpoolPushMessageSignRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.message && _instance.message.length) {
      _writer.writeBytes(1, _instance.message);
    }
    if (_instance.signedMessage && _instance.signedMessage.length) {
      _writer.writeBytes(2, _instance.signedMessage);
    }
  }

  private _message?: Uint8Array;
  private _signedMessage?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MpoolPushMessageSignRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MpoolPushMessageSignRequest>) {
    _value = _value || {};
    this.message = _value.message;
    this.signedMessage = _value.signedMessage;
    MpoolPushMessageSignRequest.refineValues(this);
  }
  get message(): Uint8Array | undefined {
    return this._message;
  }
  set message(value: Uint8Array | undefined) {
    this._message = value;
  }
  get signedMessage(): Uint8Array | undefined {
    return this._signedMessage;
  }
  set signedMessage(value: Uint8Array | undefined) {
    this._signedMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MpoolPushMessageSignRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MpoolPushMessageSignRequest.AsObject {
    return {
      message: this.message ? this.message.subarray(0) : new Uint8Array(),
      signedMessage: this.signedMessage
        ? this.signedMessage.subarray(0)
        : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MpoolPushMessageSignRequest {
  /**
   * Standard JavaScript object representation for MpoolPushMessageSignRequest
   */
  export interface AsObject {
    message?: Uint8Array;
    signedMessage?: Uint8Array;
  }
}

/**
 * Message implementation for lotuspb.MpoolPushMessageSignResponse
 */
export class MpoolPushMessageSignResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MpoolPushMessageSignResponse();
    MpoolPushMessageSignResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MpoolPushMessageSignResponse) {
    _instance.nonce = _instance.nonce || '0';
    _instance.signedMessage = _instance.signedMessage || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MpoolPushMessageSignResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.nonce = _reader.readUint64String();
          break;
        case 2:
          _instance.signedMessage = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    MpoolPushMessageSignResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MpoolPushMessageSignResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.nonce) {
      _writer.writeUint64String(1, _instance.nonce);
    }
    if (_instance.signedMessage && _instance.signedMessage.length) {
      _writer.writeBytes(2, _instance.signedMessage);
    }
  }

  private _nonce?: string;
  private _signedMessage?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MpoolPushMessageSignResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MpoolPushMessageSignResponse>) {
    _value = _value || {};
    this.nonce = _value.nonce;
    this.signedMessage = _value.signedMessage;
    MpoolPushMessageSignResponse.refineValues(this);
  }
  get nonce(): string | undefined {
    return this._nonce;
  }
  set nonce(value: string | undefined) {
    this._nonce = value;
  }
  get signedMessage(): Uint8Array | undefined {
    return this._signedMessage;
  }
  set signedMessage(value: Uint8Array | undefined) {
    this._signedMessage = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MpoolPushMessageSignResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MpoolPushMessageSignResponse.AsObject {
    return {
      nonce: this.nonce,
      signedMessage: this.signedMessage
        ? this.signedMessage.subarray(0)
        : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MpoolPushMessageSignResponse {
  /**
   * Standard JavaScript object representation for MpoolPushMessageSignResponse
   */
  export interface AsObject {
    nonce?: string;
    signedMessage?: Uint8Array;
  }
}

/**
 * Message implementation for lotuspb.PieceInfo
 */
export class PieceInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PieceInfo();
    PieceInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PieceInfo) {
    _instance.size = _instance.size || '0';
    _instance.pieceCid = _instance.pieceCid || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PieceInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.size = _reader.readUint64String();
          break;
        case 2:
          _instance.pieceCid = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    PieceInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: PieceInfo, _writer: BinaryWriter) {
    if (_instance.size) {
      _writer.writeUint64String(1, _instance.size);
    }
    if (_instance.pieceCid && _instance.pieceCid.length) {
      _writer.writeBytes(2, _instance.pieceCid);
    }
  }

  private _size?: string;
  private _pieceCid?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PieceInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PieceInfo>) {
    _value = _value || {};
    this.size = _value.size;
    this.pieceCid = _value.pieceCid;
    PieceInfo.refineValues(this);
  }
  get size(): string | undefined {
    return this._size;
  }
  set size(value: string | undefined) {
    this._size = value;
  }
  get pieceCid(): Uint8Array | undefined {
    return this._pieceCid;
  }
  set pieceCid(value: Uint8Array | undefined) {
    this._pieceCid = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PieceInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PieceInfo.AsObject {
    return {
      size: this.size,
      pieceCid: this.pieceCid ? this.pieceCid.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PieceInfo {
  /**
   * Standard JavaScript object representation for PieceInfo
   */
  export interface AsObject {
    size?: string;
    pieceCid?: Uint8Array;
  }
}

/**
 * Message implementation for lotuspb.Statz
 */
export class Statz implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Statz();
    Statz.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Statz) {
    _instance.multiThreadedCurrent = _instance.multiThreadedCurrent || false;
    _instance.gpuUsedNumCurrent = _instance.gpuUsedNumCurrent || 0;
    _instance.gpuTotalNum = _instance.gpuTotalNum || 0;
    _instance.gpuP2Multiplier = _instance.gpuP2Multiplier || 0;
    _instance.addPiece = _instance.addPiece || undefined;
    _instance.preCommit1 = _instance.preCommit1 || undefined;
    _instance.preCommit2 = _instance.preCommit2 || undefined;
    _instance.commit1 = _instance.commit1 || undefined;
    _instance.commit2 = _instance.commit2 || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Statz, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.multiThreadedCurrent = _reader.readBool();
          break;
        case 2:
          _instance.gpuUsedNumCurrent = _reader.readInt32();
          break;
        case 3:
          _instance.gpuTotalNum = _reader.readInt32();
          break;
        case 4:
          _instance.gpuP2Multiplier = _reader.readInt32();
          break;
        case 5:
          _instance.addPiece = new Statz.Concurrency();
          _reader.readMessage(
            _instance.addPiece,
            Statz.Concurrency.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.preCommit1 = new Statz.Concurrency();
          _reader.readMessage(
            _instance.preCommit1,
            Statz.Concurrency.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.preCommit2 = new Statz.Concurrency();
          _reader.readMessage(
            _instance.preCommit2,
            Statz.Concurrency.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.commit1 = new Statz.Concurrency();
          _reader.readMessage(
            _instance.commit1,
            Statz.Concurrency.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.commit2 = new Statz.Concurrency();
          _reader.readMessage(
            _instance.commit2,
            Statz.Concurrency.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Statz.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Statz, _writer: BinaryWriter) {
    if (_instance.multiThreadedCurrent) {
      _writer.writeBool(1, _instance.multiThreadedCurrent);
    }
    if (_instance.gpuUsedNumCurrent) {
      _writer.writeInt32(2, _instance.gpuUsedNumCurrent);
    }
    if (_instance.gpuTotalNum) {
      _writer.writeInt32(3, _instance.gpuTotalNum);
    }
    if (_instance.gpuP2Multiplier) {
      _writer.writeInt32(4, _instance.gpuP2Multiplier);
    }
    if (_instance.addPiece) {
      _writer.writeMessage(
        5,
        _instance.addPiece as any,
        Statz.Concurrency.serializeBinaryToWriter
      );
    }
    if (_instance.preCommit1) {
      _writer.writeMessage(
        6,
        _instance.preCommit1 as any,
        Statz.Concurrency.serializeBinaryToWriter
      );
    }
    if (_instance.preCommit2) {
      _writer.writeMessage(
        7,
        _instance.preCommit2 as any,
        Statz.Concurrency.serializeBinaryToWriter
      );
    }
    if (_instance.commit1) {
      _writer.writeMessage(
        8,
        _instance.commit1 as any,
        Statz.Concurrency.serializeBinaryToWriter
      );
    }
    if (_instance.commit2) {
      _writer.writeMessage(
        9,
        _instance.commit2 as any,
        Statz.Concurrency.serializeBinaryToWriter
      );
    }
  }

  private _multiThreadedCurrent?: boolean;
  private _gpuUsedNumCurrent?: number;
  private _gpuTotalNum?: number;
  private _gpuP2Multiplier?: number;
  private _addPiece?: Statz.Concurrency;
  private _preCommit1?: Statz.Concurrency;
  private _preCommit2?: Statz.Concurrency;
  private _commit1?: Statz.Concurrency;
  private _commit2?: Statz.Concurrency;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Statz to deeply clone from
   */
  constructor(_value?: RecursivePartial<Statz>) {
    _value = _value || {};
    this.multiThreadedCurrent = _value.multiThreadedCurrent;
    this.gpuUsedNumCurrent = _value.gpuUsedNumCurrent;
    this.gpuTotalNum = _value.gpuTotalNum;
    this.gpuP2Multiplier = _value.gpuP2Multiplier;
    this.addPiece = _value.addPiece
      ? new Statz.Concurrency(_value.addPiece)
      : undefined;
    this.preCommit1 = _value.preCommit1
      ? new Statz.Concurrency(_value.preCommit1)
      : undefined;
    this.preCommit2 = _value.preCommit2
      ? new Statz.Concurrency(_value.preCommit2)
      : undefined;
    this.commit1 = _value.commit1
      ? new Statz.Concurrency(_value.commit1)
      : undefined;
    this.commit2 = _value.commit2
      ? new Statz.Concurrency(_value.commit2)
      : undefined;
    Statz.refineValues(this);
  }
  get multiThreadedCurrent(): boolean | undefined {
    return this._multiThreadedCurrent;
  }
  set multiThreadedCurrent(value: boolean | undefined) {
    this._multiThreadedCurrent = value;
  }
  get gpuUsedNumCurrent(): number | undefined {
    return this._gpuUsedNumCurrent;
  }
  set gpuUsedNumCurrent(value: number | undefined) {
    this._gpuUsedNumCurrent = value;
  }
  get gpuTotalNum(): number | undefined {
    return this._gpuTotalNum;
  }
  set gpuTotalNum(value: number | undefined) {
    this._gpuTotalNum = value;
  }
  get gpuP2Multiplier(): number | undefined {
    return this._gpuP2Multiplier;
  }
  set gpuP2Multiplier(value: number | undefined) {
    this._gpuP2Multiplier = value;
  }
  get addPiece(): Statz.Concurrency | undefined {
    return this._addPiece;
  }
  set addPiece(value: Statz.Concurrency | undefined) {
    this._addPiece = value;
  }
  get preCommit1(): Statz.Concurrency | undefined {
    return this._preCommit1;
  }
  set preCommit1(value: Statz.Concurrency | undefined) {
    this._preCommit1 = value;
  }
  get preCommit2(): Statz.Concurrency | undefined {
    return this._preCommit2;
  }
  set preCommit2(value: Statz.Concurrency | undefined) {
    this._preCommit2 = value;
  }
  get commit1(): Statz.Concurrency | undefined {
    return this._commit1;
  }
  set commit1(value: Statz.Concurrency | undefined) {
    this._commit1 = value;
  }
  get commit2(): Statz.Concurrency | undefined {
    return this._commit2;
  }
  set commit2(value: Statz.Concurrency | undefined) {
    this._commit2 = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Statz.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Statz.AsObject {
    return {
      multiThreadedCurrent: this.multiThreadedCurrent,
      gpuUsedNumCurrent: this.gpuUsedNumCurrent,
      gpuTotalNum: this.gpuTotalNum,
      gpuP2Multiplier: this.gpuP2Multiplier,
      addPiece: this.addPiece ? this.addPiece.toObject() : undefined,
      preCommit1: this.preCommit1 ? this.preCommit1.toObject() : undefined,
      preCommit2: this.preCommit2 ? this.preCommit2.toObject() : undefined,
      commit1: this.commit1 ? this.commit1.toObject() : undefined,
      commit2: this.commit2 ? this.commit2.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Statz {
  /**
   * Standard JavaScript object representation for Statz
   */
  export interface AsObject {
    multiThreadedCurrent?: boolean;
    gpuUsedNumCurrent?: number;
    gpuTotalNum?: number;
    gpuP2Multiplier?: number;
    addPiece?: Statz.Concurrency.AsObject;
    preCommit1?: Statz.Concurrency.AsObject;
    preCommit2?: Statz.Concurrency.AsObject;
    commit1?: Statz.Concurrency.AsObject;
    commit2?: Statz.Concurrency.AsObject;
  }

  /**
   * Message implementation for lotuspb.Concurrency
   */
  export class Concurrency implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Concurrency();
      Concurrency.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Concurrency) {
      _instance.limit = _instance.limit || 0;
      _instance.current = _instance.current || 0;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Concurrency,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.limit = _reader.readInt32();
            break;
          case 2:
            _instance.current = _reader.readInt32();
            break;
          default:
            _reader.skipField();
        }
      }

      Concurrency.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: Concurrency,
      _writer: BinaryWriter
    ) {
      if (_instance.limit) {
        _writer.writeInt32(1, _instance.limit);
      }
      if (_instance.current) {
        _writer.writeInt32(2, _instance.current);
      }
    }

    private _limit?: number;
    private _current?: number;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Concurrency to deeply clone from
     */
    constructor(_value?: RecursivePartial<Concurrency>) {
      _value = _value || {};
      this.limit = _value.limit;
      this.current = _value.current;
      Concurrency.refineValues(this);
    }
    get limit(): number | undefined {
      return this._limit;
    }
    set limit(value: number | undefined) {
      this._limit = value;
    }
    get current(): number | undefined {
      return this._current;
    }
    set current(value: number | undefined) {
      this._current = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Concurrency.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Concurrency.AsObject {
      return {
        limit: this.limit,
        current: this.current
      };
    }

    /**
     * JSON serializer
     * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
     */
    toJSON() {
      return this.toObject();
    }
  }
  export module Concurrency {
    /**
     * Standard JavaScript object representation for Concurrency
     */
    export interface AsObject {
      limit?: number;
      current?: number;
    }
  }
}

/**
 * Message implementation for lotuspb.Worker
 */
export class Worker implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Worker();
    Worker.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Worker) {
    _instance.id = _instance.id || '';
    _instance.addrs = _instance.addrs || [];
    _instance.hostname = _instance.hostname || '';
    _instance.allowDealSector = _instance.allowDealSector || false;
    _instance.statz = _instance.statz || undefined;
    _instance.sectors = _instance.sectors || [];
    _instance.tasks = _instance.tasks || [];
    _instance.updatedAt = _instance.updatedAt || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Worker, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          (_instance.addrs = _instance.addrs || []).push(_reader.readString());
          break;
        case 3:
          _instance.hostname = _reader.readString();
          break;
        case 4:
          _instance.allowDealSector = _reader.readBool();
          break;
        case 5:
          _instance.statz = new Statz();
          _reader.readMessage(
            _instance.statz,
            Statz.deserializeBinaryFromReader
          );
          break;
        case 6:
          const messageInitializer6 = new Worker.Sector();
          _reader.readMessage(
            messageInitializer6,
            Worker.Sector.deserializeBinaryFromReader
          );
          (_instance.sectors = _instance.sectors || []).push(
            messageInitializer6
          );
          break;
        case 7:
          const messageInitializer7 = new Worker.Task();
          _reader.readMessage(
            messageInitializer7,
            Worker.Task.deserializeBinaryFromReader
          );
          (_instance.tasks = _instance.tasks || []).push(messageInitializer7);
          break;
        case 8:
          _instance.updatedAt = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    Worker.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Worker, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.addrs && _instance.addrs.length) {
      _writer.writeRepeatedString(2, _instance.addrs);
    }
    if (_instance.hostname) {
      _writer.writeString(3, _instance.hostname);
    }
    if (_instance.allowDealSector) {
      _writer.writeBool(4, _instance.allowDealSector);
    }
    if (_instance.statz) {
      _writer.writeMessage(
        5,
        _instance.statz as any,
        Statz.serializeBinaryToWriter
      );
    }
    if (_instance.sectors && _instance.sectors.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.sectors as any,
        Worker.Sector.serializeBinaryToWriter
      );
    }
    if (_instance.tasks && _instance.tasks.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.tasks as any,
        Worker.Task.serializeBinaryToWriter
      );
    }
    if (_instance.updatedAt) {
      _writer.writeInt64String(8, _instance.updatedAt);
    }
  }

  private _id?: string;
  private _addrs?: string[];
  private _hostname?: string;
  private _allowDealSector?: boolean;
  private _statz?: Statz;
  private _sectors?: Worker.Sector[];
  private _tasks?: Worker.Task[];
  private _updatedAt?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Worker to deeply clone from
   */
  constructor(_value?: RecursivePartial<Worker>) {
    _value = _value || {};
    this.id = _value.id;
    this.addrs = (_value.addrs || []).slice();
    this.hostname = _value.hostname;
    this.allowDealSector = _value.allowDealSector;
    this.statz = _value.statz ? new Statz(_value.statz) : undefined;
    this.sectors = (_value.sectors || []).map(m => new Worker.Sector(m));
    this.tasks = (_value.tasks || []).map(m => new Worker.Task(m));
    this.updatedAt = _value.updatedAt;
    Worker.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get addrs(): string[] | undefined {
    return this._addrs;
  }
  set addrs(value: string[] | undefined) {
    this._addrs = value;
  }
  get hostname(): string | undefined {
    return this._hostname;
  }
  set hostname(value: string | undefined) {
    this._hostname = value;
  }
  get allowDealSector(): boolean | undefined {
    return this._allowDealSector;
  }
  set allowDealSector(value: boolean | undefined) {
    this._allowDealSector = value;
  }
  get statz(): Statz | undefined {
    return this._statz;
  }
  set statz(value: Statz | undefined) {
    this._statz = value;
  }
  get sectors(): Worker.Sector[] | undefined {
    return this._sectors;
  }
  set sectors(value: Worker.Sector[] | undefined) {
    this._sectors = value;
  }
  get tasks(): Worker.Task[] | undefined {
    return this._tasks;
  }
  set tasks(value: Worker.Task[] | undefined) {
    this._tasks = value;
  }
  get updatedAt(): string | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: string | undefined) {
    this._updatedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Worker.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Worker.AsObject {
    return {
      id: this.id,
      addrs: (this.addrs || []).slice(),
      hostname: this.hostname,
      allowDealSector: this.allowDealSector,
      statz: this.statz ? this.statz.toObject() : undefined,
      sectors: (this.sectors || []).map(m => m.toObject()),
      tasks: (this.tasks || []).map(m => m.toObject()),
      updatedAt: this.updatedAt
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Worker {
  /**
   * Standard JavaScript object representation for Worker
   */
  export interface AsObject {
    id?: string;
    addrs?: string[];
    hostname?: string;
    allowDealSector?: boolean;
    statz?: Statz.AsObject;
    sectors?: Worker.Sector.AsObject[];
    tasks?: Worker.Task.AsObject[];
    updatedAt?: string;
  }

  /**
   * Message implementation for lotuspb.Sector
   */
  export class Sector implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Sector();
      Sector.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Sector) {
      _instance.minerId = _instance.minerId || '0';
      _instance.sectorId = _instance.sectorId || '0';
      _instance.hasFile = _instance.hasFile || {};
      _instance.sectorSize = _instance.sectorSize || '0';
      _instance.finished = _instance.finished || false;
      _instance.healthy = _instance.healthy || false;
      _instance.reason = _instance.reason || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Sector,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.minerId = _reader.readUint64String();
            break;
          case 2:
            _instance.sectorId = _reader.readUint64String();
            break;
          case 3:
            const msg_3 = {} as any;
            _reader.readMessage(
              msg_3,
              Worker.Sector.HasFileEntry.deserializeBinaryFromReader
            );
            _instance.hasFile = _instance.hasFile || {};
            _instance.hasFile[msg_3.key] = msg_3.value;
            break;
          case 4:
            _instance.sectorSize = _reader.readUint64String();
            break;
          case 5:
            _instance.finished = _reader.readBool();
            break;
          case 6:
            _instance.healthy = _reader.readBool();
            break;
          case 7:
            _instance.reason = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      Sector.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Sector, _writer: BinaryWriter) {
      if (_instance.minerId) {
        _writer.writeUint64String(1, _instance.minerId);
      }
      if (_instance.sectorId) {
        _writer.writeUint64String(2, _instance.sectorId);
      }
      if (!!_instance.hasFile) {
        const keys_3 = Object.keys(_instance.hasFile as any);

        if (keys_3.length) {
          const repeated_3 = keys_3
            .map(key => ({
              key: Number(key),
              value: (_instance.hasFile as any)[key]
            }))
            .reduce((r, v) => [...r, v], [] as any[]);

          _writer.writeRepeatedMessage(
            3,
            repeated_3,
            Worker.Sector.HasFileEntry.serializeBinaryToWriter
          );
        }
      }
      if (_instance.sectorSize) {
        _writer.writeUint64String(4, _instance.sectorSize);
      }
      if (_instance.finished) {
        _writer.writeBool(5, _instance.finished);
      }
      if (_instance.healthy) {
        _writer.writeBool(6, _instance.healthy);
      }
      if (_instance.reason) {
        _writer.writeString(7, _instance.reason);
      }
    }

    private _minerId?: string;
    private _sectorId?: string;
    private _hasFile?: { [prop: number]: boolean };
    private _sectorSize?: string;
    private _finished?: boolean;
    private _healthy?: boolean;
    private _reason?: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Sector to deeply clone from
     */
    constructor(_value?: RecursivePartial<Sector>) {
      _value = _value || {};
      this.minerId = _value.minerId;
      this.sectorId = _value.sectorId;
      (this.hasFile = _value!.hasFile
        ? Object.keys(_value!.hasFile).reduce(
            (r, k) => ({ ...r, [k]: _value!.hasFile![k] }),
            {}
          )
        : {}),
        (this.sectorSize = _value.sectorSize);
      this.finished = _value.finished;
      this.healthy = _value.healthy;
      this.reason = _value.reason;
      Sector.refineValues(this);
    }
    get minerId(): string | undefined {
      return this._minerId;
    }
    set minerId(value: string | undefined) {
      this._minerId = value;
    }
    get sectorId(): string | undefined {
      return this._sectorId;
    }
    set sectorId(value: string | undefined) {
      this._sectorId = value;
    }
    get hasFile(): { [prop: number]: boolean } | undefined {
      return this._hasFile;
    }
    set hasFile(value: { [prop: number]: boolean } | undefined) {
      this._hasFile = value;
    }
    get sectorSize(): string | undefined {
      return this._sectorSize;
    }
    set sectorSize(value: string | undefined) {
      this._sectorSize = value;
    }
    get finished(): boolean | undefined {
      return this._finished;
    }
    set finished(value: boolean | undefined) {
      this._finished = value;
    }
    get healthy(): boolean | undefined {
      return this._healthy;
    }
    set healthy(value: boolean | undefined) {
      this._healthy = value;
    }
    get reason(): string | undefined {
      return this._reason;
    }
    set reason(value: string | undefined) {
      this._reason = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Sector.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Sector.AsObject {
      return {
        minerId: this.minerId,
        sectorId: this.sectorId,
        hasFile: this.hasFile
          ? Object.keys(this.hasFile).reduce(
              (r, k) => ({ ...r, [k]: this.hasFile![k] }),
              {}
            )
          : {},
        sectorSize: this.sectorSize,
        finished: this.finished,
        healthy: this.healthy,
        reason: this.reason
      };
    }

    /**
     * JSON serializer
     * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
     */
    toJSON() {
      return this.toObject();
    }
  }
  export module Sector {
    /**
     * Standard JavaScript object representation for Sector
     */
    export interface AsObject {
      minerId?: string;
      sectorId?: string;
      hasFile?: { [prop: number]: boolean };
      sectorSize?: string;
      finished?: boolean;
      healthy?: boolean;
      reason?: string;
    }

    /**
     * Message implementation for lotuspb.HasFileEntry
     */
    export class HasFileEntry implements GrpcMessage {
      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new HasFileEntry();
        HasFileEntry.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: HasFileEntry) {
        _instance.key = _instance.key || 0;
        _instance.value = _instance.value || false;
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: HasFileEntry,
        _reader: BinaryReader
      ) {
        while (_reader.nextField()) {
          if (_reader.isEndGroup()) break;

          switch (_reader.getFieldNumber()) {
            case 1:
              _instance.key = _reader.readInt32();
              break;
            case 2:
              _instance.value = _reader.readBool();
              break;
            default:
              _reader.skipField();
          }
        }

        HasFileEntry.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: HasFileEntry,
        _writer: BinaryWriter
      ) {
        if (_instance.key) {
          _writer.writeInt32(1, _instance.key);
        }
        if (_instance.value) {
          _writer.writeBool(2, _instance.value);
        }
      }

      private _key?: number;
      private _value?: boolean;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of HasFileEntry to deeply clone from
       */
      constructor(_value?: RecursivePartial<HasFileEntry>) {
        _value = _value || {};
        this.key = _value.key;
        this.value = _value.value;
        HasFileEntry.refineValues(this);
      }
      get key(): number | undefined {
        return this._key;
      }
      set key(value: number | undefined) {
        this._key = value;
      }
      get value(): boolean | undefined {
        return this._value;
      }
      set value(value: boolean | undefined) {
        this._value = value;
      }

      /**
       * Serialize message to binary data
       * @param instance message instance
       */
      serializeBinary() {
        const writer = new BinaryWriter();
        HasFileEntry.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): HasFileEntry.AsObject {
        return {
          key: this.key,
          value: this.value
        };
      }

      /**
       * JSON serializer
       * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
       */
      toJSON() {
        return this.toObject();
      }
    }
    export module HasFileEntry {
      /**
       * Standard JavaScript object representation for HasFileEntry
       */
      export interface AsObject {
        key?: number;
        value?: boolean;
      }
    }
  }

  /**
   * Message implementation for lotuspb.Task
   */
  export class Task implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Task();
      Task.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Task) {
      _instance.type = _instance.type || 0;
      _instance.sectorId = _instance.sectorId || '0';
      _instance.sectorStateId = _instance.sectorStateId || '0';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Task, _reader: BinaryReader) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.type = _reader.readEnum();
            break;
          case 2:
            _instance.sectorId = _reader.readUint64String();
            break;
          case 3:
            _instance.sectorStateId = _reader.readUint64String();
            break;
          default:
            _reader.skipField();
        }
      }

      Task.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Task, _writer: BinaryWriter) {
      if (_instance.type) {
        _writer.writeEnum(1, _instance.type);
      }
      if (_instance.sectorId) {
        _writer.writeUint64String(2, _instance.sectorId);
      }
      if (_instance.sectorStateId) {
        _writer.writeUint64String(3, _instance.sectorStateId);
      }
    }

    private _type?: TaskType;
    private _sectorId?: string;
    private _sectorStateId?: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Task to deeply clone from
     */
    constructor(_value?: RecursivePartial<Task>) {
      _value = _value || {};
      this.type = _value.type;
      this.sectorId = _value.sectorId;
      this.sectorStateId = _value.sectorStateId;
      Task.refineValues(this);
    }
    get type(): TaskType | undefined {
      return this._type;
    }
    set type(value: TaskType | undefined) {
      this._type = value;
    }
    get sectorId(): string | undefined {
      return this._sectorId;
    }
    set sectorId(value: string | undefined) {
      this._sectorId = value;
    }
    get sectorStateId(): string | undefined {
      return this._sectorStateId;
    }
    set sectorStateId(value: string | undefined) {
      this._sectorStateId = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Task.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Task.AsObject {
      return {
        type: this.type,
        sectorId: this.sectorId,
        sectorStateId: this.sectorStateId
      };
    }

    /**
     * JSON serializer
     * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
     */
    toJSON() {
      return this.toObject();
    }
  }
  export module Task {
    /**
     * Standard JavaScript object representation for Task
     */
    export interface AsObject {
      type?: TaskType;
      sectorId?: string;
      sectorStateId?: string;
    }
  }
}

/**
 * Message implementation for lotuspb.WorkerStateResponse
 */
export class WorkerStateResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WorkerStateResponse();
    WorkerStateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WorkerStateResponse) {
    _instance.sectors = _instance.sectors || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WorkerStateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 5:
          const messageInitializer5 = new WorkerStateResponse.Sector();
          _reader.readMessage(
            messageInitializer5,
            WorkerStateResponse.Sector.deserializeBinaryFromReader
          );
          (_instance.sectors = _instance.sectors || []).push(
            messageInitializer5
          );
          break;
        default:
          _reader.skipField();
      }
    }

    WorkerStateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WorkerStateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sectors && _instance.sectors.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.sectors as any,
        WorkerStateResponse.Sector.serializeBinaryToWriter
      );
    }
  }

  private _sectors?: WorkerStateResponse.Sector[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WorkerStateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<WorkerStateResponse>) {
    _value = _value || {};
    this.sectors = (_value.sectors || []).map(
      m => new WorkerStateResponse.Sector(m)
    );
    WorkerStateResponse.refineValues(this);
  }
  get sectors(): WorkerStateResponse.Sector[] | undefined {
    return this._sectors;
  }
  set sectors(value: WorkerStateResponse.Sector[] | undefined) {
    this._sectors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WorkerStateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WorkerStateResponse.AsObject {
    return {
      sectors: (this.sectors || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module WorkerStateResponse {
  /**
   * Standard JavaScript object representation for WorkerStateResponse
   */
  export interface AsObject {
    sectors?: WorkerStateResponse.Sector.AsObject[];
  }

  /**
   * Message implementation for lotuspb.Sector
   */
  export class Sector implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Sector();
      Sector.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Sector) {
      _instance.minerId = _instance.minerId || '0';
      _instance.sectorId = _instance.sectorId || '0';
      _instance.finished = _instance.finished || false;
      _instance.deleted = _instance.deleted || false;
      _instance.keepUnsealed = _instance.keepUnsealed || [];
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Sector,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.minerId = _reader.readUint64String();
            break;
          case 2:
            _instance.sectorId = _reader.readUint64String();
            break;
          case 3:
            _instance.finished = _reader.readBool();
            break;
          case 4:
            _instance.deleted = _reader.readBool();
            break;
          case 5:
            const messageInitializer5 = new SectorRange();
            _reader.readMessage(
              messageInitializer5,
              SectorRange.deserializeBinaryFromReader
            );
            (_instance.keepUnsealed = _instance.keepUnsealed || []).push(
              messageInitializer5
            );
            break;
          default:
            _reader.skipField();
        }
      }

      Sector.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Sector, _writer: BinaryWriter) {
      if (_instance.minerId) {
        _writer.writeUint64String(1, _instance.minerId);
      }
      if (_instance.sectorId) {
        _writer.writeUint64String(2, _instance.sectorId);
      }
      if (_instance.finished) {
        _writer.writeBool(3, _instance.finished);
      }
      if (_instance.deleted) {
        _writer.writeBool(4, _instance.deleted);
      }
      if (_instance.keepUnsealed && _instance.keepUnsealed.length) {
        _writer.writeRepeatedMessage(
          5,
          _instance.keepUnsealed as any,
          SectorRange.serializeBinaryToWriter
        );
      }
    }

    private _minerId?: string;
    private _sectorId?: string;
    private _finished?: boolean;
    private _deleted?: boolean;
    private _keepUnsealed?: SectorRange[];

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Sector to deeply clone from
     */
    constructor(_value?: RecursivePartial<Sector>) {
      _value = _value || {};
      this.minerId = _value.minerId;
      this.sectorId = _value.sectorId;
      this.finished = _value.finished;
      this.deleted = _value.deleted;
      this.keepUnsealed = (_value.keepUnsealed || []).map(
        m => new SectorRange(m)
      );
      Sector.refineValues(this);
    }
    get minerId(): string | undefined {
      return this._minerId;
    }
    set minerId(value: string | undefined) {
      this._minerId = value;
    }
    get sectorId(): string | undefined {
      return this._sectorId;
    }
    set sectorId(value: string | undefined) {
      this._sectorId = value;
    }
    get finished(): boolean | undefined {
      return this._finished;
    }
    set finished(value: boolean | undefined) {
      this._finished = value;
    }
    get deleted(): boolean | undefined {
      return this._deleted;
    }
    set deleted(value: boolean | undefined) {
      this._deleted = value;
    }
    get keepUnsealed(): SectorRange[] | undefined {
      return this._keepUnsealed;
    }
    set keepUnsealed(value: SectorRange[] | undefined) {
      this._keepUnsealed = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Sector.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Sector.AsObject {
      return {
        minerId: this.minerId,
        sectorId: this.sectorId,
        finished: this.finished,
        deleted: this.deleted,
        keepUnsealed: (this.keepUnsealed || []).map(m => m.toObject())
      };
    }

    /**
     * JSON serializer
     * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
     */
    toJSON() {
      return this.toObject();
    }
  }
  export module Sector {
    /**
     * Standard JavaScript object representation for Sector
     */
    export interface AsObject {
      minerId?: string;
      sectorId?: string;
      finished?: boolean;
      deleted?: boolean;
      keepUnsealed?: SectorRange.AsObject[];
    }
  }
}

/**
 * Message implementation for lotuspb.AddPiece
 */
export class AddPiece implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddPiece();
    AddPiece.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddPiece) {
    _instance.id = _instance.id || '0';
    _instance.pieceId = _instance.pieceId || '0';
    _instance.minerId = _instance.minerId || '0';
    _instance.sectorId = _instance.sectorId || '0';
    _instance.existingPieceSizes = _instance.existingPieceSizes || [];
    _instance.pieceSize = _instance.pieceSize || '0';
    _instance.bytes = _instance.bytes || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddPiece,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.pieceId = _reader.readUint64String();
          break;
        case 3:
          _instance.minerId = _reader.readUint64String();
          break;
        case 4:
          _instance.sectorId = _reader.readUint64String();
          break;
        case 5:
          (_instance.existingPieceSizes =
            _instance.existingPieceSizes || []).push(
            ...(_reader.readPackedUint64String() || [])
          );
          break;
        case 6:
          _instance.pieceSize = _reader.readUint64String();
          break;
        case 7:
          _instance.bytes = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    AddPiece.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: AddPiece, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.pieceId) {
      _writer.writeUint64String(2, _instance.pieceId);
    }
    if (_instance.minerId) {
      _writer.writeUint64String(3, _instance.minerId);
    }
    if (_instance.sectorId) {
      _writer.writeUint64String(4, _instance.sectorId);
    }
    if (_instance.existingPieceSizes && _instance.existingPieceSizes.length) {
      _writer.writePackedUint64String(5, _instance.existingPieceSizes);
    }
    if (_instance.pieceSize) {
      _writer.writeUint64String(6, _instance.pieceSize);
    }
    if (_instance.bytes && _instance.bytes.length) {
      _writer.writeBytes(7, _instance.bytes);
    }
  }

  private _id?: string;
  private _pieceId?: string;
  private _minerId?: string;
  private _sectorId?: string;
  private _existingPieceSizes?: string[];
  private _pieceSize?: string;
  private _bytes?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddPiece to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddPiece>) {
    _value = _value || {};
    this.id = _value.id;
    this.pieceId = _value.pieceId;
    this.minerId = _value.minerId;
    this.sectorId = _value.sectorId;
    this.existingPieceSizes = (_value.existingPieceSizes || []).slice();
    this.pieceSize = _value.pieceSize;
    this.bytes = _value.bytes;
    AddPiece.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get pieceId(): string | undefined {
    return this._pieceId;
  }
  set pieceId(value: string | undefined) {
    this._pieceId = value;
  }
  get minerId(): string | undefined {
    return this._minerId;
  }
  set minerId(value: string | undefined) {
    this._minerId = value;
  }
  get sectorId(): string | undefined {
    return this._sectorId;
  }
  set sectorId(value: string | undefined) {
    this._sectorId = value;
  }
  get existingPieceSizes(): string[] | undefined {
    return this._existingPieceSizes;
  }
  set existingPieceSizes(value: string[] | undefined) {
    this._existingPieceSizes = value;
  }
  get pieceSize(): string | undefined {
    return this._pieceSize;
  }
  set pieceSize(value: string | undefined) {
    this._pieceSize = value;
  }
  get bytes(): Uint8Array | undefined {
    return this._bytes;
  }
  set bytes(value: Uint8Array | undefined) {
    this._bytes = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddPiece.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddPiece.AsObject {
    return {
      id: this.id,
      pieceId: this.pieceId,
      minerId: this.minerId,
      sectorId: this.sectorId,
      existingPieceSizes: (this.existingPieceSizes || []).slice(),
      pieceSize: this.pieceSize,
      bytes: this.bytes ? this.bytes.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module AddPiece {
  /**
   * Standard JavaScript object representation for AddPiece
   */
  export interface AsObject {
    id?: string;
    pieceId?: string;
    minerId?: string;
    sectorId?: string;
    existingPieceSizes?: string[];
    pieceSize?: string;
    bytes?: Uint8Array;
  }
}

/**
 * Message implementation for lotuspb.AddPieceResult
 */
export class AddPieceResult implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddPieceResult();
    AddPieceResult.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddPieceResult) {
    _instance.id = _instance.id || '0';
    _instance.pieceId = _instance.pieceId || '0';
    _instance.piece = _instance.piece || undefined;
    _instance.error = _instance.error || '';
    _instance.worker = _instance.worker || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddPieceResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.pieceId = _reader.readUint64String();
          break;
        case 3:
          _instance.piece = new PieceInfo();
          _reader.readMessage(
            _instance.piece,
            PieceInfo.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.error = _reader.readString();
          break;
        case 5:
          _instance.worker = new Worker();
          _reader.readMessage(
            _instance.worker,
            Worker.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddPieceResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddPieceResult,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.pieceId) {
      _writer.writeUint64String(2, _instance.pieceId);
    }
    if (_instance.piece) {
      _writer.writeMessage(
        3,
        _instance.piece as any,
        PieceInfo.serializeBinaryToWriter
      );
    }
    if (_instance.error) {
      _writer.writeString(4, _instance.error);
    }
    if (_instance.worker) {
      _writer.writeMessage(
        5,
        _instance.worker as any,
        Worker.serializeBinaryToWriter
      );
    }
  }

  private _id?: string;
  private _pieceId?: string;
  private _piece?: PieceInfo;
  private _error?: string;
  private _worker?: Worker;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddPieceResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddPieceResult>) {
    _value = _value || {};
    this.id = _value.id;
    this.pieceId = _value.pieceId;
    this.piece = _value.piece ? new PieceInfo(_value.piece) : undefined;
    this.error = _value.error;
    this.worker = _value.worker ? new Worker(_value.worker) : undefined;
    AddPieceResult.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get pieceId(): string | undefined {
    return this._pieceId;
  }
  set pieceId(value: string | undefined) {
    this._pieceId = value;
  }
  get piece(): PieceInfo | undefined {
    return this._piece;
  }
  set piece(value: PieceInfo | undefined) {
    this._piece = value;
  }
  get error(): string | undefined {
    return this._error;
  }
  set error(value: string | undefined) {
    this._error = value;
  }
  get worker(): Worker | undefined {
    return this._worker;
  }
  set worker(value: Worker | undefined) {
    this._worker = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddPieceResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddPieceResult.AsObject {
    return {
      id: this.id,
      pieceId: this.pieceId,
      piece: this.piece ? this.piece.toObject() : undefined,
      error: this.error,
      worker: this.worker ? this.worker.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module AddPieceResult {
  /**
   * Standard JavaScript object representation for AddPieceResult
   */
  export interface AsObject {
    id?: string;
    pieceId?: string;
    piece?: PieceInfo.AsObject;
    error?: string;
    worker?: Worker.AsObject;
  }
}

/**
 * Message implementation for lotuspb.PiecePartRequest
 */
export class PiecePartRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PiecePartRequest();
    PiecePartRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PiecePartRequest) {
    _instance.id = _instance.id || '0';
    _instance.pieceId = _instance.pieceId || '0';
    _instance.sectorId = _instance.sectorId || '0';
    _instance.offset = _instance.offset || '0';
    _instance.size = _instance.size || '0';
    _instance.ticket = _instance.ticket || new Uint8Array();
    _instance.unsealedCid = _instance.unsealedCid || new Uint8Array();
    _instance.len = _instance.len || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PiecePartRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.pieceId = _reader.readUint64String();
          break;
        case 3:
          _instance.sectorId = _reader.readUint64String();
          break;
        case 4:
          _instance.offset = _reader.readUint64String();
          break;
        case 5:
          _instance.size = _reader.readUint64String();
          break;
        case 6:
          _instance.ticket = _reader.readBytes();
          break;
        case 7:
          _instance.unsealedCid = _reader.readBytes();
          break;
        case 8:
          _instance.len = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    PiecePartRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PiecePartRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.pieceId) {
      _writer.writeUint64String(2, _instance.pieceId);
    }
    if (_instance.sectorId) {
      _writer.writeUint64String(3, _instance.sectorId);
    }
    if (_instance.offset) {
      _writer.writeUint64String(4, _instance.offset);
    }
    if (_instance.size) {
      _writer.writeUint64String(5, _instance.size);
    }
    if (_instance.ticket && _instance.ticket.length) {
      _writer.writeBytes(6, _instance.ticket);
    }
    if (_instance.unsealedCid && _instance.unsealedCid.length) {
      _writer.writeBytes(7, _instance.unsealedCid);
    }
    if (_instance.len) {
      _writer.writeInt32(8, _instance.len);
    }
  }

  private _id?: string;
  private _pieceId?: string;
  private _sectorId?: string;
  private _offset?: string;
  private _size?: string;
  private _ticket?: Uint8Array;
  private _unsealedCid?: Uint8Array;
  private _len?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PiecePartRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PiecePartRequest>) {
    _value = _value || {};
    this.id = _value.id;
    this.pieceId = _value.pieceId;
    this.sectorId = _value.sectorId;
    this.offset = _value.offset;
    this.size = _value.size;
    this.ticket = _value.ticket;
    this.unsealedCid = _value.unsealedCid;
    this.len = _value.len;
    PiecePartRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get pieceId(): string | undefined {
    return this._pieceId;
  }
  set pieceId(value: string | undefined) {
    this._pieceId = value;
  }
  get sectorId(): string | undefined {
    return this._sectorId;
  }
  set sectorId(value: string | undefined) {
    this._sectorId = value;
  }
  get offset(): string | undefined {
    return this._offset;
  }
  set offset(value: string | undefined) {
    this._offset = value;
  }
  get size(): string | undefined {
    return this._size;
  }
  set size(value: string | undefined) {
    this._size = value;
  }
  get ticket(): Uint8Array | undefined {
    return this._ticket;
  }
  set ticket(value: Uint8Array | undefined) {
    this._ticket = value;
  }
  get unsealedCid(): Uint8Array | undefined {
    return this._unsealedCid;
  }
  set unsealedCid(value: Uint8Array | undefined) {
    this._unsealedCid = value;
  }
  get len(): number | undefined {
    return this._len;
  }
  set len(value: number | undefined) {
    this._len = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PiecePartRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PiecePartRequest.AsObject {
    return {
      id: this.id,
      pieceId: this.pieceId,
      sectorId: this.sectorId,
      offset: this.offset,
      size: this.size,
      ticket: this.ticket ? this.ticket.subarray(0) : new Uint8Array(),
      unsealedCid: this.unsealedCid
        ? this.unsealedCid.subarray(0)
        : new Uint8Array(),
      len: this.len
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PiecePartRequest {
  /**
   * Standard JavaScript object representation for PiecePartRequest
   */
  export interface AsObject {
    id?: string;
    pieceId?: string;
    sectorId?: string;
    offset?: string;
    size?: string;
    ticket?: Uint8Array;
    unsealedCid?: Uint8Array;
    len?: number;
  }
}

/**
 * Message implementation for lotuspb.PiecePart
 */
export class PiecePart implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PiecePart();
    PiecePart.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PiecePart) {
    _instance.id = _instance.id || '0';
    _instance.pieceId = _instance.pieceId || '0';
    _instance.bytes = _instance.bytes || new Uint8Array();
    _instance.error = _instance.error || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PiecePart,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.pieceId = _reader.readUint64String();
          break;
        case 3:
          _instance.bytes = _reader.readBytes();
          break;
        case 4:
          _instance.error = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PiecePart.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: PiecePart, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.pieceId) {
      _writer.writeUint64String(2, _instance.pieceId);
    }
    if (_instance.bytes && _instance.bytes.length) {
      _writer.writeBytes(3, _instance.bytes);
    }
    if (_instance.error) {
      _writer.writeString(4, _instance.error);
    }
  }

  private _id?: string;
  private _pieceId?: string;
  private _bytes?: Uint8Array;
  private _error?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PiecePart to deeply clone from
   */
  constructor(_value?: RecursivePartial<PiecePart>) {
    _value = _value || {};
    this.id = _value.id;
    this.pieceId = _value.pieceId;
    this.bytes = _value.bytes;
    this.error = _value.error;
    PiecePart.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get pieceId(): string | undefined {
    return this._pieceId;
  }
  set pieceId(value: string | undefined) {
    this._pieceId = value;
  }
  get bytes(): Uint8Array | undefined {
    return this._bytes;
  }
  set bytes(value: Uint8Array | undefined) {
    this._bytes = value;
  }
  get error(): string | undefined {
    return this._error;
  }
  set error(value: string | undefined) {
    this._error = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PiecePart.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PiecePart.AsObject {
    return {
      id: this.id,
      pieceId: this.pieceId,
      bytes: this.bytes ? this.bytes.subarray(0) : new Uint8Array(),
      error: this.error
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PiecePart {
  /**
   * Standard JavaScript object representation for PiecePart
   */
  export interface AsObject {
    id?: string;
    pieceId?: string;
    bytes?: Uint8Array;
    error?: string;
  }
}

/**
 * Message implementation for lotuspb.SectorCids
 */
export class SectorCids implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorCids();
    SectorCids.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorCids) {
    _instance.unsealed = _instance.unsealed || new Uint8Array();
    _instance.sealed = _instance.sealed || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorCids,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.unsealed = _reader.readBytes();
          break;
        case 2:
          _instance.sealed = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorCids.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: SectorCids, _writer: BinaryWriter) {
    if (_instance.unsealed && _instance.unsealed.length) {
      _writer.writeBytes(1, _instance.unsealed);
    }
    if (_instance.sealed && _instance.sealed.length) {
      _writer.writeBytes(2, _instance.sealed);
    }
  }

  private _unsealed?: Uint8Array;
  private _sealed?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorCids to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorCids>) {
    _value = _value || {};
    this.unsealed = _value.unsealed;
    this.sealed = _value.sealed;
    SectorCids.refineValues(this);
  }
  get unsealed(): Uint8Array | undefined {
    return this._unsealed;
  }
  set unsealed(value: Uint8Array | undefined) {
    this._unsealed = value;
  }
  get sealed(): Uint8Array | undefined {
    return this._sealed;
  }
  set sealed(value: Uint8Array | undefined) {
    this._sealed = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorCids.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorCids.AsObject {
    return {
      unsealed: this.unsealed ? this.unsealed.subarray(0) : new Uint8Array(),
      sealed: this.sealed ? this.sealed.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorCids {
  /**
   * Standard JavaScript object representation for SectorCids
   */
  export interface AsObject {
    unsealed?: Uint8Array;
    sealed?: Uint8Array;
  }
}

/**
 * Message implementation for lotuspb.SectorRange
 */
export class SectorRange implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorRange();
    SectorRange.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorRange) {
    _instance.offset = _instance.offset || '0';
    _instance.size = _instance.size || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorRange,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.offset = _reader.readUint64String();
          break;
        case 2:
          _instance.size = _reader.readUint64String();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorRange.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorRange,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeUint64String(1, _instance.offset);
    }
    if (_instance.size) {
      _writer.writeUint64String(2, _instance.size);
    }
  }

  private _offset?: string;
  private _size?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorRange to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorRange>) {
    _value = _value || {};
    this.offset = _value.offset;
    this.size = _value.size;
    SectorRange.refineValues(this);
  }
  get offset(): string | undefined {
    return this._offset;
  }
  set offset(value: string | undefined) {
    this._offset = value;
  }
  get size(): string | undefined {
    return this._size;
  }
  set size(value: string | undefined) {
    this._size = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorRange.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorRange.AsObject {
    return {
      offset: this.offset,
      size: this.size
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorRange {
  /**
   * Standard JavaScript object representation for SectorRange
   */
  export interface AsObject {
    offset?: string;
    size?: string;
  }
}

/**
 * Message implementation for lotuspb.Task
 */
export class Task implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Task();
    Task.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Task) {
    _instance.id = _instance.id || '0';
    _instance.type = _instance.type || 0;
    _instance.minerId = _instance.minerId || '0';
    _instance.sectorId = _instance.sectorId || '0';
    _instance.sectorStateId = _instance.sectorStateId || '0';
    _instance.ticket = _instance.ticket || new Uint8Array();
    _instance.pieces = _instance.pieces || [];
    _instance.preCommit1Out = _instance.preCommit1Out || new Uint8Array();
    _instance.seed = _instance.seed || new Uint8Array();
    _instance.sectorCids = _instance.sectorCids || undefined;
    _instance.commit1Out = _instance.commit1Out || new Uint8Array();
    _instance.keepUnsealed = _instance.keepUnsealed || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Task, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.type = _reader.readEnum();
          break;
        case 3:
          _instance.minerId = _reader.readUint64String();
          break;
        case 4:
          _instance.sectorId = _reader.readUint64String();
          break;
        case 5:
          _instance.sectorStateId = _reader.readUint64String();
          break;
        case 6:
          _instance.ticket = _reader.readBytes();
          break;
        case 7:
          const messageInitializer7 = new PieceInfo();
          _reader.readMessage(
            messageInitializer7,
            PieceInfo.deserializeBinaryFromReader
          );
          (_instance.pieces = _instance.pieces || []).push(messageInitializer7);
          break;
        case 8:
          _instance.preCommit1Out = _reader.readBytes();
          break;
        case 9:
          _instance.seed = _reader.readBytes();
          break;
        case 10:
          _instance.sectorCids = new SectorCids();
          _reader.readMessage(
            _instance.sectorCids,
            SectorCids.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.commit1Out = _reader.readBytes();
          break;
        case 12:
          const messageInitializer12 = new SectorRange();
          _reader.readMessage(
            messageInitializer12,
            SectorRange.deserializeBinaryFromReader
          );
          (_instance.keepUnsealed = _instance.keepUnsealed || []).push(
            messageInitializer12
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Task.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Task, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.type) {
      _writer.writeEnum(2, _instance.type);
    }
    if (_instance.minerId) {
      _writer.writeUint64String(3, _instance.minerId);
    }
    if (_instance.sectorId) {
      _writer.writeUint64String(4, _instance.sectorId);
    }
    if (_instance.sectorStateId) {
      _writer.writeUint64String(5, _instance.sectorStateId);
    }
    if (_instance.ticket && _instance.ticket.length) {
      _writer.writeBytes(6, _instance.ticket);
    }
    if (_instance.pieces && _instance.pieces.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.pieces as any,
        PieceInfo.serializeBinaryToWriter
      );
    }
    if (_instance.preCommit1Out && _instance.preCommit1Out.length) {
      _writer.writeBytes(8, _instance.preCommit1Out);
    }
    if (_instance.seed && _instance.seed.length) {
      _writer.writeBytes(9, _instance.seed);
    }
    if (_instance.sectorCids) {
      _writer.writeMessage(
        10,
        _instance.sectorCids as any,
        SectorCids.serializeBinaryToWriter
      );
    }
    if (_instance.commit1Out && _instance.commit1Out.length) {
      _writer.writeBytes(11, _instance.commit1Out);
    }
    if (_instance.keepUnsealed && _instance.keepUnsealed.length) {
      _writer.writeRepeatedMessage(
        12,
        _instance.keepUnsealed as any,
        SectorRange.serializeBinaryToWriter
      );
    }
  }

  private _id?: string;
  private _type?: TaskType;
  private _minerId?: string;
  private _sectorId?: string;
  private _sectorStateId?: string;
  private _ticket?: Uint8Array;
  private _pieces?: PieceInfo[];
  private _preCommit1Out?: Uint8Array;
  private _seed?: Uint8Array;
  private _sectorCids?: SectorCids;
  private _commit1Out?: Uint8Array;
  private _keepUnsealed?: SectorRange[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Task to deeply clone from
   */
  constructor(_value?: RecursivePartial<Task>) {
    _value = _value || {};
    this.id = _value.id;
    this.type = _value.type;
    this.minerId = _value.minerId;
    this.sectorId = _value.sectorId;
    this.sectorStateId = _value.sectorStateId;
    this.ticket = _value.ticket;
    this.pieces = (_value.pieces || []).map(m => new PieceInfo(m));
    this.preCommit1Out = _value.preCommit1Out;
    this.seed = _value.seed;
    this.sectorCids = _value.sectorCids
      ? new SectorCids(_value.sectorCids)
      : undefined;
    this.commit1Out = _value.commit1Out;
    this.keepUnsealed = (_value.keepUnsealed || []).map(
      m => new SectorRange(m)
    );
    Task.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get type(): TaskType | undefined {
    return this._type;
  }
  set type(value: TaskType | undefined) {
    this._type = value;
  }
  get minerId(): string | undefined {
    return this._minerId;
  }
  set minerId(value: string | undefined) {
    this._minerId = value;
  }
  get sectorId(): string | undefined {
    return this._sectorId;
  }
  set sectorId(value: string | undefined) {
    this._sectorId = value;
  }
  get sectorStateId(): string | undefined {
    return this._sectorStateId;
  }
  set sectorStateId(value: string | undefined) {
    this._sectorStateId = value;
  }
  get ticket(): Uint8Array | undefined {
    return this._ticket;
  }
  set ticket(value: Uint8Array | undefined) {
    this._ticket = value;
  }
  get pieces(): PieceInfo[] | undefined {
    return this._pieces;
  }
  set pieces(value: PieceInfo[] | undefined) {
    this._pieces = value;
  }
  get preCommit1Out(): Uint8Array | undefined {
    return this._preCommit1Out;
  }
  set preCommit1Out(value: Uint8Array | undefined) {
    this._preCommit1Out = value;
  }
  get seed(): Uint8Array | undefined {
    return this._seed;
  }
  set seed(value: Uint8Array | undefined) {
    this._seed = value;
  }
  get sectorCids(): SectorCids | undefined {
    return this._sectorCids;
  }
  set sectorCids(value: SectorCids | undefined) {
    this._sectorCids = value;
  }
  get commit1Out(): Uint8Array | undefined {
    return this._commit1Out;
  }
  set commit1Out(value: Uint8Array | undefined) {
    this._commit1Out = value;
  }
  get keepUnsealed(): SectorRange[] | undefined {
    return this._keepUnsealed;
  }
  set keepUnsealed(value: SectorRange[] | undefined) {
    this._keepUnsealed = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Task.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Task.AsObject {
    return {
      id: this.id,
      type: this.type,
      minerId: this.minerId,
      sectorId: this.sectorId,
      sectorStateId: this.sectorStateId,
      ticket: this.ticket ? this.ticket.subarray(0) : new Uint8Array(),
      pieces: (this.pieces || []).map(m => m.toObject()),
      preCommit1Out: this.preCommit1Out
        ? this.preCommit1Out.subarray(0)
        : new Uint8Array(),
      seed: this.seed ? this.seed.subarray(0) : new Uint8Array(),
      sectorCids: this.sectorCids ? this.sectorCids.toObject() : undefined,
      commit1Out: this.commit1Out
        ? this.commit1Out.subarray(0)
        : new Uint8Array(),
      keepUnsealed: (this.keepUnsealed || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Task {
  /**
   * Standard JavaScript object representation for Task
   */
  export interface AsObject {
    id?: string;
    type?: TaskType;
    minerId?: string;
    sectorId?: string;
    sectorStateId?: string;
    ticket?: Uint8Array;
    pieces?: PieceInfo.AsObject[];
    preCommit1Out?: Uint8Array;
    seed?: Uint8Array;
    sectorCids?: SectorCids.AsObject;
    commit1Out?: Uint8Array;
    keepUnsealed?: SectorRange.AsObject[];
  }
}

/**
 * Message implementation for lotuspb.TaskReceipt
 */
export class TaskReceipt implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaskReceipt();
    TaskReceipt.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaskReceipt) {
    _instance.id = _instance.id || '0';
    _instance.accepted = _instance.accepted || false;
    _instance.busy = _instance.busy || false;
    _instance.worker = _instance.worker || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaskReceipt,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.accepted = _reader.readBool();
          break;
        case 3:
          _instance.busy = _reader.readBool();
          break;
        case 4:
          _instance.worker = new Worker();
          _reader.readMessage(
            _instance.worker,
            Worker.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TaskReceipt.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TaskReceipt,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.accepted) {
      _writer.writeBool(2, _instance.accepted);
    }
    if (_instance.busy) {
      _writer.writeBool(3, _instance.busy);
    }
    if (_instance.worker) {
      _writer.writeMessage(
        4,
        _instance.worker as any,
        Worker.serializeBinaryToWriter
      );
    }
  }

  private _id?: string;
  private _accepted?: boolean;
  private _busy?: boolean;
  private _worker?: Worker;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaskReceipt to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaskReceipt>) {
    _value = _value || {};
    this.id = _value.id;
    this.accepted = _value.accepted;
    this.busy = _value.busy;
    this.worker = _value.worker ? new Worker(_value.worker) : undefined;
    TaskReceipt.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get accepted(): boolean | undefined {
    return this._accepted;
  }
  set accepted(value: boolean | undefined) {
    this._accepted = value;
  }
  get busy(): boolean | undefined {
    return this._busy;
  }
  set busy(value: boolean | undefined) {
    this._busy = value;
  }
  get worker(): Worker | undefined {
    return this._worker;
  }
  set worker(value: Worker | undefined) {
    this._worker = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaskReceipt.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaskReceipt.AsObject {
    return {
      id: this.id,
      accepted: this.accepted,
      busy: this.busy,
      worker: this.worker ? this.worker.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module TaskReceipt {
  /**
   * Standard JavaScript object representation for TaskReceipt
   */
  export interface AsObject {
    id?: string;
    accepted?: boolean;
    busy?: boolean;
    worker?: Worker.AsObject;
  }
}

/**
 * Message implementation for lotuspb.TaskResult
 */
export class TaskResult implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TaskResult();
    TaskResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TaskResult) {
    _instance.type = _instance.type || 0;
    _instance.minerId = _instance.minerId || '0';
    _instance.sectorId = _instance.sectorId || '0';
    _instance.sectorStateId = _instance.sectorStateId || '0';
    _instance.preCommit1Out = _instance.preCommit1Out || new Uint8Array();
    _instance.sectorCids = _instance.sectorCids || undefined;
    _instance.commit1Out = _instance.commit1Out || new Uint8Array();
    _instance.proof = _instance.proof || new Uint8Array();
    _instance.error = _instance.error || '';
    _instance.worker = _instance.worker || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TaskResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readEnum();
          break;
        case 2:
          _instance.minerId = _reader.readUint64String();
          break;
        case 3:
          _instance.sectorId = _reader.readUint64String();
          break;
        case 4:
          _instance.sectorStateId = _reader.readUint64String();
          break;
        case 5:
          _instance.preCommit1Out = _reader.readBytes();
          break;
        case 6:
          _instance.sectorCids = new SectorCids();
          _reader.readMessage(
            _instance.sectorCids,
            SectorCids.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.commit1Out = _reader.readBytes();
          break;
        case 8:
          _instance.proof = _reader.readBytes();
          break;
        case 9:
          _instance.error = _reader.readString();
          break;
        case 10:
          _instance.worker = new Worker();
          _reader.readMessage(
            _instance.worker,
            Worker.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TaskResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: TaskResult, _writer: BinaryWriter) {
    if (_instance.type) {
      _writer.writeEnum(1, _instance.type);
    }
    if (_instance.minerId) {
      _writer.writeUint64String(2, _instance.minerId);
    }
    if (_instance.sectorId) {
      _writer.writeUint64String(3, _instance.sectorId);
    }
    if (_instance.sectorStateId) {
      _writer.writeUint64String(4, _instance.sectorStateId);
    }
    if (_instance.preCommit1Out && _instance.preCommit1Out.length) {
      _writer.writeBytes(5, _instance.preCommit1Out);
    }
    if (_instance.sectorCids) {
      _writer.writeMessage(
        6,
        _instance.sectorCids as any,
        SectorCids.serializeBinaryToWriter
      );
    }
    if (_instance.commit1Out && _instance.commit1Out.length) {
      _writer.writeBytes(7, _instance.commit1Out);
    }
    if (_instance.proof && _instance.proof.length) {
      _writer.writeBytes(8, _instance.proof);
    }
    if (_instance.error) {
      _writer.writeString(9, _instance.error);
    }
    if (_instance.worker) {
      _writer.writeMessage(
        10,
        _instance.worker as any,
        Worker.serializeBinaryToWriter
      );
    }
  }

  private _type?: TaskType;
  private _minerId?: string;
  private _sectorId?: string;
  private _sectorStateId?: string;
  private _preCommit1Out?: Uint8Array;
  private _sectorCids?: SectorCids;
  private _commit1Out?: Uint8Array;
  private _proof?: Uint8Array;
  private _error?: string;
  private _worker?: Worker;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TaskResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<TaskResult>) {
    _value = _value || {};
    this.type = _value.type;
    this.minerId = _value.minerId;
    this.sectorId = _value.sectorId;
    this.sectorStateId = _value.sectorStateId;
    this.preCommit1Out = _value.preCommit1Out;
    this.sectorCids = _value.sectorCids
      ? new SectorCids(_value.sectorCids)
      : undefined;
    this.commit1Out = _value.commit1Out;
    this.proof = _value.proof;
    this.error = _value.error;
    this.worker = _value.worker ? new Worker(_value.worker) : undefined;
    TaskResult.refineValues(this);
  }
  get type(): TaskType | undefined {
    return this._type;
  }
  set type(value: TaskType | undefined) {
    this._type = value;
  }
  get minerId(): string | undefined {
    return this._minerId;
  }
  set minerId(value: string | undefined) {
    this._minerId = value;
  }
  get sectorId(): string | undefined {
    return this._sectorId;
  }
  set sectorId(value: string | undefined) {
    this._sectorId = value;
  }
  get sectorStateId(): string | undefined {
    return this._sectorStateId;
  }
  set sectorStateId(value: string | undefined) {
    this._sectorStateId = value;
  }
  get preCommit1Out(): Uint8Array | undefined {
    return this._preCommit1Out;
  }
  set preCommit1Out(value: Uint8Array | undefined) {
    this._preCommit1Out = value;
  }
  get sectorCids(): SectorCids | undefined {
    return this._sectorCids;
  }
  set sectorCids(value: SectorCids | undefined) {
    this._sectorCids = value;
  }
  get commit1Out(): Uint8Array | undefined {
    return this._commit1Out;
  }
  set commit1Out(value: Uint8Array | undefined) {
    this._commit1Out = value;
  }
  get proof(): Uint8Array | undefined {
    return this._proof;
  }
  set proof(value: Uint8Array | undefined) {
    this._proof = value;
  }
  get error(): string | undefined {
    return this._error;
  }
  set error(value: string | undefined) {
    this._error = value;
  }
  get worker(): Worker | undefined {
    return this._worker;
  }
  set worker(value: Worker | undefined) {
    this._worker = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TaskResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TaskResult.AsObject {
    return {
      type: this.type,
      minerId: this.minerId,
      sectorId: this.sectorId,
      sectorStateId: this.sectorStateId,
      preCommit1Out: this.preCommit1Out
        ? this.preCommit1Out.subarray(0)
        : new Uint8Array(),
      sectorCids: this.sectorCids ? this.sectorCids.toObject() : undefined,
      commit1Out: this.commit1Out
        ? this.commit1Out.subarray(0)
        : new Uint8Array(),
      proof: this.proof ? this.proof.subarray(0) : new Uint8Array(),
      error: this.error,
      worker: this.worker ? this.worker.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module TaskResult {
  /**
   * Standard JavaScript object representation for TaskResult
   */
  export interface AsObject {
    type?: TaskType;
    minerId?: string;
    sectorId?: string;
    sectorStateId?: string;
    preCommit1Out?: Uint8Array;
    sectorCids?: SectorCids.AsObject;
    commit1Out?: Uint8Array;
    proof?: Uint8Array;
    error?: string;
    worker?: Worker.AsObject;
  }
}

/**
 * Message implementation for lotuspb.FinishedTask
 */
export class FinishedTask implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FinishedTask();
    FinishedTask.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FinishedTask) {
    _instance.task = _instance.task || undefined;
    _instance.result = _instance.result || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FinishedTask,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.task = new Task();
          _reader.readMessage(_instance.task, Task.deserializeBinaryFromReader);
          break;
        case 2:
          _instance.result = new TaskResult();
          _reader.readMessage(
            _instance.result,
            TaskResult.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FinishedTask.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FinishedTask,
    _writer: BinaryWriter
  ) {
    if (_instance.task) {
      _writer.writeMessage(
        1,
        _instance.task as any,
        Task.serializeBinaryToWriter
      );
    }
    if (_instance.result) {
      _writer.writeMessage(
        2,
        _instance.result as any,
        TaskResult.serializeBinaryToWriter
      );
    }
  }

  private _task?: Task;
  private _result?: TaskResult;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FinishedTask to deeply clone from
   */
  constructor(_value?: RecursivePartial<FinishedTask>) {
    _value = _value || {};
    this.task = _value.task ? new Task(_value.task) : undefined;
    this.result = _value.result ? new TaskResult(_value.result) : undefined;
    FinishedTask.refineValues(this);
  }
  get task(): Task | undefined {
    return this._task;
  }
  set task(value: Task | undefined) {
    this._task = value;
  }
  get result(): TaskResult | undefined {
    return this._result;
  }
  set result(value: TaskResult | undefined) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FinishedTask.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FinishedTask.AsObject {
    return {
      task: this.task ? this.task.toObject() : undefined,
      result: this.result ? this.result.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module FinishedTask {
  /**
   * Standard JavaScript object representation for FinishedTask
   */
  export interface AsObject {
    task?: Task.AsObject;
    result?: TaskResult.AsObject;
  }
}

/**
 * Message implementation for lotuspb.SectorPartRequest
 */
export class SectorPartRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorPartRequest();
    SectorPartRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorPartRequest) {
    _instance.id = _instance.id || '0';
    _instance.miner = _instance.miner || '';
    _instance.sectorId = _instance.sectorId || '0';
    _instance.cacheId = _instance.cacheId || '';
    _instance.offset = _instance.offset || '0';
    _instance.size = _instance.size || '0';
    _instance.sectors = _instance.sectors || [];
    _instance.numSectorsPerChunk = _instance.numSectorsPerChunk || '0';
    _instance.randomness = _instance.randomness || '';
    _instance.isWinningPoSt = _instance.isWinningPoSt || false;
    _instance.sealProof = _instance.sealProof || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorPartRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.miner = _reader.readString();
          break;
        case 3:
          _instance.sectorId = _reader.readUint64String();
          break;
        case 4:
          _instance.cacheId = _reader.readString();
          break;
        case 5:
          _instance.offset = _reader.readUint64String();
          break;
        case 6:
          _instance.size = _reader.readUint64String();
          break;
        case 7:
          const messageInitializer7 = new SectorPartRequest.Sector();
          _reader.readMessage(
            messageInitializer7,
            SectorPartRequest.Sector.deserializeBinaryFromReader
          );
          (_instance.sectors = _instance.sectors || []).push(
            messageInitializer7
          );
          break;
        case 8:
          _instance.numSectorsPerChunk = _reader.readUint64String();
          break;
        case 9:
          _instance.randomness = _reader.readString();
          break;
        case 10:
          _instance.isWinningPoSt = _reader.readBool();
          break;
        case 11:
          _instance.sealProof = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorPartRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorPartRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.miner) {
      _writer.writeString(2, _instance.miner);
    }
    if (_instance.sectorId) {
      _writer.writeUint64String(3, _instance.sectorId);
    }
    if (_instance.cacheId) {
      _writer.writeString(4, _instance.cacheId);
    }
    if (_instance.offset) {
      _writer.writeUint64String(5, _instance.offset);
    }
    if (_instance.size) {
      _writer.writeUint64String(6, _instance.size);
    }
    if (_instance.sectors && _instance.sectors.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.sectors as any,
        SectorPartRequest.Sector.serializeBinaryToWriter
      );
    }
    if (_instance.numSectorsPerChunk) {
      _writer.writeUint64String(8, _instance.numSectorsPerChunk);
    }
    if (_instance.randomness) {
      _writer.writeString(9, _instance.randomness);
    }
    if (_instance.isWinningPoSt) {
      _writer.writeBool(10, _instance.isWinningPoSt);
    }
    if (_instance.sealProof) {
      _writer.writeInt64String(11, _instance.sealProof);
    }
  }

  private _id?: string;
  private _miner?: string;
  private _sectorId?: string;
  private _cacheId?: string;
  private _offset?: string;
  private _size?: string;
  private _sectors?: SectorPartRequest.Sector[];
  private _numSectorsPerChunk?: string;
  private _randomness?: string;
  private _isWinningPoSt?: boolean;
  private _sealProof?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorPartRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorPartRequest>) {
    _value = _value || {};
    this.id = _value.id;
    this.miner = _value.miner;
    this.sectorId = _value.sectorId;
    this.cacheId = _value.cacheId;
    this.offset = _value.offset;
    this.size = _value.size;
    this.sectors = (_value.sectors || []).map(
      m => new SectorPartRequest.Sector(m)
    );
    this.numSectorsPerChunk = _value.numSectorsPerChunk;
    this.randomness = _value.randomness;
    this.isWinningPoSt = _value.isWinningPoSt;
    this.sealProof = _value.sealProof;
    SectorPartRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get miner(): string | undefined {
    return this._miner;
  }
  set miner(value: string | undefined) {
    this._miner = value;
  }
  get sectorId(): string | undefined {
    return this._sectorId;
  }
  set sectorId(value: string | undefined) {
    this._sectorId = value;
  }
  get cacheId(): string | undefined {
    return this._cacheId;
  }
  set cacheId(value: string | undefined) {
    this._cacheId = value;
  }
  get offset(): string | undefined {
    return this._offset;
  }
  set offset(value: string | undefined) {
    this._offset = value;
  }
  get size(): string | undefined {
    return this._size;
  }
  set size(value: string | undefined) {
    this._size = value;
  }
  get sectors(): SectorPartRequest.Sector[] | undefined {
    return this._sectors;
  }
  set sectors(value: SectorPartRequest.Sector[] | undefined) {
    this._sectors = value;
  }
  get numSectorsPerChunk(): string | undefined {
    return this._numSectorsPerChunk;
  }
  set numSectorsPerChunk(value: string | undefined) {
    this._numSectorsPerChunk = value;
  }
  get randomness(): string | undefined {
    return this._randomness;
  }
  set randomness(value: string | undefined) {
    this._randomness = value;
  }
  get isWinningPoSt(): boolean | undefined {
    return this._isWinningPoSt;
  }
  set isWinningPoSt(value: boolean | undefined) {
    this._isWinningPoSt = value;
  }
  get sealProof(): string | undefined {
    return this._sealProof;
  }
  set sealProof(value: string | undefined) {
    this._sealProof = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorPartRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorPartRequest.AsObject {
    return {
      id: this.id,
      miner: this.miner,
      sectorId: this.sectorId,
      cacheId: this.cacheId,
      offset: this.offset,
      size: this.size,
      sectors: (this.sectors || []).map(m => m.toObject()),
      numSectorsPerChunk: this.numSectorsPerChunk,
      randomness: this.randomness,
      isWinningPoSt: this.isWinningPoSt,
      sealProof: this.sealProof
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorPartRequest {
  /**
   * Standard JavaScript object representation for SectorPartRequest
   */
  export interface AsObject {
    id?: string;
    miner?: string;
    sectorId?: string;
    cacheId?: string;
    offset?: string;
    size?: string;
    sectors?: SectorPartRequest.Sector.AsObject[];
    numSectorsPerChunk?: string;
    randomness?: string;
    isWinningPoSt?: boolean;
    sealProof?: string;
  }

  /**
   * Message implementation for lotuspb.Sector
   */
  export class Sector implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Sector();
      Sector.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Sector) {
      _instance.sectorId = _instance.sectorId || '0';
      _instance.j = _instance.j || '0';
      _instance.i = _instance.i || '0';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Sector,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.sectorId = _reader.readUint64String();
            break;
          case 2:
            _instance.j = _reader.readUint64String();
            break;
          case 3:
            _instance.i = _reader.readUint64String();
            break;
          default:
            _reader.skipField();
        }
      }

      Sector.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Sector, _writer: BinaryWriter) {
      if (_instance.sectorId) {
        _writer.writeUint64String(1, _instance.sectorId);
      }
      if (_instance.j) {
        _writer.writeUint64String(2, _instance.j);
      }
      if (_instance.i) {
        _writer.writeUint64String(3, _instance.i);
      }
    }

    private _sectorId?: string;
    private _j?: string;
    private _i?: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Sector to deeply clone from
     */
    constructor(_value?: RecursivePartial<Sector>) {
      _value = _value || {};
      this.sectorId = _value.sectorId;
      this.j = _value.j;
      this.i = _value.i;
      Sector.refineValues(this);
    }
    get sectorId(): string | undefined {
      return this._sectorId;
    }
    set sectorId(value: string | undefined) {
      this._sectorId = value;
    }
    get j(): string | undefined {
      return this._j;
    }
    set j(value: string | undefined) {
      this._j = value;
    }
    get i(): string | undefined {
      return this._i;
    }
    set i(value: string | undefined) {
      this._i = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Sector.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Sector.AsObject {
      return {
        sectorId: this.sectorId,
        j: this.j,
        i: this.i
      };
    }

    /**
     * JSON serializer
     * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
     */
    toJSON() {
      return this.toObject();
    }
  }
  export module Sector {
    /**
     * Standard JavaScript object representation for Sector
     */
    export interface AsObject {
      sectorId?: string;
      j?: string;
      i?: string;
    }
  }
}

/**
 * Message implementation for lotuspb.SectorPart
 */
export class SectorPart implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorPart();
    SectorPart.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorPart) {
    _instance.id = _instance.id || '0';
    _instance.bytes = _instance.bytes || new Uint8Array();
    _instance.error = _instance.error || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorPart,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readUint64String();
          break;
        case 2:
          _instance.bytes = _reader.readBytes();
          break;
        case 3:
          _instance.error = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorPart.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: SectorPart, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeUint64String(1, _instance.id);
    }
    if (_instance.bytes && _instance.bytes.length) {
      _writer.writeBytes(2, _instance.bytes);
    }
    if (_instance.error) {
      _writer.writeString(3, _instance.error);
    }
  }

  private _id?: string;
  private _bytes?: Uint8Array;
  private _error?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorPart to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorPart>) {
    _value = _value || {};
    this.id = _value.id;
    this.bytes = _value.bytes;
    this.error = _value.error;
    SectorPart.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get bytes(): Uint8Array | undefined {
    return this._bytes;
  }
  set bytes(value: Uint8Array | undefined) {
    this._bytes = value;
  }
  get error(): string | undefined {
    return this._error;
  }
  set error(value: string | undefined) {
    this._error = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorPart.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorPart.AsObject {
    return {
      id: this.id,
      bytes: this.bytes ? this.bytes.subarray(0) : new Uint8Array(),
      error: this.error
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorPart {
  /**
   * Standard JavaScript object representation for SectorPart
   */
  export interface AsObject {
    id?: string;
    bytes?: Uint8Array;
    error?: string;
  }
}

/**
 * Message implementation for lotuspb.WalletBalanceRequest
 */
export class WalletBalanceRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WalletBalanceRequest();
    WalletBalanceRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WalletBalanceRequest) {
    _instance.addr = _instance.addr || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WalletBalanceRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.addr = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    WalletBalanceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WalletBalanceRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.addr) {
      _writer.writeString(1, _instance.addr);
    }
  }

  private _addr?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WalletBalanceRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<WalletBalanceRequest>) {
    _value = _value || {};
    this.addr = _value.addr;
    WalletBalanceRequest.refineValues(this);
  }
  get addr(): string | undefined {
    return this._addr;
  }
  set addr(value: string | undefined) {
    this._addr = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WalletBalanceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WalletBalanceRequest.AsObject {
    return {
      addr: this.addr
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module WalletBalanceRequest {
  /**
   * Standard JavaScript object representation for WalletBalanceRequest
   */
  export interface AsObject {
    addr?: string;
  }
}

/**
 * Message implementation for lotuspb.WalletBalanceResponse
 */
export class WalletBalanceResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new WalletBalanceResponse();
    WalletBalanceResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: WalletBalanceResponse) {
    _instance.balance = _instance.balance || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: WalletBalanceResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.balance = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    WalletBalanceResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: WalletBalanceResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.balance) {
      _writer.writeString(1, _instance.balance);
    }
  }

  private _balance?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of WalletBalanceResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<WalletBalanceResponse>) {
    _value = _value || {};
    this.balance = _value.balance;
    WalletBalanceResponse.refineValues(this);
  }
  get balance(): string | undefined {
    return this._balance;
  }
  set balance(value: string | undefined) {
    this._balance = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    WalletBalanceResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): WalletBalanceResponse.AsObject {
    return {
      balance: this.balance
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module WalletBalanceResponse {
  /**
   * Standard JavaScript object representation for WalletBalanceResponse
   */
  export interface AsObject {
    balance?: string;
  }
}

/**
 * Message implementation for lotuspb.MinerPowerRequest
 */
export class MinerPowerRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerPowerRequest();
    MinerPowerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerPowerRequest) {
    _instance.minerId = _instance.minerId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerPowerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.minerId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MinerPowerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerPowerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.minerId) {
      _writer.writeString(1, _instance.minerId);
    }
  }

  private _minerId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerPowerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerPowerRequest>) {
    _value = _value || {};
    this.minerId = _value.minerId;
    MinerPowerRequest.refineValues(this);
  }
  get minerId(): string | undefined {
    return this._minerId;
  }
  set minerId(value: string | undefined) {
    this._minerId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerPowerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerPowerRequest.AsObject {
    return {
      minerId: this.minerId
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerPowerRequest {
  /**
   * Standard JavaScript object representation for MinerPowerRequest
   */
  export interface AsObject {
    minerId?: string;
  }
}

/**
 * Message implementation for lotuspb.MinerPowerResponse
 */
export class MinerPowerResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerPowerResponse();
    MinerPowerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerPowerResponse) {
    _instance.power = _instance.power || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerPowerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.power = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MinerPowerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerPowerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.power) {
      _writer.writeString(1, _instance.power);
    }
  }

  private _power?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerPowerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerPowerResponse>) {
    _value = _value || {};
    this.power = _value.power;
    MinerPowerResponse.refineValues(this);
  }
  get power(): string | undefined {
    return this._power;
  }
  set power(value: string | undefined) {
    this._power = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerPowerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerPowerResponse.AsObject {
    return {
      power: this.power
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerPowerResponse {
  /**
   * Standard JavaScript object representation for MinerPowerResponse
   */
  export interface AsObject {
    power?: string;
  }
}

/**
 * Message implementation for lotuspb.MinerSectorCountRequest
 */
export class MinerSectorCountRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerSectorCountRequest();
    MinerSectorCountRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerSectorCountRequest) {
    _instance.minerId = _instance.minerId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerSectorCountRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.minerId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MinerSectorCountRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerSectorCountRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.minerId) {
      _writer.writeString(1, _instance.minerId);
    }
  }

  private _minerId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerSectorCountRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerSectorCountRequest>) {
    _value = _value || {};
    this.minerId = _value.minerId;
    MinerSectorCountRequest.refineValues(this);
  }
  get minerId(): string | undefined {
    return this._minerId;
  }
  set minerId(value: string | undefined) {
    this._minerId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerSectorCountRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerSectorCountRequest.AsObject {
    return {
      minerId: this.minerId
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerSectorCountRequest {
  /**
   * Standard JavaScript object representation for MinerSectorCountRequest
   */
  export interface AsObject {
    minerId?: string;
  }
}

/**
 * Message implementation for lotuspb.MinerSectorCountResponse
 */
export class MinerSectorCountResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerSectorCountResponse();
    MinerSectorCountResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerSectorCountResponse) {
    _instance.sectorCount = _instance.sectorCount || '0';
    _instance.provingCount = _instance.provingCount || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerSectorCountResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sectorCount = _reader.readUint64String();
          break;
        case 2:
          _instance.provingCount = _reader.readUint64String();
          break;
        default:
          _reader.skipField();
      }
    }

    MinerSectorCountResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerSectorCountResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sectorCount) {
      _writer.writeUint64String(1, _instance.sectorCount);
    }
    if (_instance.provingCount) {
      _writer.writeUint64String(2, _instance.provingCount);
    }
  }

  private _sectorCount?: string;
  private _provingCount?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerSectorCountResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerSectorCountResponse>) {
    _value = _value || {};
    this.sectorCount = _value.sectorCount;
    this.provingCount = _value.provingCount;
    MinerSectorCountResponse.refineValues(this);
  }
  get sectorCount(): string | undefined {
    return this._sectorCount;
  }
  set sectorCount(value: string | undefined) {
    this._sectorCount = value;
  }
  get provingCount(): string | undefined {
    return this._provingCount;
  }
  set provingCount(value: string | undefined) {
    this._provingCount = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerSectorCountResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerSectorCountResponse.AsObject {
    return {
      sectorCount: this.sectorCount,
      provingCount: this.provingCount
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerSectorCountResponse {
  /**
   * Standard JavaScript object representation for MinerSectorCountResponse
   */
  export interface AsObject {
    sectorCount?: string;
    provingCount?: string;
  }
}

/**
 * Message implementation for lotuspb.MinerWorkersRequest
 */
export class MinerWorkersRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerWorkersRequest();
    MinerWorkersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerWorkersRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerWorkersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    MinerWorkersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerWorkersRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerWorkersRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerWorkersRequest>) {
    _value = _value || {};
    MinerWorkersRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerWorkersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerWorkersRequest.AsObject {
    return {};
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerWorkersRequest {
  /**
   * Standard JavaScript object representation for MinerWorkersRequest
   */
  export interface AsObject {}
}

/**
 * Message implementation for lotuspb.MinerWorkersResponse
 */
export class MinerWorkersResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerWorkersResponse();
    MinerWorkersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerWorkersResponse) {
    _instance.workers = _instance.workers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerWorkersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Worker();
          _reader.readMessage(
            messageInitializer1,
            Worker.deserializeBinaryFromReader
          );
          (_instance.workers = _instance.workers || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    MinerWorkersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerWorkersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.workers && _instance.workers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.workers as any,
        Worker.serializeBinaryToWriter
      );
    }
  }

  private _workers?: Worker[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerWorkersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerWorkersResponse>) {
    _value = _value || {};
    this.workers = (_value.workers || []).map(m => new Worker(m));
    MinerWorkersResponse.refineValues(this);
  }
  get workers(): Worker[] | undefined {
    return this._workers;
  }
  set workers(value: Worker[] | undefined) {
    this._workers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerWorkersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerWorkersResponse.AsObject {
    return {
      workers: (this.workers || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerWorkersResponse {
  /**
   * Standard JavaScript object representation for MinerWorkersResponse
   */
  export interface AsObject {
    workers?: Worker.AsObject[];
  }
}

/**
 * Message implementation for lotuspb.MinerWindowPoStRequest
 */
export class MinerWindowPoStRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerWindowPoStRequest();
    MinerWindowPoStRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerWindowPoStRequest) {
    _instance.deadlineIndex = _instance.deadlineIndex || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerWindowPoStRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deadlineIndex = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    MinerWindowPoStRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerWindowPoStRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.deadlineIndex) {
      _writer.writeInt32(1, _instance.deadlineIndex);
    }
  }

  private _deadlineIndex?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerWindowPoStRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerWindowPoStRequest>) {
    _value = _value || {};
    this.deadlineIndex = _value.deadlineIndex;
    MinerWindowPoStRequest.refineValues(this);
  }
  get deadlineIndex(): number | undefined {
    return this._deadlineIndex;
  }
  set deadlineIndex(value: number | undefined) {
    this._deadlineIndex = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerWindowPoStRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerWindowPoStRequest.AsObject {
    return {
      deadlineIndex: this.deadlineIndex
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerWindowPoStRequest {
  /**
   * Standard JavaScript object representation for MinerWindowPoStRequest
   */
  export interface AsObject {
    deadlineIndex?: number;
  }
}

/**
 * Message implementation for lotuspb.MinerWindowPoStResponse
 */
export class MinerWindowPoStResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerWindowPoStResponse();
    MinerWindowPoStResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerWindowPoStResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerWindowPoStResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    MinerWindowPoStResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerWindowPoStResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerWindowPoStResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerWindowPoStResponse>) {
    _value = _value || {};
    MinerWindowPoStResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerWindowPoStResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerWindowPoStResponse.AsObject {
    return {};
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerWindowPoStResponse {
  /**
   * Standard JavaScript object representation for MinerWindowPoStResponse
   */
  export interface AsObject {}
}

/**
 * Message implementation for lotuspb.MinerInfoResponse
 */
export class MinerInfoResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerInfoResponse();
    MinerInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerInfoResponse) {
    _instance.sealProofType = _instance.sealProofType || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sealProofType = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    MinerInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sealProofType) {
      _writer.writeInt64String(1, _instance.sealProofType);
    }
  }

  private _sealProofType?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerInfoResponse>) {
    _value = _value || {};
    this.sealProofType = _value.sealProofType;
    MinerInfoResponse.refineValues(this);
  }
  get sealProofType(): string | undefined {
    return this._sealProofType;
  }
  set sealProofType(value: string | undefined) {
    this._sealProofType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerInfoResponse.AsObject {
    return {
      sealProofType: this.sealProofType
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerInfoResponse {
  /**
   * Standard JavaScript object representation for MinerInfoResponse
   */
  export interface AsObject {
    sealProofType?: string;
  }
}

/**
 * Message implementation for lotuspb.MinerInfoDetailedResponse
 */
export class MinerInfoDetailedResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MinerInfoDetailedResponse();
    MinerInfoDetailedResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MinerInfoDetailedResponse) {
    _instance.minerId = _instance.minerId || '';
    _instance.sectorSize = _instance.sectorSize || '';
    _instance.qaPower = _instance.qaPower || '';
    _instance.winSpeed = _instance.winSpeed || '';
    _instance.dealNum = _instance.dealNum || '0';
    _instance.dealSize = _instance.dealSize || '';
    _instance.activeDealNum = _instance.activeDealNum || '0';
    _instance.activeDealSize = _instance.activeDealSize || '';
    _instance.verifiedDealNum = _instance.verifiedDealNum || '0';
    _instance.verifiedDealSize = _instance.verifiedDealSize || '';
    _instance.balance = _instance.balance || '';
    _instance.preCommit = _instance.preCommit || '';
    _instance.pledge = _instance.pledge || '';
    _instance.vesting = _instance.vesting || '';
    _instance.debt = _instance.debt || '';
    _instance.available = _instance.available || '';
    _instance.marketBalance = _instance.marketBalance || '';
    _instance.marketLocked = _instance.marketLocked || '';
    _instance.marketAvailable = _instance.marketAvailable || '';
    _instance.workerBalance = _instance.workerBalance || '';
    _instance.controlBalance = _instance.controlBalance || '';
    _instance.totalBalance = _instance.totalBalance || '';
    _instance.totalLocked = _instance.totalLocked || '';
    _instance.totalSpendable = _instance.totalSpendable || '';
    _instance.onchainSectorLive = _instance.onchainSectorLive || '0';
    _instance.onchainSectorActive = _instance.onchainSectorActive || '0';
    _instance.onchainSectorFaulty = _instance.onchainSectorFaulty || '0';
    _instance.localSectors = _instance.localSectors || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MinerInfoDetailedResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.minerId = _reader.readString();
          break;
        case 2:
          _instance.sectorSize = _reader.readString();
          break;
        case 3:
          _instance.qaPower = _reader.readString();
          break;
        case 4:
          _instance.winSpeed = _reader.readString();
          break;
        case 5:
          _instance.dealNum = _reader.readUint64String();
          break;
        case 6:
          _instance.dealSize = _reader.readString();
          break;
        case 7:
          _instance.activeDealNum = _reader.readUint64String();
          break;
        case 8:
          _instance.activeDealSize = _reader.readString();
          break;
        case 9:
          _instance.verifiedDealNum = _reader.readUint64String();
          break;
        case 10:
          _instance.verifiedDealSize = _reader.readString();
          break;
        case 11:
          _instance.balance = _reader.readString();
          break;
        case 12:
          _instance.preCommit = _reader.readString();
          break;
        case 13:
          _instance.pledge = _reader.readString();
          break;
        case 14:
          _instance.vesting = _reader.readString();
          break;
        case 15:
          _instance.debt = _reader.readString();
          break;
        case 16:
          _instance.available = _reader.readString();
          break;
        case 17:
          _instance.marketBalance = _reader.readString();
          break;
        case 18:
          _instance.marketLocked = _reader.readString();
          break;
        case 19:
          _instance.marketAvailable = _reader.readString();
          break;
        case 20:
          _instance.workerBalance = _reader.readString();
          break;
        case 21:
          _instance.controlBalance = _reader.readString();
          break;
        case 22:
          _instance.totalBalance = _reader.readString();
          break;
        case 23:
          _instance.totalLocked = _reader.readString();
          break;
        case 24:
          _instance.totalSpendable = _reader.readString();
          break;
        case 25:
          _instance.onchainSectorLive = _reader.readUint64String();
          break;
        case 26:
          _instance.onchainSectorActive = _reader.readUint64String();
          break;
        case 27:
          _instance.onchainSectorFaulty = _reader.readUint64String();
          break;
        case 28:
          const msg_28 = {} as any;
          _reader.readMessage(
            msg_28,
            MinerInfoDetailedResponse.LocalSectorsEntry
              .deserializeBinaryFromReader
          );
          _instance.localSectors = _instance.localSectors || {};
          _instance.localSectors[msg_28.key] = msg_28.value;
          break;
        default:
          _reader.skipField();
      }
    }

    MinerInfoDetailedResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MinerInfoDetailedResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.minerId) {
      _writer.writeString(1, _instance.minerId);
    }
    if (_instance.sectorSize) {
      _writer.writeString(2, _instance.sectorSize);
    }
    if (_instance.qaPower) {
      _writer.writeString(3, _instance.qaPower);
    }
    if (_instance.winSpeed) {
      _writer.writeString(4, _instance.winSpeed);
    }
    if (_instance.dealNum) {
      _writer.writeUint64String(5, _instance.dealNum);
    }
    if (_instance.dealSize) {
      _writer.writeString(6, _instance.dealSize);
    }
    if (_instance.activeDealNum) {
      _writer.writeUint64String(7, _instance.activeDealNum);
    }
    if (_instance.activeDealSize) {
      _writer.writeString(8, _instance.activeDealSize);
    }
    if (_instance.verifiedDealNum) {
      _writer.writeUint64String(9, _instance.verifiedDealNum);
    }
    if (_instance.verifiedDealSize) {
      _writer.writeString(10, _instance.verifiedDealSize);
    }
    if (_instance.balance) {
      _writer.writeString(11, _instance.balance);
    }
    if (_instance.preCommit) {
      _writer.writeString(12, _instance.preCommit);
    }
    if (_instance.pledge) {
      _writer.writeString(13, _instance.pledge);
    }
    if (_instance.vesting) {
      _writer.writeString(14, _instance.vesting);
    }
    if (_instance.debt) {
      _writer.writeString(15, _instance.debt);
    }
    if (_instance.available) {
      _writer.writeString(16, _instance.available);
    }
    if (_instance.marketBalance) {
      _writer.writeString(17, _instance.marketBalance);
    }
    if (_instance.marketLocked) {
      _writer.writeString(18, _instance.marketLocked);
    }
    if (_instance.marketAvailable) {
      _writer.writeString(19, _instance.marketAvailable);
    }
    if (_instance.workerBalance) {
      _writer.writeString(20, _instance.workerBalance);
    }
    if (_instance.controlBalance) {
      _writer.writeString(21, _instance.controlBalance);
    }
    if (_instance.totalBalance) {
      _writer.writeString(22, _instance.totalBalance);
    }
    if (_instance.totalLocked) {
      _writer.writeString(23, _instance.totalLocked);
    }
    if (_instance.totalSpendable) {
      _writer.writeString(24, _instance.totalSpendable);
    }
    if (_instance.onchainSectorLive) {
      _writer.writeUint64String(25, _instance.onchainSectorLive);
    }
    if (_instance.onchainSectorActive) {
      _writer.writeUint64String(26, _instance.onchainSectorActive);
    }
    if (_instance.onchainSectorFaulty) {
      _writer.writeUint64String(27, _instance.onchainSectorFaulty);
    }
    if (!!_instance.localSectors) {
      const keys_28 = Object.keys(_instance.localSectors as any);

      if (keys_28.length) {
        const repeated_28 = keys_28
          .map(key => ({
            key: key,
            value: (_instance.localSectors as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          28,
          repeated_28,
          MinerInfoDetailedResponse.LocalSectorsEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _minerId?: string;
  private _sectorSize?: string;
  private _qaPower?: string;
  private _winSpeed?: string;
  private _dealNum?: string;
  private _dealSize?: string;
  private _activeDealNum?: string;
  private _activeDealSize?: string;
  private _verifiedDealNum?: string;
  private _verifiedDealSize?: string;
  private _balance?: string;
  private _preCommit?: string;
  private _pledge?: string;
  private _vesting?: string;
  private _debt?: string;
  private _available?: string;
  private _marketBalance?: string;
  private _marketLocked?: string;
  private _marketAvailable?: string;
  private _workerBalance?: string;
  private _controlBalance?: string;
  private _totalBalance?: string;
  private _totalLocked?: string;
  private _totalSpendable?: string;
  private _onchainSectorLive?: string;
  private _onchainSectorActive?: string;
  private _onchainSectorFaulty?: string;
  private _localSectors?: { [prop: string]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MinerInfoDetailedResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<MinerInfoDetailedResponse>) {
    _value = _value || {};
    this.minerId = _value.minerId;
    this.sectorSize = _value.sectorSize;
    this.qaPower = _value.qaPower;
    this.winSpeed = _value.winSpeed;
    this.dealNum = _value.dealNum;
    this.dealSize = _value.dealSize;
    this.activeDealNum = _value.activeDealNum;
    this.activeDealSize = _value.activeDealSize;
    this.verifiedDealNum = _value.verifiedDealNum;
    this.verifiedDealSize = _value.verifiedDealSize;
    this.balance = _value.balance;
    this.preCommit = _value.preCommit;
    this.pledge = _value.pledge;
    this.vesting = _value.vesting;
    this.debt = _value.debt;
    this.available = _value.available;
    this.marketBalance = _value.marketBalance;
    this.marketLocked = _value.marketLocked;
    this.marketAvailable = _value.marketAvailable;
    this.workerBalance = _value.workerBalance;
    this.controlBalance = _value.controlBalance;
    this.totalBalance = _value.totalBalance;
    this.totalLocked = _value.totalLocked;
    this.totalSpendable = _value.totalSpendable;
    this.onchainSectorLive = _value.onchainSectorLive;
    this.onchainSectorActive = _value.onchainSectorActive;
    this.onchainSectorFaulty = _value.onchainSectorFaulty;
    (this.localSectors = _value!.localSectors
      ? Object.keys(_value!.localSectors).reduce(
          (r, k) => ({ ...r, [k]: _value!.localSectors![k] }),
          {}
        )
      : {}),
      MinerInfoDetailedResponse.refineValues(this);
  }
  get minerId(): string | undefined {
    return this._minerId;
  }
  set minerId(value: string | undefined) {
    this._minerId = value;
  }
  get sectorSize(): string | undefined {
    return this._sectorSize;
  }
  set sectorSize(value: string | undefined) {
    this._sectorSize = value;
  }
  get qaPower(): string | undefined {
    return this._qaPower;
  }
  set qaPower(value: string | undefined) {
    this._qaPower = value;
  }
  get winSpeed(): string | undefined {
    return this._winSpeed;
  }
  set winSpeed(value: string | undefined) {
    this._winSpeed = value;
  }
  get dealNum(): string | undefined {
    return this._dealNum;
  }
  set dealNum(value: string | undefined) {
    this._dealNum = value;
  }
  get dealSize(): string | undefined {
    return this._dealSize;
  }
  set dealSize(value: string | undefined) {
    this._dealSize = value;
  }
  get activeDealNum(): string | undefined {
    return this._activeDealNum;
  }
  set activeDealNum(value: string | undefined) {
    this._activeDealNum = value;
  }
  get activeDealSize(): string | undefined {
    return this._activeDealSize;
  }
  set activeDealSize(value: string | undefined) {
    this._activeDealSize = value;
  }
  get verifiedDealNum(): string | undefined {
    return this._verifiedDealNum;
  }
  set verifiedDealNum(value: string | undefined) {
    this._verifiedDealNum = value;
  }
  get verifiedDealSize(): string | undefined {
    return this._verifiedDealSize;
  }
  set verifiedDealSize(value: string | undefined) {
    this._verifiedDealSize = value;
  }
  get balance(): string | undefined {
    return this._balance;
  }
  set balance(value: string | undefined) {
    this._balance = value;
  }
  get preCommit(): string | undefined {
    return this._preCommit;
  }
  set preCommit(value: string | undefined) {
    this._preCommit = value;
  }
  get pledge(): string | undefined {
    return this._pledge;
  }
  set pledge(value: string | undefined) {
    this._pledge = value;
  }
  get vesting(): string | undefined {
    return this._vesting;
  }
  set vesting(value: string | undefined) {
    this._vesting = value;
  }
  get debt(): string | undefined {
    return this._debt;
  }
  set debt(value: string | undefined) {
    this._debt = value;
  }
  get available(): string | undefined {
    return this._available;
  }
  set available(value: string | undefined) {
    this._available = value;
  }
  get marketBalance(): string | undefined {
    return this._marketBalance;
  }
  set marketBalance(value: string | undefined) {
    this._marketBalance = value;
  }
  get marketLocked(): string | undefined {
    return this._marketLocked;
  }
  set marketLocked(value: string | undefined) {
    this._marketLocked = value;
  }
  get marketAvailable(): string | undefined {
    return this._marketAvailable;
  }
  set marketAvailable(value: string | undefined) {
    this._marketAvailable = value;
  }
  get workerBalance(): string | undefined {
    return this._workerBalance;
  }
  set workerBalance(value: string | undefined) {
    this._workerBalance = value;
  }
  get controlBalance(): string | undefined {
    return this._controlBalance;
  }
  set controlBalance(value: string | undefined) {
    this._controlBalance = value;
  }
  get totalBalance(): string | undefined {
    return this._totalBalance;
  }
  set totalBalance(value: string | undefined) {
    this._totalBalance = value;
  }
  get totalLocked(): string | undefined {
    return this._totalLocked;
  }
  set totalLocked(value: string | undefined) {
    this._totalLocked = value;
  }
  get totalSpendable(): string | undefined {
    return this._totalSpendable;
  }
  set totalSpendable(value: string | undefined) {
    this._totalSpendable = value;
  }
  get onchainSectorLive(): string | undefined {
    return this._onchainSectorLive;
  }
  set onchainSectorLive(value: string | undefined) {
    this._onchainSectorLive = value;
  }
  get onchainSectorActive(): string | undefined {
    return this._onchainSectorActive;
  }
  set onchainSectorActive(value: string | undefined) {
    this._onchainSectorActive = value;
  }
  get onchainSectorFaulty(): string | undefined {
    return this._onchainSectorFaulty;
  }
  set onchainSectorFaulty(value: string | undefined) {
    this._onchainSectorFaulty = value;
  }
  get localSectors(): { [prop: string]: string } | undefined {
    return this._localSectors;
  }
  set localSectors(value: { [prop: string]: string } | undefined) {
    this._localSectors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MinerInfoDetailedResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MinerInfoDetailedResponse.AsObject {
    return {
      minerId: this.minerId,
      sectorSize: this.sectorSize,
      qaPower: this.qaPower,
      winSpeed: this.winSpeed,
      dealNum: this.dealNum,
      dealSize: this.dealSize,
      activeDealNum: this.activeDealNum,
      activeDealSize: this.activeDealSize,
      verifiedDealNum: this.verifiedDealNum,
      verifiedDealSize: this.verifiedDealSize,
      balance: this.balance,
      preCommit: this.preCommit,
      pledge: this.pledge,
      vesting: this.vesting,
      debt: this.debt,
      available: this.available,
      marketBalance: this.marketBalance,
      marketLocked: this.marketLocked,
      marketAvailable: this.marketAvailable,
      workerBalance: this.workerBalance,
      controlBalance: this.controlBalance,
      totalBalance: this.totalBalance,
      totalLocked: this.totalLocked,
      totalSpendable: this.totalSpendable,
      onchainSectorLive: this.onchainSectorLive,
      onchainSectorActive: this.onchainSectorActive,
      onchainSectorFaulty: this.onchainSectorFaulty,
      localSectors: this.localSectors
        ? Object.keys(this.localSectors).reduce(
            (r, k) => ({ ...r, [k]: this.localSectors![k] }),
            {}
          )
        : {}
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MinerInfoDetailedResponse {
  /**
   * Standard JavaScript object representation for MinerInfoDetailedResponse
   */
  export interface AsObject {
    minerId?: string;
    sectorSize?: string;
    qaPower?: string;
    winSpeed?: string;
    dealNum?: string;
    dealSize?: string;
    activeDealNum?: string;
    activeDealSize?: string;
    verifiedDealNum?: string;
    verifiedDealSize?: string;
    balance?: string;
    preCommit?: string;
    pledge?: string;
    vesting?: string;
    debt?: string;
    available?: string;
    marketBalance?: string;
    marketLocked?: string;
    marketAvailable?: string;
    workerBalance?: string;
    controlBalance?: string;
    totalBalance?: string;
    totalLocked?: string;
    totalSpendable?: string;
    onchainSectorLive?: string;
    onchainSectorActive?: string;
    onchainSectorFaulty?: string;
    localSectors?: { [prop: string]: string };
  }

  /**
   * Message implementation for lotuspb.LocalSectorsEntry
   */
  export class LocalSectorsEntry implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new LocalSectorsEntry();
      LocalSectorsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LocalSectorsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '0';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: LocalSectorsEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readUint64String();
            break;
          default:
            _reader.skipField();
        }
      }

      LocalSectorsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: LocalSectorsEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeUint64String(2, _instance.value);
      }
    }

    private _key?: string;
    private _value?: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LocalSectorsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<LocalSectorsEntry>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      LocalSectorsEntry.refineValues(this);
    }
    get key(): string | undefined {
      return this._key;
    }
    set key(value: string | undefined) {
      this._key = value;
    }
    get value(): string | undefined {
      return this._value;
    }
    set value(value: string | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      LocalSectorsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LocalSectorsEntry.AsObject {
      return {
        key: this.key,
        value: this.value
      };
    }

    /**
     * JSON serializer
     * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
     */
    toJSON() {
      return this.toObject();
    }
  }
  export module LocalSectorsEntry {
    /**
     * Standard JavaScript object representation for LocalSectorsEntry
     */
    export interface AsObject {
      key?: string;
      value?: string;
    }
  }
}

/**
 * Message implementation for lotuspb.SectorLegalStatesResponse
 */
export class SectorLegalStatesResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorLegalStatesResponse();
    SectorLegalStatesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorLegalStatesResponse) {
    _instance.states = _instance.states || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorLegalStatesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.states = _instance.states || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SectorLegalStatesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorLegalStatesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.states && _instance.states.length) {
      _writer.writeRepeatedString(1, _instance.states);
    }
  }

  private _states?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorLegalStatesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorLegalStatesResponse>) {
    _value = _value || {};
    this.states = (_value.states || []).slice();
    SectorLegalStatesResponse.refineValues(this);
  }
  get states(): string[] | undefined {
    return this._states;
  }
  set states(value: string[] | undefined) {
    this._states = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorLegalStatesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorLegalStatesResponse.AsObject {
    return {
      states: (this.states || []).slice()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorLegalStatesResponse {
  /**
   * Standard JavaScript object representation for SectorLegalStatesResponse
   */
  export interface AsObject {
    states?: string[];
  }
}

/**
 * Message implementation for lotuspb.SectorRequest
 */
export class SectorRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorRequest();
    SectorRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorRequest) {
    _instance.sectorId = _instance.sectorId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sectorId = _reader.readUint64String();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sectorId) {
      _writer.writeUint64String(1, _instance.sectorId);
    }
  }

  private _sectorId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorRequest>) {
    _value = _value || {};
    this.sectorId = _value.sectorId;
    SectorRequest.refineValues(this);
  }
  get sectorId(): string | undefined {
    return this._sectorId;
  }
  set sectorId(value: string | undefined) {
    this._sectorId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorRequest.AsObject {
    return {
      sectorId: this.sectorId
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorRequest {
  /**
   * Standard JavaScript object representation for SectorRequest
   */
  export interface AsObject {
    sectorId?: string;
  }
}

/**
 * Message implementation for lotuspb.Sector
 */
export class Sector implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Sector();
    Sector.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Sector) {
    _instance.sectorId = _instance.sectorId || '0';
    _instance.state = _instance.state || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Sector, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sectorId = _reader.readUint64String();
          break;
        case 2:
          _instance.state = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Sector.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Sector, _writer: BinaryWriter) {
    if (_instance.sectorId) {
      _writer.writeUint64String(1, _instance.sectorId);
    }
    if (_instance.state) {
      _writer.writeString(2, _instance.state);
    }
  }

  private _sectorId?: string;
  private _state?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Sector to deeply clone from
   */
  constructor(_value?: RecursivePartial<Sector>) {
    _value = _value || {};
    this.sectorId = _value.sectorId;
    this.state = _value.state;
    Sector.refineValues(this);
  }
  get sectorId(): string | undefined {
    return this._sectorId;
  }
  set sectorId(value: string | undefined) {
    this._sectorId = value;
  }
  get state(): string | undefined {
    return this._state;
  }
  set state(value: string | undefined) {
    this._state = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Sector.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Sector.AsObject {
    return {
      sectorId: this.sectorId,
      state: this.state
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Sector {
  /**
   * Standard JavaScript object representation for Sector
   */
  export interface AsObject {
    sectorId?: string;
    state?: string;
  }
}

/**
 * Message implementation for lotuspb.SectorListRequest
 */
export class SectorListRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorListRequest();
    SectorListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorListRequest) {
    _instance.idFilter = _instance.idFilter || [];
    _instance.stateFilter = _instance.stateFilter || [];
    _instance.pageSize = _instance.pageSize || 0;
    _instance.page = _instance.page || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorListRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.idFilter = _instance.idFilter || []).push(
            ...(_reader.readPackedUint64String() || [])
          );
          break;
        case 2:
          (_instance.stateFilter = _instance.stateFilter || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.pageSize = _reader.readUint32();
          break;
        case 4:
          _instance.page = _reader.readUint32();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.idFilter && _instance.idFilter.length) {
      _writer.writePackedUint64String(1, _instance.idFilter);
    }
    if (_instance.stateFilter && _instance.stateFilter.length) {
      _writer.writeRepeatedString(2, _instance.stateFilter);
    }
    if (_instance.pageSize) {
      _writer.writeUint32(3, _instance.pageSize);
    }
    if (_instance.page) {
      _writer.writeUint32(4, _instance.page);
    }
  }

  private _idFilter?: string[];
  private _stateFilter?: string[];
  private _pageSize?: number;
  private _page?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorListRequest>) {
    _value = _value || {};
    this.idFilter = (_value.idFilter || []).slice();
    this.stateFilter = (_value.stateFilter || []).slice();
    this.pageSize = _value.pageSize;
    this.page = _value.page;
    SectorListRequest.refineValues(this);
  }
  get idFilter(): string[] | undefined {
    return this._idFilter;
  }
  set idFilter(value: string[] | undefined) {
    this._idFilter = value;
  }
  get stateFilter(): string[] | undefined {
    return this._stateFilter;
  }
  set stateFilter(value: string[] | undefined) {
    this._stateFilter = value;
  }
  get pageSize(): number | undefined {
    return this._pageSize;
  }
  set pageSize(value: number | undefined) {
    this._pageSize = value;
  }
  get page(): number | undefined {
    return this._page;
  }
  set page(value: number | undefined) {
    this._page = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorListRequest.AsObject {
    return {
      idFilter: (this.idFilter || []).slice(),
      stateFilter: (this.stateFilter || []).slice(),
      pageSize: this.pageSize,
      page: this.page
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorListRequest {
  /**
   * Standard JavaScript object representation for SectorListRequest
   */
  export interface AsObject {
    idFilter?: string[];
    stateFilter?: string[];
    pageSize?: number;
    page?: number;
  }
}

/**
 * Message implementation for lotuspb.SectorListResponse
 */
export class SectorListResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorListResponse();
    SectorListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorListResponse) {
    _instance.total = _instance.total || 0;
    _instance.sectors = _instance.sectors || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readUint32();
          break;
        case 2:
          const messageInitializer2 = new Sector();
          _reader.readMessage(
            messageInitializer2,
            Sector.deserializeBinaryFromReader
          );
          (_instance.sectors = _instance.sectors || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SectorListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeUint32(1, _instance.total);
    }
    if (_instance.sectors && _instance.sectors.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.sectors as any,
        Sector.serializeBinaryToWriter
      );
    }
  }

  private _total?: number;
  private _sectors?: Sector[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorListResponse>) {
    _value = _value || {};
    this.total = _value.total;
    this.sectors = (_value.sectors || []).map(m => new Sector(m));
    SectorListResponse.refineValues(this);
  }
  get total(): number | undefined {
    return this._total;
  }
  set total(value: number | undefined) {
    this._total = value;
  }
  get sectors(): Sector[] | undefined {
    return this._sectors;
  }
  set sectors(value: Sector[] | undefined) {
    this._sectors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorListResponse.AsObject {
    return {
      total: this.total,
      sectors: (this.sectors || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorListResponse {
  /**
   * Standard JavaScript object representation for SectorListResponse
   */
  export interface AsObject {
    total?: number;
    sectors?: Sector.AsObject[];
  }
}

/**
 * Message implementation for lotuspb.SectorRemoveRequest
 */
export class SectorRemoveRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorRemoveRequest();
    SectorRemoveRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorRemoveRequest) {
    _instance.sectorIds = _instance.sectorIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorRemoveRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.sectorIds = _instance.sectorIds || []).push(
            ...(_reader.readPackedUint64String() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SectorRemoveRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorRemoveRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sectorIds && _instance.sectorIds.length) {
      _writer.writePackedUint64String(1, _instance.sectorIds);
    }
  }

  private _sectorIds?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorRemoveRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorRemoveRequest>) {
    _value = _value || {};
    this.sectorIds = (_value.sectorIds || []).slice();
    SectorRemoveRequest.refineValues(this);
  }
  get sectorIds(): string[] | undefined {
    return this._sectorIds;
  }
  set sectorIds(value: string[] | undefined) {
    this._sectorIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorRemoveRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorRemoveRequest.AsObject {
    return {
      sectorIds: (this.sectorIds || []).slice()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorRemoveRequest {
  /**
   * Standard JavaScript object representation for SectorRemoveRequest
   */
  export interface AsObject {
    sectorIds?: string[];
  }
}

/**
 * Message implementation for lotuspb.SectorUpdateRequest
 */
export class SectorUpdateRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorUpdateRequest();
    SectorUpdateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorUpdateRequest) {
    _instance.sectorIds = _instance.sectorIds || [];
    _instance.newState = _instance.newState || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorUpdateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.sectorIds = _instance.sectorIds || []).push(
            ...(_reader.readPackedUint64String() || [])
          );
          break;
        case 2:
          _instance.newState = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorUpdateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorUpdateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sectorIds && _instance.sectorIds.length) {
      _writer.writePackedUint64String(1, _instance.sectorIds);
    }
    if (_instance.newState) {
      _writer.writeString(2, _instance.newState);
    }
  }

  private _sectorIds?: string[];
  private _newState?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorUpdateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorUpdateRequest>) {
    _value = _value || {};
    this.sectorIds = (_value.sectorIds || []).slice();
    this.newState = _value.newState;
    SectorUpdateRequest.refineValues(this);
  }
  get sectorIds(): string[] | undefined {
    return this._sectorIds;
  }
  set sectorIds(value: string[] | undefined) {
    this._sectorIds = value;
  }
  get newState(): string | undefined {
    return this._newState;
  }
  set newState(value: string | undefined) {
    this._newState = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorUpdateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorUpdateRequest.AsObject {
    return {
      sectorIds: (this.sectorIds || []).slice(),
      newState: this.newState
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorUpdateRequest {
  /**
   * Standard JavaScript object representation for SectorUpdateRequest
   */
  export interface AsObject {
    sectorIds?: string[];
    newState?: string;
  }
}

/**
 * Message implementation for lotuspb.SectorBatchResponse
 */
export class SectorBatchResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorBatchResponse();
    SectorBatchResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorBatchResponse) {
    _instance.failed = _instance.failed || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorBatchResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const msg_1 = {} as any;
          _reader.readMessage(
            msg_1,
            SectorBatchResponse.FailedEntry.deserializeBinaryFromReader
          );
          _instance.failed = _instance.failed || {};
          _instance.failed[msg_1.key] = msg_1.value;
          break;
        default:
          _reader.skipField();
      }
    }

    SectorBatchResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorBatchResponse,
    _writer: BinaryWriter
  ) {
    if (!!_instance.failed) {
      const keys_1 = Object.keys(_instance.failed as any);

      if (keys_1.length) {
        const repeated_1 = keys_1
          .map(key => ({
            key: Number(key),
            value: (_instance.failed as any)[key]
          }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          1,
          repeated_1,
          SectorBatchResponse.FailedEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _failed?: { [prop: number]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorBatchResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorBatchResponse>) {
    _value = _value || {};
    (this.failed = _value!.failed
      ? Object.keys(_value!.failed).reduce(
          (r, k) => ({ ...r, [k]: _value!.failed![k] }),
          {}
        )
      : {}),
      SectorBatchResponse.refineValues(this);
  }
  get failed(): { [prop: number]: string } | undefined {
    return this._failed;
  }
  set failed(value: { [prop: number]: string } | undefined) {
    this._failed = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorBatchResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorBatchResponse.AsObject {
    return {
      failed: this.failed
        ? Object.keys(this.failed).reduce(
            (r, k) => ({ ...r, [k]: this.failed![k] }),
            {}
          )
        : {}
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorBatchResponse {
  /**
   * Standard JavaScript object representation for SectorBatchResponse
   */
  export interface AsObject {
    failed?: { [prop: number]: string };
  }

  /**
   * Message implementation for lotuspb.FailedEntry
   */
  export class FailedEntry implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new FailedEntry();
      FailedEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: FailedEntry) {
      _instance.key = _instance.key || '0';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: FailedEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readUint64String();
            break;
          case 2:
            _instance.value = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      FailedEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: FailedEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeUint64String(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeString(2, _instance.value);
      }
    }

    private _key?: string;
    private _value?: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of FailedEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<FailedEntry>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      FailedEntry.refineValues(this);
    }
    get key(): string | undefined {
      return this._key;
    }
    set key(value: string | undefined) {
      this._key = value;
    }
    get value(): string | undefined {
      return this._value;
    }
    set value(value: string | undefined) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      FailedEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): FailedEntry.AsObject {
      return {
        key: this.key,
        value: this.value
      };
    }

    /**
     * JSON serializer
     * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
     */
    toJSON() {
      return this.toObject();
    }
  }
  export module FailedEntry {
    /**
     * Standard JavaScript object representation for FailedEntry
     */
    export interface AsObject {
      key?: string;
      value?: string;
    }
  }
}

/**
 * Message implementation for lotuspb.SectorLogResponse
 */
export class SectorLogResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SectorLogResponse();
    SectorLogResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SectorLogResponse) {
    _instance.log = _instance.log || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SectorLogResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.log = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SectorLogResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SectorLogResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.log) {
      _writer.writeString(1, _instance.log);
    }
  }

  private _log?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SectorLogResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SectorLogResponse>) {
    _value = _value || {};
    this.log = _value.log;
    SectorLogResponse.refineValues(this);
  }
  get log(): string | undefined {
    return this._log;
  }
  set log(value: string | undefined) {
    this._log = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SectorLogResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SectorLogResponse.AsObject {
    return {
      log: this.log
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module SectorLogResponse {
  /**
   * Standard JavaScript object representation for SectorLogResponse
   */
  export interface AsObject {
    log?: string;
  }
}
