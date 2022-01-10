import groovy.json.JsonSlurper

pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
               echo 'Installing Typescript'
               bat 'npm install typescript'
               echo 'Installing Allure'
               bat 'npm i -D @shelex/cypress-allure-plugin'
            }
        }
        stage('Run tests') {
            steps {
                echo 'Running tests'
                script {
                    bat 'npx cypress run --spec .\\cypress\\integration\\football\\football_tests.ts'
                }
            }
        }
    }
    post {
        always {
            print('Generating Results')
            allure results: [[path: 'allure-results']] 
        }
    }

}