export enum HealthStatus {
    Good = 'GOOD',
    NeedMedical = 'NEED_MEDICAL',
    SpecialNeeds = 'SPECIAL_NEEDS'
}

export function getDesc(status: HealthStatus): string {
    switch(status) {
      case HealthStatus.Good:
        return 'In good health';
      case HealthStatus.NeedMedical:
        return 'Needs medical attention';
      case HealthStatus.SpecialNeeds:
        return 'Has special needs';
      default:
        return 'Unknown health status';
    }
  }
  