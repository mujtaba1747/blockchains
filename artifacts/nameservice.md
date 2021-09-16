# Nameservice module

- Role of Block Time in auction module ?

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
