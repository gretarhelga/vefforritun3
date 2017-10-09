Vue.component("modal", {
template: `
<div class="modal">
	<div class="modal-background"></div>
	<div class="modal-content">
	<!-- Any other Bulma elements you want -->
	</div>
	<button class="modal-close is-large" aria-label="close"></button>
</div>
`
});
var app = new Vue({
	el: "#app",
	data:{

	},
	methods: {
		vMsg: function() {
			
		}
	}

});