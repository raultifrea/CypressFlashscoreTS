pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
               bat 'npm install typescript'
            }
        }
        stage('Run tests') {
            steps {
                echo 'Running tests'
                bat 'npx cypress run --spec .\\cypress\\integration\\${TESTS}'
            }
        }
    }
}