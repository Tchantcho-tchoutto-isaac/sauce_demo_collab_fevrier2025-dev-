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
        stage("installer les dependance"){
            steps {
                sh 'npx cypress install'
            }
        }

        

        stage("Executer les test"){
            steps{
                sh 'npx cypress run'
            }
        } 

      
    }
      post{
        always {
            archiveArtifacts artifacts: 'cypress/reports//.', followSymlinks: false
        }
    }
}