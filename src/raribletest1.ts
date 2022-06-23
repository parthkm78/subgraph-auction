import { BigInt, ethereum, log, Bytes } from "@graphprotocol/graph-ts"
import {
  raribletest1,
  AuctionBuyOut,
  AuctionCancelled,
  AuctionCreated,
  AuctionFinished,
  AvailableToWithdraw,
  BidPlaced,
  MinimalDurationChanged,
  MinimalStepChanged,
  OwnershipTransferred,
  ProtocolFeeChanged,
  ProxyChange
} from "../generated/raribletest1/raribletest1"
import { Auction , Bid} from "../generated/schema"

//import  Web3 from "web3";
//var web3 = new Web3(new Web3.providers.HttpProvider('https://eth-rinkeby.alchemyapi.io/v2/J-75mMbOnsl1p1HZaapuhSCA8B_v_dp4')); // your web3 provider

function getTxnInputDataToDecode(event: AuctionCreated): Bytes {
  const inputDataHexString = event.params.data.slice(10); //take away function signature: '0x????????'
  const hexStringToDecode = '0x0000000000000000000000000000000000000000000000000000000000000020' + inputDataHexString.toString(); // prepend tuple offset
  return Bytes.fromByteArray(Bytes.fromHexString(hexStringToDecode));
}

export function handleAuctionBuyOut(event: AuctionBuyOut): void {

  let auctionObj = Auction.load(event.params.auctionId.toHex())
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  // if (!auctionObj) {
  //  // throw exception
  // }
  
  if(auctionObj)
  {
  
  // BigInt and BigDecimal math are supported
 // auctionObj.bidCount = auctionObj.bidCount  + BigInt.fromI32(1)  
  auctionObj.status = "BUYOUT";
  auctionObj.buyer = event.params.buyer
 // auctionObj.creator = event.params.seller;
  // Entities can be written to the store with `.save()`
  auctionObj.save()
  }
}

export function handleAuctionCancelled(event: AuctionCancelled): void {
// Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let auctionObj = Auction.load(event.params.auctionId.toHex())
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  // if (!auctionObj) {
  //  // throw exception
  // }
  

  // BigInt and BigDecimal math are supported
 // auctionObj.bidCount = auctionObj.bidCount  + BigInt.fromI32(1)  
  if(auctionObj)
  {
  auctionObj.status = "CANCELLED";
 // auctionObj.creator = event.params.seller;
  // Entities can be written to the store with `.save()`
  auctionObj.save()
  }
}

export function handleAuctionCreated(event: AuctionCreated): void {

  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let auctionObj = Auction.load(event.params.auctionId.toHex())
  let count = 0
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!auctionObj) {
    auctionObj = new Auction(event.params.auctionId.toHex())

    // auctionObj fields can be set using simple assignments
    auctionObj.bidCount = BigInt.fromI32(0)
  }
  log.info(":",['1']);

  // BigInt and BigDecimal math are supported
 // auctionObj.bidCount = auctionObj.bidCount  + BigInt.fromI32(1)  
  auctionObj.auctionId = event.params.auctionId;
  auctionObj.creator = event.params.seller;
  auctionObj.sellToken = event.params.sellToken
  auctionObj.sellTokenId=event.params.sellTokenId
  auctionObj.sellTokenValue=event.params.sellTokenValue
  auctionObj.minimalPrice=event.params.minimalPrice
  auctionObj.data=event.params.data
  auctionObj.status="ONGOING"
  auctionObj.logIndex = event.logIndex.toString()

  
  const typestring = '(uint256,uint96,uint96,uint96)';
  const decoded = ethereum.decode(typestring, event.params.data);
  
  log.info(":",['3']);
  if(decoded)
  {
    log.info(":",['4']);
    auctionObj.originFees = decoded.toTuple()[0].toBigInt()
    auctionObj.duration= decoded.toTuple()[1].toBigInt()
    auctionObj.startTime= decoded.toTuple()[2].toBigInt()
    auctionObj.buyoutPrice= decoded.toTuple()[3].toBigInt()
    if(event.params.minimalPrice== decoded.toTuple()[3].toBigInt())
    {
      auctionObj.auctionType = "FIXED_PRICE"
    }
    else{
      auctionObj.auctionType = "AUCTION"
    }
// log.info("decode:",[decoded.toTuple()[0].toString()]);
  } 
  log.info(":",['5']);
 //ethereum.call("marketPlace","0xf20AE8dd0762a3065f2D392dBB7037bd8C9162eA","decode","d", [event.params.data.toString()])

  // contractName: string
  // contractAddress: Address
  // functionName: string
  // functionSignature: string
  // functionParams: Array<Valu

  // const dataToDecode = getTxnInputDataToDecode(event)
  // const decoded = ethereum.decode('(uint256, uint96, uint96, uint96)', dataToDecode);
  // if(decoded)
  // log.info('First field: {}', [decoded.toTuple()[0].toString()]);

  //auctionObj.originFees= event.transaction.hash.toString()
 
  // Entities can be written to the store with `.save()`
  auctionObj.save()
}

export function handleAuctionFinished(event: AuctionFinished): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let auctionObj = Auction.load(event.params.auctionId.toHex())
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!auctionObj) {
   // throw exception
  }
  
  if(auctionObj)
  {
  
  // BigInt and BigDecimal math are supported
 // auctionObj.bidCount = auctionObj.bidCount  + BigInt.fromI32(1)  
  auctionObj.status = "FINISHED";
 // auctionObj.creator = event.params.seller;
  // Entities can be written to the store with `.save()`
  auctionObj.save()
  }
}

export function handleAvailableToWithdraw(event: AvailableToWithdraw): void {}

export function handleBidPlaced(event: BidPlaced): void {
  let auctionObj = Auction.load(event.params.auctionId.toHex())
  
  if (auctionObj) {
   
    let bidObj = new Bid(event.transaction.from.toHex())
  
    bidObj.bidder= event.params.buyer
    bidObj.auctionId = event.params.auctionId
    bidObj.endTime =  event.params.endTime
    bidObj.amount = event.params.newAmount
    bidObj.save()

    auctionObj.buyer = event.params.buyer
    auctionObj.save()
  }
}

export function handleMinimalDurationChanged(
  event: MinimalDurationChanged
): void {

//  // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let auctionObj = Auction.load(event.params.auctionId.toHex())
//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   // if (!auctionObj) {
//   //  // throw exception
//   // }
  

//   // BigInt and BigDecimal math are supported
//  // auctionObj.bidCount = auctionObj.bidCount  + BigInt.fromI32(1)  
//   auctionObj?.status = "CANCELLED";
//  // auctionObj.creator = event.params.seller;
//   // Entities can be written to the store with `.save()`
//   auctionObj.save()
}

export function handleMinimalStepChanged(event: MinimalStepChanged): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProtocolFeeChanged(event: ProtocolFeeChanged): void {}

export function handleProxyChange(event: ProxyChange): void {}
