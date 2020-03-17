export default{
    state:{
       departOption:null
    },
    mutations: {
        setDepartOption (state, data) {
          console.dir(data)
          console.dir(state)
          console.dir("1")
            state.departOption = data;
            localStorage.setItem('departOption_sel', JSON.stringify(data))
          },
    },
    getters: {
        getDepartOption: (state) => {
          console.dir("2")
            const cache = localStorage.getItem('departOption_sel');
            let cacheData = null;
            if (cache) {
              cacheData = JSON.parse(cache)
            }
            if (state.departOption) {
              return state.departOption
            } else {
              return cacheData
            }
          },
    },
    actions: {
        departOption(context){
          console.dir("3")
            this.$http.post(services.param.getDepart).then(res => {
                if (res && res.data.result) {
                    console.dir(res.data)
                   let tmp = [];
                //   for (let item of res.data.result) {
                //     tmp.push({
                //       name: item.provinceDesc,
                //       value: item.provinceCode
                //     })
                //   }
                  context.commit('setDepartOption', tmp);
                }
              });
        }
    }
}