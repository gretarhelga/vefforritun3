new Vue({
	el: "#app",
	data: {
		decimal: "",
		binary: ""
	},
	computed: {
		decimalToBinary: function() {
			return this.decimal.from(10).to(2);
		}
	}
});
