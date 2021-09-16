# Auction Module

- Role of Block Time in auction module ?

- Role of noise in commit/mnemonic auction 

# Nameservice module

- What is the role of VerifyBytes ?
```
type PubKey interface {
	Address() Address
	Bytes() []byte
	VerifyBytes(msg []byte, sig []byte) bool
	Equals(PubKey) bool
}
```

How is time used in nameservice module ?
```
	record.CreateTime = ctx.BlockHeader().Time
	record.ExpiryTime = ctx.BlockHeader().Time.Add(paramsRecordRentDuration)
```

- Imp: 	store := ctx.KVStore(k.storeKey)\
To store arbitrary KV pairs we have to retrieve store from keeper k
