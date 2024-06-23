pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/henrygiraldo27/App_Poli.git'
            }
        }

        stage('Instalar dependencias y Ejecutar Pruebas Unitarias') {
            steps {
                script {
                    // Cambiar al directorio del proyecto donde está package.json
                    dir('api/') {
                        // Instalar dependencias
                        sh 'npm install'
                        // Ejecutar las pruebas unitarias
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
