import p, { strict, makeEnum } from '@mumingpo/primate';
import { dateCodec } from './common';

const allowedPriorityValues = [0, 1, 2, 3] as const;

const taskCodec = p.object({
  dueDate: dateCodec,
  priority: makeEnum.makeEnumNumberCodec(allowedPriorityValues),
  title: strict.stringCodec,
  description: strict.stringCodec,
  createdAt: dateCodec,
  updatedAt: dateCodec,
});

const taskArrayCodec = p.array(taskCodec);

export {
  taskCodec,
  taskArrayCodec,
};
