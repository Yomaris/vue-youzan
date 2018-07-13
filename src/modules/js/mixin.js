import Foot from 'components/Foot.vue';
let mixin = {
    filters:{
        currency(price){
            return Number.parseFloat(price).toFixed(2);
        }
    },
    components:{
        Foot
    }
}
export default mixin