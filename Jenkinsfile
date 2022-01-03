pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Run tests') {
            steps {
                echo 'Running tests'
                bat 'npx cypress run --spec "cypress/integration/football/*"'
            }
        }
    }
}