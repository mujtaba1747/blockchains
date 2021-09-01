// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: candle/results_map.proto

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

type ResultsMap struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Index   string `protobuf:"bytes,2,opt,name=index,proto3" json:"index,omitempty"`
	Winner  string `protobuf:"bytes,3,opt,name=winner,proto3" json:"winner,omitempty"`
	BidId   string `protobuf:"bytes,4,opt,name=bidId,proto3" json:"bidId,omitempty"`
}

func (m *ResultsMap) Reset()         { *m = ResultsMap{} }
func (m *ResultsMap) String() string { return proto.CompactTextString(m) }
func (*ResultsMap) ProtoMessage()    {}
func (*ResultsMap) Descriptor() ([]byte, []int) {
	return fileDescriptor_b1f8dea10f26f6ba, []int{0}
}
func (m *ResultsMap) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ResultsMap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ResultsMap.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ResultsMap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResultsMap.Merge(m, src)
}
func (m *ResultsMap) XXX_Size() int {
	return m.Size()
}
func (m *ResultsMap) XXX_DiscardUnknown() {
	xxx_messageInfo_ResultsMap.DiscardUnknown(m)
}

var xxx_messageInfo_ResultsMap proto.InternalMessageInfo

func (m *ResultsMap) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *ResultsMap) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *ResultsMap) GetWinner() string {
	if m != nil {
		return m.Winner
	}
	return ""
}

func (m *ResultsMap) GetBidId() string {
	if m != nil {
		return m.BidId
	}
	return ""
}

func init() {
	proto.RegisterType((*ResultsMap)(nil), "hello.candle.candle.ResultsMap")
}

func init() { proto.RegisterFile("candle/results_map.proto", fileDescriptor_b1f8dea10f26f6ba) }

var fileDescriptor_b1f8dea10f26f6ba = []byte{
	// 206 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x48, 0x4e, 0xcc, 0x4b,
	0xc9, 0x49, 0xd5, 0x2f, 0x4a, 0x2d, 0x2e, 0xcd, 0x29, 0x29, 0x8e, 0xcf, 0x4d, 0x2c, 0xd0, 0x2b,
	0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0xce, 0x48, 0xcd, 0xc9, 0xc9, 0xd7, 0x83, 0xc8, 0x43, 0x29,
	0x29, 0x91, 0xf4, 0xfc, 0xf4, 0x7c, 0xb0, 0xbc, 0x3e, 0x88, 0x05, 0x51, 0xaa, 0x94, 0xc5, 0xc5,
	0x15, 0x04, 0xd1, 0xef, 0x9b, 0x58, 0x20, 0x24, 0xc1, 0xc5, 0x9e, 0x5c, 0x94, 0x9a, 0x58, 0x92,
	0x5f, 0x24, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x19, 0x04, 0xe3, 0x0a, 0x89, 0x70, 0xb1, 0x66, 0xe6,
	0xa5, 0xa4, 0x56, 0x48, 0x30, 0x81, 0xc5, 0x21, 0x1c, 0x21, 0x31, 0x2e, 0xb6, 0xf2, 0xcc, 0xbc,
	0xbc, 0xd4, 0x22, 0x09, 0x66, 0xb0, 0x30, 0x94, 0x07, 0x52, 0x9d, 0x94, 0x99, 0xe2, 0x99, 0x22,
	0xc1, 0x02, 0x51, 0x0d, 0xe6, 0x38, 0x39, 0x9c, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3,
	0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c,
	0x43, 0x94, 0x5a, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0xae, 0x3e, 0xd8, 0xed,
	0xfa, 0x50, 0xbf, 0x55, 0xc0, 0x18, 0x25, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c, 0x60, 0x47, 0x1b,
	0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0x54, 0xc1, 0x99, 0xc1, 0xfb, 0x00, 0x00, 0x00,
}

func (m *ResultsMap) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ResultsMap) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ResultsMap) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BidId) > 0 {
		i -= len(m.BidId)
		copy(dAtA[i:], m.BidId)
		i = encodeVarintResultsMap(dAtA, i, uint64(len(m.BidId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Winner) > 0 {
		i -= len(m.Winner)
		copy(dAtA[i:], m.Winner)
		i = encodeVarintResultsMap(dAtA, i, uint64(len(m.Winner)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintResultsMap(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintResultsMap(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintResultsMap(dAtA []byte, offset int, v uint64) int {
	offset -= sovResultsMap(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ResultsMap) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovResultsMap(uint64(l))
	}
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovResultsMap(uint64(l))
	}
	l = len(m.Winner)
	if l > 0 {
		n += 1 + l + sovResultsMap(uint64(l))
	}
	l = len(m.BidId)
	if l > 0 {
		n += 1 + l + sovResultsMap(uint64(l))
	}
	return n
}

func sovResultsMap(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozResultsMap(x uint64) (n int) {
	return sovResultsMap(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ResultsMap) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowResultsMap
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
			return fmt.Errorf("proto: ResultsMap: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ResultsMap: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowResultsMap
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
				return ErrInvalidLengthResultsMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthResultsMap
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
					return ErrIntOverflowResultsMap
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
				return ErrInvalidLengthResultsMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthResultsMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Winner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowResultsMap
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
				return ErrInvalidLengthResultsMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthResultsMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Winner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BidId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowResultsMap
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
				return ErrInvalidLengthResultsMap
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthResultsMap
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BidId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipResultsMap(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthResultsMap
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
func skipResultsMap(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowResultsMap
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
					return 0, ErrIntOverflowResultsMap
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
					return 0, ErrIntOverflowResultsMap
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
				return 0, ErrInvalidLengthResultsMap
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupResultsMap
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthResultsMap
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthResultsMap        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowResultsMap          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupResultsMap = fmt.Errorf("proto: unexpected end of group")
)
