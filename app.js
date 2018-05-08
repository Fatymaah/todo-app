var app = new Vue({
  el: '#app',
  data: {
   todos:[
   'My First to do item',
   'My second item'
   ],
   item:'To do items'
  },
  methods:{
  	addTodo() {
  		this.todos.push(this.item)
  		this.item = '';
  	}
  }

})
