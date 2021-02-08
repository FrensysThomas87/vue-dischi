new Vue({
 el: '#app',
 data:{
   disks:[],

   selected:''
 },
 mounted(){
   const self = this;

     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then(function(resp){
       self.disks = resp.data.response;

     });
   },

   methods:{

   },

});
Vue.config.devtools = true;
