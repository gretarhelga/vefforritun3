Vue.component("card", {
	props: ["title", "subtitle", "image", "smallimage"],
	template:`
		<div class="card">
		  <div class="card-image">
		    <figure class="image is-4by3">
		      <img :src="image">
		    </figure>
		  </div>
		  <div class="card-content">
		    <div class="media">
		      <div class="media-left">
		        <figure class="image is-48x48">
		          <img :src="smallimage">
		        </figure>
		      </div>
		      <div class="media-content">
		        <p class="title is-4">{{ title }}</p>
		        <p class="subtitle is-6">{{ subtitle }}</p>
		      </div>
		    </div>

		    <div class="content">
		    	<slot></slot><br>
				<a>@bulmaio</a>.
				<a href="#">#css</a> <a href="#">#responsive</a>
				<br>
				<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
		    </div>
		  </div>
		</div>
	`
});
var app = new Vue({
	el: "#app"
});