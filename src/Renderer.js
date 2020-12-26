import mainUserTemplate from './templates/main-user.handlebars'
import firendsTemplate from './templates/friends.handlebars'
import pokemonTemplate from './templates/pokemon.handlebars'
import quoteTemplate from './templates/quote.handlebars'
import meatTemplate from './templates/meat.handlebars'

export default class Renderer {
    renderUsers(users) {
        let newHTML = mainUserTemplate(users.results[0]);
        $(".user-container").empty().append(newHTML);
    }

    renderFriends(users) {
        let friendsHTML = firendsTemplate({friends: users.results.splice(1)})
        $(".friends-container").empty().append(friendsHTML)
    }

    renderQuote(quoteInfo) {
        let quoteHTML = quoteTemplate(quoteInfo)
        $(".quote-container").empty().append(quoteHTML)
    }

    renderPokemon(pokemonInfo) {
        let pokemonHTML = pokemonTemplate(pokemonInfo)
        $(".pokemon-container").empty().append(pokemonHTML)
    }

    renderMeat(meatText) {
        let meatHTML = meatTemplate({text: meatText})
        $(".meat-container").empty().append(meatHTML)
    }

    render(data){
        this.renderFriends(data.users)
        this.renderUsers(data.users)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }
}
