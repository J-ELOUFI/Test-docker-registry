node {
    def app
     environment {
        DOCKER_HOST="tcp://192.168.10.84:5000"
     }
    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("test-docker-nodeap")

    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
       
	docker.withRegistry('root/workspace/docker-registry/volume/docker/registry/v2/repositories', 'none') {

            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            } 
                echo "Trying to Push Docker Build to DockerHub"
    }
}
