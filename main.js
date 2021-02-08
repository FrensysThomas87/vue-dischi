new Vue({
 el: '#app',
 data:{
   disks:[],

 },
 mounted(){
   const self = this;

     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then(function(resp){
       self.disks = resp.data.response;
       console.log('Dischi ', self.disks);
     });



 }
});
Vue.config.devtools = true;
