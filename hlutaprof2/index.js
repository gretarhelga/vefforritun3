Vue.component("tabs", {
	props: [],
	template:`
		<div class="tabs is-centered">
			<ul>
			    <li class="is-active"><a>Ég</a></li>
			    <li><a>Verkefni</a></li>
			    <li><a>Hafa samband</a></li>
			    <li><a>Eitthvað skemmtilegt</a></li>
		    </ul>
		</div>
	`
});
/*Vue.component("eg", {
	props: ["image", "nafn"],
	template:`
	    <div class="card-content">
	    	<div class="media">
	        	<div class="is-centered">
			        <figure class="image is-480x320">
			        	<img :src="image">
			        	</div class="is-centered">
			        		<p>{{ nafn }}</p>
			        	</div>
			        </figure>
	        	</div>
	        </div>
        </div>
	`
});*/
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
var app = new Vue({
	el: '#app',

});