pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Install dependencies') {
            steps {
               bat 'npm install typescript'
            }
        }
        stage('Run tests') {
            steps {
                echo 'Running tests'
                bat 'npx cypress run --spec .\\cypress\\integration\\login\\login_tests.ts'
            }
        }
    }
}