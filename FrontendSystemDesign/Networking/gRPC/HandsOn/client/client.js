import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader'

const PROTO_PATH = "./customers.proto";

const pacakgeDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const CustomerService = grpc.loadPackageDefinition(pacakgeDefinition).CustomerService;

export const client = new CustomerService(
    "127.0.0.1:30043", 
    grpc.credentials.createInsecure()
)