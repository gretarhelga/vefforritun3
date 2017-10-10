Vue.component("modal", {
	props: ["title"],
	data: function() {
		return {
			isVisible: false
		};
	},
	methods: {
		showModal: function() {
			this.isVisible = true;
		},
		hideModal: function(){
			this.isVisible = false;
		}
	},
	template: `
	<div>
		<div v-show="isVisible" class="modal is-active">
			<div class="modal-background" @click="hideModal"></div>
			<div class="modal-content">
				<div class="box">
					<h1 class="title is-4">{{ title }}</h1>
					<p><slot></slot></p>
				</div>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
		</div>
		<button class="button is-primary" @click="showModal">Birta modal</button>
	</div>
`
});
var app = new Vue({
	el: "#app"
});