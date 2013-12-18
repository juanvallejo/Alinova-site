(function(window) {
var Alinova = {
	doc:null,
	addResizeListener:function(div,properties) {
		window.addEventListener('resize',function() {
			div.style[properties] = window.innerHeight+"px";
		});
	},
	init:function(doc) {
		this.doc = doc;
		var mainPanel = doc.getElementById("main-panel");
		mainPanel.style.height = window.innerHeight+"px";
		this.addResizeListener(mainPanel,'height');
	}
};
window.Alinova = Alinova;
})(window);

window.addEventListener('load',function() {
	Alinova.init(document);
});