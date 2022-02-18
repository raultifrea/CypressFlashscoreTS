export class Actions{

    tab_list_locator = "//a[contains(@class,'menuTop__item')]"
    other_sports_tab_locator = '.menuMinority'
    other_sports_panel_locator = '.menuMinority__item'

    select_other_sport(sport: string){
        cy.get(this.other_sports_panel_locator).contains(sport).click();
    }

    open_other_sports_menu(){
        cy.get(this.other_sports_tab_locator).click();
    }
    
}