import p from '@mumingpo/primate';
import b64arr from 'base64-arraybuffer';

const dateCodec = p.primitive(
  (d: Date) => (d.toISOString()),
  (unk: unknown) => {
    const date = (typeof unk === 'number')
      ? new Date(unk)
      : new Date(`${unk}`);

    if (Number.isNaN(date.getTime())) {
      throw new Error(`dateCodec cannot decode ${unk} of type ${typeof unk}`);
    }

    return date;
  },
);

const nullableDateCodec = p.primitive(
  (d: Date | null) => {
    if (d === null) {
      return null;
    }
    return d.toISOString();
  },
  (unk: unknown) => {
    if (unk === null) {
      return null;
    }
    const date = (typeof unk === 'number')
      ? new Date(unk)
      : new Date(`${unk}`);

    if (Number.isNaN(date.getTime())) {
      throw new Error(`nullableDateCodec cannot decode ${unk} of type ${typeof unk}`);
    }

    return date;
  },
);

// ONLY WORK IN NODE!
// BROWSER DOES NOT SUPPORT THE BUFFER DATATYPE!
const bufferToBase64Codec = p.primitive(
  (buf: Buffer) => {
    if (window) {
      throw new Error('bufferToBase64Codec does not work in browser!');
    }
    return buf.toString('base64');
  },
  (unk: unknown) => {
    if (window) {
      throw new Error('bufferToBase64Codec does not work in browser!');
    }
    if (typeof unk !== 'string') {
      throw new Error('bufferToBase64Codec can only deserialize strings!');
    }
    return Buffer.from(unk, 'base64');
  },
  'bufferToBase64Codec',
);

const arrayBufferToBase64Codec = p.primitive(
  (arr: ArrayBuffer) => b64arr.encode(arr),
  (unk: unknown) => {
    if (typeof unk !== 'string') {
      throw new Error('arrayBufferToStringCodec can only deserialize strings.');
    }
    return b64arr.decode(unk);
  },
);

export {
  dateCodec,
  nullableDateCodec,
  bufferToBase64Codec,
  arrayBufferToBase64Codec,
};
