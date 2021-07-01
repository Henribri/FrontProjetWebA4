export const state = () => ({
    panier:{
      articles:[],
}})
 

  export const mutations = {
    addPanier(state,panier) {
      state.panier=panier
      
    },
    removePanier(state) {
      state.panier={
          articles:[],
    }
    },
    addArticle(state, param){
        //state.paniers[state.paniers.indexOf(param.panier)].articles.push(param.article)
        state.panier.articles.push(param.article)
    },
    removeArticle(state, article){
        state.panier.articles.splice(state.panier.articles.indexOf(article),1)
    }
  }

export const getters = {
    paniers: state => state.paniers

}