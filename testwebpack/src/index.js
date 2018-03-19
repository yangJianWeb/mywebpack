import  Vue from 'vue'
import App from './app.vue'
import './assets/styles/test.css'
import './assets/images/bg.jpeg'


const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h) => h(App)
}).$mount(root)


function foo() {
    console.log('i am a te是打算大所多st index.js')
}

foo()