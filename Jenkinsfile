pipeline{
    agent{
        docker{
            image 'cypress/browsers'
            args '--entrypoint=""'
        }
    }
    stages{
        stage("verifier que npm fonctionne"){
            steps{
                sh 'npm --version'
            }
        }
         stage("verifier la version de cypress"){
            steps{
                sh 'npx cypress --version'
            }
        }
        stage("installer les dependance"){
            steps {
                sh 'npm install'
            }
        }

        

        stage("Executer les test"){
            steps{
                sh 'npx cypress run'
            }
        } 
        stage("instalation du report"){
            steps{
                sh 'npm init npm i --save-dev cypress-mochawesome-reporter'
            }

        }

        post{
        always {
            archiveArtifacts artifacts: 'cypress/reports//.', followSymlinks: false
        }
    }
    }
}