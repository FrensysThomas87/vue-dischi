new Vue({
 el: '#app',
 data:{
   disks:[],
   selected:'',

 },
 mounted(){
   const self = this;

     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then(function(resp){
       self.disks = resp.data.response;

     });
   },

   // methods:{ // non funziona
   //   filterByGenere:function(){
   //     this.disks.forEach((element) => {
   //       if(element.genre.toLowerCase() === this.selected.toLowerCase()){
   //         this.visible = true;
   //       }else{
   //         this.visible = false;
   //       }
   //     });
   //   }
   //
   //
   // },

});
Vue.config.devtools = true;
