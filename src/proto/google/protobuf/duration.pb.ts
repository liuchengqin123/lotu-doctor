/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for google.protobuf.Duration
 */
export class Duration implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Duration();
    Duration.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Duration) {
    _instance.seconds = _instance.seconds || '0';
    _instance.nanos = _instance.nanos || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Duration,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.seconds = _reader.readInt64String();
          break;
        case 2:
          _instance.nanos = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Duration.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Duration, _writer: BinaryWriter) {
    if (_instance.seconds) {
      _writer.writeInt64String(1, _instance.seconds);
    }
    if (_instance.nanos) {
      _writer.writeInt32(2, _instance.nanos);
    }
  }

  private _seconds?: string;
  private _nanos?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Duration to deeply clone from
   */
  constructor(_value?: RecursivePartial<Duration>) {
    _value = _value || {};
    this.seconds = _value.seconds;
    this.nanos = _value.nanos;
    Duration.refineValues(this);
  }
  get seconds(): string | undefined {
    return this._seconds;
  }
  set seconds(value: string | undefined) {
    this._seconds = value;
  }
  get nanos(): number | undefined {
    return this._nanos;
  }
  set nanos(value: number | undefined) {
    this._nanos = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Duration.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Duration.AsObject {
    return {
      seconds: this.seconds,
      nanos: this.nanos
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
export module Duration {
  /**
   * Standard JavaScript object representation for Duration
   */
  export interface AsObject {
    seconds?: string;
    nanos?: number;
  }
}
