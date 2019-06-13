var app = new Vue({
	el: '#sms',
	data: {
		message: '',
		memMsg: '',
		msgLength: null,
		smsLength: null,
		langStatusRu: true,
	},
	methods: {
		numOfSms() {
			if (this.langStatusRu) {
				if (this.message.length <= 70) {
					return this.smsLength = 1;
				} else {
					return this.smsLength = this.message.length / 67;
				};
			} else {
				if (this.message.length <= 160) {
					return this.smsLength = 1;
				} else {
					return this.smsLength = this.message.length / 153;
				};
			};
		},
		returnMsg() {
			this.langStatusRu = true;
			this.message = this.memMsg;
		},
		translitePls(message) {
			let abc = {
					'а': 'a',
					'б': 'b',
					'в': 'v',
					'г': 'g',
					'д': 'd',
					'е': 'e',
					'ё': 'e',
					'ж': 'j',
					'з': 'z',
					'и': 'i',
					'к': 'k',
					'л': 'l',
					'м': 'm',
					'н': 'n',
					'о': 'o',
					'п': 'p',
					'р': 'r',
					'с': 's',
					'т': 't',
					'у': 'u',
					'ф': 'f',
					'х': 'h',
					'ц': 'c',
					'ч': 'ch',
					'ш': 'sh',
					'щ': 'sch',
					'ы': 'y',
					'э': 'e',
					'ю': 'u',
					'я': 'ya'
				},
				trResult = [];
			this.memMsg = this.message;
			this.message = this.message.replace(/[ъь]+/g, '').replace(/й/g, 'i');
			for (let i = 0; i < this.message.length; ++i) {
				trResult.push(abc[this.message[i]] || abc[this.message[i].toLowerCase()] == undefined && this.message[i] || abc[this.message[i].toLowerCase()].replace(/^(.)/, function (match) {
					return match.toUpperCase()
				}));
			}
			this.langStatusRu = false;
			return this.message = trResult.join('');
		}
	}
});