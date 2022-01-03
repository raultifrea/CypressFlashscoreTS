export class TeamPage{

    team_streak_locator = '.wld'
    team_today_matches_locator = '.event--live'
    team_results_locator = "//section[contains(@class,'event--summary')][2]"
    team_transfers_locator = '.event--static'

    get_win_result_record(){
        cy.wait(1000);
        cy.xpath(this.team_results_locator).find(this.team_streak_locator).should('have.length', 10);
    }

    verify_result_values(){
        cy.wait(1000);
        cy.spy(console, 'log');
        const values = ['V', 'E', 'Î'];
        cy.xpath(this.team_results_locator).find(this.team_streak_locator).each(($value)=>{
            console.log($value.text());
            expect($value.text()).oneOf(values);
        })
        // same as:
        // cy.xpath(this.team_results_locator).find(this.team_streak_locator).then(($value)=>{
        //     for(let result of $value.text()){
        //         expect(result).oneOf(values);
        //     }
        // })
    }

}