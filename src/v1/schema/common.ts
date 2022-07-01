import p from '@mumingpo/primate';

const dateCodec = p.primitive(
  (d: Date) => (d.toISOString()),
  (unk: unknown) => {
    const date = (typeof unk === 'number')
      ? new Date(unk)
      : new Date(`${unk}`);
    
    if (Number.isNaN(date.getTime())){
      throw new Error(`${dateCodec} cannot decode ${unk} of type ${typeof unk}`);
    }

    return date;
  }
);

export {
  dateCodec,
};
