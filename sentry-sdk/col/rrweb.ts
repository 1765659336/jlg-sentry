import * as rrweb from 'rrweb';

// events存储录屏信息
export const events: any[] = [];
// record 用于记录DOM中的所有变更
rrweb.record({
	emit(event, isCheckout) {
		// isCheckout 是一个标识，告诉你重新制作了快照
		console.log(isCheckout,'isCheckout',events);
		if (isCheckout) {
			events.length = 0;
		}
		events.push(event);	
	},
	packFn: rrweb.pack,
	recordCanvas: true, // 记录 canvas 内容
	checkoutEveryNms: 10 * 1000, // 每10s重新制作快照
	checkoutEveryNth: 200, // 每 200 个 event 重新制作快照
});
