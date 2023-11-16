pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'cd /opt/web/nextjs-app && docker-compose && docker-compose build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'cd /opt/web/nextjs-app && docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }
}
