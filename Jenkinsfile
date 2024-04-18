pipeline {
    agent any
    
    environment {
        DOCKER_COMPOSE_VERSION = "1.29.2"  
        MONGODB_URL = "mongodb://mongo:27017/db_clients"  
        DOCKERHUB_USERNAME = credentials('hani016')  
        DOCKERHUB_PASSWORD = credentials('hanihani00216')  
        environment {
    DOCKERHUB_REPOS = 'hani0216/mongo'
    ANOTHER_REPO = 'hani0216/node'
}

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
                    for (repo in env.DOCKERHUB_REPOS) {
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
                    for (repo in env.DOCKERHUB_REPOS) {
                        // Se connecter à DockerHub
                        sh "docker login -u $hani0216 -p $hanihani00216"
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
        node {
            sh 'docker-compose -f docker-compose.yml down'
        }
    }
}

}
