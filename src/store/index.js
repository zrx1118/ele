import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

//Vuex中的数据变量
const state={
    //购物车商品列表
    cartProductList:[]
}

//同步处理
const mutations={
    //点击增加按钮的逻辑
    UP(state, it){
        //用来判断添加的商品是否存在的标识
        let isExist=false
        //存在的话，把当前商品对象数量+1
        for(let temp of state.cartProductList){
            if(temp.id==it.item_id){
                //把标识改成true
                isExist=true
                temp.count++
                //break的原因是找到即结束循环，减少系统不必要的循环操作
                break;
            }
        }

        //如果不存在，则是新添加的商品
        if(!isExist){
            //设计订单详情页商品对象
            let cartProduct={
                id:it.item_id,
                name:it.name,
                price:it.specfoods[0].price,
                count:1
            }
            state.cartProductList.push(cartProduct)
        }
    },
    //点击减少按钮的逻辑
    DOWN(state, it){
        for(let item of state.cartProductList){
            if(item.id==it.item_id){
                if(item.count>0){
                    it.count--
                }
                break;
            }
        }
    }
}

//异步处理
const actions={
    up({ commit }, item){
        commit('UP', item)
    },
    down({ commit }, item){
        commit('DOWN', item)
    }
}

const getters={
    //对state里面的数据进行处理，返回到要渲染的页面
    //获取商品总数
    totalcount(state){
        let resultcount=0
        for(let item of state.cartProductList){
            resultcount+=item.count
        }
    },
    //获取商品总价格
    totalprice(state){
        let resultprice=0
        for(let item of state.cartProductList){
            resultprice+=item.count * item.price
        }
    }

}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})