var SVBinParserBrowser = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // assets/js/parsers/sv-bin-parser.browser.ts
  var sv_bin_parser_browser_exports = {};
  __export(sv_bin_parser_browser_exports, {
    parsePersonalBinary: () => parsePersonalBinary,
    parseTrainersBinary: () => parseTrainersBinary
  });

  // node_modules/flatbuffers/mjs/constants.js
  var SIZEOF_INT = 4;
  var FILE_IDENTIFIER_LENGTH = 4;
  var SIZE_PREFIX_LENGTH = 4;

  // node_modules/flatbuffers/mjs/utils.js
  var int32 = new Int32Array(2);
  var float32 = new Float32Array(int32.buffer);
  var float64 = new Float64Array(int32.buffer);
  var isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;

  // node_modules/flatbuffers/mjs/encoding.js
  var Encoding;
  (function(Encoding2) {
    Encoding2[Encoding2["UTF8_BYTES"] = 1] = "UTF8_BYTES";
    Encoding2[Encoding2["UTF16_STRING"] = 2] = "UTF16_STRING";
  })(Encoding || (Encoding = {}));

  // node_modules/flatbuffers/mjs/byte-buffer.js
  var ByteBuffer = class _ByteBuffer {
    /**
     * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
     */
    constructor(bytes_) {
      this.bytes_ = bytes_;
      this.position_ = 0;
      this.text_decoder_ = new TextDecoder();
    }
    /**
     * Create and allocate a new ByteBuffer with a given size.
     */
    static allocate(byte_size) {
      return new _ByteBuffer(new Uint8Array(byte_size));
    }
    clear() {
      this.position_ = 0;
    }
    /**
     * Get the underlying `Uint8Array`.
     */
    bytes() {
      return this.bytes_;
    }
    /**
     * Get the buffer's position.
     */
    position() {
      return this.position_;
    }
    /**
     * Set the buffer's position.
     */
    setPosition(position) {
      this.position_ = position;
    }
    /**
     * Get the buffer's capacity.
     */
    capacity() {
      return this.bytes_.length;
    }
    readInt8(offset) {
      return this.readUint8(offset) << 24 >> 24;
    }
    readUint8(offset) {
      return this.bytes_[offset];
    }
    readInt16(offset) {
      return this.readUint16(offset) << 16 >> 16;
    }
    readUint16(offset) {
      return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
    }
    readInt32(offset) {
      return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
    }
    readUint32(offset) {
      return this.readInt32(offset) >>> 0;
    }
    readInt64(offset) {
      return BigInt.asIntN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
    }
    readUint64(offset) {
      return BigInt.asUintN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
    }
    readFloat32(offset) {
      int32[0] = this.readInt32(offset);
      return float32[0];
    }
    readFloat64(offset) {
      int32[isLittleEndian ? 0 : 1] = this.readInt32(offset);
      int32[isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
      return float64[0];
    }
    writeInt8(offset, value) {
      this.bytes_[offset] = value;
    }
    writeUint8(offset, value) {
      this.bytes_[offset] = value;
    }
    writeInt16(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
    }
    writeUint16(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
    }
    writeInt32(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
      this.bytes_[offset + 2] = value >> 16;
      this.bytes_[offset + 3] = value >> 24;
    }
    writeUint32(offset, value) {
      this.bytes_[offset] = value;
      this.bytes_[offset + 1] = value >> 8;
      this.bytes_[offset + 2] = value >> 16;
      this.bytes_[offset + 3] = value >> 24;
    }
    writeInt64(offset, value) {
      this.writeInt32(offset, Number(BigInt.asIntN(32, value)));
      this.writeInt32(offset + 4, Number(BigInt.asIntN(32, value >> BigInt(32))));
    }
    writeUint64(offset, value) {
      this.writeUint32(offset, Number(BigInt.asUintN(32, value)));
      this.writeUint32(offset + 4, Number(BigInt.asUintN(32, value >> BigInt(32))));
    }
    writeFloat32(offset, value) {
      float32[0] = value;
      this.writeInt32(offset, int32[0]);
    }
    writeFloat64(offset, value) {
      float64[0] = value;
      this.writeInt32(offset, int32[isLittleEndian ? 0 : 1]);
      this.writeInt32(offset + 4, int32[isLittleEndian ? 1 : 0]);
    }
    /**
     * Return the file identifier.   Behavior is undefined for FlatBuffers whose
     * schema does not include a file_identifier (likely points at padding or the
     * start of a the root vtable).
     */
    getBufferIdentifier() {
      if (this.bytes_.length < this.position_ + SIZEOF_INT + FILE_IDENTIFIER_LENGTH) {
        throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
      }
      let result = "";
      for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
        result += String.fromCharCode(this.readInt8(this.position_ + SIZEOF_INT + i));
      }
      return result;
    }
    /**
     * Look up a field in the vtable, return an offset into the object, or 0 if the
     * field is not present.
     */
    __offset(bb_pos, vtable_offset) {
      const vtable = bb_pos - this.readInt32(bb_pos);
      return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
    }
    /**
     * Initialize any Table-derived type to point to the union at the given offset.
     */
    __union(t, offset) {
      t.bb_pos = offset + this.readInt32(offset);
      t.bb = this;
      return t;
    }
    /**
     * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
     * This allocates a new string and converts to wide chars upon each access.
     *
     * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
     * "optionalEncoding" argument. This is useful for avoiding conversion when
     * the data will just be packaged back up in another FlatBuffer later on.
     *
     * @param offset
     * @param opt_encoding Defaults to UTF16_STRING
     */
    __string(offset, opt_encoding) {
      offset += this.readInt32(offset);
      const length = this.readInt32(offset);
      offset += SIZEOF_INT;
      const utf8bytes = this.bytes_.subarray(offset, offset + length);
      if (opt_encoding === Encoding.UTF8_BYTES)
        return utf8bytes;
      else
        return this.text_decoder_.decode(utf8bytes);
    }
    /**
     * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
     * if a string then return a new one
     *
     * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
     * makes the behaviour of __union_with_string different compared to __union
     */
    __union_with_string(o, offset) {
      if (typeof o === "string") {
        return this.__string(offset);
      }
      return this.__union(o, offset);
    }
    /**
     * Retrieve the relative offset stored at "offset"
     */
    __indirect(offset) {
      return offset + this.readInt32(offset);
    }
    /**
     * Get the start of data of a vector whose offset is stored at "offset" in this object.
     */
    __vector(offset) {
      return offset + this.readInt32(offset) + SIZEOF_INT;
    }
    /**
     * Get the length of a vector whose offset is stored at "offset" in this object.
     */
    __vector_len(offset) {
      return this.readInt32(offset + this.readInt32(offset));
    }
    __has_identifier(ident) {
      if (ident.length != FILE_IDENTIFIER_LENGTH) {
        throw new Error("FlatBuffers: file identifier must be length " + FILE_IDENTIFIER_LENGTH);
      }
      for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
        if (ident.charCodeAt(i) != this.readInt8(this.position() + SIZEOF_INT + i)) {
          return false;
        }
      }
      return true;
    }
    /**
     * A helper function for generating list for obj api
     */
    createScalarList(listAccessor, listLength) {
      const ret = [];
      for (let i = 0; i < listLength; ++i) {
        const val = listAccessor(i);
        if (val !== null) {
          ret.push(val);
        }
      }
      return ret;
    }
    /**
     * A helper function for generating list for obj api
     * @param listAccessor function that accepts an index and return data at that index
     * @param listLength listLength
     * @param res result list
     */
    createObjList(listAccessor, listLength) {
      const ret = [];
      for (let i = 0; i < listLength; ++i) {
        const val = listAccessor(i);
        if (val !== null) {
          ret.push(val.unpack());
        }
      }
      return ret;
    }
  };

  // tmp_sv_schema/ball-type.ts
  var BallType = /* @__PURE__ */ ((BallType2) => {
    BallType2[BallType2["NONE"] = 0] = "NONE";
    BallType2[BallType2["MASUTAABOORU"] = 1] = "MASUTAABOORU";
    BallType2[BallType2["HAIPAABOORU"] = 2] = "HAIPAABOORU";
    BallType2[BallType2["SUUPAABOORU"] = 3] = "SUUPAABOORU";
    BallType2[BallType2["MONSUTAABOORU"] = 4] = "MONSUTAABOORU";
    BallType2[BallType2["SAFARIBOORU"] = 5] = "SAFARIBOORU";
    BallType2[BallType2["NETTOBOORU"] = 6] = "NETTOBOORU";
    BallType2[BallType2["DAIBUBOORU"] = 7] = "DAIBUBOORU";
    BallType2[BallType2["NESUTOBOORU"] = 8] = "NESUTOBOORU";
    BallType2[BallType2["RIPIITOBOORU"] = 9] = "RIPIITOBOORU";
    BallType2[BallType2["TAIMAABOORU"] = 10] = "TAIMAABOORU";
    BallType2[BallType2["GOOZYASUBOORU"] = 11] = "GOOZYASUBOORU";
    BallType2[BallType2["PUREMIABOORU"] = 12] = "PUREMIABOORU";
    BallType2[BallType2["DAAKUBOORU"] = 13] = "DAAKUBOORU";
    BallType2[BallType2["HIIRUBOORU"] = 14] = "HIIRUBOORU";
    BallType2[BallType2["KUIKKUBOORU"] = 15] = "KUIKKUBOORU";
    BallType2[BallType2["PURESYASUBOORU"] = 16] = "PURESYASUBOORU";
    BallType2[BallType2["SUPIIDOBOORU"] = 17] = "SUPIIDOBOORU";
    BallType2[BallType2["REBERUBOORU"] = 18] = "REBERUBOORU";
    BallType2[BallType2["RUAABOORU"] = 19] = "RUAABOORU";
    BallType2[BallType2["HEBIIBOORU"] = 20] = "HEBIIBOORU";
    BallType2[BallType2["RABURABUBOORU"] = 21] = "RABURABUBOORU";
    BallType2[BallType2["HURENDOBOORU"] = 22] = "HURENDOBOORU";
    BallType2[BallType2["MUUNBOORU"] = 23] = "MUUNBOORU";
    BallType2[BallType2["KONPEBOORU"] = 24] = "KONPEBOORU";
    BallType2[BallType2["DORIIMUBOORU"] = 25] = "DORIIMUBOORU";
    BallType2[BallType2["URUTORABOORU"] = 26] = "URUTORABOORU";
    return BallType2;
  })(BallType || {});

  // tmp_sv_schema/gem-type.ts
  var GemType = /* @__PURE__ */ ((GemType2) => {
    GemType2[GemType2["DEFAULT"] = 0] = "DEFAULT";
    GemType2[GemType2["RANDOM"] = 1] = "RANDOM";
    GemType2[GemType2["NORMAL"] = 2] = "NORMAL";
    GemType2[GemType2["KAKUTOU"] = 3] = "KAKUTOU";
    GemType2[GemType2["HIKOU"] = 4] = "HIKOU";
    GemType2[GemType2["DOKU"] = 5] = "DOKU";
    GemType2[GemType2["JIMEN"] = 6] = "JIMEN";
    GemType2[GemType2["IWA"] = 7] = "IWA";
    GemType2[GemType2["MUSHI"] = 8] = "MUSHI";
    GemType2[GemType2["GHOST"] = 9] = "GHOST";
    GemType2[GemType2["HAGANE"] = 10] = "HAGANE";
    GemType2[GemType2["HONOO"] = 11] = "HONOO";
    GemType2[GemType2["MIZU"] = 12] = "MIZU";
    GemType2[GemType2["KUSA"] = 13] = "KUSA";
    GemType2[GemType2["DENKI"] = 14] = "DENKI";
    GemType2[GemType2["ESPER"] = 15] = "ESPER";
    GemType2[GemType2["KOORI"] = 16] = "KOORI";
    GemType2[GemType2["DRAGON"] = 17] = "DRAGON";
    GemType2[GemType2["AKU"] = 18] = "AKU";
    GemType2[GemType2["FAIRY"] = 19] = "FAIRY";
    return GemType2;
  })(GemType || {});

  // tmp_sv_schema/item-id.ts
  var ItemID = /* @__PURE__ */ ((ItemID2) => {
    ItemID2[ItemID2["ITEMID_NONE"] = 0] = "ITEMID_NONE";
    ItemID2[ItemID2["ITEMID_MASUTAABOORU"] = 1] = "ITEMID_MASUTAABOORU";
    ItemID2[ItemID2["ITEMID_HAIPAABOORU"] = 2] = "ITEMID_HAIPAABOORU";
    ItemID2[ItemID2["ITEMID_SUUPAABOORU"] = 3] = "ITEMID_SUUPAABOORU";
    ItemID2[ItemID2["ITEMID_MONSUTAABOORU"] = 4] = "ITEMID_MONSUTAABOORU";
    ItemID2[ItemID2["ITEMID_SAFARIBOORU"] = 5] = "ITEMID_SAFARIBOORU";
    ItemID2[ItemID2["ITEMID_NETTOBOORU"] = 6] = "ITEMID_NETTOBOORU";
    ItemID2[ItemID2["ITEMID_DAIBUBOORU"] = 7] = "ITEMID_DAIBUBOORU";
    ItemID2[ItemID2["ITEMID_NESUTOBOORU"] = 8] = "ITEMID_NESUTOBOORU";
    ItemID2[ItemID2["ITEMID_RIPIITOBOORU"] = 9] = "ITEMID_RIPIITOBOORU";
    ItemID2[ItemID2["ITEMID_TAIMAABOORU"] = 10] = "ITEMID_TAIMAABOORU";
    ItemID2[ItemID2["ITEMID_GOOZYASUBOORU"] = 11] = "ITEMID_GOOZYASUBOORU";
    ItemID2[ItemID2["ITEMID_PUREMIABOORU"] = 12] = "ITEMID_PUREMIABOORU";
    ItemID2[ItemID2["ITEMID_DAAKUBOORU"] = 13] = "ITEMID_DAAKUBOORU";
    ItemID2[ItemID2["ITEMID_HIIRUBOORU"] = 14] = "ITEMID_HIIRUBOORU";
    ItemID2[ItemID2["ITEMID_KUIKKUBOORU"] = 15] = "ITEMID_KUIKKUBOORU";
    ItemID2[ItemID2["ITEMID_KIZUGUSURI"] = 17] = "ITEMID_KIZUGUSURI";
    ItemID2[ItemID2["ITEMID_DOKUKESI"] = 18] = "ITEMID_DOKUKESI";
    ItemID2[ItemID2["ITEMID_YAKEDONAOSI"] = 19] = "ITEMID_YAKEDONAOSI";
    ItemID2[ItemID2["ITEMID_KOORINAOSI"] = 20] = "ITEMID_KOORINAOSI";
    ItemID2[ItemID2["ITEMID_NEMUKEZAMASI"] = 21] = "ITEMID_NEMUKEZAMASI";
    ItemID2[ItemID2["ITEMID_MAHINAOSI"] = 22] = "ITEMID_MAHINAOSI";
    ItemID2[ItemID2["ITEMID_KAIHUKUNOKUSURI"] = 23] = "ITEMID_KAIHUKUNOKUSURI";
    ItemID2[ItemID2["ITEMID_MANTANNOKUSURI"] = 24] = "ITEMID_MANTANNOKUSURI";
    ItemID2[ItemID2["ITEMID_SUGOIKIZUGUSURI"] = 25] = "ITEMID_SUGOIKIZUGUSURI";
    ItemID2[ItemID2["ITEMID_IIKIZUGUSURI"] = 26] = "ITEMID_IIKIZUGUSURI";
    ItemID2[ItemID2["ITEMID_NANDEMONAOSI"] = 27] = "ITEMID_NANDEMONAOSI";
    ItemID2[ItemID2["ITEMID_GENKINOKAKERA"] = 28] = "ITEMID_GENKINOKAKERA";
    ItemID2[ItemID2["ITEMID_GENKINOKATAMARI"] = 29] = "ITEMID_GENKINOKATAMARI";
    ItemID2[ItemID2["ITEMID_OISIIMIZU"] = 30] = "ITEMID_OISIIMIZU";
    ItemID2[ItemID2["ITEMID_SAIKOSOODA"] = 31] = "ITEMID_SAIKOSOODA";
    ItemID2[ItemID2["ITEMID_MIKKUSUORE"] = 32] = "ITEMID_MIKKUSUORE";
    ItemID2[ItemID2["ITEMID_MOOMOOMIRUKU"] = 33] = "ITEMID_MOOMOOMIRUKU";
    ItemID2[ItemID2["ITEMID_TIKARANOKONA"] = 34] = "ITEMID_TIKARANOKONA";
    ItemID2[ItemID2["ITEMID_TIKARANONEKKO"] = 35] = "ITEMID_TIKARANONEKKO";
    ItemID2[ItemID2["ITEMID_BANNOUGONA"] = 36] = "ITEMID_BANNOUGONA";
    ItemID2[ItemID2["ITEMID_HUKKATUSOU"] = 37] = "ITEMID_HUKKATUSOU";
    ItemID2[ItemID2["ITEMID_PIIPIIEIDO"] = 38] = "ITEMID_PIIPIIEIDO";
    ItemID2[ItemID2["ITEMID_PIIPIIRIKABAA"] = 39] = "ITEMID_PIIPIIRIKABAA";
    ItemID2[ItemID2["ITEMID_PIIPIIEIDAA"] = 40] = "ITEMID_PIIPIIEIDAA";
    ItemID2[ItemID2["ITEMID_PIIPIIMAKKUSU"] = 41] = "ITEMID_PIIPIIMAKKUSU";
    ItemID2[ItemID2["ITEMID_MAKKUSUAPPU"] = 45] = "ITEMID_MAKKUSUAPPU";
    ItemID2[ItemID2["ITEMID_TAURIN"] = 46] = "ITEMID_TAURIN";
    ItemID2[ItemID2["ITEMID_BUROMUHEKISIN"] = 47] = "ITEMID_BUROMUHEKISIN";
    ItemID2[ItemID2["ITEMID_INDOMETASIN"] = 48] = "ITEMID_INDOMETASIN";
    ItemID2[ItemID2["ITEMID_RIZOTIUMU"] = 49] = "ITEMID_RIZOTIUMU";
    ItemID2[ItemID2["ITEMID_HUSIGINAAME"] = 50] = "ITEMID_HUSIGINAAME";
    ItemID2[ItemID2["ITEMID_POINTOAPPU"] = 51] = "ITEMID_POINTOAPPU";
    ItemID2[ItemID2["ITEMID_KITOSAN"] = 52] = "ITEMID_KITOSAN";
    ItemID2[ItemID2["ITEMID_POINTOMAKKUSU"] = 53] = "ITEMID_POINTOMAKKUSU";
    ItemID2[ItemID2["ITEMID_EFEKUTOGAADO"] = 55] = "ITEMID_EFEKUTOGAADO";
    ItemID2[ItemID2["ITEMID_KURITHIKATTO"] = 56] = "ITEMID_KURITHIKATTO";
    ItemID2[ItemID2["ITEMID_PURASUPAWAA"] = 57] = "ITEMID_PURASUPAWAA";
    ItemID2[ItemID2["ITEMID_DHIFENDAA"] = 58] = "ITEMID_DHIFENDAA";
    ItemID2[ItemID2["ITEMID_SUPIIDAA"] = 59] = "ITEMID_SUPIIDAA";
    ItemID2[ItemID2["ITEMID_YOKUATAARU"] = 60] = "ITEMID_YOKUATAARU";
    ItemID2[ItemID2["ITEMID_SUPESYARUAPPU"] = 61] = "ITEMID_SUPESYARUAPPU";
    ItemID2[ItemID2["ITEMID_SUPESYARUGAADO"] = 62] = "ITEMID_SUPESYARUGAADO";
    ItemID2[ItemID2["ITEMID_PIPPININGYOU"] = 63] = "ITEMID_PIPPININGYOU";
    ItemID2[ItemID2["ITEMID_TAIYOUNOISI"] = 80] = "ITEMID_TAIYOUNOISI";
    ItemID2[ItemID2["ITEMID_TUKINOISI"] = 81] = "ITEMID_TUKINOISI";
    ItemID2[ItemID2["ITEMID_HONOONOISI"] = 82] = "ITEMID_HONOONOISI";
    ItemID2[ItemID2["ITEMID_KAMINARINOISI"] = 83] = "ITEMID_KAMINARINOISI";
    ItemID2[ItemID2["ITEMID_MIZUNOISI"] = 84] = "ITEMID_MIZUNOISI";
    ItemID2[ItemID2["ITEMID_RIIHUNOISI"] = 85] = "ITEMID_RIIHUNOISI";
    ItemID2[ItemID2["ITEMID_TIISANAKINOKO"] = 86] = "ITEMID_TIISANAKINOKO";
    ItemID2[ItemID2["ITEMID_OOKINAKINOKO"] = 87] = "ITEMID_OOKINAKINOKO";
    ItemID2[ItemID2["ITEMID_SINZYU"] = 88] = "ITEMID_SINZYU";
    ItemID2[ItemID2["ITEMID_OOKINASINZYU"] = 89] = "ITEMID_OOKINASINZYU";
    ItemID2[ItemID2["ITEMID_HOSINOSUNA"] = 90] = "ITEMID_HOSINOSUNA";
    ItemID2[ItemID2["ITEMID_HOSINOKAKERA"] = 91] = "ITEMID_HOSINOKAKERA";
    ItemID2[ItemID2["ITEMID_KINNOTAMA"] = 92] = "ITEMID_KINNOTAMA";
    ItemID2[ItemID2["ITEMID_AMAIMITU"] = 94] = "ITEMID_AMAIMITU";
    ItemID2[ItemID2["ITEMID_KITYOUNAHONE"] = 106] = "ITEMID_KITYOUNAHONE";
    ItemID2[ItemID2["ITEMID_HIKARINOISI"] = 107] = "ITEMID_HIKARINOISI";
    ItemID2[ItemID2["ITEMID_YAMINOISI"] = 108] = "ITEMID_YAMINOISI";
    ItemID2[ItemID2["ITEMID_MEZAMEISI"] = 109] = "ITEMID_MEZAMEISI";
    ItemID2[ItemID2["ITEMID_MANMARUISI"] = 110] = "ITEMID_MANMARUISI";
    ItemID2[ItemID2["ITEMID_HAKKINDAMA"] = 112] = "ITEMID_HAKKINDAMA";
    ItemID2[ItemID2["ITEMID_KONGOUDAMA"] = 135] = "ITEMID_KONGOUDAMA";
    ItemID2[ItemID2["ITEMID_SIRATAMA"] = 136] = "ITEMID_SIRATAMA";
    ItemID2[ItemID2["ITEMID_KURABONOMI"] = 149] = "ITEMID_KURABONOMI";
    ItemID2[ItemID2["ITEMID_KAGONOMI"] = 150] = "ITEMID_KAGONOMI";
    ItemID2[ItemID2["ITEMID_MOMONNOMI"] = 151] = "ITEMID_MOMONNOMI";
    ItemID2[ItemID2["ITEMID_TIIGONOMI"] = 152] = "ITEMID_TIIGONOMI";
    ItemID2[ItemID2["ITEMID_NANASINOMI"] = 153] = "ITEMID_NANASINOMI";
    ItemID2[ItemID2["ITEMID_HIMERINOMI"] = 154] = "ITEMID_HIMERINOMI";
    ItemID2[ItemID2["ITEMID_ORENNOMI"] = 155] = "ITEMID_ORENNOMI";
    ItemID2[ItemID2["ITEMID_KIINOMI"] = 156] = "ITEMID_KIINOMI";
    ItemID2[ItemID2["ITEMID_RAMUNOMI"] = 157] = "ITEMID_RAMUNOMI";
    ItemID2[ItemID2["ITEMID_OBONNOMI"] = 158] = "ITEMID_OBONNOMI";
    ItemID2[ItemID2["ITEMID_FIRANOMI"] = 159] = "ITEMID_FIRANOMI";
    ItemID2[ItemID2["ITEMID_UINOMI"] = 160] = "ITEMID_UINOMI";
    ItemID2[ItemID2["ITEMID_MAGONOMI"] = 161] = "ITEMID_MAGONOMI";
    ItemID2[ItemID2["ITEMID_BANZINOMI"] = 162] = "ITEMID_BANZINOMI";
    ItemID2[ItemID2["ITEMID_IANOMI"] = 163] = "ITEMID_IANOMI";
    ItemID2[ItemID2["ITEMID_ZAROKUNOMI"] = 169] = "ITEMID_ZAROKUNOMI";
    ItemID2[ItemID2["ITEMID_NEKOBUNOMI"] = 170] = "ITEMID_NEKOBUNOMI";
    ItemID2[ItemID2["ITEMID_TAPORUNOMI"] = 171] = "ITEMID_TAPORUNOMI";
    ItemID2[ItemID2["ITEMID_ROMENOMI"] = 172] = "ITEMID_ROMENOMI";
    ItemID2[ItemID2["ITEMID_UBUNOMI"] = 173] = "ITEMID_UBUNOMI";
    ItemID2[ItemID2["ITEMID_MATOMANOMI"] = 174] = "ITEMID_MATOMANOMI";
    ItemID2[ItemID2["ITEMID_OKKANOMI"] = 184] = "ITEMID_OKKANOMI";
    ItemID2[ItemID2["ITEMID_ITOKENOMI"] = 185] = "ITEMID_ITOKENOMI";
    ItemID2[ItemID2["ITEMID_SOKUNONOMI"] = 186] = "ITEMID_SOKUNONOMI";
    ItemID2[ItemID2["ITEMID_RINDONOMI"] = 187] = "ITEMID_RINDONOMI";
    ItemID2[ItemID2["ITEMID_YATHENOMI"] = 188] = "ITEMID_YATHENOMI";
    ItemID2[ItemID2["ITEMID_YOPUNOMI"] = 189] = "ITEMID_YOPUNOMI";
    ItemID2[ItemID2["ITEMID_BIAANOMI"] = 190] = "ITEMID_BIAANOMI";
    ItemID2[ItemID2["ITEMID_SYUKANOMI"] = 191] = "ITEMID_SYUKANOMI";
    ItemID2[ItemID2["ITEMID_BAKOUNOMI"] = 192] = "ITEMID_BAKOUNOMI";
    ItemID2[ItemID2["ITEMID_UTANNOMI"] = 193] = "ITEMID_UTANNOMI";
    ItemID2[ItemID2["ITEMID_TANGANOMI"] = 194] = "ITEMID_TANGANOMI";
    ItemID2[ItemID2["ITEMID_YOROGINOMI"] = 195] = "ITEMID_YOROGINOMI";
    ItemID2[ItemID2["ITEMID_KASIBUNOMI"] = 196] = "ITEMID_KASIBUNOMI";
    ItemID2[ItemID2["ITEMID_HABANNOMI"] = 197] = "ITEMID_HABANNOMI";
    ItemID2[ItemID2["ITEMID_NAMONOMI"] = 198] = "ITEMID_NAMONOMI";
    ItemID2[ItemID2["ITEMID_RIRIBANOMI"] = 199] = "ITEMID_RIRIBANOMI";
    ItemID2[ItemID2["ITEMID_HOZUNOMI"] = 200] = "ITEMID_HOZUNOMI";
    ItemID2[ItemID2["ITEMID_TIIRANOMI"] = 201] = "ITEMID_TIIRANOMI";
    ItemID2[ItemID2["ITEMID_RYUGANOMI"] = 202] = "ITEMID_RYUGANOMI";
    ItemID2[ItemID2["ITEMID_KAMURANOMI"] = 203] = "ITEMID_KAMURANOMI";
    ItemID2[ItemID2["ITEMID_YATAPINOMI"] = 204] = "ITEMID_YATAPINOMI";
    ItemID2[ItemID2["ITEMID_ZUANOMI"] = 205] = "ITEMID_ZUANOMI";
    ItemID2[ItemID2["ITEMID_SANNOMI"] = 206] = "ITEMID_SANNOMI";
    ItemID2[ItemID2["ITEMID_SUTAANOMI"] = 207] = "ITEMID_SUTAANOMI";
    ItemID2[ItemID2["ITEMID_NAZONOMI"] = 208] = "ITEMID_NAZONOMI";
    ItemID2[ItemID2["ITEMID_MIKURUNOMI"] = 209] = "ITEMID_MIKURUNOMI";
    ItemID2[ItemID2["ITEMID_IBANNOMI"] = 210] = "ITEMID_IBANNOMI";
    ItemID2[ItemID2["ITEMID_ZYAPONOMI"] = 211] = "ITEMID_ZYAPONOMI";
    ItemID2[ItemID2["ITEMID_RENBUNOMI"] = 212] = "ITEMID_RENBUNOMI";
    ItemID2[ItemID2["ITEMID_HIKARINOKONA"] = 213] = "ITEMID_HIKARINOKONA";
    ItemID2[ItemID2["ITEMID_SIROIHAABU"] = 214] = "ITEMID_SIROIHAABU";
    ItemID2[ItemID2["ITEMID_SENSEINOTUME"] = 217] = "ITEMID_SENSEINOTUME";
    ItemID2[ItemID2["ITEMID_YASURAGINOSUZU"] = 218] = "ITEMID_YASURAGINOSUZU";
    ItemID2[ItemID2["ITEMID_MENTARUHAABU"] = 219] = "ITEMID_MENTARUHAABU";
    ItemID2[ItemID2["ITEMID_KODAWARIHATIMAKI"] = 220] = "ITEMID_KODAWARIHATIMAKI";
    ItemID2[ItemID2["ITEMID_OUZYANOSIRUSI"] = 221] = "ITEMID_OUZYANOSIRUSI";
    ItemID2[ItemID2["ITEMID_GINNOKONA"] = 222] = "ITEMID_GINNOKONA";
    ItemID2[ItemID2["ITEMID_OMAMORIKOBAN"] = 223] = "ITEMID_OMAMORIKOBAN";
    ItemID2[ItemID2["ITEMID_KEMURIDAMA"] = 228] = "ITEMID_KEMURIDAMA";
    ItemID2[ItemID2["ITEMID_KAWARAZUNOISI"] = 229] = "ITEMID_KAWARAZUNOISI";
    ItemID2[ItemID2["ITEMID_KIAINOHATIMAKI"] = 230] = "ITEMID_KIAINOHATIMAKI";
    ItemID2[ItemID2["ITEMID_SIAWASETAMAGO"] = 231] = "ITEMID_SIAWASETAMAGO";
    ItemID2[ItemID2["ITEMID_PINTORENZU"] = 232] = "ITEMID_PINTORENZU";
    ItemID2[ItemID2["ITEMID_METARUKOOTO"] = 233] = "ITEMID_METARUKOOTO";
    ItemID2[ItemID2["ITEMID_TABENOKOSI"] = 234] = "ITEMID_TABENOKOSI";
    ItemID2[ItemID2["ITEMID_DENKIDAMA"] = 236] = "ITEMID_DENKIDAMA";
    ItemID2[ItemID2["ITEMID_YAWARAKAISUNA"] = 237] = "ITEMID_YAWARAKAISUNA";
    ItemID2[ItemID2["ITEMID_KATAIISI"] = 238] = "ITEMID_KATAIISI";
    ItemID2[ItemID2["ITEMID_KISEKINOTANE"] = 239] = "ITEMID_KISEKINOTANE";
    ItemID2[ItemID2["ITEMID_KUROIMEGANE"] = 240] = "ITEMID_KUROIMEGANE";
    ItemID2[ItemID2["ITEMID_KUROOBI"] = 241] = "ITEMID_KUROOBI";
    ItemID2[ItemID2["ITEMID_ZISYAKU"] = 242] = "ITEMID_ZISYAKU";
    ItemID2[ItemID2["ITEMID_SINPINOSIZUKU"] = 243] = "ITEMID_SINPINOSIZUKU";
    ItemID2[ItemID2["ITEMID_SURUDOIKUTIBASI"] = 244] = "ITEMID_SURUDOIKUTIBASI";
    ItemID2[ItemID2["ITEMID_DOKUBARI"] = 245] = "ITEMID_DOKUBARI";
    ItemID2[ItemID2["ITEMID_TOKENAIKOORI"] = 246] = "ITEMID_TOKENAIKOORI";
    ItemID2[ItemID2["ITEMID_NOROINOOHUDA"] = 247] = "ITEMID_NOROINOOHUDA";
    ItemID2[ItemID2["ITEMID_MAGATTASUPUUN"] = 248] = "ITEMID_MAGATTASUPUUN";
    ItemID2[ItemID2["ITEMID_MOKUTAN"] = 249] = "ITEMID_MOKUTAN";
    ItemID2[ItemID2["ITEMID_RYUUNOKIBA"] = 250] = "ITEMID_RYUUNOKIBA";
    ItemID2[ItemID2["ITEMID_SIRUKUNOSUKAAHU"] = 251] = "ITEMID_SIRUKUNOSUKAAHU";
    ItemID2[ItemID2["ITEMID_KAIGARANOSUZU"] = 253] = "ITEMID_KAIGARANOSUZU";
    ItemID2[ItemID2["ITEMID_KOUKAKURENZU"] = 265] = "ITEMID_KOUKAKURENZU";
    ItemID2[ItemID2["ITEMID_TIKARANOHATIMAKI"] = 266] = "ITEMID_TIKARANOHATIMAKI";
    ItemID2[ItemID2["ITEMID_MONOSIRIMEGANE"] = 267] = "ITEMID_MONOSIRIMEGANE";
    ItemID2[ItemID2["ITEMID_TATUZINNOOBI"] = 268] = "ITEMID_TATUZINNOOBI";
    ItemID2[ItemID2["ITEMID_HIKARINONENDO"] = 269] = "ITEMID_HIKARINONENDO";
    ItemID2[ItemID2["ITEMID_INOTINOTAMA"] = 270] = "ITEMID_INOTINOTAMA";
    ItemID2[ItemID2["ITEMID_PAWAHURUHAABU"] = 271] = "ITEMID_PAWAHURUHAABU";
    ItemID2[ItemID2["ITEMID_DOKUDOKUDAMA"] = 272] = "ITEMID_DOKUDOKUDAMA";
    ItemID2[ItemID2["ITEMID_KAENDAMA"] = 273] = "ITEMID_KAENDAMA";
    ItemID2[ItemID2["ITEMID_KIAINOTASUKI"] = 275] = "ITEMID_KIAINOTASUKI";
    ItemID2[ItemID2["ITEMID_FOOKASURENZU"] = 276] = "ITEMID_FOOKASURENZU";
    ItemID2[ItemID2["ITEMID_METORONOOMU"] = 277] = "ITEMID_METORONOOMU";
    ItemID2[ItemID2["ITEMID_KUROITEKKYUU"] = 278] = "ITEMID_KUROITEKKYUU";
    ItemID2[ItemID2["ITEMID_KOUKOUNOSIPPO"] = 279] = "ITEMID_KOUKOUNOSIPPO";
    ItemID2[ItemID2["ITEMID_AKAIITO"] = 280] = "ITEMID_AKAIITO";
    ItemID2[ItemID2["ITEMID_KUROIHEDORO"] = 281] = "ITEMID_KUROIHEDORO";
    ItemID2[ItemID2["ITEMID_TUMETAIIWA"] = 282] = "ITEMID_TUMETAIIWA";
    ItemID2[ItemID2["ITEMID_SARASARAIWA"] = 283] = "ITEMID_SARASARAIWA";
    ItemID2[ItemID2["ITEMID_ATUIIWA"] = 284] = "ITEMID_ATUIIWA";
    ItemID2[ItemID2["ITEMID_SIMETTAIWA"] = 285] = "ITEMID_SIMETTAIWA";
    ItemID2[ItemID2["ITEMID_NEBARINOKAGIDUME"] = 286] = "ITEMID_NEBARINOKAGIDUME";
    ItemID2[ItemID2["ITEMID_KODAWARISUKAAHU"] = 287] = "ITEMID_KODAWARISUKAAHU";
    ItemID2[ItemID2["ITEMID_KUTTUKIBARI"] = 288] = "ITEMID_KUTTUKIBARI";
    ItemID2[ItemID2["ITEMID_PAWAARISUTO"] = 289] = "ITEMID_PAWAARISUTO";
    ItemID2[ItemID2["ITEMID_PAWAABERUTO"] = 290] = "ITEMID_PAWAABERUTO";
    ItemID2[ItemID2["ITEMID_PAWAARENZU"] = 291] = "ITEMID_PAWAARENZU";
    ItemID2[ItemID2["ITEMID_PAWAABANDO"] = 292] = "ITEMID_PAWAABANDO";
    ItemID2[ItemID2["ITEMID_PAWAAANKURU"] = 293] = "ITEMID_PAWAAANKURU";
    ItemID2[ItemID2["ITEMID_PAWAAUEITO"] = 294] = "ITEMID_PAWAAUEITO";
    ItemID2[ItemID2["ITEMID_KIREINANUKEGARA"] = 295] = "ITEMID_KIREINANUKEGARA";
    ItemID2[ItemID2["ITEMID_OOKINANEKKO"] = 296] = "ITEMID_OOKINANEKKO";
    ItemID2[ItemID2["ITEMID_KODAWARIMEGANE"] = 297] = "ITEMID_KODAWARIMEGANE";
    ItemID2[ItemID2["ITEMID_HINOTAMAPUREETO"] = 298] = "ITEMID_HINOTAMAPUREETO";
    ItemID2[ItemID2["ITEMID_SIZUKUPUREETO"] = 299] = "ITEMID_SIZUKUPUREETO";
    ItemID2[ItemID2["ITEMID_IKAZUTIPUREETO"] = 300] = "ITEMID_IKAZUTIPUREETO";
    ItemID2[ItemID2["ITEMID_MIDORINOPUREETO"] = 301] = "ITEMID_MIDORINOPUREETO";
    ItemID2[ItemID2["ITEMID_TURARANOPUREETO"] = 302] = "ITEMID_TURARANOPUREETO";
    ItemID2[ItemID2["ITEMID_KOBUSINOPUREETO"] = 303] = "ITEMID_KOBUSINOPUREETO";
    ItemID2[ItemID2["ITEMID_MOUDOKUPUREETO"] = 304] = "ITEMID_MOUDOKUPUREETO";
    ItemID2[ItemID2["ITEMID_DAITINOPUREETO"] = 305] = "ITEMID_DAITINOPUREETO";
    ItemID2[ItemID2["ITEMID_AOZORAPUREETO"] = 306] = "ITEMID_AOZORAPUREETO";
    ItemID2[ItemID2["ITEMID_HUSIGINOPUREETO"] = 307] = "ITEMID_HUSIGINOPUREETO";
    ItemID2[ItemID2["ITEMID_TAMAMUSIPUREETO"] = 308] = "ITEMID_TAMAMUSIPUREETO";
    ItemID2[ItemID2["ITEMID_GANSEKIPUREETO"] = 309] = "ITEMID_GANSEKIPUREETO";
    ItemID2[ItemID2["ITEMID_MONONOKEPUREETO"] = 310] = "ITEMID_MONONOKEPUREETO";
    ItemID2[ItemID2["ITEMID_RYUUNOPUREETO"] = 311] = "ITEMID_RYUUNOPUREETO";
    ItemID2[ItemID2["ITEMID_KOWAMOTEPUREETO"] = 312] = "ITEMID_KOWAMOTEPUREETO";
    ItemID2[ItemID2["ITEMID_KOUTETUPUREETO"] = 313] = "ITEMID_KOUTETUPUREETO";
    ItemID2[ItemID2["ITEMID_SURUDOITUME"] = 326] = "ITEMID_SURUDOITUME";
    ItemID2[ItemID2["ITEMID_WAZAMASIN01"] = 328] = "ITEMID_WAZAMASIN01";
    ItemID2[ItemID2["ITEMID_WAZAMASIN02"] = 329] = "ITEMID_WAZAMASIN02";
    ItemID2[ItemID2["ITEMID_WAZAMASIN03"] = 330] = "ITEMID_WAZAMASIN03";
    ItemID2[ItemID2["ITEMID_WAZAMASIN04"] = 331] = "ITEMID_WAZAMASIN04";
    ItemID2[ItemID2["ITEMID_WAZAMASIN05"] = 332] = "ITEMID_WAZAMASIN05";
    ItemID2[ItemID2["ITEMID_WAZAMASIN06"] = 333] = "ITEMID_WAZAMASIN06";
    ItemID2[ItemID2["ITEMID_WAZAMASIN07"] = 334] = "ITEMID_WAZAMASIN07";
    ItemID2[ItemID2["ITEMID_WAZAMASIN08"] = 335] = "ITEMID_WAZAMASIN08";
    ItemID2[ItemID2["ITEMID_WAZAMASIN09"] = 336] = "ITEMID_WAZAMASIN09";
    ItemID2[ItemID2["ITEMID_WAZAMASIN10"] = 337] = "ITEMID_WAZAMASIN10";
    ItemID2[ItemID2["ITEMID_WAZAMASIN11"] = 338] = "ITEMID_WAZAMASIN11";
    ItemID2[ItemID2["ITEMID_WAZAMASIN12"] = 339] = "ITEMID_WAZAMASIN12";
    ItemID2[ItemID2["ITEMID_WAZAMASIN13"] = 340] = "ITEMID_WAZAMASIN13";
    ItemID2[ItemID2["ITEMID_WAZAMASIN14"] = 341] = "ITEMID_WAZAMASIN14";
    ItemID2[ItemID2["ITEMID_WAZAMASIN15"] = 342] = "ITEMID_WAZAMASIN15";
    ItemID2[ItemID2["ITEMID_WAZAMASIN16"] = 343] = "ITEMID_WAZAMASIN16";
    ItemID2[ItemID2["ITEMID_WAZAMASIN17"] = 344] = "ITEMID_WAZAMASIN17";
    ItemID2[ItemID2["ITEMID_WAZAMASIN18"] = 345] = "ITEMID_WAZAMASIN18";
    ItemID2[ItemID2["ITEMID_WAZAMASIN19"] = 346] = "ITEMID_WAZAMASIN19";
    ItemID2[ItemID2["ITEMID_WAZAMASIN20"] = 347] = "ITEMID_WAZAMASIN20";
    ItemID2[ItemID2["ITEMID_WAZAMASIN21"] = 348] = "ITEMID_WAZAMASIN21";
    ItemID2[ItemID2["ITEMID_WAZAMASIN22"] = 349] = "ITEMID_WAZAMASIN22";
    ItemID2[ItemID2["ITEMID_WAZAMASIN23"] = 350] = "ITEMID_WAZAMASIN23";
    ItemID2[ItemID2["ITEMID_WAZAMASIN24"] = 351] = "ITEMID_WAZAMASIN24";
    ItemID2[ItemID2["ITEMID_WAZAMASIN25"] = 352] = "ITEMID_WAZAMASIN25";
    ItemID2[ItemID2["ITEMID_WAZAMASIN26"] = 353] = "ITEMID_WAZAMASIN26";
    ItemID2[ItemID2["ITEMID_WAZAMASIN27"] = 354] = "ITEMID_WAZAMASIN27";
    ItemID2[ItemID2["ITEMID_WAZAMASIN28"] = 355] = "ITEMID_WAZAMASIN28";
    ItemID2[ItemID2["ITEMID_WAZAMASIN29"] = 356] = "ITEMID_WAZAMASIN29";
    ItemID2[ItemID2["ITEMID_WAZAMASIN30"] = 357] = "ITEMID_WAZAMASIN30";
    ItemID2[ItemID2["ITEMID_WAZAMASIN31"] = 358] = "ITEMID_WAZAMASIN31";
    ItemID2[ItemID2["ITEMID_WAZAMASIN32"] = 359] = "ITEMID_WAZAMASIN32";
    ItemID2[ItemID2["ITEMID_WAZAMASIN33"] = 360] = "ITEMID_WAZAMASIN33";
    ItemID2[ItemID2["ITEMID_WAZAMASIN34"] = 361] = "ITEMID_WAZAMASIN34";
    ItemID2[ItemID2["ITEMID_WAZAMASIN35"] = 362] = "ITEMID_WAZAMASIN35";
    ItemID2[ItemID2["ITEMID_WAZAMASIN36"] = 363] = "ITEMID_WAZAMASIN36";
    ItemID2[ItemID2["ITEMID_WAZAMASIN37"] = 364] = "ITEMID_WAZAMASIN37";
    ItemID2[ItemID2["ITEMID_WAZAMASIN38"] = 365] = "ITEMID_WAZAMASIN38";
    ItemID2[ItemID2["ITEMID_WAZAMASIN39"] = 366] = "ITEMID_WAZAMASIN39";
    ItemID2[ItemID2["ITEMID_WAZAMASIN40"] = 367] = "ITEMID_WAZAMASIN40";
    ItemID2[ItemID2["ITEMID_WAZAMASIN41"] = 368] = "ITEMID_WAZAMASIN41";
    ItemID2[ItemID2["ITEMID_WAZAMASIN42"] = 369] = "ITEMID_WAZAMASIN42";
    ItemID2[ItemID2["ITEMID_WAZAMASIN43"] = 370] = "ITEMID_WAZAMASIN43";
    ItemID2[ItemID2["ITEMID_WAZAMASIN44"] = 371] = "ITEMID_WAZAMASIN44";
    ItemID2[ItemID2["ITEMID_WAZAMASIN45"] = 372] = "ITEMID_WAZAMASIN45";
    ItemID2[ItemID2["ITEMID_WAZAMASIN46"] = 373] = "ITEMID_WAZAMASIN46";
    ItemID2[ItemID2["ITEMID_WAZAMASIN47"] = 374] = "ITEMID_WAZAMASIN47";
    ItemID2[ItemID2["ITEMID_WAZAMASIN48"] = 375] = "ITEMID_WAZAMASIN48";
    ItemID2[ItemID2["ITEMID_WAZAMASIN49"] = 376] = "ITEMID_WAZAMASIN49";
    ItemID2[ItemID2["ITEMID_WAZAMASIN50"] = 377] = "ITEMID_WAZAMASIN50";
    ItemID2[ItemID2["ITEMID_WAZAMASIN51"] = 378] = "ITEMID_WAZAMASIN51";
    ItemID2[ItemID2["ITEMID_WAZAMASIN52"] = 379] = "ITEMID_WAZAMASIN52";
    ItemID2[ItemID2["ITEMID_WAZAMASIN53"] = 380] = "ITEMID_WAZAMASIN53";
    ItemID2[ItemID2["ITEMID_WAZAMASIN54"] = 381] = "ITEMID_WAZAMASIN54";
    ItemID2[ItemID2["ITEMID_WAZAMASIN55"] = 382] = "ITEMID_WAZAMASIN55";
    ItemID2[ItemID2["ITEMID_WAZAMASIN56"] = 383] = "ITEMID_WAZAMASIN56";
    ItemID2[ItemID2["ITEMID_WAZAMASIN57"] = 384] = "ITEMID_WAZAMASIN57";
    ItemID2[ItemID2["ITEMID_WAZAMASIN58"] = 385] = "ITEMID_WAZAMASIN58";
    ItemID2[ItemID2["ITEMID_WAZAMASIN59"] = 386] = "ITEMID_WAZAMASIN59";
    ItemID2[ItemID2["ITEMID_WAZAMASIN60"] = 387] = "ITEMID_WAZAMASIN60";
    ItemID2[ItemID2["ITEMID_WAZAMASIN61"] = 388] = "ITEMID_WAZAMASIN61";
    ItemID2[ItemID2["ITEMID_WAZAMASIN62"] = 389] = "ITEMID_WAZAMASIN62";
    ItemID2[ItemID2["ITEMID_WAZAMASIN63"] = 390] = "ITEMID_WAZAMASIN63";
    ItemID2[ItemID2["ITEMID_WAZAMASIN64"] = 391] = "ITEMID_WAZAMASIN64";
    ItemID2[ItemID2["ITEMID_WAZAMASIN65"] = 392] = "ITEMID_WAZAMASIN65";
    ItemID2[ItemID2["ITEMID_WAZAMASIN66"] = 393] = "ITEMID_WAZAMASIN66";
    ItemID2[ItemID2["ITEMID_WAZAMASIN67"] = 394] = "ITEMID_WAZAMASIN67";
    ItemID2[ItemID2["ITEMID_WAZAMASIN68"] = 395] = "ITEMID_WAZAMASIN68";
    ItemID2[ItemID2["ITEMID_WAZAMASIN69"] = 396] = "ITEMID_WAZAMASIN69";
    ItemID2[ItemID2["ITEMID_WAZAMASIN70"] = 397] = "ITEMID_WAZAMASIN70";
    ItemID2[ItemID2["ITEMID_WAZAMASIN71"] = 398] = "ITEMID_WAZAMASIN71";
    ItemID2[ItemID2["ITEMID_WAZAMASIN72"] = 399] = "ITEMID_WAZAMASIN72";
    ItemID2[ItemID2["ITEMID_WAZAMASIN73"] = 400] = "ITEMID_WAZAMASIN73";
    ItemID2[ItemID2["ITEMID_WAZAMASIN74"] = 401] = "ITEMID_WAZAMASIN74";
    ItemID2[ItemID2["ITEMID_WAZAMASIN75"] = 402] = "ITEMID_WAZAMASIN75";
    ItemID2[ItemID2["ITEMID_WAZAMASIN76"] = 403] = "ITEMID_WAZAMASIN76";
    ItemID2[ItemID2["ITEMID_WAZAMASIN77"] = 404] = "ITEMID_WAZAMASIN77";
    ItemID2[ItemID2["ITEMID_WAZAMASIN78"] = 405] = "ITEMID_WAZAMASIN78";
    ItemID2[ItemID2["ITEMID_WAZAMASIN79"] = 406] = "ITEMID_WAZAMASIN79";
    ItemID2[ItemID2["ITEMID_WAZAMASIN80"] = 407] = "ITEMID_WAZAMASIN80";
    ItemID2[ItemID2["ITEMID_WAZAMASIN81"] = 408] = "ITEMID_WAZAMASIN81";
    ItemID2[ItemID2["ITEMID_WAZAMASIN82"] = 409] = "ITEMID_WAZAMASIN82";
    ItemID2[ItemID2["ITEMID_WAZAMASIN83"] = 410] = "ITEMID_WAZAMASIN83";
    ItemID2[ItemID2["ITEMID_WAZAMASIN84"] = 411] = "ITEMID_WAZAMASIN84";
    ItemID2[ItemID2["ITEMID_WAZAMASIN85"] = 412] = "ITEMID_WAZAMASIN85";
    ItemID2[ItemID2["ITEMID_WAZAMASIN86"] = 413] = "ITEMID_WAZAMASIN86";
    ItemID2[ItemID2["ITEMID_WAZAMASIN87"] = 414] = "ITEMID_WAZAMASIN87";
    ItemID2[ItemID2["ITEMID_WAZAMASIN88"] = 415] = "ITEMID_WAZAMASIN88";
    ItemID2[ItemID2["ITEMID_WAZAMASIN89"] = 416] = "ITEMID_WAZAMASIN89";
    ItemID2[ItemID2["ITEMID_WAZAMASIN90"] = 417] = "ITEMID_WAZAMASIN90";
    ItemID2[ItemID2["ITEMID_WAZAMASIN91"] = 418] = "ITEMID_WAZAMASIN91";
    ItemID2[ItemID2["ITEMID_WAZAMASIN92"] = 419] = "ITEMID_WAZAMASIN92";
    ItemID2[ItemID2["ITEMID_SUPIIDOBOORU"] = 492] = "ITEMID_SUPIIDOBOORU";
    ItemID2[ItemID2["ITEMID_REBERUBOORU"] = 493] = "ITEMID_REBERUBOORU";
    ItemID2[ItemID2["ITEMID_RUAABOORU"] = 494] = "ITEMID_RUAABOORU";
    ItemID2[ItemID2["ITEMID_HEBIIBOORU"] = 495] = "ITEMID_HEBIIBOORU";
    ItemID2[ItemID2["ITEMID_RABURABUBOORU"] = 496] = "ITEMID_RABURABUBOORU";
    ItemID2[ItemID2["ITEMID_HURENDOBOORU"] = 497] = "ITEMID_HURENDOBOORU";
    ItemID2[ItemID2["ITEMID_MUUNBOORU"] = 498] = "ITEMID_MUUNBOORU";
    ItemID2[ItemID2["ITEMID_KONPEBOORU"] = 499] = "ITEMID_KONPEBOORU";
    ItemID2[ItemID2["ITEMID_SINKANOKISEKI"] = 538] = "ITEMID_SINKANOKISEKI";
    ItemID2[ItemID2["ITEMID_KARUISI"] = 539] = "ITEMID_KARUISI";
    ItemID2[ItemID2["ITEMID_GOTUGOTUMETTO"] = 540] = "ITEMID_GOTUGOTUMETTO";
    ItemID2[ItemID2["ITEMID_HUUSEN"] = 541] = "ITEMID_HUUSEN";
    ItemID2[ItemID2["ITEMID_REDDOKAADO"] = 542] = "ITEMID_REDDOKAADO";
    ItemID2[ItemID2["ITEMID_NERAINOMATO"] = 543] = "ITEMID_NERAINOMATO";
    ItemID2[ItemID2["ITEMID_SIMETUKEBANDO"] = 544] = "ITEMID_SIMETUKEBANDO";
    ItemID2[ItemID2["ITEMID_KYUUKON"] = 545] = "ITEMID_KYUUKON";
    ItemID2[ItemID2["ITEMID_ZYUUDENTI"] = 546] = "ITEMID_ZYUUDENTI";
    ItemID2[ItemID2["ITEMID_DASSYUTUBOTAN"] = 547] = "ITEMID_DASSYUTUBOTAN";
    ItemID2[ItemID2["ITEMID_NOOMARUZYUERU"] = 564] = "ITEMID_NOOMARUZYUERU";
    ItemID2[ItemID2["ITEMID_TAIRYOKUNOHANE"] = 565] = "ITEMID_TAIRYOKUNOHANE";
    ItemID2[ItemID2["ITEMID_KINRYOKUNOHANE"] = 566] = "ITEMID_KINRYOKUNOHANE";
    ItemID2[ItemID2["ITEMID_TEIKOUNOHANE"] = 567] = "ITEMID_TEIKOUNOHANE";
    ItemID2[ItemID2["ITEMID_TIRYOKUNOHANE"] = 568] = "ITEMID_TIRYOKUNOHANE";
    ItemID2[ItemID2["ITEMID_SEISINNOHANE"] = 569] = "ITEMID_SEISINNOHANE";
    ItemID2[ItemID2["ITEMID_SYUNPATUNOHANE"] = 570] = "ITEMID_SYUNPATUNOHANE";
    ItemID2[ItemID2["ITEMID_KIREINAHANE"] = 571] = "ITEMID_KIREINAHANE";
    ItemID2[ItemID2["ITEMID_DORIIMUBOORU"] = 576] = "ITEMID_DORIIMUBOORU";
    ItemID2[ItemID2["ITEMID_KAORUKINOKO"] = 580] = "ITEMID_KAORUKINOKO";
    ItemID2[ItemID2["ITEMID_DEKAIKINNOTAMA"] = 581] = "ITEMID_DEKAIKINNOTAMA";
    ItemID2[ItemID2["ITEMID_ODANGOSINZYU"] = 582] = "ITEMID_ODANGOSINZYU";
    ItemID2[ItemID2["ITEMID_SUISEINOKAKERA"] = 583] = "ITEMID_SUISEINOKAKERA";
    ItemID2[ItemID2["ITEMID_WAZAMASIN93"] = 618] = "ITEMID_WAZAMASIN93";
    ItemID2[ItemID2["ITEMID_WAZAMASIN94"] = 619] = "ITEMID_WAZAMASIN94";
    ItemID2[ItemID2["ITEMID_WAZAMASIN95"] = 620] = "ITEMID_WAZAMASIN95";
    ItemID2[ItemID2["ITEMID_HIKARUOMAMORI"] = 632] = "ITEMID_HIKARUOMAMORI";
    ItemID2[ItemID2["ITEMID_UTUSIKAGAMI"] = 638] = "ITEMID_UTUSIKAGAMI";
    ItemID2[ItemID2["ITEMID_ZYAKUTENHOKEN"] = 639] = "ITEMID_ZYAKUTENHOKEN";
    ItemID2[ItemID2["ITEMID_TOTUGEKITYOKKI"] = 640] = "ITEMID_TOTUGEKITYOKKI";
    ItemID2[ItemID2["ITEMID_SEIREIPUREETO"] = 644] = "ITEMID_SEIREIPUREETO";
    ItemID2[ItemID2["ITEMID_TOKUSEIKAPUSERU"] = 645] = "ITEMID_TOKUSEIKAPUSERU";
    ItemID2[ItemID2["ITEMID_HIKARIGOKE"] = 648] = "ITEMID_HIKARIGOKE";
    ItemID2[ItemID2["ITEMID_YUKIDAMA"] = 649] = "ITEMID_YUKIDAMA";
    ItemID2[ItemID2["ITEMID_BOUZINGOOGURU"] = 650] = "ITEMID_BOUZINGOOGURU";
    ItemID2[ItemID2["ITEMID_ROZERUNOMI"] = 686] = "ITEMID_ROZERUNOMI";
    ItemID2[ItemID2["ITEMID_AKKINOMI"] = 687] = "ITEMID_AKKINOMI";
    ItemID2[ItemID2["ITEMID_TARAPUNOMI"] = 688] = "ITEMID_TARAPUNOMI";
    ItemID2[ItemID2["ITEMID_WAZAMASIN96"] = 690] = "ITEMID_WAZAMASIN96";
    ItemID2[ItemID2["ITEMID_WAZAMASIN97"] = 691] = "ITEMID_WAZAMASIN97";
    ItemID2[ItemID2["ITEMID_WAZAMASIN98"] = 692] = "ITEMID_WAZAMASIN98";
    ItemID2[ItemID2["ITEMID_WAZAMASIN99"] = 693] = "ITEMID_WAZAMASIN99";
    ItemID2[ItemID2["ITEMID_TANKENKOKOROE"] = 703] = "ITEMID_TANKENKOKOROE";
    ItemID2[ItemID2["ITEMID_IMASIMENOTUBO"] = 765] = "ITEMID_IMASIMENOTUBO";
    ItemID2[ItemID2["ITEMID_GINNOOUKAN"] = 795] = "ITEMID_GINNOOUKAN";
    ItemID2[ItemID2["ITEMID_KINNOOUKAN"] = 796] = "ITEMID_KINNOOUKAN";
    ItemID2[ItemID2["ITEMID_BIBIRIDAMA"] = 846] = "ITEMID_BIBIRIDAMA";
    ItemID2[ItemID2["ITEMID_KOORINOISI"] = 849] = "ITEMID_KOORINOISI";
    ItemID2[ItemID2["ITEMID_URUTORABOORU"] = 851] = "ITEMID_URUTORABOORU";
    ItemID2[ItemID2["ITEMID_KURENAINOMITU"] = 853] = "ITEMID_KURENAINOMITU";
    ItemID2[ItemID2["ITEMID_YAMABUKINOMITU"] = 854] = "ITEMID_YAMABUKINOMITU";
    ItemID2[ItemID2["ITEMID_USUMOMONOMITU"] = 855] = "ITEMID_USUMOMONOMITU";
    ItemID2[ItemID2["ITEMID_MURASAKINOMITU"] = 856] = "ITEMID_MURASAKINOMITU";
    ItemID2[ItemID2["ITEMID_GURANDOKOOTO"] = 879] = "ITEMID_GURANDOKOOTO";
    ItemID2[ItemID2["ITEMID_BOUGOPATTO"] = 880] = "ITEMID_BOUGOPATTO";
    ItemID2[ItemID2["ITEMID_EREKISIIDO"] = 881] = "ITEMID_EREKISIIDO";
    ItemID2[ItemID2["ITEMID_SAIKOSIIDO"] = 882] = "ITEMID_SAIKOSIIDO";
    ItemID2[ItemID2["ITEMID_MISUTOSIIDO"] = 883] = "ITEMID_MISUTOSIIDO";
    ItemID2[ItemID2["ITEMID_GURASUSIIDO"] = 884] = "ITEMID_GURASUSIIDO";
    ItemID2[ItemID2["ITEMID_KUTITATURUGI"] = 1103] = "ITEMID_KUTITATURUGI";
    ItemID2[ItemID2["ITEMID_KUTITATATE"] = 1104] = "ITEMID_KUTITATATE";
    ItemID2[ItemID2["ITEMID_AMAAIRINGO"] = 1116] = "ITEMID_AMAAIRINGO";
    ItemID2[ItemID2["ITEMID_SUPPAIRINGO"] = 1117] = "ITEMID_SUPPAIRINGO";
    ItemID2[ItemID2["ITEMID_NODOAME"] = 1118] = "ITEMID_NODOAME";
    ItemID2[ItemID2["ITEMID_DASSYUTUPAKKU"] = 1119] = "ITEMID_DASSYUTUPAKKU";
    ItemID2[ItemID2["ITEMID_ATUZOKOBUUTU"] = 1120] = "ITEMID_ATUZOKOBUUTU";
    ItemID2[ItemID2["ITEMID_KARABURIHOKEN"] = 1121] = "ITEMID_KARABURIHOKEN";
    ItemID2[ItemID2["ITEMID_RUUMUSAABISU"] = 1122] = "ITEMID_RUUMUSAABISU";
    ItemID2[ItemID2["ITEMID_BANNOUGASA"] = 1123] = "ITEMID_BANNOUGASA";
    ItemID2[ItemID2["ITEMID_KEIKENTIAME_1"] = 1124] = "ITEMID_KEIKENTIAME_1";
    ItemID2[ItemID2["ITEMID_KEIKENTIAME_2"] = 1125] = "ITEMID_KEIKENTIAME_2";
    ItemID2[ItemID2["ITEMID_KEIKENTIAME_3"] = 1126] = "ITEMID_KEIKENTIAME_3";
    ItemID2[ItemID2["ITEMID_KEIKENTIAME_4"] = 1127] = "ITEMID_KEIKENTIAME_4";
    ItemID2[ItemID2["ITEMID_KEIKENTIAME_5"] = 1128] = "ITEMID_KEIKENTIAME_5";
    ItemID2[ItemID2["ITEMID_SAMISIGARIMINTO"] = 1231] = "ITEMID_SAMISIGARIMINTO";
    ItemID2[ItemID2["ITEMID_IZIPPARIMINTO"] = 1232] = "ITEMID_IZIPPARIMINTO";
    ItemID2[ItemID2["ITEMID_YANTYAMINTO"] = 1233] = "ITEMID_YANTYAMINTO";
    ItemID2[ItemID2["ITEMID_YUKANMINTO"] = 1234] = "ITEMID_YUKANMINTO";
    ItemID2[ItemID2["ITEMID_ZUBUTOIMINTO"] = 1235] = "ITEMID_ZUBUTOIMINTO";
    ItemID2[ItemID2["ITEMID_WANPAKUMINTO"] = 1236] = "ITEMID_WANPAKUMINTO";
    ItemID2[ItemID2["ITEMID_NOUTENKIMINTO"] = 1237] = "ITEMID_NOUTENKIMINTO";
    ItemID2[ItemID2["ITEMID_NONKIMINTO"] = 1238] = "ITEMID_NONKIMINTO";
    ItemID2[ItemID2["ITEMID_HIKAEMEMINTO"] = 1239] = "ITEMID_HIKAEMEMINTO";
    ItemID2[ItemID2["ITEMID_OTTORIMINTO"] = 1240] = "ITEMID_OTTORIMINTO";
    ItemID2[ItemID2["ITEMID_UKKARIMINTO"] = 1241] = "ITEMID_UKKARIMINTO";
    ItemID2[ItemID2["ITEMID_REISEIMINTO"] = 1242] = "ITEMID_REISEIMINTO";
    ItemID2[ItemID2["ITEMID_ODAYAKAMINTO"] = 1243] = "ITEMID_ODAYAKAMINTO";
    ItemID2[ItemID2["ITEMID_OTONASIIMINTO"] = 1244] = "ITEMID_OTONASIIMINTO";
    ItemID2[ItemID2["ITEMID_SINTYOUMINTO"] = 1245] = "ITEMID_SINTYOUMINTO";
    ItemID2[ItemID2["ITEMID_NAMAIKIMINTO"] = 1246] = "ITEMID_NAMAIKIMINTO";
    ItemID2[ItemID2["ITEMID_OKUBYOUMINTO"] = 1247] = "ITEMID_OKUBYOUMINTO";
    ItemID2[ItemID2["ITEMID_SEKKTIMINTO"] = 1248] = "ITEMID_SEKKTIMINTO";
    ItemID2[ItemID2["ITEMID_YOUKIMINTO"] = 1249] = "ITEMID_YOUKIMINTO";
    ItemID2[ItemID2["ITEMID_MUJYAKIMINTO"] = 1250] = "ITEMID_MUJYAKIMINTO";
    ItemID2[ItemID2["ITEMID_MAZIMEMINTO"] = 1251] = "ITEMID_MAZIMEMINTO";
    ItemID2[ItemID2["ITEMID_WARETAPOTTO"] = 1253] = "ITEMID_WARETAPOTTO";
    ItemID2[ItemID2["ITEMID_KAKETAPOTTO"] = 1254] = "ITEMID_KAKETAPOTTO";
    ItemID2[ItemID2["ITEMID_ROTOMUNOKATAROGU"] = 1278] = "ITEMID_ROTOMUNOKATAROGU";
    ItemID2[ItemID2["ITEMID_GARANATUBURESU"] = 1582] = "ITEMID_GARANATUBURESU";
    ItemID2[ItemID2["ITEMID_KIDUNANODADUNA"] = 1590] = "ITEMID_KIDUNANODADUNA";
    ItemID2[ItemID2["ITEMID_KIDUNANODADUNA_KAIZYO"] = 1591] = "ITEMID_KIDUNANODADUNA_KAIZYO";
    ItemID2[ItemID2["ITEMID_GARANATURIISU"] = 1592] = "ITEMID_GARANATURIISU";
    ItemID2[ItemID2["ITEMID_TOKUSEIPATTI"] = 1606] = "ITEMID_TOKUSEIPATTI";
    ItemID2[ItemID2["ITEMID_DAIKONGOUDAMA"] = 1777] = "ITEMID_DAIKONGOUDAMA";
    ItemID2[ItemID2["ITEMID_DAISIRATAMA"] = 1778] = "ITEMID_DAISIRATAMA";
    ItemID2[ItemID2["ITEMID_DAIHAKKINDAMA"] = 1779] = "ITEMID_DAIHAKKINDAMA";
    ItemID2[ItemID2["ITEMID_SUMAHOROTOMU"] = 1829] = "ITEMID_SUMAHOROTOMU";
    ItemID2[ItemID2["ITEMID_SANDOUICCHI"] = 1830] = "ITEMID_SANDOUICCHI";
    ItemID2[ItemID2["ITEMID_DENSETSUBOORUA"] = 1831] = "ITEMID_DENSETSUBOORUA";
    ItemID2[ItemID2["ITEMID_DENSETSUBOORUB"] = 1832] = "ITEMID_DENSETSUBOORUB";
    ItemID2[ItemID2["ITEMID_TAKARABOORU"] = 1833] = "ITEMID_TAKARABOORU";
    ItemID2[ItemID2["ITEMID_GENSYOA"] = 1834] = "ITEMID_GENSYOA";
    ItemID2[ItemID2["ITEMID_GENSYOB"] = 1835] = "ITEMID_GENSYOB";
    ItemID2[ItemID2["ITEMID_HIROTTASAIFU"] = 1836] = "ITEMID_HIROTTASAIFU";
    ItemID2[ItemID2["ITEMID_CHIISANATAKENOKO"] = 1842] = "ITEMID_CHIISANATAKENOKO";
    ItemID2[ItemID2["ITEMID_OOKINATAKENOKO"] = 1843] = "ITEMID_OOKINATAKENOKO";
    ItemID2[ItemID2["ITEMID_AKUNOKAKEJIKU"] = 1857] = "ITEMID_AKUNOKAKEJIKU";
    ItemID2[ItemID2["ITEMID_MIZUNOKAKEJIKU"] = 1858] = "ITEMID_MIZUNOKAKEJIKU";
    ItemID2[ItemID2["ITEMID_NOROINOYOROI"] = 1861] = "ITEMID_NOROINOYOROI";
    ItemID2[ItemID2["ITEMID_CHENJAA1"] = 1862] = "ITEMID_CHENJAA1";
    ItemID2[ItemID2["ITEMID_CHENJAA2"] = 1863] = "ITEMID_CHENJAA2";
    ItemID2[ItemID2["ITEMID_CHENJAA3"] = 1864] = "ITEMID_CHENJAA3";
    ItemID2[ItemID2["ITEMID_CHENJAA4"] = 1865] = "ITEMID_CHENJAA4";
    ItemID2[ItemID2["ITEMID_CHENJAA5"] = 1866] = "ITEMID_CHENJAA5";
    ItemID2[ItemID2["ITEMID_CHENJAA6"] = 1867] = "ITEMID_CHENJAA6";
    ItemID2[ItemID2["ITEMID_CHENJAA7"] = 1868] = "ITEMID_CHENJAA7";
    ItemID2[ItemID2["ITEMID_CHENJAA8"] = 1869] = "ITEMID_CHENJAA8";
    ItemID2[ItemID2["ITEMID_CHENJAA9"] = 1870] = "ITEMID_CHENJAA9";
    ItemID2[ItemID2["ITEMID_CHENJAA10"] = 1871] = "ITEMID_CHENJAA10";
    ItemID2[ItemID2["ITEMID_CHENJAA11"] = 1872] = "ITEMID_CHENJAA11";
    ItemID2[ItemID2["ITEMID_CHENJAA12"] = 1873] = "ITEMID_CHENJAA12";
    ItemID2[ItemID2["ITEMID_CHENJAA13"] = 1874] = "ITEMID_CHENJAA13";
    ItemID2[ItemID2["ITEMID_CHENJAA14"] = 1875] = "ITEMID_CHENJAA14";
    ItemID2[ItemID2["ITEMID_CHENJAA15"] = 1876] = "ITEMID_CHENJAA15";
    ItemID2[ItemID2["ITEMID_CHENJAA16"] = 1877] = "ITEMID_CHENJAA16";
    ItemID2[ItemID2["ITEMID_CHENJAA17"] = 1878] = "ITEMID_CHENJAA17";
    ItemID2[ItemID2["ITEMID_CHENJAA18"] = 1879] = "ITEMID_CHENJAA18";
    ItemID2[ItemID2["ITEMID_BUUSUTOENAJII"] = 1880] = "ITEMID_BUUSUTOENAJII";
    ItemID2[ItemID2["ITEMID_SENTOUBAFFA1"] = 1881] = "ITEMID_SENTOUBAFFA1";
    ItemID2[ItemID2["ITEMID_SENTOUBAFFA2"] = 1882] = "ITEMID_SENTOUBAFFA2";
    ItemID2[ItemID2["ITEMID_SENTOUBAFFA3"] = 1883] = "ITEMID_SENTOUBAFFA3";
    ItemID2[ItemID2["ITEMID_SENTOUBAFFA4"] = 1884] = "ITEMID_SENTOUBAFFA4";
    ItemID2[ItemID2["ITEMID_SENTOUBAFFA5"] = 1885] = "ITEMID_SENTOUBAFFA5";
    ItemID2[ItemID2["ITEMID_SENTOUBAFFA6"] = 1886] = "ITEMID_SENTOUBAFFA6";
    ItemID2[ItemID2["ITEMID_MAYONEEZU"] = 1889] = "ITEMID_MAYONEEZU";
    ItemID2[ItemID2["ITEMID_KECHAPPU"] = 1890] = "ITEMID_KECHAPPU";
    ItemID2[ItemID2["ITEMID_MASUTAADO"] = 1891] = "ITEMID_MASUTAADO";
    ItemID2[ItemID2["ITEMID_BATAA"] = 1892] = "ITEMID_BATAA";
    ItemID2[ItemID2["ITEMID_PIINATTSUBATAA"] = 1893] = "ITEMID_PIINATTSUBATAA";
    ItemID2[ItemID2["ITEMID_CHIRISOOSU"] = 1894] = "ITEMID_CHIRISOOSU";
    ItemID2[ItemID2["ITEMID_SORUTO"] = 1895] = "ITEMID_SORUTO";
    ItemID2[ItemID2["ITEMID_PEPPAA"] = 1896] = "ITEMID_PEPPAA";
    ItemID2[ItemID2["ITEMID_YOOGURUTO"] = 1897] = "ITEMID_YOOGURUTO";
    ItemID2[ItemID2["ITEMID_HOIPPUKURIIMU"] = 1898] = "ITEMID_HOIPPUKURIIMU";
    ItemID2[ItemID2["ITEMID_KURIIMUCHIIZU"] = 1899] = "ITEMID_KURIIMUCHIIZU";
    ItemID2[ItemID2["ITEMID_BERIIJAMU"] = 1900] = "ITEMID_BERIIJAMU";
    ItemID2[ItemID2["ITEMID_MAAMAREEDO"] = 1901] = "ITEMID_MAAMAREEDO";
    ItemID2[ItemID2["ITEMID_ORIIBUOIRU"] = 1902] = "ITEMID_ORIIBUOIRU";
    ItemID2[ItemID2["ITEMID_BINEGAA"] = 1903] = "ITEMID_BINEGAA";
    ItemID2[ItemID2["ITEMID_TAKARASUPAISU1"] = 1904] = "ITEMID_TAKARASUPAISU1";
    ItemID2[ItemID2["ITEMID_TAKARASUPAISU2"] = 1905] = "ITEMID_TAKARASUPAISU2";
    ItemID2[ItemID2["ITEMID_TAKARASUPAISU3"] = 1906] = "ITEMID_TAKARASUPAISU3";
    ItemID2[ItemID2["ITEMID_TAKARASUPAISU4"] = 1907] = "ITEMID_TAKARASUPAISU4";
    ItemID2[ItemID2["ITEMID_TAKARASUPAISU5"] = 1908] = "ITEMID_TAKARASUPAISU5";
    ItemID2[ItemID2["ITEMID_RETASUPAKKU"] = 1909] = "ITEMID_RETASUPAKKU";
    ItemID2[ItemID2["ITEMID_TOMATOSURAISU"] = 1910] = "ITEMID_TOMATOSURAISU";
    ItemID2[ItemID2["ITEMID_KATTOMINITOMATO"] = 1911] = "ITEMID_KATTOMINITOMATO";
    ItemID2[ItemID2["ITEMID_KYUURISURAISU"] = 1912] = "ITEMID_KYUURISURAISU";
    ItemID2[ItemID2["ITEMID_PIKURUSUSURAISU"] = 1913] = "ITEMID_PIKURUSUSURAISU";
    ItemID2[ItemID2["ITEMID_TAMANEGISURAISU"] = 1914] = "ITEMID_TAMANEGISURAISU";
    ItemID2[ItemID2["ITEMID_REDDOAARII"] = 1915] = "ITEMID_REDDOAARII";
    ItemID2[ItemID2["ITEMID_PIIMANSURAISU"] = 1916] = "ITEMID_PIIMANSURAISU";
    ItemID2[ItemID2["ITEMID_AKAPAPURIKASURAISU"] = 1917] = "ITEMID_AKAPAPURIKASURAISU";
    ItemID2[ItemID2["ITEMID_KIPAPURIKASURAISU"] = 1918] = "ITEMID_KIPAPURIKASURAISU";
    ItemID2[ItemID2["ITEMID_ABOKADO"] = 1919] = "ITEMID_ABOKADO";
    ItemID2[ItemID2["ITEMID_YAKIBEEKON"] = 1920] = "ITEMID_YAKIBEEKON";
    ItemID2[ItemID2["ITEMID_HAMUSURAISU"] = 1921] = "ITEMID_HAMUSURAISU";
    ItemID2[ItemID2["ITEMID_NAMAHAMU"] = 1922] = "ITEMID_NAMAHAMU";
    ItemID2[ItemID2["ITEMID_YAKICHORISOO"] = 1923] = "ITEMID_YAKICHORISOO";
    ItemID2[ItemID2["ITEMID_BOIRUSOOSEEJI"] = 1924] = "ITEMID_BOIRUSOOSEEJI";
    ItemID2[ItemID2["ITEMID_HANBAAGU"] = 1925] = "ITEMID_HANBAAGU";
    ItemID2[ItemID2["ITEMID_KANISUTIKKU"] = 1926] = "ITEMID_KANISUTIKKU";
    ItemID2[ItemID2["ITEMID_SUMOOKUKIRIMI"] = 1927] = "ITEMID_SUMOOKUKIRIMI";
    ItemID2[ItemID2["ITEMID_KIRIMIFURAI"] = 1928] = "ITEMID_KIRIMIFURAI";
    ItemID2[ItemID2["ITEMID_SURAISUEGGU"] = 1929] = "ITEMID_SURAISUEGGU";
    ItemID2[ItemID2["ITEMID_TORUTIIJA"] = 1930] = "ITEMID_TORUTIIJA";
    ItemID2[ItemID2["ITEMID_TOOFU"] = 1931] = "ITEMID_TOOFU";
    ItemID2[ItemID2["ITEMID_RAISU"] = 1932] = "ITEMID_RAISU";
    ItemID2[ItemID2["ITEMID_NUUDORU"] = 1933] = "ITEMID_NUUDORU";
    ItemID2[ItemID2["ITEMID_POTETOSARADA"] = 1934] = "ITEMID_POTETOSARADA";
    ItemID2[ItemID2["ITEMID_SURAISUCHIIZU"] = 1935] = "ITEMID_SURAISUCHIIZU";
    ItemID2[ItemID2["ITEMID_BANANASURAISU"] = 1936] = "ITEMID_BANANASURAISU";
    ItemID2[ItemID2["ITEMID_ICHIGOSURAISU"] = 1937] = "ITEMID_ICHIGOSURAISU";
    ItemID2[ItemID2["ITEMID_WAGIRIRINGO"] = 1938] = "ITEMID_WAGIRIRINGO";
    ItemID2[ItemID2["ITEMID_WAGIRIKIUI"] = 1939] = "ITEMID_WAGIRIKIUI";
    ItemID2[ItemID2["ITEMID_KATTOPAIN"] = 1940] = "ITEMID_KATTOPAIN";
    ItemID2[ItemID2["ITEMID_HARAPEENYO"] = 1941] = "ITEMID_HARAPEENYO";
    ItemID2[ItemID2["ITEMID_HOOSURADISSHU"] = 1942] = "ITEMID_HOOSURADISSHU";
    ItemID2[ItemID2["ITEMID_KAREEPAUDAA"] = 1943] = "ITEMID_KAREEPAUDAA";
    ItemID2[ItemID2["ITEMID_WASABISOOSU"] = 1944] = "ITEMID_WASABISOOSU";
    ItemID2[ItemID2["ITEMID_KURESON"] = 1945] = "ITEMID_KURESON";
    ItemID2[ItemID2["ITEMID_BAJIRU"] = 1946] = "ITEMID_BAJIRU";
    ItemID2[ItemID2["ITEMID_SOZAI01"] = 1956] = "ITEMID_SOZAI01";
    ItemID2[ItemID2["ITEMID_SOZAI02"] = 1957] = "ITEMID_SOZAI02";
    ItemID2[ItemID2["ITEMID_SOZAI03"] = 1958] = "ITEMID_SOZAI03";
    ItemID2[ItemID2["ITEMID_SOZAI04"] = 1959] = "ITEMID_SOZAI04";
    ItemID2[ItemID2["ITEMID_SOZAI05"] = 1960] = "ITEMID_SOZAI05";
    ItemID2[ItemID2["ITEMID_SOZAI06"] = 1961] = "ITEMID_SOZAI06";
    ItemID2[ItemID2["ITEMID_SOZAI07"] = 1962] = "ITEMID_SOZAI07";
    ItemID2[ItemID2["ITEMID_SOZAI08"] = 1963] = "ITEMID_SOZAI08";
    ItemID2[ItemID2["ITEMID_SOZAI09"] = 1964] = "ITEMID_SOZAI09";
    ItemID2[ItemID2["ITEMID_SOZAI10"] = 1965] = "ITEMID_SOZAI10";
    ItemID2[ItemID2["ITEMID_SOZAI11"] = 1966] = "ITEMID_SOZAI11";
    ItemID2[ItemID2["ITEMID_SOZAI12"] = 1967] = "ITEMID_SOZAI12";
    ItemID2[ItemID2["ITEMID_SOZAI13"] = 1968] = "ITEMID_SOZAI13";
    ItemID2[ItemID2["ITEMID_SOZAI14"] = 1969] = "ITEMID_SOZAI14";
    ItemID2[ItemID2["ITEMID_SOZAI15"] = 1970] = "ITEMID_SOZAI15";
    ItemID2[ItemID2["ITEMID_SOZAI16"] = 1971] = "ITEMID_SOZAI16";
    ItemID2[ItemID2["ITEMID_SOZAI17"] = 1972] = "ITEMID_SOZAI17";
    ItemID2[ItemID2["ITEMID_SOZAI18"] = 1973] = "ITEMID_SOZAI18";
    ItemID2[ItemID2["ITEMID_SOZAI19"] = 1974] = "ITEMID_SOZAI19";
    ItemID2[ItemID2["ITEMID_SOZAI20"] = 1975] = "ITEMID_SOZAI20";
    ItemID2[ItemID2["ITEMID_SOZAI21"] = 1976] = "ITEMID_SOZAI21";
    ItemID2[ItemID2["ITEMID_SOZAI22"] = 1977] = "ITEMID_SOZAI22";
    ItemID2[ItemID2["ITEMID_SOZAI23"] = 1978] = "ITEMID_SOZAI23";
    ItemID2[ItemID2["ITEMID_SOZAI24"] = 1979] = "ITEMID_SOZAI24";
    ItemID2[ItemID2["ITEMID_SOZAI25"] = 1980] = "ITEMID_SOZAI25";
    ItemID2[ItemID2["ITEMID_SOZAI26"] = 1981] = "ITEMID_SOZAI26";
    ItemID2[ItemID2["ITEMID_SOZAI27"] = 1982] = "ITEMID_SOZAI27";
    ItemID2[ItemID2["ITEMID_SOZAI28"] = 1983] = "ITEMID_SOZAI28";
    ItemID2[ItemID2["ITEMID_SOZAI29"] = 1984] = "ITEMID_SOZAI29";
    ItemID2[ItemID2["ITEMID_SOZAI30"] = 1985] = "ITEMID_SOZAI30";
    ItemID2[ItemID2["ITEMID_SOZAI31"] = 1986] = "ITEMID_SOZAI31";
    ItemID2[ItemID2["ITEMID_SOZAI32"] = 1987] = "ITEMID_SOZAI32";
    ItemID2[ItemID2["ITEMID_SOZAI33"] = 1988] = "ITEMID_SOZAI33";
    ItemID2[ItemID2["ITEMID_SOZAI34"] = 1989] = "ITEMID_SOZAI34";
    ItemID2[ItemID2["ITEMID_SOZAI35"] = 1990] = "ITEMID_SOZAI35";
    ItemID2[ItemID2["ITEMID_SOZAI36"] = 1991] = "ITEMID_SOZAI36";
    ItemID2[ItemID2["ITEMID_SOZAI37"] = 1992] = "ITEMID_SOZAI37";
    ItemID2[ItemID2["ITEMID_SOZAI38"] = 1993] = "ITEMID_SOZAI38";
    ItemID2[ItemID2["ITEMID_SOZAI39"] = 1994] = "ITEMID_SOZAI39";
    ItemID2[ItemID2["ITEMID_SOZAI40"] = 1995] = "ITEMID_SOZAI40";
    ItemID2[ItemID2["ITEMID_SOZAI41"] = 1996] = "ITEMID_SOZAI41";
    ItemID2[ItemID2["ITEMID_SOZAI42"] = 1997] = "ITEMID_SOZAI42";
    ItemID2[ItemID2["ITEMID_SOZAI43"] = 1998] = "ITEMID_SOZAI43";
    ItemID2[ItemID2["ITEMID_SOZAI44"] = 1999] = "ITEMID_SOZAI44";
    ItemID2[ItemID2["ITEMID_SOZAI45"] = 2e3] = "ITEMID_SOZAI45";
    ItemID2[ItemID2["ITEMID_SOZAI46"] = 2001] = "ITEMID_SOZAI46";
    ItemID2[ItemID2["ITEMID_SOZAI47"] = 2002] = "ITEMID_SOZAI47";
    ItemID2[ItemID2["ITEMID_SOZAI48"] = 2003] = "ITEMID_SOZAI48";
    ItemID2[ItemID2["ITEMID_SOZAI49"] = 2004] = "ITEMID_SOZAI49";
    ItemID2[ItemID2["ITEMID_SOZAI50"] = 2005] = "ITEMID_SOZAI50";
    ItemID2[ItemID2["ITEMID_SOZAI51"] = 2006] = "ITEMID_SOZAI51";
    ItemID2[ItemID2["ITEMID_SOZAI52"] = 2007] = "ITEMID_SOZAI52";
    ItemID2[ItemID2["ITEMID_SOZAI53"] = 2008] = "ITEMID_SOZAI53";
    ItemID2[ItemID2["ITEMID_SOZAI54"] = 2009] = "ITEMID_SOZAI54";
    ItemID2[ItemID2["ITEMID_SOZAI55"] = 2010] = "ITEMID_SOZAI55";
    ItemID2[ItemID2["ITEMID_SOZAI56"] = 2011] = "ITEMID_SOZAI56";
    ItemID2[ItemID2["ITEMID_SOZAI57"] = 2012] = "ITEMID_SOZAI57";
    ItemID2[ItemID2["ITEMID_SOZAI58"] = 2013] = "ITEMID_SOZAI58";
    ItemID2[ItemID2["ITEMID_SOZAI59"] = 2014] = "ITEMID_SOZAI59";
    ItemID2[ItemID2["ITEMID_SOZAI60"] = 2015] = "ITEMID_SOZAI60";
    ItemID2[ItemID2["ITEMID_SOZAI61"] = 2016] = "ITEMID_SOZAI61";
    ItemID2[ItemID2["ITEMID_SOZAI62"] = 2017] = "ITEMID_SOZAI62";
    ItemID2[ItemID2["ITEMID_SOZAI63"] = 2018] = "ITEMID_SOZAI63";
    ItemID2[ItemID2["ITEMID_SOZAI64"] = 2019] = "ITEMID_SOZAI64";
    ItemID2[ItemID2["ITEMID_SOZAI65"] = 2020] = "ITEMID_SOZAI65";
    ItemID2[ItemID2["ITEMID_SOZAI66"] = 2021] = "ITEMID_SOZAI66";
    ItemID2[ItemID2["ITEMID_SOZAI67"] = 2022] = "ITEMID_SOZAI67";
    ItemID2[ItemID2["ITEMID_SOZAI68"] = 2023] = "ITEMID_SOZAI68";
    ItemID2[ItemID2["ITEMID_SOZAI69"] = 2024] = "ITEMID_SOZAI69";
    ItemID2[ItemID2["ITEMID_SOZAI70"] = 2025] = "ITEMID_SOZAI70";
    ItemID2[ItemID2["ITEMID_SOZAI71"] = 2026] = "ITEMID_SOZAI71";
    ItemID2[ItemID2["ITEMID_SOZAI72"] = 2027] = "ITEMID_SOZAI72";
    ItemID2[ItemID2["ITEMID_SOZAI73"] = 2028] = "ITEMID_SOZAI73";
    ItemID2[ItemID2["ITEMID_SOZAI74"] = 2029] = "ITEMID_SOZAI74";
    ItemID2[ItemID2["ITEMID_SOZAI75"] = 2030] = "ITEMID_SOZAI75";
    ItemID2[ItemID2["ITEMID_SOZAI76"] = 2031] = "ITEMID_SOZAI76";
    ItemID2[ItemID2["ITEMID_SOZAI77"] = 2032] = "ITEMID_SOZAI77";
    ItemID2[ItemID2["ITEMID_SOZAI78"] = 2033] = "ITEMID_SOZAI78";
    ItemID2[ItemID2["ITEMID_SOZAI79"] = 2034] = "ITEMID_SOZAI79";
    ItemID2[ItemID2["ITEMID_SOZAI80"] = 2035] = "ITEMID_SOZAI80";
    ItemID2[ItemID2["ITEMID_SOZAI81"] = 2036] = "ITEMID_SOZAI81";
    ItemID2[ItemID2["ITEMID_SOZAI82"] = 2037] = "ITEMID_SOZAI82";
    ItemID2[ItemID2["ITEMID_SOZAI83"] = 2038] = "ITEMID_SOZAI83";
    ItemID2[ItemID2["ITEMID_SOZAI84"] = 2039] = "ITEMID_SOZAI84";
    ItemID2[ItemID2["ITEMID_SOZAI85"] = 2040] = "ITEMID_SOZAI85";
    ItemID2[ItemID2["ITEMID_SOZAI86"] = 2041] = "ITEMID_SOZAI86";
    ItemID2[ItemID2["ITEMID_SOZAI87"] = 2042] = "ITEMID_SOZAI87";
    ItemID2[ItemID2["ITEMID_SOZAI88"] = 2043] = "ITEMID_SOZAI88";
    ItemID2[ItemID2["ITEMID_SOZAI89"] = 2044] = "ITEMID_SOZAI89";
    ItemID2[ItemID2["ITEMID_SOZAI90"] = 2045] = "ITEMID_SOZAI90";
    ItemID2[ItemID2["ITEMID_SOZAI91"] = 2046] = "ITEMID_SOZAI91";
    ItemID2[ItemID2["ITEMID_SOZAI92"] = 2047] = "ITEMID_SOZAI92";
    ItemID2[ItemID2["ITEMID_SOZAI93"] = 2048] = "ITEMID_SOZAI93";
    ItemID2[ItemID2["ITEMID_SOZAI94"] = 2049] = "ITEMID_SOZAI94";
    ItemID2[ItemID2["ITEMID_SOZAI95"] = 2050] = "ITEMID_SOZAI95";
    ItemID2[ItemID2["ITEMID_SOZAI96"] = 2051] = "ITEMID_SOZAI96";
    ItemID2[ItemID2["ITEMID_SOZAI97"] = 2052] = "ITEMID_SOZAI97";
    ItemID2[ItemID2["ITEMID_SOZAI98"] = 2053] = "ITEMID_SOZAI98";
    ItemID2[ItemID2["ITEMID_SOZAI99"] = 2054] = "ITEMID_SOZAI99";
    ItemID2[ItemID2["ITEMID_SOZAI100"] = 2055] = "ITEMID_SOZAI100";
    ItemID2[ItemID2["ITEMID_SOZAI101"] = 2056] = "ITEMID_SOZAI101";
    ItemID2[ItemID2["ITEMID_SOZAI102"] = 2057] = "ITEMID_SOZAI102";
    ItemID2[ItemID2["ITEMID_SOZAI103"] = 2058] = "ITEMID_SOZAI103";
    ItemID2[ItemID2["ITEMID_SOZAI104"] = 2059] = "ITEMID_SOZAI104";
    ItemID2[ItemID2["ITEMID_SOZAI105"] = 2060] = "ITEMID_SOZAI105";
    ItemID2[ItemID2["ITEMID_SOZAI106"] = 2061] = "ITEMID_SOZAI106";
    ItemID2[ItemID2["ITEMID_SOZAI107"] = 2062] = "ITEMID_SOZAI107";
    ItemID2[ItemID2["ITEMID_SOZAI108"] = 2063] = "ITEMID_SOZAI108";
    ItemID2[ItemID2["ITEMID_SOZAI109"] = 2064] = "ITEMID_SOZAI109";
    ItemID2[ItemID2["ITEMID_SOZAI110"] = 2065] = "ITEMID_SOZAI110";
    ItemID2[ItemID2["ITEMID_SOZAI111"] = 2066] = "ITEMID_SOZAI111";
    ItemID2[ItemID2["ITEMID_SOZAI112"] = 2067] = "ITEMID_SOZAI112";
    ItemID2[ItemID2["ITEMID_SOZAI113"] = 2068] = "ITEMID_SOZAI113";
    ItemID2[ItemID2["ITEMID_SOZAI114"] = 2069] = "ITEMID_SOZAI114";
    ItemID2[ItemID2["ITEMID_SOZAI115"] = 2070] = "ITEMID_SOZAI115";
    ItemID2[ItemID2["ITEMID_SOZAI116"] = 2071] = "ITEMID_SOZAI116";
    ItemID2[ItemID2["ITEMID_SOZAI117"] = 2072] = "ITEMID_SOZAI117";
    ItemID2[ItemID2["ITEMID_SOZAI118"] = 2073] = "ITEMID_SOZAI118";
    ItemID2[ItemID2["ITEMID_SOZAI119"] = 2074] = "ITEMID_SOZAI119";
    ItemID2[ItemID2["ITEMID_SOZAI120"] = 2075] = "ITEMID_SOZAI120";
    ItemID2[ItemID2["ITEMID_SOZAI121"] = 2076] = "ITEMID_SOZAI121";
    ItemID2[ItemID2["ITEMID_SOZAI122"] = 2077] = "ITEMID_SOZAI122";
    ItemID2[ItemID2["ITEMID_SOZAI123"] = 2078] = "ITEMID_SOZAI123";
    ItemID2[ItemID2["ITEMID_SOZAI124"] = 2079] = "ITEMID_SOZAI124";
    ItemID2[ItemID2["ITEMID_SOZAI125"] = 2080] = "ITEMID_SOZAI125";
    ItemID2[ItemID2["ITEMID_SOZAI126"] = 2081] = "ITEMID_SOZAI126";
    ItemID2[ItemID2["ITEMID_SOZAI127"] = 2082] = "ITEMID_SOZAI127";
    ItemID2[ItemID2["ITEMID_SOZAI128"] = 2083] = "ITEMID_SOZAI128";
    ItemID2[ItemID2["ITEMID_SOZAI129"] = 2084] = "ITEMID_SOZAI129";
    ItemID2[ItemID2["ITEMID_SOZAI130"] = 2085] = "ITEMID_SOZAI130";
    ItemID2[ItemID2["ITEMID_SOZAI131"] = 2086] = "ITEMID_SOZAI131";
    ItemID2[ItemID2["ITEMID_SOZAI132"] = 2087] = "ITEMID_SOZAI132";
    ItemID2[ItemID2["ITEMID_SOZAI133"] = 2088] = "ITEMID_SOZAI133";
    ItemID2[ItemID2["ITEMID_SOZAI134"] = 2089] = "ITEMID_SOZAI134";
    ItemID2[ItemID2["ITEMID_SOZAI135"] = 2090] = "ITEMID_SOZAI135";
    ItemID2[ItemID2["ITEMID_SOZAI136"] = 2091] = "ITEMID_SOZAI136";
    ItemID2[ItemID2["ITEMID_SOZAI137"] = 2092] = "ITEMID_SOZAI137";
    ItemID2[ItemID2["ITEMID_SOZAI138"] = 2093] = "ITEMID_SOZAI138";
    ItemID2[ItemID2["ITEMID_SOZAI139"] = 2094] = "ITEMID_SOZAI139";
    ItemID2[ItemID2["ITEMID_SOZAI140"] = 2095] = "ITEMID_SOZAI140";
    ItemID2[ItemID2["ITEMID_SOZAI141"] = 2096] = "ITEMID_SOZAI141";
    ItemID2[ItemID2["ITEMID_SOZAI142"] = 2097] = "ITEMID_SOZAI142";
    ItemID2[ItemID2["ITEMID_SOZAI143"] = 2098] = "ITEMID_SOZAI143";
    ItemID2[ItemID2["ITEMID_SOZAI144"] = 2099] = "ITEMID_SOZAI144";
    ItemID2[ItemID2["ITEMID_SOZAI148"] = 2103] = "ITEMID_SOZAI148";
    ItemID2[ItemID2["ITEMID_SOZAI149"] = 2104] = "ITEMID_SOZAI149";
    ItemID2[ItemID2["ITEMID_SOZAI150"] = 2105] = "ITEMID_SOZAI150";
    ItemID2[ItemID2["ITEMID_SOZAI151"] = 2106] = "ITEMID_SOZAI151";
    ItemID2[ItemID2["ITEMID_SOZAI152"] = 2107] = "ITEMID_SOZAI152";
    ItemID2[ItemID2["ITEMID_SOZAI153"] = 2108] = "ITEMID_SOZAI153";
    ItemID2[ItemID2["ITEMID_SOZAI154"] = 2109] = "ITEMID_SOZAI154";
    ItemID2[ItemID2["ITEMID_SOZAI155"] = 2110] = "ITEMID_SOZAI155";
    ItemID2[ItemID2["ITEMID_SOZAI156"] = 2111] = "ITEMID_SOZAI156";
    ItemID2[ItemID2["ITEMID_SOZAI157"] = 2112] = "ITEMID_SOZAI157";
    ItemID2[ItemID2["ITEMID_SOZAI158"] = 2113] = "ITEMID_SOZAI158";
    ItemID2[ItemID2["ITEMID_SOZAI159"] = 2114] = "ITEMID_SOZAI159";
    ItemID2[ItemID2["ITEMID_SOZAI160"] = 2115] = "ITEMID_SOZAI160";
    ItemID2[ItemID2["ITEMID_SOZAI161"] = 2116] = "ITEMID_SOZAI161";
    ItemID2[ItemID2["ITEMID_SOZAI162"] = 2117] = "ITEMID_SOZAI162";
    ItemID2[ItemID2["ITEMID_SOZAI163"] = 2118] = "ITEMID_SOZAI163";
    ItemID2[ItemID2["ITEMID_SOZAI164"] = 2119] = "ITEMID_SOZAI164";
    ItemID2[ItemID2["ITEMID_SOZAI165"] = 2120] = "ITEMID_SOZAI165";
    ItemID2[ItemID2["ITEMID_SOZAI166"] = 2121] = "ITEMID_SOZAI166";
    ItemID2[ItemID2["ITEMID_SOZAI167"] = 2122] = "ITEMID_SOZAI167";
    ItemID2[ItemID2["ITEMID_SOZAI168"] = 2123] = "ITEMID_SOZAI168";
    ItemID2[ItemID2["ITEMID_SOZAI171"] = 2126] = "ITEMID_SOZAI171";
    ItemID2[ItemID2["ITEMID_SOZAI172"] = 2127] = "ITEMID_SOZAI172";
    ItemID2[ItemID2["ITEMID_SOZAI173"] = 2128] = "ITEMID_SOZAI173";
    ItemID2[ItemID2["ITEMID_SOZAI174"] = 2129] = "ITEMID_SOZAI174";
    ItemID2[ItemID2["ITEMID_SOZAI175"] = 2130] = "ITEMID_SOZAI175";
    ItemID2[ItemID2["ITEMID_SOZAI176"] = 2131] = "ITEMID_SOZAI176";
    ItemID2[ItemID2["ITEMID_SOZAI177"] = 2132] = "ITEMID_SOZAI177";
    ItemID2[ItemID2["ITEMID_SOZAI178"] = 2133] = "ITEMID_SOZAI178";
    ItemID2[ItemID2["ITEMID_SOZAI179"] = 2134] = "ITEMID_SOZAI179";
    ItemID2[ItemID2["ITEMID_SOZAI180"] = 2135] = "ITEMID_SOZAI180";
    ItemID2[ItemID2["ITEMID_SOZAI181"] = 2136] = "ITEMID_SOZAI181";
    ItemID2[ItemID2["ITEMID_SOZAI182"] = 2137] = "ITEMID_SOZAI182";
    ItemID2[ItemID2["ITEMID_SOZAI201"] = 2156] = "ITEMID_SOZAI201";
    ItemID2[ItemID2["ITEMID_SOZAI202"] = 2157] = "ITEMID_SOZAI202";
    ItemID2[ItemID2["ITEMID_SOZAI203"] = 2158] = "ITEMID_SOZAI203";
    ItemID2[ItemID2["ITEMID_SOZAI204"] = 2159] = "ITEMID_SOZAI204";
    ItemID2[ItemID2["ITEMID_WAZAMASIN100"] = 2160] = "ITEMID_WAZAMASIN100";
    ItemID2[ItemID2["ITEMID_WAZAMASIN101"] = 2161] = "ITEMID_WAZAMASIN101";
    ItemID2[ItemID2["ITEMID_WAZAMASIN102"] = 2162] = "ITEMID_WAZAMASIN102";
    ItemID2[ItemID2["ITEMID_WAZAMASIN103"] = 2163] = "ITEMID_WAZAMASIN103";
    ItemID2[ItemID2["ITEMID_WAZAMASIN104"] = 2164] = "ITEMID_WAZAMASIN104";
    ItemID2[ItemID2["ITEMID_WAZAMASIN105"] = 2165] = "ITEMID_WAZAMASIN105";
    ItemID2[ItemID2["ITEMID_WAZAMASIN106"] = 2166] = "ITEMID_WAZAMASIN106";
    ItemID2[ItemID2["ITEMID_WAZAMASIN107"] = 2167] = "ITEMID_WAZAMASIN107";
    ItemID2[ItemID2["ITEMID_WAZAMASIN108"] = 2168] = "ITEMID_WAZAMASIN108";
    ItemID2[ItemID2["ITEMID_WAZAMASIN109"] = 2169] = "ITEMID_WAZAMASIN109";
    ItemID2[ItemID2["ITEMID_WAZAMASIN110"] = 2170] = "ITEMID_WAZAMASIN110";
    ItemID2[ItemID2["ITEMID_WAZAMASIN111"] = 2171] = "ITEMID_WAZAMASIN111";
    ItemID2[ItemID2["ITEMID_WAZAMASIN112"] = 2172] = "ITEMID_WAZAMASIN112";
    ItemID2[ItemID2["ITEMID_WAZAMASIN113"] = 2173] = "ITEMID_WAZAMASIN113";
    ItemID2[ItemID2["ITEMID_WAZAMASIN114"] = 2174] = "ITEMID_WAZAMASIN114";
    ItemID2[ItemID2["ITEMID_WAZAMASIN115"] = 2175] = "ITEMID_WAZAMASIN115";
    ItemID2[ItemID2["ITEMID_WAZAMASIN116"] = 2176] = "ITEMID_WAZAMASIN116";
    ItemID2[ItemID2["ITEMID_WAZAMASIN117"] = 2177] = "ITEMID_WAZAMASIN117";
    ItemID2[ItemID2["ITEMID_WAZAMASIN118"] = 2178] = "ITEMID_WAZAMASIN118";
    ItemID2[ItemID2["ITEMID_WAZAMASIN119"] = 2179] = "ITEMID_WAZAMASIN119";
    ItemID2[ItemID2["ITEMID_WAZAMASIN120"] = 2180] = "ITEMID_WAZAMASIN120";
    ItemID2[ItemID2["ITEMID_WAZAMASIN121"] = 2181] = "ITEMID_WAZAMASIN121";
    ItemID2[ItemID2["ITEMID_WAZAMASIN122"] = 2182] = "ITEMID_WAZAMASIN122";
    ItemID2[ItemID2["ITEMID_WAZAMASIN123"] = 2183] = "ITEMID_WAZAMASIN123";
    ItemID2[ItemID2["ITEMID_WAZAMASIN124"] = 2184] = "ITEMID_WAZAMASIN124";
    ItemID2[ItemID2["ITEMID_WAZAMASIN125"] = 2185] = "ITEMID_WAZAMASIN125";
    ItemID2[ItemID2["ITEMID_WAZAMASIN126"] = 2186] = "ITEMID_WAZAMASIN126";
    ItemID2[ItemID2["ITEMID_WAZAMASIN127"] = 2187] = "ITEMID_WAZAMASIN127";
    ItemID2[ItemID2["ITEMID_WAZAMASIN128"] = 2188] = "ITEMID_WAZAMASIN128";
    ItemID2[ItemID2["ITEMID_WAZAMASIN129"] = 2189] = "ITEMID_WAZAMASIN129";
    ItemID2[ItemID2["ITEMID_WAZAMASIN130"] = 2190] = "ITEMID_WAZAMASIN130";
    ItemID2[ItemID2["ITEMID_WAZAMASIN131"] = 2191] = "ITEMID_WAZAMASIN131";
    ItemID2[ItemID2["ITEMID_WAZAMASIN132"] = 2192] = "ITEMID_WAZAMASIN132";
    ItemID2[ItemID2["ITEMID_WAZAMASIN133"] = 2193] = "ITEMID_WAZAMASIN133";
    ItemID2[ItemID2["ITEMID_WAZAMASIN134"] = 2194] = "ITEMID_WAZAMASIN134";
    ItemID2[ItemID2["ITEMID_WAZAMASIN135"] = 2195] = "ITEMID_WAZAMASIN135";
    ItemID2[ItemID2["ITEMID_WAZAMASIN136"] = 2196] = "ITEMID_WAZAMASIN136";
    ItemID2[ItemID2["ITEMID_WAZAMASIN137"] = 2197] = "ITEMID_WAZAMASIN137";
    ItemID2[ItemID2["ITEMID_WAZAMASIN138"] = 2198] = "ITEMID_WAZAMASIN138";
    ItemID2[ItemID2["ITEMID_WAZAMASIN139"] = 2199] = "ITEMID_WAZAMASIN139";
    ItemID2[ItemID2["ITEMID_WAZAMASIN140"] = 2200] = "ITEMID_WAZAMASIN140";
    ItemID2[ItemID2["ITEMID_WAZAMASIN141"] = 2201] = "ITEMID_WAZAMASIN141";
    ItemID2[ItemID2["ITEMID_WAZAMASIN142"] = 2202] = "ITEMID_WAZAMASIN142";
    ItemID2[ItemID2["ITEMID_WAZAMASIN143"] = 2203] = "ITEMID_WAZAMASIN143";
    ItemID2[ItemID2["ITEMID_WAZAMASIN144"] = 2204] = "ITEMID_WAZAMASIN144";
    ItemID2[ItemID2["ITEMID_WAZAMASIN145"] = 2205] = "ITEMID_WAZAMASIN145";
    ItemID2[ItemID2["ITEMID_WAZAMASIN146"] = 2206] = "ITEMID_WAZAMASIN146";
    ItemID2[ItemID2["ITEMID_WAZAMASIN147"] = 2207] = "ITEMID_WAZAMASIN147";
    ItemID2[ItemID2["ITEMID_WAZAMASIN148"] = 2208] = "ITEMID_WAZAMASIN148";
    ItemID2[ItemID2["ITEMID_WAZAMASIN149"] = 2209] = "ITEMID_WAZAMASIN149";
    ItemID2[ItemID2["ITEMID_WAZAMASIN150"] = 2210] = "ITEMID_WAZAMASIN150";
    ItemID2[ItemID2["ITEMID_WAZAMASIN151"] = 2211] = "ITEMID_WAZAMASIN151";
    ItemID2[ItemID2["ITEMID_WAZAMASIN152"] = 2212] = "ITEMID_WAZAMASIN152";
    ItemID2[ItemID2["ITEMID_WAZAMASIN153"] = 2213] = "ITEMID_WAZAMASIN153";
    ItemID2[ItemID2["ITEMID_WAZAMASIN154"] = 2214] = "ITEMID_WAZAMASIN154";
    ItemID2[ItemID2["ITEMID_WAZAMASIN155"] = 2215] = "ITEMID_WAZAMASIN155";
    ItemID2[ItemID2["ITEMID_WAZAMASIN156"] = 2216] = "ITEMID_WAZAMASIN156";
    ItemID2[ItemID2["ITEMID_WAZAMASIN157"] = 2217] = "ITEMID_WAZAMASIN157";
    ItemID2[ItemID2["ITEMID_WAZAMASIN158"] = 2218] = "ITEMID_WAZAMASIN158";
    ItemID2[ItemID2["ITEMID_WAZAMASIN159"] = 2219] = "ITEMID_WAZAMASIN159";
    ItemID2[ItemID2["ITEMID_WAZAMASIN160"] = 2220] = "ITEMID_WAZAMASIN160";
    ItemID2[ItemID2["ITEMID_WAZAMASIN161"] = 2221] = "ITEMID_WAZAMASIN161";
    ItemID2[ItemID2["ITEMID_WAZAMASIN162"] = 2222] = "ITEMID_WAZAMASIN162";
    ItemID2[ItemID2["ITEMID_WAZAMASIN163"] = 2223] = "ITEMID_WAZAMASIN163";
    ItemID2[ItemID2["ITEMID_WAZAMASIN164"] = 2224] = "ITEMID_WAZAMASIN164";
    ItemID2[ItemID2["ITEMID_WAZAMASIN165"] = 2225] = "ITEMID_WAZAMASIN165";
    ItemID2[ItemID2["ITEMID_WAZAMASIN166"] = 2226] = "ITEMID_WAZAMASIN166";
    ItemID2[ItemID2["ITEMID_WAZAMASIN167"] = 2227] = "ITEMID_WAZAMASIN167";
    ItemID2[ItemID2["ITEMID_WAZAMASIN168"] = 2228] = "ITEMID_WAZAMASIN168";
    ItemID2[ItemID2["ITEMID_WAZAMASIN169"] = 2229] = "ITEMID_WAZAMASIN169";
    ItemID2[ItemID2["ITEMID_WAZAMASIN170"] = 2230] = "ITEMID_WAZAMASIN170";
    ItemID2[ItemID2["ITEMID_WAZAMASIN171"] = 2231] = "ITEMID_WAZAMASIN171";
    ItemID2[ItemID2["ITEMID_PIKUNIKKUSETTO"] = 2311] = "ITEMID_PIKUNIKKUSETTO";
    ItemID2[ItemID2["ITEMID_SUITOU1"] = 2313] = "ITEMID_SUITOU1";
    ItemID2[ItemID2["ITEMID_SUITOU2"] = 2314] = "ITEMID_SUITOU2";
    ItemID2[ItemID2["ITEMID_SUITOU3"] = 2315] = "ITEMID_SUITOU3";
    ItemID2[ItemID2["ITEMID_SUITOU4"] = 2316] = "ITEMID_SUITOU4";
    ItemID2[ItemID2["ITEMID_SUITOU5"] = 2317] = "ITEMID_SUITOU5";
    ItemID2[ItemID2["ITEMID_KOPPU1"] = 2318] = "ITEMID_KOPPU1";
    ItemID2[ItemID2["ITEMID_KOPPU2"] = 2319] = "ITEMID_KOPPU2";
    ItemID2[ItemID2["ITEMID_KOPPU3"] = 2320] = "ITEMID_KOPPU3";
    ItemID2[ItemID2["ITEMID_KOPPU4"] = 2321] = "ITEMID_KOPPU4";
    ItemID2[ItemID2["ITEMID_KOPPU5"] = 2322] = "ITEMID_KOPPU5";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA1"] = 2323] = "ITEMID_TEEBURUKABAA1";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA2"] = 2324] = "ITEMID_TEEBURUKABAA2";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA3"] = 2325] = "ITEMID_TEEBURUKABAA3";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA4"] = 2326] = "ITEMID_TEEBURUKABAA4";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA5"] = 2327] = "ITEMID_TEEBURUKABAA5";
    ItemID2[ItemID2["ITEMID_PIKUNIKKUBOORU1"] = 2329] = "ITEMID_PIKUNIKKUBOORU1";
    ItemID2[ItemID2["ITEMID_PIKUNIKKUBOORU2"] = 2330] = "ITEMID_PIKUNIKKUBOORU2";
    ItemID2[ItemID2["ITEMID_PIKUNIKKUBOORU3"] = 2331] = "ITEMID_PIKUNIKKUBOORU3";
    ItemID2[ItemID2["ITEMID_PIKUNIKKUBOORU4"] = 2332] = "ITEMID_PIKUNIKKUBOORU4";
    ItemID2[ItemID2["ITEMID_PIKUNIKKUBOORU5"] = 2333] = "ITEMID_PIKUNIKKUBOORU5";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU1"] = 2334] = "ITEMID_RANCHIPIKKU1";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU2"] = 2335] = "ITEMID_RANCHIPIKKU2";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU3"] = 2336] = "ITEMID_RANCHIPIKKU3";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU4"] = 2337] = "ITEMID_RANCHIPIKKU4";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU5"] = 2338] = "ITEMID_RANCHIPIKKU5";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU6"] = 2339] = "ITEMID_RANCHIPIKKU6";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU7"] = 2340] = "ITEMID_RANCHIPIKKU7";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU8"] = 2341] = "ITEMID_RANCHIPIKKU8";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU9"] = 2342] = "ITEMID_RANCHIPIKKU9";
    ItemID2[ItemID2["ITEMID_IWAINOYOROI"] = 2344] = "ITEMID_IWAINOYOROI";
    ItemID2[ItemID2["ITEMID_KASIRANOAKASI"] = 2345] = "ITEMID_KASIRANOAKASI";
    ItemID2[ItemID2["ITEMID_SUITOU6"] = 2348] = "ITEMID_SUITOU6";
    ItemID2[ItemID2["ITEMID_SUITOU7"] = 2349] = "ITEMID_SUITOU7";
    ItemID2[ItemID2["ITEMID_SUITOU8"] = 2350] = "ITEMID_SUITOU8";
    ItemID2[ItemID2["ITEMID_SUITOU9"] = 2351] = "ITEMID_SUITOU9";
    ItemID2[ItemID2["ITEMID_SUITOU10"] = 2352] = "ITEMID_SUITOU10";
    ItemID2[ItemID2["ITEMID_SUITOU11"] = 2353] = "ITEMID_SUITOU11";
    ItemID2[ItemID2["ITEMID_SUITOU12"] = 2354] = "ITEMID_SUITOU12";
    ItemID2[ItemID2["ITEMID_KOPPU6"] = 2355] = "ITEMID_KOPPU6";
    ItemID2[ItemID2["ITEMID_KOPPU7"] = 2356] = "ITEMID_KOPPU7";
    ItemID2[ItemID2["ITEMID_KOPPU8"] = 2357] = "ITEMID_KOPPU8";
    ItemID2[ItemID2["ITEMID_KOPPU9"] = 2358] = "ITEMID_KOPPU9";
    ItemID2[ItemID2["ITEMID_KOPPU10"] = 2359] = "ITEMID_KOPPU10";
    ItemID2[ItemID2["ITEMID_KOPPU11"] = 2360] = "ITEMID_KOPPU11";
    ItemID2[ItemID2["ITEMID_KOPPU12"] = 2361] = "ITEMID_KOPPU12";
    ItemID2[ItemID2["ITEMID_KOPPU13"] = 2362] = "ITEMID_KOPPU13";
    ItemID2[ItemID2["ITEMID_KOPPU14"] = 2363] = "ITEMID_KOPPU14";
    ItemID2[ItemID2["ITEMID_KOPPU15"] = 2364] = "ITEMID_KOPPU15";
    ItemID2[ItemID2["ITEMID_PIKUNIKKUBOORU6"] = 2365] = "ITEMID_PIKUNIKKUBOORU6";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA6"] = 2366] = "ITEMID_TEEBURUKABAA6";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA7"] = 2367] = "ITEMID_TEEBURUKABAA7";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA8"] = 2368] = "ITEMID_TEEBURUKABAA8";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA9"] = 2369] = "ITEMID_TEEBURUKABAA9";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA10"] = 2370] = "ITEMID_TEEBURUKABAA10";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA11"] = 2371] = "ITEMID_TEEBURUKABAA11";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA12"] = 2372] = "ITEMID_TEEBURUKABAA12";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA13"] = 2373] = "ITEMID_TEEBURUKABAA13";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA14"] = 2374] = "ITEMID_TEEBURUKABAA14";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA15"] = 2375] = "ITEMID_TEEBURUKABAA15";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA16"] = 2376] = "ITEMID_TEEBURUKABAA16";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA17"] = 2377] = "ITEMID_TEEBURUKABAA17";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA18"] = 2378] = "ITEMID_TEEBURUKABAA18";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA19"] = 2379] = "ITEMID_TEEBURUKABAA19";
    ItemID2[ItemID2["ITEMID_TEEBURUKABAA20"] = 2380] = "ITEMID_TEEBURUKABAA20";
    ItemID2[ItemID2["ITEMID_SUITOU13"] = 2381] = "ITEMID_SUITOU13";
    ItemID2[ItemID2["ITEMID_SUITOU14"] = 2382] = "ITEMID_SUITOU14";
    ItemID2[ItemID2["ITEMID_KOPPU16"] = 2383] = "ITEMID_KOPPU16";
    ItemID2[ItemID2["ITEMID_KOPPU17"] = 2384] = "ITEMID_KOPPU17";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU10"] = 2385] = "ITEMID_RANCHIPIKKU10";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU11"] = 2386] = "ITEMID_RANCHIPIKKU11";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU12"] = 2387] = "ITEMID_RANCHIPIKKU12";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU13"] = 2388] = "ITEMID_RANCHIPIKKU13";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU14"] = 2389] = "ITEMID_RANCHIPIKKU14";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU15"] = 2390] = "ITEMID_RANCHIPIKKU15";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU16"] = 2391] = "ITEMID_RANCHIPIKKU16";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU17"] = 2392] = "ITEMID_RANCHIPIKKU17";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU18"] = 2393] = "ITEMID_RANCHIPIKKU18";
    ItemID2[ItemID2["ITEMID_RANCHIPIKKU19"] = 2394] = "ITEMID_RANCHIPIKKU19";
    ItemID2[ItemID2["ITEMID_SARA2"] = 2396] = "ITEMID_SARA2";
    return ItemID2;
  })(ItemID || {});

  // tmp_sv_schema/rare-type.ts
  var RareType = /* @__PURE__ */ ((RareType2) => {
    RareType2[RareType2["DEFAULT"] = 0] = "DEFAULT";
    RareType2[RareType2["NO_RARE"] = 1] = "NO_RARE";
    RareType2[RareType2["RARE"] = 2] = "RARE";
    return RareType2;
  })(RareType || {});

  // tmp_sv_schema/seikaku-type.ts
  var SeikakuType = /* @__PURE__ */ ((SeikakuType2) => {
    SeikakuType2[SeikakuType2["DEFAULT"] = 0] = "DEFAULT";
    SeikakuType2[SeikakuType2["GANBARIYA"] = 1] = "GANBARIYA";
    SeikakuType2[SeikakuType2["SAMISIGARIYA"] = 2] = "SAMISIGARIYA";
    SeikakuType2[SeikakuType2["YUUKAN"] = 3] = "YUUKAN";
    SeikakuType2[SeikakuType2["IJIPPARI"] = 4] = "IJIPPARI";
    SeikakuType2[SeikakuType2["YANTYA"] = 5] = "YANTYA";
    SeikakuType2[SeikakuType2["ZUBUTOI"] = 6] = "ZUBUTOI";
    SeikakuType2[SeikakuType2["SUNAO"] = 7] = "SUNAO";
    SeikakuType2[SeikakuType2["NONKI"] = 8] = "NONKI";
    SeikakuType2[SeikakuType2["WANPAKU"] = 9] = "WANPAKU";
    SeikakuType2[SeikakuType2["NOUTENKI"] = 10] = "NOUTENKI";
    SeikakuType2[SeikakuType2["OKUBYOU"] = 11] = "OKUBYOU";
    SeikakuType2[SeikakuType2["SEKKATI"] = 12] = "SEKKATI";
    SeikakuType2[SeikakuType2["MAJIME"] = 13] = "MAJIME";
    SeikakuType2[SeikakuType2["YOUKI"] = 14] = "YOUKI";
    SeikakuType2[SeikakuType2["MUJYAKI"] = 15] = "MUJYAKI";
    SeikakuType2[SeikakuType2["HIKAEME"] = 16] = "HIKAEME";
    SeikakuType2[SeikakuType2["OTTORI"] = 17] = "OTTORI";
    SeikakuType2[SeikakuType2["REISEI"] = 18] = "REISEI";
    SeikakuType2[SeikakuType2["TEREYA"] = 19] = "TEREYA";
    SeikakuType2[SeikakuType2["UKKARIYA"] = 20] = "UKKARIYA";
    SeikakuType2[SeikakuType2["ODAYAKA"] = 21] = "ODAYAKA";
    SeikakuType2[SeikakuType2["OTONASII"] = 22] = "OTONASII";
    SeikakuType2[SeikakuType2["NAMAIKI"] = 23] = "NAMAIKI";
    SeikakuType2[SeikakuType2["SINNTYOU"] = 24] = "SINNTYOU";
    SeikakuType2[SeikakuType2["KIMAGURE"] = 25] = "KIMAGURE";
    return SeikakuType2;
  })(SeikakuType || {});

  // tmp_sv_schema/sex-type.ts
  var SexType = /* @__PURE__ */ ((SexType2) => {
    SexType2[SexType2["DEFAULT"] = 0] = "DEFAULT";
    SexType2[SexType2["MALE"] = 1] = "MALE";
    SexType2[SexType2["FEMALE"] = 2] = "FEMALE";
    return SexType2;
  })(SexType || {});

  // tmp_sv_schema/size-type.ts
  var SizeType = /* @__PURE__ */ ((SizeType2) => {
    SizeType2[SizeType2["RANDOM"] = 0] = "RANDOM";
    SizeType2[SizeType2["XS"] = 1] = "XS";
    SizeType2[SizeType2["S"] = 2] = "S";
    SizeType2[SizeType2["M"] = 3] = "M";
    SizeType2[SizeType2["L"] = 4] = "L";
    SizeType2[SizeType2["XL"] = 5] = "XL";
    SizeType2[SizeType2["VALUE"] = 6] = "VALUE";
    return SizeType2;
  })(SizeType || {});

  // tmp_sv_schema/talent-type.ts
  var TalentType = /* @__PURE__ */ ((TalentType2) => {
    TalentType2[TalentType2["RANDOM"] = 0] = "RANDOM";
    TalentType2[TalentType2["V_NUM"] = 1] = "V_NUM";
    TalentType2[TalentType2["VALUE"] = 2] = "VALUE";
    return TalentType2;
  })(TalentType || {});

  // tmp_sv_schema/tokusei-type.ts
  var TokuseiType = /* @__PURE__ */ ((TokuseiType2) => {
    TokuseiType2[TokuseiType2["RANDOM_12"] = 0] = "RANDOM_12";
    TokuseiType2[TokuseiType2["RANDOM_123"] = 1] = "RANDOM_123";
    TokuseiType2[TokuseiType2["SET_1"] = 2] = "SET_1";
    TokuseiType2[TokuseiType2["SET_2"] = 3] = "SET_2";
    TokuseiType2[TokuseiType2["SET_3"] = 4] = "SET_3";
    return TokuseiType2;
  })(TokuseiType || {});

  // tmp_sv_schema/param-set.ts
  var ParamSet = class _ParamSet {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    static getRootAsParamSet(bb, obj) {
      return (obj || new _ParamSet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsParamSet(bb, obj) {
      bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
      return (obj || new _ParamSet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    hp() {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    }
    atk() {
      const offset = this.bb.__offset(this.bb_pos, 6);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    }
    def() {
      const offset = this.bb.__offset(this.bb_pos, 8);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    }
    spAtk() {
      const offset = this.bb.__offset(this.bb_pos, 10);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    }
    spDef() {
      const offset = this.bb.__offset(this.bb_pos, 12);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    }
    agi() {
      const offset = this.bb.__offset(this.bb_pos, 14);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    }
    static startParamSet(builder) {
      builder.startObject(6);
    }
    static addHp(builder, hp) {
      builder.addFieldInt32(0, hp, 0);
    }
    static addAtk(builder, atk) {
      builder.addFieldInt32(1, atk, 0);
    }
    static addDef(builder, def) {
      builder.addFieldInt32(2, def, 0);
    }
    static addSpAtk(builder, spAtk) {
      builder.addFieldInt32(3, spAtk, 0);
    }
    static addSpDef(builder, spDef) {
      builder.addFieldInt32(4, spDef, 0);
    }
    static addAgi(builder, agi) {
      builder.addFieldInt32(5, agi, 0);
    }
    static endParamSet(builder) {
      const offset = builder.endObject();
      return offset;
    }
    static createParamSet(builder, hp, atk, def, spAtk, spDef, agi) {
      _ParamSet.startParamSet(builder);
      _ParamSet.addHp(builder, hp);
      _ParamSet.addAtk(builder, atk);
      _ParamSet.addDef(builder, def);
      _ParamSet.addSpAtk(builder, spAtk);
      _ParamSet.addSpDef(builder, spDef);
      _ParamSet.addAgi(builder, agi);
      return _ParamSet.endParamSet(builder);
    }
    unpack() {
      return new ParamSetT(
        this.hp(),
        this.atk(),
        this.def(),
        this.spAtk(),
        this.spDef(),
        this.agi()
      );
    }
    unpackTo(_o) {
      _o.hp = this.hp();
      _o.atk = this.atk();
      _o.def = this.def();
      _o.spAtk = this.spAtk();
      _o.spDef = this.spDef();
      _o.agi = this.agi();
    }
  };
  var ParamSetT = class {
    constructor(hp = 0, atk = 0, def = 0, spAtk = 0, spDef = 0, agi = 0) {
      __publicField(this, "hp", hp);
      __publicField(this, "atk", atk);
      __publicField(this, "def", def);
      __publicField(this, "spAtk", spAtk);
      __publicField(this, "spDef", spDef);
      __publicField(this, "agi", agi);
    }
    pack(builder) {
      return ParamSet.createParamSet(
        builder,
        this.hp,
        this.atk,
        this.def,
        this.spAtk,
        this.spDef,
        this.agi
      );
    }
  };

  // tmp_sv_schema/pml/common/waza-id.ts
  var WazaID = /* @__PURE__ */ ((WazaID2) => {
    WazaID2[WazaID2["WAZA_NULL"] = 0] = "WAZA_NULL";
    WazaID2[WazaID2["WAZA_HATAKU"] = 1] = "WAZA_HATAKU";
    WazaID2[WazaID2["WAZA_KARATETYOPPU"] = 2] = "WAZA_KARATETYOPPU";
    WazaID2[WazaID2["WAZA_OUHUKUBINTA"] = 3] = "WAZA_OUHUKUBINTA";
    WazaID2[WazaID2["WAZA_RENZOKUPANTI"] = 4] = "WAZA_RENZOKUPANTI";
    WazaID2[WazaID2["WAZA_MEGATONPANTI"] = 5] = "WAZA_MEGATONPANTI";
    WazaID2[WazaID2["WAZA_NEKONIKOBAN"] = 6] = "WAZA_NEKONIKOBAN";
    WazaID2[WazaID2["WAZA_HONOONOPANTI"] = 7] = "WAZA_HONOONOPANTI";
    WazaID2[WazaID2["WAZA_REITOUPANTI"] = 8] = "WAZA_REITOUPANTI";
    WazaID2[WazaID2["WAZA_KAMINARIPANTI"] = 9] = "WAZA_KAMINARIPANTI";
    WazaID2[WazaID2["WAZA_HIKKAKU"] = 10] = "WAZA_HIKKAKU";
    WazaID2[WazaID2["WAZA_HASAMU"] = 11] = "WAZA_HASAMU";
    WazaID2[WazaID2["WAZA_HASAMIGIROTIN"] = 12] = "WAZA_HASAMIGIROTIN";
    WazaID2[WazaID2["WAZA_KAMAITATI"] = 13] = "WAZA_KAMAITATI";
    WazaID2[WazaID2["WAZA_TURUGINOMAI"] = 14] = "WAZA_TURUGINOMAI";
    WazaID2[WazaID2["WAZA_IAIGIRI"] = 15] = "WAZA_IAIGIRI";
    WazaID2[WazaID2["WAZA_KAZEOKOSI"] = 16] = "WAZA_KAZEOKOSI";
    WazaID2[WazaID2["WAZA_TUBASADEUTU"] = 17] = "WAZA_TUBASADEUTU";
    WazaID2[WazaID2["WAZA_HUKITOBASI"] = 18] = "WAZA_HUKITOBASI";
    WazaID2[WazaID2["WAZA_SORAWOTOBU"] = 19] = "WAZA_SORAWOTOBU";
    WazaID2[WazaID2["WAZA_SIMETUKERU"] = 20] = "WAZA_SIMETUKERU";
    WazaID2[WazaID2["WAZA_TATAKITUKERU"] = 21] = "WAZA_TATAKITUKERU";
    WazaID2[WazaID2["WAZA_TURUNOMUTI"] = 22] = "WAZA_TURUNOMUTI";
    WazaID2[WazaID2["WAZA_HUMITUKE"] = 23] = "WAZA_HUMITUKE";
    WazaID2[WazaID2["WAZA_NIDOGERI"] = 24] = "WAZA_NIDOGERI";
    WazaID2[WazaID2["WAZA_MEGATONKIKKU"] = 25] = "WAZA_MEGATONKIKKU";
    WazaID2[WazaID2["WAZA_TOBIGERI"] = 26] = "WAZA_TOBIGERI";
    WazaID2[WazaID2["WAZA_MAWASIGERI"] = 27] = "WAZA_MAWASIGERI";
    WazaID2[WazaID2["WAZA_SUNAKAKE"] = 28] = "WAZA_SUNAKAKE";
    WazaID2[WazaID2["WAZA_ZUTUKI"] = 29] = "WAZA_ZUTUKI";
    WazaID2[WazaID2["WAZA_TUNODETUKU"] = 30] = "WAZA_TUNODETUKU";
    WazaID2[WazaID2["WAZA_MIDAREDUKI"] = 31] = "WAZA_MIDAREDUKI";
    WazaID2[WazaID2["WAZA_TUNODORIRU"] = 32] = "WAZA_TUNODORIRU";
    WazaID2[WazaID2["WAZA_TAIATARI"] = 33] = "WAZA_TAIATARI";
    WazaID2[WazaID2["WAZA_NOSIKAKARI"] = 34] = "WAZA_NOSIKAKARI";
    WazaID2[WazaID2["WAZA_MAKITUKU"] = 35] = "WAZA_MAKITUKU";
    WazaID2[WazaID2["WAZA_TOSSIN"] = 36] = "WAZA_TOSSIN";
    WazaID2[WazaID2["WAZA_ABARERU"] = 37] = "WAZA_ABARERU";
    WazaID2[WazaID2["WAZA_SUTEMITAKKURU"] = 38] = "WAZA_SUTEMITAKKURU";
    WazaID2[WazaID2["WAZA_SIPPOWOHURU"] = 39] = "WAZA_SIPPOWOHURU";
    WazaID2[WazaID2["WAZA_DOKUBARI"] = 40] = "WAZA_DOKUBARI";
    WazaID2[WazaID2["WAZA_DABURUNIIDORU"] = 41] = "WAZA_DABURUNIIDORU";
    WazaID2[WazaID2["WAZA_MISAIRUBARI"] = 42] = "WAZA_MISAIRUBARI";
    WazaID2[WazaID2["WAZA_NIRAMITUKERU"] = 43] = "WAZA_NIRAMITUKERU";
    WazaID2[WazaID2["WAZA_KAMITUKU"] = 44] = "WAZA_KAMITUKU";
    WazaID2[WazaID2["WAZA_NAKIGOE"] = 45] = "WAZA_NAKIGOE";
    WazaID2[WazaID2["WAZA_HOERU"] = 46] = "WAZA_HOERU";
    WazaID2[WazaID2["WAZA_UTAU"] = 47] = "WAZA_UTAU";
    WazaID2[WazaID2["WAZA_TYOUONPA"] = 48] = "WAZA_TYOUONPA";
    WazaID2[WazaID2["WAZA_SONIKKUBUUMU"] = 49] = "WAZA_SONIKKUBUUMU";
    WazaID2[WazaID2["WAZA_KANASIBARI"] = 50] = "WAZA_KANASIBARI";
    WazaID2[WazaID2["WAZA_YOUKAIEKI"] = 51] = "WAZA_YOUKAIEKI";
    WazaID2[WazaID2["WAZA_HINOKO"] = 52] = "WAZA_HINOKO";
    WazaID2[WazaID2["WAZA_KAENHOUSYA"] = 53] = "WAZA_KAENHOUSYA";
    WazaID2[WazaID2["WAZA_SIROIKIRI"] = 54] = "WAZA_SIROIKIRI";
    WazaID2[WazaID2["WAZA_MIZUDEPPOU"] = 55] = "WAZA_MIZUDEPPOU";
    WazaID2[WazaID2["WAZA_HAIDOROPONPU"] = 56] = "WAZA_HAIDOROPONPU";
    WazaID2[WazaID2["WAZA_NAMINORI"] = 57] = "WAZA_NAMINORI";
    WazaID2[WazaID2["WAZA_REITOUBIIMU"] = 58] = "WAZA_REITOUBIIMU";
    WazaID2[WazaID2["WAZA_HUBUKI"] = 59] = "WAZA_HUBUKI";
    WazaID2[WazaID2["WAZA_SAIKEKOUSEN"] = 60] = "WAZA_SAIKEKOUSEN";
    WazaID2[WazaID2["WAZA_BABURUKOUSEN"] = 61] = "WAZA_BABURUKOUSEN";
    WazaID2[WazaID2["WAZA_OORORABIIMU"] = 62] = "WAZA_OORORABIIMU";
    WazaID2[WazaID2["WAZA_HAKAIKOUSEN"] = 63] = "WAZA_HAKAIKOUSEN";
    WazaID2[WazaID2["WAZA_TUTUKU"] = 64] = "WAZA_TUTUKU";
    WazaID2[WazaID2["WAZA_DORIRUKUTIBASI"] = 65] = "WAZA_DORIRUKUTIBASI";
    WazaID2[WazaID2["WAZA_ZIGOKUGURUMA"] = 66] = "WAZA_ZIGOKUGURUMA";
    WazaID2[WazaID2["WAZA_KETAGURI"] = 67] = "WAZA_KETAGURI";
    WazaID2[WazaID2["WAZA_KAUNTAA"] = 68] = "WAZA_KAUNTAA";
    WazaID2[WazaID2["WAZA_TIKYUUNAGE"] = 69] = "WAZA_TIKYUUNAGE";
    WazaID2[WazaID2["WAZA_KAIRIKI"] = 70] = "WAZA_KAIRIKI";
    WazaID2[WazaID2["WAZA_SUITORU"] = 71] = "WAZA_SUITORU";
    WazaID2[WazaID2["WAZA_MEGADOREIN"] = 72] = "WAZA_MEGADOREIN";
    WazaID2[WazaID2["WAZA_YADORIGINOTANE"] = 73] = "WAZA_YADORIGINOTANE";
    WazaID2[WazaID2["WAZA_SEITYOU"] = 74] = "WAZA_SEITYOU";
    WazaID2[WazaID2["WAZA_HAPPAKATTAA"] = 75] = "WAZA_HAPPAKATTAA";
    WazaID2[WazaID2["WAZA_SOORAABIIMU"] = 76] = "WAZA_SOORAABIIMU";
    WazaID2[WazaID2["WAZA_DOKUNOKONA"] = 77] = "WAZA_DOKUNOKONA";
    WazaID2[WazaID2["WAZA_SIBIREGONA"] = 78] = "WAZA_SIBIREGONA";
    WazaID2[WazaID2["WAZA_NEMURIGONA"] = 79] = "WAZA_NEMURIGONA";
    WazaID2[WazaID2["WAZA_HANABIRANOMAI"] = 80] = "WAZA_HANABIRANOMAI";
    WazaID2[WazaID2["WAZA_ITOWOHAKU"] = 81] = "WAZA_ITOWOHAKU";
    WazaID2[WazaID2["WAZA_RYUUNOIKARI"] = 82] = "WAZA_RYUUNOIKARI";
    WazaID2[WazaID2["WAZA_HONOONOUZU"] = 83] = "WAZA_HONOONOUZU";
    WazaID2[WazaID2["WAZA_DENKISYOKKU"] = 84] = "WAZA_DENKISYOKKU";
    WazaID2[WazaID2["WAZA_10MANBORUTO"] = 85] = "WAZA_10MANBORUTO";
    WazaID2[WazaID2["WAZA_DENZIHA"] = 86] = "WAZA_DENZIHA";
    WazaID2[WazaID2["WAZA_KAMINARI"] = 87] = "WAZA_KAMINARI";
    WazaID2[WazaID2["WAZA_IWAOTOSI"] = 88] = "WAZA_IWAOTOSI";
    WazaID2[WazaID2["WAZA_ZISIN"] = 89] = "WAZA_ZISIN";
    WazaID2[WazaID2["WAZA_ZIWARE"] = 90] = "WAZA_ZIWARE";
    WazaID2[WazaID2["WAZA_ANAWOHORU"] = 91] = "WAZA_ANAWOHORU";
    WazaID2[WazaID2["WAZA_DOKUDOKU"] = 92] = "WAZA_DOKUDOKU";
    WazaID2[WazaID2["WAZA_NENRIKI"] = 93] = "WAZA_NENRIKI";
    WazaID2[WazaID2["WAZA_SAIKOKINESISU"] = 94] = "WAZA_SAIKOKINESISU";
    WazaID2[WazaID2["WAZA_SAIMINZYUTU"] = 95] = "WAZA_SAIMINZYUTU";
    WazaID2[WazaID2["WAZA_YOGANOPOOZU"] = 96] = "WAZA_YOGANOPOOZU";
    WazaID2[WazaID2["WAZA_KOUSOKUIDOU"] = 97] = "WAZA_KOUSOKUIDOU";
    WazaID2[WazaID2["WAZA_DENKOUSEKKA"] = 98] = "WAZA_DENKOUSEKKA";
    WazaID2[WazaID2["WAZA_IKARI"] = 99] = "WAZA_IKARI";
    WazaID2[WazaID2["WAZA_TEREPOOTO"] = 100] = "WAZA_TEREPOOTO";
    WazaID2[WazaID2["WAZA_NAITOHEDDO"] = 101] = "WAZA_NAITOHEDDO";
    WazaID2[WazaID2["WAZA_MONOMANE"] = 102] = "WAZA_MONOMANE";
    WazaID2[WazaID2["WAZA_IYANAOTO"] = 103] = "WAZA_IYANAOTO";
    WazaID2[WazaID2["WAZA_KAGEBUNSIN"] = 104] = "WAZA_KAGEBUNSIN";
    WazaID2[WazaID2["WAZA_ZIKOSAISEI"] = 105] = "WAZA_ZIKOSAISEI";
    WazaID2[WazaID2["WAZA_KATAKUNARU"] = 106] = "WAZA_KATAKUNARU";
    WazaID2[WazaID2["WAZA_TIISAKUNARU"] = 107] = "WAZA_TIISAKUNARU";
    WazaID2[WazaID2["WAZA_ENMAKU"] = 108] = "WAZA_ENMAKU";
    WazaID2[WazaID2["WAZA_AYASIIHIKARI"] = 109] = "WAZA_AYASIIHIKARI";
    WazaID2[WazaID2["WAZA_KARANIKOMORU"] = 110] = "WAZA_KARANIKOMORU";
    WazaID2[WazaID2["WAZA_MARUKUNARU"] = 111] = "WAZA_MARUKUNARU";
    WazaID2[WazaID2["WAZA_BARIAA"] = 112] = "WAZA_BARIAA";
    WazaID2[WazaID2["WAZA_HIKARINOKABE"] = 113] = "WAZA_HIKARINOKABE";
    WazaID2[WazaID2["WAZA_KUROIKIRI"] = 114] = "WAZA_KUROIKIRI";
    WazaID2[WazaID2["WAZA_RIHUREKUTAA"] = 115] = "WAZA_RIHUREKUTAA";
    WazaID2[WazaID2["WAZA_KIAIDAME"] = 116] = "WAZA_KIAIDAME";
    WazaID2[WazaID2["WAZA_GAMAN"] = 117] = "WAZA_GAMAN";
    WazaID2[WazaID2["WAZA_YUBIWOHURU"] = 118] = "WAZA_YUBIWOHURU";
    WazaID2[WazaID2["WAZA_OUMUGAESI"] = 119] = "WAZA_OUMUGAESI";
    WazaID2[WazaID2["WAZA_ZIBAKU"] = 120] = "WAZA_ZIBAKU";
    WazaID2[WazaID2["WAZA_TAMAGOBAKUDAN"] = 121] = "WAZA_TAMAGOBAKUDAN";
    WazaID2[WazaID2["WAZA_SITADENAMERU"] = 122] = "WAZA_SITADENAMERU";
    WazaID2[WazaID2["WAZA_SUMOGGU"] = 123] = "WAZA_SUMOGGU";
    WazaID2[WazaID2["WAZA_HEDOROKOUGEKI"] = 124] = "WAZA_HEDOROKOUGEKI";
    WazaID2[WazaID2["WAZA_HONEKONBOU"] = 125] = "WAZA_HONEKONBOU";
    WazaID2[WazaID2["WAZA_DAIMONZI"] = 126] = "WAZA_DAIMONZI";
    WazaID2[WazaID2["WAZA_TAKINOBORI"] = 127] = "WAZA_TAKINOBORI";
    WazaID2[WazaID2["WAZA_KARADEHASAMU"] = 128] = "WAZA_KARADEHASAMU";
    WazaID2[WazaID2["WAZA_SUPIIDOSUTAA"] = 129] = "WAZA_SUPIIDOSUTAA";
    WazaID2[WazaID2["WAZA_ROKETTOZUTUKI"] = 130] = "WAZA_ROKETTOZUTUKI";
    WazaID2[WazaID2["WAZA_TOGEKYANON"] = 131] = "WAZA_TOGEKYANON";
    WazaID2[WazaID2["WAZA_KARAMITUKU"] = 132] = "WAZA_KARAMITUKU";
    WazaID2[WazaID2["WAZA_DOWASURE"] = 133] = "WAZA_DOWASURE";
    WazaID2[WazaID2["WAZA_SUPUUNMAGE"] = 134] = "WAZA_SUPUUNMAGE";
    WazaID2[WazaID2["WAZA_TAMAGOUMI"] = 135] = "WAZA_TAMAGOUMI";
    WazaID2[WazaID2["WAZA_TOBIHIZAGERI"] = 136] = "WAZA_TOBIHIZAGERI";
    WazaID2[WazaID2["WAZA_HEBINIRAMI"] = 137] = "WAZA_HEBINIRAMI";
    WazaID2[WazaID2["WAZA_YUMEKUI"] = 138] = "WAZA_YUMEKUI";
    WazaID2[WazaID2["WAZA_DOKUGASU"] = 139] = "WAZA_DOKUGASU";
    WazaID2[WazaID2["WAZA_TAMANAGE"] = 140] = "WAZA_TAMANAGE";
    WazaID2[WazaID2["WAZA_KYUUKETU"] = 141] = "WAZA_KYUUKETU";
    WazaID2[WazaID2["WAZA_AKUMANOKISSU"] = 142] = "WAZA_AKUMANOKISSU";
    WazaID2[WazaID2["WAZA_GODDOBAADO"] = 143] = "WAZA_GODDOBAADO";
    WazaID2[WazaID2["WAZA_HENSIN"] = 144] = "WAZA_HENSIN";
    WazaID2[WazaID2["WAZA_AWA"] = 145] = "WAZA_AWA";
    WazaID2[WazaID2["WAZA_PIYOPIYOPANTI"] = 146] = "WAZA_PIYOPIYOPANTI";
    WazaID2[WazaID2["WAZA_KINOKONOHOUSI"] = 147] = "WAZA_KINOKONOHOUSI";
    WazaID2[WazaID2["WAZA_HURASSYU"] = 148] = "WAZA_HURASSYU";
    WazaID2[WazaID2["WAZA_SAIKOWHEEBU"] = 149] = "WAZA_SAIKOWHEEBU";
    WazaID2[WazaID2["WAZA_HANERU"] = 150] = "WAZA_HANERU";
    WazaID2[WazaID2["WAZA_TOKERU"] = 151] = "WAZA_TOKERU";
    WazaID2[WazaID2["WAZA_KURABUHANMAA"] = 152] = "WAZA_KURABUHANMAA";
    WazaID2[WazaID2["WAZA_DAIBAKUHATU"] = 153] = "WAZA_DAIBAKUHATU";
    WazaID2[WazaID2["WAZA_MIDAREHIKKAKI"] = 154] = "WAZA_MIDAREHIKKAKI";
    WazaID2[WazaID2["WAZA_HONEBUUMERAN"] = 155] = "WAZA_HONEBUUMERAN";
    WazaID2[WazaID2["WAZA_NEMURU"] = 156] = "WAZA_NEMURU";
    WazaID2[WazaID2["WAZA_IWANADARE"] = 157] = "WAZA_IWANADARE";
    WazaID2[WazaID2["WAZA_HISSATUMAEBA"] = 158] = "WAZA_HISSATUMAEBA";
    WazaID2[WazaID2["WAZA_KAKUBARU"] = 159] = "WAZA_KAKUBARU";
    WazaID2[WazaID2["WAZA_TEKUSUTYAA"] = 160] = "WAZA_TEKUSUTYAA";
    WazaID2[WazaID2["WAZA_TORAIATAKKU"] = 161] = "WAZA_TORAIATAKKU";
    WazaID2[WazaID2["WAZA_IKARINOMAEBA"] = 162] = "WAZA_IKARINOMAEBA";
    WazaID2[WazaID2["WAZA_KIRISAKU"] = 163] = "WAZA_KIRISAKU";
    WazaID2[WazaID2["WAZA_MIGAWARI"] = 164] = "WAZA_MIGAWARI";
    WazaID2[WazaID2["WAZA_WARUAGAKI"] = 165] = "WAZA_WARUAGAKI";
    WazaID2[WazaID2["WAZA_SUKETTI"] = 166] = "WAZA_SUKETTI";
    WazaID2[WazaID2["WAZA_TORIPURUKIKKU"] = 167] = "WAZA_TORIPURUKIKKU";
    WazaID2[WazaID2["WAZA_DOROBOU"] = 168] = "WAZA_DOROBOU";
    WazaID2[WazaID2["WAZA_KUMONOSU"] = 169] = "WAZA_KUMONOSU";
    WazaID2[WazaID2["WAZA_KOKORONOME"] = 170] = "WAZA_KOKORONOME";
    WazaID2[WazaID2["WAZA_AKUMU"] = 171] = "WAZA_AKUMU";
    WazaID2[WazaID2["WAZA_KAENGURUMA"] = 172] = "WAZA_KAENGURUMA";
    WazaID2[WazaID2["WAZA_IBIKI"] = 173] = "WAZA_IBIKI";
    WazaID2[WazaID2["WAZA_NOROI"] = 174] = "WAZA_NOROI";
    WazaID2[WazaID2["WAZA_ZITABATA"] = 175] = "WAZA_ZITABATA";
    WazaID2[WazaID2["WAZA_TEKUSUTYAA2"] = 176] = "WAZA_TEKUSUTYAA2";
    WazaID2[WazaID2["WAZA_EAROBURASUTO"] = 177] = "WAZA_EAROBURASUTO";
    WazaID2[WazaID2["WAZA_WATAHOUSI"] = 178] = "WAZA_WATAHOUSI";
    WazaID2[WazaID2["WAZA_KISIKAISEI"] = 179] = "WAZA_KISIKAISEI";
    WazaID2[WazaID2["WAZA_URAMI"] = 180] = "WAZA_URAMI";
    WazaID2[WazaID2["WAZA_KONAYUKI"] = 181] = "WAZA_KONAYUKI";
    WazaID2[WazaID2["WAZA_MAMORU"] = 182] = "WAZA_MAMORU";
    WazaID2[WazaID2["WAZA_MAHHAPANTI"] = 183] = "WAZA_MAHHAPANTI";
    WazaID2[WazaID2["WAZA_KOWAIKAO"] = 184] = "WAZA_KOWAIKAO";
    WazaID2[WazaID2["WAZA_DAMASIUTI"] = 185] = "WAZA_DAMASIUTI";
    WazaID2[WazaID2["WAZA_TENSINOKISSU"] = 186] = "WAZA_TENSINOKISSU";
    WazaID2[WazaID2["WAZA_HARADAIKO"] = 187] = "WAZA_HARADAIKO";
    WazaID2[WazaID2["WAZA_HEDOROBAKUDAN"] = 188] = "WAZA_HEDOROBAKUDAN";
    WazaID2[WazaID2["WAZA_DOROKAKE"] = 189] = "WAZA_DOROKAKE";
    WazaID2[WazaID2["WAZA_OKUTANHOU"] = 190] = "WAZA_OKUTANHOU";
    WazaID2[WazaID2["WAZA_MAKIBISI"] = 191] = "WAZA_MAKIBISI";
    WazaID2[WazaID2["WAZA_DENZIHOU"] = 192] = "WAZA_DENZIHOU";
    WazaID2[WazaID2["WAZA_MIYABURU"] = 193] = "WAZA_MIYABURU";
    WazaID2[WazaID2["WAZA_MITIDURE"] = 194] = "WAZA_MITIDURE";
    WazaID2[WazaID2["WAZA_HOROBINOUTA"] = 195] = "WAZA_HOROBINOUTA";
    WazaID2[WazaID2["WAZA_KOGOERUKAZE"] = 196] = "WAZA_KOGOERUKAZE";
    WazaID2[WazaID2["WAZA_MIKIRI"] = 197] = "WAZA_MIKIRI";
    WazaID2[WazaID2["WAZA_BOONRASSYU"] = 198] = "WAZA_BOONRASSYU";
    WazaID2[WazaID2["WAZA_ROKKUON"] = 199] = "WAZA_ROKKUON";
    WazaID2[WazaID2["WAZA_GEKIRIN"] = 200] = "WAZA_GEKIRIN";
    WazaID2[WazaID2["WAZA_SUNAARASI"] = 201] = "WAZA_SUNAARASI";
    WazaID2[WazaID2["WAZA_GIGADOREIN"] = 202] = "WAZA_GIGADOREIN";
    WazaID2[WazaID2["WAZA_KORAERU"] = 203] = "WAZA_KORAERU";
    WazaID2[WazaID2["WAZA_AMAERU"] = 204] = "WAZA_AMAERU";
    WazaID2[WazaID2["WAZA_KOROGARU"] = 205] = "WAZA_KOROGARU";
    WazaID2[WazaID2["WAZA_MINEUTI"] = 206] = "WAZA_MINEUTI";
    WazaID2[WazaID2["WAZA_IBARU"] = 207] = "WAZA_IBARU";
    WazaID2[WazaID2["WAZA_MIRUKUNOMI"] = 208] = "WAZA_MIRUKUNOMI";
    WazaID2[WazaID2["WAZA_SUPAAKU"] = 209] = "WAZA_SUPAAKU";
    WazaID2[WazaID2["WAZA_RENZOKUGIRI"] = 210] = "WAZA_RENZOKUGIRI";
    WazaID2[WazaID2["WAZA_HAGANENOTUBASA"] = 211] = "WAZA_HAGANENOTUBASA";
    WazaID2[WazaID2["WAZA_KUROIMANAZASI"] = 212] = "WAZA_KUROIMANAZASI";
    WazaID2[WazaID2["WAZA_MEROMERO"] = 213] = "WAZA_MEROMERO";
    WazaID2[WazaID2["WAZA_NEGOTO"] = 214] = "WAZA_NEGOTO";
    WazaID2[WazaID2["WAZA_IYASINOSUZU"] = 215] = "WAZA_IYASINOSUZU";
    WazaID2[WazaID2["WAZA_ONGAESI"] = 216] = "WAZA_ONGAESI";
    WazaID2[WazaID2["WAZA_PUREZENTO"] = 217] = "WAZA_PUREZENTO";
    WazaID2[WazaID2["WAZA_YATUATARI"] = 218] = "WAZA_YATUATARI";
    WazaID2[WazaID2["WAZA_SINPINOMAMORI"] = 219] = "WAZA_SINPINOMAMORI";
    WazaID2[WazaID2["WAZA_ITAMIWAKE"] = 220] = "WAZA_ITAMIWAKE";
    WazaID2[WazaID2["WAZA_SEINARUHONOO"] = 221] = "WAZA_SEINARUHONOO";
    WazaID2[WazaID2["WAZA_MAGUNITYUUDO"] = 222] = "WAZA_MAGUNITYUUDO";
    WazaID2[WazaID2["WAZA_BAKURETUPANTI"] = 223] = "WAZA_BAKURETUPANTI";
    WazaID2[WazaID2["WAZA_MEGAHOON"] = 224] = "WAZA_MEGAHOON";
    WazaID2[WazaID2["WAZA_RYUUNOIBUKI"] = 225] = "WAZA_RYUUNOIBUKI";
    WazaID2[WazaID2["WAZA_BATONTATTI"] = 226] = "WAZA_BATONTATTI";
    WazaID2[WazaID2["WAZA_ANKOORU"] = 227] = "WAZA_ANKOORU";
    WazaID2[WazaID2["WAZA_OIUTI"] = 228] = "WAZA_OIUTI";
    WazaID2[WazaID2["WAZA_KOUSOKUSUPIN"] = 229] = "WAZA_KOUSOKUSUPIN";
    WazaID2[WazaID2["WAZA_AMAIKAORI"] = 230] = "WAZA_AMAIKAORI";
    WazaID2[WazaID2["WAZA_AIANTEERU"] = 231] = "WAZA_AIANTEERU";
    WazaID2[WazaID2["WAZA_METARUKUROO"] = 232] = "WAZA_METARUKUROO";
    WazaID2[WazaID2["WAZA_ATEMINAGE"] = 233] = "WAZA_ATEMINAGE";
    WazaID2[WazaID2["WAZA_ASANOHIZASI"] = 234] = "WAZA_ASANOHIZASI";
    WazaID2[WazaID2["WAZA_KOUGOUSEI"] = 235] = "WAZA_KOUGOUSEI";
    WazaID2[WazaID2["WAZA_TUKINOHIKARI"] = 236] = "WAZA_TUKINOHIKARI";
    WazaID2[WazaID2["WAZA_MEZAMERUPAWAA"] = 237] = "WAZA_MEZAMERUPAWAA";
    WazaID2[WazaID2["WAZA_KUROSUTYOPPU"] = 238] = "WAZA_KUROSUTYOPPU";
    WazaID2[WazaID2["WAZA_TATUMAKI"] = 239] = "WAZA_TATUMAKI";
    WazaID2[WazaID2["WAZA_AMAGOI"] = 240] = "WAZA_AMAGOI";
    WazaID2[WazaID2["WAZA_NIHONBARE"] = 241] = "WAZA_NIHONBARE";
    WazaID2[WazaID2["WAZA_KAMIKUDAKU"] = 242] = "WAZA_KAMIKUDAKU";
    WazaID2[WazaID2["WAZA_MIRAAKOOTO"] = 243] = "WAZA_MIRAAKOOTO";
    WazaID2[WazaID2["WAZA_ZIKOANZI"] = 244] = "WAZA_ZIKOANZI";
    WazaID2[WazaID2["WAZA_SINSOKU"] = 245] = "WAZA_SINSOKU";
    WazaID2[WazaID2["WAZA_GENSINOTIKARA"] = 246] = "WAZA_GENSINOTIKARA";
    WazaID2[WazaID2["WAZA_SYADOOBOORU"] = 247] = "WAZA_SYADOOBOORU";
    WazaID2[WazaID2["WAZA_MIRAIYOTI"] = 248] = "WAZA_MIRAIYOTI";
    WazaID2[WazaID2["WAZA_IWAKUDAKI"] = 249] = "WAZA_IWAKUDAKI";
    WazaID2[WazaID2["WAZA_UZUSIO"] = 250] = "WAZA_UZUSIO";
    WazaID2[WazaID2["WAZA_HUKURODATAKI"] = 251] = "WAZA_HUKURODATAKI";
    WazaID2[WazaID2["WAZA_NEKODAMASI"] = 252] = "WAZA_NEKODAMASI";
    WazaID2[WazaID2["WAZA_SAWAGU"] = 253] = "WAZA_SAWAGU";
    WazaID2[WazaID2["WAZA_TAKUWAERU"] = 254] = "WAZA_TAKUWAERU";
    WazaID2[WazaID2["WAZA_HAKIDASU"] = 255] = "WAZA_HAKIDASU";
    WazaID2[WazaID2["WAZA_NOMIKOMU"] = 256] = "WAZA_NOMIKOMU";
    WazaID2[WazaID2["WAZA_NEPPUU"] = 257] = "WAZA_NEPPUU";
    WazaID2[WazaID2["WAZA_ARARE"] = 258] = "WAZA_ARARE";
    WazaID2[WazaID2["WAZA_ITYAMON"] = 259] = "WAZA_ITYAMON";
    WazaID2[WazaID2["WAZA_ODATERU"] = 260] = "WAZA_ODATERU";
    WazaID2[WazaID2["WAZA_ONIBI"] = 261] = "WAZA_ONIBI";
    WazaID2[WazaID2["WAZA_OKIMIYAGE"] = 262] = "WAZA_OKIMIYAGE";
    WazaID2[WazaID2["WAZA_KARAGENKI"] = 263] = "WAZA_KARAGENKI";
    WazaID2[WazaID2["WAZA_KIAIPANTI"] = 264] = "WAZA_KIAIPANTI";
    WazaID2[WazaID2["WAZA_KITUKE"] = 265] = "WAZA_KITUKE";
    WazaID2[WazaID2["WAZA_KONOYUBITOMARE"] = 266] = "WAZA_KONOYUBITOMARE";
    WazaID2[WazaID2["WAZA_SIZENNOTIKARA"] = 267] = "WAZA_SIZENNOTIKARA";
    WazaID2[WazaID2["WAZA_ZYUUDEN"] = 268] = "WAZA_ZYUUDEN";
    WazaID2[WazaID2["WAZA_TYOUHATU"] = 269] = "WAZA_TYOUHATU";
    WazaID2[WazaID2["WAZA_TEDASUKE"] = 270] = "WAZA_TEDASUKE";
    WazaID2[WazaID2["WAZA_TORIKKU"] = 271] = "WAZA_TORIKKU";
    WazaID2[WazaID2["WAZA_NARIKIRI"] = 272] = "WAZA_NARIKIRI";
    WazaID2[WazaID2["WAZA_NEGAIGOTO"] = 273] = "WAZA_NEGAIGOTO";
    WazaID2[WazaID2["WAZA_NEKONOTE"] = 274] = "WAZA_NEKONOTE";
    WazaID2[WazaID2["WAZA_NEWOHARU"] = 275] = "WAZA_NEWOHARU";
    WazaID2[WazaID2["WAZA_BAKADIKARA"] = 276] = "WAZA_BAKADIKARA";
    WazaID2[WazaID2["WAZA_MAZIKKUKOOTO"] = 277] = "WAZA_MAZIKKUKOOTO";
    WazaID2[WazaID2["WAZA_RISAIKURU"] = 278] = "WAZA_RISAIKURU";
    WazaID2[WazaID2["WAZA_RIBENZI"] = 279] = "WAZA_RIBENZI";
    WazaID2[WazaID2["WAZA_KAWARAWARI"] = 280] = "WAZA_KAWARAWARI";
    WazaID2[WazaID2["WAZA_AKUBI"] = 281] = "WAZA_AKUBI";
    WazaID2[WazaID2["WAZA_HATAKIOTOSU"] = 282] = "WAZA_HATAKIOTOSU";
    WazaID2[WazaID2["WAZA_GAMUSYARA"] = 283] = "WAZA_GAMUSYARA";
    WazaID2[WazaID2["WAZA_HUNKA"] = 284] = "WAZA_HUNKA";
    WazaID2[WazaID2["WAZA_SUKIRUSUWAPPU"] = 285] = "WAZA_SUKIRUSUWAPPU";
    WazaID2[WazaID2["WAZA_HUUIN"] = 286] = "WAZA_HUUIN";
    WazaID2[WazaID2["WAZA_RIHURESSYU"] = 287] = "WAZA_RIHURESSYU";
    WazaID2[WazaID2["WAZA_ONNEN"] = 288] = "WAZA_ONNEN";
    WazaID2[WazaID2["WAZA_YOKODORI"] = 289] = "WAZA_YOKODORI";
    WazaID2[WazaID2["WAZA_HIMITUNOTIKARA"] = 290] = "WAZA_HIMITUNOTIKARA";
    WazaID2[WazaID2["WAZA_DAIBINGU"] = 291] = "WAZA_DAIBINGU";
    WazaID2[WazaID2["WAZA_TUPPARI"] = 292] = "WAZA_TUPPARI";
    WazaID2[WazaID2["WAZA_HOGOSYOKU"] = 293] = "WAZA_HOGOSYOKU";
    WazaID2[WazaID2["WAZA_HOTARUBI"] = 294] = "WAZA_HOTARUBI";
    WazaID2[WazaID2["WAZA_RASUTAAPAAZI"] = 295] = "WAZA_RASUTAAPAAZI";
    WazaID2[WazaID2["WAZA_MISUTOBOORU"] = 296] = "WAZA_MISUTOBOORU";
    WazaID2[WazaID2["WAZA_FEZAADANSU"] = 297] = "WAZA_FEZAADANSU";
    WazaID2[WazaID2["WAZA_HURAHURADANSU"] = 298] = "WAZA_HURAHURADANSU";
    WazaID2[WazaID2["WAZA_BUREIZUKIKKU"] = 299] = "WAZA_BUREIZUKIKKU";
    WazaID2[WazaID2["WAZA_DOROASOBI"] = 300] = "WAZA_DOROASOBI";
    WazaID2[WazaID2["WAZA_AISUBOORU"] = 301] = "WAZA_AISUBOORU";
    WazaID2[WazaID2["WAZA_NIIDORUAAMU"] = 302] = "WAZA_NIIDORUAAMU";
    WazaID2[WazaID2["WAZA_NAMAKERU"] = 303] = "WAZA_NAMAKERU";
    WazaID2[WazaID2["WAZA_HAIPAABOISU"] = 304] = "WAZA_HAIPAABOISU";
    WazaID2[WazaID2["WAZA_DOKUDOKUNOKIBA"] = 305] = "WAZA_DOKUDOKUNOKIBA";
    WazaID2[WazaID2["WAZA_BUREIKUKUROO"] = 306] = "WAZA_BUREIKUKUROO";
    WazaID2[WazaID2["WAZA_BURASUTOBAAN"] = 307] = "WAZA_BURASUTOBAAN";
    WazaID2[WazaID2["WAZA_HAIDOROKANON"] = 308] = "WAZA_HAIDOROKANON";
    WazaID2[WazaID2["WAZA_KOMETTOPANTI"] = 309] = "WAZA_KOMETTOPANTI";
    WazaID2[WazaID2["WAZA_ODOROKASU"] = 310] = "WAZA_ODOROKASU";
    WazaID2[WazaID2["WAZA_WHEZAABOORU"] = 311] = "WAZA_WHEZAABOORU";
    WazaID2[WazaID2["WAZA_AROMASERAPII"] = 312] = "WAZA_AROMASERAPII";
    WazaID2[WazaID2["WAZA_USONAKI"] = 313] = "WAZA_USONAKI";
    WazaID2[WazaID2["WAZA_EAKATTAA"] = 314] = "WAZA_EAKATTAA";
    WazaID2[WazaID2["WAZA_OOBAAHIITO"] = 315] = "WAZA_OOBAAHIITO";
    WazaID2[WazaID2["WAZA_KAGIWAKERU"] = 316] = "WAZA_KAGIWAKERU";
    WazaID2[WazaID2["WAZA_GANSEKIHUUZI"] = 317] = "WAZA_GANSEKIHUUZI";
    WazaID2[WazaID2["WAZA_GINIRONOKAZE"] = 318] = "WAZA_GINIRONOKAZE";
    WazaID2[WazaID2["WAZA_KINZOKUON"] = 319] = "WAZA_KINZOKUON";
    WazaID2[WazaID2["WAZA_KUSABUE"] = 320] = "WAZA_KUSABUE";
    WazaID2[WazaID2["WAZA_KUSUGURU"] = 321] = "WAZA_KUSUGURU";
    WazaID2[WazaID2["WAZA_KOSUMOPAWAA"] = 322] = "WAZA_KOSUMOPAWAA";
    WazaID2[WazaID2["WAZA_SIOHUKI"] = 323] = "WAZA_SIOHUKI";
    WazaID2[WazaID2["WAZA_SIGUNARUBIIMU"] = 324] = "WAZA_SIGUNARUBIIMU";
    WazaID2[WazaID2["WAZA_SYADOOPANTI"] = 325] = "WAZA_SYADOOPANTI";
    WazaID2[WazaID2["WAZA_ZINTUURIKI"] = 326] = "WAZA_ZINTUURIKI";
    WazaID2[WazaID2["WAZA_SUKAIAPPAA"] = 327] = "WAZA_SUKAIAPPAA";
    WazaID2[WazaID2["WAZA_SUNAZIGOKU"] = 328] = "WAZA_SUNAZIGOKU";
    WazaID2[WazaID2["WAZA_ZETTAIREIDO"] = 329] = "WAZA_ZETTAIREIDO";
    WazaID2[WazaID2["WAZA_DAKURYUU"] = 330] = "WAZA_DAKURYUU";
    WazaID2[WazaID2["WAZA_TANEMASINGAN"] = 331] = "WAZA_TANEMASINGAN";
    WazaID2[WazaID2["WAZA_TUBAMEGAESI"] = 332] = "WAZA_TUBAMEGAESI";
    WazaID2[WazaID2["WAZA_TURARABARI"] = 333] = "WAZA_TURARABARI";
    WazaID2[WazaID2["WAZA_TEPPEKI"] = 334] = "WAZA_TEPPEKI";
    WazaID2[WazaID2["WAZA_TOOSENBOU"] = 335] = "WAZA_TOOSENBOU";
    WazaID2[WazaID2["WAZA_TOOBOE"] = 336] = "WAZA_TOOBOE";
    WazaID2[WazaID2["WAZA_DORAGONKUROO"] = 337] = "WAZA_DORAGONKUROO";
    WazaID2[WazaID2["WAZA_HAADOPURANTO"] = 338] = "WAZA_HAADOPURANTO";
    WazaID2[WazaID2["WAZA_BIRUDOAPPU"] = 339] = "WAZA_BIRUDOAPPU";
    WazaID2[WazaID2["WAZA_TOBIHANERU"] = 340] = "WAZA_TOBIHANERU";
    WazaID2[WazaID2["WAZA_MADDOSYOTTO"] = 341] = "WAZA_MADDOSYOTTO";
    WazaID2[WazaID2["WAZA_POIZUNTEERU"] = 342] = "WAZA_POIZUNTEERU";
    WazaID2[WazaID2["WAZA_HOSIGARU"] = 343] = "WAZA_HOSIGARU";
    WazaID2[WazaID2["WAZA_BORUTEKKAA"] = 344] = "WAZA_BORUTEKKAA";
    WazaID2[WazaID2["WAZA_MAZIKARURIIHU"] = 345] = "WAZA_MAZIKARURIIHU";
    WazaID2[WazaID2["WAZA_MIZUASOBI"] = 346] = "WAZA_MIZUASOBI";
    WazaID2[WazaID2["WAZA_MEISOU"] = 347] = "WAZA_MEISOU";
    WazaID2[WazaID2["WAZA_RIIHUBUREEDO"] = 348] = "WAZA_RIIHUBUREEDO";
    WazaID2[WazaID2["WAZA_RYUUNOMAI"] = 349] = "WAZA_RYUUNOMAI";
    WazaID2[WazaID2["WAZA_ROKKUBURASUTO"] = 350] = "WAZA_ROKKUBURASUTO";
    WazaID2[WazaID2["WAZA_DENGEKIHA"] = 351] = "WAZA_DENGEKIHA";
    WazaID2[WazaID2["WAZA_MIZUNOHADOU"] = 352] = "WAZA_MIZUNOHADOU";
    WazaID2[WazaID2["WAZA_HAMETUNONEGAI"] = 353] = "WAZA_HAMETUNONEGAI";
    WazaID2[WazaID2["WAZA_SAIKOBUUSUTO"] = 354] = "WAZA_SAIKOBUUSUTO";
    WazaID2[WazaID2["WAZA_HANEYASUME"] = 355] = "WAZA_HANEYASUME";
    WazaID2[WazaID2["WAZA_ZYUURYOKU"] = 356] = "WAZA_ZYUURYOKU";
    WazaID2[WazaID2["WAZA_MIRAKURUAI"] = 357] = "WAZA_MIRAKURUAI";
    WazaID2[WazaID2["WAZA_MEZAMASIBINTA"] = 358] = "WAZA_MEZAMASIBINTA";
    WazaID2[WazaID2["WAZA_AAMUHANMAA"] = 359] = "WAZA_AAMUHANMAA";
    WazaID2[WazaID2["WAZA_ZYAIROBOORU"] = 360] = "WAZA_ZYAIROBOORU";
    WazaID2[WazaID2["WAZA_IYASINONEGAI"] = 361] = "WAZA_IYASINONEGAI";
    WazaID2[WazaID2["WAZA_SIOMIZU"] = 362] = "WAZA_SIOMIZU";
    WazaID2[WazaID2["WAZA_SIZENNOMEGUMI"] = 363] = "WAZA_SIZENNOMEGUMI";
    WazaID2[WazaID2["WAZA_FEINTO"] = 364] = "WAZA_FEINTO";
    WazaID2[WazaID2["WAZA_TUIBAMU"] = 365] = "WAZA_TUIBAMU";
    WazaID2[WazaID2["WAZA_OIKAZE"] = 366] = "WAZA_OIKAZE";
    WazaID2[WazaID2["WAZA_TUBOWOTUKU"] = 367] = "WAZA_TUBOWOTUKU";
    WazaID2[WazaID2["WAZA_METARUBAASUTO"] = 368] = "WAZA_METARUBAASUTO";
    WazaID2[WazaID2["WAZA_TONBOGAERI"] = 369] = "WAZA_TONBOGAERI";
    WazaID2[WazaID2["WAZA_INFAITO"] = 370] = "WAZA_INFAITO";
    WazaID2[WazaID2["WAZA_SIPPEGAESI"] = 371] = "WAZA_SIPPEGAESI";
    WazaID2[WazaID2["WAZA_DAMEOSI"] = 372] = "WAZA_DAMEOSI";
    WazaID2[WazaID2["WAZA_SASIOSAE"] = 373] = "WAZA_SASIOSAE";
    WazaID2[WazaID2["WAZA_NAGETUKERU"] = 374] = "WAZA_NAGETUKERU";
    WazaID2[WazaID2["WAZA_SAIKOSIHUTO"] = 375] = "WAZA_SAIKOSIHUTO";
    WazaID2[WazaID2["WAZA_KIRIHUDA"] = 376] = "WAZA_KIRIHUDA";
    WazaID2[WazaID2["WAZA_KAIHUKUHUUZI"] = 377] = "WAZA_KAIHUKUHUUZI";
    WazaID2[WazaID2["WAZA_SIBORITORU"] = 378] = "WAZA_SIBORITORU";
    WazaID2[WazaID2["WAZA_PAWAATORIKKU"] = 379] = "WAZA_PAWAATORIKKU";
    WazaID2[WazaID2["WAZA_IEKI"] = 380] = "WAZA_IEKI";
    WazaID2[WazaID2["WAZA_OMAZINAI"] = 381] = "WAZA_OMAZINAI";
    WazaID2[WazaID2["WAZA_SAKIDORI"] = 382] = "WAZA_SAKIDORI";
    WazaID2[WazaID2["WAZA_MANEKKO"] = 383] = "WAZA_MANEKKO";
    WazaID2[WazaID2["WAZA_PAWAASUWAPPU"] = 384] = "WAZA_PAWAASUWAPPU";
    WazaID2[WazaID2["WAZA_GAADOSUWAPPU"] = 385] = "WAZA_GAADOSUWAPPU";
    WazaID2[WazaID2["WAZA_OSIOKI"] = 386] = "WAZA_OSIOKI";
    WazaID2[WazaID2["WAZA_TOTTEOKI"] = 387] = "WAZA_TOTTEOKI";
    WazaID2[WazaID2["WAZA_NAYAMINOTANE"] = 388] = "WAZA_NAYAMINOTANE";
    WazaID2[WazaID2["WAZA_HUIUTI"] = 389] = "WAZA_HUIUTI";
    WazaID2[WazaID2["WAZA_DOKUBISI"] = 390] = "WAZA_DOKUBISI";
    WazaID2[WazaID2["WAZA_HAATOSUWAPPU"] = 391] = "WAZA_HAATOSUWAPPU";
    WazaID2[WazaID2["WAZA_AKUARINGU"] = 392] = "WAZA_AKUARINGU";
    WazaID2[WazaID2["WAZA_DENZIHUYUU"] = 393] = "WAZA_DENZIHUYUU";
    WazaID2[WazaID2["WAZA_HUREADORAIBU"] = 394] = "WAZA_HUREADORAIBU";
    WazaID2[WazaID2["WAZA_HAKKEI"] = 395] = "WAZA_HAKKEI";
    WazaID2[WazaID2["WAZA_HADOUDAN"] = 396] = "WAZA_HADOUDAN";
    WazaID2[WazaID2["WAZA_ROKKUKATTO"] = 397] = "WAZA_ROKKUKATTO";
    WazaID2[WazaID2["WAZA_DOKUDUKI"] = 398] = "WAZA_DOKUDUKI";
    WazaID2[WazaID2["WAZA_AKUNOHADOU"] = 399] = "WAZA_AKUNOHADOU";
    WazaID2[WazaID2["WAZA_TUZIGIRI"] = 400] = "WAZA_TUZIGIRI";
    WazaID2[WazaID2["WAZA_AKUATEERU"] = 401] = "WAZA_AKUATEERU";
    WazaID2[WazaID2["WAZA_TANEBAKUDAN"] = 402] = "WAZA_TANEBAKUDAN";
    WazaID2[WazaID2["WAZA_EASURASSYU"] = 403] = "WAZA_EASURASSYU";
    WazaID2[WazaID2["WAZA_SIZAAKUROSU"] = 404] = "WAZA_SIZAAKUROSU";
    WazaID2[WazaID2["WAZA_MUSINOSAZAMEKI"] = 405] = "WAZA_MUSINOSAZAMEKI";
    WazaID2[WazaID2["WAZA_RYUUNOHADOU"] = 406] = "WAZA_RYUUNOHADOU";
    WazaID2[WazaID2["WAZA_DORAGONDAIBU"] = 407] = "WAZA_DORAGONDAIBU";
    WazaID2[WazaID2["WAZA_PAWAAJEMU"] = 408] = "WAZA_PAWAAJEMU";
    WazaID2[WazaID2["WAZA_DOREINPANTI"] = 409] = "WAZA_DOREINPANTI";
    WazaID2[WazaID2["WAZA_SINKUUHA"] = 410] = "WAZA_SINKUUHA";
    WazaID2[WazaID2["WAZA_KIAIDAMA"] = 411] = "WAZA_KIAIDAMA";
    WazaID2[WazaID2["WAZA_ENAZIIBOORU"] = 412] = "WAZA_ENAZIIBOORU";
    WazaID2[WazaID2["WAZA_BUREIBUBAADO"] = 413] = "WAZA_BUREIBUBAADO";
    WazaID2[WazaID2["WAZA_DAITINOTIKARA"] = 414] = "WAZA_DAITINOTIKARA";
    WazaID2[WazaID2["WAZA_SURIKAE"] = 415] = "WAZA_SURIKAE";
    WazaID2[WazaID2["WAZA_GIGAINPAKUTO"] = 416] = "WAZA_GIGAINPAKUTO";
    WazaID2[WazaID2["WAZA_WARUDAKUMI"] = 417] = "WAZA_WARUDAKUMI";
    WazaID2[WazaID2["WAZA_BARETTOPANTI"] = 418] = "WAZA_BARETTOPANTI";
    WazaID2[WazaID2["WAZA_YUKINADARE"] = 419] = "WAZA_YUKINADARE";
    WazaID2[WazaID2["WAZA_KOORINOTUBUTE"] = 420] = "WAZA_KOORINOTUBUTE";
    WazaID2[WazaID2["WAZA_SYADOOKUROO"] = 421] = "WAZA_SYADOOKUROO";
    WazaID2[WazaID2["WAZA_KAMINARINOKIBA"] = 422] = "WAZA_KAMINARINOKIBA";
    WazaID2[WazaID2["WAZA_KOORINOKIBA"] = 423] = "WAZA_KOORINOKIBA";
    WazaID2[WazaID2["WAZA_HONOONOKIBA"] = 424] = "WAZA_HONOONOKIBA";
    WazaID2[WazaID2["WAZA_KAGEUTI"] = 425] = "WAZA_KAGEUTI";
    WazaID2[WazaID2["WAZA_DOROBAKUDAN"] = 426] = "WAZA_DOROBAKUDAN";
    WazaID2[WazaID2["WAZA_SAIKOKATTAA"] = 427] = "WAZA_SAIKOKATTAA";
    WazaID2[WazaID2["WAZA_SINENNOZUTUKI"] = 428] = "WAZA_SINENNOZUTUKI";
    WazaID2[WazaID2["WAZA_MIRAASYOTTO"] = 429] = "WAZA_MIRAASYOTTO";
    WazaID2[WazaID2["WAZA_RASUTAAKANON"] = 430] = "WAZA_RASUTAAKANON";
    WazaID2[WazaID2["WAZA_ROKKUKURAIMU"] = 431] = "WAZA_ROKKUKURAIMU";
    WazaID2[WazaID2["WAZA_KIRIBARAI"] = 432] = "WAZA_KIRIBARAI";
    WazaID2[WazaID2["WAZA_TORIKKURUUMU"] = 433] = "WAZA_TORIKKURUUMU";
    WazaID2[WazaID2["WAZA_RYUUSEIGUN"] = 434] = "WAZA_RYUUSEIGUN";
    WazaID2[WazaID2["WAZA_HOUDEN"] = 435] = "WAZA_HOUDEN";
    WazaID2[WazaID2["WAZA_HUNEN"] = 436] = "WAZA_HUNEN";
    WazaID2[WazaID2["WAZA_RIIHUSUTOOMU"] = 437] = "WAZA_RIIHUSUTOOMU";
    WazaID2[WazaID2["WAZA_PAWAAWHIPPU"] = 438] = "WAZA_PAWAAWHIPPU";
    WazaID2[WazaID2["WAZA_GANSEKIHOU"] = 439] = "WAZA_GANSEKIHOU";
    WazaID2[WazaID2["WAZA_KUROSUPOIZUN"] = 440] = "WAZA_KUROSUPOIZUN";
    WazaID2[WazaID2["WAZA_DASUTOSYUUTO"] = 441] = "WAZA_DASUTOSYUUTO";
    WazaID2[WazaID2["WAZA_AIANHEDDO"] = 442] = "WAZA_AIANHEDDO";
    WazaID2[WazaID2["WAZA_MAGUNETTOBOMU"] = 443] = "WAZA_MAGUNETTOBOMU";
    WazaID2[WazaID2["WAZA_SUTOONEZZI"] = 444] = "WAZA_SUTOONEZZI";
    WazaID2[WazaID2["WAZA_YUUWAKU"] = 445] = "WAZA_YUUWAKU";
    WazaID2[WazaID2["WAZA_SUTERUSUROKKU"] = 446] = "WAZA_SUTERUSUROKKU";
    WazaID2[WazaID2["WAZA_KUSAMUSUBI"] = 447] = "WAZA_KUSAMUSUBI";
    WazaID2[WazaID2["WAZA_OSYABERI"] = 448] = "WAZA_OSYABERI";
    WazaID2[WazaID2["WAZA_SABAKINOTUBUTE"] = 449] = "WAZA_SABAKINOTUBUTE";
    WazaID2[WazaID2["WAZA_MUSIKUI"] = 450] = "WAZA_MUSIKUI";
    WazaID2[WazaID2["WAZA_TYAAZIBIIMU"] = 451] = "WAZA_TYAAZIBIIMU";
    WazaID2[WazaID2["WAZA_UDDOHANMAA"] = 452] = "WAZA_UDDOHANMAA";
    WazaID2[WazaID2["WAZA_AKUAJETTO"] = 453] = "WAZA_AKUAJETTO";
    WazaID2[WazaID2["WAZA_KOUGEKISIREI"] = 454] = "WAZA_KOUGEKISIREI";
    WazaID2[WazaID2["WAZA_BOUGYOSIREI"] = 455] = "WAZA_BOUGYOSIREI";
    WazaID2[WazaID2["WAZA_KAIHUKUSIREI"] = 456] = "WAZA_KAIHUKUSIREI";
    WazaID2[WazaID2["WAZA_MOROHANOZUTUKI"] = 457] = "WAZA_MOROHANOZUTUKI";
    WazaID2[WazaID2["WAZA_DABURUATAKKU"] = 458] = "WAZA_DABURUATAKKU";
    WazaID2[WazaID2["WAZA_TOKINOHOUKOU"] = 459] = "WAZA_TOKINOHOUKOU";
    WazaID2[WazaID2["WAZA_AKUUSETUDAN"] = 460] = "WAZA_AKUUSETUDAN";
    WazaID2[WazaID2["WAZA_MIKADUKINOMAI"] = 461] = "WAZA_MIKADUKINOMAI";
    WazaID2[WazaID2["WAZA_NIGIRITUBUSU"] = 462] = "WAZA_NIGIRITUBUSU";
    WazaID2[WazaID2["WAZA_MAGUMASUTOOMU"] = 463] = "WAZA_MAGUMASUTOOMU";
    WazaID2[WazaID2["WAZA_DAAKUHOORU"] = 464] = "WAZA_DAAKUHOORU";
    WazaID2[WazaID2["WAZA_SIIDOHUREA"] = 465] = "WAZA_SIIDOHUREA";
    WazaID2[WazaID2["WAZA_AYASIIKAZE"] = 466] = "WAZA_AYASIIKAZE";
    WazaID2[WazaID2["WAZA_SYADOODAIBU"] = 467] = "WAZA_SYADOODAIBU";
    WazaID2[WazaID2["WAZA_TUMETOGI"] = 468] = "WAZA_TUMETOGI";
    WazaID2[WazaID2["WAZA_WAIDOGAADO"] = 469] = "WAZA_WAIDOGAADO";
    WazaID2[WazaID2["WAZA_GAADOSHEA"] = 470] = "WAZA_GAADOSHEA";
    WazaID2[WazaID2["WAZA_PAWAASHEA"] = 471] = "WAZA_PAWAASHEA";
    WazaID2[WazaID2["WAZA_WANDAARUUMU"] = 472] = "WAZA_WANDAARUUMU";
    WazaID2[WazaID2["WAZA_SAIKOSYOKKU"] = 473] = "WAZA_SAIKOSYOKKU";
    WazaID2[WazaID2["WAZA_BENOMUSYOKKU"] = 474] = "WAZA_BENOMUSYOKKU";
    WazaID2[WazaID2["WAZA_BODHIPAAZI"] = 475] = "WAZA_BODHIPAAZI";
    WazaID2[WazaID2["WAZA_IKARINOKONA"] = 476] = "WAZA_IKARINOKONA";
    WazaID2[WazaID2["WAZA_TEREKINESISU"] = 477] = "WAZA_TEREKINESISU";
    WazaID2[WazaID2["WAZA_MAZIKKURUUMU"] = 478] = "WAZA_MAZIKKURUUMU";
    WazaID2[WazaID2["WAZA_UTIOTOSU"] = 479] = "WAZA_UTIOTOSU";
    WazaID2[WazaID2["WAZA_YAMAARASI"] = 480] = "WAZA_YAMAARASI";
    WazaID2[WazaID2["WAZA_HAZIKERUHONOO"] = 481] = "WAZA_HAZIKERUHONOO";
    WazaID2[WazaID2["WAZA_HEDOROWHEEBU"] = 482] = "WAZA_HEDOROWHEEBU";
    WazaID2[WazaID2["WAZA_TYOUNOMAI"] = 483] = "WAZA_TYOUNOMAI";
    WazaID2[WazaID2["WAZA_HEBIIBONBAA"] = 484] = "WAZA_HEBIIBONBAA";
    WazaID2[WazaID2["WAZA_SINKURONOIZU"] = 485] = "WAZA_SINKURONOIZU";
    WazaID2[WazaID2["WAZA_EREKIBOORU"] = 486] = "WAZA_EREKIBOORU";
    WazaID2[WazaID2["WAZA_MIZUBITASI"] = 487] = "WAZA_MIZUBITASI";
    WazaID2[WazaID2["WAZA_NITOROTYAAZI"] = 488] = "WAZA_NITOROTYAAZI";
    WazaID2[WazaID2["WAZA_TOGUROWOMAKU"] = 489] = "WAZA_TOGUROWOMAKU";
    WazaID2[WazaID2["WAZA_ROOKIKKU"] = 490] = "WAZA_ROOKIKKU";
    WazaID2[WazaID2["WAZA_ASIDDOBOMU"] = 491] = "WAZA_ASIDDOBOMU";
    WazaID2[WazaID2["WAZA_IKASAMA"] = 492] = "WAZA_IKASAMA";
    WazaID2[WazaID2["WAZA_SINPURUBIIMU"] = 493] = "WAZA_SINPURUBIIMU";
    WazaID2[WazaID2["WAZA_NAKAMADUKURI"] = 494] = "WAZA_NAKAMADUKURI";
    WazaID2[WazaID2["WAZA_OSAKINIDOUZO"] = 495] = "WAZA_OSAKINIDOUZO";
    WazaID2[WazaID2["WAZA_RINSYOU"] = 496] = "WAZA_RINSYOU";
    WazaID2[WazaID2["WAZA_EKOOBOISU"] = 497] = "WAZA_EKOOBOISU";
    WazaID2[WazaID2["WAZA_NASIKUZUSI"] = 498] = "WAZA_NASIKUZUSI";
    WazaID2[WazaID2["WAZA_KURIASUMOGGU"] = 499] = "WAZA_KURIASUMOGGU";
    WazaID2[WazaID2["WAZA_ASISUTOPAWAA"] = 500] = "WAZA_ASISUTOPAWAA";
    WazaID2[WazaID2["WAZA_FASUTOGAADO"] = 501] = "WAZA_FASUTOGAADO";
    WazaID2[WazaID2["WAZA_SAIDOTHENZI"] = 502] = "WAZA_SAIDOTHENZI";
    WazaID2[WazaID2["WAZA_NETTOU"] = 503] = "WAZA_NETTOU";
    WazaID2[WazaID2["WAZA_KARAWOYABURU"] = 504] = "WAZA_KARAWOYABURU";
    WazaID2[WazaID2["WAZA_IYASINOHADOU"] = 505] = "WAZA_IYASINOHADOU";
    WazaID2[WazaID2["WAZA_TATARIME"] = 506] = "WAZA_TATARIME";
    WazaID2[WazaID2["WAZA_HURIIFOORU"] = 507] = "WAZA_HURIIFOORU";
    WazaID2[WazaID2["WAZA_GIATHENZI"] = 508] = "WAZA_GIATHENZI";
    WazaID2[WazaID2["WAZA_TOMOENAGE"] = 509] = "WAZA_TOMOENAGE";
    WazaID2[WazaID2["WAZA_YAKITUKUSU"] = 510] = "WAZA_YAKITUKUSU";
    WazaID2[WazaID2["WAZA_SAKIOKURI"] = 511] = "WAZA_SAKIOKURI";
    WazaID2[WazaID2["WAZA_AKUROBATTO"] = 512] = "WAZA_AKUROBATTO";
    WazaID2[WazaID2["WAZA_MIRAATAIPU"] = 513] = "WAZA_MIRAATAIPU";
    WazaID2[WazaID2["WAZA_KATAKIUTI"] = 514] = "WAZA_KATAKIUTI";
    WazaID2[WazaID2["WAZA_INOTIGAKE"] = 515] = "WAZA_INOTIGAKE";
    WazaID2[WazaID2["WAZA_GIHUTOPASU"] = 516] = "WAZA_GIHUTOPASU";
    WazaID2[WazaID2["WAZA_RENGOKU"] = 517] = "WAZA_RENGOKU";
    WazaID2[WazaID2["WAZA_MIZUNOTIKAI"] = 518] = "WAZA_MIZUNOTIKAI";
    WazaID2[WazaID2["WAZA_HONOONOTIKAI"] = 519] = "WAZA_HONOONOTIKAI";
    WazaID2[WazaID2["WAZA_KUSANOTIKAI"] = 520] = "WAZA_KUSANOTIKAI";
    WazaID2[WazaID2["WAZA_BORUTOTHENZI"] = 521] = "WAZA_BORUTOTHENZI";
    WazaID2[WazaID2["WAZA_MUSINOTEIKOU"] = 522] = "WAZA_MUSINOTEIKOU";
    WazaID2[WazaID2["WAZA_ZINARASI"] = 523] = "WAZA_ZINARASI";
    WazaID2[WazaID2["WAZA_KOORINOIBUKI"] = 524] = "WAZA_KOORINOIBUKI";
    WazaID2[WazaID2["WAZA_DORAGONTEERU"] = 525] = "WAZA_DORAGONTEERU";
    WazaID2[WazaID2["WAZA_HURUITATERU"] = 526] = "WAZA_HURUITATERU";
    WazaID2[WazaID2["WAZA_EREKINETTO"] = 527] = "WAZA_EREKINETTO";
    WazaID2[WazaID2["WAZA_WAIRUDOBORUTO"] = 528] = "WAZA_WAIRUDOBORUTO";
    WazaID2[WazaID2["WAZA_DORIRURAINAA"] = 529] = "WAZA_DORIRURAINAA";
    WazaID2[WazaID2["WAZA_DABURUTYOPPU"] = 530] = "WAZA_DABURUTYOPPU";
    WazaID2[WazaID2["WAZA_HAATOSUTANPU"] = 531] = "WAZA_HAATOSUTANPU";
    WazaID2[WazaID2["WAZA_UDDOHOON"] = 532] = "WAZA_UDDOHOON";
    WazaID2[WazaID2["WAZA_SEINARUTURUGI"] = 533] = "WAZA_SEINARUTURUGI";
    WazaID2[WazaID2["WAZA_SHERUBUREEDO"] = 534] = "WAZA_SHERUBUREEDO";
    WazaID2[WazaID2["WAZA_HIITOSUTANPU"] = 535] = "WAZA_HIITOSUTANPU";
    WazaID2[WazaID2["WAZA_GURASUMIKISAA"] = 536] = "WAZA_GURASUMIKISAA";
    WazaID2[WazaID2["WAZA_HAADOROORAA"] = 537] = "WAZA_HAADOROORAA";
    WazaID2[WazaID2["WAZA_KOTTONGAADO"] = 538] = "WAZA_KOTTONGAADO";
    WazaID2[WazaID2["WAZA_NAITOBAASUTO"] = 539] = "WAZA_NAITOBAASUTO";
    WazaID2[WazaID2["WAZA_SAIKOBUREIKU"] = 540] = "WAZA_SAIKOBUREIKU";
    WazaID2[WazaID2["WAZA_SUIIPUBINTA"] = 541] = "WAZA_SUIIPUBINTA";
    WazaID2[WazaID2["WAZA_BOUHUU"] = 542] = "WAZA_BOUHUU";
    WazaID2[WazaID2["WAZA_AHUROBUREIKU"] = 543] = "WAZA_AHUROBUREIKU";
    WazaID2[WazaID2["WAZA_GIASOOSAA"] = 544] = "WAZA_GIASOOSAA";
    WazaID2[WazaID2["WAZA_KAENDAN"] = 545] = "WAZA_KAENDAN";
    WazaID2[WazaID2["WAZA_TEKUNOBASUTAA"] = 546] = "WAZA_TEKUNOBASUTAA";
    WazaID2[WazaID2["WAZA_INISIENOUTA"] = 547] = "WAZA_INISIENOUTA";
    WazaID2[WazaID2["WAZA_SINPINOTURUGI"] = 548] = "WAZA_SINPINOTURUGI";
    WazaID2[WazaID2["WAZA_KOGOERUSEKAI"] = 549] = "WAZA_KOGOERUSEKAI";
    WazaID2[WazaID2["WAZA_RAIGEKI"] = 550] = "WAZA_RAIGEKI";
    WazaID2[WazaID2["WAZA_AOIHONOO"] = 551] = "WAZA_AOIHONOO";
    WazaID2[WazaID2["WAZA_HONOONOMAI"] = 552] = "WAZA_HONOONOMAI";
    WazaID2[WazaID2["WAZA_HURIIZUBORUTO"] = 553] = "WAZA_HURIIZUBORUTO";
    WazaID2[WazaID2["WAZA_KOORUDOHUREA"] = 554] = "WAZA_KOORUDOHUREA";
    WazaID2[WazaID2["WAZA_BAAKUAUTO"] = 555] = "WAZA_BAAKUAUTO";
    WazaID2[WazaID2["WAZA_TURARAOTOSI"] = 556] = "WAZA_TURARAOTOSI";
    WazaID2[WazaID2["WAZA_vJENEREETO"] = 557] = "WAZA_vJENEREETO";
    WazaID2[WazaID2["WAZA_KUROSUHUREIMU"] = 558] = "WAZA_KUROSUHUREIMU";
    WazaID2[WazaID2["WAZA_KUROSUSANDAA"] = 559] = "WAZA_KUROSUSANDAA";
    WazaID2[WazaID2["WAZA_HURAINGUPURESU"] = 560] = "WAZA_HURAINGUPURESU";
    WazaID2[WazaID2["WAZA_TATAMIGAESI"] = 561] = "WAZA_TATAMIGAESI";
    WazaID2[WazaID2["WAZA_GEPPU"] = 562] = "WAZA_GEPPU";
    WazaID2[WazaID2["WAZA_TAGAYASU"] = 563] = "WAZA_TAGAYASU";
    WazaID2[WazaID2["WAZA_NEBANEBANETTO"] = 564] = "WAZA_NEBANEBANETTO";
    WazaID2[WazaID2["WAZA_TODOMEBARI"] = 565] = "WAZA_TODOMEBARI";
    WazaID2[WazaID2["WAZA_GOOSUTODAIBU"] = 566] = "WAZA_GOOSUTODAIBU";
    WazaID2[WazaID2["WAZA_HAROWHIN"] = 567] = "WAZA_HAROWHIN";
    WazaID2[WazaID2["WAZA_OTAKEBI"] = 568] = "WAZA_OTAKEBI";
    WazaID2[WazaID2["WAZA_PURAZUMASYAWAA"] = 569] = "WAZA_PURAZUMASYAWAA";
    WazaID2[WazaID2["WAZA_PARABORATYAAZI"] = 570] = "WAZA_PARABORATYAAZI";
    WazaID2[WazaID2["WAZA_MORINONOROI"] = 571] = "WAZA_MORINONOROI";
    WazaID2[WazaID2["WAZA_HANAHUBUKI"] = 572] = "WAZA_HANAHUBUKI";
    WazaID2[WazaID2["WAZA_HURIIZUDORAI"] = 573] = "WAZA_HURIIZUDORAI";
    WazaID2[WazaID2["WAZA_TYAAMUBOISU"] = 574] = "WAZA_TYAAMUBOISU";
    WazaID2[WazaID2["WAZA_SUTEZERIHU"] = 575] = "WAZA_SUTEZERIHU";
    WazaID2[WazaID2["WAZA_HIKKURIKAESU"] = 576] = "WAZA_HIKKURIKAESU";
    WazaID2[WazaID2["WAZA_DOREINKISSU"] = 577] = "WAZA_DOREINKISSU";
    WazaID2[WazaID2["WAZA_TORIKKUGAADO"] = 578] = "WAZA_TORIKKUGAADO";
    WazaID2[WazaID2["WAZA_HURAWAAGAADO"] = 579] = "WAZA_HURAWAAGAADO";
    WazaID2[WazaID2["WAZA_GURASUFIIRUDO"] = 580] = "WAZA_GURASUFIIRUDO";
    WazaID2[WazaID2["WAZA_MISUTOFIIRUDO"] = 581] = "WAZA_MISUTOFIIRUDO";
    WazaID2[WazaID2["WAZA_SOUDEN"] = 582] = "WAZA_SOUDEN";
    WazaID2[WazaID2["WAZA_ZYARETUKU"] = 583] = "WAZA_ZYARETUKU";
    WazaID2[WazaID2["WAZA_YOUSEINOKAZE"] = 584] = "WAZA_YOUSEINOKAZE";
    WazaID2[WazaID2["WAZA_MUUNFOOSU"] = 585] = "WAZA_MUUNFOOSU";
    WazaID2[WazaID2["WAZA_BAKUONPA"] = 586] = "WAZA_BAKUONPA";
    WazaID2[WazaID2["WAZA_FEARIIROKKU"] = 587] = "WAZA_FEARIIROKKU";
    WazaID2[WazaID2["WAZA_KINGUSIIRUDO"] = 588] = "WAZA_KINGUSIIRUDO";
    WazaID2[WazaID2["WAZA_NAKAYOKUSURU"] = 589] = "WAZA_NAKAYOKUSURU";
    WazaID2[WazaID2["WAZA_NAISYOBANASI"] = 590] = "WAZA_NAISYOBANASI";
    WazaID2[WazaID2["WAZA_DAIYASUTOOMU"] = 591] = "WAZA_DAIYASUTOOMU";
    WazaID2[WazaID2["WAZA_SUTIIMUBAASUTO"] = 592] = "WAZA_SUTIIMUBAASUTO";
    WazaID2[WazaID2["WAZA_IZIGENHOORU"] = 593] = "WAZA_IZIGENHOORU";
    WazaID2[WazaID2["WAZA_MIZUSYURIKEN"] = 594] = "WAZA_MIZUSYURIKEN";
    WazaID2[WazaID2["WAZA_MAZIKARUHUREIMU"] = 595] = "WAZA_MAZIKARUHUREIMU";
    WazaID2[WazaID2["WAZA_NIIDORUGAADO"] = 596] = "WAZA_NIIDORUGAADO";
    WazaID2[WazaID2["WAZA_AROMAMISUTO"] = 597] = "WAZA_AROMAMISUTO";
    WazaID2[WazaID2["WAZA_KAIDENPA"] = 598] = "WAZA_KAIDENPA";
    WazaID2[WazaID2["WAZA_BENOMUTORAPPU"] = 599] = "WAZA_BENOMUTORAPPU";
    WazaID2[WazaID2["WAZA_HUNZIN"] = 600] = "WAZA_HUNZIN";
    WazaID2[WazaID2["WAZA_ZIOKONTOROORU"] = 601] = "WAZA_ZIOKONTOROORU";
    WazaID2[WazaID2["WAZA_ZIBASOUSA"] = 602] = "WAZA_ZIBASOUSA";
    WazaID2[WazaID2["WAZA_HAPPIITAIMU"] = 603] = "WAZA_HAPPIITAIMU";
    WazaID2[WazaID2["WAZA_EREKIFIIRUDO"] = 604] = "WAZA_EREKIFIIRUDO";
    WazaID2[WazaID2["WAZA_MAZIKARUSYAIN"] = 605] = "WAZA_MAZIKARUSYAIN";
    WazaID2[WazaID2["WAZA_OIWAI"] = 606] = "WAZA_OIWAI";
    WazaID2[WazaID2["WAZA_TEWOTUNAGU"] = 607] = "WAZA_TEWOTUNAGU";
    WazaID2[WazaID2["WAZA_TUBURANAHITOMI"] = 608] = "WAZA_TUBURANAHITOMI";
    WazaID2[WazaID2["WAZA_HOPPESURISURI"] = 609] = "WAZA_HOPPESURISURI";
    WazaID2[WazaID2["WAZA_TEKAGEN"] = 610] = "WAZA_TEKAGEN";
    WazaID2[WazaID2["WAZA_MATOWARITUKU"] = 611] = "WAZA_MATOWARITUKU";
    WazaID2[WazaID2["WAZA_GUROUPANTI"] = 612] = "WAZA_GUROUPANTI";
    WazaID2[WazaID2["WAZA_DESUUINGU"] = 613] = "WAZA_DESUUINGU";
    WazaID2[WazaID2["WAZA_SAUZANAROO"] = 614] = "WAZA_SAUZANAROO";
    WazaID2[WazaID2["WAZA_SAUZANWHEEBU"] = 615] = "WAZA_SAUZANWHEEBU";
    WazaID2[WazaID2["WAZA_GURANDOFOOSU"] = 616] = "WAZA_GURANDOFOOSU";
    WazaID2[WazaID2["WAZA_HAMETUNOHIKARI"] = 617] = "WAZA_HAMETUNOHIKARI";
    WazaID2[WazaID2["WAZA_KONGENNOHADOU"] = 618] = "WAZA_KONGENNOHADOU";
    WazaID2[WazaID2["WAZA_DANGAINOTURUGI"] = 619] = "WAZA_DANGAINOTURUGI";
    WazaID2[WazaID2["WAZA_GARYOUTENSEI"] = 620] = "WAZA_GARYOUTENSEI";
    WazaID2[WazaID2["WAZA_IZIGENRASSYU"] = 621] = "WAZA_IZIGENRASSYU";
    WazaID2[WazaID2["WAZA_URUTORADASSYUATAKKU"] = 622] = "WAZA_URUTORADASSYUATAKKU";
    WazaID2[WazaID2["WAZA_NOOMARUZENRYOKU"] = 623] = "WAZA_NOOMARUZENRYOKU";
    WazaID2[WazaID2["WAZA_ZENRYOKUMUSOUGEKIRETUKEN"] = 624] = "WAZA_ZENRYOKUMUSOUGEKIRETUKEN";
    WazaID2[WazaID2["WAZA_KAKUTOUZENRYOKU"] = 625] = "WAZA_KAKUTOUZENRYOKU";
    WazaID2[WazaID2["WAZA_FAINARUDAIBUKURASSYU"] = 626] = "WAZA_FAINARUDAIBUKURASSYU";
    WazaID2[WazaID2["WAZA_HIKOUZENRYOKU"] = 627] = "WAZA_HIKOUZENRYOKU";
    WazaID2[WazaID2["WAZA_ASIDDOPOIZUNDERIITO"] = 628] = "WAZA_ASIDDOPOIZUNDERIITO";
    WazaID2[WazaID2["WAZA_DOKUZENRYOKU"] = 629] = "WAZA_DOKUZENRYOKU";
    WazaID2[WazaID2["WAZA_RAIZINGURANDOOOBAA"] = 630] = "WAZA_RAIZINGURANDOOOBAA";
    WazaID2[WazaID2["WAZA_ZIMENZENRYOKU"] = 631] = "WAZA_ZIMENZENRYOKU";
    WazaID2[WazaID2["WAZA_WAARUZUENDOFOORU"] = 632] = "WAZA_WAARUZUENDOFOORU";
    WazaID2[WazaID2["WAZA_IWAZENRYOKU"] = 633] = "WAZA_IWAZENRYOKU";
    WazaID2[WazaID2["WAZA_ZETTAIHOSYOKUKAITENZAN"] = 634] = "WAZA_ZETTAIHOSYOKUKAITENZAN";
    WazaID2[WazaID2["WAZA_MUSIZENRYOKU"] = 635] = "WAZA_MUSIZENRYOKU";
    WazaID2[WazaID2["WAZA_MUGENANYAHENOIZANAI"] = 636] = "WAZA_MUGENANYAHENOIZANAI";
    WazaID2[WazaID2["WAZA_GOOSUTOZENRYOKU"] = 637] = "WAZA_GOOSUTOZENRYOKU";
    WazaID2[WazaID2["WAZA_TYOUZETURASENRENGEKI"] = 638] = "WAZA_TYOUZETURASENRENGEKI";
    WazaID2[WazaID2["WAZA_HAGANEZENRYOKU"] = 639] = "WAZA_HAGANEZENRYOKU";
    WazaID2[WazaID2["WAZA_DAINAMIKKUHURUHUREIMU"] = 640] = "WAZA_DAINAMIKKUHURUHUREIMU";
    WazaID2[WazaID2["WAZA_HONOOZENRYOKU"] = 641] = "WAZA_HONOOZENRYOKU";
    WazaID2[WazaID2["WAZA_SUUPAAAKUATORUNEEDO"] = 642] = "WAZA_SUUPAAAKUATORUNEEDO";
    WazaID2[WazaID2["WAZA_MIZUZENRYOKU"] = 643] = "WAZA_MIZUZENRYOKU";
    WazaID2[WazaID2["WAZA_BURUUMUSYAINEKUSUTORA"] = 644] = "WAZA_BURUUMUSYAINEKUSUTORA";
    WazaID2[WazaID2["WAZA_KUSAZENRYOKU"] = 645] = "WAZA_KUSAZENRYOKU";
    WazaID2[WazaID2["WAZA_SUPAAKINGUGIGABORUTO"] = 646] = "WAZA_SUPAAKINGUGIGABORUTO";
    WazaID2[WazaID2["WAZA_DENKIZENRYOKU"] = 647] = "WAZA_DENKIZENRYOKU";
    WazaID2[WazaID2["WAZA_MAKISIMAMUSAIBUREIKAA"] = 648] = "WAZA_MAKISIMAMUSAIBUREIKAA";
    WazaID2[WazaID2["WAZA_ESUPAAZENRYOKU"] = 649] = "WAZA_ESUPAAZENRYOKU";
    WazaID2[WazaID2["WAZA_REIZINGUZIOHURIIZU"] = 650] = "WAZA_REIZINGUZIOHURIIZU";
    WazaID2[WazaID2["WAZA_KOORIZENRYOKU"] = 651] = "WAZA_KOORIZENRYOKU";
    WazaID2[WazaID2["WAZA_ARUTHIMETTODORAGONBAAN"] = 652] = "WAZA_ARUTHIMETTODORAGONBAAN";
    WazaID2[WazaID2["WAZA_DORAGONZENRYOKU"] = 653] = "WAZA_DORAGONZENRYOKU";
    WazaID2[WazaID2["WAZA_BURAKKUHOORUIKURIPUSU"] = 654] = "WAZA_BURAKKUHOORUIKURIPUSU";
    WazaID2[WazaID2["WAZA_AKUZENRYOKU"] = 655] = "WAZA_AKUZENRYOKU";
    WazaID2[WazaID2["WAZA_RABURIISUTAAINPAKUTO"] = 656] = "WAZA_RABURIISUTAAINPAKUTO";
    WazaID2[WazaID2["WAZA_FEARIIZENRYOKU"] = 657] = "WAZA_FEARIIZENRYOKU";
    WazaID2[WazaID2["WAZA_HISSATUNOPIKATYUUTO"] = 658] = "WAZA_HISSATUNOPIKATYUUTO";
    WazaID2[WazaID2["WAZA_SUNAATUME"] = 659] = "WAZA_SUNAATUME";
    WazaID2[WazaID2["WAZA_DEAIGASIRA"] = 660] = "WAZA_DEAIGASIRA";
    WazaID2[WazaID2["WAZA_TOOTIKA"] = 661] = "WAZA_TOOTIKA";
    WazaID2[WazaID2["WAZA_KAGENUI"] = 662] = "WAZA_KAGENUI";
    WazaID2[WazaID2["WAZA_ddRARIATTO"] = 663] = "WAZA_ddRARIATTO";
    WazaID2[WazaID2["WAZA_UTAKATANOARIA"] = 664] = "WAZA_UTAKATANOARIA";
    WazaID2[WazaID2["WAZA_AISUHANMAA"] = 665] = "WAZA_AISUHANMAA";
    WazaID2[WazaID2["WAZA_HURAWAAHIIRU"] = 666] = "WAZA_HURAWAAHIIRU";
    WazaID2[WazaID2["WAZA_10MANBARIKI"] = 667] = "WAZA_10MANBARIKI";
    WazaID2[WazaID2["WAZA_TIKARAWOSUITORU"] = 668] = "WAZA_TIKARAWOSUITORU";
    WazaID2[WazaID2["WAZA_SOORAABUREEDO"] = 669] = "WAZA_SOORAABUREEDO";
    WazaID2[WazaID2["WAZA_KONOHA"] = 670] = "WAZA_KONOHA";
    WazaID2[WazaID2["WAZA_SUPOTTORAITO"] = 671] = "WAZA_SUPOTTORAITO";
    WazaID2[WazaID2["WAZA_DOKUNOITO"] = 672] = "WAZA_DOKUNOITO";
    WazaID2[WazaID2["WAZA_TOGISUMASU"] = 673] = "WAZA_TOGISUMASU";
    WazaID2[WazaID2["WAZA_ASISUTOGIA"] = 674] = "WAZA_ASISUTOGIA";
    WazaID2[WazaID2["WAZA_ZIGOKUDUKI"] = 675] = "WAZA_ZIGOKUDUKI";
    WazaID2[WazaID2["WAZA_KAHUNDANGO"] = 676] = "WAZA_KAHUNDANGO";
    WazaID2[WazaID2["WAZA_ANKAASYOTTO"] = 677] = "WAZA_ANKAASYOTTO";
    WazaID2[WazaID2["WAZA_SAIKOFIIRUDO"] = 678] = "WAZA_SAIKOFIIRUDO";
    WazaID2[WazaID2["WAZA_TOBIKAKARU"] = 679] = "WAZA_TOBIKAKARU";
    WazaID2[WazaID2["WAZA_HONOONOMUTI"] = 680] = "WAZA_HONOONOMUTI";
    WazaID2[WazaID2["WAZA_TUKEAGARU"] = 681] = "WAZA_TUKEAGARU";
    WazaID2[WazaID2["WAZA_MOETUKIRU"] = 682] = "WAZA_MOETUKIRU";
    WazaID2[WazaID2["WAZA_SUPIIDOSUWAPPU"] = 683] = "WAZA_SUPIIDOSUWAPPU";
    WazaID2[WazaID2["WAZA_SUMAATOHOON"] = 684] = "WAZA_SUMAATOHOON";
    WazaID2[WazaID2["WAZA_ZYOUKA"] = 685] = "WAZA_ZYOUKA";
    WazaID2[WazaID2["WAZA_MEZAMERUDANSU"] = 686] = "WAZA_MEZAMERUDANSU";
    WazaID2[WazaID2["WAZA_KOAPANISSYAA"] = 687] = "WAZA_KOAPANISSYAA";
    WazaID2[WazaID2["WAZA_TOROPIKARUKIKKU"] = 688] = "WAZA_TOROPIKARUKIKKU";
    WazaID2[WazaID2["WAZA_SAIHAI"] = 689] = "WAZA_SAIHAI";
    WazaID2[WazaID2["WAZA_KUTIBASIKYANON"] = 690] = "WAZA_KUTIBASIKYANON";
    WazaID2[WazaID2["WAZA_SUKEIRUNOIZU"] = 691] = "WAZA_SUKEIRUNOIZU";
    WazaID2[WazaID2["WAZA_DORAGONHANMAA"] = 692] = "WAZA_DORAGONHANMAA";
    WazaID2[WazaID2["WAZA_BUNMAWASU"] = 693] = "WAZA_BUNMAWASU";
    WazaID2[WazaID2["WAZA_OORORABEERU"] = 694] = "WAZA_OORORABEERU";
    WazaID2[WazaID2["WAZA_SYADOOAROOZUSUTORAIKU"] = 695] = "WAZA_SYADOOAROOZUSUTORAIKU";
    WazaID2[WazaID2["WAZA_HAIPAADAAKUKURASSYAA"] = 696] = "WAZA_HAIPAADAAKUKURASSYAA";
    WazaID2[WazaID2["WAZA_WADATUMINOSINFONIA"] = 697] = "WAZA_WADATUMINOSINFONIA";
    WazaID2[WazaID2["WAZA_GAADHIANDEAROORA"] = 698] = "WAZA_GAADHIANDEAROORA";
    WazaID2[WazaID2["WAZA_SITISEIDAKKONTAI"] = 699] = "WAZA_SITISEIDAKKONTAI";
    WazaID2[WazaID2["WAZA_RAITONINGUSAAHURAIDO"] = 700] = "WAZA_RAITONINGUSAAHURAIDO";
    WazaID2[WazaID2["WAZA_HONKIWODASUKOUGEKI"] = 701] = "WAZA_HONKIWODASUKOUGEKI";
    WazaID2[WazaID2["WAZA_NAINEBORUBUUSUTO"] = 702] = "WAZA_NAINEBORUBUUSUTO";
    WazaID2[WazaID2["WAZA_ORIZINZUSUUPAANOVHA"] = 703] = "WAZA_ORIZINZUSUUPAANOVHA";
    WazaID2[WazaID2["WAZA_TORAPPUSHERU"] = 704] = "WAZA_TORAPPUSHERU";
    WazaID2[WazaID2["WAZA_HURUURUKANON"] = 705] = "WAZA_HURUURUKANON";
    WazaID2[WazaID2["WAZA_SAIKOFANGU"] = 706] = "WAZA_SAIKOFANGU";
    WazaID2[WazaID2["WAZA_ZIDANDA"] = 707] = "WAZA_ZIDANDA";
    WazaID2[WazaID2["WAZA_SYADOOBOON"] = 708] = "WAZA_SYADOOBOON";
    WazaID2[WazaID2["WAZA_AKUSERUROKKU"] = 709] = "WAZA_AKUSERUROKKU";
    WazaID2[WazaID2["WAZA_AKUABUREIKU"] = 710] = "WAZA_AKUABUREIKU";
    WazaID2[WazaID2["WAZA_PURIZUMUREEZAA"] = 711] = "WAZA_PURIZUMUREEZAA";
    WazaID2[WazaID2["WAZA_SYADOOSUTIIRU"] = 712] = "WAZA_SYADOOSUTIIRU";
    WazaID2[WazaID2["WAZA_METEODORAIBU"] = 713] = "WAZA_METEODORAIBU";
    WazaID2[WazaID2["WAZA_SYADOOREI"] = 714] = "WAZA_SYADOOREI";
    WazaID2[WazaID2["WAZA_NAMIDAME"] = 715] = "WAZA_NAMIDAME";
    WazaID2[WazaID2["WAZA_BIRIBIRITIKUTIKU"] = 716] = "WAZA_BIRIBIRITIKUTIKU";
    WazaID2[WazaID2["WAZA_SIZENNOIKARI"] = 717] = "WAZA_SIZENNOIKARI";
    WazaID2[WazaID2["WAZA_MARUTIATAKKU"] = 718] = "WAZA_MARUTIATAKKU";
    WazaID2[WazaID2["WAZA_1000MANBORUTO"] = 719] = "WAZA_1000MANBORUTO";
    WazaID2[WazaID2["WAZA_BIKKURIHEDDO"] = 720] = "WAZA_BIKKURIHEDDO";
    WazaID2[WazaID2["WAZA_PURAZUMAFISUTO"] = 721] = "WAZA_PURAZUMAFISUTO";
    WazaID2[WazaID2["WAZA_FOTONGEIZAA"] = 722] = "WAZA_FOTONGEIZAA";
    WazaID2[WazaID2["WAZA_TENKOGASUMETUBOUNOHIKARI"] = 723] = "WAZA_TENKOGASUMETUBOUNOHIKARI";
    WazaID2[WazaID2["WAZA_SANSYAINSUMASSYAA"] = 724] = "WAZA_SANSYAINSUMASSYAA";
    WazaID2[WazaID2["WAZA_MUUNRAITOBURASUTAA"] = 725] = "WAZA_MUUNRAITOBURASUTAA";
    WazaID2[WazaID2["WAZA_POKABOKAHURENDOTAIMU"] = 726] = "WAZA_POKABOKAHURENDOTAIMU";
    WazaID2[WazaID2["WAZA_RAZIARUEZZISUTOOMU"] = 727] = "WAZA_RAZIARUEZZISUTOOMU";
    WazaID2[WazaID2["WAZA_BUREIZINGUSOURUBIITO"] = 728] = "WAZA_BUREIZINGUSOURUBIITO";
    WazaID2[WazaID2["WAZA_BATIBATIAKUSERU"] = 729] = "WAZA_BATIBATIAKUSERU";
    WazaID2[WazaID2["WAZA_ZABUZABUSAAHU"] = 730] = "WAZA_ZABUZABUSAAHU";
    WazaID2[WazaID2["WAZA_HUWAHUWAFOORU"] = 731] = "WAZA_HUWAHUWAFOORU";
    WazaID2[WazaID2["WAZA_PIKAPIKASANDAA"] = 732] = "WAZA_PIKAPIKASANDAA";
    WazaID2[WazaID2["WAZA_IKIIKIBABURU"] = 733] = "WAZA_IKIIKIBABURU";
    WazaID2[WazaID2["WAZA_BIRIBIRIEREKI"] = 734] = "WAZA_BIRIBIRIEREKI";
    WazaID2[WazaID2["WAZA_MERAMERABAAN"] = 735] = "WAZA_MERAMERABAAN";
    WazaID2[WazaID2["WAZA_DOBADOBAOORA"] = 736] = "WAZA_DOBADOBAOORA";
    WazaID2[WazaID2["WAZA_WARUWARUZOON"] = 737] = "WAZA_WARUWARUZOON";
    WazaID2[WazaID2["WAZA_SUKUSUKUBONBAA"] = 738] = "WAZA_SUKUSUKUBONBAA";
    WazaID2[WazaID2["WAZA_KOTIKOTIHUROSUTO"] = 739] = "WAZA_KOTIKOTIHUROSUTO";
    WazaID2[WazaID2["WAZA_KIRAKIRASUTOOMU"] = 740] = "WAZA_KIRAKIRASUTOOMU";
    WazaID2[WazaID2["WAZA_BUIBUIBUREIKU"] = 741] = "WAZA_BUIBUIBUREIKU";
    WazaID2[WazaID2["WAZA_DABURUPANTHAA"] = 742] = "WAZA_DABURUPANTHAA";
    WazaID2[WazaID2["WAZA_DAIWHOORU"] = 743] = "WAZA_DAIWHOORU";
    WazaID2[WazaID2["WAZA_DAIMAKKUSUHOU"] = 744] = "WAZA_DAIMAKKUSUHOU";
    WazaID2[WazaID2["WAZA_NERAIUTI"] = 745] = "WAZA_NERAIUTI";
    WazaID2[WazaID2["WAZA_KURAITUKU"] = 746] = "WAZA_KURAITUKU";
    WazaID2[WazaID2["WAZA_HOOBARU"] = 747] = "WAZA_HOOBARU";
    WazaID2[WazaID2["WAZA_HAISUINOZIN"] = 748] = "WAZA_HAISUINOZIN";
    WazaID2[WazaID2["WAZA_TAARUSYOTTO"] = 749] = "WAZA_TAARUSYOTTO";
    WazaID2[WazaID2["WAZA_MAHOUNOKONA"] = 750] = "WAZA_MAHOUNOKONA";
    WazaID2[WazaID2["WAZA_DORAGONAROO"] = 751] = "WAZA_DORAGONAROO";
    WazaID2[WazaID2["WAZA_OTYAKAI"] = 752] = "WAZA_OTYAKAI";
    WazaID2[WazaID2["WAZA_TAKOGATAME"] = 753] = "WAZA_TAKOGATAME";
    WazaID2[WazaID2["WAZA_DENGEKIKUTIBASI"] = 754] = "WAZA_DENGEKIKUTIBASI";
    WazaID2[WazaID2["WAZA_ERAGAMI"] = 755] = "WAZA_ERAGAMI";
    WazaID2[WazaID2["WAZA_KOOTOTHENZI"] = 756] = "WAZA_KOOTOTHENZI";
    WazaID2[WazaID2["WAZA_DAIBAAN"] = 757] = "WAZA_DAIBAAN";
    WazaID2[WazaID2["WAZA_DAIWAAMU"] = 758] = "WAZA_DAIWAAMU";
    WazaID2[WazaID2["WAZA_DAISANDAA"] = 759] = "WAZA_DAISANDAA";
    WazaID2[WazaID2["WAZA_DAIATAKKU"] = 760] = "WAZA_DAIATAKKU";
    WazaID2[WazaID2["WAZA_DAINAKKURU"] = 761] = "WAZA_DAINAKKURU";
    WazaID2[WazaID2["WAZA_DAIHOROU"] = 762] = "WAZA_DAIHOROU";
    WazaID2[WazaID2["WAZA_DAIAISU"] = 763] = "WAZA_DAIAISU";
    WazaID2[WazaID2["WAZA_DAIASIDDO"] = 764] = "WAZA_DAIASIDDO";
    WazaID2[WazaID2["WAZA_DAISUTORIIMU"] = 765] = "WAZA_DAISUTORIIMU";
    WazaID2[WazaID2["WAZA_DAIJETTO"] = 766] = "WAZA_DAIJETTO";
    WazaID2[WazaID2["WAZA_DAIFEARII"] = 767] = "WAZA_DAIFEARII";
    WazaID2[WazaID2["WAZA_DAIDORAGUUN"] = 768] = "WAZA_DAIDORAGUUN";
    WazaID2[WazaID2["WAZA_DAISAIKO"] = 769] = "WAZA_DAISAIKO";
    WazaID2[WazaID2["WAZA_DAIROKKU"] = 770] = "WAZA_DAIROKKU";
    WazaID2[WazaID2["WAZA_DAIAASU"] = 771] = "WAZA_DAIAASU";
    WazaID2[WazaID2["WAZA_DAIAAKU"] = 772] = "WAZA_DAIAAKU";
    WazaID2[WazaID2["WAZA_DAISOUGEN"] = 773] = "WAZA_DAISOUGEN";
    WazaID2[WazaID2["WAZA_DAISUTIRU"] = 774] = "WAZA_DAISUTIRU";
    WazaID2[WazaID2["WAZA_SOURUBIITO"] = 775] = "WAZA_SOURUBIITO";
    WazaID2[WazaID2["WAZA_BODHIPURESU"] = 776] = "WAZA_BODHIPURESU";
    WazaID2[WazaID2["WAZA_DEKOREESYON"] = 777] = "WAZA_DEKOREESYON";
    WazaID2[WazaID2["WAZA_DORAMUATAKKU"] = 778] = "WAZA_DORAMUATAKKU";
    WazaID2[WazaID2["WAZA_TORABASAMI"] = 779] = "WAZA_TORABASAMI";
    WazaID2[WazaID2["WAZA_KAENBOORU"] = 780] = "WAZA_KAENBOORU";
    WazaID2[WazaID2["WAZA_KYOZYUUZAN"] = 781] = "WAZA_KYOZYUUZAN";
    WazaID2[WazaID2["WAZA_KYOZYUUDAN"] = 782] = "WAZA_KYOZYUUDAN";
    WazaID2[WazaID2["WAZA_OORAGURUMA"] = 783] = "WAZA_OORAGURUMA";
    WazaID2[WazaID2["WAZA_WAIDOBUREIKAA"] = 784] = "WAZA_WAIDOBUREIKAA";
    WazaID2[WazaID2["WAZA_EDADUKI"] = 785] = "WAZA_EDADUKI";
    WazaID2[WazaID2["WAZA_OOBAADORAIBU"] = 786] = "WAZA_OOBAADORAIBU";
    WazaID2[WazaID2["WAZA_RINGOSAN"] = 787] = "WAZA_RINGOSAN";
    WazaID2[WazaID2["WAZA_NYUUTON"] = 788] = "WAZA_NYUUTON";
    WazaID2[WazaID2["WAZA_SOURUKURASSYU"] = 789] = "WAZA_SOURUKURASSYU";
    WazaID2[WazaID2["WAZA_WANDAASUTIIMU"] = 790] = "WAZA_WANDAASUTIIMU";
    WazaID2[WazaID2["WAZA_INOTINOSIZUKU"] = 791] = "WAZA_INOTINOSIZUKU";
    WazaID2[WazaID2["WAZA_BUROKKINGU"] = 792] = "WAZA_BUROKKINGU";
    WazaID2[WazaID2["WAZA_DOGEZATUKI"] = 793] = "WAZA_DOGEZATUKI";
    WazaID2[WazaID2["WAZA_SUTAAASARUTO"] = 794] = "WAZA_SUTAAASARUTO";
    WazaID2[WazaID2["WAZA_MUGENDAIBIIMU"] = 795] = "WAZA_MUGENDAIBIIMU";
    WazaID2[WazaID2["WAZA_TETTEIKOUSEN"] = 796] = "WAZA_TETTEIKOUSEN";
    WazaID2[WazaID2["WAZA_WAIDOFOOSU"] = 797] = "WAZA_WAIDOFOOSU";
    WazaID2[WazaID2["WAZA_AIANROORAA"] = 798] = "WAZA_AIANROORAA";
    WazaID2[WazaID2["WAZA_SUKEIRUSYOTTO"] = 799] = "WAZA_SUKEIRUSYOTTO";
    WazaID2[WazaID2["WAZA_METEOBIIMU"] = 800] = "WAZA_METEOBIIMU";
    WazaID2[WazaID2["WAZA_SHERUAAMUZU"] = 801] = "WAZA_SHERUAAMUZU";
    WazaID2[WazaID2["WAZA_MISUTOBAASUTO"] = 802] = "WAZA_MISUTOBAASUTO";
    WazaID2[WazaID2["WAZA_GURASUSURAIDAA"] = 803] = "WAZA_GURASUSURAIDAA";
    WazaID2[WazaID2["WAZA_RAIZINGUBORUTO"] = 804] = "WAZA_RAIZINGUBORUTO";
    WazaID2[WazaID2["WAZA_DAITINOHADOU"] = 805] = "WAZA_DAITINOHADOU";
    WazaID2[WazaID2["WAZA_HAIYORUITIGEKI"] = 806] = "WAZA_HAIYORUITIGEKI";
    WazaID2[WazaID2["WAZA_SITTONOHONOO"] = 807] = "WAZA_SITTONOHONOO";
    WazaID2[WazaID2["WAZA_UPPUNBARASI"] = 808] = "WAZA_UPPUNBARASI";
    WazaID2[WazaID2["WAZA_PORUTAAGAISUTO"] = 809] = "WAZA_PORUTAAGAISUTO";
    WazaID2[WazaID2["WAZA_HUSYOKUGASU"] = 810] = "WAZA_HUSYOKUGASU";
    WazaID2[WazaID2["WAZA_KOOTINGU"] = 811] = "WAZA_KOOTINGU";
    WazaID2[WazaID2["WAZA_KUIKKUTAAN"] = 812] = "WAZA_KUIKKUTAAN";
    WazaID2[WazaID2["WAZA_TORIPURUAKUSERU"] = 813] = "WAZA_TORIPURUAKUSERU";
    WazaID2[WazaID2["WAZA_DABURUUINGU"] = 814] = "WAZA_DABURUUINGU";
    WazaID2[WazaID2["WAZA_NESSANODAITI"] = 815] = "WAZA_NESSANODAITI";
    WazaID2[WazaID2["WAZA_ZYANGURUHIIRU"] = 816] = "WAZA_ZYANGURUHIIRU";
    WazaID2[WazaID2["WAZA_ANKOKUKYOUDA"] = 817] = "WAZA_ANKOKUKYOUDA";
    WazaID2[WazaID2["WAZA_SUIRYUURENDA"] = 818] = "WAZA_SUIRYUURENDA";
    WazaID2[WazaID2["WAZA_SANDAAPURIZUN"] = 819] = "WAZA_SANDAAPURIZUN";
    WazaID2[WazaID2["WAZA_DORAGONENAZII"] = 820] = "WAZA_DORAGONENAZII";
    WazaID2[WazaID2["WAZA_ITETUKUSISEN"] = 821] = "WAZA_ITETUKUSISEN";
    WazaID2[WazaID2["WAZA_MOEAGARUIKARI"] = 822] = "WAZA_MOEAGARUIKARI";
    WazaID2[WazaID2["WAZA_RAIMEIGERI"] = 823] = "WAZA_RAIMEIGERI";
    WazaID2[WazaID2["WAZA_BURIZAADORANSU"] = 824] = "WAZA_BURIZAADORANSU";
    WazaID2[WazaID2["WAZA_ASUTORARUBITTO"] = 825] = "WAZA_ASUTORARUBITTO";
    WazaID2[WazaID2["WAZA_BUKIMINAZYUMON"] = 826] = "WAZA_BUKIMINAZYUMON";
    WazaID2[WazaID2["WAZA_FEITARUKUROO"] = 827] = "WAZA_FEITARUKUROO";
    WazaID2[WazaID2["WAZA_BARIAARASSYU"] = 828] = "WAZA_BARIAARASSYU";
    WazaID2[WazaID2["WAZA_PAWAASIHUTO"] = 829] = "WAZA_PAWAASIHUTO";
    WazaID2[WazaID2["WAZA_GANSEKIAKKUSU"] = 830] = "WAZA_GANSEKIAKKUSU";
    WazaID2[WazaID2["WAZA_HARUNOARASI"] = 831] = "WAZA_HARUNOARASI";
    WazaID2[WazaID2["WAZA_SINPINOTIKARA"] = 832] = "WAZA_SINPINOTIKARA";
    WazaID2[WazaID2["WAZA_DAIHUNGEKI"] = 833] = "WAZA_DAIHUNGEKI";
    WazaID2[WazaID2["WAZA_WHEEBUTAKKURU"] = 834] = "WAZA_WHEEBUTAKKURU";
    WazaID2[WazaID2["WAZA_KUROROBURASUTO"] = 835] = "WAZA_KUROROBURASUTO";
    WazaID2[WazaID2["WAZA_HYOUZANOROSI"] = 836] = "WAZA_HYOUZANOROSI";
    WazaID2[WazaID2["WAZA_SYOURINOMAI"] = 837] = "WAZA_SYOURINOMAI";
    WazaID2[WazaID2["WAZA_BUTIKAMASI"] = 838] = "WAZA_BUTIKAMASI";
    WazaID2[WazaID2["WAZA_DOKUBARISENBON"] = 839] = "WAZA_DOKUBARISENBON";
    WazaID2[WazaID2["WAZA_OORAUINGU"] = 840] = "WAZA_OORAUINGU";
    WazaID2[WazaID2["WAZA_URAMITURAMI"] = 841] = "WAZA_URAMITURAMI";
    WazaID2[WazaID2["WAZA_TATEKOMORU"] = 842] = "WAZA_TATEKOMORU";
    WazaID2[WazaID2["WAZA_3BONNOYA"] = 843] = "WAZA_3BONNOYA";
    WazaID2[WazaID2["WAZA_HYAKKIYAKOU"] = 844] = "WAZA_HYAKKIYAKOU";
    WazaID2[WazaID2["WAZA_HIKENTIENAMI"] = 845] = "WAZA_HIKENTIENAMI";
    WazaID2[WazaID2["WAZA_KOGARASIARASI"] = 846] = "WAZA_KOGARASIARASI";
    WazaID2[WazaID2["WAZA_KAMINARIARASI"] = 847] = "WAZA_KAMINARIARASI";
    WazaID2[WazaID2["WAZA_NESSANOARASI"] = 848] = "WAZA_NESSANOARASI";
    WazaID2[WazaID2["WAZA_MIKADUKINOINORI"] = 849] = "WAZA_MIKADUKINOINORI";
    WazaID2[WazaID2["WAZA_BUREIBUTYAAZI"] = 850] = "WAZA_BUREIBUTYAAZI";
    WazaID2[WazaID2["WAZA_TERABAASUTO"] = 851] = "WAZA_TERABAASUTO";
    WazaID2[WazaID2["WAZA_SUREDDOTORAPPU"] = 852] = "WAZA_SUREDDOTORAPPU";
    WazaID2[WazaID2["WAZA_KAKATOOTOSI"] = 853] = "WAZA_KAKATOOTOSI";
    WazaID2[WazaID2["WAZA_OHAKAMAIRI"] = 854] = "WAZA_OHAKAMAIRI";
    WazaID2[WazaID2["WAZA_RUMINAKORIZYON"] = 855] = "WAZA_RUMINAKORIZYON";
    WazaID2[WazaID2["WAZA_ITTYOUAGARI"] = 856] = "WAZA_ITTYOUAGARI";
    WazaID2[WazaID2["WAZA_JETTOPANTI"] = 857] = "WAZA_JETTOPANTI";
    WazaID2[WazaID2["WAZA_HABANEROEKISU"] = 858] = "WAZA_HABANEROEKISU";
    WazaID2[WazaID2["WAZA_HOIIRUSUPIN"] = 859] = "WAZA_HOIIRUSUPIN";
    WazaID2[WazaID2["WAZA_NEZUMIZAN"] = 860] = "WAZA_NEZUMIZAN";
    WazaID2[WazaID2["WAZA_AISUSUPINAA"] = 861] = "WAZA_AISUSUPINAA";
    WazaID2[WazaID2["WAZA_KYOKENTOTUGEKI"] = 862] = "WAZA_KYOKENTOTUGEKI";
    WazaID2[WazaID2["WAZA_SAIKINOINORI"] = 863] = "WAZA_SAIKINOINORI";
    WazaID2[WazaID2["WAZA_SIODUKE"] = 864] = "WAZA_SIODUKE";
    WazaID2[WazaID2["WAZA_TORIPURUDAIBU"] = 865] = "WAZA_TORIPURUDAIBU";
    WazaID2[WazaID2["WAZA_KARUKANSUPIN"] = 866] = "WAZA_KARUKANSUPIN";
    WazaID2[WazaID2["WAZA_UTUSIE"] = 867] = "WAZA_UTUSIE";
    WazaID2[WazaID2["WAZA_MIWOKEZURU"] = 868] = "WAZA_MIWOKEZURU";
    WazaID2[WazaID2["WAZA_DOGEZAN"] = 869] = "WAZA_DOGEZAN";
    WazaID2[WazaID2["WAZA_TORIKKUHURAWAA"] = 870] = "WAZA_TORIKKUHURAWAA";
    WazaID2[WazaID2["WAZA_HUREASONGU"] = 871] = "WAZA_HUREASONGU";
    WazaID2[WazaID2["WAZA_AKUASUTEPPU"] = 872] = "WAZA_AKUASUTEPPU";
    WazaID2[WazaID2["WAZA_REIZINGUBURU"] = 873] = "WAZA_REIZINGUBURU";
    WazaID2[WazaID2["WAZA_GOORUDORASSYU"] = 874] = "WAZA_GOORUDORASSYU";
    WazaID2[WazaID2["WAZA_SAIKOBUREIDO"] = 875] = "WAZA_SAIKOBUREIDO";
    WazaID2[WazaID2["WAZA_HAIDOROSUTIIMU"] = 876] = "WAZA_HAIDOROSUTIIMU";
    WazaID2[WazaID2["WAZA_KATASUTOROFII"] = 877] = "WAZA_KATASUTOROFII";
    WazaID2[WazaID2["WAZA_AKUSERUBUREIKU"] = 878] = "WAZA_AKUSERUBUREIKU";
    WazaID2[WazaID2["WAZA_INAZUMADORAIBU"] = 879] = "WAZA_INAZUMADORAIBU";
    WazaID2[WazaID2["WAZA_SIPPOKIRI"] = 880] = "WAZA_SIPPOKIRI";
    WazaID2[WazaID2["WAZA_SAMUIGYAGU"] = 881] = "WAZA_SAMUIGYAGU";
    WazaID2[WazaID2["WAZA_OKATADUKE"] = 882] = "WAZA_OKATADUKE";
    WazaID2[WazaID2["WAZA_YUKIGESIKI"] = 883] = "WAZA_YUKIGESIKI";
    WazaID2[WazaID2["WAZA_TOBITUKU"] = 884] = "WAZA_TOBITUKU";
    WazaID2[WazaID2["WAZA_KUSAWAKE"] = 885] = "WAZA_KUSAWAKE";
    WazaID2[WazaID2["WAZA_HIYAMIZU"] = 886] = "WAZA_HIYAMIZU";
    WazaID2[WazaID2["WAZA_HAIPAADORIRU"] = 887] = "WAZA_HAIPAADORIRU";
    WazaID2[WazaID2["WAZA_TUINBIIMU"] = 888] = "WAZA_TUINBIIMU";
    WazaID2[WazaID2["WAZA_HUNDONOKOBUSI"] = 889] = "WAZA_HUNDONOKOBUSI";
    WazaID2[WazaID2["WAZA_AAMAAKYANON"] = 890] = "WAZA_AAMAAKYANON";
    WazaID2[WazaID2["WAZA_MUNENNOTURUGI"] = 891] = "WAZA_MUNENNOTURUGI";
    WazaID2[WazaID2["WAZA_DENKOUSOUGEKI"] = 892] = "WAZA_DENKOUSOUGEKI";
    WazaID2[WazaID2["WAZA_GIGAHANMAA"] = 893] = "WAZA_GIGAHANMAA";
    WazaID2[WazaID2["WAZA_HOUHUKU"] = 894] = "WAZA_HOUHUKU";
    WazaID2[WazaID2["WAZA_AKUAKATTAA"] = 895] = "WAZA_AKUAKATTAA";
    WazaID2[WazaID2["WAZA_MOOBIRUKOUGEKI"] = 896] = "WAZA_MOOBIRUKOUGEKI";
    WazaID2[WazaID2["WAZA_MOOBIRUKOUGEKI2"] = 897] = "WAZA_MOOBIRUKOUGEKI2";
    WazaID2[WazaID2["WAZA_MOOBIRUKOUGEKI3"] = 898] = "WAZA_MOOBIRUKOUGEKI3";
    WazaID2[WazaID2["WAZA_MOOBIRUKOUGEKI4"] = 899] = "WAZA_MOOBIRUKOUGEKI4";
    WazaID2[WazaID2["WAZA_MOOBIRUKOUGEKI5"] = 900] = "WAZA_MOOBIRUKOUGEKI5";
    return WazaID2;
  })(WazaID || {});

  // tmp_sv_schema/waza-set.ts
  var WazaSet = class _WazaSet {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    static getRootAsWazaSet(bb, obj) {
      return (obj || new _WazaSet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsWazaSet(bb, obj) {
      bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
      return (obj || new _WazaSet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    wazaId() {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? this.bb.readUint16(this.bb_pos + offset) : 0 /* WAZA_NULL */;
    }
    pointUp() {
      const offset = this.bb.__offset(this.bb_pos, 6);
      return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
    }
    static startWazaSet(builder) {
      builder.startObject(2);
    }
    static addWazaId(builder, wazaId) {
      builder.addFieldInt16(0, wazaId, 0 /* WAZA_NULL */);
    }
    static addPointUp(builder, pointUp) {
      builder.addFieldInt8(1, pointUp, 0);
    }
    static endWazaSet(builder) {
      const offset = builder.endObject();
      return offset;
    }
    static createWazaSet(builder, wazaId, pointUp) {
      _WazaSet.startWazaSet(builder);
      _WazaSet.addWazaId(builder, wazaId);
      _WazaSet.addPointUp(builder, pointUp);
      return _WazaSet.endWazaSet(builder);
    }
    unpack() {
      return new WazaSetT(
        this.wazaId(),
        this.pointUp()
      );
    }
    unpackTo(_o) {
      _o.wazaId = this.wazaId();
      _o.pointUp = this.pointUp();
    }
  };
  var WazaSetT = class {
    constructor(wazaId = 0 /* WAZA_NULL */, pointUp = 0) {
      __publicField(this, "wazaId", wazaId);
      __publicField(this, "pointUp", pointUp);
    }
    pack(builder) {
      return WazaSet.createWazaSet(
        builder,
        this.wazaId,
        this.pointUp
      );
    }
  };

  // tmp_sv_schema/waza-type.ts
  var WazaType = /* @__PURE__ */ ((WazaType2) => {
    WazaType2[WazaType2["DEFAULT"] = 0] = "DEFAULT";
    WazaType2[WazaType2["MANUAL"] = 1] = "MANUAL";
    return WazaType2;
  })(WazaType || {});

  // tmp_sv_schema/pml/common/dev-id.ts
  var DevID = /* @__PURE__ */ ((DevID2) => {
    DevID2[DevID2["DEV_NULL"] = 0] = "DEV_NULL";
    DevID2[DevID2["DEV_HUSIGIDANE"] = 1] = "DEV_HUSIGIDANE";
    DevID2[DevID2["DEV_HUSIGISOU"] = 2] = "DEV_HUSIGISOU";
    DevID2[DevID2["DEV_HUSIGIBANA"] = 3] = "DEV_HUSIGIBANA";
    DevID2[DevID2["DEV_HITOKAGE"] = 4] = "DEV_HITOKAGE";
    DevID2[DevID2["DEV_RIZAADO"] = 5] = "DEV_RIZAADO";
    DevID2[DevID2["DEV_RIZAADON"] = 6] = "DEV_RIZAADON";
    DevID2[DevID2["DEV_ZENIGAME"] = 7] = "DEV_ZENIGAME";
    DevID2[DevID2["DEV_KAMEERU"] = 8] = "DEV_KAMEERU";
    DevID2[DevID2["DEV_KAMEKKUSU"] = 9] = "DEV_KAMEKKUSU";
    DevID2[DevID2["DEV_KYATAPII"] = 10] = "DEV_KYATAPII";
    DevID2[DevID2["DEV_TORANSERU"] = 11] = "DEV_TORANSERU";
    DevID2[DevID2["DEV_BATAHURII"] = 12] = "DEV_BATAHURII";
    DevID2[DevID2["DEV_BIIDORU"] = 13] = "DEV_BIIDORU";
    DevID2[DevID2["DEV_KOKUUN"] = 14] = "DEV_KOKUUN";
    DevID2[DevID2["DEV_SUPIAA"] = 15] = "DEV_SUPIAA";
    DevID2[DevID2["DEV_POPPO"] = 16] = "DEV_POPPO";
    DevID2[DevID2["DEV_PIZYON"] = 17] = "DEV_PIZYON";
    DevID2[DevID2["DEV_PIZYOTTO"] = 18] = "DEV_PIZYOTTO";
    DevID2[DevID2["DEV_KORATTA"] = 19] = "DEV_KORATTA";
    DevID2[DevID2["DEV_RATTA"] = 20] = "DEV_RATTA";
    DevID2[DevID2["DEV_ONISUZUME"] = 21] = "DEV_ONISUZUME";
    DevID2[DevID2["DEV_ONIDORIRU"] = 22] = "DEV_ONIDORIRU";
    DevID2[DevID2["DEV_AABO"] = 23] = "DEV_AABO";
    DevID2[DevID2["DEV_AABOKKU"] = 24] = "DEV_AABOKKU";
    DevID2[DevID2["DEV_PIKATYUU"] = 25] = "DEV_PIKATYUU";
    DevID2[DevID2["DEV_RAITYUU"] = 26] = "DEV_RAITYUU";
    DevID2[DevID2["DEV_SANDO"] = 27] = "DEV_SANDO";
    DevID2[DevID2["DEV_SANDOPAN"] = 28] = "DEV_SANDOPAN";
    DevID2[DevID2["DEV_NIDORAN_F"] = 29] = "DEV_NIDORAN_F";
    DevID2[DevID2["DEV_NIDORIINA"] = 30] = "DEV_NIDORIINA";
    DevID2[DevID2["DEV_NIDOKUIN"] = 31] = "DEV_NIDOKUIN";
    DevID2[DevID2["DEV_NIDORAN_M"] = 32] = "DEV_NIDORAN_M";
    DevID2[DevID2["DEV_NIDORIINO"] = 33] = "DEV_NIDORIINO";
    DevID2[DevID2["DEV_NIDOKINGU"] = 34] = "DEV_NIDOKINGU";
    DevID2[DevID2["DEV_PIPPI"] = 35] = "DEV_PIPPI";
    DevID2[DevID2["DEV_PIKUSII"] = 36] = "DEV_PIKUSII";
    DevID2[DevID2["DEV_ROKON"] = 37] = "DEV_ROKON";
    DevID2[DevID2["DEV_KYUUKON"] = 38] = "DEV_KYUUKON";
    DevID2[DevID2["DEV_PURIN"] = 39] = "DEV_PURIN";
    DevID2[DevID2["DEV_PUKURIN"] = 40] = "DEV_PUKURIN";
    DevID2[DevID2["DEV_ZUBATTO"] = 41] = "DEV_ZUBATTO";
    DevID2[DevID2["DEV_GORUBATTO"] = 42] = "DEV_GORUBATTO";
    DevID2[DevID2["DEV_NAZONOKUSA"] = 43] = "DEV_NAZONOKUSA";
    DevID2[DevID2["DEV_KUSAIHANA"] = 44] = "DEV_KUSAIHANA";
    DevID2[DevID2["DEV_RAHURESIA"] = 45] = "DEV_RAHURESIA";
    DevID2[DevID2["DEV_PARASU"] = 46] = "DEV_PARASU";
    DevID2[DevID2["DEV_PARASEKUTO"] = 47] = "DEV_PARASEKUTO";
    DevID2[DevID2["DEV_KONPAN"] = 48] = "DEV_KONPAN";
    DevID2[DevID2["DEV_MORUFON"] = 49] = "DEV_MORUFON";
    DevID2[DevID2["DEV_DHIGUDA"] = 50] = "DEV_DHIGUDA";
    DevID2[DevID2["DEV_DAGUTORIO"] = 51] = "DEV_DAGUTORIO";
    DevID2[DevID2["DEV_NYAASU"] = 52] = "DEV_NYAASU";
    DevID2[DevID2["DEV_PERUSIAN"] = 53] = "DEV_PERUSIAN";
    DevID2[DevID2["DEV_KODAKKU"] = 54] = "DEV_KODAKKU";
    DevID2[DevID2["DEV_GORUDAKKU"] = 55] = "DEV_GORUDAKKU";
    DevID2[DevID2["DEV_MANKII"] = 56] = "DEV_MANKII";
    DevID2[DevID2["DEV_OKORIZARU"] = 57] = "DEV_OKORIZARU";
    DevID2[DevID2["DEV_GAADHI"] = 58] = "DEV_GAADHI";
    DevID2[DevID2["DEV_UINDHI"] = 59] = "DEV_UINDHI";
    DevID2[DevID2["DEV_NYOROMO"] = 60] = "DEV_NYOROMO";
    DevID2[DevID2["DEV_NYOROZO"] = 61] = "DEV_NYOROZO";
    DevID2[DevID2["DEV_NYOROBON"] = 62] = "DEV_NYOROBON";
    DevID2[DevID2["DEV_KEESHI"] = 63] = "DEV_KEESHI";
    DevID2[DevID2["DEV_YUNGERAA"] = 64] = "DEV_YUNGERAA";
    DevID2[DevID2["DEV_HUUDHIN"] = 65] = "DEV_HUUDHIN";
    DevID2[DevID2["DEV_WANRIKII"] = 66] = "DEV_WANRIKII";
    DevID2[DevID2["DEV_GOORIKII"] = 67] = "DEV_GOORIKII";
    DevID2[DevID2["DEV_KAIRIKII"] = 68] = "DEV_KAIRIKII";
    DevID2[DevID2["DEV_MADATUBOMI"] = 69] = "DEV_MADATUBOMI";
    DevID2[DevID2["DEV_UTUDON"] = 70] = "DEV_UTUDON";
    DevID2[DevID2["DEV_UTUBOTTO"] = 71] = "DEV_UTUBOTTO";
    DevID2[DevID2["DEV_MENOKURAGE"] = 72] = "DEV_MENOKURAGE";
    DevID2[DevID2["DEV_DOKUKURAGE"] = 73] = "DEV_DOKUKURAGE";
    DevID2[DevID2["DEV_ISITUBUTE"] = 74] = "DEV_ISITUBUTE";
    DevID2[DevID2["DEV_GOROON"] = 75] = "DEV_GOROON";
    DevID2[DevID2["DEV_GOROONYA"] = 76] = "DEV_GOROONYA";
    DevID2[DevID2["DEV_PONIITA"] = 77] = "DEV_PONIITA";
    DevID2[DevID2["DEV_GYAROPPU"] = 78] = "DEV_GYAROPPU";
    DevID2[DevID2["DEV_YADON"] = 79] = "DEV_YADON";
    DevID2[DevID2["DEV_YADORAN"] = 80] = "DEV_YADORAN";
    DevID2[DevID2["DEV_KOIRU"] = 81] = "DEV_KOIRU";
    DevID2[DevID2["DEV_REAKOIRU"] = 82] = "DEV_REAKOIRU";
    DevID2[DevID2["DEV_KAMONEGI"] = 83] = "DEV_KAMONEGI";
    DevID2[DevID2["DEV_DOODOO"] = 84] = "DEV_DOODOO";
    DevID2[DevID2["DEV_DOODORIO"] = 85] = "DEV_DOODORIO";
    DevID2[DevID2["DEV_PAUWAU"] = 86] = "DEV_PAUWAU";
    DevID2[DevID2["DEV_ZYUGON"] = 87] = "DEV_ZYUGON";
    DevID2[DevID2["DEV_BETOBETAA"] = 88] = "DEV_BETOBETAA";
    DevID2[DevID2["DEV_BETOBETON"] = 89] = "DEV_BETOBETON";
    DevID2[DevID2["DEV_SHERUDAA"] = 90] = "DEV_SHERUDAA";
    DevID2[DevID2["DEV_PARUSHEN"] = 91] = "DEV_PARUSHEN";
    DevID2[DevID2["DEV_GOOSU"] = 92] = "DEV_GOOSU";
    DevID2[DevID2["DEV_GOOSUTO"] = 93] = "DEV_GOOSUTO";
    DevID2[DevID2["DEV_GENGAA"] = 94] = "DEV_GENGAA";
    DevID2[DevID2["DEV_IWAAKU"] = 95] = "DEV_IWAAKU";
    DevID2[DevID2["DEV_SURIIPU"] = 96] = "DEV_SURIIPU";
    DevID2[DevID2["DEV_SURIIPAA"] = 97] = "DEV_SURIIPAA";
    DevID2[DevID2["DEV_KURABU"] = 98] = "DEV_KURABU";
    DevID2[DevID2["DEV_KINGURAA"] = 99] = "DEV_KINGURAA";
    DevID2[DevID2["DEV_BIRIRIDAMA"] = 100] = "DEV_BIRIRIDAMA";
    DevID2[DevID2["DEV_MARUMAIN"] = 101] = "DEV_MARUMAIN";
    DevID2[DevID2["DEV_TAMATAMA"] = 102] = "DEV_TAMATAMA";
    DevID2[DevID2["DEV_NASSII"] = 103] = "DEV_NASSII";
    DevID2[DevID2["DEV_KARAKARA"] = 104] = "DEV_KARAKARA";
    DevID2[DevID2["DEV_GARAGARA"] = 105] = "DEV_GARAGARA";
    DevID2[DevID2["DEV_SAWAMURAA"] = 106] = "DEV_SAWAMURAA";
    DevID2[DevID2["DEV_EBIWARAA"] = 107] = "DEV_EBIWARAA";
    DevID2[DevID2["DEV_BERORINGA"] = 108] = "DEV_BERORINGA";
    DevID2[DevID2["DEV_DOGAASU"] = 109] = "DEV_DOGAASU";
    DevID2[DevID2["DEV_MATADOGASU"] = 110] = "DEV_MATADOGASU";
    DevID2[DevID2["DEV_SAIHOON"] = 111] = "DEV_SAIHOON";
    DevID2[DevID2["DEV_SAIDON"] = 112] = "DEV_SAIDON";
    DevID2[DevID2["DEV_RAKKII"] = 113] = "DEV_RAKKII";
    DevID2[DevID2["DEV_MONZYARA"] = 114] = "DEV_MONZYARA";
    DevID2[DevID2["DEV_GARUURA"] = 115] = "DEV_GARUURA";
    DevID2[DevID2["DEV_TATTUU"] = 116] = "DEV_TATTUU";
    DevID2[DevID2["DEV_SIIDORA"] = 117] = "DEV_SIIDORA";
    DevID2[DevID2["DEV_TOSAKINTO"] = 118] = "DEV_TOSAKINTO";
    DevID2[DevID2["DEV_AZUMAOU"] = 119] = "DEV_AZUMAOU";
    DevID2[DevID2["DEV_HITODEMAN"] = 120] = "DEV_HITODEMAN";
    DevID2[DevID2["DEV_SUTAAMII"] = 121] = "DEV_SUTAAMII";
    DevID2[DevID2["DEV_BARIYAADO"] = 122] = "DEV_BARIYAADO";
    DevID2[DevID2["DEV_SUTORAIKU"] = 123] = "DEV_SUTORAIKU";
    DevID2[DevID2["DEV_RUUZYURA"] = 124] = "DEV_RUUZYURA";
    DevID2[DevID2["DEV_EREBUU"] = 125] = "DEV_EREBUU";
    DevID2[DevID2["DEV_BUUBAA"] = 126] = "DEV_BUUBAA";
    DevID2[DevID2["DEV_KAIROSU"] = 127] = "DEV_KAIROSU";
    DevID2[DevID2["DEV_KENTAROSU"] = 128] = "DEV_KENTAROSU";
    DevID2[DevID2["DEV_KOIKINGU"] = 129] = "DEV_KOIKINGU";
    DevID2[DevID2["DEV_GYARADOSU"] = 130] = "DEV_GYARADOSU";
    DevID2[DevID2["DEV_RAPURASU"] = 131] = "DEV_RAPURASU";
    DevID2[DevID2["DEV_METAMON"] = 132] = "DEV_METAMON";
    DevID2[DevID2["DEV_IIBUI"] = 133] = "DEV_IIBUI";
    DevID2[DevID2["DEV_SYAWAAZU"] = 134] = "DEV_SYAWAAZU";
    DevID2[DevID2["DEV_SANDAASU"] = 135] = "DEV_SANDAASU";
    DevID2[DevID2["DEV_BUUSUTAA"] = 136] = "DEV_BUUSUTAA";
    DevID2[DevID2["DEV_PORIGON"] = 137] = "DEV_PORIGON";
    DevID2[DevID2["DEV_OMUNAITO"] = 138] = "DEV_OMUNAITO";
    DevID2[DevID2["DEV_OMUSUTAA"] = 139] = "DEV_OMUSUTAA";
    DevID2[DevID2["DEV_KABUTO"] = 140] = "DEV_KABUTO";
    DevID2[DevID2["DEV_KABUTOPUSU"] = 141] = "DEV_KABUTOPUSU";
    DevID2[DevID2["DEV_PUTERA"] = 142] = "DEV_PUTERA";
    DevID2[DevID2["DEV_KABIGON"] = 143] = "DEV_KABIGON";
    DevID2[DevID2["DEV_HURIIZAA"] = 144] = "DEV_HURIIZAA";
    DevID2[DevID2["DEV_SANDAA"] = 145] = "DEV_SANDAA";
    DevID2[DevID2["DEV_FAIYAA"] = 146] = "DEV_FAIYAA";
    DevID2[DevID2["DEV_MINIRYUU"] = 147] = "DEV_MINIRYUU";
    DevID2[DevID2["DEV_HAKURYUU"] = 148] = "DEV_HAKURYUU";
    DevID2[DevID2["DEV_KAIRYUU"] = 149] = "DEV_KAIRYUU";
    DevID2[DevID2["DEV_MYUUTUU"] = 150] = "DEV_MYUUTUU";
    DevID2[DevID2["DEV_MYUU"] = 151] = "DEV_MYUU";
    DevID2[DevID2["DEV_TIKORIITA"] = 152] = "DEV_TIKORIITA";
    DevID2[DevID2["DEV_BEIRIIHU"] = 153] = "DEV_BEIRIIHU";
    DevID2[DevID2["DEV_MEGANIUMU"] = 154] = "DEV_MEGANIUMU";
    DevID2[DevID2["DEV_HINOARASI"] = 155] = "DEV_HINOARASI";
    DevID2[DevID2["DEV_MAGUMARASI"] = 156] = "DEV_MAGUMARASI";
    DevID2[DevID2["DEV_BAKUHUUN"] = 157] = "DEV_BAKUHUUN";
    DevID2[DevID2["DEV_WANINOKO"] = 158] = "DEV_WANINOKO";
    DevID2[DevID2["DEV_ARIGEITU"] = 159] = "DEV_ARIGEITU";
    DevID2[DevID2["DEV_OODAIRU"] = 160] = "DEV_OODAIRU";
    DevID2[DevID2["DEV_OTATI"] = 161] = "DEV_OTATI";
    DevID2[DevID2["DEV_OOTATI"] = 162] = "DEV_OOTATI";
    DevID2[DevID2["DEV_HOOHOO"] = 163] = "DEV_HOOHOO";
    DevID2[DevID2["DEV_YORUNOZUKU"] = 164] = "DEV_YORUNOZUKU";
    DevID2[DevID2["DEV_REDHIBA"] = 165] = "DEV_REDHIBA";
    DevID2[DevID2["DEV_REDHIAN"] = 166] = "DEV_REDHIAN";
    DevID2[DevID2["DEV_ITOMARU"] = 167] = "DEV_ITOMARU";
    DevID2[DevID2["DEV_ARIADOSU"] = 168] = "DEV_ARIADOSU";
    DevID2[DevID2["DEV_KUROBATTO"] = 169] = "DEV_KUROBATTO";
    DevID2[DevID2["DEV_TYONTII"] = 170] = "DEV_TYONTII";
    DevID2[DevID2["DEV_RANTAAN"] = 171] = "DEV_RANTAAN";
    DevID2[DevID2["DEV_PITYUU"] = 172] = "DEV_PITYUU";
    DevID2[DevID2["DEV_PHI"] = 173] = "DEV_PHI";
    DevID2[DevID2["DEV_PUPURIN"] = 174] = "DEV_PUPURIN";
    DevID2[DevID2["DEV_TOGEPII"] = 175] = "DEV_TOGEPII";
    DevID2[DevID2["DEV_TOGETIKKU"] = 176] = "DEV_TOGETIKKU";
    DevID2[DevID2["DEV_NEITHI"] = 177] = "DEV_NEITHI";
    DevID2[DevID2["DEV_NEITHIO"] = 178] = "DEV_NEITHIO";
    DevID2[DevID2["DEV_MERIIPU"] = 179] = "DEV_MERIIPU";
    DevID2[DevID2["DEV_MOKOKO"] = 180] = "DEV_MOKOKO";
    DevID2[DevID2["DEV_DENRYUU"] = 181] = "DEV_DENRYUU";
    DevID2[DevID2["DEV_KIREIHANA"] = 182] = "DEV_KIREIHANA";
    DevID2[DevID2["DEV_MARIRU"] = 183] = "DEV_MARIRU";
    DevID2[DevID2["DEV_MARIRURI"] = 184] = "DEV_MARIRURI";
    DevID2[DevID2["DEV_USOKKII"] = 185] = "DEV_USOKKII";
    DevID2[DevID2["DEV_NYOROTONO"] = 186] = "DEV_NYOROTONO";
    DevID2[DevID2["DEV_HANEKKO"] = 187] = "DEV_HANEKKO";
    DevID2[DevID2["DEV_POPOKKO"] = 188] = "DEV_POPOKKO";
    DevID2[DevID2["DEV_WATAKKO"] = 189] = "DEV_WATAKKO";
    DevID2[DevID2["DEV_EIPAMU"] = 190] = "DEV_EIPAMU";
    DevID2[DevID2["DEV_HIMANATTU"] = 191] = "DEV_HIMANATTU";
    DevID2[DevID2["DEV_KIMAWARI"] = 192] = "DEV_KIMAWARI";
    DevID2[DevID2["DEV_YANYANMA"] = 193] = "DEV_YANYANMA";
    DevID2[DevID2["DEV_UPAA"] = 194] = "DEV_UPAA";
    DevID2[DevID2["DEV_NUOO"] = 195] = "DEV_NUOO";
    DevID2[DevID2["DEV_EEFI"] = 196] = "DEV_EEFI";
    DevID2[DevID2["DEV_BURAKKII"] = 197] = "DEV_BURAKKII";
    DevID2[DevID2["DEV_YAMIKARASU"] = 198] = "DEV_YAMIKARASU";
    DevID2[DevID2["DEV_YADOKINGU"] = 199] = "DEV_YADOKINGU";
    DevID2[DevID2["DEV_MUUMA"] = 200] = "DEV_MUUMA";
    DevID2[DevID2["DEV_ANNOON"] = 201] = "DEV_ANNOON";
    DevID2[DevID2["DEV_SOONANSU"] = 202] = "DEV_SOONANSU";
    DevID2[DevID2["DEV_KIRINRIKI"] = 203] = "DEV_KIRINRIKI";
    DevID2[DevID2["DEV_KUNUGIDAMA"] = 204] = "DEV_KUNUGIDAMA";
    DevID2[DevID2["DEV_FORETOSU"] = 205] = "DEV_FORETOSU";
    DevID2[DevID2["DEV_NOKOTTI"] = 206] = "DEV_NOKOTTI";
    DevID2[DevID2["DEV_GURAIGAA"] = 207] = "DEV_GURAIGAA";
    DevID2[DevID2["DEV_HAGANEERU"] = 208] = "DEV_HAGANEERU";
    DevID2[DevID2["DEV_BURUU"] = 209] = "DEV_BURUU";
    DevID2[DevID2["DEV_GURANBURU"] = 210] = "DEV_GURANBURU";
    DevID2[DevID2["DEV_HARIISEN"] = 211] = "DEV_HARIISEN";
    DevID2[DevID2["DEV_HASSAMU"] = 212] = "DEV_HASSAMU";
    DevID2[DevID2["DEV_TUBOTUBO"] = 213] = "DEV_TUBOTUBO";
    DevID2[DevID2["DEV_HERAKUROSU"] = 214] = "DEV_HERAKUROSU";
    DevID2[DevID2["DEV_NYUURA"] = 215] = "DEV_NYUURA";
    DevID2[DevID2["DEV_HIMEGUMA"] = 216] = "DEV_HIMEGUMA";
    DevID2[DevID2["DEV_RINGUMA"] = 217] = "DEV_RINGUMA";
    DevID2[DevID2["DEV_MAGUMAGGU"] = 218] = "DEV_MAGUMAGGU";
    DevID2[DevID2["DEV_MAGUKARUGO"] = 219] = "DEV_MAGUKARUGO";
    DevID2[DevID2["DEV_URIMUU"] = 220] = "DEV_URIMUU";
    DevID2[DevID2["DEV_INOMUU"] = 221] = "DEV_INOMUU";
    DevID2[DevID2["DEV_SANIIGO"] = 222] = "DEV_SANIIGO";
    DevID2[DevID2["DEV_TEPPOUO"] = 223] = "DEV_TEPPOUO";
    DevID2[DevID2["DEV_OKUTAN"] = 224] = "DEV_OKUTAN";
    DevID2[DevID2["DEV_DERIBAADO"] = 225] = "DEV_DERIBAADO";
    DevID2[DevID2["DEV_MANTAIN"] = 226] = "DEV_MANTAIN";
    DevID2[DevID2["DEV_EAAMUDO"] = 227] = "DEV_EAAMUDO";
    DevID2[DevID2["DEV_DERUBIRU"] = 228] = "DEV_DERUBIRU";
    DevID2[DevID2["DEV_HERUGAA"] = 229] = "DEV_HERUGAA";
    DevID2[DevID2["DEV_KINGUDORA"] = 230] = "DEV_KINGUDORA";
    DevID2[DevID2["DEV_GOMAZOU"] = 231] = "DEV_GOMAZOU";
    DevID2[DevID2["DEV_DONFAN"] = 232] = "DEV_DONFAN";
    DevID2[DevID2["DEV_PORIGON2"] = 233] = "DEV_PORIGON2";
    DevID2[DevID2["DEV_ODOSISI"] = 234] = "DEV_ODOSISI";
    DevID2[DevID2["DEV_DOOBURU"] = 235] = "DEV_DOOBURU";
    DevID2[DevID2["DEV_BARUKII"] = 236] = "DEV_BARUKII";
    DevID2[DevID2["DEV_KAPOERAA"] = 237] = "DEV_KAPOERAA";
    DevID2[DevID2["DEV_MUTYUURU"] = 238] = "DEV_MUTYUURU";
    DevID2[DevID2["DEV_EREKIDDO"] = 239] = "DEV_EREKIDDO";
    DevID2[DevID2["DEV_BUBHI"] = 240] = "DEV_BUBHI";
    DevID2[DevID2["DEV_MIRUTANKU"] = 241] = "DEV_MIRUTANKU";
    DevID2[DevID2["DEV_HAPINASU"] = 242] = "DEV_HAPINASU";
    DevID2[DevID2["DEV_RAIKOU"] = 243] = "DEV_RAIKOU";
    DevID2[DevID2["DEV_ENTEI"] = 244] = "DEV_ENTEI";
    DevID2[DevID2["DEV_SUIKUN"] = 245] = "DEV_SUIKUN";
    DevID2[DevID2["DEV_YOOGIRASU"] = 246] = "DEV_YOOGIRASU";
    DevID2[DevID2["DEV_SANAGIRASU"] = 247] = "DEV_SANAGIRASU";
    DevID2[DevID2["DEV_BANGIRASU"] = 248] = "DEV_BANGIRASU";
    DevID2[DevID2["DEV_RUGIA"] = 249] = "DEV_RUGIA";
    DevID2[DevID2["DEV_HOUOU"] = 250] = "DEV_HOUOU";
    DevID2[DevID2["DEV_SEREBHI"] = 251] = "DEV_SEREBHI";
    DevID2[DevID2["DEV_KIMORI"] = 252] = "DEV_KIMORI";
    DevID2[DevID2["DEV_ZYUPUTORU"] = 253] = "DEV_ZYUPUTORU";
    DevID2[DevID2["DEV_ZYUKAIN"] = 254] = "DEV_ZYUKAIN";
    DevID2[DevID2["DEV_ATYAMO"] = 255] = "DEV_ATYAMO";
    DevID2[DevID2["DEV_WAKASYAMO"] = 256] = "DEV_WAKASYAMO";
    DevID2[DevID2["DEV_BASYAAMO"] = 257] = "DEV_BASYAAMO";
    DevID2[DevID2["DEV_MIZUGOROU"] = 258] = "DEV_MIZUGOROU";
    DevID2[DevID2["DEV_NUMAKUROO"] = 259] = "DEV_NUMAKUROO";
    DevID2[DevID2["DEV_RAGURAAZI"] = 260] = "DEV_RAGURAAZI";
    DevID2[DevID2["DEV_POTIENA"] = 261] = "DEV_POTIENA";
    DevID2[DevID2["DEV_GURAENA"] = 262] = "DEV_GURAENA";
    DevID2[DevID2["DEV_ZIGUZAGUMA"] = 263] = "DEV_ZIGUZAGUMA";
    DevID2[DevID2["DEV_MASSUGUMA"] = 264] = "DEV_MASSUGUMA";
    DevID2[DevID2["DEV_KEMUSSO"] = 265] = "DEV_KEMUSSO";
    DevID2[DevID2["DEV_KARASARISU"] = 266] = "DEV_KARASARISU";
    DevID2[DevID2["DEV_AGEHANTO"] = 267] = "DEV_AGEHANTO";
    DevID2[DevID2["DEV_MAYURUDO"] = 268] = "DEV_MAYURUDO";
    DevID2[DevID2["DEV_DOKUKEIRU"] = 269] = "DEV_DOKUKEIRU";
    DevID2[DevID2["DEV_HASUBOO"] = 270] = "DEV_HASUBOO";
    DevID2[DevID2["DEV_HASUBURERO"] = 271] = "DEV_HASUBURERO";
    DevID2[DevID2["DEV_RUNPAPPA"] = 272] = "DEV_RUNPAPPA";
    DevID2[DevID2["DEV_TANEBOO"] = 273] = "DEV_TANEBOO";
    DevID2[DevID2["DEV_KONOHANA"] = 274] = "DEV_KONOHANA";
    DevID2[DevID2["DEV_DAATENGU"] = 275] = "DEV_DAATENGU";
    DevID2[DevID2["DEV_SUBAME"] = 276] = "DEV_SUBAME";
    DevID2[DevID2["DEV_OOSUBAME"] = 277] = "DEV_OOSUBAME";
    DevID2[DevID2["DEV_KYAMOME"] = 278] = "DEV_KYAMOME";
    DevID2[DevID2["DEV_PERIPPAA"] = 279] = "DEV_PERIPPAA";
    DevID2[DevID2["DEV_RARUTOSU"] = 280] = "DEV_RARUTOSU";
    DevID2[DevID2["DEV_KIRURIA"] = 281] = "DEV_KIRURIA";
    DevID2[DevID2["DEV_SAANAITO"] = 282] = "DEV_SAANAITO";
    DevID2[DevID2["DEV_AMETAMA"] = 283] = "DEV_AMETAMA";
    DevID2[DevID2["DEV_AMEMOOSU"] = 284] = "DEV_AMEMOOSU";
    DevID2[DevID2["DEV_KINOKOKO"] = 285] = "DEV_KINOKOKO";
    DevID2[DevID2["DEV_KINOGASSA"] = 286] = "DEV_KINOGASSA";
    DevID2[DevID2["DEV_NAMAKERO"] = 287] = "DEV_NAMAKERO";
    DevID2[DevID2["DEV_YARUKIMONO"] = 288] = "DEV_YARUKIMONO";
    DevID2[DevID2["DEV_KEKKINGU"] = 289] = "DEV_KEKKINGU";
    DevID2[DevID2["DEV_TUTININ"] = 290] = "DEV_TUTININ";
    DevID2[DevID2["DEV_TEKKANIN"] = 291] = "DEV_TEKKANIN";
    DevID2[DevID2["DEV_NUKENIN"] = 292] = "DEV_NUKENIN";
    DevID2[DevID2["DEV_GONYONYO"] = 293] = "DEV_GONYONYO";
    DevID2[DevID2["DEV_DOGOOMU"] = 294] = "DEV_DOGOOMU";
    DevID2[DevID2["DEV_BAKUONGU"] = 295] = "DEV_BAKUONGU";
    DevID2[DevID2["DEV_MAKUNOSITA"] = 296] = "DEV_MAKUNOSITA";
    DevID2[DevID2["DEV_HARITEYAMA"] = 297] = "DEV_HARITEYAMA";
    DevID2[DevID2["DEV_RURIRI"] = 298] = "DEV_RURIRI";
    DevID2[DevID2["DEV_NOZUPASU"] = 299] = "DEV_NOZUPASU";
    DevID2[DevID2["DEV_ENEKO"] = 300] = "DEV_ENEKO";
    DevID2[DevID2["DEV_ENEKORORO"] = 301] = "DEV_ENEKORORO";
    DevID2[DevID2["DEV_YAMIRAMI"] = 302] = "DEV_YAMIRAMI";
    DevID2[DevID2["DEV_KUTIITO"] = 303] = "DEV_KUTIITO";
    DevID2[DevID2["DEV_KOKODORA"] = 304] = "DEV_KOKODORA";
    DevID2[DevID2["DEV_KODORA"] = 305] = "DEV_KODORA";
    DevID2[DevID2["DEV_BOSUGODORA"] = 306] = "DEV_BOSUGODORA";
    DevID2[DevID2["DEV_ASANAN"] = 307] = "DEV_ASANAN";
    DevID2[DevID2["DEV_TYAAREMU"] = 308] = "DEV_TYAAREMU";
    DevID2[DevID2["DEV_RAKURAI"] = 309] = "DEV_RAKURAI";
    DevID2[DevID2["DEV_RAIBORUTO"] = 310] = "DEV_RAIBORUTO";
    DevID2[DevID2["DEV_PURASURU"] = 311] = "DEV_PURASURU";
    DevID2[DevID2["DEV_MAINAN"] = 312] = "DEV_MAINAN";
    DevID2[DevID2["DEV_BARUBIITO"] = 313] = "DEV_BARUBIITO";
    DevID2[DevID2["DEV_IRUMIIZE"] = 314] = "DEV_IRUMIIZE";
    DevID2[DevID2["DEV_ROZERIA"] = 315] = "DEV_ROZERIA";
    DevID2[DevID2["DEV_GOKURIN"] = 316] = "DEV_GOKURIN";
    DevID2[DevID2["DEV_MARUNOOMU"] = 317] = "DEV_MARUNOOMU";
    DevID2[DevID2["DEV_KIBANIA"] = 318] = "DEV_KIBANIA";
    DevID2[DevID2["DEV_SAMEHADAA"] = 319] = "DEV_SAMEHADAA";
    DevID2[DevID2["DEV_HOERUKO"] = 320] = "DEV_HOERUKO";
    DevID2[DevID2["DEV_HOERUOO"] = 321] = "DEV_HOERUOO";
    DevID2[DevID2["DEV_DONMERU"] = 322] = "DEV_DONMERU";
    DevID2[DevID2["DEV_BAKUUDA"] = 323] = "DEV_BAKUUDA";
    DevID2[DevID2["DEV_KOOTASU"] = 324] = "DEV_KOOTASU";
    DevID2[DevID2["DEV_BANEBUU"] = 325] = "DEV_BANEBUU";
    DevID2[DevID2["DEV_BUUPIGGU"] = 326] = "DEV_BUUPIGGU";
    DevID2[DevID2["DEV_PATTIIRU"] = 327] = "DEV_PATTIIRU";
    DevID2[DevID2["DEV_NAKKURAA"] = 328] = "DEV_NAKKURAA";
    DevID2[DevID2["DEV_BIBURAABA"] = 329] = "DEV_BIBURAABA";
    DevID2[DevID2["DEV_HURAIGON"] = 330] = "DEV_HURAIGON";
    DevID2[DevID2["DEV_SABONEA"] = 331] = "DEV_SABONEA";
    DevID2[DevID2["DEV_NOKUTASU"] = 332] = "DEV_NOKUTASU";
    DevID2[DevID2["DEV_TIRUTTO"] = 333] = "DEV_TIRUTTO";
    DevID2[DevID2["DEV_TIRUTARISU"] = 334] = "DEV_TIRUTARISU";
    DevID2[DevID2["DEV_ZANGUUSU"] = 335] = "DEV_ZANGUUSU";
    DevID2[DevID2["DEV_HABUNEEKU"] = 336] = "DEV_HABUNEEKU";
    DevID2[DevID2["DEV_RUNATOON"] = 337] = "DEV_RUNATOON";
    DevID2[DevID2["DEV_SORUROKKU"] = 338] = "DEV_SORUROKKU";
    DevID2[DevID2["DEV_DOZYOTTI"] = 339] = "DEV_DOZYOTTI";
    DevID2[DevID2["DEV_NAMAZUN"] = 340] = "DEV_NAMAZUN";
    DevID2[DevID2["DEV_HEIGANI"] = 341] = "DEV_HEIGANI";
    DevID2[DevID2["DEV_SIZARIGAA"] = 342] = "DEV_SIZARIGAA";
    DevID2[DevID2["DEV_YAZIRON"] = 343] = "DEV_YAZIRON";
    DevID2[DevID2["DEV_NENDOORU"] = 344] = "DEV_NENDOORU";
    DevID2[DevID2["DEV_RIRIIRA"] = 345] = "DEV_RIRIIRA";
    DevID2[DevID2["DEV_YUREIDORU"] = 346] = "DEV_YUREIDORU";
    DevID2[DevID2["DEV_ANOPUSU"] = 347] = "DEV_ANOPUSU";
    DevID2[DevID2["DEV_AAMARUDO"] = 348] = "DEV_AAMARUDO";
    DevID2[DevID2["DEV_HINBASU"] = 349] = "DEV_HINBASU";
    DevID2[DevID2["DEV_MIROKAROSU"] = 350] = "DEV_MIROKAROSU";
    DevID2[DevID2["DEV_POWARUN"] = 351] = "DEV_POWARUN";
    DevID2[DevID2["DEV_KAKUREON"] = 352] = "DEV_KAKUREON";
    DevID2[DevID2["DEV_KAGEBOUZU"] = 353] = "DEV_KAGEBOUZU";
    DevID2[DevID2["DEV_ZYUPETTA"] = 354] = "DEV_ZYUPETTA";
    DevID2[DevID2["DEV_YOMAWARU"] = 355] = "DEV_YOMAWARU";
    DevID2[DevID2["DEV_SAMAYOORU"] = 356] = "DEV_SAMAYOORU";
    DevID2[DevID2["DEV_TOROPIUSU"] = 357] = "DEV_TOROPIUSU";
    DevID2[DevID2["DEV_TIRIIN"] = 358] = "DEV_TIRIIN";
    DevID2[DevID2["DEV_ABUSORU"] = 359] = "DEV_ABUSORU";
    DevID2[DevID2["DEV_SOONANO"] = 360] = "DEV_SOONANO";
    DevID2[DevID2["DEV_YUKIWARASI"] = 361] = "DEV_YUKIWARASI";
    DevID2[DevID2["DEV_ONIGOORI"] = 362] = "DEV_ONIGOORI";
    DevID2[DevID2["DEV_TAMAZARASI"] = 363] = "DEV_TAMAZARASI";
    DevID2[DevID2["DEV_TODOGURAA"] = 364] = "DEV_TODOGURAA";
    DevID2[DevID2["DEV_TODOZERUGA"] = 365] = "DEV_TODOZERUGA";
    DevID2[DevID2["DEV_PAARURU"] = 366] = "DEV_PAARURU";
    DevID2[DevID2["DEV_HANTEERU"] = 367] = "DEV_HANTEERU";
    DevID2[DevID2["DEV_SAKURABISU"] = 368] = "DEV_SAKURABISU";
    DevID2[DevID2["DEV_ZIIRANSU"] = 369] = "DEV_ZIIRANSU";
    DevID2[DevID2["DEV_RABUKASU"] = 370] = "DEV_RABUKASU";
    DevID2[DevID2["DEV_TATUBEI"] = 371] = "DEV_TATUBEI";
    DevID2[DevID2["DEV_KOMORUU"] = 372] = "DEV_KOMORUU";
    DevID2[DevID2["DEV_BOOMANDA"] = 373] = "DEV_BOOMANDA";
    DevID2[DevID2["DEV_DANBARU"] = 374] = "DEV_DANBARU";
    DevID2[DevID2["DEV_METANGU"] = 375] = "DEV_METANGU";
    DevID2[DevID2["DEV_METAGUROSU"] = 376] = "DEV_METAGUROSU";
    DevID2[DevID2["DEV_REZIROKKU"] = 377] = "DEV_REZIROKKU";
    DevID2[DevID2["DEV_REZIAISU"] = 378] = "DEV_REZIAISU";
    DevID2[DevID2["DEV_REZISUTIRU"] = 379] = "DEV_REZISUTIRU";
    DevID2[DevID2["DEV_RATHIASU"] = 380] = "DEV_RATHIASU";
    DevID2[DevID2["DEV_RATHIOSU"] = 381] = "DEV_RATHIOSU";
    DevID2[DevID2["DEV_KAIOOGA"] = 382] = "DEV_KAIOOGA";
    DevID2[DevID2["DEV_GURAADON"] = 383] = "DEV_GURAADON";
    DevID2[DevID2["DEV_REKKUUZA"] = 384] = "DEV_REKKUUZA";
    DevID2[DevID2["DEV_ZIRAATI"] = 385] = "DEV_ZIRAATI";
    DevID2[DevID2["DEV_DEOKISISU"] = 386] = "DEV_DEOKISISU";
    DevID2[DevID2["DEV_NAETORU"] = 387] = "DEV_NAETORU";
    DevID2[DevID2["DEV_HAYASIGAME"] = 388] = "DEV_HAYASIGAME";
    DevID2[DevID2["DEV_DODAITOSU"] = 389] = "DEV_DODAITOSU";
    DevID2[DevID2["DEV_HIKOZARU"] = 390] = "DEV_HIKOZARU";
    DevID2[DevID2["DEV_MOUKAZARU"] = 391] = "DEV_MOUKAZARU";
    DevID2[DevID2["DEV_GOUKAZARU"] = 392] = "DEV_GOUKAZARU";
    DevID2[DevID2["DEV_POTTYAMA"] = 393] = "DEV_POTTYAMA";
    DevID2[DevID2["DEV_POTTAISI"] = 394] = "DEV_POTTAISI";
    DevID2[DevID2["DEV_ENPERUTO"] = 395] = "DEV_ENPERUTO";
    DevID2[DevID2["DEV_MUKKURU"] = 396] = "DEV_MUKKURU";
    DevID2[DevID2["DEV_MUKUBAADO"] = 397] = "DEV_MUKUBAADO";
    DevID2[DevID2["DEV_MUKUHOOKU"] = 398] = "DEV_MUKUHOOKU";
    DevID2[DevID2["DEV_BIPPA"] = 399] = "DEV_BIPPA";
    DevID2[DevID2["DEV_BIIDARU"] = 400] = "DEV_BIIDARU";
    DevID2[DevID2["DEV_KOROBOOSI"] = 401] = "DEV_KOROBOOSI";
    DevID2[DevID2["DEV_KOROTOKKU"] = 402] = "DEV_KOROTOKKU";
    DevID2[DevID2["DEV_KORINKU"] = 403] = "DEV_KORINKU";
    DevID2[DevID2["DEV_RUKUSIO"] = 404] = "DEV_RUKUSIO";
    DevID2[DevID2["DEV_RENTORAA"] = 405] = "DEV_RENTORAA";
    DevID2[DevID2["DEV_SUBOMII"] = 406] = "DEV_SUBOMII";
    DevID2[DevID2["DEV_ROZUREIDO"] = 407] = "DEV_ROZUREIDO";
    DevID2[DevID2["DEV_ZUGAIDOSU"] = 408] = "DEV_ZUGAIDOSU";
    DevID2[DevID2["DEV_RAMUPARUDO"] = 409] = "DEV_RAMUPARUDO";
    DevID2[DevID2["DEV_TATETOPUSU"] = 410] = "DEV_TATETOPUSU";
    DevID2[DevID2["DEV_TORIDEPUSU"] = 411] = "DEV_TORIDEPUSU";
    DevID2[DevID2["DEV_MINOMUTTI"] = 412] = "DEV_MINOMUTTI";
    DevID2[DevID2["DEV_MINOMADAMU"] = 413] = "DEV_MINOMADAMU";
    DevID2[DevID2["DEV_GAAMEIRU"] = 414] = "DEV_GAAMEIRU";
    DevID2[DevID2["DEV_MITUHANII"] = 415] = "DEV_MITUHANII";
    DevID2[DevID2["DEV_BIIKUIN"] = 416] = "DEV_BIIKUIN";
    DevID2[DevID2["DEV_PATIRISU"] = 417] = "DEV_PATIRISU";
    DevID2[DevID2["DEV_BUIZERU"] = 418] = "DEV_BUIZERU";
    DevID2[DevID2["DEV_HUROOZERU"] = 419] = "DEV_HUROOZERU";
    DevID2[DevID2["DEV_THERINBO"] = 420] = "DEV_THERINBO";
    DevID2[DevID2["DEV_THERIMU"] = 421] = "DEV_THERIMU";
    DevID2[DevID2["DEV_KARANAKUSI"] = 422] = "DEV_KARANAKUSI";
    DevID2[DevID2["DEV_TORITODON"] = 423] = "DEV_TORITODON";
    DevID2[DevID2["DEV_ETEBOOSU"] = 424] = "DEV_ETEBOOSU";
    DevID2[DevID2["DEV_HUWANTE"] = 425] = "DEV_HUWANTE";
    DevID2[DevID2["DEV_HUWARAIDO"] = 426] = "DEV_HUWARAIDO";
    DevID2[DevID2["DEV_MIMIRORU"] = 427] = "DEV_MIMIRORU";
    DevID2[DevID2["DEV_MIMIROPPU"] = 428] = "DEV_MIMIROPPU";
    DevID2[DevID2["DEV_MUUMAAZI"] = 429] = "DEV_MUUMAAZI";
    DevID2[DevID2["DEV_DONKARASU"] = 430] = "DEV_DONKARASU";
    DevID2[DevID2["DEV_NYARUMAA"] = 431] = "DEV_NYARUMAA";
    DevID2[DevID2["DEV_BUNYATTO"] = 432] = "DEV_BUNYATTO";
    DevID2[DevID2["DEV_RIISYAN"] = 433] = "DEV_RIISYAN";
    DevID2[DevID2["DEV_SUKANPUU"] = 434] = "DEV_SUKANPUU";
    DevID2[DevID2["DEV_SUKATANKU"] = 435] = "DEV_SUKATANKU";
    DevID2[DevID2["DEV_DOOMIRAA"] = 436] = "DEV_DOOMIRAA";
    DevID2[DevID2["DEV_DOOTAKUN"] = 437] = "DEV_DOOTAKUN";
    DevID2[DevID2["DEV_USOHATI"] = 438] = "DEV_USOHATI";
    DevID2[DevID2["DEV_MANENE"] = 439] = "DEV_MANENE";
    DevID2[DevID2["DEV_PINPUKU"] = 440] = "DEV_PINPUKU";
    DevID2[DevID2["DEV_PERAPPU"] = 441] = "DEV_PERAPPU";
    DevID2[DevID2["DEV_MIKARUGE"] = 442] = "DEV_MIKARUGE";
    DevID2[DevID2["DEV_HUKAMARU"] = 443] = "DEV_HUKAMARU";
    DevID2[DevID2["DEV_GABAITO"] = 444] = "DEV_GABAITO";
    DevID2[DevID2["DEV_GABURIASU"] = 445] = "DEV_GABURIASU";
    DevID2[DevID2["DEV_GONBE"] = 446] = "DEV_GONBE";
    DevID2[DevID2["DEV_RIORU"] = 447] = "DEV_RIORU";
    DevID2[DevID2["DEV_RUKARIO"] = 448] = "DEV_RUKARIO";
    DevID2[DevID2["DEV_HIPOPOTASU"] = 449] = "DEV_HIPOPOTASU";
    DevID2[DevID2["DEV_KABARUDON"] = 450] = "DEV_KABARUDON";
    DevID2[DevID2["DEV_SUKORUPI"] = 451] = "DEV_SUKORUPI";
    DevID2[DevID2["DEV_DORAPION"] = 452] = "DEV_DORAPION";
    DevID2[DevID2["DEV_GUREGGURU"] = 453] = "DEV_GUREGGURU";
    DevID2[DevID2["DEV_DOKUROGGU"] = 454] = "DEV_DOKUROGGU";
    DevID2[DevID2["DEV_MASUKIPPA"] = 455] = "DEV_MASUKIPPA";
    DevID2[DevID2["DEV_KEIKOUO"] = 456] = "DEV_KEIKOUO";
    DevID2[DevID2["DEV_NEORANTO"] = 457] = "DEV_NEORANTO";
    DevID2[DevID2["DEV_TAMANTA"] = 458] = "DEV_TAMANTA";
    DevID2[DevID2["DEV_YUKIKABURI"] = 459] = "DEV_YUKIKABURI";
    DevID2[DevID2["DEV_YUKINOOO"] = 460] = "DEV_YUKINOOO";
    DevID2[DevID2["DEV_MANYUURA"] = 461] = "DEV_MANYUURA";
    DevID2[DevID2["DEV_ZIBAKOIRU"] = 462] = "DEV_ZIBAKOIRU";
    DevID2[DevID2["DEV_BEROBERUTO"] = 463] = "DEV_BEROBERUTO";
    DevID2[DevID2["DEV_DOSAIDON"] = 464] = "DEV_DOSAIDON";
    DevID2[DevID2["DEV_MOZYANBO"] = 465] = "DEV_MOZYANBO";
    DevID2[DevID2["DEV_EREKIBURU"] = 466] = "DEV_EREKIBURU";
    DevID2[DevID2["DEV_BUUBAAN"] = 467] = "DEV_BUUBAAN";
    DevID2[DevID2["DEV_TOGEKISSU"] = 468] = "DEV_TOGEKISSU";
    DevID2[DevID2["DEV_MEGAYANMA"] = 469] = "DEV_MEGAYANMA";
    DevID2[DevID2["DEV_RIIFIA"] = 470] = "DEV_RIIFIA";
    DevID2[DevID2["DEV_GUREISIA"] = 471] = "DEV_GUREISIA";
    DevID2[DevID2["DEV_GURAION"] = 472] = "DEV_GURAION";
    DevID2[DevID2["DEV_MANMUU"] = 473] = "DEV_MANMUU";
    DevID2[DevID2["DEV_PORIGONz"] = 474] = "DEV_PORIGONz";
    DevID2[DevID2["DEV_ERUREIDO"] = 475] = "DEV_ERUREIDO";
    DevID2[DevID2["DEV_DAINOOZU"] = 476] = "DEV_DAINOOZU";
    DevID2[DevID2["DEV_YONOWAARU"] = 477] = "DEV_YONOWAARU";
    DevID2[DevID2["DEV_YUKIMENOKO"] = 478] = "DEV_YUKIMENOKO";
    DevID2[DevID2["DEV_ROTOMU"] = 479] = "DEV_ROTOMU";
    DevID2[DevID2["DEV_YUKUSII"] = 480] = "DEV_YUKUSII";
    DevID2[DevID2["DEV_EMURITTO"] = 481] = "DEV_EMURITTO";
    DevID2[DevID2["DEV_AGUNOMU"] = 482] = "DEV_AGUNOMU";
    DevID2[DevID2["DEV_DHIARUGA"] = 483] = "DEV_DHIARUGA";
    DevID2[DevID2["DEV_PARUKIA"] = 484] = "DEV_PARUKIA";
    DevID2[DevID2["DEV_HIIDORAN"] = 485] = "DEV_HIIDORAN";
    DevID2[DevID2["DEV_REZIGIGASU"] = 486] = "DEV_REZIGIGASU";
    DevID2[DevID2["DEV_GIRATHINA"] = 487] = "DEV_GIRATHINA";
    DevID2[DevID2["DEV_KURESERIA"] = 488] = "DEV_KURESERIA";
    DevID2[DevID2["DEV_FIONE"] = 489] = "DEV_FIONE";
    DevID2[DevID2["DEV_MANAFI"] = 490] = "DEV_MANAFI";
    DevID2[DevID2["DEV_DAAKURAI"] = 491] = "DEV_DAAKURAI";
    DevID2[DevID2["DEV_SHEIMI"] = 492] = "DEV_SHEIMI";
    DevID2[DevID2["DEV_ARUSEUSU"] = 493] = "DEV_ARUSEUSU";
    DevID2[DevID2["DEV_BIKUTHINI"] = 494] = "DEV_BIKUTHINI";
    DevID2[DevID2["DEV_TUTAAZYA"] = 495] = "DEV_TUTAAZYA";
    DevID2[DevID2["DEV_ZYANOBII"] = 496] = "DEV_ZYANOBII";
    DevID2[DevID2["DEV_ZYAROODA"] = 497] = "DEV_ZYAROODA";
    DevID2[DevID2["DEV_POKABU"] = 498] = "DEV_POKABU";
    DevID2[DevID2["DEV_TYAOBUU"] = 499] = "DEV_TYAOBUU";
    DevID2[DevID2["DEV_ENBUOO"] = 500] = "DEV_ENBUOO";
    DevID2[DevID2["DEV_MIZYUMARU"] = 501] = "DEV_MIZYUMARU";
    DevID2[DevID2["DEV_HUTATIMARU"] = 502] = "DEV_HUTATIMARU";
    DevID2[DevID2["DEV_DAIKENKI"] = 503] = "DEV_DAIKENKI";
    DevID2[DevID2["DEV_MINEZUMI"] = 504] = "DEV_MINEZUMI";
    DevID2[DevID2["DEV_MIRUHOGGU"] = 505] = "DEV_MIRUHOGGU";
    DevID2[DevID2["DEV_YOOTERII"] = 506] = "DEV_YOOTERII";
    DevID2[DevID2["DEV_HAADERIA"] = 507] = "DEV_HAADERIA";
    DevID2[DevID2["DEV_MUURANDO"] = 508] = "DEV_MUURANDO";
    DevID2[DevID2["DEV_TYORONEKO"] = 509] = "DEV_TYORONEKO";
    DevID2[DevID2["DEV_REPARUDASU"] = 510] = "DEV_REPARUDASU";
    DevID2[DevID2["DEV_YANAPPU"] = 511] = "DEV_YANAPPU";
    DevID2[DevID2["DEV_YANAKKII"] = 512] = "DEV_YANAKKII";
    DevID2[DevID2["DEV_BAOPPU"] = 513] = "DEV_BAOPPU";
    DevID2[DevID2["DEV_BAOKKII"] = 514] = "DEV_BAOKKII";
    DevID2[DevID2["DEV_HIYAPPU"] = 515] = "DEV_HIYAPPU";
    DevID2[DevID2["DEV_HIYAKKII"] = 516] = "DEV_HIYAKKII";
    DevID2[DevID2["DEV_MUNNA"] = 517] = "DEV_MUNNA";
    DevID2[DevID2["DEV_MUSYAANA"] = 518] = "DEV_MUSYAANA";
    DevID2[DevID2["DEV_MAMEPATO"] = 519] = "DEV_MAMEPATO";
    DevID2[DevID2["DEV_HATOOBOO"] = 520] = "DEV_HATOOBOO";
    DevID2[DevID2["DEV_KENHOROU"] = 521] = "DEV_KENHOROU";
    DevID2[DevID2["DEV_SIMAMA"] = 522] = "DEV_SIMAMA";
    DevID2[DevID2["DEV_ZEBURAIKA"] = 523] = "DEV_ZEBURAIKA";
    DevID2[DevID2["DEV_DANGORO"] = 524] = "DEV_DANGORO";
    DevID2[DevID2["DEV_GANTORU"] = 525] = "DEV_GANTORU";
    DevID2[DevID2["DEV_GIGAIASU"] = 526] = "DEV_GIGAIASU";
    DevID2[DevID2["DEV_KOROMORI"] = 527] = "DEV_KOROMORI";
    DevID2[DevID2["DEV_KOKOROMORI"] = 528] = "DEV_KOKOROMORI";
    DevID2[DevID2["DEV_MOGURYUU"] = 529] = "DEV_MOGURYUU";
    DevID2[DevID2["DEV_DORYUUZU"] = 530] = "DEV_DORYUUZU";
    DevID2[DevID2["DEV_TABUNNE"] = 531] = "DEV_TABUNNE";
    DevID2[DevID2["DEV_DOKKORAA"] = 532] = "DEV_DOKKORAA";
    DevID2[DevID2["DEV_DOTEKKOTU"] = 533] = "DEV_DOTEKKOTU";
    DevID2[DevID2["DEV_ROOBUSIN"] = 534] = "DEV_ROOBUSIN";
    DevID2[DevID2["DEV_OTAMARO"] = 535] = "DEV_OTAMARO";
    DevID2[DevID2["DEV_GAMAGARU"] = 536] = "DEV_GAMAGARU";
    DevID2[DevID2["DEV_GAMAGEROGE"] = 537] = "DEV_GAMAGEROGE";
    DevID2[DevID2["DEV_NAGEKI"] = 538] = "DEV_NAGEKI";
    DevID2[DevID2["DEV_DAGEKI"] = 539] = "DEV_DAGEKI";
    DevID2[DevID2["DEV_KURUMIRU"] = 540] = "DEV_KURUMIRU";
    DevID2[DevID2["DEV_KURUMAYU"] = 541] = "DEV_KURUMAYU";
    DevID2[DevID2["DEV_HAHAKOMORI"] = 542] = "DEV_HAHAKOMORI";
    DevID2[DevID2["DEV_HUSIDE"] = 543] = "DEV_HUSIDE";
    DevID2[DevID2["DEV_HOIIGA"] = 544] = "DEV_HOIIGA";
    DevID2[DevID2["DEV_PENDORAA"] = 545] = "DEV_PENDORAA";
    DevID2[DevID2["DEV_MONMEN"] = 546] = "DEV_MONMEN";
    DevID2[DevID2["DEV_ERUHUUN"] = 547] = "DEV_ERUHUUN";
    DevID2[DevID2["DEV_TYURINE"] = 548] = "DEV_TYURINE";
    DevID2[DevID2["DEV_DOREDHIA"] = 549] = "DEV_DOREDHIA";
    DevID2[DevID2["DEV_BASURAO"] = 550] = "DEV_BASURAO";
    DevID2[DevID2["DEV_MEGUROKO"] = 551] = "DEV_MEGUROKO";
    DevID2[DevID2["DEV_WARUBIRU"] = 552] = "DEV_WARUBIRU";
    DevID2[DevID2["DEV_WARUBIARU"] = 553] = "DEV_WARUBIARU";
    DevID2[DevID2["DEV_DARUMAKKA"] = 554] = "DEV_DARUMAKKA";
    DevID2[DevID2["DEV_HIHIDARUMA"] = 555] = "DEV_HIHIDARUMA";
    DevID2[DevID2["DEV_MARAKATTI"] = 556] = "DEV_MARAKATTI";
    DevID2[DevID2["DEV_ISIZUMAI"] = 557] = "DEV_ISIZUMAI";
    DevID2[DevID2["DEV_IWAPARESU"] = 558] = "DEV_IWAPARESU";
    DevID2[DevID2["DEV_ZURUGGU"] = 559] = "DEV_ZURUGGU";
    DevID2[DevID2["DEV_ZURUZUKIN"] = 560] = "DEV_ZURUZUKIN";
    DevID2[DevID2["DEV_SINBORAA"] = 561] = "DEV_SINBORAA";
    DevID2[DevID2["DEV_DESUMASU"] = 562] = "DEV_DESUMASU";
    DevID2[DevID2["DEV_DESUKAAN"] = 563] = "DEV_DESUKAAN";
    DevID2[DevID2["DEV_PUROTOOGA"] = 564] = "DEV_PUROTOOGA";
    DevID2[DevID2["DEV_ABAGOORA"] = 565] = "DEV_ABAGOORA";
    DevID2[DevID2["DEV_AAKEN"] = 566] = "DEV_AAKEN";
    DevID2[DevID2["DEV_AAKEOSU"] = 567] = "DEV_AAKEOSU";
    DevID2[DevID2["DEV_YABUKURON"] = 568] = "DEV_YABUKURON";
    DevID2[DevID2["DEV_DASUTODASU"] = 569] = "DEV_DASUTODASU";
    DevID2[DevID2["DEV_ZOROA"] = 570] = "DEV_ZOROA";
    DevID2[DevID2["DEV_ZOROAAKU"] = 571] = "DEV_ZOROAAKU";
    DevID2[DevID2["DEV_TIRAAMHI"] = 572] = "DEV_TIRAAMHI";
    DevID2[DevID2["DEV_TIRATIINO"] = 573] = "DEV_TIRATIINO";
    DevID2[DevID2["DEV_GOTIMU"] = 574] = "DEV_GOTIMU";
    DevID2[DevID2["DEV_GOTIMIRU"] = 575] = "DEV_GOTIMIRU";
    DevID2[DevID2["DEV_GOTIRUZERU"] = 576] = "DEV_GOTIRUZERU";
    DevID2[DevID2["DEV_YUNIRAN"] = 577] = "DEV_YUNIRAN";
    DevID2[DevID2["DEV_DABURAN"] = 578] = "DEV_DABURAN";
    DevID2[DevID2["DEV_RANKURUSU"] = 579] = "DEV_RANKURUSU";
    DevID2[DevID2["DEV_KOARUHII"] = 580] = "DEV_KOARUHII";
    DevID2[DevID2["DEV_SUWANNA"] = 581] = "DEV_SUWANNA";
    DevID2[DevID2["DEV_BANIPUTTI"] = 582] = "DEV_BANIPUTTI";
    DevID2[DevID2["DEV_BANIRITTI"] = 583] = "DEV_BANIRITTI";
    DevID2[DevID2["DEV_BAIBANIRA"] = 584] = "DEV_BAIBANIRA";
    DevID2[DevID2["DEV_SIKIZIKA"] = 585] = "DEV_SIKIZIKA";
    DevID2[DevID2["DEV_MEBUKIZIKA"] = 586] = "DEV_MEBUKIZIKA";
    DevID2[DevID2["DEV_EMONGA"] = 587] = "DEV_EMONGA";
    DevID2[DevID2["DEV_KABURUMO"] = 588] = "DEV_KABURUMO";
    DevID2[DevID2["DEV_SYUBARUGO"] = 589] = "DEV_SYUBARUGO";
    DevID2[DevID2["DEV_TAMAGETAKE"] = 590] = "DEV_TAMAGETAKE";
    DevID2[DevID2["DEV_MOROBARERU"] = 591] = "DEV_MOROBARERU";
    DevID2[DevID2["DEV_PURURIRU"] = 592] = "DEV_PURURIRU";
    DevID2[DevID2["DEV_BURUNGERU"] = 593] = "DEV_BURUNGERU";
    DevID2[DevID2["DEV_MAMANBOU"] = 594] = "DEV_MAMANBOU";
    DevID2[DevID2["DEV_BATYURU"] = 595] = "DEV_BATYURU";
    DevID2[DevID2["DEV_DENTYURA"] = 596] = "DEV_DENTYURA";
    DevID2[DevID2["DEV_TESSIIDO"] = 597] = "DEV_TESSIIDO";
    DevID2[DevID2["DEV_NATTOREI"] = 598] = "DEV_NATTOREI";
    DevID2[DevID2["DEV_GIARU"] = 599] = "DEV_GIARU";
    DevID2[DevID2["DEV_GIGIARU"] = 600] = "DEV_GIGIARU";
    DevID2[DevID2["DEV_GIGIGIARU"] = 601] = "DEV_GIGIGIARU";
    DevID2[DevID2["DEV_SIBISIRASU"] = 602] = "DEV_SIBISIRASU";
    DevID2[DevID2["DEV_SIBIBIIRU"] = 603] = "DEV_SIBIBIIRU";
    DevID2[DevID2["DEV_SIBIRUDON"] = 604] = "DEV_SIBIRUDON";
    DevID2[DevID2["DEV_RIGUREE"] = 605] = "DEV_RIGUREE";
    DevID2[DevID2["DEV_OOBEMU"] = 606] = "DEV_OOBEMU";
    DevID2[DevID2["DEV_HITOMOSI"] = 607] = "DEV_HITOMOSI";
    DevID2[DevID2["DEV_RANPURAA"] = 608] = "DEV_RANPURAA";
    DevID2[DevID2["DEV_SYANDERA"] = 609] = "DEV_SYANDERA";
    DevID2[DevID2["DEV_KIBAGO"] = 610] = "DEV_KIBAGO";
    DevID2[DevID2["DEV_ONONDO"] = 611] = "DEV_ONONDO";
    DevID2[DevID2["DEV_ONONOKUSU"] = 612] = "DEV_ONONOKUSU";
    DevID2[DevID2["DEV_KUMASYUN"] = 613] = "DEV_KUMASYUN";
    DevID2[DevID2["DEV_TUNBEAA"] = 614] = "DEV_TUNBEAA";
    DevID2[DevID2["DEV_HURIIZIO"] = 615] = "DEV_HURIIZIO";
    DevID2[DevID2["DEV_TYOBOMAKI"] = 616] = "DEV_TYOBOMAKI";
    DevID2[DevID2["DEV_AGIRUDAA"] = 617] = "DEV_AGIRUDAA";
    DevID2[DevID2["DEV_MAGGYO"] = 618] = "DEV_MAGGYO";
    DevID2[DevID2["DEV_KOZYOHUU"] = 619] = "DEV_KOZYOHUU";
    DevID2[DevID2["DEV_KOZYONDO"] = 620] = "DEV_KOZYONDO";
    DevID2[DevID2["DEV_KURIMUGAN"] = 621] = "DEV_KURIMUGAN";
    DevID2[DevID2["DEV_GOBITTO"] = 622] = "DEV_GOBITTO";
    DevID2[DevID2["DEV_GORUUGU"] = 623] = "DEV_GORUUGU";
    DevID2[DevID2["DEV_KOMATANA"] = 624] = "DEV_KOMATANA";
    DevID2[DevID2["DEV_KIRIKIZAN"] = 625] = "DEV_KIRIKIZAN";
    DevID2[DevID2["DEV_BAHHURON"] = 626] = "DEV_BAHHURON";
    DevID2[DevID2["DEV_WASIBON"] = 627] = "DEV_WASIBON";
    DevID2[DevID2["DEV_WHOOGURU"] = 628] = "DEV_WHOOGURU";
    DevID2[DevID2["DEV_BARUTYAI"] = 629] = "DEV_BARUTYAI";
    DevID2[DevID2["DEV_BARUZIINA"] = 630] = "DEV_BARUZIINA";
    DevID2[DevID2["DEV_KUITARAN"] = 631] = "DEV_KUITARAN";
    DevID2[DevID2["DEV_AIANTO"] = 632] = "DEV_AIANTO";
    DevID2[DevID2["DEV_MONOZU"] = 633] = "DEV_MONOZU";
    DevID2[DevID2["DEV_ZIHEDDO"] = 634] = "DEV_ZIHEDDO";
    DevID2[DevID2["DEV_SAZANDORA"] = 635] = "DEV_SAZANDORA";
    DevID2[DevID2["DEV_MERARUBA"] = 636] = "DEV_MERARUBA";
    DevID2[DevID2["DEV_URUGAMOSU"] = 637] = "DEV_URUGAMOSU";
    DevID2[DevID2["DEV_KOBARUON"] = 638] = "DEV_KOBARUON";
    DevID2[DevID2["DEV_TERAKION"] = 639] = "DEV_TERAKION";
    DevID2[DevID2["DEV_BIRIZION"] = 640] = "DEV_BIRIZION";
    DevID2[DevID2["DEV_TORUNEROSU"] = 641] = "DEV_TORUNEROSU";
    DevID2[DevID2["DEV_BORUTOROSU"] = 642] = "DEV_BORUTOROSU";
    DevID2[DevID2["DEV_RESIRAMU"] = 643] = "DEV_RESIRAMU";
    DevID2[DevID2["DEV_ZEKUROMU"] = 644] = "DEV_ZEKUROMU";
    DevID2[DevID2["DEV_RANDOROSU"] = 645] = "DEV_RANDOROSU";
    DevID2[DevID2["DEV_KYUREMU"] = 646] = "DEV_KYUREMU";
    DevID2[DevID2["DEV_KERUDHIO"] = 647] = "DEV_KERUDHIO";
    DevID2[DevID2["DEV_MEROETTA"] = 648] = "DEV_MEROETTA";
    DevID2[DevID2["DEV_GENOSEKUTO"] = 649] = "DEV_GENOSEKUTO";
    DevID2[DevID2["DEV_HARIMARON"] = 650] = "DEV_HARIMARON";
    DevID2[DevID2["DEV_HARIBOOGU"] = 651] = "DEV_HARIBOOGU";
    DevID2[DevID2["DEV_BURIGARON"] = 652] = "DEV_BURIGARON";
    DevID2[DevID2["DEV_FOKKO"] = 653] = "DEV_FOKKO";
    DevID2[DevID2["DEV_TEERUNAA"] = 654] = "DEV_TEERUNAA";
    DevID2[DevID2["DEV_MAFOKUSII"] = 655] = "DEV_MAFOKUSII";
    DevID2[DevID2["DEV_KEROMATU"] = 656] = "DEV_KEROMATU";
    DevID2[DevID2["DEV_GEKOGASIRA"] = 657] = "DEV_GEKOGASIRA";
    DevID2[DevID2["DEV_GEKKOUGA"] = 658] = "DEV_GEKKOUGA";
    DevID2[DevID2["DEV_HORUBII"] = 659] = "DEV_HORUBII";
    DevID2[DevID2["DEV_HORUUDO"] = 660] = "DEV_HORUUDO";
    DevID2[DevID2["DEV_YAYAKOMA"] = 661] = "DEV_YAYAKOMA";
    DevID2[DevID2["DEV_HINOYAKOMA"] = 662] = "DEV_HINOYAKOMA";
    DevID2[DevID2["DEV_FAIAROO"] = 663] = "DEV_FAIAROO";
    DevID2[DevID2["DEV_KOHUKIMUSI"] = 664] = "DEV_KOHUKIMUSI";
    DevID2[DevID2["DEV_KOHUURAI"] = 665] = "DEV_KOHUURAI";
    DevID2[DevID2["DEV_BIBIYON"] = 666] = "DEV_BIBIYON";
    DevID2[DevID2["DEV_SISIKO"] = 667] = "DEV_SISIKO";
    DevID2[DevID2["DEV_KAENZISI"] = 668] = "DEV_KAENZISI";
    DevID2[DevID2["DEV_HURABEBE"] = 669] = "DEV_HURABEBE";
    DevID2[DevID2["DEV_HURAETTE"] = 670] = "DEV_HURAETTE";
    DevID2[DevID2["DEV_HURAAJESU"] = 671] = "DEV_HURAAJESU";
    DevID2[DevID2["DEV_MHEEKURU"] = 672] = "DEV_MHEEKURU";
    DevID2[DevID2["DEV_GOOGOOTO"] = 673] = "DEV_GOOGOOTO";
    DevID2[DevID2["DEV_YANTYAMU"] = 674] = "DEV_YANTYAMU";
    DevID2[DevID2["DEV_GORONDA"] = 675] = "DEV_GORONDA";
    DevID2[DevID2["DEV_TORIMIAN"] = 676] = "DEV_TORIMIAN";
    DevID2[DevID2["DEV_NYASUPAA"] = 677] = "DEV_NYASUPAA";
    DevID2[DevID2["DEV_NYAONIKUSU"] = 678] = "DEV_NYAONIKUSU";
    DevID2[DevID2["DEV_HITOTUKI"] = 679] = "DEV_HITOTUKI";
    DevID2[DevID2["DEV_NIDANGIRU"] = 680] = "DEV_NIDANGIRU";
    DevID2[DevID2["DEV_GIRUGARUDO"] = 681] = "DEV_GIRUGARUDO";
    DevID2[DevID2["DEV_SYUSYUPU"] = 682] = "DEV_SYUSYUPU";
    DevID2[DevID2["DEV_HUREHUWAN"] = 683] = "DEV_HUREHUWAN";
    DevID2[DevID2["DEV_PEROPPAHU"] = 684] = "DEV_PEROPPAHU";
    DevID2[DevID2["DEV_PERORIIMU"] = 685] = "DEV_PERORIIMU";
    DevID2[DevID2["DEV_MAAIIKA"] = 686] = "DEV_MAAIIKA";
    DevID2[DevID2["DEV_KARAMANERO"] = 687] = "DEV_KARAMANERO";
    DevID2[DevID2["DEV_KAMETETE"] = 688] = "DEV_KAMETETE";
    DevID2[DevID2["DEV_GAMENODESU"] = 689] = "DEV_GAMENODESU";
    DevID2[DevID2["DEV_KUZUMOO"] = 690] = "DEV_KUZUMOO";
    DevID2[DevID2["DEV_DORAMIDORO"] = 691] = "DEV_DORAMIDORO";
    DevID2[DevID2["DEV_UDEPPOU"] = 692] = "DEV_UDEPPOU";
    DevID2[DevID2["DEV_BUROSUTAA"] = 693] = "DEV_BUROSUTAA";
    DevID2[DevID2["DEV_ERIKITERU"] = 694] = "DEV_ERIKITERU";
    DevID2[DevID2["DEV_EREZAADO"] = 695] = "DEV_EREZAADO";
    DevID2[DevID2["DEV_TIGORASU"] = 696] = "DEV_TIGORASU";
    DevID2[DevID2["DEV_GATIGORASU"] = 697] = "DEV_GATIGORASU";
    DevID2[DevID2["DEV_AMARUSU"] = 698] = "DEV_AMARUSU";
    DevID2[DevID2["DEV_AMARURUGA"] = 699] = "DEV_AMARURUGA";
    DevID2[DevID2["DEV_NINFIA"] = 700] = "DEV_NINFIA";
    DevID2[DevID2["DEV_RUTYABURU"] = 701] = "DEV_RUTYABURU";
    DevID2[DevID2["DEV_DEDENNE"] = 702] = "DEV_DEDENNE";
    DevID2[DevID2["DEV_MERESII"] = 703] = "DEV_MERESII";
    DevID2[DevID2["DEV_NUMERA"] = 704] = "DEV_NUMERA";
    DevID2[DevID2["DEV_NUMEIRU"] = 705] = "DEV_NUMEIRU";
    DevID2[DevID2["DEV_NUMERUGON"] = 706] = "DEV_NUMERUGON";
    DevID2[DevID2["DEV_KUREHFI"] = 707] = "DEV_KUREHFI";
    DevID2[DevID2["DEV_BOKUREE"] = 708] = "DEV_BOKUREE";
    DevID2[DevID2["DEV_OOROTTO"] = 709] = "DEV_OOROTTO";
    DevID2[DevID2["DEV_BAKETTYA"] = 710] = "DEV_BAKETTYA";
    DevID2[DevID2["DEV_PANPUZIN"] = 711] = "DEV_PANPUZIN";
    DevID2[DevID2["DEV_KATIKOORU"] = 712] = "DEV_KATIKOORU";
    DevID2[DevID2["DEV_KUREBEESU"] = 713] = "DEV_KUREBEESU";
    DevID2[DevID2["DEV_ONBATTO"] = 714] = "DEV_ONBATTO";
    DevID2[DevID2["DEV_ONBAAN"] = 715] = "DEV_ONBAAN";
    DevID2[DevID2["DEV_ZERUNEASU"] = 716] = "DEV_ZERUNEASU";
    DevID2[DevID2["DEV_IBERUTARU"] = 717] = "DEV_IBERUTARU";
    DevID2[DevID2["DEV_ZIGARUDE"] = 718] = "DEV_ZIGARUDE";
    DevID2[DevID2["DEV_DHIANSII"] = 719] = "DEV_DHIANSII";
    DevID2[DevID2["DEV_HUUPA"] = 720] = "DEV_HUUPA";
    DevID2[DevID2["DEV_BORUKENION"] = 721] = "DEV_BORUKENION";
    DevID2[DevID2["DEV_MOKUROO"] = 722] = "DEV_MOKUROO";
    DevID2[DevID2["DEV_HUKUSUROO"] = 723] = "DEV_HUKUSUROO";
    DevID2[DevID2["DEV_ZYUNAIPAA"] = 724] = "DEV_ZYUNAIPAA";
    DevID2[DevID2["DEV_NYABII"] = 725] = "DEV_NYABII";
    DevID2[DevID2["DEV_NYAHIITO"] = 726] = "DEV_NYAHIITO";
    DevID2[DevID2["DEV_GAOGAEN"] = 727] = "DEV_GAOGAEN";
    DevID2[DevID2["DEV_ASIMARI"] = 728] = "DEV_ASIMARI";
    DevID2[DevID2["DEV_OSYAMARI"] = 729] = "DEV_OSYAMARI";
    DevID2[DevID2["DEV_ASIREENU"] = 730] = "DEV_ASIREENU";
    DevID2[DevID2["DEV_TUTUKERA"] = 731] = "DEV_TUTUKERA";
    DevID2[DevID2["DEV_KERARAPPA"] = 732] = "DEV_KERARAPPA";
    DevID2[DevID2["DEV_DODEKABASI"] = 733] = "DEV_DODEKABASI";
    DevID2[DevID2["DEV_YANGUUSU"] = 734] = "DEV_YANGUUSU";
    DevID2[DevID2["DEV_DEKAGUUSU"] = 735] = "DEV_DEKAGUUSU";
    DevID2[DevID2["DEV_AGOZIMUSI"] = 736] = "DEV_AGOZIMUSI";
    DevID2[DevID2["DEV_DENDIMUSI"] = 737] = "DEV_DENDIMUSI";
    DevID2[DevID2["DEV_KUWAGANON"] = 738] = "DEV_KUWAGANON";
    DevID2[DevID2["DEV_MAKENKANI"] = 739] = "DEV_MAKENKANI";
    DevID2[DevID2["DEV_KEKENKANI"] = 740] = "DEV_KEKENKANI";
    DevID2[DevID2["DEV_ODORIDORI"] = 741] = "DEV_ODORIDORI";
    DevID2[DevID2["DEV_ABURII"] = 742] = "DEV_ABURII";
    DevID2[DevID2["DEV_ABURIBON"] = 743] = "DEV_ABURIBON";
    DevID2[DevID2["DEV_IWANKO"] = 744] = "DEV_IWANKO";
    DevID2[DevID2["DEV_RUGARUGAN"] = 745] = "DEV_RUGARUGAN";
    DevID2[DevID2["DEV_YOWASI"] = 746] = "DEV_YOWASI";
    DevID2[DevID2["DEV_HIDOIDE"] = 747] = "DEV_HIDOIDE";
    DevID2[DevID2["DEV_DOHIDOIDE"] = 748] = "DEV_DOHIDOIDE";
    DevID2[DevID2["DEV_DOROBANKO"] = 749] = "DEV_DOROBANKO";
    DevID2[DevID2["DEV_BANBADORO"] = 750] = "DEV_BANBADORO";
    DevID2[DevID2["DEV_SIZUKUMO"] = 751] = "DEV_SIZUKUMO";
    DevID2[DevID2["DEV_ONISIZUKUMO"] = 752] = "DEV_ONISIZUKUMO";
    DevID2[DevID2["DEV_KARIKIRI"] = 753] = "DEV_KARIKIRI";
    DevID2[DevID2["DEV_RARANTESU"] = 754] = "DEV_RARANTESU";
    DevID2[DevID2["DEV_NEMASYU"] = 755] = "DEV_NEMASYU";
    DevID2[DevID2["DEV_MASHEEDO"] = 756] = "DEV_MASHEEDO";
    DevID2[DevID2["DEV_YATOUMORI"] = 757] = "DEV_YATOUMORI";
    DevID2[DevID2["DEV_ENNYUUTO"] = 758] = "DEV_ENNYUUTO";
    DevID2[DevID2["DEV_NUIKOGUMA"] = 759] = "DEV_NUIKOGUMA";
    DevID2[DevID2["DEV_KITERUGUMA"] = 760] = "DEV_KITERUGUMA";
    DevID2[DevID2["DEV_AMAKAZI"] = 761] = "DEV_AMAKAZI";
    DevID2[DevID2["DEV_AMAMAIKO"] = 762] = "DEV_AMAMAIKO";
    DevID2[DevID2["DEV_AMAAZYO"] = 763] = "DEV_AMAAZYO";
    DevID2[DevID2["DEV_KYUWAWAA"] = 764] = "DEV_KYUWAWAA";
    DevID2[DevID2["DEV_YAREYUUTAN"] = 765] = "DEV_YAREYUUTAN";
    DevID2[DevID2["DEV_NAGETUKESARU"] = 766] = "DEV_NAGETUKESARU";
    DevID2[DevID2["DEV_KOSOKUMUSI"] = 767] = "DEV_KOSOKUMUSI";
    DevID2[DevID2["DEV_GUSOKUMUSYA"] = 768] = "DEV_GUSOKUMUSYA";
    DevID2[DevID2["DEV_SUNABHA"] = 769] = "DEV_SUNABHA";
    DevID2[DevID2["DEV_SIRODESUNA"] = 770] = "DEV_SIRODESUNA";
    DevID2[DevID2["DEV_NAMAKOBUSI"] = 771] = "DEV_NAMAKOBUSI";
    DevID2[DevID2["DEV_TAIPUNURU"] = 772] = "DEV_TAIPUNURU";
    DevID2[DevID2["DEV_SIRUVHADHI"] = 773] = "DEV_SIRUVHADHI";
    DevID2[DevID2["DEV_METENO"] = 774] = "DEV_METENO";
    DevID2[DevID2["DEV_NEKKOARA"] = 775] = "DEV_NEKKOARA";
    DevID2[DevID2["DEV_BAKUGAMESU"] = 776] = "DEV_BAKUGAMESU";
    DevID2[DevID2["DEV_TOGEDEMARU"] = 777] = "DEV_TOGEDEMARU";
    DevID2[DevID2["DEV_MIMIKKYU"] = 778] = "DEV_MIMIKKYU";
    DevID2[DevID2["DEV_HAGIGISIRI"] = 779] = "DEV_HAGIGISIRI";
    DevID2[DevID2["DEV_ZIZIIRON"] = 780] = "DEV_ZIZIIRON";
    DevID2[DevID2["DEV_DADARIN"] = 781] = "DEV_DADARIN";
    DevID2[DevID2["DEV_ZYARAKO"] = 782] = "DEV_ZYARAKO";
    DevID2[DevID2["DEV_ZYARANGO"] = 783] = "DEV_ZYARANGO";
    DevID2[DevID2["DEV_ZYARARANGA"] = 784] = "DEV_ZYARARANGA";
    DevID2[DevID2["DEV_KAPUKOKEKO"] = 785] = "DEV_KAPUKOKEKO";
    DevID2[DevID2["DEV_KAPUTETEHU"] = 786] = "DEV_KAPUTETEHU";
    DevID2[DevID2["DEV_KAPUBURURU"] = 787] = "DEV_KAPUBURURU";
    DevID2[DevID2["DEV_KAPUREHIRE"] = 788] = "DEV_KAPUREHIRE";
    DevID2[DevID2["DEV_KOSUMOGGU"] = 789] = "DEV_KOSUMOGGU";
    DevID2[DevID2["DEV_KOSUMOUMU"] = 790] = "DEV_KOSUMOUMU";
    DevID2[DevID2["DEV_SORUGAREO"] = 791] = "DEV_SORUGAREO";
    DevID2[DevID2["DEV_RUNAAARA"] = 792] = "DEV_RUNAAARA";
    DevID2[DevID2["DEV_UTUROIDO"] = 793] = "DEV_UTUROIDO";
    DevID2[DevID2["DEV_MASSIBUUN"] = 794] = "DEV_MASSIBUUN";
    DevID2[DevID2["DEV_FEROOTHE"] = 795] = "DEV_FEROOTHE";
    DevID2[DevID2["DEV_DENZYUMOKU"] = 796] = "DEV_DENZYUMOKU";
    DevID2[DevID2["DEV_TEKKAGUYA"] = 797] = "DEV_TEKKAGUYA";
    DevID2[DevID2["DEV_KAMITURUGI"] = 798] = "DEV_KAMITURUGI";
    DevID2[DevID2["DEV_AKUZIKINGU"] = 799] = "DEV_AKUZIKINGU";
    DevID2[DevID2["DEV_NEKUROZUMA"] = 800] = "DEV_NEKUROZUMA";
    DevID2[DevID2["DEV_MAGIANA"] = 801] = "DEV_MAGIANA";
    DevID2[DevID2["DEV_MAASYADOO"] = 802] = "DEV_MAASYADOO";
    DevID2[DevID2["DEV_BEBENOMU"] = 803] = "DEV_BEBENOMU";
    DevID2[DevID2["DEV_AAGOYON"] = 804] = "DEV_AAGOYON";
    DevID2[DevID2["DEV_TUNDETUNDE"] = 805] = "DEV_TUNDETUNDE";
    DevID2[DevID2["DEV_ZUGADOON"] = 806] = "DEV_ZUGADOON";
    DevID2[DevID2["DEV_ZERAORA"] = 807] = "DEV_ZERAORA";
    DevID2[DevID2["DEV_MERUTAN"] = 808] = "DEV_MERUTAN";
    DevID2[DevID2["DEV_MERUMETARU"] = 809] = "DEV_MERUMETARU";
    DevID2[DevID2["DEV_SARUNORI"] = 810] = "DEV_SARUNORI";
    DevID2[DevID2["DEV_BATINKII"] = 811] = "DEV_BATINKII";
    DevID2[DevID2["DEV_GORIRANDAA"] = 812] = "DEV_GORIRANDAA";
    DevID2[DevID2["DEV_HIBANII"] = 813] = "DEV_HIBANII";
    DevID2[DevID2["DEV_RABIHUTTO"] = 814] = "DEV_RABIHUTTO";
    DevID2[DevID2["DEV_EESUBAAN"] = 815] = "DEV_EESUBAAN";
    DevID2[DevID2["DEV_MESSON"] = 816] = "DEV_MESSON";
    DevID2[DevID2["DEV_ZIMEREON"] = 817] = "DEV_ZIMEREON";
    DevID2[DevID2["DEV_INTEREON"] = 818] = "DEV_INTEREON";
    DevID2[DevID2["DEV_HOSIGARISU"] = 819] = "DEV_HOSIGARISU";
    DevID2[DevID2["DEV_YOKUBARISU"] = 820] = "DEV_YOKUBARISU";
    DevID2[DevID2["DEV_KOKOGARA"] = 821] = "DEV_KOKOGARA";
    DevID2[DevID2["DEV_AOGARASU"] = 822] = "DEV_AOGARASU";
    DevID2[DevID2["DEV_AAMAAGAA"] = 823] = "DEV_AAMAAGAA";
    DevID2[DevID2["DEV_SATTIMUSI"] = 824] = "DEV_SATTIMUSI";
    DevID2[DevID2["DEV_REDOOMUSI"] = 825] = "DEV_REDOOMUSI";
    DevID2[DevID2["DEV_IORUBU"] = 826] = "DEV_IORUBU";
    DevID2[DevID2["DEV_KUSUNE"] = 827] = "DEV_KUSUNE";
    DevID2[DevID2["DEV_FOKUSURAI"] = 828] = "DEV_FOKUSURAI";
    DevID2[DevID2["DEV_HIMENKA"] = 829] = "DEV_HIMENKA";
    DevID2[DevID2["DEV_WATASIRAGA"] = 830] = "DEV_WATASIRAGA";
    DevID2[DevID2["DEV_UURUU"] = 831] = "DEV_UURUU";
    DevID2[DevID2["DEV_BAIUURUU"] = 832] = "DEV_BAIUURUU";
    DevID2[DevID2["DEV_KAMUKAME"] = 833] = "DEV_KAMUKAME";
    DevID2[DevID2["DEV_KAZIRIGAME"] = 834] = "DEV_KAZIRIGAME";
    DevID2[DevID2["DEV_WANPATI"] = 835] = "DEV_WANPATI";
    DevID2[DevID2["DEV_PARUSUWAN"] = 836] = "DEV_PARUSUWAN";
    DevID2[DevID2["DEV_TANDON"] = 837] = "DEV_TANDON";
    DevID2[DevID2["DEV_TOROGGON"] = 838] = "DEV_TOROGGON";
    DevID2[DevID2["DEV_SEKITANZAN"] = 839] = "DEV_SEKITANZAN";
    DevID2[DevID2["DEV_KAZITTYU"] = 840] = "DEV_KAZITTYU";
    DevID2[DevID2["DEV_APPURYUU"] = 841] = "DEV_APPURYUU";
    DevID2[DevID2["DEV_TARUPPURU"] = 842] = "DEV_TARUPPURU";
    DevID2[DevID2["DEV_SUNAHEBI"] = 843] = "DEV_SUNAHEBI";
    DevID2[DevID2["DEV_SADAIZYA"] = 844] = "DEV_SADAIZYA";
    DevID2[DevID2["DEV_UUU"] = 845] = "DEV_UUU";
    DevID2[DevID2["DEV_SASIKAMASU"] = 846] = "DEV_SASIKAMASU";
    DevID2[DevID2["DEV_KAMASUZYOO"] = 847] = "DEV_KAMASUZYOO";
    DevID2[DevID2["DEV_EREZUN"] = 848] = "DEV_EREZUN";
    DevID2[DevID2["DEV_SUTORINDAA"] = 849] = "DEV_SUTORINDAA";
    DevID2[DevID2["DEV_YAKUDE"] = 850] = "DEV_YAKUDE";
    DevID2[DevID2["DEV_MARUYAKUDE"] = 851] = "DEV_MARUYAKUDE";
    DevID2[DevID2["DEV_TATAKKO"] = 852] = "DEV_TATAKKO";
    DevID2[DevID2["DEV_OTOSUPASU"] = 853] = "DEV_OTOSUPASU";
    DevID2[DevID2["DEV_YABATYA"] = 854] = "DEV_YABATYA";
    DevID2[DevID2["DEV_POTTODESU"] = 855] = "DEV_POTTODESU";
    DevID2[DevID2["DEV_MIBURIMU"] = 856] = "DEV_MIBURIMU";
    DevID2[DevID2["DEV_TEBURIMU"] = 857] = "DEV_TEBURIMU";
    DevID2[DevID2["DEV_BURIMUON"] = 858] = "DEV_BURIMUON";
    DevID2[DevID2["DEV_BEROBAA"] = 859] = "DEV_BEROBAA";
    DevID2[DevID2["DEV_GIMOO"] = 860] = "DEV_GIMOO";
    DevID2[DevID2["DEV_OORONGE"] = 861] = "DEV_OORONGE";
    DevID2[DevID2["DEV_TATIHUSAGUMA"] = 862] = "DEV_TATIHUSAGUMA";
    DevID2[DevID2["DEV_NYAIKINGU"] = 863] = "DEV_NYAIKINGU";
    DevID2[DevID2["DEV_SANIGOON"] = 864] = "DEV_SANIGOON";
    DevID2[DevID2["DEV_NEGIGANAITO"] = 865] = "DEV_NEGIGANAITO";
    DevID2[DevID2["DEV_BARIKOORU"] = 866] = "DEV_BARIKOORU";
    DevID2[DevID2["DEV_DESUBAAN"] = 867] = "DEV_DESUBAAN";
    DevID2[DevID2["DEV_MAHOMIRU"] = 868] = "DEV_MAHOMIRU";
    DevID2[DevID2["DEV_MAHOIPPU"] = 869] = "DEV_MAHOIPPU";
    DevID2[DevID2["DEV_TAIREETU"] = 870] = "DEV_TAIREETU";
    DevID2[DevID2["DEV_BATINUNI"] = 871] = "DEV_BATINUNI";
    DevID2[DevID2["DEV_YUKIHAMI"] = 872] = "DEV_YUKIHAMI";
    DevID2[DevID2["DEV_MOSUNOU"] = 873] = "DEV_MOSUNOU";
    DevID2[DevID2["DEV_ISIHENZIN"] = 874] = "DEV_ISIHENZIN";
    DevID2[DevID2["DEV_KOORIPPO"] = 875] = "DEV_KOORIPPO";
    DevID2[DevID2["DEV_IESSAN"] = 876] = "DEV_IESSAN";
    DevID2[DevID2["DEV_MORUPEKO"] = 877] = "DEV_MORUPEKO";
    DevID2[DevID2["DEV_ZOUDOU"] = 878] = "DEV_ZOUDOU";
    DevID2[DevID2["DEV_DAIOUDOU"] = 879] = "DEV_DAIOUDOU";
    DevID2[DevID2["DEV_PATTIRAGON"] = 880] = "DEV_PATTIRAGON";
    DevID2[DevID2["DEV_PATTIRUDON"] = 881] = "DEV_PATTIRUDON";
    DevID2[DevID2["DEV_UONORAGON"] = 882] = "DEV_UONORAGON";
    DevID2[DevID2["DEV_UOTIRUDON"] = 883] = "DEV_UOTIRUDON";
    DevID2[DevID2["DEV_ZYURARUDON"] = 884] = "DEV_ZYURARUDON";
    DevID2[DevID2["DEV_DORAMESIYA"] = 885] = "DEV_DORAMESIYA";
    DevID2[DevID2["DEV_DORONTI"] = 886] = "DEV_DORONTI";
    DevID2[DevID2["DEV_DORAPARUTO"] = 887] = "DEV_DORAPARUTO";
    DevID2[DevID2["DEV_ZASIAN"] = 888] = "DEV_ZASIAN";
    DevID2[DevID2["DEV_ZAMAZENTA"] = 889] = "DEV_ZAMAZENTA";
    DevID2[DevID2["DEV_MUGENDAINA"] = 890] = "DEV_MUGENDAINA";
    DevID2[DevID2["DEV_AAMAA1"] = 891] = "DEV_AAMAA1";
    DevID2[DevID2["DEV_AAMAA2"] = 892] = "DEV_AAMAA2";
    DevID2[DevID2["DEV_m23"] = 893] = "DEV_m23";
    DevID2[DevID2["DEV_REDEN"] = 894] = "DEV_REDEN";
    DevID2[DevID2["DEV_REDORA"] = 895] = "DEV_REDORA";
    DevID2[DevID2["DEV_HAKUBA"] = 896] = "DEV_HAKUBA";
    DevID2[DevID2["DEV_KOKUBA"] = 897] = "DEV_KOKUBA";
    DevID2[DevID2["DEV_KURAUN"] = 898] = "DEV_KURAUN";
    DevID2[DevID2["DEV_ODOSISI2"] = 899] = "DEV_ODOSISI2";
    DevID2[DevID2["DEV_SUTORAIKU2"] = 900] = "DEV_SUTORAIKU2";
    DevID2[DevID2["DEV_HIMEGUMA3"] = 901] = "DEV_HIMEGUMA3";
    DevID2[DevID2["DEV_rBASURAO2"] = 902] = "DEV_rBASURAO2";
    DevID2[DevID2["DEV_rNYUURA2"] = 903] = "DEV_rNYUURA2";
    DevID2[DevID2["DEV_rHARISEN2"] = 904] = "DEV_rHARISEN2";
    DevID2[DevID2["DEV_FEATOROSU"] = 905] = "DEV_FEATOROSU";
    DevID2[DevID2["DEV_NEKO1"] = 906] = "DEV_NEKO1";
    DevID2[DevID2["DEV_NEKO2"] = 907] = "DEV_NEKO2";
    DevID2[DevID2["DEV_NEKO3"] = 908] = "DEV_NEKO3";
    DevID2[DevID2["DEV_WANI1"] = 909] = "DEV_WANI1";
    DevID2[DevID2["DEV_WANI2"] = 910] = "DEV_WANI2";
    DevID2[DevID2["DEV_WANI3"] = 911] = "DEV_WANI3";
    DevID2[DevID2["DEV_KAMO1"] = 912] = "DEV_KAMO1";
    DevID2[DevID2["DEV_KAMO2"] = 913] = "DEV_KAMO2";
    DevID2[DevID2["DEV_KAMO3"] = 914] = "DEV_KAMO3";
    DevID2[DevID2["DEV_BUTA1"] = 915] = "DEV_BUTA1";
    DevID2[DevID2["DEV_BUTA2"] = 916] = "DEV_BUTA2";
    DevID2[DevID2["DEV_NOKOTTI2"] = 917] = "DEV_NOKOTTI2";
    DevID2[DevID2["DEV_KUMO1"] = 918] = "DEV_KUMO1";
    DevID2[DevID2["DEV_KUMO2"] = 919] = "DEV_KUMO2";
    DevID2[DevID2["DEV_BATTA1"] = 920] = "DEV_BATTA1";
    DevID2[DevID2["DEV_BATTA2"] = 921] = "DEV_BATTA2";
    DevID2[DevID2["DEV_SUKARABE1"] = 922] = "DEV_SUKARABE1";
    DevID2[DevID2["DEV_SUKARABE2"] = 923] = "DEV_SUKARABE2";
    DevID2[DevID2["DEV_OBAKEINU1"] = 924] = "DEV_OBAKEINU1";
    DevID2[DevID2["DEV_OBAKEINU2"] = 925] = "DEV_OBAKEINU2";
    DevID2[DevID2["DEV_DATYOU1"] = 926] = "DEV_DATYOU1";
    DevID2[DevID2["DEV_DATYOU2"] = 927] = "DEV_DATYOU2";
    DevID2[DevID2["DEV_KIRINRIKI2"] = 928] = "DEV_KIRINRIKI2";
    DevID2[DevID2["DEV_UMIDHIGUDA"] = 929] = "DEV_UMIDHIGUDA";
    DevID2[DevID2["DEV_UMITORIO"] = 930] = "DEV_UMITORIO";
    DevID2[DevID2["DEV_OYAKATA"] = 931] = "DEV_OYAKATA";
    DevID2[DevID2["DEV_MERURUUSA"] = 932] = "DEV_MERURUUSA";
    DevID2[DevID2["DEV_IRUKA1"] = 933] = "DEV_IRUKA1";
    DevID2[DevID2["DEV_IRUKA2"] = 934] = "DEV_IRUKA2";
    DevID2[DevID2["DEV_ORIIBU1"] = 935] = "DEV_ORIIBU1";
    DevID2[DevID2["DEV_ORIIBU2"] = 936] = "DEV_ORIIBU2";
    DevID2[DevID2["DEV_ORIIBU3"] = 937] = "DEV_ORIIBU3";
    DevID2[DevID2["DEV_HABANERO1"] = 938] = "DEV_HABANERO1";
    DevID2[DevID2["DEV_HABANERO2"] = 939] = "DEV_HABANERO2";
    DevID2[DevID2["DEV_KAERU1"] = 940] = "DEV_KAERU1";
    DevID2[DevID2["DEV_KAERU2"] = 941] = "DEV_KAERU2";
    DevID2[DevID2["DEV_ENZIN1"] = 942] = "DEV_ENZIN1";
    DevID2[DevID2["DEV_ENZIN2"] = 943] = "DEV_ENZIN2";
    DevID2[DevID2["DEV_MIMIZU"] = 944] = "DEV_MIMIZU";
    DevID2[DevID2["DEV_NEZUMI1"] = 945] = "DEV_NEZUMI1";
    DevID2[DevID2["DEV_NEZUMI2"] = 946] = "DEV_NEZUMI2";
    DevID2[DevID2["DEV_OKAKUZIRA1"] = 947] = "DEV_OKAKUZIRA1";
    DevID2[DevID2["DEV_OKAKUZIRA2"] = 948] = "DEV_OKAKUZIRA2";
    DevID2[DevID2["DEV_KOORIDORA1"] = 949] = "DEV_KOORIDORA1";
    DevID2[DevID2["DEV_KOORIDORA2"] = 950] = "DEV_KOORIDORA2";
    DevID2[DevID2["DEV_KOORIDORA3"] = 951] = "DEV_KOORIDORA3";
    DevID2[DevID2["DEV_SUSIDORA"] = 952] = "DEV_SUSIDORA";
    DevID2[DevID2["DEV_BAIKU"] = 953] = "DEV_BAIKU";
    DevID2[DevID2["DEV_MAAMOTTO1"] = 954] = "DEV_MAAMOTTO1";
    DevID2[DevID2["DEV_MAAMOTTO2"] = 955] = "DEV_MAAMOTTO2";
    DevID2[DevID2["DEV_MAAMOTTO3"] = 956] = "DEV_MAAMOTTO3";
    DevID2[DevID2["DEV_MIZUDORI1"] = 957] = "DEV_MIZUDORI1";
    DevID2[DevID2["DEV_MIZUDORI2"] = 958] = "DEV_MIZUDORI2";
    DevID2[DevID2["DEV_KOUNOTORI"] = 959] = "DEV_KOUNOTORI";
    DevID2[DevID2["DEV_INKO"] = 960] = "DEV_INKO";
    DevID2[DevID2["DEV_HURAMINGO"] = 961] = "DEV_HURAMINGO";
    DevID2[DevID2["DEV_KEGANI"] = 962] = "DEV_KEGANI";
    DevID2[DevID2["DEV_GANEN1"] = 963] = "DEV_GANEN1";
    DevID2[DevID2["DEV_GANEN2"] = 964] = "DEV_GANEN2";
    DevID2[DevID2["DEV_GANEN3"] = 965] = "DEV_GANEN3";
    DevID2[DevID2["DEV_KARUKAN1"] = 966] = "DEV_KARUKAN1";
    DevID2[DevID2["DEV_KARUKAN2"] = 967] = "DEV_KARUKAN2";
    DevID2[DevID2["DEV_AIAI1"] = 968] = "DEV_AIAI1";
    DevID2[DevID2["DEV_AIAI2"] = 969] = "DEV_AIAI2";
    DevID2[DevID2["DEV_PANINU1"] = 970] = "DEV_PANINU1";
    DevID2[DevID2["DEV_PANINU2"] = 971] = "DEV_PANINU2";
    DevID2[DevID2["DEV_MASUTHIHU1"] = 972] = "DEV_MASUTHIHU1";
    DevID2[DevID2["DEV_MASUTHIHU2"] = 973] = "DEV_MASUTHIHU2";
    DevID2[DevID2["DEV_TANBURU1"] = 974] = "DEV_TANBURU1";
    DevID2[DevID2["DEV_TANBURU2"] = 975] = "DEV_TANBURU2";
    DevID2[DevID2["DEV_KOIN1"] = 976] = "DEV_KOIN1";
    DevID2[DevID2["DEV_KOIN2"] = 977] = "DEV_KOIN2";
    DevID2[DevID2["DEV_ADONFAN"] = 978] = "DEV_ADONFAN";
    DevID2[DevID2["DEV_AMOROBARERU"] = 979] = "DEV_AMOROBARERU";
    DevID2[DevID2["DEV_AKETUBAN"] = 980] = "DEV_AKETUBAN";
    DevID2[DevID2["DEV_AREAKOIRU"] = 981] = "DEV_AREAKOIRU";
    DevID2[DevID2["DEV_APURIN"] = 982] = "DEV_APURIN";
    DevID2[DevID2["DEV_AMUUMA"] = 983] = "DEV_AMUUMA";
    DevID2[DevID2["DEV_AURUGAMOSU"] = 984] = "DEV_AURUGAMOSU";
    DevID2[DevID2["DEV_AAAAA"] = 985] = "DEV_AAAAA";
    DevID2[DevID2["DEV_BDONFAN"] = 986] = "DEV_BDONFAN";
    DevID2[DevID2["DEV_BKETUBAN"] = 987] = "DEV_BKETUBAN";
    DevID2[DevID2["DEV_BURUGAMOSU"] = 988] = "DEV_BURUGAMOSU";
    DevID2[DevID2["DEV_BHARITEYAMA"] = 989] = "DEV_BHARITEYAMA";
    DevID2[DevID2["DEV_BSAZANDORA"] = 990] = "DEV_BSAZANDORA";
    DevID2[DevID2["DEV_BBANGIRASU"] = 991] = "DEV_BBANGIRASU";
    DevID2[DevID2["DEV_BKOORI"] = 992] = "DEV_BKOORI";
    DevID2[DevID2["DEV_BBBBB"] = 993] = "DEV_BBBBB";
    DevID2[DevID2["DEV_ZYUNDEN1"] = 994] = "DEV_ZYUNDEN1";
    DevID2[DevID2["DEV_ZYUNDEN2"] = 995] = "DEV_ZYUNDEN2";
    DevID2[DevID2["DEV_ZYUNDEN3"] = 996] = "DEV_ZYUNDEN3";
    DevID2[DevID2["DEV_ZYUNDEN4"] = 997] = "DEV_ZYUNDEN4";
    DevID2[DevID2["DEV_AIGUANA"] = 998] = "DEV_AIGUANA";
    DevID2[DevID2["DEV_BIGUANA"] = 999] = "DEV_BIGUANA";
    DevID2[DevID2["DEV_FEARII1"] = 1e3] = "DEV_FEARII1";
    DevID2[DevID2["DEV_FEARII2"] = 1001] = "DEV_FEARII2";
    DevID2[DevID2["DEV_FEARII3"] = 1002] = "DEV_FEARII3";
    DevID2[DevID2["DEV_HINOKO1"] = 1003] = "DEV_HINOKO1";
    DevID2[DevID2["DEV_HINOKO2A"] = 1004] = "DEV_HINOKO2A";
    DevID2[DevID2["DEV_HINOKO2B"] = 1005] = "DEV_HINOKO2B";
    DevID2[DevID2["DEV_OKAKINGU"] = 1006] = "DEV_OKAKINGU";
    DevID2[DevID2["DEV_OKAGYARADOSU"] = 1007] = "DEV_OKAGYARADOSU";
    DevID2[DevID2["DEV_KOMATANA3"] = 1008] = "DEV_KOMATANA3";
    DevID2[DevID2["DEV_rUPAA2"] = 1009] = "DEV_rUPAA2";
    DevID2[DevID2["DEV_MANKII3"] = 1010] = "DEV_MANKII3";
    return DevID2;
  })(DevID || {});

  // tmp_sv_schema/poke-data-battle.ts
  var PokeDataBattle = class _PokeDataBattle {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    static getRootAsPokeDataBattle(bb, obj) {
      return (obj || new _PokeDataBattle()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsPokeDataBattle(bb, obj) {
      bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
      return (obj || new _PokeDataBattle()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    devId() {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? this.bb.readUint16(this.bb_pos + offset) : 0 /* DEV_NULL */;
    }
    formId() {
      const offset = this.bb.__offset(this.bb_pos, 6);
      return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
    }
    sex() {
      const offset = this.bb.__offset(this.bb_pos, 8);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* DEFAULT */;
    }
    item() {
      const offset = this.bb.__offset(this.bb_pos, 10);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* ITEMID_NONE */;
    }
    level() {
      const offset = this.bb.__offset(this.bb_pos, 12);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    }
    ballId() {
      const offset = this.bb.__offset(this.bb_pos, 14);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* NONE */;
    }
    wazaType() {
      const offset = this.bb.__offset(this.bb_pos, 16);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* DEFAULT */;
    }
    waza1(obj) {
      const offset = this.bb.__offset(this.bb_pos, 18);
      return offset ? (obj || new WazaSet()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    waza2(obj) {
      const offset = this.bb.__offset(this.bb_pos, 20);
      return offset ? (obj || new WazaSet()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    waza3(obj) {
      const offset = this.bb.__offset(this.bb_pos, 22);
      return offset ? (obj || new WazaSet()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    waza4(obj) {
      const offset = this.bb.__offset(this.bb_pos, 24);
      return offset ? (obj || new WazaSet()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    gemType() {
      const offset = this.bb.__offset(this.bb_pos, 26);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* DEFAULT */;
    }
    seikaku() {
      const offset = this.bb.__offset(this.bb_pos, 28);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* DEFAULT */;
    }
    tokusei() {
      const offset = this.bb.__offset(this.bb_pos, 30);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* RANDOM_12 */;
    }
    talentType() {
      const offset = this.bb.__offset(this.bb_pos, 32);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* RANDOM */;
    }
    talentValue(obj) {
      const offset = this.bb.__offset(this.bb_pos, 34);
      return offset ? (obj || new ParamSet()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    talentVnum() {
      const offset = this.bb.__offset(this.bb_pos, 36);
      return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
    }
    effortValue(obj) {
      const offset = this.bb.__offset(this.bb_pos, 38);
      return offset ? (obj || new ParamSet()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    rareType() {
      const offset = this.bb.__offset(this.bb_pos, 40);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* DEFAULT */;
    }
    scaleType() {
      const offset = this.bb.__offset(this.bb_pos, 42);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* RANDOM */;
    }
    scaleValue() {
      const offset = this.bb.__offset(this.bb_pos, 44);
      return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
    }
    static startPokeDataBattle(builder) {
      builder.startObject(21);
    }
    static addDevId(builder, devId) {
      builder.addFieldInt16(0, devId, 0 /* DEV_NULL */);
    }
    static addFormId(builder, formId) {
      builder.addFieldInt16(1, formId, 0);
    }
    static addSex(builder, sex) {
      builder.addFieldInt32(2, sex, 0 /* DEFAULT */);
    }
    static addItem(builder, item) {
      builder.addFieldInt32(3, item, 0 /* ITEMID_NONE */);
    }
    static addLevel(builder, level) {
      builder.addFieldInt32(4, level, 0);
    }
    static addBallId(builder, ballId) {
      builder.addFieldInt32(5, ballId, 0 /* NONE */);
    }
    static addWazaType(builder, wazaType) {
      builder.addFieldInt32(6, wazaType, 0 /* DEFAULT */);
    }
    static addWaza1(builder, waza1Offset) {
      builder.addFieldOffset(7, waza1Offset, 0);
    }
    static addWaza2(builder, waza2Offset) {
      builder.addFieldOffset(8, waza2Offset, 0);
    }
    static addWaza3(builder, waza3Offset) {
      builder.addFieldOffset(9, waza3Offset, 0);
    }
    static addWaza4(builder, waza4Offset) {
      builder.addFieldOffset(10, waza4Offset, 0);
    }
    static addGemType(builder, gemType) {
      builder.addFieldInt32(11, gemType, 0 /* DEFAULT */);
    }
    static addSeikaku(builder, seikaku) {
      builder.addFieldInt32(12, seikaku, 0 /* DEFAULT */);
    }
    static addTokusei(builder, tokusei) {
      builder.addFieldInt32(13, tokusei, 0 /* RANDOM_12 */);
    }
    static addTalentType(builder, talentType) {
      builder.addFieldInt32(14, talentType, 0 /* RANDOM */);
    }
    static addTalentValue(builder, talentValueOffset) {
      builder.addFieldOffset(15, talentValueOffset, 0);
    }
    static addTalentVnum(builder, talentVnum) {
      builder.addFieldInt8(16, talentVnum, 0);
    }
    static addEffortValue(builder, effortValueOffset) {
      builder.addFieldOffset(17, effortValueOffset, 0);
    }
    static addRareType(builder, rareType) {
      builder.addFieldInt32(18, rareType, 0 /* DEFAULT */);
    }
    static addScaleType(builder, scaleType) {
      builder.addFieldInt32(19, scaleType, 0 /* RANDOM */);
    }
    static addScaleValue(builder, scaleValue) {
      builder.addFieldInt16(20, scaleValue, 0);
    }
    static endPokeDataBattle(builder) {
      const offset = builder.endObject();
      return offset;
    }
    unpack() {
      return new PokeDataBattleT(
        this.devId(),
        this.formId(),
        this.sex(),
        this.item(),
        this.level(),
        this.ballId(),
        this.wazaType(),
        this.waza1() !== null ? this.waza1().unpack() : null,
        this.waza2() !== null ? this.waza2().unpack() : null,
        this.waza3() !== null ? this.waza3().unpack() : null,
        this.waza4() !== null ? this.waza4().unpack() : null,
        this.gemType(),
        this.seikaku(),
        this.tokusei(),
        this.talentType(),
        this.talentValue() !== null ? this.talentValue().unpack() : null,
        this.talentVnum(),
        this.effortValue() !== null ? this.effortValue().unpack() : null,
        this.rareType(),
        this.scaleType(),
        this.scaleValue()
      );
    }
    unpackTo(_o) {
      _o.devId = this.devId();
      _o.formId = this.formId();
      _o.sex = this.sex();
      _o.item = this.item();
      _o.level = this.level();
      _o.ballId = this.ballId();
      _o.wazaType = this.wazaType();
      _o.waza1 = this.waza1() !== null ? this.waza1().unpack() : null;
      _o.waza2 = this.waza2() !== null ? this.waza2().unpack() : null;
      _o.waza3 = this.waza3() !== null ? this.waza3().unpack() : null;
      _o.waza4 = this.waza4() !== null ? this.waza4().unpack() : null;
      _o.gemType = this.gemType();
      _o.seikaku = this.seikaku();
      _o.tokusei = this.tokusei();
      _o.talentType = this.talentType();
      _o.talentValue = this.talentValue() !== null ? this.talentValue().unpack() : null;
      _o.talentVnum = this.talentVnum();
      _o.effortValue = this.effortValue() !== null ? this.effortValue().unpack() : null;
      _o.rareType = this.rareType();
      _o.scaleType = this.scaleType();
      _o.scaleValue = this.scaleValue();
    }
  };
  var PokeDataBattleT = class {
    constructor(devId = 0 /* DEV_NULL */, formId = 0, sex = 0 /* DEFAULT */, item = 0 /* ITEMID_NONE */, level = 0, ballId = 0 /* NONE */, wazaType = 0 /* DEFAULT */, waza1 = null, waza2 = null, waza3 = null, waza4 = null, gemType = 0 /* DEFAULT */, seikaku = 0 /* DEFAULT */, tokusei = 0 /* RANDOM_12 */, talentType = 0 /* RANDOM */, talentValue = null, talentVnum = 0, effortValue = null, rareType = 0 /* DEFAULT */, scaleType = 0 /* RANDOM */, scaleValue = 0) {
      __publicField(this, "devId", devId);
      __publicField(this, "formId", formId);
      __publicField(this, "sex", sex);
      __publicField(this, "item", item);
      __publicField(this, "level", level);
      __publicField(this, "ballId", ballId);
      __publicField(this, "wazaType", wazaType);
      __publicField(this, "waza1", waza1);
      __publicField(this, "waza2", waza2);
      __publicField(this, "waza3", waza3);
      __publicField(this, "waza4", waza4);
      __publicField(this, "gemType", gemType);
      __publicField(this, "seikaku", seikaku);
      __publicField(this, "tokusei", tokusei);
      __publicField(this, "talentType", talentType);
      __publicField(this, "talentValue", talentValue);
      __publicField(this, "talentVnum", talentVnum);
      __publicField(this, "effortValue", effortValue);
      __publicField(this, "rareType", rareType);
      __publicField(this, "scaleType", scaleType);
      __publicField(this, "scaleValue", scaleValue);
    }
    pack(builder) {
      const waza1 = this.waza1 !== null ? this.waza1.pack(builder) : 0;
      const waza2 = this.waza2 !== null ? this.waza2.pack(builder) : 0;
      const waza3 = this.waza3 !== null ? this.waza3.pack(builder) : 0;
      const waza4 = this.waza4 !== null ? this.waza4.pack(builder) : 0;
      const talentValue = this.talentValue !== null ? this.talentValue.pack(builder) : 0;
      const effortValue = this.effortValue !== null ? this.effortValue.pack(builder) : 0;
      PokeDataBattle.startPokeDataBattle(builder);
      PokeDataBattle.addDevId(builder, this.devId);
      PokeDataBattle.addFormId(builder, this.formId);
      PokeDataBattle.addSex(builder, this.sex);
      PokeDataBattle.addItem(builder, this.item);
      PokeDataBattle.addLevel(builder, this.level);
      PokeDataBattle.addBallId(builder, this.ballId);
      PokeDataBattle.addWazaType(builder, this.wazaType);
      PokeDataBattle.addWaza1(builder, waza1);
      PokeDataBattle.addWaza2(builder, waza2);
      PokeDataBattle.addWaza3(builder, waza3);
      PokeDataBattle.addWaza4(builder, waza4);
      PokeDataBattle.addGemType(builder, this.gemType);
      PokeDataBattle.addSeikaku(builder, this.seikaku);
      PokeDataBattle.addTokusei(builder, this.tokusei);
      PokeDataBattle.addTalentType(builder, this.talentType);
      PokeDataBattle.addTalentValue(builder, talentValue);
      PokeDataBattle.addTalentVnum(builder, this.talentVnum);
      PokeDataBattle.addEffortValue(builder, effortValue);
      PokeDataBattle.addRareType(builder, this.rareType);
      PokeDataBattle.addScaleType(builder, this.scaleType);
      PokeDataBattle.addScaleValue(builder, this.scaleValue);
      return PokeDataBattle.endPokeDataBattle(builder);
    }
  };

  // tmp_sv_schema/trainer/battle-type.ts
  var BattleType = /* @__PURE__ */ ((BattleType2) => {
    BattleType2[BattleType2["_1vs1"] = 0] = "_1vs1";
    BattleType2[BattleType2["_2vs2"] = 1] = "_2vs2";
    return BattleType2;
  })(BattleType || {});

  // tmp_sv_schema/trainer/data-type.ts
  var DataType = /* @__PURE__ */ ((DataType2) => {
    DataType2[DataType2["NORMAL"] = 0] = "NORMAL";
    DataType2[DataType2["ITEM"] = 1] = "ITEM";
    DataType2[DataType2["WAZA"] = 2] = "WAZA";
    DataType2[DataType2["MULTI"] = 3] = "MULTI";
    return DataType2;
  })(DataType || {});

  // tmp_sv_schema/trainer/trdata-main.ts
  var TrdataMain = class _TrdataMain {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    static getRootAsTrdataMain(bb, obj) {
      return (obj || new _TrdataMain()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsTrdataMain(bb, obj) {
      bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
      return (obj || new _TrdataMain()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    trid(optionalEncoding) {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    trNameLabel(optionalEncoding) {
      const offset = this.bb.__offset(this.bb_pos, 6);
      return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    trainerType(optionalEncoding) {
      const offset = this.bb.__offset(this.bb_pos, 8);
      return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    isStrong() {
      const offset = this.bb.__offset(this.bb_pos, 10);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    battleType() {
      const offset = this.bb.__offset(this.bb_pos, 12);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* _1vs1 */;
    }
    dataType() {
      const offset = this.bb.__offset(this.bb_pos, 14);
      return offset ? this.bb.readInt32(this.bb_pos + offset) : 0 /* NORMAL */;
    }
    moneyRate() {
      const offset = this.bb.__offset(this.bb_pos, 16);
      return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
    }
    changeGem() {
      const offset = this.bb.__offset(this.bb_pos, 18);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    poke1(obj) {
      const offset = this.bb.__offset(this.bb_pos, 20);
      return offset ? (obj || new PokeDataBattle()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    poke2(obj) {
      const offset = this.bb.__offset(this.bb_pos, 22);
      return offset ? (obj || new PokeDataBattle()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    poke3(obj) {
      const offset = this.bb.__offset(this.bb_pos, 24);
      return offset ? (obj || new PokeDataBattle()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    poke4(obj) {
      const offset = this.bb.__offset(this.bb_pos, 26);
      return offset ? (obj || new PokeDataBattle()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    poke5(obj) {
      const offset = this.bb.__offset(this.bb_pos, 28);
      return offset ? (obj || new PokeDataBattle()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    poke6(obj) {
      const offset = this.bb.__offset(this.bb_pos, 30);
      return offset ? (obj || new PokeDataBattle()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    aiBasic() {
      const offset = this.bb.__offset(this.bb_pos, 32);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    aiHigh() {
      const offset = this.bb.__offset(this.bb_pos, 34);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    aiExpert() {
      const offset = this.bb.__offset(this.bb_pos, 36);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    aiDouble() {
      const offset = this.bb.__offset(this.bb_pos, 38);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    aiRaid() {
      const offset = this.bb.__offset(this.bb_pos, 40);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    aiWeak() {
      const offset = this.bb.__offset(this.bb_pos, 42);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    aiItem() {
      const offset = this.bb.__offset(this.bb_pos, 44);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    aiChange() {
      const offset = this.bb.__offset(this.bb_pos, 46);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    popupLabelNormal1(optionalEncoding) {
      const offset = this.bb.__offset(this.bb_pos, 48);
      return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    popupLabelNormal2(optionalEncoding) {
      const offset = this.bb.__offset(this.bb_pos, 50);
      return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    popupLabelPinch1(optionalEncoding) {
      const offset = this.bb.__offset(this.bb_pos, 52);
      return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    popupLabelPinch2(optionalEncoding) {
      const offset = this.bb.__offset(this.bb_pos, 54);
      return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    static startTrdataMain(builder) {
      builder.startObject(26);
    }
    static addTrid(builder, tridOffset) {
      builder.addFieldOffset(0, tridOffset, 0);
    }
    static addTrNameLabel(builder, trNameLabelOffset) {
      builder.addFieldOffset(1, trNameLabelOffset, 0);
    }
    static addTrainerType(builder, trainerTypeOffset) {
      builder.addFieldOffset(2, trainerTypeOffset, 0);
    }
    static addIsStrong(builder, isStrong) {
      builder.addFieldInt8(3, +isStrong, 0);
    }
    static addBattleType(builder, battleType) {
      builder.addFieldInt32(4, battleType, 0 /* _1vs1 */);
    }
    static addDataType(builder, dataType) {
      builder.addFieldInt32(5, dataType, 0 /* NORMAL */);
    }
    static addMoneyRate(builder, moneyRate) {
      builder.addFieldInt8(6, moneyRate, 0);
    }
    static addChangeGem(builder, changeGem) {
      builder.addFieldInt8(7, +changeGem, 0);
    }
    static addPoke1(builder, poke1Offset) {
      builder.addFieldOffset(8, poke1Offset, 0);
    }
    static addPoke2(builder, poke2Offset) {
      builder.addFieldOffset(9, poke2Offset, 0);
    }
    static addPoke3(builder, poke3Offset) {
      builder.addFieldOffset(10, poke3Offset, 0);
    }
    static addPoke4(builder, poke4Offset) {
      builder.addFieldOffset(11, poke4Offset, 0);
    }
    static addPoke5(builder, poke5Offset) {
      builder.addFieldOffset(12, poke5Offset, 0);
    }
    static addPoke6(builder, poke6Offset) {
      builder.addFieldOffset(13, poke6Offset, 0);
    }
    static addAiBasic(builder, aiBasic) {
      builder.addFieldInt8(14, +aiBasic, 0);
    }
    static addAiHigh(builder, aiHigh) {
      builder.addFieldInt8(15, +aiHigh, 0);
    }
    static addAiExpert(builder, aiExpert) {
      builder.addFieldInt8(16, +aiExpert, 0);
    }
    static addAiDouble(builder, aiDouble) {
      builder.addFieldInt8(17, +aiDouble, 0);
    }
    static addAiRaid(builder, aiRaid) {
      builder.addFieldInt8(18, +aiRaid, 0);
    }
    static addAiWeak(builder, aiWeak) {
      builder.addFieldInt8(19, +aiWeak, 0);
    }
    static addAiItem(builder, aiItem) {
      builder.addFieldInt8(20, +aiItem, 0);
    }
    static addAiChange(builder, aiChange) {
      builder.addFieldInt8(21, +aiChange, 0);
    }
    static addPopupLabelNormal1(builder, popupLabelNormal1Offset) {
      builder.addFieldOffset(22, popupLabelNormal1Offset, 0);
    }
    static addPopupLabelNormal2(builder, popupLabelNormal2Offset) {
      builder.addFieldOffset(23, popupLabelNormal2Offset, 0);
    }
    static addPopupLabelPinch1(builder, popupLabelPinch1Offset) {
      builder.addFieldOffset(24, popupLabelPinch1Offset, 0);
    }
    static addPopupLabelPinch2(builder, popupLabelPinch2Offset) {
      builder.addFieldOffset(25, popupLabelPinch2Offset, 0);
    }
    static endTrdataMain(builder) {
      const offset = builder.endObject();
      return offset;
    }
    unpack() {
      return new TrdataMainT(
        this.trid(),
        this.trNameLabel(),
        this.trainerType(),
        this.isStrong(),
        this.battleType(),
        this.dataType(),
        this.moneyRate(),
        this.changeGem(),
        this.poke1() !== null ? this.poke1().unpack() : null,
        this.poke2() !== null ? this.poke2().unpack() : null,
        this.poke3() !== null ? this.poke3().unpack() : null,
        this.poke4() !== null ? this.poke4().unpack() : null,
        this.poke5() !== null ? this.poke5().unpack() : null,
        this.poke6() !== null ? this.poke6().unpack() : null,
        this.aiBasic(),
        this.aiHigh(),
        this.aiExpert(),
        this.aiDouble(),
        this.aiRaid(),
        this.aiWeak(),
        this.aiItem(),
        this.aiChange(),
        this.popupLabelNormal1(),
        this.popupLabelNormal2(),
        this.popupLabelPinch1(),
        this.popupLabelPinch2()
      );
    }
    unpackTo(_o) {
      _o.trid = this.trid();
      _o.trNameLabel = this.trNameLabel();
      _o.trainerType = this.trainerType();
      _o.isStrong = this.isStrong();
      _o.battleType = this.battleType();
      _o.dataType = this.dataType();
      _o.moneyRate = this.moneyRate();
      _o.changeGem = this.changeGem();
      _o.poke1 = this.poke1() !== null ? this.poke1().unpack() : null;
      _o.poke2 = this.poke2() !== null ? this.poke2().unpack() : null;
      _o.poke3 = this.poke3() !== null ? this.poke3().unpack() : null;
      _o.poke4 = this.poke4() !== null ? this.poke4().unpack() : null;
      _o.poke5 = this.poke5() !== null ? this.poke5().unpack() : null;
      _o.poke6 = this.poke6() !== null ? this.poke6().unpack() : null;
      _o.aiBasic = this.aiBasic();
      _o.aiHigh = this.aiHigh();
      _o.aiExpert = this.aiExpert();
      _o.aiDouble = this.aiDouble();
      _o.aiRaid = this.aiRaid();
      _o.aiWeak = this.aiWeak();
      _o.aiItem = this.aiItem();
      _o.aiChange = this.aiChange();
      _o.popupLabelNormal1 = this.popupLabelNormal1();
      _o.popupLabelNormal2 = this.popupLabelNormal2();
      _o.popupLabelPinch1 = this.popupLabelPinch1();
      _o.popupLabelPinch2 = this.popupLabelPinch2();
    }
  };
  var TrdataMainT = class {
    constructor(trid = null, trNameLabel = null, trainerType = null, isStrong = false, battleType = 0 /* _1vs1 */, dataType = 0 /* NORMAL */, moneyRate = 0, changeGem = false, poke1 = null, poke2 = null, poke3 = null, poke4 = null, poke5 = null, poke6 = null, aiBasic = false, aiHigh = false, aiExpert = false, aiDouble = false, aiRaid = false, aiWeak = false, aiItem = false, aiChange = false, popupLabelNormal1 = null, popupLabelNormal2 = null, popupLabelPinch1 = null, popupLabelPinch2 = null) {
      __publicField(this, "trid", trid);
      __publicField(this, "trNameLabel", trNameLabel);
      __publicField(this, "trainerType", trainerType);
      __publicField(this, "isStrong", isStrong);
      __publicField(this, "battleType", battleType);
      __publicField(this, "dataType", dataType);
      __publicField(this, "moneyRate", moneyRate);
      __publicField(this, "changeGem", changeGem);
      __publicField(this, "poke1", poke1);
      __publicField(this, "poke2", poke2);
      __publicField(this, "poke3", poke3);
      __publicField(this, "poke4", poke4);
      __publicField(this, "poke5", poke5);
      __publicField(this, "poke6", poke6);
      __publicField(this, "aiBasic", aiBasic);
      __publicField(this, "aiHigh", aiHigh);
      __publicField(this, "aiExpert", aiExpert);
      __publicField(this, "aiDouble", aiDouble);
      __publicField(this, "aiRaid", aiRaid);
      __publicField(this, "aiWeak", aiWeak);
      __publicField(this, "aiItem", aiItem);
      __publicField(this, "aiChange", aiChange);
      __publicField(this, "popupLabelNormal1", popupLabelNormal1);
      __publicField(this, "popupLabelNormal2", popupLabelNormal2);
      __publicField(this, "popupLabelPinch1", popupLabelPinch1);
      __publicField(this, "popupLabelPinch2", popupLabelPinch2);
    }
    pack(builder) {
      const trid = this.trid !== null ? builder.createString(this.trid) : 0;
      const trNameLabel = this.trNameLabel !== null ? builder.createString(this.trNameLabel) : 0;
      const trainerType = this.trainerType !== null ? builder.createString(this.trainerType) : 0;
      const poke1 = this.poke1 !== null ? this.poke1.pack(builder) : 0;
      const poke2 = this.poke2 !== null ? this.poke2.pack(builder) : 0;
      const poke3 = this.poke3 !== null ? this.poke3.pack(builder) : 0;
      const poke4 = this.poke4 !== null ? this.poke4.pack(builder) : 0;
      const poke5 = this.poke5 !== null ? this.poke5.pack(builder) : 0;
      const poke6 = this.poke6 !== null ? this.poke6.pack(builder) : 0;
      const popupLabelNormal1 = this.popupLabelNormal1 !== null ? builder.createString(this.popupLabelNormal1) : 0;
      const popupLabelNormal2 = this.popupLabelNormal2 !== null ? builder.createString(this.popupLabelNormal2) : 0;
      const popupLabelPinch1 = this.popupLabelPinch1 !== null ? builder.createString(this.popupLabelPinch1) : 0;
      const popupLabelPinch2 = this.popupLabelPinch2 !== null ? builder.createString(this.popupLabelPinch2) : 0;
      TrdataMain.startTrdataMain(builder);
      TrdataMain.addTrid(builder, trid);
      TrdataMain.addTrNameLabel(builder, trNameLabel);
      TrdataMain.addTrainerType(builder, trainerType);
      TrdataMain.addIsStrong(builder, this.isStrong);
      TrdataMain.addBattleType(builder, this.battleType);
      TrdataMain.addDataType(builder, this.dataType);
      TrdataMain.addMoneyRate(builder, this.moneyRate);
      TrdataMain.addChangeGem(builder, this.changeGem);
      TrdataMain.addPoke1(builder, poke1);
      TrdataMain.addPoke2(builder, poke2);
      TrdataMain.addPoke3(builder, poke3);
      TrdataMain.addPoke4(builder, poke4);
      TrdataMain.addPoke5(builder, poke5);
      TrdataMain.addPoke6(builder, poke6);
      TrdataMain.addAiBasic(builder, this.aiBasic);
      TrdataMain.addAiHigh(builder, this.aiHigh);
      TrdataMain.addAiExpert(builder, this.aiExpert);
      TrdataMain.addAiDouble(builder, this.aiDouble);
      TrdataMain.addAiRaid(builder, this.aiRaid);
      TrdataMain.addAiWeak(builder, this.aiWeak);
      TrdataMain.addAiItem(builder, this.aiItem);
      TrdataMain.addAiChange(builder, this.aiChange);
      TrdataMain.addPopupLabelNormal1(builder, popupLabelNormal1);
      TrdataMain.addPopupLabelNormal2(builder, popupLabelNormal2);
      TrdataMain.addPopupLabelPinch1(builder, popupLabelPinch1);
      TrdataMain.addPopupLabelPinch2(builder, popupLabelPinch2);
      return TrdataMain.endTrdataMain(builder);
    }
  };

  // tmp_sv_schema/trainer/trdata-main-array.ts
  var TrdataMainArray = class _TrdataMainArray {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    static getRootAsTrdataMainArray(bb, obj) {
      return (obj || new _TrdataMainArray()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsTrdataMainArray(bb, obj) {
      bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
      return (obj || new _TrdataMainArray()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    values(index, obj) {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? (obj || new TrdataMain()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    valuesLength() {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startTrdataMainArray(builder) {
      builder.startObject(1);
    }
    static addValues(builder, valuesOffset) {
      builder.addFieldOffset(0, valuesOffset, 0);
    }
    static createValuesVector(builder, data) {
      builder.startVector(4, data.length, 4);
      for (let i = data.length - 1; i >= 0; i--) {
        builder.addOffset(data[i]);
      }
      return builder.endVector();
    }
    static startValuesVector(builder, numElems) {
      builder.startVector(4, numElems, 4);
    }
    static endTrdataMainArray(builder) {
      const offset = builder.endObject();
      return offset;
    }
    static finishTrdataMainArrayBuffer(builder, offset) {
      builder.finish(offset);
    }
    static finishSizePrefixedTrdataMainArrayBuffer(builder, offset) {
      builder.finish(offset, void 0, true);
    }
    static createTrdataMainArray(builder, valuesOffset) {
      _TrdataMainArray.startTrdataMainArray(builder);
      _TrdataMainArray.addValues(builder, valuesOffset);
      return _TrdataMainArray.endTrdataMainArray(builder);
    }
    unpack() {
      return new TrdataMainArrayT(
        this.bb.createObjList(this.values.bind(this), this.valuesLength())
      );
    }
    unpackTo(_o) {
      _o.values = this.bb.createObjList(this.values.bind(this), this.valuesLength());
    }
  };
  var TrdataMainArrayT = class {
    constructor(values = []) {
      __publicField(this, "values", values);
    }
    pack(builder) {
      const values = TrdataMainArray.createValuesVector(builder, builder.createObjectOffsetList(this.values));
      return TrdataMainArray.createTrdataMainArray(
        builder,
        values
      );
    }
  };

  // tmp_sv_schema_personal/dex-data.ts
  var DexData = class {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    index() {
      return this.bb.readUint16(this.bb_pos);
    }
    group() {
      return this.bb.readUint8(this.bb_pos + 2);
    }
    static sizeOf() {
      return 4;
    }
    static createDexData(builder, index, group) {
      builder.prep(2, 4);
      builder.pad(1);
      builder.writeInt8(group);
      builder.writeInt16(index);
      return builder.offset();
    }
    unpack() {
      return new DexDataT(
        this.index(),
        this.group()
      );
    }
    unpackTo(_o) {
      _o.index = this.index();
      _o.group = this.group();
    }
  };
  var DexDataT = class {
    constructor(index = 0, group = 0) {
      __publicField(this, "index", index);
      __publicField(this, "group", group);
    }
    pack(builder) {
      return DexData.createDexData(
        builder,
        this.index,
        this.group
      );
    }
  };

  // tmp_sv_schema_personal/egg-hatch-info.ts
  var EggHatchInfo = class {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    species() {
      return this.bb.readUint16(this.bb_pos);
    }
    form() {
      return this.bb.readUint16(this.bb_pos + 2);
    }
    formFlags() {
      return this.bb.readUint16(this.bb_pos + 4);
    }
    formEverstone() {
      return this.bb.readUint16(this.bb_pos + 6);
    }
    static sizeOf() {
      return 8;
    }
    static createEggHatchInfo(builder, species, form, form_flags, form_everstone) {
      builder.prep(2, 8);
      builder.writeInt16(form_everstone);
      builder.writeInt16(form_flags);
      builder.writeInt16(form);
      builder.writeInt16(species);
      return builder.offset();
    }
    unpack() {
      return new EggHatchInfoT(
        this.species(),
        this.form(),
        this.formFlags(),
        this.formEverstone()
      );
    }
    unpackTo(_o) {
      _o.species = this.species();
      _o.form = this.form();
      _o.formFlags = this.formFlags();
      _o.formEverstone = this.formEverstone();
    }
  };
  var EggHatchInfoT = class {
    constructor(species = 0, form = 0, formFlags = 0, formEverstone = 0) {
      __publicField(this, "species", species);
      __publicField(this, "form", form);
      __publicField(this, "formFlags", formFlags);
      __publicField(this, "formEverstone", formEverstone);
    }
    pack(builder) {
      return EggHatchInfo.createEggHatchInfo(
        builder,
        this.species,
        this.form,
        this.formFlags,
        this.formEverstone
      );
    }
  };

  // tmp_sv_schema_personal/evo-data.ts
  var EvoData = class {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    level() {
      return this.bb.readUint16(this.bb_pos);
    }
    condition() {
      return this.bb.readUint16(this.bb_pos + 2);
    }
    parameter() {
      return this.bb.readUint16(this.bb_pos + 4);
    }
    reserved3() {
      return this.bb.readUint16(this.bb_pos + 6);
    }
    reserved4() {
      return this.bb.readUint16(this.bb_pos + 8);
    }
    reserved5() {
      return this.bb.readUint16(this.bb_pos + 10);
    }
    species() {
      return this.bb.readUint16(this.bb_pos + 12);
    }
    form() {
      return this.bb.readUint16(this.bb_pos + 14);
    }
    static sizeOf() {
      return 16;
    }
    static createEvoData(builder, level, condition, parameter, reserved3, reserved4, reserved5, species, form) {
      builder.prep(2, 16);
      builder.writeInt16(form);
      builder.writeInt16(species);
      builder.writeInt16(reserved5);
      builder.writeInt16(reserved4);
      builder.writeInt16(reserved3);
      builder.writeInt16(parameter);
      builder.writeInt16(condition);
      builder.writeInt16(level);
      return builder.offset();
    }
    unpack() {
      return new EvoDataT(
        this.level(),
        this.condition(),
        this.parameter(),
        this.reserved3(),
        this.reserved4(),
        this.reserved5(),
        this.species(),
        this.form()
      );
    }
    unpackTo(_o) {
      _o.level = this.level();
      _o.condition = this.condition();
      _o.parameter = this.parameter();
      _o.reserved3 = this.reserved3();
      _o.reserved4 = this.reserved4();
      _o.reserved5 = this.reserved5();
      _o.species = this.species();
      _o.form = this.form();
    }
  };
  var EvoDataT = class {
    constructor(level = 0, condition = 0, parameter = 0, reserved3 = 0, reserved4 = 0, reserved5 = 0, species = 0, form = 0) {
      __publicField(this, "level", level);
      __publicField(this, "condition", condition);
      __publicField(this, "parameter", parameter);
      __publicField(this, "reserved3", reserved3);
      __publicField(this, "reserved4", reserved4);
      __publicField(this, "reserved5", reserved5);
      __publicField(this, "species", species);
      __publicField(this, "form", form);
    }
    pack(builder) {
      return EvoData.createEvoData(
        builder,
        this.level,
        this.condition,
        this.parameter,
        this.reserved3,
        this.reserved4,
        this.reserved5,
        this.species,
        this.form
      );
    }
  };

  // tmp_sv_schema_personal/gender-info.ts
  var GenderInfo = class {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    group() {
      return this.bb.readUint8(this.bb_pos);
    }
    ratio() {
      return this.bb.readUint8(this.bb_pos + 1);
    }
    static sizeOf() {
      return 2;
    }
    static createGenderInfo(builder, group, ratio) {
      builder.prep(1, 2);
      builder.writeInt8(ratio);
      builder.writeInt8(group);
      return builder.offset();
    }
    unpack() {
      return new GenderInfoT(
        this.group(),
        this.ratio()
      );
    }
    unpackTo(_o) {
      _o.group = this.group();
      _o.ratio = this.ratio();
    }
  };
  var GenderInfoT = class {
    constructor(group = 0, ratio = 0) {
      __publicField(this, "group", group);
      __publicField(this, "ratio", ratio);
    }
    pack(builder) {
      return GenderInfo.createGenderInfo(
        builder,
        this.group,
        this.ratio
      );
    }
  };

  // tmp_sv_schema_personal/levelup-move-data.ts
  var LevelupMoveData = class {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    move() {
      return this.bb.readUint16(this.bb_pos);
    }
    level() {
      return this.bb.readUint16(this.bb_pos + 2);
    }
    static sizeOf() {
      return 4;
    }
    static createLevelupMoveData(builder, move, level) {
      builder.prep(2, 4);
      builder.writeInt16(level);
      builder.writeInt16(move);
      return builder.offset();
    }
    unpack() {
      return new LevelupMoveDataT(
        this.move(),
        this.level()
      );
    }
    unpackTo(_o) {
      _o.move = this.move();
      _o.level = this.level();
    }
  };
  var LevelupMoveDataT = class {
    constructor(move = 0, level = 0) {
      __publicField(this, "move", move);
      __publicField(this, "level", level);
    }
    pack(builder) {
      return LevelupMoveData.createLevelupMoveData(
        builder,
        this.move,
        this.level
      );
    }
  };

  // tmp_sv_schema_personal/species-info.ts
  var SpeciesInfo = class {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    species() {
      return this.bb.readUint16(this.bb_pos);
    }
    form() {
      return this.bb.readUint16(this.bb_pos + 2);
    }
    model() {
      return this.bb.readUint16(this.bb_pos + 4);
    }
    color() {
      return this.bb.readUint8(this.bb_pos + 6);
    }
    bodyType() {
      return this.bb.readUint8(this.bb_pos + 7);
    }
    height() {
      return this.bb.readUint16(this.bb_pos + 8);
    }
    weight() {
      return this.bb.readUint16(this.bb_pos + 10);
    }
    reserved() {
      return this.bb.readUint8(this.bb_pos + 12);
    }
    reserved1() {
      return this.bb.readUint8(this.bb_pos + 13);
    }
    reserved2() {
      return this.bb.readUint8(this.bb_pos + 14);
    }
    static sizeOf() {
      return 16;
    }
    static createSpeciesInfo(builder, species, form, model, color, body_type, height, weight, reserved, reserved1, reserved2) {
      builder.prep(2, 16);
      builder.pad(1);
      builder.writeInt8(reserved2);
      builder.writeInt8(reserved1);
      builder.writeInt8(reserved);
      builder.writeInt16(weight);
      builder.writeInt16(height);
      builder.writeInt8(body_type);
      builder.writeInt8(color);
      builder.writeInt16(model);
      builder.writeInt16(form);
      builder.writeInt16(species);
      return builder.offset();
    }
    unpack() {
      return new SpeciesInfoT(
        this.species(),
        this.form(),
        this.model(),
        this.color(),
        this.bodyType(),
        this.height(),
        this.weight(),
        this.reserved(),
        this.reserved1(),
        this.reserved2()
      );
    }
    unpackTo(_o) {
      _o.species = this.species();
      _o.form = this.form();
      _o.model = this.model();
      _o.color = this.color();
      _o.bodyType = this.bodyType();
      _o.height = this.height();
      _o.weight = this.weight();
      _o.reserved = this.reserved();
      _o.reserved1 = this.reserved1();
      _o.reserved2 = this.reserved2();
    }
  };
  var SpeciesInfoT = class {
    constructor(species = 0, form = 0, model = 0, color = 0, bodyType = 0, height = 0, weight = 0, reserved = 0, reserved1 = 0, reserved2 = 0) {
      __publicField(this, "species", species);
      __publicField(this, "form", form);
      __publicField(this, "model", model);
      __publicField(this, "color", color);
      __publicField(this, "bodyType", bodyType);
      __publicField(this, "height", height);
      __publicField(this, "weight", weight);
      __publicField(this, "reserved", reserved);
      __publicField(this, "reserved1", reserved1);
      __publicField(this, "reserved2", reserved2);
    }
    pack(builder) {
      return SpeciesInfo.createSpeciesInfo(
        builder,
        this.species,
        this.form,
        this.model,
        this.color,
        this.bodyType,
        this.height,
        this.weight,
        this.reserved,
        this.reserved1,
        this.reserved2
      );
    }
  };

  // tmp_sv_schema_personal/stat-info.ts
  var StatInfo = class {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    hp() {
      return this.bb.readUint8(this.bb_pos);
    }
    atk() {
      return this.bb.readUint8(this.bb_pos + 1);
    }
    def() {
      return this.bb.readUint8(this.bb_pos + 2);
    }
    spa() {
      return this.bb.readUint8(this.bb_pos + 3);
    }
    spd() {
      return this.bb.readUint8(this.bb_pos + 4);
    }
    spe() {
      return this.bb.readUint8(this.bb_pos + 5);
    }
    static sizeOf() {
      return 6;
    }
    static createStatInfo(builder, HP, ATK, DEF, SPA, SPD, SPE) {
      builder.prep(1, 6);
      builder.writeInt8(SPE);
      builder.writeInt8(SPD);
      builder.writeInt8(SPA);
      builder.writeInt8(DEF);
      builder.writeInt8(ATK);
      builder.writeInt8(HP);
      return builder.offset();
    }
    unpack() {
      return new StatInfoT(
        this.hp(),
        this.atk(),
        this.def(),
        this.spa(),
        this.spd(),
        this.spe()
      );
    }
    unpackTo(_o) {
      _o.hp = this.hp();
      _o.atk = this.atk();
      _o.def = this.def();
      _o.spa = this.spa();
      _o.spd = this.spd();
      _o.spe = this.spe();
    }
  };
  var StatInfoT = class {
    constructor(hp = 0, atk = 0, def = 0, spa = 0, spd = 0, spe = 0) {
      __publicField(this, "hp", hp);
      __publicField(this, "atk", atk);
      __publicField(this, "def", def);
      __publicField(this, "spa", spa);
      __publicField(this, "spd", spd);
      __publicField(this, "spe", spe);
    }
    pack(builder) {
      return StatInfo.createStatInfo(
        builder,
        this.hp,
        this.atk,
        this.def,
        this.spa,
        this.spd,
        this.spe
      );
    }
  };

  // tmp_sv_schema_personal/personal.ts
  var Personal = class _Personal {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    static getRootAsPersonal(bb, obj) {
      return (obj || new _Personal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsPersonal(bb, obj) {
      bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
      return (obj || new _Personal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    species(obj) {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? (obj || new SpeciesInfo()).__init(this.bb_pos + offset, this.bb) : null;
    }
    isPresent() {
      const offset = this.bb.__offset(this.bb_pos, 6);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    dex(obj) {
      const offset = this.bb.__offset(this.bb_pos, 8);
      return offset ? (obj || new DexData()).__init(this.bb_pos + offset, this.bb) : null;
    }
    type1() {
      const offset = this.bb.__offset(this.bb_pos, 10);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    type2() {
      const offset = this.bb.__offset(this.bb_pos, 12);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    ability1() {
      const offset = this.bb.__offset(this.bb_pos, 14);
      return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
    }
    ability2() {
      const offset = this.bb.__offset(this.bb_pos, 16);
      return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
    }
    ability3() {
      const offset = this.bb.__offset(this.bb_pos, 18);
      return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
    }
    xpGrowth() {
      const offset = this.bb.__offset(this.bb_pos, 20);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    catchRate() {
      const offset = this.bb.__offset(this.bb_pos, 22);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    gender(obj) {
      const offset = this.bb.__offset(this.bb_pos, 24);
      return offset ? (obj || new GenderInfo()).__init(this.bb_pos + offset, this.bb) : null;
    }
    eggGroup1() {
      const offset = this.bb.__offset(this.bb_pos, 26);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    eggGroup2() {
      const offset = this.bb.__offset(this.bb_pos, 28);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    eggHatch(obj) {
      const offset = this.bb.__offset(this.bb_pos, 30);
      return offset ? (obj || new EggHatchInfo()).__init(this.bb_pos + offset, this.bb) : null;
    }
    eggHatchSteps() {
      const offset = this.bb.__offset(this.bb_pos, 32);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    baseFriendship() {
      const offset = this.bb.__offset(this.bb_pos, 34);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    expAddend() {
      const offset = this.bb.__offset(this.bb_pos, 36);
      return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
    }
    evoStage() {
      const offset = this.bb.__offset(this.bb_pos, 38);
      return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    unkFlag() {
      const offset = this.bb.__offset(this.bb_pos, 40);
      return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    evYield(obj) {
      const offset = this.bb.__offset(this.bb_pos, 42);
      return offset ? (obj || new StatInfo()).__init(this.bb_pos + offset, this.bb) : null;
    }
    baseStats(obj) {
      const offset = this.bb.__offset(this.bb_pos, 44);
      return offset ? (obj || new StatInfo()).__init(this.bb_pos + offset, this.bb) : null;
    }
    evoData(index, obj) {
      const offset = this.bb.__offset(this.bb_pos, 46);
      return offset ? (obj || new EvoData()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
    }
    evoDataLength() {
      const offset = this.bb.__offset(this.bb_pos, 46);
      return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    tmMoves(index) {
      const offset = this.bb.__offset(this.bb_pos, 48);
      return offset ? this.bb.readUint16(this.bb.__vector(this.bb_pos + offset) + index * 2) : 0;
    }
    tmMovesLength() {
      const offset = this.bb.__offset(this.bb_pos, 48);
      return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    tmMovesArray() {
      const offset = this.bb.__offset(this.bb_pos, 48);
      return offset ? new Uint16Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    eggMoves(index) {
      const offset = this.bb.__offset(this.bb_pos, 50);
      return offset ? this.bb.readUint16(this.bb.__vector(this.bb_pos + offset) + index * 2) : 0;
    }
    eggMovesLength() {
      const offset = this.bb.__offset(this.bb_pos, 50);
      return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    eggMovesArray() {
      const offset = this.bb.__offset(this.bb_pos, 50);
      return offset ? new Uint16Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    reminderMoves(index) {
      const offset = this.bb.__offset(this.bb_pos, 52);
      return offset ? this.bb.readUint16(this.bb.__vector(this.bb_pos + offset) + index * 2) : 0;
    }
    reminderMovesLength() {
      const offset = this.bb.__offset(this.bb_pos, 52);
      return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    reminderMovesArray() {
      const offset = this.bb.__offset(this.bb_pos, 52);
      return offset ? new Uint16Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    levelupMoves(index, obj) {
      const offset = this.bb.__offset(this.bb_pos, 54);
      return offset ? (obj || new LevelupMoveData()).__init(this.bb.__vector(this.bb_pos + offset) + index * 4, this.bb) : null;
    }
    levelupMovesLength() {
      const offset = this.bb.__offset(this.bb_pos, 54);
      return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startPersonal(builder) {
      builder.startObject(26);
    }
    static addSpecies(builder, speciesOffset) {
      builder.addFieldStruct(0, speciesOffset, 0);
    }
    static addIsPresent(builder, isPresent) {
      builder.addFieldInt8(1, +isPresent, 0);
    }
    static addDex(builder, dexOffset) {
      builder.addFieldStruct(2, dexOffset, 0);
    }
    static addType1(builder, type1) {
      builder.addFieldInt8(3, type1, 0);
    }
    static addType2(builder, type2) {
      builder.addFieldInt8(4, type2, 0);
    }
    static addAbility1(builder, ability1) {
      builder.addFieldInt16(5, ability1, 0);
    }
    static addAbility2(builder, ability2) {
      builder.addFieldInt16(6, ability2, 0);
    }
    static addAbility3(builder, ability3) {
      builder.addFieldInt16(7, ability3, 0);
    }
    static addXpGrowth(builder, xpGrowth) {
      builder.addFieldInt8(8, xpGrowth, 0);
    }
    static addCatchRate(builder, catchRate) {
      builder.addFieldInt8(9, catchRate, 0);
    }
    static addGender(builder, genderOffset) {
      builder.addFieldStruct(10, genderOffset, 0);
    }
    static addEggGroup1(builder, eggGroup1) {
      builder.addFieldInt8(11, eggGroup1, 0);
    }
    static addEggGroup2(builder, eggGroup2) {
      builder.addFieldInt8(12, eggGroup2, 0);
    }
    static addEggHatch(builder, eggHatchOffset) {
      builder.addFieldStruct(13, eggHatchOffset, 0);
    }
    static addEggHatchSteps(builder, eggHatchSteps) {
      builder.addFieldInt8(14, eggHatchSteps, 0);
    }
    static addBaseFriendship(builder, baseFriendship) {
      builder.addFieldInt8(15, baseFriendship, 0);
    }
    static addExpAddend(builder, expAddend) {
      builder.addFieldInt16(16, expAddend, 0);
    }
    static addEvoStage(builder, evoStage) {
      builder.addFieldInt8(17, evoStage, 0);
    }
    static addUnkFlag(builder, unkFlag) {
      builder.addFieldInt8(18, +unkFlag, 0);
    }
    static addEvYield(builder, evYieldOffset) {
      builder.addFieldStruct(19, evYieldOffset, 0);
    }
    static addBaseStats(builder, baseStatsOffset) {
      builder.addFieldStruct(20, baseStatsOffset, 0);
    }
    static addEvoData(builder, evoDataOffset) {
      builder.addFieldOffset(21, evoDataOffset, 0);
    }
    static startEvoDataVector(builder, numElems) {
      builder.startVector(16, numElems, 2);
    }
    static addTmMoves(builder, tmMovesOffset) {
      builder.addFieldOffset(22, tmMovesOffset, 0);
    }
    static createTmMovesVector(builder, data) {
      builder.startVector(2, data.length, 2);
      for (let i = data.length - 1; i >= 0; i--) {
        builder.addInt16(data[i]);
      }
      return builder.endVector();
    }
    static startTmMovesVector(builder, numElems) {
      builder.startVector(2, numElems, 2);
    }
    static addEggMoves(builder, eggMovesOffset) {
      builder.addFieldOffset(23, eggMovesOffset, 0);
    }
    static createEggMovesVector(builder, data) {
      builder.startVector(2, data.length, 2);
      for (let i = data.length - 1; i >= 0; i--) {
        builder.addInt16(data[i]);
      }
      return builder.endVector();
    }
    static startEggMovesVector(builder, numElems) {
      builder.startVector(2, numElems, 2);
    }
    static addReminderMoves(builder, reminderMovesOffset) {
      builder.addFieldOffset(24, reminderMovesOffset, 0);
    }
    static createReminderMovesVector(builder, data) {
      builder.startVector(2, data.length, 2);
      for (let i = data.length - 1; i >= 0; i--) {
        builder.addInt16(data[i]);
      }
      return builder.endVector();
    }
    static startReminderMovesVector(builder, numElems) {
      builder.startVector(2, numElems, 2);
    }
    static addLevelupMoves(builder, levelupMovesOffset) {
      builder.addFieldOffset(25, levelupMovesOffset, 0);
    }
    static startLevelupMovesVector(builder, numElems) {
      builder.startVector(4, numElems, 2);
    }
    static endPersonal(builder) {
      const offset = builder.endObject();
      return offset;
    }
    unpack() {
      return new PersonalT(
        this.species() !== null ? this.species().unpack() : null,
        this.isPresent(),
        this.dex() !== null ? this.dex().unpack() : null,
        this.type1(),
        this.type2(),
        this.ability1(),
        this.ability2(),
        this.ability3(),
        this.xpGrowth(),
        this.catchRate(),
        this.gender() !== null ? this.gender().unpack() : null,
        this.eggGroup1(),
        this.eggGroup2(),
        this.eggHatch() !== null ? this.eggHatch().unpack() : null,
        this.eggHatchSteps(),
        this.baseFriendship(),
        this.expAddend(),
        this.evoStage(),
        this.unkFlag(),
        this.evYield() !== null ? this.evYield().unpack() : null,
        this.baseStats() !== null ? this.baseStats().unpack() : null,
        this.bb.createObjList(this.evoData.bind(this), this.evoDataLength()),
        this.bb.createScalarList(this.tmMoves.bind(this), this.tmMovesLength()),
        this.bb.createScalarList(this.eggMoves.bind(this), this.eggMovesLength()),
        this.bb.createScalarList(this.reminderMoves.bind(this), this.reminderMovesLength()),
        this.bb.createObjList(this.levelupMoves.bind(this), this.levelupMovesLength())
      );
    }
    unpackTo(_o) {
      _o.species = this.species() !== null ? this.species().unpack() : null;
      _o.isPresent = this.isPresent();
      _o.dex = this.dex() !== null ? this.dex().unpack() : null;
      _o.type1 = this.type1();
      _o.type2 = this.type2();
      _o.ability1 = this.ability1();
      _o.ability2 = this.ability2();
      _o.ability3 = this.ability3();
      _o.xpGrowth = this.xpGrowth();
      _o.catchRate = this.catchRate();
      _o.gender = this.gender() !== null ? this.gender().unpack() : null;
      _o.eggGroup1 = this.eggGroup1();
      _o.eggGroup2 = this.eggGroup2();
      _o.eggHatch = this.eggHatch() !== null ? this.eggHatch().unpack() : null;
      _o.eggHatchSteps = this.eggHatchSteps();
      _o.baseFriendship = this.baseFriendship();
      _o.expAddend = this.expAddend();
      _o.evoStage = this.evoStage();
      _o.unkFlag = this.unkFlag();
      _o.evYield = this.evYield() !== null ? this.evYield().unpack() : null;
      _o.baseStats = this.baseStats() !== null ? this.baseStats().unpack() : null;
      _o.evoData = this.bb.createObjList(this.evoData.bind(this), this.evoDataLength());
      _o.tmMoves = this.bb.createScalarList(this.tmMoves.bind(this), this.tmMovesLength());
      _o.eggMoves = this.bb.createScalarList(this.eggMoves.bind(this), this.eggMovesLength());
      _o.reminderMoves = this.bb.createScalarList(this.reminderMoves.bind(this), this.reminderMovesLength());
      _o.levelupMoves = this.bb.createObjList(this.levelupMoves.bind(this), this.levelupMovesLength());
    }
  };
  var PersonalT = class {
    constructor(species = null, isPresent = false, dex = null, type1 = 0, type2 = 0, ability1 = 0, ability2 = 0, ability3 = 0, xpGrowth = 0, catchRate = 0, gender = null, eggGroup1 = 0, eggGroup2 = 0, eggHatch = null, eggHatchSteps = 0, baseFriendship = 0, expAddend = 0, evoStage = 0, unkFlag = false, evYield = null, baseStats = null, evoData = [], tmMoves = [], eggMoves = [], reminderMoves = [], levelupMoves = []) {
      __publicField(this, "species", species);
      __publicField(this, "isPresent", isPresent);
      __publicField(this, "dex", dex);
      __publicField(this, "type1", type1);
      __publicField(this, "type2", type2);
      __publicField(this, "ability1", ability1);
      __publicField(this, "ability2", ability2);
      __publicField(this, "ability3", ability3);
      __publicField(this, "xpGrowth", xpGrowth);
      __publicField(this, "catchRate", catchRate);
      __publicField(this, "gender", gender);
      __publicField(this, "eggGroup1", eggGroup1);
      __publicField(this, "eggGroup2", eggGroup2);
      __publicField(this, "eggHatch", eggHatch);
      __publicField(this, "eggHatchSteps", eggHatchSteps);
      __publicField(this, "baseFriendship", baseFriendship);
      __publicField(this, "expAddend", expAddend);
      __publicField(this, "evoStage", evoStage);
      __publicField(this, "unkFlag", unkFlag);
      __publicField(this, "evYield", evYield);
      __publicField(this, "baseStats", baseStats);
      __publicField(this, "evoData", evoData);
      __publicField(this, "tmMoves", tmMoves);
      __publicField(this, "eggMoves", eggMoves);
      __publicField(this, "reminderMoves", reminderMoves);
      __publicField(this, "levelupMoves", levelupMoves);
    }
    pack(builder) {
      const evoData = builder.createStructOffsetList(this.evoData, Personal.startEvoDataVector);
      const tmMoves = Personal.createTmMovesVector(builder, this.tmMoves);
      const eggMoves = Personal.createEggMovesVector(builder, this.eggMoves);
      const reminderMoves = Personal.createReminderMovesVector(builder, this.reminderMoves);
      const levelupMoves = builder.createStructOffsetList(this.levelupMoves, Personal.startLevelupMovesVector);
      Personal.startPersonal(builder);
      Personal.addSpecies(builder, this.species !== null ? this.species.pack(builder) : 0);
      Personal.addIsPresent(builder, this.isPresent);
      Personal.addDex(builder, this.dex !== null ? this.dex.pack(builder) : 0);
      Personal.addType1(builder, this.type1);
      Personal.addType2(builder, this.type2);
      Personal.addAbility1(builder, this.ability1);
      Personal.addAbility2(builder, this.ability2);
      Personal.addAbility3(builder, this.ability3);
      Personal.addXpGrowth(builder, this.xpGrowth);
      Personal.addCatchRate(builder, this.catchRate);
      Personal.addGender(builder, this.gender !== null ? this.gender.pack(builder) : 0);
      Personal.addEggGroup1(builder, this.eggGroup1);
      Personal.addEggGroup2(builder, this.eggGroup2);
      Personal.addEggHatch(builder, this.eggHatch !== null ? this.eggHatch.pack(builder) : 0);
      Personal.addEggHatchSteps(builder, this.eggHatchSteps);
      Personal.addBaseFriendship(builder, this.baseFriendship);
      Personal.addExpAddend(builder, this.expAddend);
      Personal.addEvoStage(builder, this.evoStage);
      Personal.addUnkFlag(builder, this.unkFlag);
      Personal.addEvYield(builder, this.evYield !== null ? this.evYield.pack(builder) : 0);
      Personal.addBaseStats(builder, this.baseStats !== null ? this.baseStats.pack(builder) : 0);
      Personal.addEvoData(builder, evoData);
      Personal.addTmMoves(builder, tmMoves);
      Personal.addEggMoves(builder, eggMoves);
      Personal.addReminderMoves(builder, reminderMoves);
      Personal.addLevelupMoves(builder, levelupMoves);
      return Personal.endPersonal(builder);
    }
  };

  // tmp_sv_schema_personal/personal-table.ts
  var PersonalTable = class _PersonalTable {
    constructor() {
      __publicField(this, "bb", null);
      __publicField(this, "bb_pos", 0);
    }
    __init(i, bb) {
      this.bb_pos = i;
      this.bb = bb;
      return this;
    }
    static getRootAsPersonalTable(bb, obj) {
      return (obj || new _PersonalTable()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsPersonalTable(bb, obj) {
      bb.setPosition(bb.position() + SIZE_PREFIX_LENGTH);
      return (obj || new _PersonalTable()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    entry(index, obj) {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? (obj || new Personal()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    entryLength() {
      const offset = this.bb.__offset(this.bb_pos, 4);
      return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startPersonalTable(builder) {
      builder.startObject(1);
    }
    static addEntry(builder, entryOffset) {
      builder.addFieldOffset(0, entryOffset, 0);
    }
    static createEntryVector(builder, data) {
      builder.startVector(4, data.length, 4);
      for (let i = data.length - 1; i >= 0; i--) {
        builder.addOffset(data[i]);
      }
      return builder.endVector();
    }
    static startEntryVector(builder, numElems) {
      builder.startVector(4, numElems, 4);
    }
    static endPersonalTable(builder) {
      const offset = builder.endObject();
      return offset;
    }
    static finishPersonalTableBuffer(builder, offset) {
      builder.finish(offset);
    }
    static finishSizePrefixedPersonalTableBuffer(builder, offset) {
      builder.finish(offset, void 0, true);
    }
    static createPersonalTable(builder, entryOffset) {
      _PersonalTable.startPersonalTable(builder);
      _PersonalTable.addEntry(builder, entryOffset);
      return _PersonalTable.endPersonalTable(builder);
    }
    unpack() {
      return new PersonalTableT(
        this.bb.createObjList(this.entry.bind(this), this.entryLength())
      );
    }
    unpackTo(_o) {
      _o.entry = this.bb.createObjList(this.entry.bind(this), this.entryLength());
    }
  };
  var PersonalTableT = class {
    constructor(entry = []) {
      __publicField(this, "entry", entry);
    }
    pack(builder) {
      const entry = PersonalTable.createEntryVector(builder, builder.createObjectOffsetList(this.entry));
      return PersonalTable.createPersonalTable(
        builder,
        entry
      );
    }
  };

  // assets/js/parsers/sv-bin-parser.browser.ts
  function enumName(enumObj, value) {
    return String(enumObj[value] ?? value);
  }
  function toByteBuffer(input) {
    const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
    return new ByteBuffer(bytes);
  }
  function normalizeParamSet(param) {
    if (!param) {
      return { hp: 0, atk: 0, def: 0, spAtk: 0, spDef: 0, agi: 0 };
    }
    return {
      hp: Number(param.hp ?? 0),
      atk: Number(param.atk ?? 0),
      def: Number(param.def ?? 0),
      spAtk: Number(param.spAtk ?? 0),
      spDef: Number(param.spDef ?? 0),
      agi: Number(param.agi ?? 0)
    };
  }
  function normalizeBattleMon(mon) {
    if (!mon) {
      return {
        devId: "DEV_NULL",
        formId: 0,
        sex: "DEFAULT",
        item: "ITEMID_NONE",
        level: 0,
        ballId: "NONE",
        wazaType: "DEFAULT",
        waza1: { wazaId: "WAZA_NULL", pointUp: 0 },
        waza2: { wazaId: "WAZA_NULL", pointUp: 0 },
        waza3: { wazaId: "WAZA_NULL", pointUp: 0 },
        waza4: { wazaId: "WAZA_NULL", pointUp: 0 },
        gemType: "DEFAULT",
        seikaku: "DEFAULT",
        tokusei: "RANDOM_12",
        talentType: "RANDOM",
        talentValue: normalizeParamSet(null),
        talentVnum: 0,
        effortValue: normalizeParamSet(null),
        rareType: "NO_RARE",
        scaleType: "VALUE",
        scaleValue: 0
      };
    }
    const normalizeWazaSet = (waza) => ({
      wazaId: enumName(WazaID, Number(waza?.wazaId ?? 0)),
      pointUp: Number(waza?.pointUp ?? 0)
    });
    return {
      devId: enumName(DevID, Number(mon.devId ?? 0)),
      formId: Number(mon.formId ?? 0),
      sex: enumName(SexType, Number(mon.sex ?? 0)),
      item: enumName(ItemID, Number(mon.item ?? 0)),
      level: Number(mon.level ?? 0),
      ballId: enumName(BallType, Number(mon.ballId ?? 0)),
      wazaType: enumName(WazaType, Number(mon.wazaType ?? 0)),
      waza1: normalizeWazaSet(mon.waza1),
      waza2: normalizeWazaSet(mon.waza2),
      waza3: normalizeWazaSet(mon.waza3),
      waza4: normalizeWazaSet(mon.waza4),
      gemType: enumName(GemType, Number(mon.gemType ?? 0)),
      seikaku: enumName(SeikakuType, Number(mon.seikaku ?? 0)),
      tokusei: enumName(TokuseiType, Number(mon.tokusei ?? 0)),
      talentType: enumName(TalentType, Number(mon.talentType ?? 0)),
      talentValue: normalizeParamSet(mon.talentValue),
      talentVnum: Number(mon.talentVnum ?? 0),
      effortValue: normalizeParamSet(mon.effortValue),
      rareType: enumName(RareType, Number(mon.rareType ?? 0)),
      scaleType: enumName(SizeType, Number(mon.scaleType ?? 0)),
      scaleValue: Number(mon.scaleValue ?? 0)
    };
  }
  function parseTrainersBinary(input) {
    const root = TrdataMainArray.getRootAsTrdataMainArray(toByteBuffer(input));
    const values = [];
    for (let index = 0; index < root.valuesLength(); index += 1) {
      const entry = root.values(index)?.unpack();
      if (!entry) continue;
      values.push({
        trid: String(entry.trid ?? ""),
        trNameLabel: String(entry.trNameLabel ?? ""),
        trainerType: String(entry.trainerType ?? ""),
        isStrong: Boolean(entry.isStrong),
        battleType: enumName(BattleType, Number(entry.battleType ?? 0)),
        dataType: enumName(DataType, Number(entry.dataType ?? 0)),
        moneyRate: Number(entry.moneyRate ?? 0),
        changeGem: Boolean(entry.changeGem),
        poke1: normalizeBattleMon(entry.poke1),
        poke2: normalizeBattleMon(entry.poke2),
        poke3: normalizeBattleMon(entry.poke3),
        poke4: normalizeBattleMon(entry.poke4),
        poke5: normalizeBattleMon(entry.poke5),
        poke6: normalizeBattleMon(entry.poke6),
        aiBasic: Boolean(entry.aiBasic),
        aiHigh: Boolean(entry.aiHigh),
        aiExpert: Boolean(entry.aiExpert),
        aiDouble: Boolean(entry.aiDouble),
        aiRaid: Boolean(entry.aiRaid),
        aiWeak: Boolean(entry.aiWeak),
        aiItem: Boolean(entry.aiItem),
        aiChange: Boolean(entry.aiChange),
        popupLabelNormal1: String(entry.popupLabelNormal1 ?? ""),
        popupLabelNormal2: String(entry.popupLabelNormal2 ?? ""),
        popupLabelPinch1: String(entry.popupLabelPinch1 ?? ""),
        popupLabelPinch2: String(entry.popupLabelPinch2 ?? "")
      });
    }
    return { values };
  }
  function parsePersonalBinary(input) {
    const root = PersonalTable.getRootAsPersonalTable(toByteBuffer(input));
    const entry = [];
    for (let index = 0; index < root.entryLength(); index += 1) {
      const personal = root.entry(index)?.unpack();
      if (!personal) continue;
      entry.push({
        species: {
          species: Number(personal.species?.species ?? 0),
          form: Number(personal.species?.form ?? 0),
          model: Number(personal.species?.model ?? 0),
          color: Number(personal.species?.color ?? 0),
          bodyType: Number(personal.species?.bodyType ?? 0),
          height: Number(personal.species?.height ?? 0),
          weight: Number(personal.species?.weight ?? 0),
          reserved: Number(personal.species?.reserved ?? 0),
          reserved1: Number(personal.species?.reserved1 ?? 0),
          reserved2: Number(personal.species?.reserved2 ?? 0)
        },
        is_present: Boolean(personal.isPresent),
        type_1: Number(personal.type1 ?? 0),
        type_2: Number(personal.type2 ?? 0),
        ability_1: Number(personal.ability1 ?? 0),
        ability_2: Number(personal.ability2 ?? 0),
        ability_3: Number(personal.ability3 ?? 0),
        base_stats: {
          hp: Number(personal.baseStats?.hp ?? 0),
          atk: Number(personal.baseStats?.atk ?? 0),
          def: Number(personal.baseStats?.def ?? 0),
          spa: Number(personal.baseStats?.spAtk ?? 0),
          spd: Number(personal.baseStats?.spDef ?? 0),
          spe: Number(personal.baseStats?.spd ?? 0)
        },
        levelup_moves: Array.isArray(personal.levelupMoves) ? personal.levelupMoves.map((move) => ({
          move: Number(move?.move ?? 0),
          level: Number(move?.level ?? 0)
        })) : []
      });
    }
    return { entry };
  }
  return __toCommonJS(sv_bin_parser_browser_exports);
})();
