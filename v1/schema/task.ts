import p, { strict, makeEnum } from '@mumingpo/primate';
import { dateCodec } from './common';

const allowedPriorityValues = [0, 1, 2, 3] as const;
const priorityCodec = makeEnum.makeEnumNumberCodec(allowedPriorityValues);

const taskCodec = p.object({
  id: strict.numberCodec,
  dueDate: dateCodec,
  priority: priorityCodec,
  title: strict.stringCodec,
  description: strict.stringCodec,
  createdAt: dateCodec,
  updatedAt: dateCodec,
});

const taskCreationCodec = p.object({
  dueDate: dateCodec,
  priority: priorityCodec,
  title: strict.stringCodec,
  description: strict.stringCodec,
});

const taskArrayCodec = p.array(taskCodec);

export {
  taskCodec,
  taskCreationCodec,
  taskArrayCodec,
};
