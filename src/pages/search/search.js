import 'css/common.css'
import './search.css'
import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';
import qs from 'qs';
import mixin from 'js/mixin.js';
import Velocity from 'velocity-animate'
let {keyword,id} = qs.parse(location.search.substr(1))
new Vue({
    el:'.container',
    data:{
        searchList:null,
        keyword,
        isShow:false,
        allLoaded:false,
    },
    created(){
        this.getSearchList();
    },
    methods:{
        getSearchList(){
            axios.post(url.search,{keyword,id}).then(res => {
                this.searchList = res.data.lists;
                }).catch(error => {
                    console.log(error);
                })
        },
        move(){
            if(document.scrollingElement.scrollTop > 100){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        toTop(){
            Velocity(document.scrollingElement,'scroll',{duration:1000})
        }
    },
    mixins:[mixin]
})