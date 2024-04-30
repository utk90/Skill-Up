import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader'

const PROTO_PATH = "./customers.proto";

const pacakgeDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const customersProto = grpc.loadPackageDefinition(pacakgeDefinition);

const server = new grpc.Server();

const customers = [{
    id: 'asdsad',
    name: 'Chirag Goel',
    age: 22,
    address: 'Banglore'
},
{
    id: 'rerasfa',
    name: 'Akshay Saini',
    age: 22,
    address: 'UK'
}]

server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers });
    },
    get: (call, callback) => {
        let customer = customers.find(n => n.id === call.request.id);

        if (customer) {
            callback(null, customer);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    insert: (call, callback) => {
        let customer = call.request;
        customer.id = Math.random(); // prefer to use uuidv4
        customers.push(customer);
        callback(null, customer);
    },
    update: (call, callback) => {
        let existingCustomer = customers.find(n => n.id === call.request.id);

        if (existingCustomer) {
            existingCustomer.name = call.request.name;
            existingCustomer.age = call.request.age;
            existingCustomer.address = call.request.address;
            callback(null, existingCustomer);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    remove: (call, callback) => {
        let exisitingCustomerIndex = customers.findIndex(n => n.id === call.request.id);

        if (exisitingCustomerIndex !== -1) {
            customers.splice(exisitingCustomerIndex, 1);
            callback(null, {});
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    }
})

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(`Error starting gRPC server: ${err}`)
    } else {
        server.start();
        console.log(`gRPC server is listening on ${port}`)
    }
});


