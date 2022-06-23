// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuctionBuyOut extends ethereum.Event {
  get params(): AuctionBuyOut__Params {
    return new AuctionBuyOut__Params(this);
  }
}

export class AuctionBuyOut__Params {
  _event: AuctionBuyOut;

  constructor(event: AuctionBuyOut) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AuctionCancelled extends ethereum.Event {
  get params(): AuctionCancelled__Params {
    return new AuctionCancelled__Params(this);
  }
}

export class AuctionCancelled__Params {
  _event: AuctionCancelled;

  constructor(event: AuctionCancelled) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sellToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get sellTokenValue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get sellTokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get minimalPrice(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class AuctionFinished extends ethereum.Event {
  get params(): AuctionFinished__Params {
    return new AuctionFinished__Params(this);
  }
}

export class AuctionFinished__Params {
  _event: AuctionFinished;

  constructor(event: AuctionFinished) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class AvailableToWithdraw extends ethereum.Event {
  get params(): AvailableToWithdraw__Params {
    return new AvailableToWithdraw__Params(this);
  }
}

export class AvailableToWithdraw__Params {
  _event: AvailableToWithdraw;

  constructor(event: AvailableToWithdraw) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get added(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get total(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BidPlaced extends ethereum.Event {
  get params(): BidPlaced__Params {
    return new BidPlaced__Params(this);
  }
}

export class BidPlaced__Params {
  _event: BidPlaced;

  constructor(event: BidPlaced) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get endTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MinimalDurationChanged extends ethereum.Event {
  get params(): MinimalDurationChanged__Params {
    return new MinimalDurationChanged__Params(this);
  }
}

export class MinimalDurationChanged__Params {
  _event: MinimalDurationChanged;

  constructor(event: MinimalDurationChanged) {
    this._event = event;
  }

  get oldValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MinimalStepChanged extends ethereum.Event {
  get params(): MinimalStepChanged__Params {
    return new MinimalStepChanged__Params(this);
  }
}

export class MinimalStepChanged__Params {
  _event: MinimalStepChanged;

  constructor(event: MinimalStepChanged) {
    this._event = event;
  }

  get oldValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProtocolFeeChanged extends ethereum.Event {
  get params(): ProtocolFeeChanged__Params {
    return new ProtocolFeeChanged__Params(this);
  }
}

export class ProtocolFeeChanged__Params {
  _event: ProtocolFeeChanged;

  constructor(event: ProtocolFeeChanged) {
    this._event = event;
  }

  get oldValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ProxyChange extends ethereum.Event {
  get params(): ProxyChange__Params {
    return new ProxyChange__Params(this);
  }
}

export class ProxyChange__Params {
  _event: ProxyChange;

  constructor(event: ProxyChange) {
    this._event = event;
  }

  get assetType(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get proxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class raribletest1__auctionsResultLastBidStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get dataType(): Bytes {
    return this[1].toBytes();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }
}

export class raribletest1__auctionsResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: Address;
  value4: BigInt;
  value5: raribletest1__auctionsResultLastBidStruct;
  value6: Address;
  value7: BigInt;
  value8: Address;
  value9: BigInt;
  value10: Bytes;
  value11: Bytes;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: Address,
    value4: BigInt,
    value5: raribletest1__auctionsResultLastBidStruct,
    value6: Address,
    value7: BigInt,
    value8: Address,
    value9: BigInt,
    value10: Bytes,
    value11: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromTuple(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromFixedBytes(this.value10));
    map.set("value11", ethereum.Value.fromBytes(this.value11));
    return map;
  }

  getSellToken(): Address {
    return this.value0;
  }

  getSellTokenValue(): BigInt {
    return this.value1;
  }

  getSellTokenId(): BigInt {
    return this.value2;
  }

  getBuyAsset(): Address {
    return this.value3;
  }

  getEndTime(): BigInt {
    return this.value4;
  }

  getLastBid(): raribletest1__auctionsResultLastBidStruct {
    return this.value5;
  }

  getSeller(): Address {
    return this.value6;
  }

  getMinimalPrice(): BigInt {
    return this.value7;
  }

  getBuyer(): Address {
    return this.value8;
  }

  getProtocolFee(): BigInt {
    return this.value9;
  }

  getDataType(): Bytes {
    return this.value10;
  }

  getData(): Bytes {
    return this.value11;
  }
}

export class raribletest1 extends ethereum.SmartContract {
  static bind(address: Address): raribletest1 {
    return new raribletest1("raribletest1", address);
  }

  auctionId(): BigInt {
    let result = super.call("auctionId", "auctionId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_auctionId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("auctionId", "auctionId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctions(param0: BigInt): raribletest1__auctionsResult {
    let result = super.call(
      "auctions",
      "auctions(uint256):(address,uint96,uint256,address,uint96,(uint256,bytes4,bytes),address,uint96,address,uint64,bytes4,bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new raribletest1__auctionsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt(),
      changetype<raribletest1__auctionsResultLastBidStruct>(
        result[5].toTuple()
      ),
      result[6].toAddress(),
      result[7].toBigInt(),
      result[8].toAddress(),
      result[9].toBigInt(),
      result[10].toBytes(),
      result[11].toBytes()
    );
  }

  try_auctions(
    param0: BigInt
  ): ethereum.CallResult<raribletest1__auctionsResult> {
    let result = super.tryCall(
      "auctions",
      "auctions(uint256):(address,uint96,uint256,address,uint96,(uint256,bytes4,bytes),address,uint96,address,uint64,bytes4,bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new raribletest1__auctionsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt(),
        changetype<raribletest1__auctionsResultLastBidStruct>(
          value[5].toTuple()
        ),
        value[6].toAddress(),
        value[7].toBigInt(),
        value[8].toAddress(),
        value[9].toBigInt(),
        value[10].toBytes(),
        value[11].toBytes()
      )
    );
  }

  checkAuctionExistence(_auctionId: BigInt): boolean {
    let result = super.call(
      "checkAuctionExistence",
      "checkAuctionExistence(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );

    return result[0].toBoolean();
  }

  try_checkAuctionExistence(_auctionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkAuctionExistence",
      "checkAuctionExistence(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkAuctionRangeTime(_auctionId: BigInt): boolean {
    let result = super.call(
      "checkAuctionRangeTime",
      "checkAuctionRangeTime(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );

    return result[0].toBoolean();
  }

  try_checkAuctionRangeTime(_auctionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkAuctionRangeTime",
      "checkAuctionRangeTime(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  defaultFeeReceiver(): Address {
    let result = super.call(
      "defaultFeeReceiver",
      "defaultFeeReceiver():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_defaultFeeReceiver(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "defaultFeeReceiver",
      "defaultFeeReceiver():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeReceivers(param0: Address): Address {
    let result = super.call("feeReceivers", "feeReceivers(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_feeReceivers(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "feeReceivers",
      "feeReceivers(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCurrentBuyer(_auctionId: BigInt): Address {
    let result = super.call(
      "getCurrentBuyer",
      "getCurrentBuyer(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );

    return result[0].toAddress();
  }

  try_getCurrentBuyer(_auctionId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCurrentBuyer",
      "getCurrentBuyer(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMinimalNextBid(_auctionId: BigInt): BigInt {
    let result = super.call(
      "getMinimalNextBid",
      "getMinimalNextBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );

    return result[0].toBigInt();
  }

  try_getMinimalNextBid(_auctionId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMinimalNextBid",
      "getMinimalNextBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minimalDuration(): BigInt {
    let result = super.call(
      "minimalDuration",
      "minimalDuration():(uint96)",
      []
    );

    return result[0].toBigInt();
  }

  try_minimalDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minimalDuration",
      "minimalDuration():(uint96)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minimalStepBasePoint(): BigInt {
    let result = super.call(
      "minimalStepBasePoint",
      "minimalStepBasePoint():(uint96)",
      []
    );

    return result[0].toBigInt();
  }

  try_minimalStepBasePoint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minimalStepBasePoint",
      "minimalStepBasePoint():(uint96)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  protocolFee(): BigInt {
    let result = super.call("protocolFee", "protocolFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_protocolFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("protocolFee", "protocolFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  royaltiesRegistry(): Address {
    let result = super.call(
      "royaltiesRegistry",
      "royaltiesRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_royaltiesRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "royaltiesRegistry",
      "royaltiesRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class __AuctionHouse1155_initCall extends ethereum.Call {
  get inputs(): __AuctionHouse1155_initCall__Inputs {
    return new __AuctionHouse1155_initCall__Inputs(this);
  }

  get outputs(): __AuctionHouse1155_initCall__Outputs {
    return new __AuctionHouse1155_initCall__Outputs(this);
  }
}

export class __AuctionHouse1155_initCall__Inputs {
  _call: __AuctionHouse1155_initCall;

  constructor(call: __AuctionHouse1155_initCall) {
    this._call = call;
  }

  get newDefaultFeeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newRoyaltiesProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _transferProxy(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _erc20TransferProxy(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get newProtocolFee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _minimalStepBasePoint(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class __AuctionHouse1155_initCall__Outputs {
  _call: __AuctionHouse1155_initCall;

  constructor(call: __AuctionHouse1155_initCall) {
    this._call = call;
  }
}

export class BuyOutCall extends ethereum.Call {
  get inputs(): BuyOutCall__Inputs {
    return new BuyOutCall__Inputs(this);
  }

  get outputs(): BuyOutCall__Outputs {
    return new BuyOutCall__Outputs(this);
  }
}

export class BuyOutCall__Inputs {
  _call: BuyOutCall;

  constructor(call: BuyOutCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bid(): BuyOutCallBidStruct {
    return changetype<BuyOutCallBidStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class BuyOutCall__Outputs {
  _call: BuyOutCall;

  constructor(call: BuyOutCall) {
    this._call = call;
  }
}

export class BuyOutCallBidStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get dataType(): Bytes {
    return this[1].toBytes();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class ChangeMinimalDurationCall extends ethereum.Call {
  get inputs(): ChangeMinimalDurationCall__Inputs {
    return new ChangeMinimalDurationCall__Inputs(this);
  }

  get outputs(): ChangeMinimalDurationCall__Outputs {
    return new ChangeMinimalDurationCall__Outputs(this);
  }
}

export class ChangeMinimalDurationCall__Inputs {
  _call: ChangeMinimalDurationCall;

  constructor(call: ChangeMinimalDurationCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeMinimalDurationCall__Outputs {
  _call: ChangeMinimalDurationCall;

  constructor(call: ChangeMinimalDurationCall) {
    this._call = call;
  }
}

export class ChangeMinimalStepCall extends ethereum.Call {
  get inputs(): ChangeMinimalStepCall__Inputs {
    return new ChangeMinimalStepCall__Inputs(this);
  }

  get outputs(): ChangeMinimalStepCall__Outputs {
    return new ChangeMinimalStepCall__Outputs(this);
  }
}

export class ChangeMinimalStepCall__Inputs {
  _call: ChangeMinimalStepCall;

  constructor(call: ChangeMinimalStepCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeMinimalStepCall__Outputs {
  _call: ChangeMinimalStepCall;

  constructor(call: ChangeMinimalStepCall) {
    this._call = call;
  }
}

export class FinishAuctionCall extends ethereum.Call {
  get inputs(): FinishAuctionCall__Inputs {
    return new FinishAuctionCall__Inputs(this);
  }

  get outputs(): FinishAuctionCall__Outputs {
    return new FinishAuctionCall__Outputs(this);
  }
}

export class FinishAuctionCall__Inputs {
  _call: FinishAuctionCall;

  constructor(call: FinishAuctionCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FinishAuctionCall__Outputs {
  _call: FinishAuctionCall;

  constructor(call: FinishAuctionCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PutBidCall extends ethereum.Call {
  get inputs(): PutBidCall__Inputs {
    return new PutBidCall__Inputs(this);
  }

  get outputs(): PutBidCall__Outputs {
    return new PutBidCall__Outputs(this);
  }
}

export class PutBidCall__Inputs {
  _call: PutBidCall;

  constructor(call: PutBidCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bid(): PutBidCallBidStruct {
    return changetype<PutBidCallBidStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class PutBidCall__Outputs {
  _call: PutBidCall;

  constructor(call: PutBidCall) {
    this._call = call;
  }
}

export class PutBidCallBidStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get dataType(): Bytes {
    return this[1].toBytes();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDefaultFeeReceiverCall extends ethereum.Call {
  get inputs(): SetDefaultFeeReceiverCall__Inputs {
    return new SetDefaultFeeReceiverCall__Inputs(this);
  }

  get outputs(): SetDefaultFeeReceiverCall__Outputs {
    return new SetDefaultFeeReceiverCall__Outputs(this);
  }
}

export class SetDefaultFeeReceiverCall__Inputs {
  _call: SetDefaultFeeReceiverCall;

  constructor(call: SetDefaultFeeReceiverCall) {
    this._call = call;
  }

  get newDefaultFeeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDefaultFeeReceiverCall__Outputs {
  _call: SetDefaultFeeReceiverCall;

  constructor(call: SetDefaultFeeReceiverCall) {
    this._call = call;
  }
}

export class SetFeeReceiverCall extends ethereum.Call {
  get inputs(): SetFeeReceiverCall__Inputs {
    return new SetFeeReceiverCall__Inputs(this);
  }

  get outputs(): SetFeeReceiverCall__Outputs {
    return new SetFeeReceiverCall__Outputs(this);
  }
}

export class SetFeeReceiverCall__Inputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetFeeReceiverCall__Outputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }
}

export class SetProtocolFeeCall extends ethereum.Call {
  get inputs(): SetProtocolFeeCall__Inputs {
    return new SetProtocolFeeCall__Inputs(this);
  }

  get outputs(): SetProtocolFeeCall__Outputs {
    return new SetProtocolFeeCall__Outputs(this);
  }
}

export class SetProtocolFeeCall__Inputs {
  _call: SetProtocolFeeCall;

  constructor(call: SetProtocolFeeCall) {
    this._call = call;
  }

  get _protocolFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetProtocolFeeCall__Outputs {
  _call: SetProtocolFeeCall;

  constructor(call: SetProtocolFeeCall) {
    this._call = call;
  }
}

export class SetRoyaltiesRegistryCall extends ethereum.Call {
  get inputs(): SetRoyaltiesRegistryCall__Inputs {
    return new SetRoyaltiesRegistryCall__Inputs(this);
  }

  get outputs(): SetRoyaltiesRegistryCall__Outputs {
    return new SetRoyaltiesRegistryCall__Outputs(this);
  }
}

export class SetRoyaltiesRegistryCall__Inputs {
  _call: SetRoyaltiesRegistryCall;

  constructor(call: SetRoyaltiesRegistryCall) {
    this._call = call;
  }

  get newRoyaltiesRegistry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRoyaltiesRegistryCall__Outputs {
  _call: SetRoyaltiesRegistryCall;

  constructor(call: SetRoyaltiesRegistryCall) {
    this._call = call;
  }
}

export class SetTransferProxyCall extends ethereum.Call {
  get inputs(): SetTransferProxyCall__Inputs {
    return new SetTransferProxyCall__Inputs(this);
  }

  get outputs(): SetTransferProxyCall__Outputs {
    return new SetTransferProxyCall__Outputs(this);
  }
}

export class SetTransferProxyCall__Inputs {
  _call: SetTransferProxyCall;

  constructor(call: SetTransferProxyCall) {
    this._call = call;
  }

  get assetType(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get proxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetTransferProxyCall__Outputs {
  _call: SetTransferProxyCall;

  constructor(call: SetTransferProxyCall) {
    this._call = call;
  }
}

export class StartAuctionCall extends ethereum.Call {
  get inputs(): StartAuctionCall__Inputs {
    return new StartAuctionCall__Inputs(this);
  }

  get outputs(): StartAuctionCall__Outputs {
    return new StartAuctionCall__Outputs(this);
  }
}

export class StartAuctionCall__Inputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }

  get _sellToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sellTokenValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _sellTokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _buyAsset(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get minimalPrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get dataType(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get data(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class StartAuctionCall__Outputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawFaultyBidCall extends ethereum.Call {
  get inputs(): WithdrawFaultyBidCall__Inputs {
    return new WithdrawFaultyBidCall__Inputs(this);
  }

  get outputs(): WithdrawFaultyBidCall__Outputs {
    return new WithdrawFaultyBidCall__Outputs(this);
  }
}

export class WithdrawFaultyBidCall__Inputs {
  _call: WithdrawFaultyBidCall;

  constructor(call: WithdrawFaultyBidCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawFaultyBidCall__Outputs {
  _call: WithdrawFaultyBidCall;

  constructor(call: WithdrawFaultyBidCall) {
    this._call = call;
  }
}