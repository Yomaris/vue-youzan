import fetch from 'js/fetch.js'
import url from 'js/api.js'
class Cart{
    static add(id){
        return fetch(url.addCart,{
            id,
            number:1
        })
    }
    static reduce(id){
        return fetch(url.reduceCart,{
            id,
            number:1
        })
    }
    static getList(){
    }
    static removeConfirm(id){
        return fetch(url.removeCart,{
            id,
        })
    }
    static edit(){
    }
}
export default Cart