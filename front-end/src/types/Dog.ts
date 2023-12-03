import { HealthStatus } from '../other/HealthStatus';

export interface Dog {
  id: string;
  name: string;
  age: string;
  breed: string;
  description: string;
  healthStatus: HealthStatus;
  imageName?: string;
}
