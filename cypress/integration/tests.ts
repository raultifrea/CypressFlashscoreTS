import { CricketPage } from "../pages/cricket_page";
import { FootballPage } from "../pages/football/football_page";
import { LeaguePage } from "../pages/football/league_page";
import { TeamPage } from "../pages/football/team_page";
import { TennisPage } from "../pages/tennis_page";
import { Actions } from "../pages/utils/actions";
import { Verifications } from "../pages/utils/verifications";

const football_page = new FootballPage()
const cricket_page = new CricketPage()
const verifications = new Verifications()
const actions = new Actions()
const tennis_page = new TennisPage()
const league_page = new LeaguePage()
const team_page = new TeamPage()

beforeEach(()=>{
    actions.navigate("https://www.flashscore.ro/");
    actions.accept_disclaimer();
})

describe('Football tests', function(){
    it('select football tab', function(){
        actions.select_tab('Fotbal');
        verifications.verify_url("https://www.flashscore.ro/");
        verifications.verify_tab_selected('Fotbal');
        verifications.verify_color_of_header(football_page.football_header_primary_colour);
    })

    it('verify names of my football leagues', ()=>{
        actions.select_tab('Fotbal');
        football_page.verify_my_leagues_titles();
    })

    it('verify my football teams entry', ()=>{
        actions.select_tab("Fotbal");
        verifications.verify_my_teams_entry();
    })

    it('select England Premier League', ()=>{
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        verifications.verify_url('https://www.flashscore.ro/fotbal/anglia/premier-league/');
        verifications.verify_header_name('Premier League');
    })
    
    it('select Algeria Divizia 1', ()=>{
        actions.select_tab('Fotbal');
        football_page.select_algeria_divizia_1();
        verifications.verify_url('https://www.flashscore.ro/fotbal/algeria/divizia-1/');
        verifications.verify_header_name('Divizia 1');
    })
    
    it('select first England Premier League match of today', ()=>{
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_first_match();
    })

    it('select first England Premier League result', ()=>{
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_first_result();
    })

    it('select first England Premier League fixture', ()=>{
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_first_fixture();
    })

    it('select first position England Premier League team', ()=>{
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_standings_leader();
    })

    it('select last position England Premier League team', ()=>{
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_standings_red_lantern();
    })

    it('select England Premier League team by name', ()=>{
        let name = 'Arsenal'
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_team_by_name(name);
        verifications.verify_url_content(name);
        verifications.verify_header_name(name);
    })

    it('get team streak counter', ()=>{
        let name = 'Arsenal';
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_team_by_name(name);
        verifications.verify_header_name(name);
        team_page.get_win_result_record();
    })

    it('results value verification', ()=>{
        let name = 'Chelsea';
        actions.select_tab('Fotbal');
        football_page.select_england_premier_league();
        league_page.select_team_by_name(name);
        verifications.verify_header_name(name);
        team_page.verify_result_values();
    })

    })

describe('Other sports tests', ()=>{

    it('select tennis tab', function(){
        actions.select_tab('Tenis');
        verifications.verify_url("https://www.flashscore.ro/tenis/");
        verifications.verify_tab_selected('Tenis');
        verifications.verify_color_of_header(tennis_page.tennis_header_primary_colour);
    })

    it('verify names of my tennis leagues', ()=>{
        actions.select_tab('Tenis');
        tennis_page.verify_my_leagues_titles();
    })

    it('verify my tennis teams entry', ()=>{
        actions.select_tab("Tenis");
        verifications.verify_my_teams_entry();
    })

    it('select Crichet tab', ()=> {
        let name = 'Crichet'
        actions.open_other_sports_menu();
        actions.select_other_sport(name);
        verifications.verify_url("https://www.flashscore.ro/crichet/");
        verifications.verify_page_is_loaded(name);
        verifications.verify_color_of_header(cricket_page.cricket_header_primary_color);
    })
})

describe("General tests", ()=>{

    it('verify top ad content', ()=>{
        verifications.verify_ad_display();
    })
    
    it('check day theme', ()=>{
        verifications.verify_day_mode();
    })
    
    it('check night theme', ()=>{
        verifications.verify_night_mode();
    })
})