// require('./bootstrap_l');
// require('./bootstrap');



// import Vue from 'vue/dist/vue.js';
// import VueRouter from 'vue-router'
// var VueScrollTo = require('vue-scrollto');
 
{/* <br><h3 class="mt-4">select colors:-</h3><br><br>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck1" value="yellow" @change="add_col">
                          <label class="custom-control-label" for="customCheck1">yellow</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck2" value="pink" @change="add_col">
                          <label class="custom-control-label" for="customCheck2">pink</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck3" value="black" @change="add_col">
                          <label class="custom-control-label" for="customCheck3">black</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck4" value="brown" @change="add_col">
                          <label class="custom-control-label" for="customCheck4">brown</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck5" value="biege" @change="add_col">
                          <label class="custom-control-label" for="customCheck5">biege</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck6" value="blue" @change="add_col">
                          <label class="custom-control-label" for="customCheck6">blue</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck7" value="purple" @change="add_col">
                          <label class="custom-control-label" for="customCheck7">purple</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck8" value="green" @change="add_col">
                          <label class="custom-control-label" for="customCheck8">green</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck9" value="grey" @change="add_col">
                          <label class="custom-control-label" for="customCheck9">grey</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck10" value="red" @change="add_col">
                          <label class="custom-control-label" for="customCheck10">red</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck11" value="white" @change="add_col">
                          <label class="custom-control-label" for="customCheck11">white</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck12" value="orange" @change="add_col">
                          <label class="custom-control-label" for="customCheck12">orange</label>
                        </div> */}






Vue.use(VueResource);
Vue.http.options.root = '/';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.use(VueRouter);
Vue.use(VueScrollTo);

const add_other_images = {
  template:`
  <div> 
         <img :src="img_link.link" style="hieght: 200px;width: 250px;margin: 2em;">
         <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" @change="main_img_changed">
            <label class="custom-file-label" for="customFile">add image</label>
         </div>
         <button class="btn btn-dark" @click="add_another_clicked()">add another img</button>
         <aoi :cont_add_p="cont_add_p" :img_no="img_no"  v-if="add_another==1" :EventBus="EventBus" :form_data="form_data"></aoi>
  </div>   
  `,
  name:'aoi',
  data: function(){
    return {
      add_another: 0,
      img_link: {
        link: ""
      }
    }
  },
  props: ['cont_add_p','img_no','EventBus','form_data'],
  created(){
    console.log(this.add_another);
    this.add_another=0;
  },
  methods:{
    add_another_clicked(){
      
      let i = 0;
          for (var pair of this.form_data.entries()) {
            i++
          }
          if(this.img_no ==i){
            this.add_another= 1;
            this.img_no++;
            this.EventBus.$emit('imgnoupdated',this.img_no);
            this.EventBus.$emit('form_data_updated',this.form_data);
          }
          else{
            swal("add previous images first"," ","error");

          }

    },
    main_img_changed(event){
      function my_func(result,img_link) {
					img_link.link = result;
			}
			

			function read(callback,img_link) {
			  var file = event.target.files[0];
			  var reader = new FileReader();

			  reader.onload = function() {
          console.log(reader);
          console.log(img_link);
			    callback(reader.result,img_link);
			  }

			  reader.readAsDataURL(file);
        
			}
			read(my_func,this.img_link)
			
			let filename = event.target.value;
      console.log(event);
			let label = event.target.nextElementSibling;
			label.innerHTML = filename;
      console.log(this.img_no);
      console.log(event.target.files[0]);
      this.form_data.set('img_'+this.img_no,event.target.files[0]);
      for (var pair of this.form_data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
    }
  }
}

const cont_add_p = {
  template:`
              <div class="container">
                        <img :src="img_link.link" style="hieght: 200px;width: 250px;margin: 2em;">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" @change="main_img_changed">
                            <label class="custom-file-label" for="customFile">add image</label>
                        </div>


                        <div class="form-group">
                            <label for="psizes">sizes</label>
                            <input type="text" v-model="cont_add_p.psizes" class="form-control" id="psizes" placeholder="sizes">
                        </div>

                        <div class="form-group">
                            <label for="pprice">price</label>
                            <input type="number" v-model="cont_add_p.pprice" class="form-control" id="pprice" placeholder="price">
                        </div>

                        <div class="form-group">
                            <label for="fabric">Fabric</label>
                            <input type="text" v-model="cont_add_p.fabric" class="form-control" id="fabric" placeholder="fabric">
                        </div>

                        <div class="form-group">
                            <label for="bid">bid</label>
                            <input type="text" v-model="cont_add_p.bid" class="form-control" id="bid" placeholder="back id">
                        </div>
                        <button class="btn btn-dark text-left" @click="add_other_img_clicked()">add other images</button>
                        <add-other-images :img_no="img_no" :cont_add_p="cont_add_p" v-if="add_other==1" :EventBus="EventBus" :form_data="form_data"></add-other-images>
                        
                        <br>
                        <div class="form-group">
                            <label for="bid">color</label>
                            <input type="text" @change="color_chng" class="form-control" id="color" placeholder="add color">
                        </div>
                        <br><h3 class="mt-4">select sizes stock:-</h3><br><br>
                          <div class="form-group">
                              <label class="text-peach" >stock_s</label>
                              <input type="number" class="form-control" v-model="cont_add_p.stock_s" aria-describedby="pstock" :placeholder="cont_add_p.stock_s">
                          </div>
                          <div class="form-group">
                            <label class="text-peach" >stock_m</label>
                            <input type="number" class="form-control" v-model="cont_add_p.stock_m" aria-describedby="pstock" :placeholder="cont_add_p.stock_m">
                          </div>
                          <div class="form-group">
                            <label class="text-peach" >stock_l</label>
                            <input type="number" class="form-control" v-model="cont_add_p.stock_l" aria-describedby="pstock" :placeholder="cont_add_p.stock_l">
                          </div>
                          <div class="form-group">
                            <label class="text-peach" >stock_xl</label>
                            <input type="number" class="form-control" v-model="cont_add_p.stock_xl" aria-describedby="pstock" :placeholder="cont_add_p.stock_xl">
                          </div>
                          <div class="form-group">
                            <label class="text-peach" >stock_2xl</label>
                            <input type="number" class="form-control" v-model="cont_add_p.stock_2xl" aria-describedby="pstock" :placeholder="cont_add_p.stock_2xl">
                          </div>
                          <div class="form-group">
                            <label class="text-peach" >stock_3xl</label>
                            <input type="number" class="form-control" v-model="cont_add_p.stock_3xl" aria-describedby="pstock" :placeholder="cont_add_p.stock_3xl">
                          </div><div class="form-group">
                          <label class="text-peach" >stock_4xl</label>
                          <input type="number" class="form-control" v-model="cont_add_p.stock_4xl" aria-describedby="pstock" :placeholder="cont_add_p.stock_4xl">
                        </div>
                        <div class="form-group">
                            <label class="text-peach" >stock_5xl</label>
                            <input type="number" class="form-control" v-model="cont_add_p.stock_5xl" aria-describedby="pstock" :placeholder="cont_add_p.stock_5xl">
                        </div>
              
                        <div class="mt-4">
                            <label for="description">Description:-</label>
                            <textarea class="bio-prof-input-note text-left p-3" maxlength = "5000" v-model="cont_add_p.description" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  style="overflow:auto; resize:none; line-height: 1.23em; white-space: pre-line;" placeholder="Add product description!!!"></textarea>
                        </div>
                    
                        <div class="text-center mb-5">
                          <button class="btn btn-dark btn-lg mt-5 text-center" @click="upload">upload product</button>
                        </div>

                        



              </div>
  `,
  data: function(){
    return {
      form1: {},
      cont_add_p: {
        psizes:'',
        pprice: '',
        fabric: '',
        colors: [],
        description: '',
        sizes: ['S','M','L','XL','2XL','3XL','4XL','5XL'],
        bid:'',
        stock_s: 0,
        stock_l: 0,
        stock_m: 0,
        stock_xl: 0,
        stock_2xl: 0,
        stock_3xl: 0,
        stock_4xl: 0,
        stock_5xl: 0
      },
      img_no: 1,
      add_other: 0,
      img_link: {
        link: ''
      },
      EventBus: new Vue(),
      form_data: new FormData()
    };
  },
  components:{
    'add-other-images': add_other_images
  },
  methods:{
    color_chng(event){
      if(this.cont_add_p.colors.length==0){
        this.cont_add_p.colors.push(event.target.value);
      }
      else{
        this.cont_add_p.colors.pop();
        this.cont_add_p.colors.push(event.target.value);
      }
    },
    add_size(event){
      if(this.cont_add_p.sizes.includes(event.target.value)){
        let i= this.cont_add_p.sizes.indexOf(event.target.value);
        this.cont_add_p.sizes.splice(i,1);
      }
      else{
        this.cont_add_p.sizes.push(event.target.value);
      }
    },
    add_col(event){
      if(this.cont_add_p.colors.includes(event.target.value)){
        let i= this.cont_add_p.colors.indexOf(event.target.value);
        this.cont_add_p.colors.splice(i,1);
      }
      else{
        this.cont_add_p.colors.push(event.target.value);
      }
    },
    upload(){
        
        if(this.cont_add_p.psizes!==''&&this.cont_add_p.pprice!=''&&cont_add_p.fabric!=''&& this.cont_add_p.description!='' && (this.cont_add_p.colors.length!==0) && (this.cont_add_p.sizes.length!==0) ){
          let i = 0;
          for (var pair of this.form_data.entries()) {
            i++
          }
          if(this.img_no ==i){
            this.form_data.set('pname',this.form1.pname);
            this.form_data.set('pstock',this.form1.pstock);
            this.form_data.set('t_name',this.form1.t_name);
            this.form_data.set('psizes',this.cont_add_p.psizes);
            this.form_data.set('pprice',this.cont_add_p.pprice);
            if(this.cont_add_p.bid!='')
              this.form_data.set('bid',this.cont_add_p.bid);
            this.form_data.set('colors',JSON.stringify(this.cont_add_p.colors));
            this.form_data.set('sizes',JSON.stringify(this.cont_add_p.sizes));
            this.form_data.set('description',this.cont_add_p.description);
            this.form_data.set('stock_s',this.cont_add_p.stock_s);
            this.form_data.set('stock_m',this.cont_add_p.stock_m);
            this.form_data.set('stock_l',this.cont_add_p.stock_l);
            this.form_data.set('stock_xl',this.cont_add_p.stock_xl);
            this.form_data.set('stock_2xl',this.cont_add_p.stock_2xl);
            this.form_data.set('stock_3xl',this.cont_add_p.stock_3xl);
            this.form_data.set('stock_4xl',this.cont_add_p.stock_4xl);
            this.form_data.set('stock_5xl',this.cont_add_p.stock_5xl);
            this.form_data.set('img_no',this.img_no);
            this.form_data.set('fabric',this.cont_add_p.fabric);



            for (var pair of this.form_data.entries()) {
              console.log(pair[0]+ ', ' + pair[1]); 
            }
            this.$http.post("/api/add-product",this.form_data).then(res=>{
              console.log(res.body);
              if(res.body.status==1){
                swal("product added"," ","success");
                localStorage.removeItem('form1');
                location.reload();
              }
              else if(res.body.status==0){
                swal(res.body.message," ","error");
              }
              else if(res.body.status==-1){
                swal(res.body.message," ","error");
              }
            })

            
          }
          else{
            swal("add all images"," ","error");
          }
        }
        else{
          swal("fill minimum required fields"," ","error");
        }

    },
    add_other_img_clicked(){
      
      let i = 0;
          for (var pair of this.form_data.entries()) {
            i++
          }
          if(this.img_no ==i){
            this.add_other=1;
            this.img_no++;
          }
          else{
            swal("add previous images first"," ","error");
          }
    },
    main_img_changed(event){
      function my_func(result,img_link) {
        img_link.link = result;
    }
    

    function read(callback,img_link) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function() {
        console.log(reader);
        console.log(img_link);
        callback(reader.result,img_link);
      }

      reader.readAsDataURL(file);
      
    }
    read(my_func,this.img_link)
    
    let filename = event.target.value;
    console.log(event);
    let label = event.target.nextElementSibling;
    label.innerHTML = filename;
    this.form_data.set('img_1',event.target.files[0]);
    }
  },
  created(){
    this.EventBus.$on('imgnoupdated',img_no=>{this.img_no=img_no});
    this.EventBus.$on('form_data_updated',form_data=>{this.form_data=form_data});
    console.log(this.form_data);
    if(localStorage.getItem('form1')){
      this.form1 = JSON.parse(localStorage.getItem('form1'));
    }

  }
}

const dash_list = {
  template: `
               <div class="col-2 pr-0 dash-list" style="border-right:5px solid  #7e7e7e;">
                    <ul class="dash-link pr-0 pl-3">
                        <router-link to="/dashboard/add-products"><li class="dash-buttons btn btn-dark col-12">Add products</li></router-link>
                        <li class="dash-buttons btn btn-dark col-12">Delete products</li>
                        <li class="dash-buttons btn btn-dark col-12">Orders</li>
                        <li class="dash-buttons btn btn-dark col-12">Cancelled</li>

                    </ul>

                </div>
  `,
  props:['current_user']


}

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
                <button type="button" class="btn orange button mt-2 mb-3" @click="form1_submit()">continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container" v-else>
      <h1> you are not allowed here so kindly get out!!!</h1>
      </div>
  `,
  props: ['current_user','form1'],
  data: function(){
    return {
      
      t_names: ['shirts','round_necks','polos','sweat_shirts','kurtas','jeans','joggers','caperies','shorts']
    }
  },
  methods: {
    form1_submit(){
      // let obj = {
      //   pname: this.form1.pname,
      //   pstock: this.form1.pstock,
      //   t_name: this.form1.t_name
      // }
      // this.$http.post("/clothbranch/upload_item_1_cb.php", obj).then(res => {
      //   if(res.body==1){
      //     swal("data added"," ","success");
      //   }
      //   else{
      //     swal("data can't be added"," ","error");
      //     console.log(res.body);
      //   }
      // });
      if(this.form1.pname!==''&&this.form1.pstock!==''&&this.t_name!==''){
        
        
        console.log(this.form1.pname)
        localStorage.setItem('form1',JSON.stringify(this.form1));
        location.assign("flying#/dashboard/add-productsc");
      }
      else{
        swal("enter all feilds"," ","error");
      }
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
      if(validateEmail(this.login.email)&&this.login.password!==''){
        console.log("hello");
        this.$http.post("/api/login", login_data).then(res => {
                                 console.log(res.body);
                                 if(1===parseInt(res.body.check_status)){
                                    localStorage.setItem('cb_name',res.body.name);
                                    if(res.body.cart!=null&&res.body.cart!=""){
                                      console.log("creating cart");
                                      
                                    localStorage.setItem('cb_cart',JSON.stringify(res.body.cart));
        
                                    }
                                    localStorage.setItem('cb_uid',res.body.uid);
                                    localStorage.setItem('cb_number',res.body.number);
                                    localStorage.setItem('cb_w_number',res.body.w_number);
                                    webstore.current_user.uid = res.body.uid;
                                    webstore.current_user.name = res.body.name;
                                    webstore.current_user.number = res.body.number;
                                    webstore.current_user.w_number = res.body.w_number;
                                    location.replace("/flyingwear#/");
                                    location.reload();
                                    
                                    console.log(res.body);
                                    
                                 }
                                 
                                 else if(parseInt(res.body.check_status)===2)
                                    swal("incorrect password","check your password", "error");
                                 else if(parseInt(res.body.check_status)===3)
                                    swal("email not found","check your email", "error");
                              });
      }
      else if(this.login.password=='')
        swal("password can't be empty!!!",'','warning');
      else
        swal('email format wrong','','warning');
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
            
             this.$http.post("/api/add-user", user_data).then(res => {
                                     console.log(res.body);
                                     if(res.body.check_status==1){
                                       swal(res.body.result,'','succsess');
                                       location.replace("/flyingwear/login");
                                       location.reload();
                                     }
                                     else if(res.body.check_status==0){
                                       swal(res.body.result,'','warning');
                                     }
                                  });
             console.log("i am here");
             
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

                window.history.pushState('forward', null, './flyingwear#/#forward');

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
	  			<img :src="product.pimg" class="img-fill-new">
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
                <pre>{{product.description}}</pre>
            </div>
           </div>
					 <div class="modal-footer">
					 	<div class="form-inline" style="width: 100%;">
					 		<label class="my-1 mr-2" for="inlineFormCustomSelectPref">Size : </label>
							  <select v-model="product.size"  class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
							    	<option disabled value="">Size</option>
									<option v-for="size in product.sizes" v-if="check(product,size)">{{size}}</option>
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

    check(product,size){
      let str = 'stock_' + size.toLowerCase();
      if(product[str]>0)
        return true;
      else
        return false;
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
          $(this.product.modal_id).modal('toggle');
          swal("product added to cart"," ","success");

      }
      else{
        swal("login first before adding to cart"," ","warning");
      }

      

				
				

		},
		detail_clicked(product){
			$(product.modal_id).modal('show')
      jQuery(document).ready(function($) {

        if (window.history && window.history.pushState) {

          window.history.pushState('forward', null, './flyingwear#/#forward');

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
					path: '/Polos',
					name: 'Polos',
					components:{
						'Polos-product-card': new_product_main_card,
						'head': head_of_page
					}
					
				},
        {
					path: '/Sweat-shirts',
					name: 'Sweat-shirts',
					components:{
						'Sweat-shirts-product-card': new_product_main_card,
						'head': head_of_page
					}
					
				},
        {
					path: '/Kurtas',
					name: 'Kurtas',
					components:{
						'Kurtas-product-card': new_product_main_card,
						'head': head_of_page
					}
					
				},
        {
					path: '/Jeans',
					name: 'Jeans',
					components:{
						'Jeans-product-card': new_product_main_card,
						'head': head_of_page
					}
					
				},
        {
					path: '/Joggers',
					name: 'Joggers',
					components:{
						'Joggers-product-card': new_product_main_card,
						'head': head_of_page
					}
					
				},
        {
					path: '/Caperies',
					name: 'Caperies',
					components:{
						'Caperies-product-card': new_product_main_card,
						'head': head_of_page
					}
					
				},
        {
					path: '/Shorts',
					name: 'Shorts',
					components:{
						'Shorts-product-card': new_product_main_card,
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
          path: '/dashboard',
          components:{
            'dash-list': dash_list
          }
        },
        {
          path: '/dashboard/add-products',
          components:{
            'upload-form-1': upload_form_1,
            'dash-list': dash_list
          }
        },
        {
          path: '/dashboard/add-productsc',
          components:{
            'cont-add-p': cont_add_p,
            'dash-list': dash_list
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
      form1: {
        t_name: '',
        pstock: '',
        pname:''
      },
      signform: {},
      login: {},
      current_user: {
        uid: -1,
        name: 'guest',
        w_number: null,
        number: null
      },
      shirts: [],
      round_necks:[],
    	// shirts: [{
    	// 	pid: 1,
    	// 	pname: 'ZARA Black Shirt',
    	// 	pimg: 'images/profile_vector.png',
    	// 	psizes: 'M | L | XL | XXL',
    	// 	pprice: 500,
    	// 	pstock: 30,
    	// 	colors: ['Yellow','Blue','Black','Mix'],
    	// 	fabric: 'cotton',
    	// 	images: ['images/logo_cb.png','images/logo.png'],
    	// 	aid: null,
    	// 	sizes: ['S','M','L','XL','2XL','3XL','4XL','5XL'],
      //   stock_s: 10,
      //   stock_m: 20,
      //   stock_l: 23,
      //   stock_xl: 0,
      //   stock_2xl: 3,
      //   stock_3xl: 5,
      //   stock_4xl: 7,
      //   stock_5xl: 0,
    	// 	modal_id: "#1",
    	// 	label_id: "exampleModalLabel1",
    	// 	control: "carouselExampleControls1",
    	// 	control_link: "#carouselExampleControls1"
    	// },
    	// {
    	// 	pid: 3,
    	// 	pname: 'ZARA Black Shirt',
    	// 	pimg: 'images/profile_vector.png',
    	// 	psizes: 'M | L | XL | XXL',
    	// 	pprice: 500,
    	// 	pstock: 30,
    	// 	colors: ['Yellow','Blue','Black','Mix'],
    	// 	fabric: 'cotton',
    	// 	images: ['images/logo_cb.png','images/logo.png'],
    	// 	aid: null,
    	// 	sizes: ['M','L','XL','XXL'],
    	// 	modal_id: "#3",
    	// 	label_id: "exampleModalLabel3",
    	// 	control: "carouselExampleControls3",
    	// 	control_link: "#carouselExampleControls3"
    	// },
    	// {
    	// 	pid: 5,
    	// 	pname: 'ZARA Black Shirt',
    	// 	pimg: 'images/profile_vector.png',
    	// 	psizes: 'M | L | XL | XXL',
    	// 	pprice: 500,
    	// 	pstock: 30,
    	// 	colors: ['Yellow','Blue','Black','Mix'],
    	// 	fabric: 'cotton',
    	// 	images: ['images/logo_cb.png','images/logo.png'],
    	// 	aid: null,
    	// 	sizes: ['M','L','XL','XXL'],
    	// 	modal_id: "#5",
    	// 	label_id: "exampleModalLabel5",
    	// 	control: "carouselExampleControls5",
    	// 	control_link: "#carouselExampleControls5"
    	// }],
    	// round_neck: [{
    	// 	pid: 2,
    	// 	pname: 'Champion Men T-Shirt',
    	// 	pimg: 'images/round_neck/2.jpeg',
    	// 	psizes: 'M | L | XL | XXL',
    	// 	pprice: 489,
    	// 	pstock: 30,
    	// 	colors: ['peach-black'],
    	// 	fabric: 'cotton',
    	// 	images: [],
    	// 	aid: 135524,
    	// 	sizes: ['M(38)','L(40)','XL(42)','XXL(44)'],
    	// 	modal_id: "#2" ,
    	// 	label_id: "exampleModalLabel2",
    	// 	control: "carouselExampleControls2",
    	// 	control_link: "#carouselExampleControls2"
    	// },
    	// {
    	// 	pid: 4,
    	// 	pname: 'FILA Men T-Shirt',
    	// 	pimg: 'images/round_neck/4.jpg',
    	// 	psizes: 'M | L | XL | XXL',
    	// 	pprice: 489,
    	// 	pstock: 30,
    	// 	colors: ['Yellow'],
    	// 	fabric: 'cotton',
    	// 	images: [],
    	// 	aid: 126865,
    	// 	sizes: ['M','L','XL','XXL'],
    	// 	modal_id: "#4",
    	// 	label_id: "exampleModalLabel4",
    	// 	control: "carouselExampleControls4",
    	// 	control_link: "#carouselExampleControls4"
    	// },
    	// {
    	// 	pid: 6,
    	// 	pname: 'Superdry Men T-Shirt',
    	// 	pimg: 'images/round_neck/6.jpg',
    	// 	psizes: 'M | L | XL | XXL',
    	// 	pprice: 489,
    	// 	pstock: 30,
    	// 	colors: ['black-green-mix'],
    	// 	fabric: 'cotton',
    	// 	images: [],
    	// 	aid: 115576,
    	// 	sizes: ['M','L','XL','XXL'],
    	// 	modal_id: "#6",
    	// 	label_id: "exampleModalLabel6",
    	// 	control: "carouselExampleControls6",
    	// 	control_link: "#carouselExampleControls6"
    	// }],
    	polos: [],
    	sweat_shirts: [],
    	kurtas: [],
    	jeans: [],
    	joggers: [],
    	caperies: [],
    	shorts: [],
    	cart: [],
      all_products:[],
    	// all_products: [{
    	// 	pid: 1,
    	// 	pname: 'ZARA Black Shirt',
    	// 	pstock: 30,
    	// 	table_name: 'shirts'
    	// },
    	// {
    	// 	pid: 2,
    	// 	pname: 'Champion Men T-Shirt',
    	// 	pstock: 30,
    	// 	table_name: 'round_neck'
    	// },
    	// {
    	// 	pid: 3,
    	// 	pname: 'ZARA Black Shirt',
    	// 	pstock: 30,
    	// 	ptype1: 'm',
    	// 	table_name: 'shirts'
    	// },
    	// {
    	// 	pid: 4,
    	// 	pname: 'FILA Men T-Shirt',
    	// 	pstock: 30,
    	// 	table_name: 'round_neck'
    	// },
    	// {
    	// 	pid: 5,
    	// 	pname: 'ZARA Black Shirt',
    	// 	pstock: 30,
    	// 	table_name: 'shirts'
    	// },
    	// {
    	// 	pid: 6,
    	// 	pname: 'Superdry Men T-Shirt',
    	// 	pstock: 30,
    	// 	table_name: 'round_neck',
    	// },]
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
        this.$http.get("/api/get-all-products").then(res=>{
          console.log(res.body);
          let result = res.body
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pstock = parseInt(result[i].pstock);

          }
          this.all_products = result;
        })
        this.$http.get("/api/get-shirts").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.shirts = result;
        })
        this.$http.get("/api/get-round-necks").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.round_necks = result;
        })
        this.$http.get("/api/get-polos").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.polos = result;
        })
        this.$http.get("/api/get-sweat-shirts").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.sweat_shirts = result;
        })
        this.$http.get("/api/get-kurtas").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.kurtas = result;
        })
        this.$http.get("/api/get-jeans").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.jeans = result;
        })
        this.$http.get("/api/get-joggers").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.joggers = result;
        })
        this.$http.get("/api/get-caperies").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.caperies = result;
        })
        this.$http.get("/api/get-shorts").then(res =>{
          console.log(res.body);
          let result = res.body;
          let length = result.length;
          for(let i=0;i<length;i++){
            result[i].pid = parseInt(result[i].pid);
            result[i].pprice = parseFloat(result[i].pprice);
            result[i].pstock = parseInt(result[i].pstock);
            result[i].stock_s =  parseInt(result[i].stock_s);
            result[i].stock_m =  parseInt(result[i].stock_m);
            result[i].stock_l =  parseInt(result[i].stock_l);
            result[i].stock_xl =  parseInt(result[i].stock_xl);
            result[i].stock_2xl =  parseInt(result[i].stock_2xl);
            result[i].stock_3xl =  parseInt(result[i].stock_3xl);
            result[i].stock_4xl =  parseInt(result[i].stock_4xl);
            result[i].stock_5xl =  parseInt(result[i].stock_5xl);
            result[i].colors = JSON.parse(result[i].colors);
            result[i].sizes = JSON.parse(result[i].sizes);
            result[i].images = JSON.parse(result[i].images);

          }
          this.shorts = result;
        })
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
				if(this.all_products[i].pstock>no_of_curr_item){
					cart_checker[this.all_products[i].pid-1]=true;
          console.log("in true");
        }
				else{
					cart_checker[this.all_products[i].pid-1]=false;
          console.log("in false");
        }
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
                console.log(this.all_products);
                let pro_main = this.all_products.find(element=>element.pid==pro.pid);
                console.log(pro_main);
                if(pro_main){
                  let the_product = this[pro_main.t_name].find(element=>element.pid==pro_main.pid);
                    if(the_product){
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
              } 
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
    methods: {
      tab_closed(){
      if(localStorage.getItem('cb_cart')&&localStorage.getItem('cb_cart')!=""){
        
        var obj = {
            uid : parseInt(localStorage.getItem('cb_uid')),
            cart_contents : JSON.parse(localStorage.getItem('cb_cart')),
          };
          console.log(obj);
        this.$http.post("/api/update-cart", obj).then(res => {
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
         this.$http.post("/api/update-cart", obj).then(res => {
                                    console.log(res.body);
                                    
                                   });
       }
       localStorage.removeItem('cb_uid');
       localStorage.removeItem('cb_w_number');
       localStorage.removeItem('cb_number');
      location.replace("/flyingwear#/");
      location.reload();
     }
    }
}).$mount('#app');