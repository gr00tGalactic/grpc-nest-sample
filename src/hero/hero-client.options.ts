import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';

export const heroClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:3002',
    package: 'hero',
    protoPath: join(__dirname, 'hero.proto'),
  },
};
