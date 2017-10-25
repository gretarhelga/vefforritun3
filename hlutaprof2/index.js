Vue.component("tabs", {
	props: [],
	template:`
		<div>
			<div class="tabs is-centered">
				<ul>
				    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
				   		<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
				    </li>
			    </ul>
			</div>

			<div class="tabs-details">
				<slot></slot>
			</div>
		</div>
	`,
	data() {
		return { tabs: [] };
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name);
			});
		}
	}
});

Vue.component("tab", {
	props: {
		name: { required: true},
		selected: { default: false }
	},
	template:`
		<div v-show="isActive"><slot></slot></div>
	`,
	data(){
		return {
			isActive: false
		};
	},
	computed: {
		href() {
			return "#" + this.name.toLowerCase().replace(/ /g, "-");
		}
	},
	mounted() {
		this.isActive = this.selected;
	}
});
Vue.component("eg", {
	props: ["mynd", "nafn"],
	template:`
		<div>
        	<div class="is-centered">
		        <figure class="image is-480x320">
		        	<img :src="mynd">
		        </figure>
	        	</div>
	        		<p class="has-text-centered is-size-4">{{ nafn }}</p>
	        	</div>
	        </div>
        </div>
	`
});
Vue.component("message", {
	props: [],
	template:`
		<article class="message">
			<div class="message-body">
				<div>
					<slot></slot>
				</div>
			</div>
		</article>
	`
});
Vue.component("formid", {
	template:`
		<div>
			<div class="field">
				<label class="label">Nafn</label>
				<div class="control">
					<input class="input" type="text">
				</div>
			</div>

			<div class="field">
				<label class="label">Skilaboð</label>
				<div class="control">
					<textarea class="textarea">
					</textarea>
				</div>
			</div>
		</div>
	`
});
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
		<div class="has-text-centered">
		<button class="button is-primary" @click="showModal">{{ title }}</button>
		</div>
	</div>
`
});
var app = new Vue({
	el: '#app',

});