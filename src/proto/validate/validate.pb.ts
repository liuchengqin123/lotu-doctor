/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '../google/protobuf/descriptor.pb';
import * as googleProtobuf001 from '../google/protobuf/duration.pb';
import * as googleProtobuf002 from '../google/protobuf/timestamp.pb';
/**
 * Message implementation for validate.FieldRules
 */
export class FieldRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FieldRules();
    FieldRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FieldRules) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FieldRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.float = new FloatRules();
          _reader.readMessage(
            _instance.float,
            FloatRules.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.double = new DoubleRules();
          _reader.readMessage(
            _instance.double,
            DoubleRules.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.int32 = new Int32Rules();
          _reader.readMessage(
            _instance.int32,
            Int32Rules.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.int64 = new Int64Rules();
          _reader.readMessage(
            _instance.int64,
            Int64Rules.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.uint32 = new UInt32Rules();
          _reader.readMessage(
            _instance.uint32,
            UInt32Rules.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.uint64 = new UInt64Rules();
          _reader.readMessage(
            _instance.uint64,
            UInt64Rules.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.sint32 = new SInt32Rules();
          _reader.readMessage(
            _instance.sint32,
            SInt32Rules.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.sint64 = new SInt64Rules();
          _reader.readMessage(
            _instance.sint64,
            SInt64Rules.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.fixed32 = new Fixed32Rules();
          _reader.readMessage(
            _instance.fixed32,
            Fixed32Rules.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.fixed64 = new Fixed64Rules();
          _reader.readMessage(
            _instance.fixed64,
            Fixed64Rules.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.sfixed32 = new SFixed32Rules();
          _reader.readMessage(
            _instance.sfixed32,
            SFixed32Rules.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.sfixed64 = new SFixed64Rules();
          _reader.readMessage(
            _instance.sfixed64,
            SFixed64Rules.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.bool = new BoolRules();
          _reader.readMessage(
            _instance.bool,
            BoolRules.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.string = new StringRules();
          _reader.readMessage(
            _instance.string,
            StringRules.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.bytes = new BytesRules();
          _reader.readMessage(
            _instance.bytes,
            BytesRules.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.enum = new EnumRules();
          _reader.readMessage(
            _instance.enum,
            EnumRules.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.message = new MessageRules();
          _reader.readMessage(
            _instance.message,
            MessageRules.deserializeBinaryFromReader
          );
          break;
        case 18:
          _instance.repeated = new RepeatedRules();
          _reader.readMessage(
            _instance.repeated,
            RepeatedRules.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.map = new MapRules();
          _reader.readMessage(
            _instance.map,
            MapRules.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.any = new AnyRules();
          _reader.readMessage(
            _instance.any,
            AnyRules.deserializeBinaryFromReader
          );
          break;
        case 21:
          _instance.duration = new DurationRules();
          _reader.readMessage(
            _instance.duration,
            DurationRules.deserializeBinaryFromReader
          );
          break;
        case 22:
          _instance.timestamp = new TimestampRules();
          _reader.readMessage(
            _instance.timestamp,
            TimestampRules.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FieldRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: FieldRules, _writer: BinaryWriter) {
    if (_instance.float) {
      _writer.writeMessage(
        1,
        _instance.float as any,
        FloatRules.serializeBinaryToWriter
      );
    }
    if (_instance.double) {
      _writer.writeMessage(
        2,
        _instance.double as any,
        DoubleRules.serializeBinaryToWriter
      );
    }
    if (_instance.int32) {
      _writer.writeMessage(
        3,
        _instance.int32 as any,
        Int32Rules.serializeBinaryToWriter
      );
    }
    if (_instance.int64) {
      _writer.writeMessage(
        4,
        _instance.int64 as any,
        Int64Rules.serializeBinaryToWriter
      );
    }
    if (_instance.uint32) {
      _writer.writeMessage(
        5,
        _instance.uint32 as any,
        UInt32Rules.serializeBinaryToWriter
      );
    }
    if (_instance.uint64) {
      _writer.writeMessage(
        6,
        _instance.uint64 as any,
        UInt64Rules.serializeBinaryToWriter
      );
    }
    if (_instance.sint32) {
      _writer.writeMessage(
        7,
        _instance.sint32 as any,
        SInt32Rules.serializeBinaryToWriter
      );
    }
    if (_instance.sint64) {
      _writer.writeMessage(
        8,
        _instance.sint64 as any,
        SInt64Rules.serializeBinaryToWriter
      );
    }
    if (_instance.fixed32) {
      _writer.writeMessage(
        9,
        _instance.fixed32 as any,
        Fixed32Rules.serializeBinaryToWriter
      );
    }
    if (_instance.fixed64) {
      _writer.writeMessage(
        10,
        _instance.fixed64 as any,
        Fixed64Rules.serializeBinaryToWriter
      );
    }
    if (_instance.sfixed32) {
      _writer.writeMessage(
        11,
        _instance.sfixed32 as any,
        SFixed32Rules.serializeBinaryToWriter
      );
    }
    if (_instance.sfixed64) {
      _writer.writeMessage(
        12,
        _instance.sfixed64 as any,
        SFixed64Rules.serializeBinaryToWriter
      );
    }
    if (_instance.bool) {
      _writer.writeMessage(
        13,
        _instance.bool as any,
        BoolRules.serializeBinaryToWriter
      );
    }
    if (_instance.string) {
      _writer.writeMessage(
        14,
        _instance.string as any,
        StringRules.serializeBinaryToWriter
      );
    }
    if (_instance.bytes) {
      _writer.writeMessage(
        15,
        _instance.bytes as any,
        BytesRules.serializeBinaryToWriter
      );
    }
    if (_instance.enum) {
      _writer.writeMessage(
        16,
        _instance.enum as any,
        EnumRules.serializeBinaryToWriter
      );
    }
    if (_instance.message) {
      _writer.writeMessage(
        17,
        _instance.message as any,
        MessageRules.serializeBinaryToWriter
      );
    }
    if (_instance.repeated) {
      _writer.writeMessage(
        18,
        _instance.repeated as any,
        RepeatedRules.serializeBinaryToWriter
      );
    }
    if (_instance.map) {
      _writer.writeMessage(
        19,
        _instance.map as any,
        MapRules.serializeBinaryToWriter
      );
    }
    if (_instance.any) {
      _writer.writeMessage(
        20,
        _instance.any as any,
        AnyRules.serializeBinaryToWriter
      );
    }
    if (_instance.duration) {
      _writer.writeMessage(
        21,
        _instance.duration as any,
        DurationRules.serializeBinaryToWriter
      );
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        22,
        _instance.timestamp as any,
        TimestampRules.serializeBinaryToWriter
      );
    }
  }

  private _float?: FloatRules;
  private _double?: DoubleRules;
  private _int32?: Int32Rules;
  private _int64?: Int64Rules;
  private _uint32?: UInt32Rules;
  private _uint64?: UInt64Rules;
  private _sint32?: SInt32Rules;
  private _sint64?: SInt64Rules;
  private _fixed32?: Fixed32Rules;
  private _fixed64?: Fixed64Rules;
  private _sfixed32?: SFixed32Rules;
  private _sfixed64?: SFixed64Rules;
  private _bool?: BoolRules;
  private _string?: StringRules;
  private _bytes?: BytesRules;
  private _enum?: EnumRules;
  private _message?: MessageRules;
  private _repeated?: RepeatedRules;
  private _map?: MapRules;
  private _any?: AnyRules;
  private _duration?: DurationRules;
  private _timestamp?: TimestampRules;

  private _type: FieldRules.TypeCase = FieldRules.TypeCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FieldRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<FieldRules>) {
    _value = _value || {};
    this.float = _value.float ? new FloatRules(_value.float) : undefined;
    this.double = _value.double ? new DoubleRules(_value.double) : undefined;
    this.int32 = _value.int32 ? new Int32Rules(_value.int32) : undefined;
    this.int64 = _value.int64 ? new Int64Rules(_value.int64) : undefined;
    this.uint32 = _value.uint32 ? new UInt32Rules(_value.uint32) : undefined;
    this.uint64 = _value.uint64 ? new UInt64Rules(_value.uint64) : undefined;
    this.sint32 = _value.sint32 ? new SInt32Rules(_value.sint32) : undefined;
    this.sint64 = _value.sint64 ? new SInt64Rules(_value.sint64) : undefined;
    this.fixed32 = _value.fixed32
      ? new Fixed32Rules(_value.fixed32)
      : undefined;
    this.fixed64 = _value.fixed64
      ? new Fixed64Rules(_value.fixed64)
      : undefined;
    this.sfixed32 = _value.sfixed32
      ? new SFixed32Rules(_value.sfixed32)
      : undefined;
    this.sfixed64 = _value.sfixed64
      ? new SFixed64Rules(_value.sfixed64)
      : undefined;
    this.bool = _value.bool ? new BoolRules(_value.bool) : undefined;
    this.string = _value.string ? new StringRules(_value.string) : undefined;
    this.bytes = _value.bytes ? new BytesRules(_value.bytes) : undefined;
    this.enum = _value.enum ? new EnumRules(_value.enum) : undefined;
    this.message = _value.message
      ? new MessageRules(_value.message)
      : undefined;
    this.repeated = _value.repeated
      ? new RepeatedRules(_value.repeated)
      : undefined;
    this.map = _value.map ? new MapRules(_value.map) : undefined;
    this.any = _value.any ? new AnyRules(_value.any) : undefined;
    this.duration = _value.duration
      ? new DurationRules(_value.duration)
      : undefined;
    this.timestamp = _value.timestamp
      ? new TimestampRules(_value.timestamp)
      : undefined;
    FieldRules.refineValues(this);
  }
  get float(): FloatRules | undefined {
    return this._float;
  }
  set float(value: FloatRules | undefined) {
    if (value !== undefined && value !== null) {
      this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.float;
    }
    this._float = value;
  }
  get double(): DoubleRules | undefined {
    return this._double;
  }
  set double(value: DoubleRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.double;
    }
    this._double = value;
  }
  get int32(): Int32Rules | undefined {
    return this._int32;
  }
  set int32(value: Int32Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.int32;
    }
    this._int32 = value;
  }
  get int64(): Int64Rules | undefined {
    return this._int64;
  }
  set int64(value: Int64Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.int64;
    }
    this._int64 = value;
  }
  get uint32(): UInt32Rules | undefined {
    return this._uint32;
  }
  set uint32(value: UInt32Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.uint32;
    }
    this._uint32 = value;
  }
  get uint64(): UInt64Rules | undefined {
    return this._uint64;
  }
  set uint64(value: UInt64Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.uint64;
    }
    this._uint64 = value;
  }
  get sint32(): SInt32Rules | undefined {
    return this._sint32;
  }
  set sint32(value: SInt32Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.sint32;
    }
    this._sint32 = value;
  }
  get sint64(): SInt64Rules | undefined {
    return this._sint64;
  }
  set sint64(value: SInt64Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.sint64;
    }
    this._sint64 = value;
  }
  get fixed32(): Fixed32Rules | undefined {
    return this._fixed32;
  }
  set fixed32(value: Fixed32Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.fixed32;
    }
    this._fixed32 = value;
  }
  get fixed64(): Fixed64Rules | undefined {
    return this._fixed64;
  }
  set fixed64(value: Fixed64Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.fixed64;
    }
    this._fixed64 = value;
  }
  get sfixed32(): SFixed32Rules | undefined {
    return this._sfixed32;
  }
  set sfixed32(value: SFixed32Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.sfixed32;
    }
    this._sfixed32 = value;
  }
  get sfixed64(): SFixed64Rules | undefined {
    return this._sfixed64;
  }
  set sfixed64(value: SFixed64Rules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.sfixed64;
    }
    this._sfixed64 = value;
  }
  get bool(): BoolRules | undefined {
    return this._bool;
  }
  set bool(value: BoolRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.bool;
    }
    this._bool = value;
  }
  get string(): StringRules | undefined {
    return this._string;
  }
  set string(value: StringRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.string;
    }
    this._string = value;
  }
  get bytes(): BytesRules | undefined {
    return this._bytes;
  }
  set bytes(value: BytesRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._enum = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.bytes;
    }
    this._bytes = value;
  }
  get enum(): EnumRules | undefined {
    return this._enum;
  }
  set enum(value: EnumRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._message = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.enum;
    }
    this._enum = value;
  }
  get message(): MessageRules | undefined {
    return this._message;
  }
  set message(value: MessageRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._repeated = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.message;
    }
    this._message = value;
  }
  get repeated(): RepeatedRules | undefined {
    return this._repeated;
  }
  set repeated(value: RepeatedRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._map = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.repeated;
    }
    this._repeated = value;
  }
  get map(): MapRules | undefined {
    return this._map;
  }
  set map(value: MapRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._any = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.map;
    }
    this._map = value;
  }
  get any(): AnyRules | undefined {
    return this._any;
  }
  set any(value: AnyRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._duration = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.any;
    }
    this._any = value;
  }
  get duration(): DurationRules | undefined {
    return this._duration;
  }
  set duration(value: DurationRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._timestamp = undefined;
      this._type = FieldRules.TypeCase.duration;
    }
    this._duration = value;
  }
  get timestamp(): TimestampRules | undefined {
    return this._timestamp;
  }
  set timestamp(value: TimestampRules | undefined) {
    if (value !== undefined && value !== null) {
      this._float = this._double = this._int32 = this._int64 = this._uint32 = this._uint64 = this._sint32 = this._sint64 = this._fixed32 = this._fixed64 = this._sfixed32 = this._sfixed64 = this._bool = this._string = this._bytes = this._enum = this._message = this._repeated = this._map = this._any = this._duration = undefined;
      this._type = FieldRules.TypeCase.timestamp;
    }
    this._timestamp = value;
  }
  get type() {
    return this._type;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FieldRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FieldRules.AsObject {
    return {
      float: this.float ? this.float.toObject() : undefined,
      double: this.double ? this.double.toObject() : undefined,
      int32: this.int32 ? this.int32.toObject() : undefined,
      int64: this.int64 ? this.int64.toObject() : undefined,
      uint32: this.uint32 ? this.uint32.toObject() : undefined,
      uint64: this.uint64 ? this.uint64.toObject() : undefined,
      sint32: this.sint32 ? this.sint32.toObject() : undefined,
      sint64: this.sint64 ? this.sint64.toObject() : undefined,
      fixed32: this.fixed32 ? this.fixed32.toObject() : undefined,
      fixed64: this.fixed64 ? this.fixed64.toObject() : undefined,
      sfixed32: this.sfixed32 ? this.sfixed32.toObject() : undefined,
      sfixed64: this.sfixed64 ? this.sfixed64.toObject() : undefined,
      bool: this.bool ? this.bool.toObject() : undefined,
      string: this.string ? this.string.toObject() : undefined,
      bytes: this.bytes ? this.bytes.toObject() : undefined,
      enum: this.enum ? this.enum.toObject() : undefined,
      message: this.message ? this.message.toObject() : undefined,
      repeated: this.repeated ? this.repeated.toObject() : undefined,
      map: this.map ? this.map.toObject() : undefined,
      any: this.any ? this.any.toObject() : undefined,
      duration: this.duration ? this.duration.toObject() : undefined,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined
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
export module FieldRules {
  /**
   * Standard JavaScript object representation for FieldRules
   */
  export interface AsObject {
    float?: FloatRules.AsObject;
    double?: DoubleRules.AsObject;
    int32?: Int32Rules.AsObject;
    int64?: Int64Rules.AsObject;
    uint32?: UInt32Rules.AsObject;
    uint64?: UInt64Rules.AsObject;
    sint32?: SInt32Rules.AsObject;
    sint64?: SInt64Rules.AsObject;
    fixed32?: Fixed32Rules.AsObject;
    fixed64?: Fixed64Rules.AsObject;
    sfixed32?: SFixed32Rules.AsObject;
    sfixed64?: SFixed64Rules.AsObject;
    bool?: BoolRules.AsObject;
    string?: StringRules.AsObject;
    bytes?: BytesRules.AsObject;
    enum?: EnumRules.AsObject;
    message?: MessageRules.AsObject;
    repeated?: RepeatedRules.AsObject;
    map?: MapRules.AsObject;
    any?: AnyRules.AsObject;
    duration?: DurationRules.AsObject;
    timestamp?: TimestampRules.AsObject;
  }
  export enum TypeCase {
    none = 0,
    float = 1,
    double = 2,
    int32 = 3,
    int64 = 4,
    uint32 = 5,
    uint64 = 6,
    sint32 = 7,
    sint64 = 8,
    fixed32 = 9,
    fixed64 = 10,
    sfixed32 = 11,
    sfixed64 = 12,
    bool = 13,
    string = 14,
    bytes = 15,
    enum = 16,
    message = 17,
    repeated = 18,
    map = 19,
    any = 20,
    duration = 21,
    timestamp = 22
  }
}

/**
 * Message implementation for validate.FloatRules
 */
export class FloatRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FloatRules();
    FloatRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FloatRules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.lt = _instance.lt || 0;
    _instance.lte = _instance.lte || 0;
    _instance.gt = _instance.gt || 0;
    _instance.gte = _instance.gte || 0;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FloatRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readFloat();
          break;
        case 2:
          _instance.lt = _reader.readFloat();
          break;
        case 3:
          _instance.lte = _reader.readFloat();
          break;
        case 4:
          _instance.gt = _reader.readFloat();
          break;
        case 5:
          _instance.gte = _reader.readFloat();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readFloat());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(_reader.readFloat());
          break;
        default:
          _reader.skipField();
      }
    }

    FloatRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: FloatRules, _writer: BinaryWriter) {
    if (_instance.pbConst) {
      _writer.writeFloat(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeFloat(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeFloat(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeFloat(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeFloat(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedFloat(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedFloat(7, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _lt?: number;
  private _lte?: number;
  private _gt?: number;
  private _gte?: number;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FloatRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<FloatRules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    FloatRules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get lt(): number | undefined {
    return this._lt;
  }
  set lt(value: number | undefined) {
    this._lt = value;
  }
  get lte(): number | undefined {
    return this._lte;
  }
  set lte(value: number | undefined) {
    this._lte = value;
  }
  get gt(): number | undefined {
    return this._gt;
  }
  set gt(value: number | undefined) {
    this._gt = value;
  }
  get gte(): number | undefined {
    return this._gte;
  }
  set gte(value: number | undefined) {
    this._gte = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FloatRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FloatRules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module FloatRules {
  /**
   * Standard JavaScript object representation for FloatRules
   */
  export interface AsObject {
    pbConst?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.DoubleRules
 */
export class DoubleRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DoubleRules();
    DoubleRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DoubleRules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.lt = _instance.lt || 0;
    _instance.lte = _instance.lte || 0;
    _instance.gt = _instance.gt || 0;
    _instance.gte = _instance.gte || 0;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DoubleRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readDouble();
          break;
        case 2:
          _instance.lt = _reader.readDouble();
          break;
        case 3:
          _instance.lte = _reader.readDouble();
          break;
        case 4:
          _instance.gt = _reader.readDouble();
          break;
        case 5:
          _instance.gte = _reader.readDouble();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readDouble());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(_reader.readDouble());
          break;
        default:
          _reader.skipField();
      }
    }

    DoubleRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DoubleRules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeDouble(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeDouble(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeDouble(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeDouble(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeDouble(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedDouble(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedDouble(7, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _lt?: number;
  private _lte?: number;
  private _gt?: number;
  private _gte?: number;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DoubleRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<DoubleRules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    DoubleRules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get lt(): number | undefined {
    return this._lt;
  }
  set lt(value: number | undefined) {
    this._lt = value;
  }
  get lte(): number | undefined {
    return this._lte;
  }
  set lte(value: number | undefined) {
    this._lte = value;
  }
  get gt(): number | undefined {
    return this._gt;
  }
  set gt(value: number | undefined) {
    this._gt = value;
  }
  get gte(): number | undefined {
    return this._gte;
  }
  set gte(value: number | undefined) {
    this._gte = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DoubleRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DoubleRules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module DoubleRules {
  /**
   * Standard JavaScript object representation for DoubleRules
   */
  export interface AsObject {
    pbConst?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.Int32Rules
 */
export class Int32Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Int32Rules();
    Int32Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Int32Rules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.lt = _instance.lt || 0;
    _instance.lte = _instance.lte || 0;
    _instance.gt = _instance.gt || 0;
    _instance.gte = _instance.gte || 0;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Int32Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readInt32();
          break;
        case 2:
          _instance.lt = _reader.readInt32();
          break;
        case 3:
          _instance.lte = _reader.readInt32();
          break;
        case 4:
          _instance.gt = _reader.readInt32();
          break;
        case 5:
          _instance.gte = _reader.readInt32();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readInt32());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(_reader.readInt32());
          break;
        default:
          _reader.skipField();
      }
    }

    Int32Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Int32Rules, _writer: BinaryWriter) {
    if (_instance.pbConst) {
      _writer.writeInt32(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeInt32(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeInt32(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeInt32(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeInt32(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedInt32(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedInt32(7, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _lt?: number;
  private _lte?: number;
  private _gt?: number;
  private _gte?: number;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Int32Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<Int32Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    Int32Rules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get lt(): number | undefined {
    return this._lt;
  }
  set lt(value: number | undefined) {
    this._lt = value;
  }
  get lte(): number | undefined {
    return this._lte;
  }
  set lte(value: number | undefined) {
    this._lte = value;
  }
  get gt(): number | undefined {
    return this._gt;
  }
  set gt(value: number | undefined) {
    this._gt = value;
  }
  get gte(): number | undefined {
    return this._gte;
  }
  set gte(value: number | undefined) {
    this._gte = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Int32Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Int32Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module Int32Rules {
  /**
   * Standard JavaScript object representation for Int32Rules
   */
  export interface AsObject {
    pbConst?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.Int64Rules
 */
export class Int64Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Int64Rules();
    Int64Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Int64Rules) {
    _instance.pbConst = _instance.pbConst || '0';
    _instance.lt = _instance.lt || '0';
    _instance.lte = _instance.lte || '0';
    _instance.gt = _instance.gt || '0';
    _instance.gte = _instance.gte || '0';
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Int64Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readInt64String();
          break;
        case 2:
          _instance.lt = _reader.readInt64String();
          break;
        case 3:
          _instance.lte = _reader.readInt64String();
          break;
        case 4:
          _instance.gt = _reader.readInt64String();
          break;
        case 5:
          _instance.gte = _reader.readInt64String();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readInt64String());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(
            _reader.readInt64String()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Int64Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Int64Rules, _writer: BinaryWriter) {
    if (_instance.pbConst) {
      _writer.writeInt64String(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeInt64String(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeInt64String(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeInt64String(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeInt64String(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedInt64String(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedInt64String(7, _instance.notIn);
    }
  }

  private _pbConst?: string;
  private _lt?: string;
  private _lte?: string;
  private _gt?: string;
  private _gte?: string;
  private _in?: string[];
  private _notIn?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Int64Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<Int64Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    Int64Rules.refineValues(this);
  }
  get pbConst(): string | undefined {
    return this._pbConst;
  }
  set pbConst(value: string | undefined) {
    this._pbConst = value;
  }
  get lt(): string | undefined {
    return this._lt;
  }
  set lt(value: string | undefined) {
    this._lt = value;
  }
  get lte(): string | undefined {
    return this._lte;
  }
  set lte(value: string | undefined) {
    this._lte = value;
  }
  get gt(): string | undefined {
    return this._gt;
  }
  set gt(value: string | undefined) {
    this._gt = value;
  }
  get gte(): string | undefined {
    return this._gte;
  }
  set gte(value: string | undefined) {
    this._gte = value;
  }
  get in(): string[] | undefined {
    return this._in;
  }
  set in(value: string[] | undefined) {
    this._in = value;
  }
  get notIn(): string[] | undefined {
    return this._notIn;
  }
  set notIn(value: string[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Int64Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Int64Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module Int64Rules {
  /**
   * Standard JavaScript object representation for Int64Rules
   */
  export interface AsObject {
    pbConst?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    in?: string[];
    notIn?: string[];
  }
}

/**
 * Message implementation for validate.UInt32Rules
 */
export class UInt32Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UInt32Rules();
    UInt32Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UInt32Rules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.lt = _instance.lt || 0;
    _instance.lte = _instance.lte || 0;
    _instance.gt = _instance.gt || 0;
    _instance.gte = _instance.gte || 0;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UInt32Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readUint32();
          break;
        case 2:
          _instance.lt = _reader.readUint32();
          break;
        case 3:
          _instance.lte = _reader.readUint32();
          break;
        case 4:
          _instance.gt = _reader.readUint32();
          break;
        case 5:
          _instance.gte = _reader.readUint32();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readUint32());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(_reader.readUint32());
          break;
        default:
          _reader.skipField();
      }
    }

    UInt32Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UInt32Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeUint32(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeUint32(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeUint32(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeUint32(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeUint32(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedUint32(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedUint32(7, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _lt?: number;
  private _lte?: number;
  private _gt?: number;
  private _gte?: number;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UInt32Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<UInt32Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    UInt32Rules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get lt(): number | undefined {
    return this._lt;
  }
  set lt(value: number | undefined) {
    this._lt = value;
  }
  get lte(): number | undefined {
    return this._lte;
  }
  set lte(value: number | undefined) {
    this._lte = value;
  }
  get gt(): number | undefined {
    return this._gt;
  }
  set gt(value: number | undefined) {
    this._gt = value;
  }
  get gte(): number | undefined {
    return this._gte;
  }
  set gte(value: number | undefined) {
    this._gte = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UInt32Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UInt32Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module UInt32Rules {
  /**
   * Standard JavaScript object representation for UInt32Rules
   */
  export interface AsObject {
    pbConst?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.UInt64Rules
 */
export class UInt64Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UInt64Rules();
    UInt64Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UInt64Rules) {
    _instance.pbConst = _instance.pbConst || '0';
    _instance.lt = _instance.lt || '0';
    _instance.lte = _instance.lte || '0';
    _instance.gt = _instance.gt || '0';
    _instance.gte = _instance.gte || '0';
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UInt64Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readUint64String();
          break;
        case 2:
          _instance.lt = _reader.readUint64String();
          break;
        case 3:
          _instance.lte = _reader.readUint64String();
          break;
        case 4:
          _instance.gt = _reader.readUint64String();
          break;
        case 5:
          _instance.gte = _reader.readUint64String();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readUint64String());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(
            _reader.readUint64String()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UInt64Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UInt64Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeUint64String(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeUint64String(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeUint64String(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeUint64String(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeUint64String(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedUint64String(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedUint64String(7, _instance.notIn);
    }
  }

  private _pbConst?: string;
  private _lt?: string;
  private _lte?: string;
  private _gt?: string;
  private _gte?: string;
  private _in?: string[];
  private _notIn?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UInt64Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<UInt64Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    UInt64Rules.refineValues(this);
  }
  get pbConst(): string | undefined {
    return this._pbConst;
  }
  set pbConst(value: string | undefined) {
    this._pbConst = value;
  }
  get lt(): string | undefined {
    return this._lt;
  }
  set lt(value: string | undefined) {
    this._lt = value;
  }
  get lte(): string | undefined {
    return this._lte;
  }
  set lte(value: string | undefined) {
    this._lte = value;
  }
  get gt(): string | undefined {
    return this._gt;
  }
  set gt(value: string | undefined) {
    this._gt = value;
  }
  get gte(): string | undefined {
    return this._gte;
  }
  set gte(value: string | undefined) {
    this._gte = value;
  }
  get in(): string[] | undefined {
    return this._in;
  }
  set in(value: string[] | undefined) {
    this._in = value;
  }
  get notIn(): string[] | undefined {
    return this._notIn;
  }
  set notIn(value: string[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UInt64Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UInt64Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module UInt64Rules {
  /**
   * Standard JavaScript object representation for UInt64Rules
   */
  export interface AsObject {
    pbConst?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    in?: string[];
    notIn?: string[];
  }
}

/**
 * Message implementation for validate.SInt32Rules
 */
export class SInt32Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SInt32Rules();
    SInt32Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SInt32Rules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.lt = _instance.lt || 0;
    _instance.lte = _instance.lte || 0;
    _instance.gt = _instance.gt || 0;
    _instance.gte = _instance.gte || 0;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SInt32Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readSint32();
          break;
        case 2:
          _instance.lt = _reader.readSint32();
          break;
        case 3:
          _instance.lte = _reader.readSint32();
          break;
        case 4:
          _instance.gt = _reader.readSint32();
          break;
        case 5:
          _instance.gte = _reader.readSint32();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readSint32());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(_reader.readSint32());
          break;
        default:
          _reader.skipField();
      }
    }

    SInt32Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SInt32Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeSint32(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeSint32(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeSint32(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeSint32(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeSint32(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedSint32(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedSint32(7, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _lt?: number;
  private _lte?: number;
  private _gt?: number;
  private _gte?: number;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SInt32Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<SInt32Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    SInt32Rules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get lt(): number | undefined {
    return this._lt;
  }
  set lt(value: number | undefined) {
    this._lt = value;
  }
  get lte(): number | undefined {
    return this._lte;
  }
  set lte(value: number | undefined) {
    this._lte = value;
  }
  get gt(): number | undefined {
    return this._gt;
  }
  set gt(value: number | undefined) {
    this._gt = value;
  }
  get gte(): number | undefined {
    return this._gte;
  }
  set gte(value: number | undefined) {
    this._gte = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SInt32Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SInt32Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module SInt32Rules {
  /**
   * Standard JavaScript object representation for SInt32Rules
   */
  export interface AsObject {
    pbConst?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.SInt64Rules
 */
export class SInt64Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SInt64Rules();
    SInt64Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SInt64Rules) {
    _instance.pbConst = _instance.pbConst || '0';
    _instance.lt = _instance.lt || '0';
    _instance.lte = _instance.lte || '0';
    _instance.gt = _instance.gt || '0';
    _instance.gte = _instance.gte || '0';
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SInt64Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readSint64String();
          break;
        case 2:
          _instance.lt = _reader.readSint64String();
          break;
        case 3:
          _instance.lte = _reader.readSint64String();
          break;
        case 4:
          _instance.gt = _reader.readSint64String();
          break;
        case 5:
          _instance.gte = _reader.readSint64String();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readSint64String());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(
            _reader.readSint64String()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SInt64Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SInt64Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeSint64String(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeSint64String(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeSint64String(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeSint64String(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeSint64String(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedSint64String(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedSint64String(7, _instance.notIn);
    }
  }

  private _pbConst?: string;
  private _lt?: string;
  private _lte?: string;
  private _gt?: string;
  private _gte?: string;
  private _in?: string[];
  private _notIn?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SInt64Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<SInt64Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    SInt64Rules.refineValues(this);
  }
  get pbConst(): string | undefined {
    return this._pbConst;
  }
  set pbConst(value: string | undefined) {
    this._pbConst = value;
  }
  get lt(): string | undefined {
    return this._lt;
  }
  set lt(value: string | undefined) {
    this._lt = value;
  }
  get lte(): string | undefined {
    return this._lte;
  }
  set lte(value: string | undefined) {
    this._lte = value;
  }
  get gt(): string | undefined {
    return this._gt;
  }
  set gt(value: string | undefined) {
    this._gt = value;
  }
  get gte(): string | undefined {
    return this._gte;
  }
  set gte(value: string | undefined) {
    this._gte = value;
  }
  get in(): string[] | undefined {
    return this._in;
  }
  set in(value: string[] | undefined) {
    this._in = value;
  }
  get notIn(): string[] | undefined {
    return this._notIn;
  }
  set notIn(value: string[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SInt64Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SInt64Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module SInt64Rules {
  /**
   * Standard JavaScript object representation for SInt64Rules
   */
  export interface AsObject {
    pbConst?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    in?: string[];
    notIn?: string[];
  }
}

/**
 * Message implementation for validate.Fixed32Rules
 */
export class Fixed32Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Fixed32Rules();
    Fixed32Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Fixed32Rules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.lt = _instance.lt || 0;
    _instance.lte = _instance.lte || 0;
    _instance.gt = _instance.gt || 0;
    _instance.gte = _instance.gte || 0;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Fixed32Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readFixed32();
          break;
        case 2:
          _instance.lt = _reader.readFixed32();
          break;
        case 3:
          _instance.lte = _reader.readFixed32();
          break;
        case 4:
          _instance.gt = _reader.readFixed32();
          break;
        case 5:
          _instance.gte = _reader.readFixed32();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readFixed32());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(_reader.readFixed32());
          break;
        default:
          _reader.skipField();
      }
    }

    Fixed32Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Fixed32Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeFixed32(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeFixed32(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeFixed32(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeFixed32(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeFixed32(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedFixed32(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedFixed32(7, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _lt?: number;
  private _lte?: number;
  private _gt?: number;
  private _gte?: number;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Fixed32Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<Fixed32Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    Fixed32Rules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get lt(): number | undefined {
    return this._lt;
  }
  set lt(value: number | undefined) {
    this._lt = value;
  }
  get lte(): number | undefined {
    return this._lte;
  }
  set lte(value: number | undefined) {
    this._lte = value;
  }
  get gt(): number | undefined {
    return this._gt;
  }
  set gt(value: number | undefined) {
    this._gt = value;
  }
  get gte(): number | undefined {
    return this._gte;
  }
  set gte(value: number | undefined) {
    this._gte = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Fixed32Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Fixed32Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module Fixed32Rules {
  /**
   * Standard JavaScript object representation for Fixed32Rules
   */
  export interface AsObject {
    pbConst?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.Fixed64Rules
 */
export class Fixed64Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Fixed64Rules();
    Fixed64Rules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Fixed64Rules) {
    _instance.pbConst = _instance.pbConst || '0';
    _instance.lt = _instance.lt || '0';
    _instance.lte = _instance.lte || '0';
    _instance.gt = _instance.gt || '0';
    _instance.gte = _instance.gte || '0';
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Fixed64Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readFixed64String();
          break;
        case 2:
          _instance.lt = _reader.readFixed64String();
          break;
        case 3:
          _instance.lte = _reader.readFixed64String();
          break;
        case 4:
          _instance.gt = _reader.readFixed64String();
          break;
        case 5:
          _instance.gte = _reader.readFixed64String();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readFixed64String());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(
            _reader.readFixed64String()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Fixed64Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: Fixed64Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeFixed64String(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeFixed64String(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeFixed64String(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeFixed64String(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeFixed64String(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedFixed64String(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedFixed64String(7, _instance.notIn);
    }
  }

  private _pbConst?: string;
  private _lt?: string;
  private _lte?: string;
  private _gt?: string;
  private _gte?: string;
  private _in?: string[];
  private _notIn?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Fixed64Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<Fixed64Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    Fixed64Rules.refineValues(this);
  }
  get pbConst(): string | undefined {
    return this._pbConst;
  }
  set pbConst(value: string | undefined) {
    this._pbConst = value;
  }
  get lt(): string | undefined {
    return this._lt;
  }
  set lt(value: string | undefined) {
    this._lt = value;
  }
  get lte(): string | undefined {
    return this._lte;
  }
  set lte(value: string | undefined) {
    this._lte = value;
  }
  get gt(): string | undefined {
    return this._gt;
  }
  set gt(value: string | undefined) {
    this._gt = value;
  }
  get gte(): string | undefined {
    return this._gte;
  }
  set gte(value: string | undefined) {
    this._gte = value;
  }
  get in(): string[] | undefined {
    return this._in;
  }
  set in(value: string[] | undefined) {
    this._in = value;
  }
  get notIn(): string[] | undefined {
    return this._notIn;
  }
  set notIn(value: string[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Fixed64Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Fixed64Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module Fixed64Rules {
  /**
   * Standard JavaScript object representation for Fixed64Rules
   */
  export interface AsObject {
    pbConst?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    in?: string[];
    notIn?: string[];
  }
}

/**
 * Message implementation for validate.SFixed32Rules
 */
export class SFixed32Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SFixed32Rules();
    SFixed32Rules.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SFixed32Rules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.lt = _instance.lt || 0;
    _instance.lte = _instance.lte || 0;
    _instance.gt = _instance.gt || 0;
    _instance.gte = _instance.gte || 0;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SFixed32Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readSfixed32();
          break;
        case 2:
          _instance.lt = _reader.readSfixed32();
          break;
        case 3:
          _instance.lte = _reader.readSfixed32();
          break;
        case 4:
          _instance.gt = _reader.readSfixed32();
          break;
        case 5:
          _instance.gte = _reader.readSfixed32();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(_reader.readSfixed32());
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(
            _reader.readSfixed32()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SFixed32Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SFixed32Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeSfixed32(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeSfixed32(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeSfixed32(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeSfixed32(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeSfixed32(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedSfixed32(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedSfixed32(7, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _lt?: number;
  private _lte?: number;
  private _gt?: number;
  private _gte?: number;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SFixed32Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<SFixed32Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    SFixed32Rules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get lt(): number | undefined {
    return this._lt;
  }
  set lt(value: number | undefined) {
    this._lt = value;
  }
  get lte(): number | undefined {
    return this._lte;
  }
  set lte(value: number | undefined) {
    this._lte = value;
  }
  get gt(): number | undefined {
    return this._gt;
  }
  set gt(value: number | undefined) {
    this._gt = value;
  }
  get gte(): number | undefined {
    return this._gte;
  }
  set gte(value: number | undefined) {
    this._gte = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SFixed32Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SFixed32Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module SFixed32Rules {
  /**
   * Standard JavaScript object representation for SFixed32Rules
   */
  export interface AsObject {
    pbConst?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.SFixed64Rules
 */
export class SFixed64Rules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SFixed64Rules();
    SFixed64Rules.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SFixed64Rules) {
    _instance.pbConst = _instance.pbConst || '0';
    _instance.lt = _instance.lt || '0';
    _instance.lte = _instance.lte || '0';
    _instance.gt = _instance.gt || '0';
    _instance.gte = _instance.gte || '0';
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SFixed64Rules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readSfixed64String();
          break;
        case 2:
          _instance.lt = _reader.readSfixed64String();
          break;
        case 3:
          _instance.lte = _reader.readSfixed64String();
          break;
        case 4:
          _instance.gt = _reader.readSfixed64String();
          break;
        case 5:
          _instance.gte = _reader.readSfixed64String();
          break;
        case 6:
          (_instance.in = _instance.in || []).push(
            _reader.readSfixed64String()
          );
          break;
        case 7:
          (_instance.notIn = _instance.notIn || []).push(
            _reader.readSfixed64String()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SFixed64Rules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SFixed64Rules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeSfixed64String(1, _instance.pbConst);
    }
    if (_instance.lt) {
      _writer.writeSfixed64String(2, _instance.lt);
    }
    if (_instance.lte) {
      _writer.writeSfixed64String(3, _instance.lte);
    }
    if (_instance.gt) {
      _writer.writeSfixed64String(4, _instance.gt);
    }
    if (_instance.gte) {
      _writer.writeSfixed64String(5, _instance.gte);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedSfixed64String(6, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedSfixed64String(7, _instance.notIn);
    }
  }

  private _pbConst?: string;
  private _lt?: string;
  private _lte?: string;
  private _gt?: string;
  private _gte?: string;
  private _in?: string[];
  private _notIn?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SFixed64Rules to deeply clone from
   */
  constructor(_value?: RecursivePartial<SFixed64Rules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.lt = _value.lt;
    this.lte = _value.lte;
    this.gt = _value.gt;
    this.gte = _value.gte;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    SFixed64Rules.refineValues(this);
  }
  get pbConst(): string | undefined {
    return this._pbConst;
  }
  set pbConst(value: string | undefined) {
    this._pbConst = value;
  }
  get lt(): string | undefined {
    return this._lt;
  }
  set lt(value: string | undefined) {
    this._lt = value;
  }
  get lte(): string | undefined {
    return this._lte;
  }
  set lte(value: string | undefined) {
    this._lte = value;
  }
  get gt(): string | undefined {
    return this._gt;
  }
  set gt(value: string | undefined) {
    this._gt = value;
  }
  get gte(): string | undefined {
    return this._gte;
  }
  set gte(value: string | undefined) {
    this._gte = value;
  }
  get in(): string[] | undefined {
    return this._in;
  }
  set in(value: string[] | undefined) {
    this._in = value;
  }
  get notIn(): string[] | undefined {
    return this._notIn;
  }
  set notIn(value: string[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SFixed64Rules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SFixed64Rules.AsObject {
    return {
      pbConst: this.pbConst,
      lt: this.lt,
      lte: this.lte,
      gt: this.gt,
      gte: this.gte,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module SFixed64Rules {
  /**
   * Standard JavaScript object representation for SFixed64Rules
   */
  export interface AsObject {
    pbConst?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    in?: string[];
    notIn?: string[];
  }
}

/**
 * Message implementation for validate.BoolRules
 */
export class BoolRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BoolRules();
    BoolRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BoolRules) {
    _instance.pbConst = _instance.pbConst || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BoolRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    BoolRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: BoolRules, _writer: BinaryWriter) {
    if (_instance.pbConst) {
      _writer.writeBool(1, _instance.pbConst);
    }
  }

  private _pbConst?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BoolRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<BoolRules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    BoolRules.refineValues(this);
  }
  get pbConst(): boolean | undefined {
    return this._pbConst;
  }
  set pbConst(value: boolean | undefined) {
    this._pbConst = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BoolRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BoolRules.AsObject {
    return {
      pbConst: this.pbConst
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
export module BoolRules {
  /**
   * Standard JavaScript object representation for BoolRules
   */
  export interface AsObject {
    pbConst?: boolean;
  }
}

/**
 * Message implementation for validate.StringRules
 */
export class StringRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StringRules();
    StringRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StringRules) {
    _instance.pbConst = _instance.pbConst || '';
    _instance.len = _instance.len || '0';
    _instance.minLen = _instance.minLen || '0';
    _instance.maxLen = _instance.maxLen || '0';
    _instance.lenBytes = _instance.lenBytes || '0';
    _instance.minBytes = _instance.minBytes || '0';
    _instance.maxBytes = _instance.maxBytes || '0';
    _instance.pattern = _instance.pattern || '';
    _instance.prefix = _instance.prefix || '';
    _instance.suffix = _instance.suffix || '';
    _instance.contains = _instance.contains || '';
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StringRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readString();
          break;
        case 19:
          _instance.len = _reader.readUint64String();
          break;
        case 2:
          _instance.minLen = _reader.readUint64String();
          break;
        case 3:
          _instance.maxLen = _reader.readUint64String();
          break;
        case 20:
          _instance.lenBytes = _reader.readUint64String();
          break;
        case 4:
          _instance.minBytes = _reader.readUint64String();
          break;
        case 5:
          _instance.maxBytes = _reader.readUint64String();
          break;
        case 6:
          _instance.pattern = _reader.readString();
          break;
        case 7:
          _instance.prefix = _reader.readString();
          break;
        case 8:
          _instance.suffix = _reader.readString();
          break;
        case 9:
          _instance.contains = _reader.readString();
          break;
        case 10:
          (_instance.in = _instance.in || []).push(_reader.readString());
          break;
        case 11:
          (_instance.notIn = _instance.notIn || []).push(_reader.readString());
          break;
        case 12:
          _instance.email = _reader.readBool();
          break;
        case 13:
          _instance.hostname = _reader.readBool();
          break;
        case 14:
          _instance.ip = _reader.readBool();
          break;
        case 15:
          _instance.ipv4 = _reader.readBool();
          break;
        case 16:
          _instance.ipv6 = _reader.readBool();
          break;
        case 17:
          _instance.uri = _reader.readBool();
          break;
        case 18:
          _instance.uriRef = _reader.readBool();
          break;
        case 21:
          _instance.address = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StringRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StringRules,
    _writer: BinaryWriter
  ) {
    if (_instance.pbConst) {
      _writer.writeString(1, _instance.pbConst);
    }
    if (_instance.len) {
      _writer.writeUint64String(19, _instance.len);
    }
    if (_instance.minLen) {
      _writer.writeUint64String(2, _instance.minLen);
    }
    if (_instance.maxLen) {
      _writer.writeUint64String(3, _instance.maxLen);
    }
    if (_instance.lenBytes) {
      _writer.writeUint64String(20, _instance.lenBytes);
    }
    if (_instance.minBytes) {
      _writer.writeUint64String(4, _instance.minBytes);
    }
    if (_instance.maxBytes) {
      _writer.writeUint64String(5, _instance.maxBytes);
    }
    if (_instance.pattern) {
      _writer.writeString(6, _instance.pattern);
    }
    if (_instance.prefix) {
      _writer.writeString(7, _instance.prefix);
    }
    if (_instance.suffix) {
      _writer.writeString(8, _instance.suffix);
    }
    if (_instance.contains) {
      _writer.writeString(9, _instance.contains);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedString(10, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedString(11, _instance.notIn);
    }
    if (_instance.email || _instance.email === false) {
      _writer.writeBool(12, _instance.email);
    }
    if (_instance.hostname || _instance.hostname === false) {
      _writer.writeBool(13, _instance.hostname);
    }
    if (_instance.ip || _instance.ip === false) {
      _writer.writeBool(14, _instance.ip);
    }
    if (_instance.ipv4 || _instance.ipv4 === false) {
      _writer.writeBool(15, _instance.ipv4);
    }
    if (_instance.ipv6 || _instance.ipv6 === false) {
      _writer.writeBool(16, _instance.ipv6);
    }
    if (_instance.uri || _instance.uri === false) {
      _writer.writeBool(17, _instance.uri);
    }
    if (_instance.uriRef || _instance.uriRef === false) {
      _writer.writeBool(18, _instance.uriRef);
    }
    if (_instance.address || _instance.address === false) {
      _writer.writeBool(21, _instance.address);
    }
  }

  private _pbConst?: string;
  private _len?: string;
  private _minLen?: string;
  private _maxLen?: string;
  private _lenBytes?: string;
  private _minBytes?: string;
  private _maxBytes?: string;
  private _pattern?: string;
  private _prefix?: string;
  private _suffix?: string;
  private _contains?: string;
  private _in?: string[];
  private _notIn?: string[];
  private _email?: boolean;
  private _hostname?: boolean;
  private _ip?: boolean;
  private _ipv4?: boolean;
  private _ipv6?: boolean;
  private _uri?: boolean;
  private _uriRef?: boolean;
  private _address?: boolean;

  private _wellKnown: StringRules.WellKnownCase =
    StringRules.WellKnownCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StringRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<StringRules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.len = _value.len;
    this.minLen = _value.minLen;
    this.maxLen = _value.maxLen;
    this.lenBytes = _value.lenBytes;
    this.minBytes = _value.minBytes;
    this.maxBytes = _value.maxBytes;
    this.pattern = _value.pattern;
    this.prefix = _value.prefix;
    this.suffix = _value.suffix;
    this.contains = _value.contains;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    this.email = _value.email;
    this.hostname = _value.hostname;
    this.ip = _value.ip;
    this.ipv4 = _value.ipv4;
    this.ipv6 = _value.ipv6;
    this.uri = _value.uri;
    this.uriRef = _value.uriRef;
    this.address = _value.address;
    StringRules.refineValues(this);
  }
  get pbConst(): string | undefined {
    return this._pbConst;
  }
  set pbConst(value: string | undefined) {
    this._pbConst = value;
  }
  get len(): string | undefined {
    return this._len;
  }
  set len(value: string | undefined) {
    this._len = value;
  }
  get minLen(): string | undefined {
    return this._minLen;
  }
  set minLen(value: string | undefined) {
    this._minLen = value;
  }
  get maxLen(): string | undefined {
    return this._maxLen;
  }
  set maxLen(value: string | undefined) {
    this._maxLen = value;
  }
  get lenBytes(): string | undefined {
    return this._lenBytes;
  }
  set lenBytes(value: string | undefined) {
    this._lenBytes = value;
  }
  get minBytes(): string | undefined {
    return this._minBytes;
  }
  set minBytes(value: string | undefined) {
    this._minBytes = value;
  }
  get maxBytes(): string | undefined {
    return this._maxBytes;
  }
  set maxBytes(value: string | undefined) {
    this._maxBytes = value;
  }
  get pattern(): string | undefined {
    return this._pattern;
  }
  set pattern(value: string | undefined) {
    this._pattern = value;
  }
  get prefix(): string | undefined {
    return this._prefix;
  }
  set prefix(value: string | undefined) {
    this._prefix = value;
  }
  get suffix(): string | undefined {
    return this._suffix;
  }
  set suffix(value: string | undefined) {
    this._suffix = value;
  }
  get contains(): string | undefined {
    return this._contains;
  }
  set contains(value: string | undefined) {
    this._contains = value;
  }
  get in(): string[] | undefined {
    return this._in;
  }
  set in(value: string[] | undefined) {
    this._in = value;
  }
  get notIn(): string[] | undefined {
    return this._notIn;
  }
  set notIn(value: string[] | undefined) {
    this._notIn = value;
  }
  get email(): boolean | undefined {
    return this._email;
  }
  set email(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._hostname = this._ip = this._ipv4 = this._ipv6 = this._uri = this._uriRef = this._address = undefined;
      this._wellKnown = StringRules.WellKnownCase.email;
    }
    this._email = value;
  }
  get hostname(): boolean | undefined {
    return this._hostname;
  }
  set hostname(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._email = this._ip = this._ipv4 = this._ipv6 = this._uri = this._uriRef = this._address = undefined;
      this._wellKnown = StringRules.WellKnownCase.hostname;
    }
    this._hostname = value;
  }
  get ip(): boolean | undefined {
    return this._ip;
  }
  set ip(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._email = this._hostname = this._ipv4 = this._ipv6 = this._uri = this._uriRef = this._address = undefined;
      this._wellKnown = StringRules.WellKnownCase.ip;
    }
    this._ip = value;
  }
  get ipv4(): boolean | undefined {
    return this._ipv4;
  }
  set ipv4(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._email = this._hostname = this._ip = this._ipv6 = this._uri = this._uriRef = this._address = undefined;
      this._wellKnown = StringRules.WellKnownCase.ipv4;
    }
    this._ipv4 = value;
  }
  get ipv6(): boolean | undefined {
    return this._ipv6;
  }
  set ipv6(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._email = this._hostname = this._ip = this._ipv4 = this._uri = this._uriRef = this._address = undefined;
      this._wellKnown = StringRules.WellKnownCase.ipv6;
    }
    this._ipv6 = value;
  }
  get uri(): boolean | undefined {
    return this._uri;
  }
  set uri(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._email = this._hostname = this._ip = this._ipv4 = this._ipv6 = this._uriRef = this._address = undefined;
      this._wellKnown = StringRules.WellKnownCase.uri;
    }
    this._uri = value;
  }
  get uriRef(): boolean | undefined {
    return this._uriRef;
  }
  set uriRef(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._email = this._hostname = this._ip = this._ipv4 = this._ipv6 = this._uri = this._address = undefined;
      this._wellKnown = StringRules.WellKnownCase.uriRef;
    }
    this._uriRef = value;
  }
  get address(): boolean | undefined {
    return this._address;
  }
  set address(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._email = this._hostname = this._ip = this._ipv4 = this._ipv6 = this._uri = this._uriRef = undefined;
      this._wellKnown = StringRules.WellKnownCase.address;
    }
    this._address = value;
  }
  get wellKnown() {
    return this._wellKnown;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StringRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StringRules.AsObject {
    return {
      pbConst: this.pbConst,
      len: this.len,
      minLen: this.minLen,
      maxLen: this.maxLen,
      lenBytes: this.lenBytes,
      minBytes: this.minBytes,
      maxBytes: this.maxBytes,
      pattern: this.pattern,
      prefix: this.prefix,
      suffix: this.suffix,
      contains: this.contains,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice(),
      email: this.email,
      hostname: this.hostname,
      ip: this.ip,
      ipv4: this.ipv4,
      ipv6: this.ipv6,
      uri: this.uri,
      uriRef: this.uriRef,
      address: this.address
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
export module StringRules {
  /**
   * Standard JavaScript object representation for StringRules
   */
  export interface AsObject {
    pbConst?: string;
    len?: string;
    minLen?: string;
    maxLen?: string;
    lenBytes?: string;
    minBytes?: string;
    maxBytes?: string;
    pattern?: string;
    prefix?: string;
    suffix?: string;
    contains?: string;
    in?: string[];
    notIn?: string[];
    email?: boolean;
    hostname?: boolean;
    ip?: boolean;
    ipv4?: boolean;
    ipv6?: boolean;
    uri?: boolean;
    uriRef?: boolean;
    address?: boolean;
  }
  export enum WellKnownCase {
    none = 0,
    email = 1,
    hostname = 2,
    ip = 3,
    ipv4 = 4,
    ipv6 = 5,
    uri = 6,
    uriRef = 7,
    address = 8
  }
}

/**
 * Message implementation for validate.BytesRules
 */
export class BytesRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BytesRules();
    BytesRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BytesRules) {
    _instance.pbConst = _instance.pbConst || new Uint8Array();
    _instance.len = _instance.len || '0';
    _instance.minLen = _instance.minLen || '0';
    _instance.maxLen = _instance.maxLen || '0';
    _instance.pattern = _instance.pattern || '';
    _instance.prefix = _instance.prefix || new Uint8Array();
    _instance.suffix = _instance.suffix || new Uint8Array();
    _instance.contains = _instance.contains || new Uint8Array();
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BytesRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readBytes();
          break;
        case 13:
          _instance.len = _reader.readUint64String();
          break;
        case 2:
          _instance.minLen = _reader.readUint64String();
          break;
        case 3:
          _instance.maxLen = _reader.readUint64String();
          break;
        case 4:
          _instance.pattern = _reader.readString();
          break;
        case 5:
          _instance.prefix = _reader.readBytes();
          break;
        case 6:
          _instance.suffix = _reader.readBytes();
          break;
        case 7:
          _instance.contains = _reader.readBytes();
          break;
        case 8:
          (_instance.in = _instance.in || []).push(_reader.readBytes());
          break;
        case 9:
          (_instance.notIn = _instance.notIn || []).push(_reader.readBytes());
          break;
        case 10:
          _instance.ip = _reader.readBool();
          break;
        case 11:
          _instance.ipv4 = _reader.readBool();
          break;
        case 12:
          _instance.ipv6 = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    BytesRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: BytesRules, _writer: BinaryWriter) {
    if (_instance.pbConst && _instance.pbConst.length) {
      _writer.writeBytes(1, _instance.pbConst);
    }
    if (_instance.len) {
      _writer.writeUint64String(13, _instance.len);
    }
    if (_instance.minLen) {
      _writer.writeUint64String(2, _instance.minLen);
    }
    if (_instance.maxLen) {
      _writer.writeUint64String(3, _instance.maxLen);
    }
    if (_instance.pattern) {
      _writer.writeString(4, _instance.pattern);
    }
    if (_instance.prefix && _instance.prefix.length) {
      _writer.writeBytes(5, _instance.prefix);
    }
    if (_instance.suffix && _instance.suffix.length) {
      _writer.writeBytes(6, _instance.suffix);
    }
    if (_instance.contains && _instance.contains.length) {
      _writer.writeBytes(7, _instance.contains);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedBytes(8, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedBytes(9, _instance.notIn);
    }
    if (_instance.ip || _instance.ip === false) {
      _writer.writeBool(10, _instance.ip);
    }
    if (_instance.ipv4 || _instance.ipv4 === false) {
      _writer.writeBool(11, _instance.ipv4);
    }
    if (_instance.ipv6 || _instance.ipv6 === false) {
      _writer.writeBool(12, _instance.ipv6);
    }
  }

  private _pbConst?: Uint8Array;
  private _len?: string;
  private _minLen?: string;
  private _maxLen?: string;
  private _pattern?: string;
  private _prefix?: Uint8Array;
  private _suffix?: Uint8Array;
  private _contains?: Uint8Array;
  private _in?: Uint8Array[];
  private _notIn?: Uint8Array[];
  private _ip?: boolean;
  private _ipv4?: boolean;
  private _ipv6?: boolean;

  private _wellKnown: BytesRules.WellKnownCase = BytesRules.WellKnownCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BytesRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<BytesRules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.len = _value.len;
    this.minLen = _value.minLen;
    this.maxLen = _value.maxLen;
    this.pattern = _value.pattern;
    this.prefix = _value.prefix;
    this.suffix = _value.suffix;
    this.contains = _value.contains;
    this.in = (_value.in || []).map(b =>
      b ? b.subarray(0) : new Uint8Array()
    );
    this.notIn = (_value.notIn || []).map(b =>
      b ? b.subarray(0) : new Uint8Array()
    );
    this.ip = _value.ip;
    this.ipv4 = _value.ipv4;
    this.ipv6 = _value.ipv6;
    BytesRules.refineValues(this);
  }
  get pbConst(): Uint8Array | undefined {
    return this._pbConst;
  }
  set pbConst(value: Uint8Array | undefined) {
    this._pbConst = value;
  }
  get len(): string | undefined {
    return this._len;
  }
  set len(value: string | undefined) {
    this._len = value;
  }
  get minLen(): string | undefined {
    return this._minLen;
  }
  set minLen(value: string | undefined) {
    this._minLen = value;
  }
  get maxLen(): string | undefined {
    return this._maxLen;
  }
  set maxLen(value: string | undefined) {
    this._maxLen = value;
  }
  get pattern(): string | undefined {
    return this._pattern;
  }
  set pattern(value: string | undefined) {
    this._pattern = value;
  }
  get prefix(): Uint8Array | undefined {
    return this._prefix;
  }
  set prefix(value: Uint8Array | undefined) {
    this._prefix = value;
  }
  get suffix(): Uint8Array | undefined {
    return this._suffix;
  }
  set suffix(value: Uint8Array | undefined) {
    this._suffix = value;
  }
  get contains(): Uint8Array | undefined {
    return this._contains;
  }
  set contains(value: Uint8Array | undefined) {
    this._contains = value;
  }
  get in(): Uint8Array[] | undefined {
    return this._in;
  }
  set in(value: Uint8Array[] | undefined) {
    this._in = value;
  }
  get notIn(): Uint8Array[] | undefined {
    return this._notIn;
  }
  set notIn(value: Uint8Array[] | undefined) {
    this._notIn = value;
  }
  get ip(): boolean | undefined {
    return this._ip;
  }
  set ip(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._ipv4 = this._ipv6 = undefined;
      this._wellKnown = BytesRules.WellKnownCase.ip;
    }
    this._ip = value;
  }
  get ipv4(): boolean | undefined {
    return this._ipv4;
  }
  set ipv4(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._ip = this._ipv6 = undefined;
      this._wellKnown = BytesRules.WellKnownCase.ipv4;
    }
    this._ipv4 = value;
  }
  get ipv6(): boolean | undefined {
    return this._ipv6;
  }
  set ipv6(value: boolean | undefined) {
    if (value !== undefined && value !== null) {
      this._ip = this._ipv4 = undefined;
      this._wellKnown = BytesRules.WellKnownCase.ipv6;
    }
    this._ipv6 = value;
  }
  get wellKnown() {
    return this._wellKnown;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BytesRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BytesRules.AsObject {
    return {
      pbConst: this.pbConst ? this.pbConst.subarray(0) : new Uint8Array(),
      len: this.len,
      minLen: this.minLen,
      maxLen: this.maxLen,
      pattern: this.pattern,
      prefix: this.prefix ? this.prefix.subarray(0) : new Uint8Array(),
      suffix: this.suffix ? this.suffix.subarray(0) : new Uint8Array(),
      contains: this.contains ? this.contains.subarray(0) : new Uint8Array(),
      in: (this.in || []).map(b => (b ? b.subarray(0) : new Uint8Array())),
      notIn: (this.notIn || []).map(b =>
        b ? b.subarray(0) : new Uint8Array()
      ),
      ip: this.ip,
      ipv4: this.ipv4,
      ipv6: this.ipv6
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
export module BytesRules {
  /**
   * Standard JavaScript object representation for BytesRules
   */
  export interface AsObject {
    pbConst?: Uint8Array;
    len?: string;
    minLen?: string;
    maxLen?: string;
    pattern?: string;
    prefix?: Uint8Array;
    suffix?: Uint8Array;
    contains?: Uint8Array;
    in?: Uint8Array[];
    notIn?: Uint8Array[];
    ip?: boolean;
    ipv4?: boolean;
    ipv6?: boolean;
  }
  export enum WellKnownCase {
    none = 0,
    ip = 1,
    ipv4 = 2,
    ipv6 = 3
  }
}

/**
 * Message implementation for validate.EnumRules
 */
export class EnumRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EnumRules();
    EnumRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EnumRules) {
    _instance.pbConst = _instance.pbConst || 0;
    _instance.definedOnly = _instance.definedOnly || false;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EnumRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pbConst = _reader.readInt32();
          break;
        case 2:
          _instance.definedOnly = _reader.readBool();
          break;
        case 3:
          (_instance.in = _instance.in || []).push(_reader.readInt32());
          break;
        case 4:
          (_instance.notIn = _instance.notIn || []).push(_reader.readInt32());
          break;
        default:
          _reader.skipField();
      }
    }

    EnumRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: EnumRules, _writer: BinaryWriter) {
    if (_instance.pbConst) {
      _writer.writeInt32(1, _instance.pbConst);
    }
    if (_instance.definedOnly) {
      _writer.writeBool(2, _instance.definedOnly);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedInt32(3, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedInt32(4, _instance.notIn);
    }
  }

  private _pbConst?: number;
  private _definedOnly?: boolean;
  private _in?: number[];
  private _notIn?: number[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EnumRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<EnumRules>) {
    _value = _value || {};
    this.pbConst = _value.pbConst;
    this.definedOnly = _value.definedOnly;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    EnumRules.refineValues(this);
  }
  get pbConst(): number | undefined {
    return this._pbConst;
  }
  set pbConst(value: number | undefined) {
    this._pbConst = value;
  }
  get definedOnly(): boolean | undefined {
    return this._definedOnly;
  }
  set definedOnly(value: boolean | undefined) {
    this._definedOnly = value;
  }
  get in(): number[] | undefined {
    return this._in;
  }
  set in(value: number[] | undefined) {
    this._in = value;
  }
  get notIn(): number[] | undefined {
    return this._notIn;
  }
  set notIn(value: number[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EnumRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EnumRules.AsObject {
    return {
      pbConst: this.pbConst,
      definedOnly: this.definedOnly,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module EnumRules {
  /**
   * Standard JavaScript object representation for EnumRules
   */
  export interface AsObject {
    pbConst?: number;
    definedOnly?: boolean;
    in?: number[];
    notIn?: number[];
  }
}

/**
 * Message implementation for validate.MessageRules
 */
export class MessageRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MessageRules();
    MessageRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MessageRules) {
    _instance.skip = _instance.skip || false;
    _instance.required = _instance.required || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MessageRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.skip = _reader.readBool();
          break;
        case 2:
          _instance.required = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    MessageRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MessageRules,
    _writer: BinaryWriter
  ) {
    if (_instance.skip) {
      _writer.writeBool(1, _instance.skip);
    }
    if (_instance.required) {
      _writer.writeBool(2, _instance.required);
    }
  }

  private _skip?: boolean;
  private _required?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MessageRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<MessageRules>) {
    _value = _value || {};
    this.skip = _value.skip;
    this.required = _value.required;
    MessageRules.refineValues(this);
  }
  get skip(): boolean | undefined {
    return this._skip;
  }
  set skip(value: boolean | undefined) {
    this._skip = value;
  }
  get required(): boolean | undefined {
    return this._required;
  }
  set required(value: boolean | undefined) {
    this._required = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MessageRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MessageRules.AsObject {
    return {
      skip: this.skip,
      required: this.required
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
export module MessageRules {
  /**
   * Standard JavaScript object representation for MessageRules
   */
  export interface AsObject {
    skip?: boolean;
    required?: boolean;
  }
}

/**
 * Message implementation for validate.RepeatedRules
 */
export class RepeatedRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RepeatedRules();
    RepeatedRules.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RepeatedRules) {
    _instance.minItems = _instance.minItems || '0';
    _instance.maxItems = _instance.maxItems || '0';
    _instance.unique = _instance.unique || false;
    _instance.items = _instance.items || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RepeatedRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.minItems = _reader.readUint64String();
          break;
        case 2:
          _instance.maxItems = _reader.readUint64String();
          break;
        case 3:
          _instance.unique = _reader.readBool();
          break;
        case 4:
          _instance.items = new FieldRules();
          _reader.readMessage(
            _instance.items,
            FieldRules.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RepeatedRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RepeatedRules,
    _writer: BinaryWriter
  ) {
    if (_instance.minItems) {
      _writer.writeUint64String(1, _instance.minItems);
    }
    if (_instance.maxItems) {
      _writer.writeUint64String(2, _instance.maxItems);
    }
    if (_instance.unique) {
      _writer.writeBool(3, _instance.unique);
    }
    if (_instance.items) {
      _writer.writeMessage(
        4,
        _instance.items as any,
        FieldRules.serializeBinaryToWriter
      );
    }
  }

  private _minItems?: string;
  private _maxItems?: string;
  private _unique?: boolean;
  private _items?: FieldRules;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RepeatedRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<RepeatedRules>) {
    _value = _value || {};
    this.minItems = _value.minItems;
    this.maxItems = _value.maxItems;
    this.unique = _value.unique;
    this.items = _value.items ? new FieldRules(_value.items) : undefined;
    RepeatedRules.refineValues(this);
  }
  get minItems(): string | undefined {
    return this._minItems;
  }
  set minItems(value: string | undefined) {
    this._minItems = value;
  }
  get maxItems(): string | undefined {
    return this._maxItems;
  }
  set maxItems(value: string | undefined) {
    this._maxItems = value;
  }
  get unique(): boolean | undefined {
    return this._unique;
  }
  set unique(value: boolean | undefined) {
    this._unique = value;
  }
  get items(): FieldRules | undefined {
    return this._items;
  }
  set items(value: FieldRules | undefined) {
    this._items = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RepeatedRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RepeatedRules.AsObject {
    return {
      minItems: this.minItems,
      maxItems: this.maxItems,
      unique: this.unique,
      items: this.items ? this.items.toObject() : undefined
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
export module RepeatedRules {
  /**
   * Standard JavaScript object representation for RepeatedRules
   */
  export interface AsObject {
    minItems?: string;
    maxItems?: string;
    unique?: boolean;
    items?: FieldRules.AsObject;
  }
}

/**
 * Message implementation for validate.MapRules
 */
export class MapRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MapRules();
    MapRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MapRules) {
    _instance.minPairs = _instance.minPairs || '0';
    _instance.maxPairs = _instance.maxPairs || '0';
    _instance.noSparse = _instance.noSparse || false;
    _instance.keys = _instance.keys || undefined;
    _instance.values = _instance.values || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MapRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.minPairs = _reader.readUint64String();
          break;
        case 2:
          _instance.maxPairs = _reader.readUint64String();
          break;
        case 3:
          _instance.noSparse = _reader.readBool();
          break;
        case 4:
          _instance.keys = new FieldRules();
          _reader.readMessage(
            _instance.keys,
            FieldRules.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.values = new FieldRules();
          _reader.readMessage(
            _instance.values,
            FieldRules.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    MapRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: MapRules, _writer: BinaryWriter) {
    if (_instance.minPairs) {
      _writer.writeUint64String(1, _instance.minPairs);
    }
    if (_instance.maxPairs) {
      _writer.writeUint64String(2, _instance.maxPairs);
    }
    if (_instance.noSparse) {
      _writer.writeBool(3, _instance.noSparse);
    }
    if (_instance.keys) {
      _writer.writeMessage(
        4,
        _instance.keys as any,
        FieldRules.serializeBinaryToWriter
      );
    }
    if (_instance.values) {
      _writer.writeMessage(
        5,
        _instance.values as any,
        FieldRules.serializeBinaryToWriter
      );
    }
  }

  private _minPairs?: string;
  private _maxPairs?: string;
  private _noSparse?: boolean;
  private _keys?: FieldRules;
  private _values?: FieldRules;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MapRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<MapRules>) {
    _value = _value || {};
    this.minPairs = _value.minPairs;
    this.maxPairs = _value.maxPairs;
    this.noSparse = _value.noSparse;
    this.keys = _value.keys ? new FieldRules(_value.keys) : undefined;
    this.values = _value.values ? new FieldRules(_value.values) : undefined;
    MapRules.refineValues(this);
  }
  get minPairs(): string | undefined {
    return this._minPairs;
  }
  set minPairs(value: string | undefined) {
    this._minPairs = value;
  }
  get maxPairs(): string | undefined {
    return this._maxPairs;
  }
  set maxPairs(value: string | undefined) {
    this._maxPairs = value;
  }
  get noSparse(): boolean | undefined {
    return this._noSparse;
  }
  set noSparse(value: boolean | undefined) {
    this._noSparse = value;
  }
  get keys(): FieldRules | undefined {
    return this._keys;
  }
  set keys(value: FieldRules | undefined) {
    this._keys = value;
  }
  get values(): FieldRules | undefined {
    return this._values;
  }
  set values(value: FieldRules | undefined) {
    this._values = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MapRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MapRules.AsObject {
    return {
      minPairs: this.minPairs,
      maxPairs: this.maxPairs,
      noSparse: this.noSparse,
      keys: this.keys ? this.keys.toObject() : undefined,
      values: this.values ? this.values.toObject() : undefined
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
export module MapRules {
  /**
   * Standard JavaScript object representation for MapRules
   */
  export interface AsObject {
    minPairs?: string;
    maxPairs?: string;
    noSparse?: boolean;
    keys?: FieldRules.AsObject;
    values?: FieldRules.AsObject;
  }
}

/**
 * Message implementation for validate.AnyRules
 */
export class AnyRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnyRules();
    AnyRules.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnyRules) {
    _instance.required = _instance.required || false;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnyRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.required = _reader.readBool();
          break;
        case 2:
          (_instance.in = _instance.in || []).push(_reader.readString());
          break;
        case 3:
          (_instance.notIn = _instance.notIn || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    AnyRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: AnyRules, _writer: BinaryWriter) {
    if (_instance.required) {
      _writer.writeBool(1, _instance.required);
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedString(2, _instance.in);
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedString(3, _instance.notIn);
    }
  }

  private _required?: boolean;
  private _in?: string[];
  private _notIn?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AnyRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<AnyRules>) {
    _value = _value || {};
    this.required = _value.required;
    this.in = (_value.in || []).slice();
    this.notIn = (_value.notIn || []).slice();
    AnyRules.refineValues(this);
  }
  get required(): boolean | undefined {
    return this._required;
  }
  set required(value: boolean | undefined) {
    this._required = value;
  }
  get in(): string[] | undefined {
    return this._in;
  }
  set in(value: string[] | undefined) {
    this._in = value;
  }
  get notIn(): string[] | undefined {
    return this._notIn;
  }
  set notIn(value: string[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AnyRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnyRules.AsObject {
    return {
      required: this.required,
      in: (this.in || []).slice(),
      notIn: (this.notIn || []).slice()
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
export module AnyRules {
  /**
   * Standard JavaScript object representation for AnyRules
   */
  export interface AsObject {
    required?: boolean;
    in?: string[];
    notIn?: string[];
  }
}

/**
 * Message implementation for validate.DurationRules
 */
export class DurationRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DurationRules();
    DurationRules.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DurationRules) {
    _instance.required = _instance.required || false;
    _instance.pbConst = _instance.pbConst || undefined;
    _instance.lt = _instance.lt || undefined;
    _instance.lte = _instance.lte || undefined;
    _instance.gt = _instance.gt || undefined;
    _instance.gte = _instance.gte || undefined;
    _instance.in = _instance.in || [];
    _instance.notIn = _instance.notIn || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DurationRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.required = _reader.readBool();
          break;
        case 2:
          _instance.pbConst = new googleProtobuf001.Duration();
          _reader.readMessage(
            _instance.pbConst,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.lt = new googleProtobuf001.Duration();
          _reader.readMessage(
            _instance.lt,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.lte = new googleProtobuf001.Duration();
          _reader.readMessage(
            _instance.lte,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.gt = new googleProtobuf001.Duration();
          _reader.readMessage(
            _instance.gt,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.gte = new googleProtobuf001.Duration();
          _reader.readMessage(
            _instance.gte,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          break;
        case 7:
          const messageInitializer7 = new googleProtobuf001.Duration();
          _reader.readMessage(
            messageInitializer7,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          (_instance.in = _instance.in || []).push(messageInitializer7);
          break;
        case 8:
          const messageInitializer8 = new googleProtobuf001.Duration();
          _reader.readMessage(
            messageInitializer8,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          (_instance.notIn = _instance.notIn || []).push(messageInitializer8);
          break;
        default:
          _reader.skipField();
      }
    }

    DurationRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DurationRules,
    _writer: BinaryWriter
  ) {
    if (_instance.required) {
      _writer.writeBool(1, _instance.required);
    }
    if (_instance.pbConst) {
      _writer.writeMessage(
        2,
        _instance.pbConst as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.lt) {
      _writer.writeMessage(
        3,
        _instance.lt as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.lte) {
      _writer.writeMessage(
        4,
        _instance.lte as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.gt) {
      _writer.writeMessage(
        5,
        _instance.gt as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.gte) {
      _writer.writeMessage(
        6,
        _instance.gte as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.in && _instance.in.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.in as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.notIn && _instance.notIn.length) {
      _writer.writeRepeatedMessage(
        8,
        _instance.notIn as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
  }

  private _required?: boolean;
  private _pbConst?: googleProtobuf001.Duration;
  private _lt?: googleProtobuf001.Duration;
  private _lte?: googleProtobuf001.Duration;
  private _gt?: googleProtobuf001.Duration;
  private _gte?: googleProtobuf001.Duration;
  private _in?: googleProtobuf001.Duration[];
  private _notIn?: googleProtobuf001.Duration[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DurationRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<DurationRules>) {
    _value = _value || {};
    this.required = _value.required;
    this.pbConst = _value.pbConst
      ? new googleProtobuf001.Duration(_value.pbConst)
      : undefined;
    this.lt = _value.lt ? new googleProtobuf001.Duration(_value.lt) : undefined;
    this.lte = _value.lte
      ? new googleProtobuf001.Duration(_value.lte)
      : undefined;
    this.gt = _value.gt ? new googleProtobuf001.Duration(_value.gt) : undefined;
    this.gte = _value.gte
      ? new googleProtobuf001.Duration(_value.gte)
      : undefined;
    this.in = (_value.in || []).map(m => new googleProtobuf001.Duration(m));
    this.notIn = (_value.notIn || []).map(
      m => new googleProtobuf001.Duration(m)
    );
    DurationRules.refineValues(this);
  }
  get required(): boolean | undefined {
    return this._required;
  }
  set required(value: boolean | undefined) {
    this._required = value;
  }
  get pbConst(): googleProtobuf001.Duration | undefined {
    return this._pbConst;
  }
  set pbConst(value: googleProtobuf001.Duration | undefined) {
    this._pbConst = value;
  }
  get lt(): googleProtobuf001.Duration | undefined {
    return this._lt;
  }
  set lt(value: googleProtobuf001.Duration | undefined) {
    this._lt = value;
  }
  get lte(): googleProtobuf001.Duration | undefined {
    return this._lte;
  }
  set lte(value: googleProtobuf001.Duration | undefined) {
    this._lte = value;
  }
  get gt(): googleProtobuf001.Duration | undefined {
    return this._gt;
  }
  set gt(value: googleProtobuf001.Duration | undefined) {
    this._gt = value;
  }
  get gte(): googleProtobuf001.Duration | undefined {
    return this._gte;
  }
  set gte(value: googleProtobuf001.Duration | undefined) {
    this._gte = value;
  }
  get in(): googleProtobuf001.Duration[] | undefined {
    return this._in;
  }
  set in(value: googleProtobuf001.Duration[] | undefined) {
    this._in = value;
  }
  get notIn(): googleProtobuf001.Duration[] | undefined {
    return this._notIn;
  }
  set notIn(value: googleProtobuf001.Duration[] | undefined) {
    this._notIn = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DurationRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DurationRules.AsObject {
    return {
      required: this.required,
      pbConst: this.pbConst ? this.pbConst.toObject() : undefined,
      lt: this.lt ? this.lt.toObject() : undefined,
      lte: this.lte ? this.lte.toObject() : undefined,
      gt: this.gt ? this.gt.toObject() : undefined,
      gte: this.gte ? this.gte.toObject() : undefined,
      in: (this.in || []).map(m => m.toObject()),
      notIn: (this.notIn || []).map(m => m.toObject())
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
export module DurationRules {
  /**
   * Standard JavaScript object representation for DurationRules
   */
  export interface AsObject {
    required?: boolean;
    pbConst?: googleProtobuf001.Duration.AsObject;
    lt?: googleProtobuf001.Duration.AsObject;
    lte?: googleProtobuf001.Duration.AsObject;
    gt?: googleProtobuf001.Duration.AsObject;
    gte?: googleProtobuf001.Duration.AsObject;
    in?: googleProtobuf001.Duration.AsObject[];
    notIn?: googleProtobuf001.Duration.AsObject[];
  }
}

/**
 * Message implementation for validate.TimestampRules
 */
export class TimestampRules implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new TimestampRules();
    TimestampRules.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: TimestampRules) {
    _instance.required = _instance.required || false;
    _instance.pbConst = _instance.pbConst || undefined;
    _instance.lt = _instance.lt || undefined;
    _instance.lte = _instance.lte || undefined;
    _instance.gt = _instance.gt || undefined;
    _instance.gte = _instance.gte || undefined;
    _instance.ltNow = _instance.ltNow || false;
    _instance.gtNow = _instance.gtNow || false;
    _instance.within = _instance.within || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: TimestampRules,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.required = _reader.readBool();
          break;
        case 2:
          _instance.pbConst = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.pbConst,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.lt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.lt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.lte = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.lte,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.gt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.gt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.gte = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.gte,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.ltNow = _reader.readBool();
          break;
        case 8:
          _instance.gtNow = _reader.readBool();
          break;
        case 9:
          _instance.within = new googleProtobuf001.Duration();
          _reader.readMessage(
            _instance.within,
            googleProtobuf001.Duration.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    TimestampRules.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: TimestampRules,
    _writer: BinaryWriter
  ) {
    if (_instance.required) {
      _writer.writeBool(1, _instance.required);
    }
    if (_instance.pbConst) {
      _writer.writeMessage(
        2,
        _instance.pbConst as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.lt) {
      _writer.writeMessage(
        3,
        _instance.lt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.lte) {
      _writer.writeMessage(
        4,
        _instance.lte as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.gt) {
      _writer.writeMessage(
        5,
        _instance.gt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.gte) {
      _writer.writeMessage(
        6,
        _instance.gte as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.ltNow) {
      _writer.writeBool(7, _instance.ltNow);
    }
    if (_instance.gtNow) {
      _writer.writeBool(8, _instance.gtNow);
    }
    if (_instance.within) {
      _writer.writeMessage(
        9,
        _instance.within as any,
        googleProtobuf001.Duration.serializeBinaryToWriter
      );
    }
  }

  private _required?: boolean;
  private _pbConst?: googleProtobuf002.Timestamp;
  private _lt?: googleProtobuf002.Timestamp;
  private _lte?: googleProtobuf002.Timestamp;
  private _gt?: googleProtobuf002.Timestamp;
  private _gte?: googleProtobuf002.Timestamp;
  private _ltNow?: boolean;
  private _gtNow?: boolean;
  private _within?: googleProtobuf001.Duration;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of TimestampRules to deeply clone from
   */
  constructor(_value?: RecursivePartial<TimestampRules>) {
    _value = _value || {};
    this.required = _value.required;
    this.pbConst = _value.pbConst
      ? new googleProtobuf002.Timestamp(_value.pbConst)
      : undefined;
    this.lt = _value.lt
      ? new googleProtobuf002.Timestamp(_value.lt)
      : undefined;
    this.lte = _value.lte
      ? new googleProtobuf002.Timestamp(_value.lte)
      : undefined;
    this.gt = _value.gt
      ? new googleProtobuf002.Timestamp(_value.gt)
      : undefined;
    this.gte = _value.gte
      ? new googleProtobuf002.Timestamp(_value.gte)
      : undefined;
    this.ltNow = _value.ltNow;
    this.gtNow = _value.gtNow;
    this.within = _value.within
      ? new googleProtobuf001.Duration(_value.within)
      : undefined;
    TimestampRules.refineValues(this);
  }
  get required(): boolean | undefined {
    return this._required;
  }
  set required(value: boolean | undefined) {
    this._required = value;
  }
  get pbConst(): googleProtobuf002.Timestamp | undefined {
    return this._pbConst;
  }
  set pbConst(value: googleProtobuf002.Timestamp | undefined) {
    this._pbConst = value;
  }
  get lt(): googleProtobuf002.Timestamp | undefined {
    return this._lt;
  }
  set lt(value: googleProtobuf002.Timestamp | undefined) {
    this._lt = value;
  }
  get lte(): googleProtobuf002.Timestamp | undefined {
    return this._lte;
  }
  set lte(value: googleProtobuf002.Timestamp | undefined) {
    this._lte = value;
  }
  get gt(): googleProtobuf002.Timestamp | undefined {
    return this._gt;
  }
  set gt(value: googleProtobuf002.Timestamp | undefined) {
    this._gt = value;
  }
  get gte(): googleProtobuf002.Timestamp | undefined {
    return this._gte;
  }
  set gte(value: googleProtobuf002.Timestamp | undefined) {
    this._gte = value;
  }
  get ltNow(): boolean | undefined {
    return this._ltNow;
  }
  set ltNow(value: boolean | undefined) {
    this._ltNow = value;
  }
  get gtNow(): boolean | undefined {
    return this._gtNow;
  }
  set gtNow(value: boolean | undefined) {
    this._gtNow = value;
  }
  get within(): googleProtobuf001.Duration | undefined {
    return this._within;
  }
  set within(value: googleProtobuf001.Duration | undefined) {
    this._within = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    TimestampRules.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): TimestampRules.AsObject {
    return {
      required: this.required,
      pbConst: this.pbConst ? this.pbConst.toObject() : undefined,
      lt: this.lt ? this.lt.toObject() : undefined,
      lte: this.lte ? this.lte.toObject() : undefined,
      gt: this.gt ? this.gt.toObject() : undefined,
      gte: this.gte ? this.gte.toObject() : undefined,
      ltNow: this.ltNow,
      gtNow: this.gtNow,
      within: this.within ? this.within.toObject() : undefined
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
export module TimestampRules {
  /**
   * Standard JavaScript object representation for TimestampRules
   */
  export interface AsObject {
    required?: boolean;
    pbConst?: googleProtobuf002.Timestamp.AsObject;
    lt?: googleProtobuf002.Timestamp.AsObject;
    lte?: googleProtobuf002.Timestamp.AsObject;
    gt?: googleProtobuf002.Timestamp.AsObject;
    gte?: googleProtobuf002.Timestamp.AsObject;
    ltNow?: boolean;
    gtNow?: boolean;
    within?: googleProtobuf001.Duration.AsObject;
  }
}
