import { Url } from "url";

let url = {
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    search:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    addCart:'/cart/add',
    updateCart:'/cart/update',
    cartList:'/cart/list',
    reduceCart:'/cart/reduce',
    removeCart:'/cart/remove',
    mrremoveCart:'/cart/mrremove',
    addressLists:'/address/list',
    addressAdd:'/address/add',
    addressRemove:'/address/remove',
    addressUpdate:'/address/update',
    addressSetDefault:'/address/setDefault'
}
let host = 'http://rap2api.taobao.org/app/mock/7058'
for (let key in url) {
    if(url.hasOwnProperty(key)){
        url[key] = host +url [key]
    }
    
}



export default url