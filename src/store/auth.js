export default {
    actions:{
        async login({commit},{email,password}) {
            if(email === 'test@email.com' && password === 'test123'){
                localStorage.user = email
                await this.$router.push('/')
            } else {
                commit('setError', 'Some text with error')
            }
        },
        async logout(){
            localStorage.removeItem('user')
        }
    }
}
