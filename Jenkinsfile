pipeline {
    agent {
        docker {
            image 'cypress/browsers'  
            args '--entrypoint=""'
        }
    }
     
    
    stages {
        stage('Check npm Version') {
            steps {
                sh 'npm --version'
            }
        }
        stage('check cypress version') {
            steps {
               sh 'npx cypress --version '
            }
        }
    }
}
