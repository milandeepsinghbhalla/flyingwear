// require('./bootstrap_l');
// require('./bootstrap');


import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router'

 







Vue.use(VueResource);
Vue.http.options.root = '/';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.use(VueRouter);
Vue.use(VueScrollTo);

const upload_form_1 = {
  template: `
      <div class="container" v-if="current_user.uid==1">
        <div class="row justify-content-center mb-5 mx-auto" style = "width: 100%">
          <div class="col-lg-6 px-0 d-flex justify-content-center bg-dark media-margin text-center">
            <form action="" method="post">
               <div class="form-group">
                  <label class="text-peach" for="pname">pname</label>
                  <input type="text" class="form-control" id="pname" v-model="form1.pname" aria-describedby="pname">
               </div>
               <div class="form-group">
                  <label class="text-peach" for="pstock">pstock</label>
                  <input type="number" class="form-control" id="pstock" v-model="form1.pstock" aria-describedby="pstock">
               </div>
               <div class="col-12">
                  <strong class="text-peach">t_name:</strong>
                  <select v-model="form1.t_name" class="form-control" style="width:100%;">
                    <option disabled value="">t_name</option>
                    <option v-for="t_name in t_names">{{t_name}}</option>
                  </select>
                  
               </div>
              <div class="button-parent">
                <button type="button" class="btn orange button mt-2 mb-3" v-on:click="form1_submit()">continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container" v-else>
      <h1> you are not allowed here so kindly get out!!!</h1>
      </div>
  `,
  props: ['current_user'],
  data: function(){
    return {
      form1: {},
      t_names: ['shirts','round_neck']
    }
  },
  methods: {
    form1_submit(){
      let obj = {
        pname: this.form1.pname,
        pstock: this.form1.pstock,
        t_name: this.form1.t_name
      }
      this.$http.post("/clothbranch/upload_item_1_cb.php", obj).then(res => {
        if(res.body==1){
          swal("data added"," ","success");
        }
        else{
          swal("data can't be added"," ","error");
          console.log(res.body);
        }
      });
    }
  }
}

const login_form = {
  template: `
        <div style = "display: flex; width: 100%" class="text center">
          <div class="row justify-content-center mb-5 mx-auto" style = "width: 100%">
      <div class="col-lg-6 px-0 d-flex justify-content-center bg-dark media-margin text-center">


        
          <form action="sign_up.php" method="post">
            <i class="fas fa-user display-1 text-peach pt-4 pb-2"></i>
            <div>
              <h3 class="text-center text-peach mb-3">Log in</h3>
            </div>
            
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-envelope"></i></div>
                </div>
               <input type="email" class="form-control" v-model="login.email" aria-describedby="emailHelp" placeholder="Email" autocomplete>
              </div>
                 <small id="emailHelp" class="form-text text-peach">We'll never share your email with anyone else.</small>

            </div>
            
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-lock"></i></div>
                </div>
                <input type="password" class="form-control" v-model="login.password" placeholder="Password">

            </div>
            </div>
            

            <div class="button-parent">
            <button type="button" class="btn orange button mt-2 mb-3" v-on:click="login_webstore()">Log in</button>
            </div>

            <div><p class="text-left text-peach">Don't have an account ? <router-link class="text-info hover-white" to="/sign-up">Sign up</router-link></p></div>
          </form>
        
      </div>
      
    </div>
    </div>
        
  `,
  props: ['login'],
  methods: {
    login_webstore(){
      console.log("hi");
      function validateEmail(email) {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
      };
      var login_data = {
        email: this.login.email,
        password: this.login.password 
      };
      if(validateEmail(this.login.email)){
        console.log("hello");
        this.$http.post("/clothbranch/login_cb.php", login_data).then(res => {
                                 console.log(res.body);
                                 if(1===parseInt(res.body.log)){
                                    localStorage.setItem('cb_name',res.body.name);
                                    if(res.body.cart!=null&&res.body.cart!=""){
                                      console.log("creating cart");
                                      
                                    localStorage.setItem('cb_cart',JSON.stringify(res.body.cart));
        
                                    }
                                    localStorage.setItem('cb_uid',res.body.uid);
                                    localStorage.setItem('cb_number',res.body.number);
                                    localStorage.setItem('cb_w_number',res.body.w_number);
                                    location.replace("http://localhost/clothbranch/");
                                    
                                    console.log(res.body);
                                    
                                 }
                                 
                                 else if(parseInt(res.body)===2)
                                    swal("incorrect password","check your password", "error");
                                 else if(parseInt(res.body)===3)
                                    swal("email not found","check your email", "error");
                              });
      }
    }
  }
};


const sign_up_form = {
  template: `
      
          <div class="row justify-content-center mb-5" style="width:100%; margin: 0 auto;">
      
      
        <div class="col-sm-6 p-3 bg-dark media-margin">
          <form>
            <div>
              <h3 class="text-center text-peach mb-3">Sign Up</h3>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-user"></i></div>
                </div>
                  <input type="text" class="form-control required" v-model.trim="signform.name" placeholder="Your Full Name">
                </div>

            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-plus"></i></div>
                </div>
                <input type="text" class="form-control col-3 required" v-model.trim="signform.code" placeholder="code" >
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-phone-alt"></i></div>
                </div>
                <input type="text" class="form-control col-9 required" v-model.trim="signform.number" placeholder="Mobile No.">
            </div>

            </div>
             <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-plus"></i></div>
                </div>
                <input type="text" class="form-control col-3 required" v-model.trim="signform.wcode" placeholder="code" >
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-phone-alt"></i></div>
                </div>
                <input type="text" class="form-control col-9 required" v-model.trim="signform.wnumber" placeholder="What's App No.">
            </div>

            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-envelope"></i></div>
                </div>
               <input type="email" class="form-control" v-model.trim="signform.email" aria-describedby="emailHelp" placeholder="Email" autocomplete>
              </div>
                 <small id="emailHelp" class="form-text  text-peach">We'll never share your data with anyone else.</small>

            </div>
            
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-lock"></i></div>
                </div>
                <input type="password" class="form-control" v-model.trim="signform.password" placeholder="Password">

            </div>
            </div>
            

            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend bg-img-yellow">
                    <div class="input-group-text bg-img-yellow font-weight-bolder"><i class="fas fa-lock"></i></div>
                </div>
                <input type="password" class="form-control" v-model.trim="signform.con_pass" placeholder="Confirm Password">
            </div>
            </div>
            <div class="button-parent">
            <button type="submit" class="btn btn-md orange button mt-2" v-on:click="create_account()">Create Account</button>
            </div>

    <div><p class="text-center text-peach pt-2">Already have an account ? <router-link class="text-info hover-white" to="/login">login</router-link></p></div>
          </form>
        </div>
      </div>
    </div>
  </div>
      

  `,
  props: ['signform'],
  methods:{
    create_account(){
      function validateEmail(email) {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
      }
      function validate_pass(str){
        var constraint=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        return (str.match(constraint))
      }
      if(this.signform.name!='' && this.signform.email!='' && this.signform.code!='' &&this.signform.number!='' &&this.signform.password!='' &&this.signform.con_pass!=''){

      if(this.signform.password===this.signform.con_pass && validateEmail(this.signform.email)){
        if(validate_pass(this.signform.password)){
            var c_number = '+'+this.signform.code+this.signform.number;
            var cw_number = '+' + this.signform.wcode+this.signform.wnumber;
            var user_data={
              email: this.signform.email,
              name: this.signform.name,
              number: c_number,
              password: this.signform.password,
              w_number: cw_number

            };
            
             this.$http.post("/clothbranch/sign_up_cb.php", user_data).then(res => {
                                     console.log(res.body);
                                  });
             console.log("i am here");
             location.replace("/clothbranch/?#/login");
        }
        else{
              swal("password must contain 8-15 characters with atleast one uppercase and one lowercase and one special charecter like @"," ","warning");
            }

      }
        

      else if(this.signform.password!==this.signform.con_pass){
        swal("password and confirm password don't match"," ","error");
      }
      // else if(!validateEmail(this.signform.email)){
      //  swal("email incorrect"," ","error");
      // }
    }
    else{
      swal("no fields can be left empty"," ","warning");
    }
    }
  }
}


const total = {
    template:`
        <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
                <button v-if="total>0" class="btn btn-dark btn-lg">Total = &#8377{{total}} Proceed <i class="fas fa-thumbs-up"></i></button>
                <button v-else class="btn btn-dark btn-lg">Cart is empty <i class="fas fa-frown-open"></i></button>
            </div>
        </div>
    `,
    props: ['total']

}
const head_of_page ={
	template: `
			<div id="head"></div>
	`
};
const cart_card = {
    template: `
        <div class="col-lg-12 bg-dark crd-new-hrz">
        <div class="row">
            <div class="col-5 col-md-4 p-0 mx-0">
                <img v-bind:src="product.pimg" class="img-fill-new cart-height">
            </div>
                
        
            <div class="col-7 col-md-8  pt-3 pt-lg-4 mx-0">
                
                <h3 class="in-mob-text">{{product.pname}}</h3>
                <h4 class="in-mob-text price">&#8377{{product.pprice}}</h4>
                <h3 class="in-mob-text-sizes">Selected size: {{product.size}}</h3>
                <h3 class="in-mob-text-sizes">selected color : {{product.color}}</h3>
                <h3 class="in-mob-text-sizes">fabric : {{product.fabric}}</h3>
                <h3 class="in-mob-text-sizes">&#8377{{product.pprice*product.no_in_cart}} for {{product.no_in_cart}}</h3>

                <span class="in-mob-text card-footer-horizontal">
                                    
                                        

                                            <button data-toggle="modal"  v-on:click="detail_clicked(product)"class="btn orange btn-sm mr-1 in-mob-text-card">Details</button>
                                            <button class="btn btn-danger btn-sm m-0 in-mob-text-card mob-button" v-on:click="remove_from_cart(product.cart_id)"><i class="fas fa-trash-alt in-mob-text-card"></i></button>
                                            <button class="btn  btn-light btn-sm m-0 in-mob-text-card mob-button" v-on:click="remove_one(product.cart_id)" v-show="product.no_in_cart>1">-</button>
                                            <button class="btn btn-light btn-sm in-mob-text-card mob-button">{{product.no_in_cart}}</button>
                                            <span v-show="can_add_to_cart[(product.pid)-1]">
                                                <button class="btn  btn-light btn-sm m-0 in-mob-text-card mob-button" v-on:click="add_to_cart(product.pid)" >+</button>
                                            </span>
                                          
                                    
                                    
                                            
                                    

                                        
                                        
                </span>
                
                
                
            </div>
       </div>
       <div class="modal fade" v-bind:id="product.modal" tabindex="-1" v-bind:aria-labelledby="product.label_id" aria-hidden="true">
             <div class="modal-dialog  modal-dialog-centered ">
                <div class="modal-content">
                    <div class="modal-header">
                               <h5 class="modal-title" v-bind:id="product.label_id">{{product.pname}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                               <div class="container-fluid">
                                    <div class="row">
                                         <div class="col-12">
                                                <div :id="product.control" class="carousel slide" data-ride="carousel">
                                                  <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                      <img v-bind:src="product.pimg" class="modal-img d-block w-100" >
                                                    </div>
                                                    <div v-for="image in product.images" class="carousel-item">
                                                      <img v-bind:src="image" class="modal-img d-block w-100" >
                                                    </div>
                                                  </div>
                                                  <a class="carousel-control-prev" :href="product.control_link" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                  </a>
                                                  <a class="carousel-control-next" :href="product.control_link" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                  </a>
                                                </div>
                                          </div>
                                    </div>
                               </div>
                    </div>
                     <div class="modal-footer text-left">
                        <div style="width: 100%;">
                            <span class="font-weight-bolder">price : &#8377{{product.pprice}}</span> <span class="font-weight-bolder ml-2"> fabric : {{product.fabric}}</span>
                        </div>
                     </div>
                     <div class="modal-footer text-left">
                        <div style="width: 100%;">
                            <span class="font-weight-bolder">COD and return available</span>
                        </div>
                     </div>
                     <div class="modal-footer">
                        <div class="form-inline" style="width: 100%;">
                            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Size : </label>
                              <select v-model="product.size" v-on:change="changed(product.cart_id)" class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option disabled value="">Size</option>
                                    <option v-for="size in product.sizes">{{size}}</option>
                              </select>

                              <label class="my-1 mr-2 ml-2" for="inlineFormCustomSelectPref">color : </label>
                              <select v-model="product.color" v-on:change="changed(product.cart_id)" class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option disabled value="">color</option>
                                    <option v-for="color in product.colors">{{color}}</option>
                              </select>

                              <button class="btn btn-danger btn-sm m-0 in-mob-text-card ml-1 mt-1 mob-button-out" v-on:click="remove_from_cart(product.cart_id)"><i class="fas fa-trash-alt in-mob-text-card"></i></button>
                                            <button class="btn  btn-dark btn-sm m-0 in-mob-text-card ml-1 mt-1 mob-button-out" v-on:click="remove_one(product.cart_id)" v-show="product.no_in_cart>1">-</button>
                                            <button class="btn btn-light btn-sm in-mob-text-card ml-1 mt-1 mob-button-out">{{product.no_in_cart}}</button>
                                            <span v-show="can_add_to_cart[(product.pid)-1]">
                                                <button class="btn  btn-dark btn-sm m-0 in-mob-text-card ml-1 mt-1 mob-button-out" v-on:click="add_to_cart(product.pid)" >+</button>
                                            </span>
                                          
                            
                        </div>
                     </div>
                </div>
             </div>
       </div>
    </div>
    `,
    props: ['product','items_in_cart','can_add_to_cart','cart','all_products','items_in_cart'],
    methods: {
        changed(id){
            let new_cart_id = this.product.pid + "_" + this.product.size + "_" + this.product.color;
            let pro = this.cart.find(element=>element.cart_id==id);
            while(pro){
                let index = this.cart.indexOf(pro);
                this.cart[index].cart_id = new_cart_id;
                this.cart[index].size = this.product.size;
                this.cart[index].color = this.product.color;
                pro = this.cart.find(element=>element.cart_id==id);
                console.log("in changed");
                console.log(pro);
            }
            localStorage.setItem('cb_cart',JSON.stringify(this.cart));
            webstore.tab_closed();  
            location.reload();

        

        },
        remove_from_cart(pro_id){
            let pro=this.items_in_cart.find(element=>element.cart_id==pro_id);
            // this.products_in_cart.splice(this.products_in_cart.indexOf(pro),1);
           
            let i;
            for(i=0;i<pro.no_in_cart;i++)
                this.cart.splice(this.cart.indexOf(this.cart.find(element=>element.cart_id==pro_id)),1);
               localStorage.setItem('cb_cart',JSON.stringify(this.cart));
        },
        remove_one(pro_id){
            
            // let pro= this.items_in_cart.find(element=>element.id===pro_id);
            // let i;
            // for(i=0;i<this.items_in_cart.length;i++){
            //  if(this.items_in_cart[i].id===pro_id)
            //      return
            // }
            this.cart.splice(this.cart.indexOf(this.cart.find(element=>element.cart_id==pro_id)),1);
             localStorage.setItem('cb_cart',JSON.stringify(this.cart));
        },
        add_to_cart: function(bat_id){
           if(webstore.current_user.uid!==-1){ 
              let i,no_of_items=0;
              for(i=0;i<this.cart.length;i++){
                      if(this.cart[i].pid===bat_id)
                          no_of_items++;
              }
          
                  const bat= this.all_products.find(element=>element.pid==bat_id);
                  
                  // let pro = this.shirts.find(element=>element.pid===bat_id);
              
                  if(bat.pstock>no_of_items){
                      let o={
                          pid: this.product.pid,
                          size: this.product.size,
                          color: this.product.color,
                          cart_id: this.product.pid + '_' + this.product.size +'_' +this.product.color
                      }
                      this.cart.push(o);

                  }
                  localStorage.setItem('cb_cart',JSON.stringify(this.cart));
            }
            else{
              swal("login first before adding to cart"," ","warning");
            }

                
                

        },
        detail_clicked(product){
            $(product.modal_id).modal('show')
            jQuery(document).ready(function($) {

              if (window.history && window.history.pushState) {

                window.history.pushState('forward', null, './#forward');

                $(window).on('popstate', function() {
                  if($(product.modal_id).data('bs.modal')?._isShown)
                  $(product.modal_id).modal('toggle')
                });

              }
            });
        }
    }

}

const new_product_main_card = {
	template: `
				<div class="col-lg-12 bg-dark crd-new-hrz">
  		<div class="row">
	  		<div class="col-5 col-md-4 p-0 mx-0">
	  			<img v-bind:src="product.pimg" class="img-fill-new">
	  		</div>
	  			
	  	
	  		<div class="col-7 col-md-8  pt-3 pt-lg-4 mx-0">
	  			
	  			<h3 class="in-mob-text">{{product.pname}}</h3>
	  			<h4 class="in-mob-text price">&#8377{{product.pprice}}</h4>
	  			<h3 class="in-mob-text-sizes">{{product.psizes}}</h3>
	  			<h3 class="in-mob-text-sizes">Colors : {{product.colors.length}}</h3>
	  			<h3 class="in-mob-text-sizes">fabric : {{product.fabric}}</h3>
	  			<span class="in-mob-text card-footer-horizontal">
	  								
										

											<button data-toggle="modal"  v-on:click="detail_clicked(product)"class="btn orange btn-sm mr-1 in-mob-text-card">Details</button>
											<span class="in-mob-text-sizes return-line">COD and return available</span>
									
									
											
									

										
										
				</span>
				
				
				
	  		</div>
  	   </div>
  	   <div class="modal fade" v-bind:id="product.pid" tabindex="-1" v-bind:aria-labelledby="product.label_id" aria-hidden="true">
  	   		 <div class="modal-dialog  modal-dialog-centered ">
  	   		 	<div class="modal-content">
  	   		 		<div class="modal-header">
					      	   <h5 class="modal-title" v-bind:id="product.label_id">{{product.pname}}</h5>
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					</div>
					<div class="modal-body">
					      	   <div class="container-fluid">
					      	   		<div class="row">
					      	   			 <div class="col-12">
									      		<div :id="product.control" class="carousel slide" data-ride="carousel">
												  <div class="carousel-inner">
												    <div class="carousel-item active">
												      <img v-bind:src="product.pimg" class="modal-img d-block w-100" >
												    </div>
												    <div v-for="image in product.images" class="carousel-item">
												      <img v-bind:src="image" class="modal-img d-block w-100" >
												    </div>
												  </div>
												  <a class="carousel-control-prev" :href="product.control_link" role="button" data-slide="prev">
												    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
												    <span class="sr-only">Previous</span>
												  </a>
												  <a class="carousel-control-next" :href="product.control_link" role="button" data-slide="next">
												    <span class="carousel-control-next-icon" aria-hidden="true"></span>
												    <span class="sr-only">Next</span>
												  </a>
												</div>
									      </div>
					      	   		</div>
					      	   </div>
					</div>
					 <div class="modal-footer text-left">
					 	<div style="width: 100%;">
					 		<span class="font-weight-bolder">price : &#8377{{product.pprice}}</span> <span class="font-weight-bolder ml-2"> fabric : {{product.fabric}}</span>
					 	</div>
					 </div>
           <div class="modal-footer text-left">
            <div style="width: 100%;">
                <span class="font-weight-bolder">Description</span>
                <pre>
  *this is what we are here for
  *this is a new return-line
  *this is another line
                </pre>
            </div>
           </div>
					 <div class="modal-footer">
					 	<div class="form-inline" style="width: 100%;">
					 		<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Size : </label>
							  <select v-model="product.size"  class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
							    	<option disabled value="">Size</option>
									<option v-for="size in product.sizes">{{size}}</option>
							  </select>

							  <label class="my-1 mr-2 ml-2" for="inlineFormCustomSelectPref">color : </label>
							  <select v-model="product.color"  class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
							    	<option disabled value="">color</option>
									<option v-for="color in product.colors">{{color}}</option>
							  </select>

							  <span v-if="can_add_to_cart[(product.pid)-1]">
										<button class="btn mt-2 mt-md-0 btn-dark ml-2 btn-sm in-mob-text-card" v-on:click="add_to_cart(product.pid)" >Add to cart</button>
										
									</span>
									<span v-else>
								<button class="btn btn-danger mt-2 mt-md-0 ml-2 btn-sm disabled in-mob-text-card" v-on:click="add_to_cart(product.pid)">out of stock</button>
									</span>
					 		
					 	</div>
					 </div>
  	   		 	</div>
  	   		 </div>
  	   </div>
  	</div>
	`,

	props: ['product','can_add_to_cart','cart','items_in_cart','shirts','all_products'],

	methods: {

   
		add_to_cart: function(bat_id){
			if(webstore.current_user.uid!==-1){
    			let i,no_of_items=0;
    			for(i=0;i<this.cart.length;i++){
    					if(this.cart[i].pid===bat_id)
    						no_of_items++;
    			}
    		
    				const bat= this.all_products.find(element=>element.pid==bat_id);
                    
                    // let pro = this.shirts.find(element=>element.pid===bat_id);
                    
    				if(bat.pstock>no_of_items){
                        let o={
                            pid: this.product.pid,
                            size: this.product.size,
                            color: this.product.color,
                            cart_id: this.product.pid + '_' + this.product.size +'_' +this.product.color
                        }
    					this.cart.push(o);

                    }
          localStorage.setItem('cb_cart',JSON.stringify(this.cart));

      }
      else{
        swal("login first before adding to cart"," ","warning");
      }

      $(this.product.modal_id).modal('toggle');
      swal("product added to cart"," ","success");

				
				

		},
		detail_clicked(product){
			$(product.modal_id).modal('show')
      jQuery(document).ready(function($) {

        if (window.history && window.history.pushState) {

          window.history.pushState('forward', null, './#forward');

          $(window).on('popstate', function() {
            if($(product.modal_id).data('bs.modal')?._isShown)
            $(product.modal_id).modal('toggle')
          });

        }
      });
		}
	}
  // mounted(){
  //   $('div.modal').on('shown', function(){
  //         var id = $(this).attr('id');
  //           jQuery(document).ready(function($) {

  //             if (window.history && window.history.pushState) {

  //               window.history.pushState('forward', null, './#forward');

  //               $(window).on('popstate', function() {
  //                 // if($(".modal").data('bs.modal'))
  //                 //   $(this).modal('toggle');
                  
  //                 console.log(id);
  //                       $('#'+id).modal('toggle');
                    

  //               });

  //             }
  //           });
  //         });
  // }
}
const router = new VueRouter({
	routes: [
				{
					path: '/shirts',
					name: 'shirts',
					components:{
						'shirt-product-card': new_product_main_card,
						'head': head_of_page
					}
				
				},
				{
					path: '/round-neck',
					name: 'round-neck',
					components:{
						'round-neck-product-card': new_product_main_card,
						'head': head_of_page
					}
				
				},
                {
                    path: '/cart',
                    components:{
                        'cart-card': cart_card,
                        'head': head_of_page,
                        'total': total
                    }
                },
        {
          path: '/sign-up',
          components:{
            'sign-up-form': sign_up_form
          }
        },
        {
          path: '/login',
          components:{
            'login-form': login_form
          }
        },
        {
          path: '/form1',
          components:{
            'upload-form-1': upload_form_1
          }
        }
			]
});
const webstore=new Vue({
	http: {
            emulateJSON: true,
            emulateHTTP: true,
            root: '/',
    		headers: {
			      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
			    }
    },
    router: router,
    el: '#app',
    data: {
      signform: {},
      login: {},
      current_user: {
        uid: -1,
        name: 'guest',
        w_number: null,
        number: null
      },
    	shirts: [{
    		pid: 1,
    		pname: 'ZARA Black Shirt',
    		pimg: 'images/profile_vector.png',
    		psizes: 'M | L | XL | XXL',
    		pprice: 500,
    		pstock: 30,
    		colors: ['Yellow','Blue','Black','Mix'],
    		fabric: 'cotton',
    		images: ['images/logo_cb.png','images/logo.png'],
    		aid: null,
    		sizes: ['M','L','XL','XXL'],
    		modal_id: "#1",
    		label_id: "exampleModalLabel1",
    		control: "carouselExampleControls1",
    		control_link: "#carouselExampleControls1"
    	},
    	{
    		pid: 3,
    		pname: 'ZARA Black Shirt',
    		pimg: 'images/profile_vector.png',
    		psizes: 'M | L | XL | XXL',
    		pprice: 500,
    		pstock: 30,
    		colors: ['Yellow','Blue','Black','Mix'],
    		fabric: 'cotton',
    		images: ['images/logo_cb.png','images/logo.png'],
    		aid: null,
    		sizes: ['M','L','XL','XXL'],
    		modal_id: "#3",
    		label_id: "exampleModalLabel3",
    		control: "carouselExampleControls3",
    		control_link: "#carouselExampleControls3"
    	},
    	{
    		pid: 5,
    		pname: 'ZARA Black Shirt',
    		pimg: 'images/profile_vector.png',
    		psizes: 'M | L | XL | XXL',
    		pprice: 500,
    		pstock: 30,
    		colors: ['Yellow','Blue','Black','Mix'],
    		fabric: 'cotton',
    		images: ['images/logo_cb.png','images/logo.png'],
    		aid: null,
    		sizes: ['M','L','XL','XXL'],
    		modal_id: "#5",
    		label_id: "exampleModalLabel5",
    		control: "carouselExampleControls5",
    		control_link: "#carouselExampleControls5"
    	}],
    	round_neck: [{
    		pid: 2,
    		pname: 'Champion Men T-Shirt',
    		pimg: 'images/round_neck/2.jpeg',
    		psizes: 'M | L | XL | XXL',
    		pprice: 489,
    		pstock: 30,
    		colors: ['peach-black'],
    		fabric: 'cotton',
    		images: [],
    		aid: 135524,
    		sizes: ['M(38)','L(40)','XL(42)','XXL(44)'],
    		modal_id: "#2" ,
    		label_id: "exampleModalLabel2",
    		control: "carouselExampleControls2",
    		control_link: "#carouselExampleControls2"
    	},
    	{
    		pid: 4,
    		pname: 'FILA Men T-Shirt',
    		pimg: 'images/round_neck/4.jpg',
    		psizes: 'M | L | XL | XXL',
    		pprice: 489,
    		pstock: 30,
    		colors: ['Yellow'],
    		fabric: 'cotton',
    		images: [],
    		aid: 126865,
    		sizes: ['M','L','XL','XXL'],
    		modal_id: "#4",
    		label_id: "exampleModalLabel4",
    		control: "carouselExampleControls4",
    		control_link: "#carouselExampleControls4"
    	},
    	{
    		pid: 6,
    		pname: 'Superdry Men T-Shirt',
    		pimg: 'images/round_neck/6.jpg',
    		psizes: 'M | L | XL | XXL',
    		pprice: 489,
    		pstock: 30,
    		colors: ['black-green-mix'],
    		fabric: 'cotton',
    		images: [],
    		aid: 115576,
    		sizes: ['M','L','XL','XXL'],
    		modal_id: "#6",
    		label_id: "exampleModalLabel6",
    		control: "carouselExampleControls6",
    		control_link: "#carouselExampleControls6"
    	}],
    	polo: [],
    	jackets: [],
    	kurta: [],
    	jeans: [],
    	joggers: [],
    	caperies: [],
    	shorts: [],
    	cart: [],
    	all_products: [{
    		pid: 1,
    		pname: 'ZARA Black Shirt',
    		pstock: 30,
    		table_name: 'shirts'
    	},
    	{
    		pid: 2,
    		pname: 'Champion Men T-Shirt',
    		pstock: 30,
    		table_name: 'round_neck'
    	},
    	{
    		pid: 3,
    		pname: 'ZARA Black Shirt',
    		pstock: 30,
    		ptype1: 'm',
    		table_name: 'shirts'
    	},
    	{
    		pid: 4,
    		pname: 'FILA Men T-Shirt',
    		pstock: 30,
    		table_name: 'round_neck'
    	},
    	{
    		pid: 5,
    		pname: 'ZARA Black Shirt',
    		pstock: 30,
    		table_name: 'shirts'
    	},
    	{
    		pid: 6,
    		pname: 'Superdry Men T-Shirt',
    		pstock: 30,
    		table_name: 'round_neck',
    	},]
    },
    computed: {
    	can_add_to_cart: function(){
			let cart_checker=[];
			let i;
			for(i=0;i<this.all_products.length;i++){
				let j,no_of_curr_item=0;
				for(j=0;j<this.cart.length;j++){
					if(this.cart[j].pid===this.all_products[i].pid){
						no_of_curr_item++;
					}

				}
				if(this.all_products[i].pstock>no_of_curr_item)
					cart_checker[i]=true;
				else
					cart_checker[i]=false;
			}
			return cart_checker;
		},
		items_in_cart(){
			let i,j,no_of_items=1;
        
            
             let counts = {};
             let final = [];
             for(let i =0; i < this.cart.length; i++){ 
                 if (counts[this.cart[i].cart_id]){
                 counts[this.cart[i].cart_id] += 1
                 } else {
                 counts[this.cart[i].cart_id] = 1
                 }
                }
                
              for (let prop in counts){
                let o={} 
                o.cart_id = prop;
                o.no_in_cart = counts[prop];
                let pro = this.cart.find(element=>element.cart_id==prop);
                o.pid = pro.pid;
                o.size = pro.size;
                o.color = pro.color;
                console.log(pro.pid);
                let pro_main = this.all_products.find(element=>element.pid==pro.pid);
                console.log(pro_main);
                let the_product = this[pro_main.table_name].find(element=>element.pid==pro_main.pid);
                        o.pname= the_product.pname
                        o.pimg= the_product.pimg
                        o.psizes= the_product.psizes
                        o.pprice= the_product.pprice
                        o.pstock= the_product.pstock
                        o.colors= the_product.colors
                        o.fabric= the_product.fabric
                        o.images= the_product.images
                        o.aid= the_product.aid
                        o.sizes= the_product.sizes
                        o.modal_id= "#" + prop.replaceAll('-','_').replaceAll('(','_').replaceAll(')','_');
                        o.modal= prop.replaceAll('-','_').replaceAll('(','_').replaceAll(')','_');
                        o.label_id= the_product.label_id + prop
                        o.control= the_product.control + prop
                        o.control_link= the_product.control_link + prop
                final.push(o);
              } 
            
			
			return final;
		},
        total(){
            let total=0;
            let i;
            for(i=0;i<this.items_in_cart.length;i++){
                total = total + (this.items_in_cart[i].pprice*this.items_in_cart[i].no_in_cart);
            }
            return total;
        }

    },
    components: {
    	'product-card': new_product_main_card
    },
    created(){

        document.addEventListener("visibilitychange", this.tab_closed());
        window.addEventListener('beforeunload', this.tab_closed());
        if(localStorage.getItem('cb_cart')){
            this.cart = JSON.parse(localStorage.getItem('cb_cart'));
            this.cart.pid = parseInt(this.cart.pid);
          }
        if(localStorage.getItem('cb_uid')&&localStorage.getItem('cb_name')&&localStorage.getItem('cb_number')&&localStorage.getItem('cb_w_number')){
          this.current_user.uid = localStorage.getItem('cb_uid');
          this.current_user.name = localStorage.getItem('cb_name');
          this.current_user.number = localStorage.getItem('cb_number');
          this.current_user.w_number = localStorage.getItem('cb_w_number');
        }
    },
    methods: {
      tab_closed(){
      if(localStorage.getItem('cb_cart')&&localStorage.getItem('cb_cart')!=""){
        
        var obj = {
            uid : parseInt(this.current_user.uid),
            cart_contents : JSON.parse(localStorage.getItem('cb_cart')),
          };
        this.$http.post("/clothbranch/update_cart_cb.php", obj).then(res => {
                                      console.log(res.body);
                                    });
      }
    },
      logout(){
      localStorage.removeItem('cb_name');
      

      if(localStorage.getItem('cb_cart')){
        
        if(localStorage.getItem('cb_cart')==""){
          var obj = {
            uid : parseInt(localStorage.getItem('cb_uid')),
            cart_contents : []
          };
        }
        else{
          var obj = {
            uid : parseInt(localStorage.getItem('cb_uid')),
            cart_contents : JSON.parse(localStorage.getItem('cb_cart'))
          };
        }
        // if(localStorage.getItem('orders')){
        //   obj.order_history = JSON.parse(localStorage.getItem('orders'))
        // }
        // localStorage.removeItem('orders');
        localStorage.removeItem('cb_cart');
        console.log(obj);
        this.$http.post("/clothbranch/update_cart_cb.php", obj).then(res => {
                                    console.log(res.body);
                                  });
      }
      location.replace("/clothbranch/");
      
    }
    }
}).$mount('#app');