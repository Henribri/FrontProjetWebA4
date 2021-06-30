export const state = () => ({
    panier:{
      articles:[],
}})
 

  export const mutations = {
    addPanier(state,panier) {
      state.panier=panier
      
    },
    removePanier(state, panier) {
      state.paniers.splice(state.paniers.indexOf(panier), 1)
    },
    addArticle(state, param){
        //state.paniers[state.paniers.indexOf(param.panier)].articles.push(param.article)
        state.panier.articles.push(param.article)
    },
    removeArticle(state, panier, article){
        state.paniers.indexOf(panier).splice(state.paniers.indexOf(panier).indexOf(article),1)
    }
  }

export const getters = {
    paniers: state => state.paniers

}