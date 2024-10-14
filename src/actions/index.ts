import { onChat } from '@/actions/chat';
import { onPing } from '@/actions/ping';
import { onSubscribe } from '@/actions/subscribe';
import { onUnsubscribe } from '@/actions/unsubscribe';

export const actions = [onChat, onPing, onSubscribe, onUnsubscribe];
