import { Actions } from "./actions";

const actions = new Actions()

export class Verifications{

    root_locator = 'body'
    header_locator = '.breadcrumb'
    button_day_locator = '.button__day'
    button_night_locator = '.button__night'
    my_teams_locator = '#my-teams-list'
    header_logo_locator = '.header__content'
    top_ad_banner_locator = "//*[contains(@id,'box_over_content')]"
    competition_name_locator = ".teamHeader__name"
    
    verify_color_of_header(sport: string){
        cy.get(this.header_logo_locator).invoke('css','background-color').should('equal', sport);
    }

    verify_tab_selected(tab: string){
        cy.xpath(actions.tab_list_locator).contains(tab).parent().should('have.class', 'menuTop__item--active')
    }

    verify_ad_display(){
        cy.xpath(this.top_ad_banner_locator).should('be.visible')
    }

    verify_page_is_loaded(page: string){
        cy.get(this.header_locator).should('have.text', page);
    }

    verify_day_mode(){
        cy.get(this.root_locator).then(($body) => {
            if ($body.hasClass('theme--dark')) {
                cy.get(this.button_day_locator).click();
            } else {
                //pass
            }
        })
        cy.get(this.root_locator).should('not.have.class', 'theme--dark');
    }

    verify_night_mode(){
        cy.get(this.root_locator).then(($body) => {
            if ($body.hasClass('theme--dark')) {
                //pass
            } else {
                cy.get(this.button_night_locator).click();
            }
            cy.get(this.root_locator).should('have.class', 'theme--dark');
        })
        
    }

    verify_my_teams_entry(){
        cy.get(this.my_teams_locator).should('have.text', 'Adaugă echipa');
    }

    verify_url(url: string){
        cy.url().should('eq', url);
    }

    verify_url_content(content: string){
        cy.url().should('include', content.toLowerCase());
    }

    verify_header_name(name: string){
        cy.get(this.competition_name_locator).contains(name);
    }
}