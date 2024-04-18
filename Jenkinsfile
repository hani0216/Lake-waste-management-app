pipeline {
    agent any
    
    environment {
        DOCKER_COMPOSE_VERSION = "1.29.2"  
        MONGODB_URL = "mongodb://mongo:27017/db_clients"  
        DOCKERHUB_USERNAME = credentials('hani016')  
        DOCKERHUB_PASSWORD = credentials('hanihani00216')  
        DOCKERHUB_REPOS = "hani0216/mongo hani0216/node"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Installer les dépendances et construire l'application
                sh 'npm install'
                sh 'npm run build'
                // Construire et taguer les images Docker pour chaque référentiel
                script {
                    for (repo in env.DOCKERHUB_REPOS.split(' ')) {
                        sh "docker build -t $repo ."
                    }
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    for (repo in env.DOCKERHUB_REPOS.split(' ')) {
                        // Se connecter à DockerHub
                        sh "docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                        // Pousser l'image Docker vers DockerHub
                        sh "docker push $repo"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh "docker-compose -f docker-compose.yml up -d"
                }
            }
        }
    }

    post {
        always {
                sh 'docker-compose -f docker-compose.yml down'
        }
    }
}
