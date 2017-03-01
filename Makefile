


run:
	docker-compose up -d rabbitmq
	sleep 8
	docker-compose up -d

halt:
		docker-compose stop

build:
	docker-compose build

init:
	docker-machine create muon-demo --driver vagrant
	docker-machine stop muon-demo
	VBoxManage modifyvm "muon-demo" --natpf1 "rabbitmq,tcp,,5672,,5672"
	VBoxManage modifyvm "muon-demo" --natpf1 "rabbitui,tcp,,15672,,15672"
	VBoxManage modifyvm "muon-demo" --natpf1 "proxy,tcp,,8080,,8080"
	docker-machine start  muon-demo
	docker-machine env muon-demo
	eval $(docker-machine env muon-demo)
	docker network create muon
