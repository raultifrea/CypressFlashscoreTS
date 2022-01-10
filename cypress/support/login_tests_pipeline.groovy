import groovy.json.JsonSlurper

pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
               echo 'Installing Typescript'
               bat 'npm install typescript'
            }
        }
        stage('Run tests') {
            steps {
                echo 'Running tests'
                script {
                    bat 'npx cypress run --spec .\\cypress\\integration\\login\\login_tests.ts'
                }
            }
        }
    }
    post {
        always {
            print('Generating Results')
            allure results: [[path: './cypress/results']] 
        }
    }

}