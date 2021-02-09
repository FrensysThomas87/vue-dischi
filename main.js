new Vue({
 el: '#app',
 data:{
   disks:[],
   selected:'',
   musicGenre:[],

 },

 methods:{
   filterByGenere:function(dischi){
     return dischi.genre.toLowerCase() === this.selected.toLowerCase() || this.selected === '';
   },

   fillSelect:function(){
     this.disks.forEach((element) => {
       if(!this.musicGenre.includes(element.genre)){
         this.musicGenre.push(element.genre);

       }

     });
   }

 },


 mounted(){
   const self = this;

   axios.get('https://flynn.boolean.careers/exercises/api/array/music')
     .then(function(resp){
       self.disks = resp.data.response;
     });


   },



});
Vue.config.devtools = true;
