pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/henrygiraldo27/App_Poli.git'
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
        success {
            echo 'Despliegue completado. Ejecutando Job de pruebas.'
            build job: 'Pruebas Unitarias', wait: false
        }
        failure {
            echo 'Deploy Falló.'
        }
    }
}
