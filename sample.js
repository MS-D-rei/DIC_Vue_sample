// const headerTitle = Vue.createApp({
//   data(){
//     return {
//       header: 'Adding User form'
//     }
//   }
// })
// .mount('#header-title')

const AddingUserForm = Vue.createApp({
  data() {
    return {
      name: 'John Smith',
      course: 'Web engineer',
      period: '202111',
      users: [
        { id: 1, name: 'monster', course: 'web engineer', period: '202111' },
        { id: 2, name: 'archer', course: 'ML engineer', period: '202109' },
        { id: 3, name: 'knight', course: 'web engineer', period: '202111' }
      ]
    }
  },
  methods: {
    addUser() {
      this.users.push({id: this.users.length + 1, name: this.name, course: this.course, period: this.period})
      this.name = ''
      this.course = ''
      this.period = ''
    }
  }
}).mount('#adding-user-form')