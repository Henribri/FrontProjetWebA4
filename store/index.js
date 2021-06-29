export const state = () => ({
    commandes:[{
        commande: {
            restorant_name:'',
            validated : false,
            articles:[]
        },
    }],
    user:{

    }

  })

  export const mutations = {
    addCommand(state,commande) {
      state.commandes.push({
            commande
      })
    },
    removeCommand(state, commande) {
      state.commandes.splice(state.commandes.indexOf(commande), 1)
    },
    addArticle(state, commande,article){
        state.commandes.indexOf(commande).articles.push({article})
    },
    removeArticle(state, commande, article){
        state.commandes.indexOf(commande).splice(state.commandes.indexOf(commande).indexOf(article),1)
    }

  }

export const getters = {
    commandes: state => state.commandes

}