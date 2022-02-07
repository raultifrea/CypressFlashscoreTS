export class FootballPage{

    my_leagues_locator = '#my-leagues-list'
    all_leagues_locator = '#category-left-menu'
    all_league_more_button_locator = ".lmc__itemMore"
    football_header_primary_colour = 'rgb(8, 95, 0)'
    england_locator = "[title='Anglia']"
    algeria_locator = "[title='Algeria']"
    england_premier_league_locator = "[title='Premier League']"
    algeria_divizia_1_locator = "[title='Divizia 1']"
    login_panel_locator = '#user-menu'
    login_window_locator = '#lsid-window'
    email_field_locator = '#email'
    password_field_locator = '#passwd'
    login_logout_prompt_locator = '.message'
    login_button_locator = '.loginWindow__button--login'
    login_error_locator = '.err-msg-wrapper'
    logout_button_locator = '#lsid-sign-out'

    login_successful_ui(email: string, password: string){
        this.login_method(email, password)
        cy.get(this.login_logout_prompt_locator).contains('Autentificare cu succes.');
    }

    login_failed_ui(email: string, password: string){
        this.login_method(email, password)
        cy.get(this.login_error_locator).should('have.text','Acest nume de utilizator sau parolă nu există.');
    }

    logout(){
        cy.get(this.login_panel_locator).click()
        cy.get(this.logout_button_locator).click();
    }

    login_method(email: string, password: string){
        cy.get(this.login_panel_locator).click();
        cy.get(this.email_field_locator).type(email);
        cy.get(this.password_field_locator).type(password);
        cy.get(this.login_button_locator).click();
    }

    verify_my_leagues_titles(){
        cy.get(this.my_leagues_locator).find('a').should(($league) => {
            expect($league.eq(0)).to.contain("Premier League");
            expect($league.eq(1)).to.contain("Ligue 1");
            expect($league.eq(2)).to.contain("Bundesliga");
            expect($league.eq(3)).to.contain("Serie A");
            expect($league.eq(4)).to.contain("Liga 1");
            expect($league.eq(5)).to.contain("Liga 2");
            expect($league.eq(6)).to.contain("Cupa");
            expect($league.eq(7)).to.contain("LaLiga");
            expect($league.eq(8)).to.contain("Africa Cupa Naţiunilor")
            expect($league.eq(9)).to.contain("Euro");
            expect($league.eq(10)).to.contain("Liga Campionilor");
            expect($league.eq(11)).to.contain("Europa League");
            expect($league.eq(12)).to.contain("Europa Conference League");
            expect($league.eq(13)).to.contain("UEFA Nations League");
            expect($league.eq(14)).to.contain("Cupa Mondială");
        })
    }

    select_league_from_my_leagues(league: string){
        cy.get(this.my_leagues_locator).contains(league).click();
    }
   
    select_league_from_all_leagues(country: string, league: string){
        cy.get(this.all_league_more_button_locator).click();
        cy.get(this.all_leagues_locator).contains(country).click();
        cy.get(this.all_leagues_locator).contains(league).click();
    }

}