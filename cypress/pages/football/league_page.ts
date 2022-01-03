export class LeaguePage{

    todays_matches_list_locator = '.leagues--live'
    results_matches_list_locator = '.summary-results'
    fixtures_matches_list_locator = '.summary-fixtures'
    standings_list_locator = '#tournament-table-tabs-and-content'
    standings_tabs_locator = '.tabs__group'
    standings_subtabs_locator = '.subTabs__group'
    standings_table_locator = '.tableWrapper'
    standings_entries_locator = '.ui-table__row'
    standings_team_name_locator = '.tableCellParticipant__name'
    matches_locator = '.event__match--twoLine'

    select_first_match(){
        cy.get(this.todays_matches_list_locator).find(this.matches_locator).first().click();
    }

    select_first_result(){
        cy.get(this.results_matches_list_locator).find(this.matches_locator).first().click();
    }

    select_first_fixture(){
        cy.get(this.fixtures_matches_list_locator).find(this.matches_locator).first().click();
    }

    select_standings_leader(){
        cy.get(this.standings_list_locator).find(this.standings_team_name_locator).first().click();
    }

    select_standings_red_lantern(){
        cy.get(this.standings_list_locator).find(this.standings_team_name_locator).last().click();
    }

    select_team_by_name(name: string){
        cy.get(this.standings_table_locator).contains(name).click();
    }

    // switch_to_window(){
    //     let newUrl = '';
    //     cy.window().then((win) =>{
    //         cy.stub(win, 'open').as('windowOpen').callsFake(url =>{
    //             newUrl = url;
    //         });
    //     })
    //     this.select_first_match();
    //     cy.get('@windowOpen').should('be.called');
    //     cy.visit(newUrl);
    // }
}