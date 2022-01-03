export class TennisPage{

    my_leagues_locator = '#my-leagues-list'
    tennis_header_primary_colour = 'rgb(149, 115, 0)'

    verify_my_leagues_titles(){
        cy.get(this.my_leagues_locator).find('a').should(($league) => {
            expect($league.eq(0)).to.contain("Australian Open");
            expect($league.eq(1)).to.contain("French Open");
            expect($league.eq(2)).to.contain("US Open");
            expect($league.eq(3)).to.contain("Wimbledon");
            expect($league.eq(4)).to.contain("Australian Open");
            expect($league.eq(5)).to.contain("French Open");
            expect($league.eq(6)).to.contain("US Open");
            expect($league.eq(7)).to.contain("Wimbledon");
        })
    }
}