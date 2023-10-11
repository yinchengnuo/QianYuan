uni.addInterceptor({
	returnValue(res) {
		if (!(!!res && (typeof res === "object" || typeof res === "function") && typeof res.then ===
				"function")) {
			return res;
		}
		return new Promise((resolve, reject) => {
			res.then((res) => res[0] ? reject(res[0]) : resolve(res[1]));
		});
	},
});

uni.addInterceptor('request', {
	invoke(args) {
		args.url = 'https://fc-mp-f3138cb7-2a3b-4344-8e79-a1f65871aab2.next.bspapp.com/index' + args.url
	},
	success(args) {
		// console.log('interceptor-success', args)
	},
	fail(err) {
		// console.log('interceptor-fail', err)
	},
	complete(res) {
		// console.log('interceptor-complete', res)
	}
})