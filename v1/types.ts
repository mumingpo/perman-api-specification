import type { InferInternal, InferPrimitive } from '@mumingpo/primate';

import { userCodec } from './schema/user';
import { profileCodec } from './schema/profile';
import { taskCodec } from './schema/task';

export type UserInternal = InferInternal<typeof userCodec>;
export type UserPrimitive = InferPrimitive<typeof userCodec>;
export type ProfileInternal = InferInternal<typeof profileCodec>;
export type ProfilePrimitive = InferPrimitive<typeof profileCodec>;
export type TaskInternal = InferInternal<typeof taskCodec>;
export type TaskPrimitive = InferPrimitive<typeof taskCodec>;
