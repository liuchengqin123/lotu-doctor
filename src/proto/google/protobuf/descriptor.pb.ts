/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for google.protobuf.FileDescriptorSet
 */
export class FileDescriptorSet implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FileDescriptorSet();
    FileDescriptorSet.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FileDescriptorSet) {
    _instance.file = _instance.file || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FileDescriptorSet,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new FileDescriptorProto();
          _reader.readMessage(
            messageInitializer1,
            FileDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.file = _instance.file || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    FileDescriptorSet.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FileDescriptorSet,
    _writer: BinaryWriter
  ) {
    if (_instance.file && _instance.file.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.file as any,
        FileDescriptorProto.serializeBinaryToWriter
      );
    }
  }

  private _file?: FileDescriptorProto[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FileDescriptorSet to deeply clone from
   */
  constructor(_value?: RecursivePartial<FileDescriptorSet>) {
    _value = _value || {};
    this.file = (_value.file || []).map(m => new FileDescriptorProto(m));
    FileDescriptorSet.refineValues(this);
  }
  get file(): FileDescriptorProto[] | undefined {
    return this._file;
  }
  set file(value: FileDescriptorProto[] | undefined) {
    this._file = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FileDescriptorSet.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FileDescriptorSet.AsObject {
    return {
      file: (this.file || []).map(m => m.toObject())
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
export module FileDescriptorSet {
  /**
   * Standard JavaScript object representation for FileDescriptorSet
   */
  export interface AsObject {
    file?: FileDescriptorProto.AsObject[];
  }
}

/**
 * Message implementation for google.protobuf.FileDescriptorProto
 */
export class FileDescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FileDescriptorProto();
    FileDescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FileDescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.package = _instance.package || '';
    _instance.dependency = _instance.dependency || [];
    _instance.publicDependency = _instance.publicDependency || [];
    _instance.weakDependency = _instance.weakDependency || [];
    _instance.messageType = _instance.messageType || [];
    _instance.enumType = _instance.enumType || [];
    _instance.service = _instance.service || [];
    _instance.extension = _instance.extension || [];
    _instance.options = _instance.options || undefined;
    _instance.sourceCodeInfo = _instance.sourceCodeInfo || undefined;
    _instance.syntax = _instance.syntax || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FileDescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.package = _reader.readString();
          break;
        case 3:
          (_instance.dependency = _instance.dependency || []).push(
            _reader.readString()
          );
          break;
        case 10:
          (_instance.publicDependency = _instance.publicDependency || []).push(
            _reader.readInt32()
          );
          break;
        case 11:
          (_instance.weakDependency = _instance.weakDependency || []).push(
            _reader.readInt32()
          );
          break;
        case 4:
          const messageInitializer4 = new DescriptorProto();
          _reader.readMessage(
            messageInitializer4,
            DescriptorProto.deserializeBinaryFromReader
          );
          (_instance.messageType = _instance.messageType || []).push(
            messageInitializer4
          );
          break;
        case 5:
          const messageInitializer5 = new EnumDescriptorProto();
          _reader.readMessage(
            messageInitializer5,
            EnumDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.enumType = _instance.enumType || []).push(
            messageInitializer5
          );
          break;
        case 6:
          const messageInitializer6 = new ServiceDescriptorProto();
          _reader.readMessage(
            messageInitializer6,
            ServiceDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.service = _instance.service || []).push(
            messageInitializer6
          );
          break;
        case 7:
          const messageInitializer7 = new FieldDescriptorProto();
          _reader.readMessage(
            messageInitializer7,
            FieldDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.extension = _instance.extension || []).push(
            messageInitializer7
          );
          break;
        case 8:
          _instance.options = new FileOptions();
          _reader.readMessage(
            _instance.options,
            FileOptions.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.sourceCodeInfo = new SourceCodeInfo();
          _reader.readMessage(
            _instance.sourceCodeInfo,
            SourceCodeInfo.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.syntax = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FileDescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FileDescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.package) {
      _writer.writeString(2, _instance.package);
    }
    if (_instance.dependency && _instance.dependency.length) {
      _writer.writeRepeatedString(3, _instance.dependency);
    }
    if (_instance.publicDependency && _instance.publicDependency.length) {
      _writer.writeRepeatedInt32(10, _instance.publicDependency);
    }
    if (_instance.weakDependency && _instance.weakDependency.length) {
      _writer.writeRepeatedInt32(11, _instance.weakDependency);
    }
    if (_instance.messageType && _instance.messageType.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.messageType as any,
        DescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.enumType && _instance.enumType.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.enumType as any,
        EnumDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.service && _instance.service.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.service as any,
        ServiceDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.extension && _instance.extension.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.extension as any,
        FieldDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.options) {
      _writer.writeMessage(
        8,
        _instance.options as any,
        FileOptions.serializeBinaryToWriter
      );
    }
    if (_instance.sourceCodeInfo) {
      _writer.writeMessage(
        9,
        _instance.sourceCodeInfo as any,
        SourceCodeInfo.serializeBinaryToWriter
      );
    }
    if (_instance.syntax) {
      _writer.writeString(12, _instance.syntax);
    }
  }

  private _name?: string;
  private _package?: string;
  private _dependency?: string[];
  private _publicDependency?: number[];
  private _weakDependency?: number[];
  private _messageType?: DescriptorProto[];
  private _enumType?: EnumDescriptorProto[];
  private _service?: ServiceDescriptorProto[];
  private _extension?: FieldDescriptorProto[];
  private _options?: FileOptions;
  private _sourceCodeInfo?: SourceCodeInfo;
  private _syntax?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FileDescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<FileDescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.package = _value.package;
    this.dependency = (_value.dependency || []).slice();
    this.publicDependency = (_value.publicDependency || []).slice();
    this.weakDependency = (_value.weakDependency || []).slice();
    this.messageType = (_value.messageType || []).map(
      m => new DescriptorProto(m)
    );
    this.enumType = (_value.enumType || []).map(
      m => new EnumDescriptorProto(m)
    );
    this.service = (_value.service || []).map(
      m => new ServiceDescriptorProto(m)
    );
    this.extension = (_value.extension || []).map(
      m => new FieldDescriptorProto(m)
    );
    this.options = _value.options ? new FileOptions(_value.options) : undefined;
    this.sourceCodeInfo = _value.sourceCodeInfo
      ? new SourceCodeInfo(_value.sourceCodeInfo)
      : undefined;
    this.syntax = _value.syntax;
    FileDescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get package(): string | undefined {
    return this._package;
  }
  set package(value: string | undefined) {
    this._package = value;
  }
  get dependency(): string[] | undefined {
    return this._dependency;
  }
  set dependency(value: string[] | undefined) {
    this._dependency = value;
  }
  get publicDependency(): number[] | undefined {
    return this._publicDependency;
  }
  set publicDependency(value: number[] | undefined) {
    this._publicDependency = value;
  }
  get weakDependency(): number[] | undefined {
    return this._weakDependency;
  }
  set weakDependency(value: number[] | undefined) {
    this._weakDependency = value;
  }
  get messageType(): DescriptorProto[] | undefined {
    return this._messageType;
  }
  set messageType(value: DescriptorProto[] | undefined) {
    this._messageType = value;
  }
  get enumType(): EnumDescriptorProto[] | undefined {
    return this._enumType;
  }
  set enumType(value: EnumDescriptorProto[] | undefined) {
    this._enumType = value;
  }
  get service(): ServiceDescriptorProto[] | undefined {
    return this._service;
  }
  set service(value: ServiceDescriptorProto[] | undefined) {
    this._service = value;
  }
  get extension(): FieldDescriptorProto[] | undefined {
    return this._extension;
  }
  set extension(value: FieldDescriptorProto[] | undefined) {
    this._extension = value;
  }
  get options(): FileOptions | undefined {
    return this._options;
  }
  set options(value: FileOptions | undefined) {
    this._options = value;
  }
  get sourceCodeInfo(): SourceCodeInfo | undefined {
    return this._sourceCodeInfo;
  }
  set sourceCodeInfo(value: SourceCodeInfo | undefined) {
    this._sourceCodeInfo = value;
  }
  get syntax(): string | undefined {
    return this._syntax;
  }
  set syntax(value: string | undefined) {
    this._syntax = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FileDescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FileDescriptorProto.AsObject {
    return {
      name: this.name,
      package: this.package,
      dependency: (this.dependency || []).slice(),
      publicDependency: (this.publicDependency || []).slice(),
      weakDependency: (this.weakDependency || []).slice(),
      messageType: (this.messageType || []).map(m => m.toObject()),
      enumType: (this.enumType || []).map(m => m.toObject()),
      service: (this.service || []).map(m => m.toObject()),
      extension: (this.extension || []).map(m => m.toObject()),
      options: this.options ? this.options.toObject() : undefined,
      sourceCodeInfo: this.sourceCodeInfo
        ? this.sourceCodeInfo.toObject()
        : undefined,
      syntax: this.syntax
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
export module FileDescriptorProto {
  /**
   * Standard JavaScript object representation for FileDescriptorProto
   */
  export interface AsObject {
    name?: string;
    package?: string;
    dependency?: string[];
    publicDependency?: number[];
    weakDependency?: number[];
    messageType?: DescriptorProto.AsObject[];
    enumType?: EnumDescriptorProto.AsObject[];
    service?: ServiceDescriptorProto.AsObject[];
    extension?: FieldDescriptorProto.AsObject[];
    options?: FileOptions.AsObject;
    sourceCodeInfo?: SourceCodeInfo.AsObject;
    syntax?: string;
  }
}

/**
 * Message implementation for google.protobuf.DescriptorProto
 */
export class DescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DescriptorProto();
    DescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.field = _instance.field || [];
    _instance.extension = _instance.extension || [];
    _instance.nestedType = _instance.nestedType || [];
    _instance.enumType = _instance.enumType || [];
    _instance.extensionRange = _instance.extensionRange || [];
    _instance.oneofDecl = _instance.oneofDecl || [];
    _instance.options = _instance.options || undefined;
    _instance.reservedRange = _instance.reservedRange || [];
    _instance.reservedName = _instance.reservedName || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new FieldDescriptorProto();
          _reader.readMessage(
            messageInitializer2,
            FieldDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.field = _instance.field || []).push(messageInitializer2);
          break;
        case 6:
          const messageInitializer6 = new FieldDescriptorProto();
          _reader.readMessage(
            messageInitializer6,
            FieldDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.extension = _instance.extension || []).push(
            messageInitializer6
          );
          break;
        case 3:
          const messageInitializer3 = new DescriptorProto();
          _reader.readMessage(
            messageInitializer3,
            DescriptorProto.deserializeBinaryFromReader
          );
          (_instance.nestedType = _instance.nestedType || []).push(
            messageInitializer3
          );
          break;
        case 4:
          const messageInitializer4 = new EnumDescriptorProto();
          _reader.readMessage(
            messageInitializer4,
            EnumDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.enumType = _instance.enumType || []).push(
            messageInitializer4
          );
          break;
        case 5:
          const messageInitializer5 = new DescriptorProto.ExtensionRange();
          _reader.readMessage(
            messageInitializer5,
            DescriptorProto.ExtensionRange.deserializeBinaryFromReader
          );
          (_instance.extensionRange = _instance.extensionRange || []).push(
            messageInitializer5
          );
          break;
        case 8:
          const messageInitializer8 = new OneofDescriptorProto();
          _reader.readMessage(
            messageInitializer8,
            OneofDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.oneofDecl = _instance.oneofDecl || []).push(
            messageInitializer8
          );
          break;
        case 7:
          _instance.options = new MessageOptions();
          _reader.readMessage(
            _instance.options,
            MessageOptions.deserializeBinaryFromReader
          );
          break;
        case 9:
          const messageInitializer9 = new DescriptorProto.ReservedRange();
          _reader.readMessage(
            messageInitializer9,
            DescriptorProto.ReservedRange.deserializeBinaryFromReader
          );
          (_instance.reservedRange = _instance.reservedRange || []).push(
            messageInitializer9
          );
          break;
        case 10:
          (_instance.reservedName = _instance.reservedName || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.field && _instance.field.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.field as any,
        FieldDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.extension && _instance.extension.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.extension as any,
        FieldDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.nestedType && _instance.nestedType.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.nestedType as any,
        DescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.enumType && _instance.enumType.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.enumType as any,
        EnumDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.extensionRange && _instance.extensionRange.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.extensionRange as any,
        DescriptorProto.ExtensionRange.serializeBinaryToWriter
      );
    }
    if (_instance.oneofDecl && _instance.oneofDecl.length) {
      _writer.writeRepeatedMessage(
        8,
        _instance.oneofDecl as any,
        OneofDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.options) {
      _writer.writeMessage(
        7,
        _instance.options as any,
        MessageOptions.serializeBinaryToWriter
      );
    }
    if (_instance.reservedRange && _instance.reservedRange.length) {
      _writer.writeRepeatedMessage(
        9,
        _instance.reservedRange as any,
        DescriptorProto.ReservedRange.serializeBinaryToWriter
      );
    }
    if (_instance.reservedName && _instance.reservedName.length) {
      _writer.writeRepeatedString(10, _instance.reservedName);
    }
  }

  private _name?: string;
  private _field?: FieldDescriptorProto[];
  private _extension?: FieldDescriptorProto[];
  private _nestedType?: DescriptorProto[];
  private _enumType?: EnumDescriptorProto[];
  private _extensionRange?: DescriptorProto.ExtensionRange[];
  private _oneofDecl?: OneofDescriptorProto[];
  private _options?: MessageOptions;
  private _reservedRange?: DescriptorProto.ReservedRange[];
  private _reservedName?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<DescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.field = (_value.field || []).map(m => new FieldDescriptorProto(m));
    this.extension = (_value.extension || []).map(
      m => new FieldDescriptorProto(m)
    );
    this.nestedType = (_value.nestedType || []).map(
      m => new DescriptorProto(m)
    );
    this.enumType = (_value.enumType || []).map(
      m => new EnumDescriptorProto(m)
    );
    this.extensionRange = (_value.extensionRange || []).map(
      m => new DescriptorProto.ExtensionRange(m)
    );
    this.oneofDecl = (_value.oneofDecl || []).map(
      m => new OneofDescriptorProto(m)
    );
    this.options = _value.options
      ? new MessageOptions(_value.options)
      : undefined;
    this.reservedRange = (_value.reservedRange || []).map(
      m => new DescriptorProto.ReservedRange(m)
    );
    this.reservedName = (_value.reservedName || []).slice();
    DescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get field(): FieldDescriptorProto[] | undefined {
    return this._field;
  }
  set field(value: FieldDescriptorProto[] | undefined) {
    this._field = value;
  }
  get extension(): FieldDescriptorProto[] | undefined {
    return this._extension;
  }
  set extension(value: FieldDescriptorProto[] | undefined) {
    this._extension = value;
  }
  get nestedType(): DescriptorProto[] | undefined {
    return this._nestedType;
  }
  set nestedType(value: DescriptorProto[] | undefined) {
    this._nestedType = value;
  }
  get enumType(): EnumDescriptorProto[] | undefined {
    return this._enumType;
  }
  set enumType(value: EnumDescriptorProto[] | undefined) {
    this._enumType = value;
  }
  get extensionRange(): DescriptorProto.ExtensionRange[] | undefined {
    return this._extensionRange;
  }
  set extensionRange(value: DescriptorProto.ExtensionRange[] | undefined) {
    this._extensionRange = value;
  }
  get oneofDecl(): OneofDescriptorProto[] | undefined {
    return this._oneofDecl;
  }
  set oneofDecl(value: OneofDescriptorProto[] | undefined) {
    this._oneofDecl = value;
  }
  get options(): MessageOptions | undefined {
    return this._options;
  }
  set options(value: MessageOptions | undefined) {
    this._options = value;
  }
  get reservedRange(): DescriptorProto.ReservedRange[] | undefined {
    return this._reservedRange;
  }
  set reservedRange(value: DescriptorProto.ReservedRange[] | undefined) {
    this._reservedRange = value;
  }
  get reservedName(): string[] | undefined {
    return this._reservedName;
  }
  set reservedName(value: string[] | undefined) {
    this._reservedName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DescriptorProto.AsObject {
    return {
      name: this.name,
      field: (this.field || []).map(m => m.toObject()),
      extension: (this.extension || []).map(m => m.toObject()),
      nestedType: (this.nestedType || []).map(m => m.toObject()),
      enumType: (this.enumType || []).map(m => m.toObject()),
      extensionRange: (this.extensionRange || []).map(m => m.toObject()),
      oneofDecl: (this.oneofDecl || []).map(m => m.toObject()),
      options: this.options ? this.options.toObject() : undefined,
      reservedRange: (this.reservedRange || []).map(m => m.toObject()),
      reservedName: (this.reservedName || []).slice()
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
export module DescriptorProto {
  /**
   * Standard JavaScript object representation for DescriptorProto
   */
  export interface AsObject {
    name?: string;
    field?: FieldDescriptorProto.AsObject[];
    extension?: FieldDescriptorProto.AsObject[];
    nestedType?: DescriptorProto.AsObject[];
    enumType?: EnumDescriptorProto.AsObject[];
    extensionRange?: DescriptorProto.ExtensionRange.AsObject[];
    oneofDecl?: OneofDescriptorProto.AsObject[];
    options?: MessageOptions.AsObject;
    reservedRange?: DescriptorProto.ReservedRange.AsObject[];
    reservedName?: string[];
  }

  /**
   * Message implementation for google.protobuf.ExtensionRange
   */
  export class ExtensionRange implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ExtensionRange();
      ExtensionRange.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExtensionRange) {
      _instance.start = _instance.start || 0;
      _instance.end = _instance.end || 0;
      _instance.options = _instance.options || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ExtensionRange,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.start = _reader.readInt32();
            break;
          case 2:
            _instance.end = _reader.readInt32();
            break;
          case 3:
            _instance.options = new ExtensionRangeOptions();
            _reader.readMessage(
              _instance.options,
              ExtensionRangeOptions.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      ExtensionRange.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ExtensionRange,
      _writer: BinaryWriter
    ) {
      if (_instance.start) {
        _writer.writeInt32(1, _instance.start);
      }
      if (_instance.end) {
        _writer.writeInt32(2, _instance.end);
      }
      if (_instance.options) {
        _writer.writeMessage(
          3,
          _instance.options as any,
          ExtensionRangeOptions.serializeBinaryToWriter
        );
      }
    }

    private _start?: number;
    private _end?: number;
    private _options?: ExtensionRangeOptions;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExtensionRange to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExtensionRange>) {
      _value = _value || {};
      this.start = _value.start;
      this.end = _value.end;
      this.options = _value.options
        ? new ExtensionRangeOptions(_value.options)
        : undefined;
      ExtensionRange.refineValues(this);
    }
    get start(): number | undefined {
      return this._start;
    }
    set start(value: number | undefined) {
      this._start = value;
    }
    get end(): number | undefined {
      return this._end;
    }
    set end(value: number | undefined) {
      this._end = value;
    }
    get options(): ExtensionRangeOptions | undefined {
      return this._options;
    }
    set options(value: ExtensionRangeOptions | undefined) {
      this._options = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ExtensionRange.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExtensionRange.AsObject {
      return {
        start: this.start,
        end: this.end,
        options: this.options ? this.options.toObject() : undefined
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
  export module ExtensionRange {
    /**
     * Standard JavaScript object representation for ExtensionRange
     */
    export interface AsObject {
      start?: number;
      end?: number;
      options?: ExtensionRangeOptions.AsObject;
    }
  }

  /**
   * Message implementation for google.protobuf.ReservedRange
   */
  export class ReservedRange implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ReservedRange();
      ReservedRange.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ReservedRange) {
      _instance.start = _instance.start || 0;
      _instance.end = _instance.end || 0;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ReservedRange,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.start = _reader.readInt32();
            break;
          case 2:
            _instance.end = _reader.readInt32();
            break;
          default:
            _reader.skipField();
        }
      }

      ReservedRange.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ReservedRange,
      _writer: BinaryWriter
    ) {
      if (_instance.start) {
        _writer.writeInt32(1, _instance.start);
      }
      if (_instance.end) {
        _writer.writeInt32(2, _instance.end);
      }
    }

    private _start?: number;
    private _end?: number;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ReservedRange to deeply clone from
     */
    constructor(_value?: RecursivePartial<ReservedRange>) {
      _value = _value || {};
      this.start = _value.start;
      this.end = _value.end;
      ReservedRange.refineValues(this);
    }
    get start(): number | undefined {
      return this._start;
    }
    set start(value: number | undefined) {
      this._start = value;
    }
    get end(): number | undefined {
      return this._end;
    }
    set end(value: number | undefined) {
      this._end = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ReservedRange.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ReservedRange.AsObject {
      return {
        start: this.start,
        end: this.end
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
  export module ReservedRange {
    /**
     * Standard JavaScript object representation for ReservedRange
     */
    export interface AsObject {
      start?: number;
      end?: number;
    }
  }
}

/**
 * Message implementation for google.protobuf.ExtensionRangeOptions
 */
export class ExtensionRangeOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ExtensionRangeOptions();
    ExtensionRangeOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ExtensionRangeOptions) {
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ExtensionRangeOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    ExtensionRangeOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ExtensionRangeOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ExtensionRangeOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<ExtensionRangeOptions>) {
    _value = _value || {};
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    ExtensionRangeOptions.refineValues(this);
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ExtensionRangeOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ExtensionRangeOptions.AsObject {
    return {
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module ExtensionRangeOptions {
  /**
   * Standard JavaScript object representation for ExtensionRangeOptions
   */
  export interface AsObject {
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
}

/**
 * Message implementation for google.protobuf.FieldDescriptorProto
 */
export class FieldDescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FieldDescriptorProto();
    FieldDescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FieldDescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.number = _instance.number || 0;
    _instance.label = _instance.label || 0;
    _instance.type = _instance.type || 0;
    _instance.typeName = _instance.typeName || '';
    _instance.extendee = _instance.extendee || '';
    _instance.defaultValue = _instance.defaultValue || '';
    _instance.oneofIndex = _instance.oneofIndex || 0;
    _instance.jsonName = _instance.jsonName || '';
    _instance.options = _instance.options || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FieldDescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.number = _reader.readInt32();
          break;
        case 4:
          _instance.label = _reader.readEnum();
          break;
        case 5:
          _instance.type = _reader.readEnum();
          break;
        case 6:
          _instance.typeName = _reader.readString();
          break;
        case 2:
          _instance.extendee = _reader.readString();
          break;
        case 7:
          _instance.defaultValue = _reader.readString();
          break;
        case 9:
          _instance.oneofIndex = _reader.readInt32();
          break;
        case 10:
          _instance.jsonName = _reader.readString();
          break;
        case 8:
          _instance.options = new FieldOptions();
          _reader.readMessage(
            _instance.options,
            FieldOptions.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    FieldDescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FieldDescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.number) {
      _writer.writeInt32(3, _instance.number);
    }
    if (_instance.label) {
      _writer.writeEnum(4, _instance.label);
    }
    if (_instance.type) {
      _writer.writeEnum(5, _instance.type);
    }
    if (_instance.typeName) {
      _writer.writeString(6, _instance.typeName);
    }
    if (_instance.extendee) {
      _writer.writeString(2, _instance.extendee);
    }
    if (_instance.defaultValue) {
      _writer.writeString(7, _instance.defaultValue);
    }
    if (_instance.oneofIndex) {
      _writer.writeInt32(9, _instance.oneofIndex);
    }
    if (_instance.jsonName) {
      _writer.writeString(10, _instance.jsonName);
    }
    if (_instance.options) {
      _writer.writeMessage(
        8,
        _instance.options as any,
        FieldOptions.serializeBinaryToWriter
      );
    }
  }

  private _name?: string;
  private _number?: number;
  private _label?: FieldDescriptorProto.Label;
  private _type?: FieldDescriptorProto.Type;
  private _typeName?: string;
  private _extendee?: string;
  private _defaultValue?: string;
  private _oneofIndex?: number;
  private _jsonName?: string;
  private _options?: FieldOptions;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FieldDescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<FieldDescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.number = _value.number;
    this.label = _value.label;
    this.type = _value.type;
    this.typeName = _value.typeName;
    this.extendee = _value.extendee;
    this.defaultValue = _value.defaultValue;
    this.oneofIndex = _value.oneofIndex;
    this.jsonName = _value.jsonName;
    this.options = _value.options
      ? new FieldOptions(_value.options)
      : undefined;
    FieldDescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get number(): number | undefined {
    return this._number;
  }
  set number(value: number | undefined) {
    this._number = value;
  }
  get label(): FieldDescriptorProto.Label | undefined {
    return this._label;
  }
  set label(value: FieldDescriptorProto.Label | undefined) {
    this._label = value;
  }
  get type(): FieldDescriptorProto.Type | undefined {
    return this._type;
  }
  set type(value: FieldDescriptorProto.Type | undefined) {
    this._type = value;
  }
  get typeName(): string | undefined {
    return this._typeName;
  }
  set typeName(value: string | undefined) {
    this._typeName = value;
  }
  get extendee(): string | undefined {
    return this._extendee;
  }
  set extendee(value: string | undefined) {
    this._extendee = value;
  }
  get defaultValue(): string | undefined {
    return this._defaultValue;
  }
  set defaultValue(value: string | undefined) {
    this._defaultValue = value;
  }
  get oneofIndex(): number | undefined {
    return this._oneofIndex;
  }
  set oneofIndex(value: number | undefined) {
    this._oneofIndex = value;
  }
  get jsonName(): string | undefined {
    return this._jsonName;
  }
  set jsonName(value: string | undefined) {
    this._jsonName = value;
  }
  get options(): FieldOptions | undefined {
    return this._options;
  }
  set options(value: FieldOptions | undefined) {
    this._options = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FieldDescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FieldDescriptorProto.AsObject {
    return {
      name: this.name,
      number: this.number,
      label: this.label,
      type: this.type,
      typeName: this.typeName,
      extendee: this.extendee,
      defaultValue: this.defaultValue,
      oneofIndex: this.oneofIndex,
      jsonName: this.jsonName,
      options: this.options ? this.options.toObject() : undefined
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
export module FieldDescriptorProto {
  /**
   * Standard JavaScript object representation for FieldDescriptorProto
   */
  export interface AsObject {
    name?: string;
    number?: number;
    label?: FieldDescriptorProto.Label;
    type?: FieldDescriptorProto.Type;
    typeName?: string;
    extendee?: string;
    defaultValue?: string;
    oneofIndex?: number;
    jsonName?: string;
    options?: FieldOptions.AsObject;
  }
  export enum Type {
    TYPE_DOUBLE = 1,
    TYPE_FLOAT = 2,
    TYPE_INT64 = 3,
    TYPE_UINT64 = 4,
    TYPE_INT32 = 5,
    TYPE_FIXED64 = 6,
    TYPE_FIXED32 = 7,
    TYPE_BOOL = 8,
    TYPE_STRING = 9,
    TYPE_GROUP = 10,
    TYPE_MESSAGE = 11,
    TYPE_BYTES = 12,
    TYPE_UINT32 = 13,
    TYPE_ENUM = 14,
    TYPE_SFIXED32 = 15,
    TYPE_SFIXED64 = 16,
    TYPE_SINT32 = 17,
    TYPE_SINT64 = 18
  }
  export enum Label {
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3
  }
}

/**
 * Message implementation for google.protobuf.OneofDescriptorProto
 */
export class OneofDescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OneofDescriptorProto();
    OneofDescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OneofDescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.options = _instance.options || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OneofDescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.options = new OneofOptions();
          _reader.readMessage(
            _instance.options,
            OneofOptions.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    OneofDescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OneofDescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.options) {
      _writer.writeMessage(
        2,
        _instance.options as any,
        OneofOptions.serializeBinaryToWriter
      );
    }
  }

  private _name?: string;
  private _options?: OneofOptions;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OneofDescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<OneofDescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.options = _value.options
      ? new OneofOptions(_value.options)
      : undefined;
    OneofDescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get options(): OneofOptions | undefined {
    return this._options;
  }
  set options(value: OneofOptions | undefined) {
    this._options = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OneofDescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OneofDescriptorProto.AsObject {
    return {
      name: this.name,
      options: this.options ? this.options.toObject() : undefined
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
export module OneofDescriptorProto {
  /**
   * Standard JavaScript object representation for OneofDescriptorProto
   */
  export interface AsObject {
    name?: string;
    options?: OneofOptions.AsObject;
  }
}

/**
 * Message implementation for google.protobuf.EnumDescriptorProto
 */
export class EnumDescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EnumDescriptorProto();
    EnumDescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EnumDescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.value = _instance.value || [];
    _instance.options = _instance.options || undefined;
    _instance.reservedRange = _instance.reservedRange || [];
    _instance.reservedName = _instance.reservedName || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EnumDescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new EnumValueDescriptorProto();
          _reader.readMessage(
            messageInitializer2,
            EnumValueDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.value = _instance.value || []).push(messageInitializer2);
          break;
        case 3:
          _instance.options = new EnumOptions();
          _reader.readMessage(
            _instance.options,
            EnumOptions.deserializeBinaryFromReader
          );
          break;
        case 4:
          const messageInitializer4 = new EnumDescriptorProto.EnumReservedRange();
          _reader.readMessage(
            messageInitializer4,
            EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader
          );
          (_instance.reservedRange = _instance.reservedRange || []).push(
            messageInitializer4
          );
          break;
        case 5:
          (_instance.reservedName = _instance.reservedName || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EnumDescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EnumDescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.value && _instance.value.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.value as any,
        EnumValueDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.options) {
      _writer.writeMessage(
        3,
        _instance.options as any,
        EnumOptions.serializeBinaryToWriter
      );
    }
    if (_instance.reservedRange && _instance.reservedRange.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.reservedRange as any,
        EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter
      );
    }
    if (_instance.reservedName && _instance.reservedName.length) {
      _writer.writeRepeatedString(5, _instance.reservedName);
    }
  }

  private _name?: string;
  private _value?: EnumValueDescriptorProto[];
  private _options?: EnumOptions;
  private _reservedRange?: EnumDescriptorProto.EnumReservedRange[];
  private _reservedName?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EnumDescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<EnumDescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.value = (_value.value || []).map(m => new EnumValueDescriptorProto(m));
    this.options = _value.options ? new EnumOptions(_value.options) : undefined;
    this.reservedRange = (_value.reservedRange || []).map(
      m => new EnumDescriptorProto.EnumReservedRange(m)
    );
    this.reservedName = (_value.reservedName || []).slice();
    EnumDescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get value(): EnumValueDescriptorProto[] | undefined {
    return this._value;
  }
  set value(value: EnumValueDescriptorProto[] | undefined) {
    this._value = value;
  }
  get options(): EnumOptions | undefined {
    return this._options;
  }
  set options(value: EnumOptions | undefined) {
    this._options = value;
  }
  get reservedRange(): EnumDescriptorProto.EnumReservedRange[] | undefined {
    return this._reservedRange;
  }
  set reservedRange(
    value: EnumDescriptorProto.EnumReservedRange[] | undefined
  ) {
    this._reservedRange = value;
  }
  get reservedName(): string[] | undefined {
    return this._reservedName;
  }
  set reservedName(value: string[] | undefined) {
    this._reservedName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EnumDescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EnumDescriptorProto.AsObject {
    return {
      name: this.name,
      value: (this.value || []).map(m => m.toObject()),
      options: this.options ? this.options.toObject() : undefined,
      reservedRange: (this.reservedRange || []).map(m => m.toObject()),
      reservedName: (this.reservedName || []).slice()
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
export module EnumDescriptorProto {
  /**
   * Standard JavaScript object representation for EnumDescriptorProto
   */
  export interface AsObject {
    name?: string;
    value?: EnumValueDescriptorProto.AsObject[];
    options?: EnumOptions.AsObject;
    reservedRange?: EnumDescriptorProto.EnumReservedRange.AsObject[];
    reservedName?: string[];
  }

  /**
   * Message implementation for google.protobuf.EnumReservedRange
   */
  export class EnumReservedRange implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new EnumReservedRange();
      EnumReservedRange.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EnumReservedRange) {
      _instance.start = _instance.start || 0;
      _instance.end = _instance.end || 0;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: EnumReservedRange,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.start = _reader.readInt32();
            break;
          case 2:
            _instance.end = _reader.readInt32();
            break;
          default:
            _reader.skipField();
        }
      }

      EnumReservedRange.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: EnumReservedRange,
      _writer: BinaryWriter
    ) {
      if (_instance.start) {
        _writer.writeInt32(1, _instance.start);
      }
      if (_instance.end) {
        _writer.writeInt32(2, _instance.end);
      }
    }

    private _start?: number;
    private _end?: number;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EnumReservedRange to deeply clone from
     */
    constructor(_value?: RecursivePartial<EnumReservedRange>) {
      _value = _value || {};
      this.start = _value.start;
      this.end = _value.end;
      EnumReservedRange.refineValues(this);
    }
    get start(): number | undefined {
      return this._start;
    }
    set start(value: number | undefined) {
      this._start = value;
    }
    get end(): number | undefined {
      return this._end;
    }
    set end(value: number | undefined) {
      this._end = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      EnumReservedRange.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EnumReservedRange.AsObject {
      return {
        start: this.start,
        end: this.end
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
  export module EnumReservedRange {
    /**
     * Standard JavaScript object representation for EnumReservedRange
     */
    export interface AsObject {
      start?: number;
      end?: number;
    }
  }
}

/**
 * Message implementation for google.protobuf.EnumValueDescriptorProto
 */
export class EnumValueDescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EnumValueDescriptorProto();
    EnumValueDescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EnumValueDescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.number = _instance.number || 0;
    _instance.options = _instance.options || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EnumValueDescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.number = _reader.readInt32();
          break;
        case 3:
          _instance.options = new EnumValueOptions();
          _reader.readMessage(
            _instance.options,
            EnumValueOptions.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    EnumValueDescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EnumValueDescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.number) {
      _writer.writeInt32(2, _instance.number);
    }
    if (_instance.options) {
      _writer.writeMessage(
        3,
        _instance.options as any,
        EnumValueOptions.serializeBinaryToWriter
      );
    }
  }

  private _name?: string;
  private _number?: number;
  private _options?: EnumValueOptions;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EnumValueDescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<EnumValueDescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.number = _value.number;
    this.options = _value.options
      ? new EnumValueOptions(_value.options)
      : undefined;
    EnumValueDescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get number(): number | undefined {
    return this._number;
  }
  set number(value: number | undefined) {
    this._number = value;
  }
  get options(): EnumValueOptions | undefined {
    return this._options;
  }
  set options(value: EnumValueOptions | undefined) {
    this._options = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EnumValueDescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EnumValueDescriptorProto.AsObject {
    return {
      name: this.name,
      number: this.number,
      options: this.options ? this.options.toObject() : undefined
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
export module EnumValueDescriptorProto {
  /**
   * Standard JavaScript object representation for EnumValueDescriptorProto
   */
  export interface AsObject {
    name?: string;
    number?: number;
    options?: EnumValueOptions.AsObject;
  }
}

/**
 * Message implementation for google.protobuf.ServiceDescriptorProto
 */
export class ServiceDescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ServiceDescriptorProto();
    ServiceDescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ServiceDescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.method = _instance.method || [];
    _instance.options = _instance.options || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ServiceDescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new MethodDescriptorProto();
          _reader.readMessage(
            messageInitializer2,
            MethodDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.method = _instance.method || []).push(messageInitializer2);
          break;
        case 3:
          _instance.options = new ServiceOptions();
          _reader.readMessage(
            _instance.options,
            ServiceOptions.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ServiceDescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ServiceDescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.method && _instance.method.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.method as any,
        MethodDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.options) {
      _writer.writeMessage(
        3,
        _instance.options as any,
        ServiceOptions.serializeBinaryToWriter
      );
    }
  }

  private _name?: string;
  private _method?: MethodDescriptorProto[];
  private _options?: ServiceOptions;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ServiceDescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<ServiceDescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.method = (_value.method || []).map(m => new MethodDescriptorProto(m));
    this.options = _value.options
      ? new ServiceOptions(_value.options)
      : undefined;
    ServiceDescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get method(): MethodDescriptorProto[] | undefined {
    return this._method;
  }
  set method(value: MethodDescriptorProto[] | undefined) {
    this._method = value;
  }
  get options(): ServiceOptions | undefined {
    return this._options;
  }
  set options(value: ServiceOptions | undefined) {
    this._options = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ServiceDescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ServiceDescriptorProto.AsObject {
    return {
      name: this.name,
      method: (this.method || []).map(m => m.toObject()),
      options: this.options ? this.options.toObject() : undefined
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
export module ServiceDescriptorProto {
  /**
   * Standard JavaScript object representation for ServiceDescriptorProto
   */
  export interface AsObject {
    name?: string;
    method?: MethodDescriptorProto.AsObject[];
    options?: ServiceOptions.AsObject;
  }
}

/**
 * Message implementation for google.protobuf.MethodDescriptorProto
 */
export class MethodDescriptorProto implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MethodDescriptorProto();
    MethodDescriptorProto.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MethodDescriptorProto) {
    _instance.name = _instance.name || '';
    _instance.inputType = _instance.inputType || '';
    _instance.outputType = _instance.outputType || '';
    _instance.options = _instance.options || undefined;
    _instance.clientStreaming = _instance.clientStreaming || false;
    _instance.serverStreaming = _instance.serverStreaming || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MethodDescriptorProto,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.inputType = _reader.readString();
          break;
        case 3:
          _instance.outputType = _reader.readString();
          break;
        case 4:
          _instance.options = new MethodOptions();
          _reader.readMessage(
            _instance.options,
            MethodOptions.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.clientStreaming = _reader.readBool();
          break;
        case 6:
          _instance.serverStreaming = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    MethodDescriptorProto.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MethodDescriptorProto,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.inputType) {
      _writer.writeString(2, _instance.inputType);
    }
    if (_instance.outputType) {
      _writer.writeString(3, _instance.outputType);
    }
    if (_instance.options) {
      _writer.writeMessage(
        4,
        _instance.options as any,
        MethodOptions.serializeBinaryToWriter
      );
    }
    if (_instance.clientStreaming) {
      _writer.writeBool(5, _instance.clientStreaming);
    }
    if (_instance.serverStreaming) {
      _writer.writeBool(6, _instance.serverStreaming);
    }
  }

  private _name?: string;
  private _inputType?: string;
  private _outputType?: string;
  private _options?: MethodOptions;
  private _clientStreaming?: boolean;
  private _serverStreaming?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MethodDescriptorProto to deeply clone from
   */
  constructor(_value?: RecursivePartial<MethodDescriptorProto>) {
    _value = _value || {};
    this.name = _value.name;
    this.inputType = _value.inputType;
    this.outputType = _value.outputType;
    this.options = _value.options
      ? new MethodOptions(_value.options)
      : undefined;
    this.clientStreaming = _value.clientStreaming;
    this.serverStreaming = _value.serverStreaming;
    MethodDescriptorProto.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get inputType(): string | undefined {
    return this._inputType;
  }
  set inputType(value: string | undefined) {
    this._inputType = value;
  }
  get outputType(): string | undefined {
    return this._outputType;
  }
  set outputType(value: string | undefined) {
    this._outputType = value;
  }
  get options(): MethodOptions | undefined {
    return this._options;
  }
  set options(value: MethodOptions | undefined) {
    this._options = value;
  }
  get clientStreaming(): boolean | undefined {
    return this._clientStreaming;
  }
  set clientStreaming(value: boolean | undefined) {
    this._clientStreaming = value;
  }
  get serverStreaming(): boolean | undefined {
    return this._serverStreaming;
  }
  set serverStreaming(value: boolean | undefined) {
    this._serverStreaming = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MethodDescriptorProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MethodDescriptorProto.AsObject {
    return {
      name: this.name,
      inputType: this.inputType,
      outputType: this.outputType,
      options: this.options ? this.options.toObject() : undefined,
      clientStreaming: this.clientStreaming,
      serverStreaming: this.serverStreaming
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
export module MethodDescriptorProto {
  /**
   * Standard JavaScript object representation for MethodDescriptorProto
   */
  export interface AsObject {
    name?: string;
    inputType?: string;
    outputType?: string;
    options?: MethodOptions.AsObject;
    clientStreaming?: boolean;
    serverStreaming?: boolean;
  }
}

/**
 * Message implementation for google.protobuf.FileOptions
 */
export class FileOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FileOptions();
    FileOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FileOptions) {
    _instance.javaPackage = _instance.javaPackage || '';
    _instance.javaOuterClassname = _instance.javaOuterClassname || '';
    _instance.javaMultipleFiles = _instance.javaMultipleFiles || false;
    _instance.javaGenerateEqualsAndHash =
      _instance.javaGenerateEqualsAndHash || false;
    _instance.javaStringCheckUtf8 = _instance.javaStringCheckUtf8 || false;
    _instance.optimizeFor = _instance.optimizeFor || 0;
    _instance.goPackage = _instance.goPackage || '';
    _instance.ccGenericServices = _instance.ccGenericServices || false;
    _instance.javaGenericServices = _instance.javaGenericServices || false;
    _instance.pyGenericServices = _instance.pyGenericServices || false;
    _instance.phpGenericServices = _instance.phpGenericServices || false;
    _instance.deprecated = _instance.deprecated || false;
    _instance.ccEnableArenas = _instance.ccEnableArenas || false;
    _instance.objcClassPrefix = _instance.objcClassPrefix || '';
    _instance.csharpNamespace = _instance.csharpNamespace || '';
    _instance.swiftPrefix = _instance.swiftPrefix || '';
    _instance.phpClassPrefix = _instance.phpClassPrefix || '';
    _instance.phpNamespace = _instance.phpNamespace || '';
    _instance.phpMetadataNamespace = _instance.phpMetadataNamespace || '';
    _instance.rubyPackage = _instance.rubyPackage || '';
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FileOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.javaPackage = _reader.readString();
          break;
        case 8:
          _instance.javaOuterClassname = _reader.readString();
          break;
        case 10:
          _instance.javaMultipleFiles = _reader.readBool();
          break;
        case 20:
          _instance.javaGenerateEqualsAndHash = _reader.readBool();
          break;
        case 27:
          _instance.javaStringCheckUtf8 = _reader.readBool();
          break;
        case 9:
          _instance.optimizeFor = _reader.readEnum();
          break;
        case 11:
          _instance.goPackage = _reader.readString();
          break;
        case 16:
          _instance.ccGenericServices = _reader.readBool();
          break;
        case 17:
          _instance.javaGenericServices = _reader.readBool();
          break;
        case 18:
          _instance.pyGenericServices = _reader.readBool();
          break;
        case 42:
          _instance.phpGenericServices = _reader.readBool();
          break;
        case 23:
          _instance.deprecated = _reader.readBool();
          break;
        case 31:
          _instance.ccEnableArenas = _reader.readBool();
          break;
        case 36:
          _instance.objcClassPrefix = _reader.readString();
          break;
        case 37:
          _instance.csharpNamespace = _reader.readString();
          break;
        case 39:
          _instance.swiftPrefix = _reader.readString();
          break;
        case 40:
          _instance.phpClassPrefix = _reader.readString();
          break;
        case 41:
          _instance.phpNamespace = _reader.readString();
          break;
        case 44:
          _instance.phpMetadataNamespace = _reader.readString();
          break;
        case 45:
          _instance.rubyPackage = _reader.readString();
          break;
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    FileOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FileOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.javaPackage) {
      _writer.writeString(1, _instance.javaPackage);
    }
    if (_instance.javaOuterClassname) {
      _writer.writeString(8, _instance.javaOuterClassname);
    }
    if (_instance.javaMultipleFiles) {
      _writer.writeBool(10, _instance.javaMultipleFiles);
    }
    if (_instance.javaGenerateEqualsAndHash) {
      _writer.writeBool(20, _instance.javaGenerateEqualsAndHash);
    }
    if (_instance.javaStringCheckUtf8) {
      _writer.writeBool(27, _instance.javaStringCheckUtf8);
    }
    if (_instance.optimizeFor) {
      _writer.writeEnum(9, _instance.optimizeFor);
    }
    if (_instance.goPackage) {
      _writer.writeString(11, _instance.goPackage);
    }
    if (_instance.ccGenericServices) {
      _writer.writeBool(16, _instance.ccGenericServices);
    }
    if (_instance.javaGenericServices) {
      _writer.writeBool(17, _instance.javaGenericServices);
    }
    if (_instance.pyGenericServices) {
      _writer.writeBool(18, _instance.pyGenericServices);
    }
    if (_instance.phpGenericServices) {
      _writer.writeBool(42, _instance.phpGenericServices);
    }
    if (_instance.deprecated) {
      _writer.writeBool(23, _instance.deprecated);
    }
    if (_instance.ccEnableArenas) {
      _writer.writeBool(31, _instance.ccEnableArenas);
    }
    if (_instance.objcClassPrefix) {
      _writer.writeString(36, _instance.objcClassPrefix);
    }
    if (_instance.csharpNamespace) {
      _writer.writeString(37, _instance.csharpNamespace);
    }
    if (_instance.swiftPrefix) {
      _writer.writeString(39, _instance.swiftPrefix);
    }
    if (_instance.phpClassPrefix) {
      _writer.writeString(40, _instance.phpClassPrefix);
    }
    if (_instance.phpNamespace) {
      _writer.writeString(41, _instance.phpNamespace);
    }
    if (_instance.phpMetadataNamespace) {
      _writer.writeString(44, _instance.phpMetadataNamespace);
    }
    if (_instance.rubyPackage) {
      _writer.writeString(45, _instance.rubyPackage);
    }
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _javaPackage?: string;
  private _javaOuterClassname?: string;
  private _javaMultipleFiles?: boolean;
  private _javaGenerateEqualsAndHash?: boolean;
  private _javaStringCheckUtf8?: boolean;
  private _optimizeFor?: FileOptions.OptimizeMode;
  private _goPackage?: string;
  private _ccGenericServices?: boolean;
  private _javaGenericServices?: boolean;
  private _pyGenericServices?: boolean;
  private _phpGenericServices?: boolean;
  private _deprecated?: boolean;
  private _ccEnableArenas?: boolean;
  private _objcClassPrefix?: string;
  private _csharpNamespace?: string;
  private _swiftPrefix?: string;
  private _phpClassPrefix?: string;
  private _phpNamespace?: string;
  private _phpMetadataNamespace?: string;
  private _rubyPackage?: string;
  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FileOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<FileOptions>) {
    _value = _value || {};
    this.javaPackage = _value.javaPackage;
    this.javaOuterClassname = _value.javaOuterClassname;
    this.javaMultipleFiles = _value.javaMultipleFiles;
    this.javaGenerateEqualsAndHash = _value.javaGenerateEqualsAndHash;
    this.javaStringCheckUtf8 = _value.javaStringCheckUtf8;
    this.optimizeFor = _value.optimizeFor;
    this.goPackage = _value.goPackage;
    this.ccGenericServices = _value.ccGenericServices;
    this.javaGenericServices = _value.javaGenericServices;
    this.pyGenericServices = _value.pyGenericServices;
    this.phpGenericServices = _value.phpGenericServices;
    this.deprecated = _value.deprecated;
    this.ccEnableArenas = _value.ccEnableArenas;
    this.objcClassPrefix = _value.objcClassPrefix;
    this.csharpNamespace = _value.csharpNamespace;
    this.swiftPrefix = _value.swiftPrefix;
    this.phpClassPrefix = _value.phpClassPrefix;
    this.phpNamespace = _value.phpNamespace;
    this.phpMetadataNamespace = _value.phpMetadataNamespace;
    this.rubyPackage = _value.rubyPackage;
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    FileOptions.refineValues(this);
  }
  get javaPackage(): string | undefined {
    return this._javaPackage;
  }
  set javaPackage(value: string | undefined) {
    this._javaPackage = value;
  }
  get javaOuterClassname(): string | undefined {
    return this._javaOuterClassname;
  }
  set javaOuterClassname(value: string | undefined) {
    this._javaOuterClassname = value;
  }
  get javaMultipleFiles(): boolean | undefined {
    return this._javaMultipleFiles;
  }
  set javaMultipleFiles(value: boolean | undefined) {
    this._javaMultipleFiles = value;
  }
  get javaGenerateEqualsAndHash(): boolean | undefined {
    return this._javaGenerateEqualsAndHash;
  }
  set javaGenerateEqualsAndHash(value: boolean | undefined) {
    this._javaGenerateEqualsAndHash = value;
  }
  get javaStringCheckUtf8(): boolean | undefined {
    return this._javaStringCheckUtf8;
  }
  set javaStringCheckUtf8(value: boolean | undefined) {
    this._javaStringCheckUtf8 = value;
  }
  get optimizeFor(): FileOptions.OptimizeMode | undefined {
    return this._optimizeFor;
  }
  set optimizeFor(value: FileOptions.OptimizeMode | undefined) {
    this._optimizeFor = value;
  }
  get goPackage(): string | undefined {
    return this._goPackage;
  }
  set goPackage(value: string | undefined) {
    this._goPackage = value;
  }
  get ccGenericServices(): boolean | undefined {
    return this._ccGenericServices;
  }
  set ccGenericServices(value: boolean | undefined) {
    this._ccGenericServices = value;
  }
  get javaGenericServices(): boolean | undefined {
    return this._javaGenericServices;
  }
  set javaGenericServices(value: boolean | undefined) {
    this._javaGenericServices = value;
  }
  get pyGenericServices(): boolean | undefined {
    return this._pyGenericServices;
  }
  set pyGenericServices(value: boolean | undefined) {
    this._pyGenericServices = value;
  }
  get phpGenericServices(): boolean | undefined {
    return this._phpGenericServices;
  }
  set phpGenericServices(value: boolean | undefined) {
    this._phpGenericServices = value;
  }
  get deprecated(): boolean | undefined {
    return this._deprecated;
  }
  set deprecated(value: boolean | undefined) {
    this._deprecated = value;
  }
  get ccEnableArenas(): boolean | undefined {
    return this._ccEnableArenas;
  }
  set ccEnableArenas(value: boolean | undefined) {
    this._ccEnableArenas = value;
  }
  get objcClassPrefix(): string | undefined {
    return this._objcClassPrefix;
  }
  set objcClassPrefix(value: string | undefined) {
    this._objcClassPrefix = value;
  }
  get csharpNamespace(): string | undefined {
    return this._csharpNamespace;
  }
  set csharpNamespace(value: string | undefined) {
    this._csharpNamespace = value;
  }
  get swiftPrefix(): string | undefined {
    return this._swiftPrefix;
  }
  set swiftPrefix(value: string | undefined) {
    this._swiftPrefix = value;
  }
  get phpClassPrefix(): string | undefined {
    return this._phpClassPrefix;
  }
  set phpClassPrefix(value: string | undefined) {
    this._phpClassPrefix = value;
  }
  get phpNamespace(): string | undefined {
    return this._phpNamespace;
  }
  set phpNamespace(value: string | undefined) {
    this._phpNamespace = value;
  }
  get phpMetadataNamespace(): string | undefined {
    return this._phpMetadataNamespace;
  }
  set phpMetadataNamespace(value: string | undefined) {
    this._phpMetadataNamespace = value;
  }
  get rubyPackage(): string | undefined {
    return this._rubyPackage;
  }
  set rubyPackage(value: string | undefined) {
    this._rubyPackage = value;
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FileOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FileOptions.AsObject {
    return {
      javaPackage: this.javaPackage,
      javaOuterClassname: this.javaOuterClassname,
      javaMultipleFiles: this.javaMultipleFiles,
      javaGenerateEqualsAndHash: this.javaGenerateEqualsAndHash,
      javaStringCheckUtf8: this.javaStringCheckUtf8,
      optimizeFor: this.optimizeFor,
      goPackage: this.goPackage,
      ccGenericServices: this.ccGenericServices,
      javaGenericServices: this.javaGenericServices,
      pyGenericServices: this.pyGenericServices,
      phpGenericServices: this.phpGenericServices,
      deprecated: this.deprecated,
      ccEnableArenas: this.ccEnableArenas,
      objcClassPrefix: this.objcClassPrefix,
      csharpNamespace: this.csharpNamespace,
      swiftPrefix: this.swiftPrefix,
      phpClassPrefix: this.phpClassPrefix,
      phpNamespace: this.phpNamespace,
      phpMetadataNamespace: this.phpMetadataNamespace,
      rubyPackage: this.rubyPackage,
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module FileOptions {
  /**
   * Standard JavaScript object representation for FileOptions
   */
  export interface AsObject {
    javaPackage?: string;
    javaOuterClassname?: string;
    javaMultipleFiles?: boolean;
    javaGenerateEqualsAndHash?: boolean;
    javaStringCheckUtf8?: boolean;
    optimizeFor?: FileOptions.OptimizeMode;
    goPackage?: string;
    ccGenericServices?: boolean;
    javaGenericServices?: boolean;
    pyGenericServices?: boolean;
    phpGenericServices?: boolean;
    deprecated?: boolean;
    ccEnableArenas?: boolean;
    objcClassPrefix?: string;
    csharpNamespace?: string;
    swiftPrefix?: string;
    phpClassPrefix?: string;
    phpNamespace?: string;
    phpMetadataNamespace?: string;
    rubyPackage?: string;
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
  export enum OptimizeMode {
    SPEED = 1,
    CODE_SIZE = 2,
    LITE_RUNTIME = 3
  }
}

/**
 * Message implementation for google.protobuf.MessageOptions
 */
export class MessageOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MessageOptions();
    MessageOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MessageOptions) {
    _instance.messageSetWireFormat = _instance.messageSetWireFormat || false;
    _instance.noStandardDescriptorAccessor =
      _instance.noStandardDescriptorAccessor || false;
    _instance.deprecated = _instance.deprecated || false;
    _instance.mapEntry = _instance.mapEntry || false;
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MessageOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.messageSetWireFormat = _reader.readBool();
          break;
        case 2:
          _instance.noStandardDescriptorAccessor = _reader.readBool();
          break;
        case 3:
          _instance.deprecated = _reader.readBool();
          break;
        case 7:
          _instance.mapEntry = _reader.readBool();
          break;
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    MessageOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MessageOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.messageSetWireFormat) {
      _writer.writeBool(1, _instance.messageSetWireFormat);
    }
    if (_instance.noStandardDescriptorAccessor) {
      _writer.writeBool(2, _instance.noStandardDescriptorAccessor);
    }
    if (_instance.deprecated) {
      _writer.writeBool(3, _instance.deprecated);
    }
    if (_instance.mapEntry) {
      _writer.writeBool(7, _instance.mapEntry);
    }
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _messageSetWireFormat?: boolean;
  private _noStandardDescriptorAccessor?: boolean;
  private _deprecated?: boolean;
  private _mapEntry?: boolean;
  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MessageOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<MessageOptions>) {
    _value = _value || {};
    this.messageSetWireFormat = _value.messageSetWireFormat;
    this.noStandardDescriptorAccessor = _value.noStandardDescriptorAccessor;
    this.deprecated = _value.deprecated;
    this.mapEntry = _value.mapEntry;
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    MessageOptions.refineValues(this);
  }
  get messageSetWireFormat(): boolean | undefined {
    return this._messageSetWireFormat;
  }
  set messageSetWireFormat(value: boolean | undefined) {
    this._messageSetWireFormat = value;
  }
  get noStandardDescriptorAccessor(): boolean | undefined {
    return this._noStandardDescriptorAccessor;
  }
  set noStandardDescriptorAccessor(value: boolean | undefined) {
    this._noStandardDescriptorAccessor = value;
  }
  get deprecated(): boolean | undefined {
    return this._deprecated;
  }
  set deprecated(value: boolean | undefined) {
    this._deprecated = value;
  }
  get mapEntry(): boolean | undefined {
    return this._mapEntry;
  }
  set mapEntry(value: boolean | undefined) {
    this._mapEntry = value;
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MessageOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MessageOptions.AsObject {
    return {
      messageSetWireFormat: this.messageSetWireFormat,
      noStandardDescriptorAccessor: this.noStandardDescriptorAccessor,
      deprecated: this.deprecated,
      mapEntry: this.mapEntry,
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module MessageOptions {
  /**
   * Standard JavaScript object representation for MessageOptions
   */
  export interface AsObject {
    messageSetWireFormat?: boolean;
    noStandardDescriptorAccessor?: boolean;
    deprecated?: boolean;
    mapEntry?: boolean;
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
}

/**
 * Message implementation for google.protobuf.FieldOptions
 */
export class FieldOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FieldOptions();
    FieldOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FieldOptions) {
    _instance.ctype = _instance.ctype || 0;
    _instance.packed = _instance.packed || false;
    _instance.jstype = _instance.jstype || 0;
    _instance.lazy = _instance.lazy || false;
    _instance.deprecated = _instance.deprecated || false;
    _instance.weak = _instance.weak || false;
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FieldOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.ctype = _reader.readEnum();
          break;
        case 2:
          _instance.packed = _reader.readBool();
          break;
        case 6:
          _instance.jstype = _reader.readEnum();
          break;
        case 5:
          _instance.lazy = _reader.readBool();
          break;
        case 3:
          _instance.deprecated = _reader.readBool();
          break;
        case 10:
          _instance.weak = _reader.readBool();
          break;
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    FieldOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FieldOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.ctype) {
      _writer.writeEnum(1, _instance.ctype);
    }
    if (_instance.packed) {
      _writer.writeBool(2, _instance.packed);
    }
    if (_instance.jstype) {
      _writer.writeEnum(6, _instance.jstype);
    }
    if (_instance.lazy) {
      _writer.writeBool(5, _instance.lazy);
    }
    if (_instance.deprecated) {
      _writer.writeBool(3, _instance.deprecated);
    }
    if (_instance.weak) {
      _writer.writeBool(10, _instance.weak);
    }
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _ctype?: FieldOptions.CType;
  private _packed?: boolean;
  private _jstype?: FieldOptions.JSType;
  private _lazy?: boolean;
  private _deprecated?: boolean;
  private _weak?: boolean;
  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FieldOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<FieldOptions>) {
    _value = _value || {};
    this.ctype = _value.ctype;
    this.packed = _value.packed;
    this.jstype = _value.jstype;
    this.lazy = _value.lazy;
    this.deprecated = _value.deprecated;
    this.weak = _value.weak;
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    FieldOptions.refineValues(this);
  }
  get ctype(): FieldOptions.CType | undefined {
    return this._ctype;
  }
  set ctype(value: FieldOptions.CType | undefined) {
    this._ctype = value;
  }
  get packed(): boolean | undefined {
    return this._packed;
  }
  set packed(value: boolean | undefined) {
    this._packed = value;
  }
  get jstype(): FieldOptions.JSType | undefined {
    return this._jstype;
  }
  set jstype(value: FieldOptions.JSType | undefined) {
    this._jstype = value;
  }
  get lazy(): boolean | undefined {
    return this._lazy;
  }
  set lazy(value: boolean | undefined) {
    this._lazy = value;
  }
  get deprecated(): boolean | undefined {
    return this._deprecated;
  }
  set deprecated(value: boolean | undefined) {
    this._deprecated = value;
  }
  get weak(): boolean | undefined {
    return this._weak;
  }
  set weak(value: boolean | undefined) {
    this._weak = value;
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FieldOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FieldOptions.AsObject {
    return {
      ctype: this.ctype,
      packed: this.packed,
      jstype: this.jstype,
      lazy: this.lazy,
      deprecated: this.deprecated,
      weak: this.weak,
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module FieldOptions {
  /**
   * Standard JavaScript object representation for FieldOptions
   */
  export interface AsObject {
    ctype?: FieldOptions.CType;
    packed?: boolean;
    jstype?: FieldOptions.JSType;
    lazy?: boolean;
    deprecated?: boolean;
    weak?: boolean;
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
  export enum CType {
    STRING = 0,
    CORD = 1,
    STRING_PIECE = 2
  }
  export enum JSType {
    JS_NORMAL = 0,
    JS_STRING = 1,
    JS_NUMBER = 2
  }
}

/**
 * Message implementation for google.protobuf.OneofOptions
 */
export class OneofOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OneofOptions();
    OneofOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OneofOptions) {
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OneofOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    OneofOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OneofOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OneofOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<OneofOptions>) {
    _value = _value || {};
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    OneofOptions.refineValues(this);
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OneofOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OneofOptions.AsObject {
    return {
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module OneofOptions {
  /**
   * Standard JavaScript object representation for OneofOptions
   */
  export interface AsObject {
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
}

/**
 * Message implementation for google.protobuf.EnumOptions
 */
export class EnumOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EnumOptions();
    EnumOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EnumOptions) {
    _instance.allowAlias = _instance.allowAlias || false;
    _instance.deprecated = _instance.deprecated || false;
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EnumOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 2:
          _instance.allowAlias = _reader.readBool();
          break;
        case 3:
          _instance.deprecated = _reader.readBool();
          break;
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    EnumOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EnumOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.allowAlias) {
      _writer.writeBool(2, _instance.allowAlias);
    }
    if (_instance.deprecated) {
      _writer.writeBool(3, _instance.deprecated);
    }
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _allowAlias?: boolean;
  private _deprecated?: boolean;
  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EnumOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<EnumOptions>) {
    _value = _value || {};
    this.allowAlias = _value.allowAlias;
    this.deprecated = _value.deprecated;
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    EnumOptions.refineValues(this);
  }
  get allowAlias(): boolean | undefined {
    return this._allowAlias;
  }
  set allowAlias(value: boolean | undefined) {
    this._allowAlias = value;
  }
  get deprecated(): boolean | undefined {
    return this._deprecated;
  }
  set deprecated(value: boolean | undefined) {
    this._deprecated = value;
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EnumOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EnumOptions.AsObject {
    return {
      allowAlias: this.allowAlias,
      deprecated: this.deprecated,
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module EnumOptions {
  /**
   * Standard JavaScript object representation for EnumOptions
   */
  export interface AsObject {
    allowAlias?: boolean;
    deprecated?: boolean;
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
}

/**
 * Message implementation for google.protobuf.EnumValueOptions
 */
export class EnumValueOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EnumValueOptions();
    EnumValueOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EnumValueOptions) {
    _instance.deprecated = _instance.deprecated || false;
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EnumValueOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.deprecated = _reader.readBool();
          break;
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    EnumValueOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EnumValueOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.deprecated) {
      _writer.writeBool(1, _instance.deprecated);
    }
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _deprecated?: boolean;
  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EnumValueOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<EnumValueOptions>) {
    _value = _value || {};
    this.deprecated = _value.deprecated;
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    EnumValueOptions.refineValues(this);
  }
  get deprecated(): boolean | undefined {
    return this._deprecated;
  }
  set deprecated(value: boolean | undefined) {
    this._deprecated = value;
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EnumValueOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EnumValueOptions.AsObject {
    return {
      deprecated: this.deprecated,
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module EnumValueOptions {
  /**
   * Standard JavaScript object representation for EnumValueOptions
   */
  export interface AsObject {
    deprecated?: boolean;
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
}

/**
 * Message implementation for google.protobuf.ServiceOptions
 */
export class ServiceOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ServiceOptions();
    ServiceOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ServiceOptions) {
    _instance.deprecated = _instance.deprecated || false;
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ServiceOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 33:
          _instance.deprecated = _reader.readBool();
          break;
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    ServiceOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ServiceOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.deprecated) {
      _writer.writeBool(33, _instance.deprecated);
    }
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _deprecated?: boolean;
  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ServiceOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<ServiceOptions>) {
    _value = _value || {};
    this.deprecated = _value.deprecated;
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    ServiceOptions.refineValues(this);
  }
  get deprecated(): boolean | undefined {
    return this._deprecated;
  }
  set deprecated(value: boolean | undefined) {
    this._deprecated = value;
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ServiceOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ServiceOptions.AsObject {
    return {
      deprecated: this.deprecated,
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module ServiceOptions {
  /**
   * Standard JavaScript object representation for ServiceOptions
   */
  export interface AsObject {
    deprecated?: boolean;
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
}

/**
 * Message implementation for google.protobuf.MethodOptions
 */
export class MethodOptions implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MethodOptions();
    MethodOptions.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MethodOptions) {
    _instance.deprecated = _instance.deprecated || false;
    _instance.idempotencyLevel = _instance.idempotencyLevel || 0;
    _instance.uninterpretedOption = _instance.uninterpretedOption || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MethodOptions,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 33:
          _instance.deprecated = _reader.readBool();
          break;
        case 34:
          _instance.idempotencyLevel = _reader.readEnum();
          break;
        case 999:
          const messageInitializer999 = new UninterpretedOption();
          _reader.readMessage(
            messageInitializer999,
            UninterpretedOption.deserializeBinaryFromReader
          );
          (_instance.uninterpretedOption =
            _instance.uninterpretedOption || []).push(messageInitializer999);
          break;
        default:
          _reader.skipField();
      }
    }

    MethodOptions.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MethodOptions,
    _writer: BinaryWriter
  ) {
    if (_instance.deprecated) {
      _writer.writeBool(33, _instance.deprecated);
    }
    if (_instance.idempotencyLevel) {
      _writer.writeEnum(34, _instance.idempotencyLevel);
    }
    if (_instance.uninterpretedOption && _instance.uninterpretedOption.length) {
      _writer.writeRepeatedMessage(
        999,
        _instance.uninterpretedOption as any,
        UninterpretedOption.serializeBinaryToWriter
      );
    }
  }

  private _deprecated?: boolean;
  private _idempotencyLevel?: MethodOptions.IdempotencyLevel;
  private _uninterpretedOption?: UninterpretedOption[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MethodOptions to deeply clone from
   */
  constructor(_value?: RecursivePartial<MethodOptions>) {
    _value = _value || {};
    this.deprecated = _value.deprecated;
    this.idempotencyLevel = _value.idempotencyLevel;
    this.uninterpretedOption = (_value.uninterpretedOption || []).map(
      m => new UninterpretedOption(m)
    );
    MethodOptions.refineValues(this);
  }
  get deprecated(): boolean | undefined {
    return this._deprecated;
  }
  set deprecated(value: boolean | undefined) {
    this._deprecated = value;
  }
  get idempotencyLevel(): MethodOptions.IdempotencyLevel | undefined {
    return this._idempotencyLevel;
  }
  set idempotencyLevel(value: MethodOptions.IdempotencyLevel | undefined) {
    this._idempotencyLevel = value;
  }
  get uninterpretedOption(): UninterpretedOption[] | undefined {
    return this._uninterpretedOption;
  }
  set uninterpretedOption(value: UninterpretedOption[] | undefined) {
    this._uninterpretedOption = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MethodOptions.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MethodOptions.AsObject {
    return {
      deprecated: this.deprecated,
      idempotencyLevel: this.idempotencyLevel,
      uninterpretedOption: (this.uninterpretedOption || []).map(m =>
        m.toObject()
      )
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
export module MethodOptions {
  /**
   * Standard JavaScript object representation for MethodOptions
   */
  export interface AsObject {
    deprecated?: boolean;
    idempotencyLevel?: MethodOptions.IdempotencyLevel;
    uninterpretedOption?: UninterpretedOption.AsObject[];
  }
  export enum IdempotencyLevel {
    IDEMPOTENCY_UNKNOWN = 0,
    NO_SIDE_EFFECTS = 1,
    IDEMPOTENT = 2
  }
}

/**
 * Message implementation for google.protobuf.UninterpretedOption
 */
export class UninterpretedOption implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UninterpretedOption();
    UninterpretedOption.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UninterpretedOption) {
    _instance.name = _instance.name || [];
    _instance.identifierValue = _instance.identifierValue || '';
    _instance.positiveIntValue = _instance.positiveIntValue || '0';
    _instance.negativeIntValue = _instance.negativeIntValue || '0';
    _instance.doubleValue = _instance.doubleValue || 0;
    _instance.stringValue = _instance.stringValue || new Uint8Array();
    _instance.aggregateValue = _instance.aggregateValue || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UninterpretedOption,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 2:
          const messageInitializer2 = new UninterpretedOption.NamePart();
          _reader.readMessage(
            messageInitializer2,
            UninterpretedOption.NamePart.deserializeBinaryFromReader
          );
          (_instance.name = _instance.name || []).push(messageInitializer2);
          break;
        case 3:
          _instance.identifierValue = _reader.readString();
          break;
        case 4:
          _instance.positiveIntValue = _reader.readUint64String();
          break;
        case 5:
          _instance.negativeIntValue = _reader.readInt64String();
          break;
        case 6:
          _instance.doubleValue = _reader.readDouble();
          break;
        case 7:
          _instance.stringValue = _reader.readBytes();
          break;
        case 8:
          _instance.aggregateValue = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UninterpretedOption.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UninterpretedOption,
    _writer: BinaryWriter
  ) {
    if (_instance.name && _instance.name.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.name as any,
        UninterpretedOption.NamePart.serializeBinaryToWriter
      );
    }
    if (_instance.identifierValue) {
      _writer.writeString(3, _instance.identifierValue);
    }
    if (_instance.positiveIntValue) {
      _writer.writeUint64String(4, _instance.positiveIntValue);
    }
    if (_instance.negativeIntValue) {
      _writer.writeInt64String(5, _instance.negativeIntValue);
    }
    if (_instance.doubleValue) {
      _writer.writeDouble(6, _instance.doubleValue);
    }
    if (_instance.stringValue && _instance.stringValue.length) {
      _writer.writeBytes(7, _instance.stringValue);
    }
    if (_instance.aggregateValue) {
      _writer.writeString(8, _instance.aggregateValue);
    }
  }

  private _name?: UninterpretedOption.NamePart[];
  private _identifierValue?: string;
  private _positiveIntValue?: string;
  private _negativeIntValue?: string;
  private _doubleValue?: number;
  private _stringValue?: Uint8Array;
  private _aggregateValue?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UninterpretedOption to deeply clone from
   */
  constructor(_value?: RecursivePartial<UninterpretedOption>) {
    _value = _value || {};
    this.name = (_value.name || []).map(
      m => new UninterpretedOption.NamePart(m)
    );
    this.identifierValue = _value.identifierValue;
    this.positiveIntValue = _value.positiveIntValue;
    this.negativeIntValue = _value.negativeIntValue;
    this.doubleValue = _value.doubleValue;
    this.stringValue = _value.stringValue;
    this.aggregateValue = _value.aggregateValue;
    UninterpretedOption.refineValues(this);
  }
  get name(): UninterpretedOption.NamePart[] | undefined {
    return this._name;
  }
  set name(value: UninterpretedOption.NamePart[] | undefined) {
    this._name = value;
  }
  get identifierValue(): string | undefined {
    return this._identifierValue;
  }
  set identifierValue(value: string | undefined) {
    this._identifierValue = value;
  }
  get positiveIntValue(): string | undefined {
    return this._positiveIntValue;
  }
  set positiveIntValue(value: string | undefined) {
    this._positiveIntValue = value;
  }
  get negativeIntValue(): string | undefined {
    return this._negativeIntValue;
  }
  set negativeIntValue(value: string | undefined) {
    this._negativeIntValue = value;
  }
  get doubleValue(): number | undefined {
    return this._doubleValue;
  }
  set doubleValue(value: number | undefined) {
    this._doubleValue = value;
  }
  get stringValue(): Uint8Array | undefined {
    return this._stringValue;
  }
  set stringValue(value: Uint8Array | undefined) {
    this._stringValue = value;
  }
  get aggregateValue(): string | undefined {
    return this._aggregateValue;
  }
  set aggregateValue(value: string | undefined) {
    this._aggregateValue = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UninterpretedOption.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UninterpretedOption.AsObject {
    return {
      name: (this.name || []).map(m => m.toObject()),
      identifierValue: this.identifierValue,
      positiveIntValue: this.positiveIntValue,
      negativeIntValue: this.negativeIntValue,
      doubleValue: this.doubleValue,
      stringValue: this.stringValue
        ? this.stringValue.subarray(0)
        : new Uint8Array(),
      aggregateValue: this.aggregateValue
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
export module UninterpretedOption {
  /**
   * Standard JavaScript object representation for UninterpretedOption
   */
  export interface AsObject {
    name?: UninterpretedOption.NamePart.AsObject[];
    identifierValue?: string;
    positiveIntValue?: string;
    negativeIntValue?: string;
    doubleValue?: number;
    stringValue?: Uint8Array;
    aggregateValue?: string;
  }

  /**
   * Message implementation for google.protobuf.NamePart
   */
  export class NamePart implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new NamePart();
      NamePart.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: NamePart) {
      _instance.namePart = _instance.namePart || '';
      _instance.isExtension = _instance.isExtension || false;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: NamePart,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.namePart = _reader.readString();
            break;
          case 2:
            _instance.isExtension = _reader.readBool();
            break;
          default:
            _reader.skipField();
        }
      }

      NamePart.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: NamePart, _writer: BinaryWriter) {
      if (_instance.namePart) {
        _writer.writeString(1, _instance.namePart);
      }
      if (_instance.isExtension) {
        _writer.writeBool(2, _instance.isExtension);
      }
    }

    private _namePart?: string;
    private _isExtension?: boolean;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of NamePart to deeply clone from
     */
    constructor(_value?: RecursivePartial<NamePart>) {
      _value = _value || {};
      this.namePart = _value.namePart;
      this.isExtension = _value.isExtension;
      NamePart.refineValues(this);
    }
    get namePart(): string | undefined {
      return this._namePart;
    }
    set namePart(value: string | undefined) {
      this._namePart = value;
    }
    get isExtension(): boolean | undefined {
      return this._isExtension;
    }
    set isExtension(value: boolean | undefined) {
      this._isExtension = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      NamePart.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): NamePart.AsObject {
      return {
        namePart: this.namePart,
        isExtension: this.isExtension
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
  export module NamePart {
    /**
     * Standard JavaScript object representation for NamePart
     */
    export interface AsObject {
      namePart?: string;
      isExtension?: boolean;
    }
  }
}

/**
 * Message implementation for google.protobuf.SourceCodeInfo
 */
export class SourceCodeInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SourceCodeInfo();
    SourceCodeInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SourceCodeInfo) {
    _instance.location = _instance.location || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SourceCodeInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new SourceCodeInfo.Location();
          _reader.readMessage(
            messageInitializer1,
            SourceCodeInfo.Location.deserializeBinaryFromReader
          );
          (_instance.location = _instance.location || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SourceCodeInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SourceCodeInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.location && _instance.location.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.location as any,
        SourceCodeInfo.Location.serializeBinaryToWriter
      );
    }
  }

  private _location?: SourceCodeInfo.Location[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SourceCodeInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<SourceCodeInfo>) {
    _value = _value || {};
    this.location = (_value.location || []).map(
      m => new SourceCodeInfo.Location(m)
    );
    SourceCodeInfo.refineValues(this);
  }
  get location(): SourceCodeInfo.Location[] | undefined {
    return this._location;
  }
  set location(value: SourceCodeInfo.Location[] | undefined) {
    this._location = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SourceCodeInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SourceCodeInfo.AsObject {
    return {
      location: (this.location || []).map(m => m.toObject())
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
export module SourceCodeInfo {
  /**
   * Standard JavaScript object representation for SourceCodeInfo
   */
  export interface AsObject {
    location?: SourceCodeInfo.Location.AsObject[];
  }

  /**
   * Message implementation for google.protobuf.Location
   */
  export class Location implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Location();
      Location.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Location) {
      _instance.path = _instance.path || [];
      _instance.span = _instance.span || [];
      _instance.leadingComments = _instance.leadingComments || '';
      _instance.trailingComments = _instance.trailingComments || '';
      _instance.leadingDetachedComments =
        _instance.leadingDetachedComments || [];
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Location,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            (_instance.path = _instance.path || []).push(
              ...(_reader.readPackedInt32() || [])
            );
            break;
          case 2:
            (_instance.span = _instance.span || []).push(
              ...(_reader.readPackedInt32() || [])
            );
            break;
          case 3:
            _instance.leadingComments = _reader.readString();
            break;
          case 4:
            _instance.trailingComments = _reader.readString();
            break;
          case 6:
            (_instance.leadingDetachedComments =
              _instance.leadingDetachedComments || []).push(
              _reader.readString()
            );
            break;
          default:
            _reader.skipField();
        }
      }

      Location.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Location, _writer: BinaryWriter) {
      if (_instance.path && _instance.path.length) {
        _writer.writePackedInt32(1, _instance.path);
      }
      if (_instance.span && _instance.span.length) {
        _writer.writePackedInt32(2, _instance.span);
      }
      if (_instance.leadingComments) {
        _writer.writeString(3, _instance.leadingComments);
      }
      if (_instance.trailingComments) {
        _writer.writeString(4, _instance.trailingComments);
      }
      if (
        _instance.leadingDetachedComments &&
        _instance.leadingDetachedComments.length
      ) {
        _writer.writeRepeatedString(6, _instance.leadingDetachedComments);
      }
    }

    private _path?: number[];
    private _span?: number[];
    private _leadingComments?: string;
    private _trailingComments?: string;
    private _leadingDetachedComments?: string[];

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Location to deeply clone from
     */
    constructor(_value?: RecursivePartial<Location>) {
      _value = _value || {};
      this.path = (_value.path || []).slice();
      this.span = (_value.span || []).slice();
      this.leadingComments = _value.leadingComments;
      this.trailingComments = _value.trailingComments;
      this.leadingDetachedComments = (
        _value.leadingDetachedComments || []
      ).slice();
      Location.refineValues(this);
    }
    get path(): number[] | undefined {
      return this._path;
    }
    set path(value: number[] | undefined) {
      this._path = value;
    }
    get span(): number[] | undefined {
      return this._span;
    }
    set span(value: number[] | undefined) {
      this._span = value;
    }
    get leadingComments(): string | undefined {
      return this._leadingComments;
    }
    set leadingComments(value: string | undefined) {
      this._leadingComments = value;
    }
    get trailingComments(): string | undefined {
      return this._trailingComments;
    }
    set trailingComments(value: string | undefined) {
      this._trailingComments = value;
    }
    get leadingDetachedComments(): string[] | undefined {
      return this._leadingDetachedComments;
    }
    set leadingDetachedComments(value: string[] | undefined) {
      this._leadingDetachedComments = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Location.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Location.AsObject {
      return {
        path: (this.path || []).slice(),
        span: (this.span || []).slice(),
        leadingComments: this.leadingComments,
        trailingComments: this.trailingComments,
        leadingDetachedComments: (this.leadingDetachedComments || []).slice()
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
  export module Location {
    /**
     * Standard JavaScript object representation for Location
     */
    export interface AsObject {
      path?: number[];
      span?: number[];
      leadingComments?: string;
      trailingComments?: string;
      leadingDetachedComments?: string[];
    }
  }
}

/**
 * Message implementation for google.protobuf.GeneratedCodeInfo
 */
export class GeneratedCodeInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GeneratedCodeInfo();
    GeneratedCodeInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GeneratedCodeInfo) {
    _instance.annotation = _instance.annotation || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GeneratedCodeInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new GeneratedCodeInfo.Annotation();
          _reader.readMessage(
            messageInitializer1,
            GeneratedCodeInfo.Annotation.deserializeBinaryFromReader
          );
          (_instance.annotation = _instance.annotation || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GeneratedCodeInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GeneratedCodeInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.annotation && _instance.annotation.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.annotation as any,
        GeneratedCodeInfo.Annotation.serializeBinaryToWriter
      );
    }
  }

  private _annotation?: GeneratedCodeInfo.Annotation[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GeneratedCodeInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<GeneratedCodeInfo>) {
    _value = _value || {};
    this.annotation = (_value.annotation || []).map(
      m => new GeneratedCodeInfo.Annotation(m)
    );
    GeneratedCodeInfo.refineValues(this);
  }
  get annotation(): GeneratedCodeInfo.Annotation[] | undefined {
    return this._annotation;
  }
  set annotation(value: GeneratedCodeInfo.Annotation[] | undefined) {
    this._annotation = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GeneratedCodeInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GeneratedCodeInfo.AsObject {
    return {
      annotation: (this.annotation || []).map(m => m.toObject())
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
export module GeneratedCodeInfo {
  /**
   * Standard JavaScript object representation for GeneratedCodeInfo
   */
  export interface AsObject {
    annotation?: GeneratedCodeInfo.Annotation.AsObject[];
  }

  /**
   * Message implementation for google.protobuf.Annotation
   */
  export class Annotation implements GrpcMessage {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Annotation();
      Annotation.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Annotation) {
      _instance.path = _instance.path || [];
      _instance.sourceFile = _instance.sourceFile || '';
      _instance.begin = _instance.begin || 0;
      _instance.end = _instance.end || 0;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Annotation,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            (_instance.path = _instance.path || []).push(
              ...(_reader.readPackedInt32() || [])
            );
            break;
          case 2:
            _instance.sourceFile = _reader.readString();
            break;
          case 3:
            _instance.begin = _reader.readInt32();
            break;
          case 4:
            _instance.end = _reader.readInt32();
            break;
          default:
            _reader.skipField();
        }
      }

      Annotation.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: Annotation,
      _writer: BinaryWriter
    ) {
      if (_instance.path && _instance.path.length) {
        _writer.writePackedInt32(1, _instance.path);
      }
      if (_instance.sourceFile) {
        _writer.writeString(2, _instance.sourceFile);
      }
      if (_instance.begin) {
        _writer.writeInt32(3, _instance.begin);
      }
      if (_instance.end) {
        _writer.writeInt32(4, _instance.end);
      }
    }

    private _path?: number[];
    private _sourceFile?: string;
    private _begin?: number;
    private _end?: number;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Annotation to deeply clone from
     */
    constructor(_value?: RecursivePartial<Annotation>) {
      _value = _value || {};
      this.path = (_value.path || []).slice();
      this.sourceFile = _value.sourceFile;
      this.begin = _value.begin;
      this.end = _value.end;
      Annotation.refineValues(this);
    }
    get path(): number[] | undefined {
      return this._path;
    }
    set path(value: number[] | undefined) {
      this._path = value;
    }
    get sourceFile(): string | undefined {
      return this._sourceFile;
    }
    set sourceFile(value: string | undefined) {
      this._sourceFile = value;
    }
    get begin(): number | undefined {
      return this._begin;
    }
    set begin(value: number | undefined) {
      this._begin = value;
    }
    get end(): number | undefined {
      return this._end;
    }
    set end(value: number | undefined) {
      this._end = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Annotation.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Annotation.AsObject {
      return {
        path: (this.path || []).slice(),
        sourceFile: this.sourceFile,
        begin: this.begin,
        end: this.end
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
  export module Annotation {
    /**
     * Standard JavaScript object representation for Annotation
     */
    export interface AsObject {
      path?: number[];
      sourceFile?: string;
      begin?: number;
      end?: number;
    }
  }
}
