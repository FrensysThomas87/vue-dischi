new Vue({
 el: '#app',
 data:{
   disks:[],
   visible:false,
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
    filterByGenre:function(){
      return this.disks.filter((element)=>{
        console.log(this.disks[this.activeIndex].genre)
        return element.genre[this.activeIndex].match(this.selected);

      })
    }
   },

});
Vue.config.devtools = true;
