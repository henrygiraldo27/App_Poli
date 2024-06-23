pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/henrygiraldo27/App_Poli.git'
            }
        }

        stage('Usar Docker para Node.js') {
            agent {
                docker {
                    image 'node:16'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            stages {
                stage('Instalar Dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('Ejecutar Pruebas Unitarias') {
                    steps {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Construir y Desplegar') {
            steps {
                script {
                    // Parar y remover los contenedores antiguos
                    sh 'docker-compose down || true'  // Agrega "|| true" para evitar errores si no hay contenedores corriendo
                    // Construir y desplegar nuevos contenedores
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            // Publicar los resultados de las pruebas
            junit 'test-results.xml'
        }
        success {
            echo 'Las pruebas unitarias se ejecutaron correctamente.'
        }
        failure {
            echo 'Las pruebas unitarias fallaron.'
        }
    }
}
