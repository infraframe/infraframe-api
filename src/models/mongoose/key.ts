import { zodSchema } from '@zodyac/zod-mongoose';
import { model } from 'mongoose';
import { keySchema } from '@/models/zod/key';

const Key = zodSchema(keySchema);
export const keyModel = model('Key', Key);
