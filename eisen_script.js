localStorage.setItem("do",0);
localStorage.setItem("decide",0);
localStorage.setItem("delegate",0);
localStorage.setItem("delete",0);

document.addEventListener("DOMContentLoaded",  ()=>{
	const pop_form=document.getElementById("myForm");
	pop_form.style.display="none";
})
btn=document.getElementById("add-entry")
btn.addEventListener("click",()=>{
	const pop_form=document.getElementById("myForm");
	pop_form.style.display="block";
})

const do_arr=new Array();
const decide_arr=new Array();
const dlgt_arr=new Array();
const dlt_arr=new Array();
const sub_btn=document.getElementById("submit-btn");
sub_btn.addEventListener("click",()=>{
	var imp=document.getElementById("imp-sel");
	var urg=document.getElementById("urg-sel");
	var imp_val=imp.value;
	
	var urg_val=urg.value;
	var txt_in=document.getElementById("entry-text").value;




	if(imp_val=="imp" && urg_val=="urg"){
		let temp = Number(localStorage.getItem("do"));
		temp++;
		const inp_cnt=document.querySelector(`#do .input-container`);
		do_arr.push(txt_in);
		const HTMLString=`<div id="${temp}-do">
		<p></p><h4>${txt_in}</h4>
		</div>`
		inp_cnt.insertAdjacentHTML("beforeend",HTMLString);
		localStorage.setItem("do",temp);
	}
	else if(imp_val=="imp" && urg_val=="nurg"){
		let temp = Number(localStorage.getItem("decide"));
		temp++;
		decide_arr.push(txt_in);
		const inp_cnt=document.querySelector(`#decide .input-container`);
		const HTMLString=`<div id="${temp}-decide">
		<p></p><h1>${txt_in}</h1>
		</div>`
		inp_cnt.insertAdjacentHTML("beforeend",HTMLString);
		localStorage.setItem("decide",temp);
	}
	else if(imp_val=="nimp" && urg_val=="urg"){
		let temp = Number(localStorage.getItem("delegate"));
		temp++;
		dlgt_arr.push(txt_in);
		const inp_cnt=document.querySelector(`#delegate .input-container`);
		const HTMLString=`<div id="${temp}-do">
		<p></p><h1>${txt_in}</h1>
		</div>`
		inp_cnt.insertAdjacentHTML("beforeend",HTMLString);
		localStorage.setItem("delegate",temp);
	}
	else if(imp_val=="nimp" && urg_val=="nurg"){
		let temp = Number(localStorage.getItem("delete"));
		temp++;
		dlt_arr.push(txt_in);
		const inp_cnt=document.querySelector(`#delete .input-container`);
		const HTMLString=`<div id="${temp}-do">
		<p></p><h1>${txt_in}</h1>
		</div>`
		inp_cnt.insertAdjacentHTML("beforeend",HTMLString);
		localStorage.setItem("delete",temp);
	}
	update();

})
function update(){
	let out_cn=document.getElementsByClassName(".out-contain");
	for(let i=0;i<do_arr.length;i++ ){
		out_cn.insertAdjacentElement(`<h1>${do_arr[i]}</h1>`);
	}

}
const clr_btn = document.getElementById("clear-btn");
clr_btn.addEventListener("click",()=> {
	const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  
	for (const container of inputContainers) {
	  container.innerHTML = '';
	}}
  )