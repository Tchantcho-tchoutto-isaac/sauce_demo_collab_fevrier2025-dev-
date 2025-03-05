pipeline {
    agent {
        docker {
            image 'cypress/included '  
            args '--entrypoint=""'
        }
    }
     
    
    stages {
        stage('Check npm Version') {
            steps {
                sh 'npm --version'
            }
        }
        stage('check cypress version ') {
            steps {
               sh 'npm --version'
            }
        }
    }
}
