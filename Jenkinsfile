pipeline {
    agent {
        docker {
            image 'node:16' // Usa una imagen de Node.js con npm preinstalado
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Para usar Docker dentro del contenedor
        }
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/henrygiraldo27/App_Poli.git'
            }
        }

        stage('Instalar Dependencias') {
            steps {
                script {
                    // Instalar las dependencias de Node.js
                    sh 'npm install'
                }
            }
        }

        stage('Ejecutar Pruebas Unitarias') {
            steps {
                script {
                    // Ejecutar las pruebas unitarias
                    sh 'npm test'
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
