console.log('hello')
// const app = Vue.createApp({
//     //data, functions
//     template: '<h2>i am the h2</h2>'
// });

const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            title: 'The final empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: 'book1', author: 'author1', img: 'assets/1.jpg', isFav: true},
                {title: 'book2', author: 'author2', img: 'assets/2.jpg', isFav: false},
                {title: 'book3', author: 'author3', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        changeTitle(title) {
            // console.log('you click me')
            // this.title = 'world of vue'
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    }
})

app.mount('#app')