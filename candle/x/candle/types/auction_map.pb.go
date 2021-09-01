// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: candle/auction_map.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type AuctionMap struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Index       string `protobuf:"bytes,2,opt,name=index,proto3" json:"index,omitempty"`
	BlockHeight uint64 `protobuf:"varint,3,opt,name=blockHeight,proto3" json:"blockHeight,omitempty"`
	Deadline    uint64 `protobuf:"varint,4,opt,name=deadline,proto3" json:"deadline,omitempty"`
}

func (m *AuctionMap) Reset()         { *m = AuctionMap{} }
func (m *AuctionMap) String() string { return proto.CompactTextString(m) }
func (*AuctionMap) ProtoMessage()    {}
func (*AuctionMap) Descriptor() ([]byte, []int) {
	return fileDescriptor_d526a947e9c1405e, []int{0}
}
func (m *AuctionMap) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *AuctionMap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_AuctionMap.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *AuctionMap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuctionMap.Merge(m, src)
}
func (m *AuctionMap) XXX_Size() int {
	return m.Size()
}
func (m *AuctionMap) XXX_DiscardUnknown() {
	xxx_messageInfo_AuctionMap.DiscardUnknown(m)
}

var xxx_messageInfo_AuctionMap proto.InternalMessageInfo

func (m *AuctionMap) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *AuctionMap) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *AuctionMap) GetBlockHeight() uint64 {
	if m != nil {
		return m.BlockHeight
	}
	return 0
}

func (m *AuctionMap) GetDeadline() uint64 {
	if m != nil {
		return m.Deadline
	}
	return 0
}

func init() {
	proto.RegisterType((*AuctionMap)(nil), "hello.candle.candle.AuctionMap")
}

func init() { proto.RegisterFile("candle/auction_map.proto", fileDescriptor_d526a947e9c1405e) }

var fileDescriptor_d526a947e9c1405e = []byte{
	// 219 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x48, 0x4e, 0xcc, 0x4b,
	0xc9, 0x49, 0xd5, 0x4f, 0x2c, 0x4d, 0x2e, 0xc9, 0xcc, 0xcf, 0x8b, 0xcf, 0x4d, 0x2c, 0xd0, 0x2b,
	0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0xce, 0x48, 0xcd, 0xc9, 0xc9, 0xd7, 0x83, 0xc8, 0x43, 0x29,
	0x29, 0x91, 0xf4, 0xfc, 0xf4, 0x7c, 0xb0, 0xbc, 0x3e, 0x88, 0x05, 0x51, 0xaa, 0x54, 0xc5, 0xc5,
	0xe5, 0x08, 0xd1, 0xef, 0x9b, 0x58, 0x20, 0x24, 0xc1, 0xc5, 0x9e, 0x5c, 0x94, 0x9a, 0x58, 0x92,
	0x5f, 0x24, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x19, 0x04, 0xe3, 0x0a, 0x89, 0x70, 0xb1, 0x66, 0xe6,
	0xa5, 0xa4, 0x56, 0x48, 0x30, 0x81, 0xc5, 0x21, 0x1c, 0x21, 0x05, 0x2e, 0xee, 0xa4, 0x9c, 0xfc,
	0xe4, 0x6c, 0x8f, 0xd4, 0xcc, 0xf4, 0x8c, 0x12, 0x09, 0x66, 0x05, 0x46, 0x0d, 0x96, 0x20, 0x64,
	0x21, 0x21, 0x29, 0x2e, 0x8e, 0x94, 0xd4, 0xc4, 0x94, 0x9c, 0xcc, 0xbc, 0x54, 0x09, 0x16, 0xb0,
	0x34, 0x9c, 0xef, 0xe4, 0x70, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9,
	0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70, 0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x51, 0x6a,
	0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49, 0x7a, 0xc9, 0xf9, 0xb9, 0xfa, 0x60, 0xbf, 0xe8, 0x43, 0xfd,
	0x5a, 0x01, 0x63, 0x94, 0x54, 0x16, 0xa4, 0x16, 0x27, 0xb1, 0x81, 0x3d, 0x61, 0x0c, 0x08, 0x00,
	0x00, 0xff, 0xff, 0x0a, 0x36, 0xbc, 0x3d, 0x0b, 0x01, 0x00, 0x00,
}

func (m *AuctionMap) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *AuctionMap) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *AuctionMap) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Deadline != 0 {
		i = encodeVarintAuctionMap(dAtA, i, uint64(m.Deadline))
		i--
		dAtA[i] = 0x20
	}
	if m.BlockHeight != 0 {
		i = encodeVarintAuctionMap(dAtA, i, uint64(m.BlockHeight))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintAuctionMap(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintAuctionMap(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAuctionMap(dAtA []byte, offset int, v uint64) int {
	offset -= sovAuctionMap(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *AuctionMap) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovAuctionMap(uint64(l))
	}
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovAuctionMap(uint64(l))
	}
	if m.BlockHeight != 0 {
		n += 1 + sovAuctionMap(uint64(m.BlockHeight))
	}
	if m.Deadline != 0 {
		n += 1 + sovAuctionMap(uint64(m.Deadline))
	}
	return n
}

func sovAuctionMap(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAuctionMap(x uint64) (n int) {
	return sovAuctionMap(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *AuctionMap) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuctionMap
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: AuctionMap: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: AuctionMap: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuctionMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuctionMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuctionMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuctionMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuctionMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuctionMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BlockHeight", wireType)
			}
			m.BlockHeight = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuctionMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BlockHeight |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Deadline", wireType)
			}
			m.Deadline = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuctionMap
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Deadline |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipAuctionMap(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuctionMap
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipAuctionMap(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAuctionMap
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuctionMap
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuctionMap
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthAuctionMap
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAuctionMap
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAuctionMap
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAuctionMap        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAuctionMap          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAuctionMap = fmt.Errorf("proto: unexpected end of group")
)
