new Vue({
 el: '#app',
 data:{
   disks:[],
   visible:true,
   selected:'',
   activeIndex: 0,
 },
 mounted(){
   const self = this;

     axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then(function(resp){
       self.disks = resp.data.response;

     });
   },

   methods:{
     filterByGenere:function(){
       this.disks.forEach((element) => {
         if(element.genre.toLowerCase().includes(this.selected.toLowerCase())){
           this.visible = true;
         }else{
           this.visible = false;
         }
       });
     }


   },

});
Vue.config.devtools = true;
