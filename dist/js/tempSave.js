function editorOnLoad(){
	if(localStorage[this.questionID]!=null){
		this.setMarkdown(localStorage[this.questionID]);
	}
}

function editorOnChange(){
	console.log("change!");
	console.log("questionID:"+this.questionID);
	console.log("markDown:"+this.getMarkdown());
	localStorage[this.questionID] = this.getMarkdown();
}
